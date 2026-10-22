/**
 * Educational content glue between the 3D model (BodyParts3D FMA names) and the curated
 * Kids / Clinical Pro dataset in anatomyData.js, plus:
 *   - generic per-tissue explanations for the ~2,200 structures without curated text,
 *   - everyday-language synonyms so kids can type "thigh bone" or "windpipe",
 *   - a ranked search over every named part and anatomical group.
 */

import { translateAnatomyName, MULTILINGUAL_SYNONYMS } from './i18nAnatomyTranslator.js';

export const CURATED_LINKS = {
  'integumentary-skin': { groups: ['skin'], parts: /^(lip|external ear)$/i },
  brain: { groups: ['brain'] },
  heart: { groups: ['heart'] },
  lungs: { groups: ['right lung', 'left lung'] },
  liver: { groups: ['liver'], parts: /gallbladder|cystic duct|hepatic duct/i },
  stomach: { groups: ['stomach'], parts: /^esophagus$/i },
  kidneys: { parts: /kidney|ureter/i },
  intestines: { groups: ['small intestine', 'large intestine'] },
  aorta: { groups: ['aorta'] },
  'vena-cava': { parts: /vena cava/i },
  'carotid-jugular': { parts: /carotid artery|jugular vein/i },
  'brachial-radial-vessels': { parts: /subclavian (artery|vein)|axillary (artery|vein)|brachial (artery|vein)|radial artery|ulnar artery|cephalic vein|basilic vein|median cubital vein|palmar arch/i },
  'femoral-saphenous-vessels': { parts: /iliac (artery|vein)|femoral (artery|vein)|saphenous|popliteal (artery|vein)|tibial (artery|vein)|dorsalis pedis/i },
  skull: { groups: ['skull'] },
  'rib-cage': { groups: ['rib', 'sternum'], parts: /costal cartilage/i },
  spine: { groups: ['vertebral column'], parts: /intervertebral dis/i },
  'humerus-radius-ulna': { parts: /humerus|\bradius\b|\bulna\b|clavicle|scapula/i },
  pelvis: { groups: ['pelvis'], parts: /hip bone|sacrum|coccyx/i },
  'femur-tibia-fibula': { parts: /femur|patella|tibia|fibula/i },
  'pectoralis-deltoid': { parts: /pectoralis major|deltoid/i },
  'biceps-triceps': { parts: /biceps brachii|triceps brachii|brachialis|brachioradialis/i },
  'rectus-abdominis-diaphragm': { parts: /rectus abdominis|external oblique|internal oblique|transversus abdominis|diaphragm/i },
  'quadriceps-gastrocnemius': { parts: /rectus femoris|vastus|gastrocnemius|soleus|biceps femoris|semitendinosus|semimembranosus|calcaneal tendon/i },
  'spinal-cord-sciatic': { parts: /spinal cord|nerve|ganglion|optic chiasm|optic tract/i },
  'female-reproductive': { groups: ['uterus', 'ovary', 'fallopian tube', 'female genital system'], parts: /uterus|uterine cervix|vagina|ovary|fallopian tube/i },
  'mammary-glands': { groups: ['mammary gland', 'breast'], parts: /mammary gland|lactiferous ducts/i },
  'male-reproductive': { parts: /\b(prostate|testis|epididymis|deferent duct|seminal vesicle|penis)\b/i }
};

