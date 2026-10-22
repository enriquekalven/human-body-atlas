#!/usr/bin/env bash
# Downloads the BodyParts3D 4.0 source data used by tools/build-models.mjs into tools/raw/
# (git-ignored, ~210 MB). Source: The Database Center for Life Science (DBCLS), CC BY 4.0.
# https://dbarchive.biosciencedbc.jp/en/bodyparts3d/download.html
set -euo pipefail

BASE="https://dbarchive.biosciencedbc.jp/data/bodyparts3d/LATEST"
FILES=(
  isa_BP3D_4.0_obj_99.zip
  partof_BP3D_4.0_obj_99.zip
  README_e.html
  isa_parts_list_e.txt
  isa_element_parts.txt
  isa_inclusion_relation_list.txt
  partof_parts_list_e.txt
  partof_element_parts.txt
  partof_inclusion_relation_list.txt
)

cd "$(dirname "$0")"
mkdir -p raw
cd raw
for f in "${FILES[@]}"; do
  if [ ! -s "$f" ]; then
    echo "Downloading $f"
    curl --fail --location --proto '=https' --tlsv1.2 --retry 3 -o "$f.part" "$BASE/$f"
    mv "$f.part" "$f"
  fi
done
[ -d isa/isa_BP3D_4.0_obj_99 ] || { mkdir -p isa && unzip -q -o isa_BP3D_4.0_obj_99.zip -d isa; }
[ -d partof/partof_BP3D_4.0_obj_99 ] || { mkdir -p partof && unzip -q -o partof_BP3D_4.0_obj_99.zip -d partof; }

# NIH HuBMAP Human Reference Atlas (Visible Human Female 3D reference organs, CC BY 4.0)
HRA_BASE="https://cdn.humanatlas.io/digital-objects/ref-organ"
HRA_FILES=(
  "uterus-female/v1.2/assets/3d-vh-f-uterus.glb"
  "ovary-female-left/v1.3/assets/3d-vh-f-ovary-l.glb"
  "ovary-female-right/v1.3/assets/3d-vh-f-ovary-r.glb"
  "fallopian-tube-female-left/v1.2/assets/3d-vh-f-fallopian-tube-l.glb"
  "fallopian-tube-female-right/v1.2/assets/3d-vh-f-fallopian-tube-r.glb"
  "mammary-gland-female-left/v1.1/assets/3d-vh-f-mammary-gland-l.glb"
  "mammary-gland-female-right/v1.1/assets/3d-vh-f-mammary-gland-r.glb"
)
for path in "${HRA_FILES[@]}"; do
  out="$(basename "$path")"
  if [ ! -s "$out" ]; then
    echo "Downloading $out (HuBMAP HRA)"
    curl --fail --location --proto '=https' --tlsv1.2 --retry 3 -o "$out.part" "$HRA_BASE/$path"
    mv "$out.part" "$out"
  fi
done
echo "BodyParts3D + HuBMAP HRA female reference data ready in tools/raw/"

