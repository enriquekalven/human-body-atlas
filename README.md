# Human Body 3D Atlas (Female & Male)

An interactive, medical-illustration-grade **WebGL 3D Human Anatomy & Hemodynamic Blood Flow Atlas** built on real anatomical 3D meshes from **BodyParts3D 4.0** (DBCLS, CC BY 4.0) and the **NIH HuBMAP Human Reference Atlas — Visible Human Female** (CC BY 4.0), designed for both **Kids / Students** and **Medical / Healthcare Professionals** and ready to embed into any website.

**Live Demo:** [https://human-body-atlas.web.app](https://human-body-atlas.web.app)

## Key Features
- **Female & Male 3D Anatomy Selector (`Female` | `Male` toggle + `?sex=female|male`)**:
  - **Female Body**: Remodeled female external skin surface (`FJ2810F`) with feminine craniofacial proportions (oval jawline/chin, higher malar cheekbones, narrower nasal bridge, softened brow ridge, slender neck without laryngeal prominence), sculpted high-arched female eyebrows (`FJ2812F`), shoulder-skimming bob hairstyle (`FJ2813F`), fuller vermilion lips (`FJ2814F`), smooth mons pubis/perineal floor, bilateral breast contours, and female waist-hip proportions, paired with **11 NIH HuBMAP Visible Human Female 3D reference organs** registered into the pelvic cavity and anterior thoracic wall: **Uterus** (`VHF-UTERUS`), **Uterine cervix** (`VHF-CERVIX`), **Vagina** (`VHF-VAGINA`), **Left & Right Ovaries** (`VHF-OVARY-L/R`), **Left & Right Fallopian tubes** with infundibulum and fimbriae (`VHF-TUBE-L/R`), **Left & Right Mammary gland lobes** (`VHF-MAMMARY-L/R`), and **Left & Right Lactiferous ducts** (`VHF-LACT-L/R`).
  - **Male Body**: Male external skin (`FJ2810`), male eyebrows (`FJ2812`), short male haircut (`FJ2813`), male lips (`FJ2814`), **Prostate**, **Left & Right Testes**, **Epididymides**, **Deferent ducts (vas deferens)**, **Seminal vesicles**, **Corpus cavernosum & spongiosum**, **Glans penis**, **Male urethra**, and testicular/penile vasculature.
  - **Auto-Switching by Search**: Searching for a female-specific organ (e.g., `"uterus"`, `"ovary"`, `"fallopian tube"`, `"mammary gland"`, `"womb"`) automatically switches the body to **Female**; searching for a male-specific organ (e.g., `"prostate"`, `"testis"`, `"vas deferens"`) automatically switches to **Male**.
- **2,228 Named 3D Anatomical Structures & 3,233 Searchable Groups across 6 Layers**:
  - **Skin** (`skin.glb`, 9 parts): Subsurface-scattered dermis (`TISSUE_SSS` wrapped diffuse), procedural pore micro-relief, facial capillary flush, smooth vermilion lips, sculpted eyebrows and hair for both sexes, layered eyeball optics (sclera, radial-fiber iris, dark pupil/lens, refractive wet cornea), and 5 skin-tone presets.
  - **Muscles** (`muscles.glb`, 436 parts): Principal-axis fascicle fiber striations (`fiberDir` vertex attribute) with distinct striated red muscle bellies and collagenous white tendons/ligaments.
  - **Skeleton** (`skeleton.glb`, 305 parts): Cortical/trabecular bone micro-relief, glossy tooth enamel, and translucent hyaline cartilage.
  - **Veins & Blood Flow** (`vessels.glb`, 1,034 parts): Systemic and pulmonary arterial and venous trees with heart-rate-synchronized travelling systolic blood-flow pulses (`30–180 BPM`).
  - **Organs** (`organs.glb`, 299 parts): Beating heart, breathing 5-lobe lungs and diaphragm, liver, gallbladder, stomach, pancreas, spleen, kidneys, urinary bladder, small and large intestines, plus Female (NIH HuBMAP Visible Human Female) and Male reproductive & mammary organs. Selecting any deep internal organ automatically ghosts occluding viscera so the target structure is clearly visible in context.
  - **Brain & Nerves** (`nerves.glb`, 145 parts): Cerebral cortex, cerebellum, brainstem, dural reflections, ventricular system, cranial/peripheral nerves, and reconstructed spinal cord (`RECON-SC`).
- **Dual Educational Modes (`Kids` vs. `Clinical`)**:
  - **Kids Mode**: Friendly explanations, pronunciation guides, fun facts, Web Speech API **Read aloud**, interactive **3D Quiz**, and automatic **modesty garments** (athletic boxer shorts on Male; athletic sports-bra top + boxer shorts on Female) when the skin is opaque.
  - **Clinical Mode**: FMA IDs, Latin nomenclature, arterial supply, venous drainage, innervation, attachments/relations, physiological reference values, clinical pearls, and full unoccluded clinical anatomy.

## Data Sources & Attribution
- **Shared Musculoskeletal, Vascular, Nervous & Visceral Meshes**: [BodyParts3D / Anatomography 4.0](https://lifesciencedb.jp/bp3d/) © Database Center for Life Science (DBCLS), licensed under **CC BY-SA 2.1 JP / CC BY 4.0** (derived from the Taroto adult male CT dataset; shared skeletal, muscular, vascular, nervous, and non-reproductive visceral structures are used for both sexes).
- **Female Reproductive & Mammary 3D Reference Organs**: [NIH HuBMAP Human Reference Atlas — Visible Human Female](https://humanatlas.io/3d-reference-library) (`3d-vh-f-uterus.glb`, `3d-vh-f-ovary-l.glb`, `3d-vh-f-ovary-r.glb`, `3d-vh-f-fallopian-tube-l.glb`, `3d-vh-f-fallopian-tube-r.glb`, `3d-vh-f-mammary-gland-l.glb`, `3d-vh-f-mammary-gland-r.glb`), licensed under **CC BY 4.0**.
- **Reconstructed Surfaces**: The 5 pulmonary lobes (`RECON-RUL`, `RECON-RML`, `RECON-RLL`, `RECON-LUL`, `RECON-LLL`, partitioned from the BodyParts3D costal pleura along the oblique and horizontal fissures) and the spinal cord (`RECON-SC`, traced along the vertebral canal from C1 to L2) are clearly badged in the Inspector panel.

## Running & Building Locally
```bash
# Serve on http://127.0.0.1:8094
python3 server.py

# Rebuild frontend bundle (dist/atlas.js)
npm run build

# Rebuild 3D GLB assets and manifest from raw BodyParts3D + NIH HuBMAP VHF meshes
npm run build:models
```

## Embedding in a Website
### 1. Zero-Build `<iframe>` Embed
```html
<iframe
  src="https://your-domain.example/atlas/?view=organs&sex=female&audience=pro&tone=medium"
  width="100%"
  height="720"
  style="border:0; border-radius:16px;"
  allow="fullscreen"
  title="Human Body 3D Atlas">
</iframe>
```
Supported URL parameters:
- `view`: `skin` | `muscles` | `skeleton` | `circulation` | `organs` | `nervous` | `xray`
- `sex`: `female` | `male`
- `audience`: `kids` | `pro`
- `tone`: `light` | `medium` | `tan` | `brown` | `deep`
- `quality`: `high` | `balanced` | `fast`
- `q`: initial search query to focus and select (e.g., `?q=uterus` or `?q=heart`)
- `labels`: `1` to enable 3D callout labels on load
- `ui`: `0` for canvas-only embed

### 2. Direct ES Module API
```js
import { AnatomyViewer } from './src/viewer/AnatomyViewer.js';

const viewer = new AnatomyViewer(document.querySelector('#canvas'), {
  baseUrl: './models/',
  quality: 'high',
  sex: 'female'
});
await viewer.load();
viewer.setView('organs');
viewer.setSex('female'); // 'female' | 'male'
viewer.start();
```