// Everyday words -> anatomical search terms.
export const SYNONYMS = {
  'thigh bone': 'femur',
  'shin bone': 'tibia',
  shinbone: 'tibia',
  kneecap: 'patella',
  'knee cap': 'patella',
  collarbone: 'clavicle',
  'collar bone': 'clavicle',
  'shoulder blade': 'scapula',
  breastbone: 'sternum',
  'breast bone': 'sternum',
  backbone: 'vertebral column',
  spine: 'vertebral column',
  ribs: 'rib',
  'rib cage': 'rib',
  jaw: 'mandible',
  jawbone: 'mandible',
  'cheek bone': 'zygomatic',
  cheekbone: 'zygomatic',
  'hip bone': 'hip bone',
  hips: 'pelvis',
  tailbone: 'coccyx',
  'funny bone': 'ulnar',
  'upper arm bone': 'humerus',
  'arm bone': 'humerus',
  'wrist bones': 'scaphoid',
  'heel bone': 'calcaneus',
  heel: 'calcaneus',
  teeth: 'tooth',
  windpipe: 'trachea',
  'voice box': 'larynx',
  'food pipe': 'esophagus',
  gullet: 'esophagus',
  tummy: 'stomach',
  belly: 'stomach',
  guts: 'intestine',
  bowel: 'intestine',
  colon: 'colon',
  'large bowel': 'large intestine',
  'small bowel': 'small intestine',
  pee: 'urinary bladder',
  bladder: 'urinary bladder',
  abs: 'rectus abdominis',
  'six pack': 'rectus abdominis',
  pecs: 'pectoralis major',
  'chest muscle': 'pectoralis major',
  'shoulder muscle': 'deltoid',
  quads: 'rectus femoris',
  quadriceps: 'vastus',
  hamstring: 'biceps femoris',
  hamstrings: 'biceps femoris',
  calf: 'gastrocnemius',
  'calf muscle': 'gastrocnemius',
  butt: 'gluteus maximus',
  glutes: 'gluteus maximus',
  achilles: 'calcaneal tendon',
  'achilles tendon': 'calcaneal tendon',
  traps: 'trapezius',
  lats: 'latissimus dorsi',
  'main artery': 'aorta',
  'neck artery': 'carotid',
  'neck vein': 'jugular',
  veins: 'vein',
  arteries: 'artery',
  'blood vessels': 'artery',
  eye: 'eyeball',
  eyes: 'eyeball',
  ear: 'external ear',
  hair: 'hair of head',
  lips: 'lip',
  'spinal cord': 'spinal cord',
  'optic nerve': 'optic nerve',
  lung: 'lung',
  lungs: 'lung',
  kidneys: 'kidney',
  'gall bladder': 'gallbladder',
  womb: 'uterus',
  ovaries: 'ovary',
  'uterine tube': 'fallopian tube',
  'fallopian tubes': 'fallopian tube',
  breasts: 'mammary gland',
  breast: 'mammary gland',
  testes: 'testis',
  testicles: 'testis',
  'vas deferens': 'deferent duct'
};

const LAYER_LABELS = {
  skin: 'Skin & surface',
  muscles: 'Muscular system',
  skeleton: 'Skeletal system',
  vessels: 'Cardiovascular system',
  organs: 'Internal organs',
  nerves: 'Nervous system'
};

