#!/usr/bin/env python3
"""
Local development server for Human Body 3D Atlas.

Security notes:
- Binds to 127.0.0.1 only (never 0.0.0.0).
- Serves an allowlist of public assets (index.html, styles.css, dist/, models/); everything else in
  the project folder (tools/, node_modules/, raw dataset downloads, this file) returns 404, and
  directory listings are never produced.
- Sends strict security headers (CSP without inline scripts, nosniff, same-origin framing only,
  Permissions-Policy).
"""

import http.server
import os
import posixpath
import socketserver
import urllib.parse

HOST = "127.0.0.1"
PORT = int(os.environ.get("PORT", "8094"))
WEB_ROOT = os.path.dirname(os.path.abspath(__file__))

ALLOWED_FILES = {"/", "/index.html", "/styles.css"}
ALLOWED_PREFIXES = ("/dist/", "/models/", "/assets/")


def is_public(raw_path: str) -> bool:
    path = urllib.parse.unquote(urllib.parse.urlsplit(raw_path).path)
    if "\x00" in path or "\\" in path:
        return False
    norm = posixpath.normpath(path)
    if path.endswith("/") and norm != "/":
        return False  # directory URL: no listings
    if norm in ALLOWED_FILES:
        return True
    return norm.startswith(ALLOWED_PREFIXES)


class SecureStaticHandler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".glb": "model/gltf-binary",
        ".mp3": "audio/mpeg",
        ".js": "text/javascript",
        ".mjs": "text/javascript",
        ".json": "application/json",
        ".map": "application/json",
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WEB_ROOT, **kwargs)

    def do_GET(self):
        if not is_public(self.path):
            self.send_error(404, "Not found")
            return
        super().do_GET()

    def do_HEAD(self):
        if not is_public(self.path):
            self.send_error(404, "Not found")
            return
        super().do_HEAD()

    def list_directory(self, path):
        self.send_error(404, "Not found")
        return None

    def end_headers(self):
        self.send_header(
            "Content-Security-Policy",
            "default-src 'self'; script-src 'self' https://www.googletagmanager.com; style-src 'self'; img-src 'self' data: https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com; media-src 'self' data: blob:; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com; object-src 'none'; frame-ancestors 'self'; base-uri 'self'; form-action 'none';",
        )
        self.send_header("X-Content-Type-Options", "nosniff")
        # Matches frame-ancestors 'self': the atlas may be iframed by pages on the same origin.
        self.send_header("X-Frame-Options", "SAMEORIGIN")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header(
            "Permissions-Policy", "camera=(), microphone=(), geolocation=()"
        )
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


if __name__ == "__main__":
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer((HOST, PORT), SecureStaticHandler) as httpd:
        print(f"Human Body 3D Atlas running at http://{HOST}:{PORT}")
        httpd.serve_forever()