export const TISSUE_INFO = {
  skin: {
    kids: 'This is your skin — your body’s stretchy, waterproof armour. It keeps germs out, holds water in, and is packed with tiny sensors that feel touch, heat and cold.',
    pro: 'Integument: keratinised stratified squamous epidermis over a vascular collagenous dermis and adipose hypodermis. Primary barrier, thermoregulatory and sensory organ.'
  },
  hair: {
    kids: 'Hair helps keep your head warm and protects it from the sun. Each hair grows from a tiny pocket in your skin called a follicle.',
    pro: 'Terminal hair shafts (keratinised) arising from follicles in the dermis; scalp hair provides UV protection and thermal insulation.'
  },
  muscle: {
    kids: 'This is a muscle! Muscles are bundles of long, stretchy fibres that pull on your bones so you can move. They can only pull — never push — so they work in teams.',
    pro: 'Skeletal (striated, voluntary) muscle. Note fascicle orientation, attachments, and innervation; force depends on physiological cross-sectional area and pennation angle.'
  },
  tendon: {
    kids: 'This is a tendon — a super-strong rope that connects a muscle to a bone. When the muscle pulls, the tendon tugs the bone.',
    pro: 'Dense regular connective tissue (type I collagen) transmitting muscle force to bone; relatively hypovascular, hence slow healing.'
  },
  ligament: {
    kids: 'Ligaments are tough straps that tie bones together at your joints so they stay lined up while you move.',
    pro: 'Dense regular connective tissue linking bone to bone; provides passive joint stability and proprioceptive feedback.'
  },
  bone: {
    kids: 'This is a bone! Bones are living, growing parts of your body. They hold you up, protect your organs, and even make new blood cells inside their marrow.',
    pro: 'Lamellar bone with cortical (compact) and trabecular (cancellous) architecture; sites of muscle attachment, mineral homeostasis and haematopoiesis.'
  },
  tooth: {
    kids: 'Teeth are covered in enamel — the hardest material in your whole body! Different teeth cut, tear and grind your food.',
    pro: 'Enamel over dentine and pulp, anchored by periodontal ligament (gomphosis). Adult dentition: 32 permanent teeth.'
  },
  cartilage: {
    kids: 'Cartilage is smooth, bendy tissue — like the tip of your nose. It cushions joints and holds tubes like your windpipe open.',
    pro: 'Avascular hyaline, elastic or fibrocartilage; nourished by diffusion. Articular cartilage provides low-friction joint surfaces.'
  },
  artery: {
    kids: 'This is an artery — a strong, stretchy tube that carries bright red, oxygen-rich blood AWAY from your heart to the rest of your body. Watch the pulses flow outward!',
    pro: 'Systemic artery (thick tunica media). Carries oxygenated blood centrifugally; pulsatile flow driven by left ventricular ejection.'
  },
  arteryDeoxy: {
    kids: 'This artery is special: it carries “used” blood from the heart to the lungs to pick up fresh oxygen — that’s why it’s coloured blue!',
    pro: 'Pulmonary arterial tree: carries deoxygenated blood from the right ventricle to the lungs (low-pressure circuit, ~25/10 mmHg).'
  },
  vein: {
    kids: 'This is a vein. Veins carry blood that has already dropped off its oxygen BACK to your heart. One-way valves inside stop the blood from flowing backwards.',
    pro: 'Systemic vein (capacitance vessel, thin media, valves in the limbs). Returns deoxygenated blood centripetally to the right atrium.'
  },
  veinOxy: {
    kids: 'This vein carries fresh, oxygen-rich blood from the lungs back to the heart — so it’s coloured red, even though it’s a vein!',
    pro: 'Pulmonary vein: returns oxygenated blood from the lungs to the left atrium.'
  },
  nerve: {
    kids: 'Nerves are like your body’s wires. They carry super-fast electrical messages between your brain and every part of you.',
    pro: 'Peripheral/cranial nerve: myelinated and unmyelinated axons bundled in endoneurium, perineurium and epineurium.'
  },
  cord: {
    kids: 'The spinal cord is the main cable of your nervous system, running down the tunnel inside your backbone.',
    pro: 'Spinal cord: central grey matter (neuronal cell bodies) and peripheral white-matter tracts; conus medullaris at L1–L2.'
  },
  brain: {
    kids: 'This is part of your brain — mission control! Different areas handle thinking, moving, seeing, remembering and feelings.',
    pro: 'Central nervous system structure. Correlate with vascular territory (anterior vs. posterior circulation) and functional localisation.'
  },
  dura: {
    kids: 'This is a tough protective sheet that wraps and supports your brain.',
    pro: 'Dural reflection (meninges) partitioning the cranial cavity; houses dural venous sinuses along its attachments.'
  },
  csf: {
    kids: 'These are fluid-filled spaces deep inside your brain. The fluid cushions your brain like a water bed!',
    pro: 'Ventricular system containing cerebrospinal fluid (~150 mL, ~500 mL/day produced by choroid plexus).'
  },
  heart: {
    kids: 'This is part of your heart — the non-stop muscle pump that beats about 100,000 times a day!',
    pro: 'Cardiac structure. Correlate with coronary supply, conduction system and valvular function.'
  },
  lung: {
    kids: 'Your lungs are spongy balloons that swap old air for fresh oxygen every time you breathe.',
    pro: 'Pulmonary parenchyma: ~300–500 million alveoli, ~70 m² gas-exchange surface.'
  },
  airway: {
    kids: 'These are your air tubes. They branch like an upside-down tree to carry air deep into your lungs.',
    pro: 'Conducting airway (tracheobronchial tree): ~23 generations of dichotomous branching; cartilage-supported to the bronchi.'
  },
  liver: {
    kids: 'The liver is your body’s chemical factory: it cleans your blood, stores energy and makes bile to digest fat.',
    pro: 'Hepatic parenchyma (Couinaud segments) with dual blood supply: portal vein (~75%) and hepatic artery (~25%).'
  },
  gallbladder: {
    kids: 'The gallbladder stores bile — a green juice that helps break down fatty foods.',
    pro: 'Biliary tract: concentrates and stores bile; drains via cystic duct into the common bile duct.'
  },
  stomach: {
    kids: 'Your stomach is a stretchy, muscly bag that churns food with strong acid.',
    pro: 'Gastric region of the foregut: secretes HCl, pepsinogen and intrinsic factor; mixes chyme.'
  },
  intestine: {
    kids: 'The small intestine is a long, winding tube that soaks up nutrients from your food into your blood.',
    pro: 'Small intestine (duodenum, jejunum, ileum): primary site of digestion and absorption; ~6 m in vivo.'
  },
  colon: {
    kids: 'The large intestine soaks up water and is home to trillions of helpful bacteria.',
    pro: 'Large intestine: water and electrolyte reabsorption, microbiome fermentation, faecal storage.'
  },
  pancreas: {
    kids: 'The pancreas makes digestive juices and insulin, which controls the sugar in your blood.',
    pro: 'Mixed exocrine (acinar enzymes) and endocrine (islets of Langerhans: insulin, glucagon) gland.'
  },
  kidney: {
    kids: 'Your kidneys are bean-shaped filters that clean your blood and make pee.',
    pro: 'Renal parenchyma: ~1 million nephrons per kidney; GFR ~120 mL/min; endocrine roles (renin, EPO, calcitriol).'
  },
  bladder: {
    kids: 'The bladder is a stretchy bag that stores pee until you go to the bathroom.',
    pro: 'Urinary bladder/urethra: detrusor smooth muscle, capacity ~400–600 mL.'
  },
  spleen: {
    kids: 'The spleen filters your blood and helps fight germs.',
    pro: 'Lymphoid organ: red pulp filters senescent erythrocytes; white pulp mounts immune responses.'
  },
  eye: {
    kids: 'This is part of your eye — your body’s camera! It focuses light so your brain can see pictures.',
    pro: 'Ocular structure. Correlate with optical path (cornea → lens → retina) and orbital relations.'
  },
  pupil: {
    kids: 'The lens sits right behind the black hole in your eye (the pupil). It changes shape to focus on things near and far.',
    pro: 'Crystalline lens and zonular fibres. Accommodation via ciliary muscle; opacification = cataract. Rendered dark as seen through the pupil.'
  },
  lip: {
    kids: 'Your lips help you talk, eat, whistle and smile. They look pink because blood vessels sit very close to the surface.',
    pro: 'Lips: orbicularis oris covered by thin, keratin-poor vermilion epithelium with rich capillary supply (hence colour); superior/inferior labial arteries.'
  },
  gland: {
    kids: 'Glands make special liquids or chemical messengers (hormones) that your body needs.',
    pro: 'Glandular tissue (exocrine or endocrine). Correlate with secretory product and vascular/neural control.'
  },
  tongue: {
    kids: 'This soft tissue helps you taste, chew, swallow and talk.',
    pro: 'Oral soft tissue; correlate with innervation (CN V3, VII, IX, XII).'
  },
  mesentery: {
    kids: 'This thin, fatty sheet holds your intestines in place and carries their blood vessels.',
    pro: 'Peritoneal fold suspending the gut; conduit for mesenteric vessels, lymphatics and nerves.'
  },
  reproductive: {
    kids: 'This is part of the reproductive system — the organs that make hormones and allow people to have babies when they grow up.',
    pro: 'Reproductive and endocrine tract structure (NIH HuBMAP Visible Human Female reference organs and BodyParts3D male reference structures).'
  },
  organ: {
    kids: 'This is one of your body’s internal parts, working together with the others to keep you healthy.',
    pro: 'Anatomical structure from the Foundational Model of Anatomy (FMA).'
  }
};

const LAYER_LABELS_BY_LANG = {
  en: LAYER_LABELS,
  es: {
    skin: 'Piel y superficie',
    muscles: 'Sistema muscular',
    skeleton: 'Sistema esquelético',
    vessels: 'Sistema cardiovascular',
    organs: 'Órganos internos',
    nerves: 'Sistema nervioso'
  },
  zh: {
    skin: '皮肤与体表',
    muscles: '肌肉系统',
    skeleton: '骨骼系统',
    vessels: '心血管系统',
    organs: '内脏器官系统',
    nerves: '神经系统'
  }
};

export function layerLabel(layer, lang = 'en') {
  const dict = LAYER_LABELS_BY_LANG[lang] || LAYER_LABELS;
  const fallback = lang === 'es' ? 'Anatomía' : lang === 'zh' ? '解剖结构' : 'Anatomy';
  return dict[layer] || fallback;
}

function foldAccents(s) {
  return String(s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

// ----------------------------------------------------------------------------
// Search index over parts + groups (English + Spanish + Simplified Chinese)
// ----------------------------------------------------------------------------
export function buildSearchIndex(manifest) {
  const entries = [];
  manifest.parts.forEach((p, i) => {
    const nameEs = translateAnatomyName(p.name, 'es');
    const nameZh = translateAnatomyName(p.name, 'zh');
    entries.push({
      kind: 'part',
      name: p.name,
      nameEs,
      nameZh,
      lower: p.name.toLowerCase(),
      lowerEs: foldAccents(nameEs),
      lowerZh: nameZh.toLowerCase(),
      members: [i],
      layer: p.layer,
      fma: p.fma
    });
  });
  for (const g of manifest.groups) {
    if (g.members.length < 2) continue;
    const name = g.name.charAt(0).toUpperCase() + g.name.slice(1);
    const nameEs = translateAnatomyName(name, 'es');
    const nameZh = translateAnatomyName(name, 'zh');
    entries.push({
      kind: 'group',
      name,
      nameEs,
      nameZh,
      lower: g.name.toLowerCase(),
      lowerEs: foldAccents(nameEs),
      lowerZh: nameZh.toLowerCase(),
      members: g.members,
      fma: g.fma,
      parents: g.parents
    });
  }
  // Deduplicate identical names (left/right duplicates of segmented vessels, etc.) by merging members.
  const merged = new Map();
  for (const e of entries) {
    const key = `${e.kind}:${e.lower}`;
    if (merged.has(key)) {
      const m = merged.get(key);
      m.members = [...new Set([...m.members, ...e.members])];
    } else {
      merged.set(key, { ...e });
    }
  }
  return [...merged.values()];
}

export function searchAnatomy(index, rawQuery, limit = 10) {
  const q0 = String(rawQuery || '').trim().toLowerCase().slice(0, 80);
  if (!q0) return [];
  const qFolded = foldAccents(q0);
  const synTarget = SYNONYMS[q0] || MULTILINGUAL_SYNONYMS[q0] || MULTILINGUAL_SYNONYMS[qFolded] || q0;
  const q = synTarget.toLowerCase();
  const qEs = foldAccents(q);
  const words = q.split(/\s+/).filter(Boolean);
  const wordsEs = qEs.split(/\s+/).filter(Boolean);
  const scored = [];
  for (const e of index) {
    let score = 0;
    const lowerEs = e.lowerEs || '';
    const lowerZh = e.lowerZh || '';
    if (e.lower === q || lowerEs === qEs || lowerZh === q0) score = 1000;
    else if (e.lower.startsWith(q) || lowerEs.startsWith(qEs) || lowerZh.startsWith(q0)) score = 600;
    else if (
      new RegExp(`\\b${escapeRegex(q)}`).test(e.lower) ||
      (lowerEs && new RegExp(`\\b${escapeRegex(qEs)}`).test(lowerEs))
    ) {
      score = 420;
    } else if (
      words.every((w) => e.lower.includes(w)) ||
      (lowerEs && wordsEs.every((w) => lowerEs.includes(w))) ||
      (lowerZh && lowerZh.includes(q0))
    ) {
      score = 220;
    } else {
      continue;
    }
    // Prefer concise names and whole groups over fragments.
    score -= e.lower.length * 1.2;
    if (e.kind === 'group') score += 60 + Math.min(40, e.members.length);
    scored.push({ e, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.e);
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Resolve curated entries to concrete part indices once the manifest is loaded.
export function resolveCuratedMembers(manifest, curatedParts) {
  const result = new Map();
  for (const entry of curatedParts) {
    const link = CURATED_LINKS[entry.id];
    if (!link) continue;
    const members = new Set();
    for (const gname of link.groups || []) {
      const g = manifest.groups.find((x) => x.name.toLowerCase() === gname);
      if (g) g.members.forEach((m) => members.add(m));
    }
    if (link.parts) {
      manifest.parts.forEach((p, i) => {
        if (link.parts.test(p.name)) members.add(i);
      });
    }
    result.set(entry.id, [...members]);
  }
  return result;
}
