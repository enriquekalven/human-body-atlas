/**
 * Human Body 3D Atlas — Comprehensive Anatomical & Physiological Dataset
 * Dual-Audience Educational Content:
 *  - Kids Explorer Mode: Relatable explanations, pronunciation, fun facts, interactive quiz
 *  - Clinical Professional Mode: Latin nomenclature, arterial supply, venous drainage, innervation,
 *    origin/insertion, physiological metrics, and clinical pathology correlations.
 */

export const LAYER_MODES = [
  {
    id: 'composite',
    label: 'All Layers (X-Ray)',
    shortLabel: 'X-Ray Composite',
    icon: '🔬',
    description: 'Simultaneous multi-layer anatomical view with translucent skin, muscles, skeleton, organs, and live pulsing blood flow.',
    layers: { skin: 0.22, muscles: 0.38, skeleton: 0.88, vascular: 1.0, organs: 0.95, nerves: 0.45 }
  },
  {
    id: 'skin',
    label: 'Skin & Surface',
    shortLabel: 'Skin View',
    icon: '🧑',
    description: 'Integumentary system showing outer epidermal/dermal contours, surface anatomical landmarks, and thermoregulatory layer.',
    layers: { skin: 0.92, muscles: 0.15, skeleton: 0.12, vascular: 0.15, organs: 0.1, nerves: 0.0 }
  },
  {
    id: 'muscles',
    label: 'Muscular System',
    shortLabel: 'Muscle View',
    icon: '💪',
    description: 'Skeletal & respiratory muscle architecture showing fiber bundles, origins/insertions, and biomechanical lever systems.',
    layers: { skin: 0.12, muscles: 0.98, skeleton: 0.45, vascular: 0.25, organs: 0.15, nerves: 0.15 }
  },
  {
    id: 'skeleton',
    label: 'Skeletal System',
    shortLabel: 'Skeleton View',
    icon: '🦴',
    description: 'Axial and appendicular skeletal framework protecting vital organs, anchoring muscles, and housing hematopoietic bone marrow.',
    layers: { skin: 0.08, muscles: 0.0, skeleton: 1.0, vascular: 0.2, organs: 0.18, nerves: 0.15 }
  },
  {
    id: 'vascular',
    label: 'Veins & Blood Flow',
    shortLabel: 'Veins & Blood Flow',
    icon: '🩸',
    description: 'Cardiovascular arterial (oxygen-rich red) and venous (oxygen-poor blue) networks with real-time animated blood-cell circulation.',
    layers: { skin: 0.1, muscles: 0.0, skeleton: 0.22, vascular: 1.0, organs: 0.78, nerves: 0.0 }
  },
  {
    id: 'organs',
    label: 'Internal Organs',
    shortLabel: 'Vital Organs',
    icon: '🫀',
    description: 'Thoracic, abdominal, cranial, and retroperitoneal viscera with live cardiac contraction and pulmonary respiratory cycles.',
    layers: { skin: 0.08, muscles: 0.0, skeleton: 0.28, vascular: 0.65, organs: 1.0, nerves: 0.35 }
  },
  {
    id: 'nerves',
    label: 'Nervous System',
    shortLabel: 'Nerves & Brain',
    icon: '🧠',
    description: 'Central and peripheral neural pathways transmitting high-speed bioelectric action potentials across the body.',
    layers: { skin: 0.08, muscles: 0.0, skeleton: 0.25, vascular: 0.15, organs: 0.45, nerves: 1.0 }
  }
];

export const ANATOMY_PARTS = [
  // ============================================================================
  // 1. INTEGUMENTARY SYSTEM (SKIN)
  // ============================================================================
  {
    id: 'integumentary-skin',
    name: 'Skin (Integumentary System)',
    latinName: 'Cutis (Epidermis, Dermis, Subcutis)',
    system: 'skin',
    systemLabel: 'Integumentary System',
    region: 'Full Body Surface',
    keywords: ['skin', 'epidermis', 'dermis', 'surface', 'pores', 'sweat', 'integumentary', 'body cover'],
    focusPos: { x: 0, y: 12, z: 0 },
    defaultZoom: 1.45,
    cameraAngles: { rotX: 0.12, rotY: -0.35 },
    color: '#f59e0b',
    kids: {
      badge: '🛡️ Your Body’s Super Suit!',
      pronounce: 'SKIHN (Ep-ih-DER-mis)',
      summary: 'Your skin is actually the largest organ in your whole body! It acts like a waterproof, self-healing spacesuit that keeps germs out, holds everything inside, and helps keep you cool when you run around.',
      whyYouNeedIt: 'Without skin, germs would get inside easily and you wouldn’t be able to feel a warm hug, a cool breeze, or a tickle!',
      funFacts: [
        'You shed about 30,000 to 40,000 tiny dead skin cells every single minute — and grow brand new ones underneath!',
        'Your skin has millions of tiny sweat glands that work like a built-in air conditioner.',
        'Skin is thickest on the bottoms of your feet and thinnest on your eyelids!'
      ],
      quickStats: [
        { label: 'Layers', value: '3 Main Layers (Epidermis, Dermis, Hypodermis)' },
        { label: 'Renewal Time', value: 'New outer skin every ~28 days' },
        { label: 'Touch Sensors', value: 'Millions of nerve endings' },
        { label: 'Superpower', value: 'Makes Vitamin D from sunlight!' }
      ]
    },
    pro: {
      classification: 'TA98: A16.0.00.001 • FMA: 7163',
      summary: 'Multilayered barrier organ comprising the stratified squamous keratinized epidermis, vascularized collagenous dermis, and adipose-rich subcutaneous hypodermis.',
      bloodSupply: 'Cutaneous perforating arteries forming deep dermal and subpapillary vascular plexuses',
      venousDrainage: 'Superficial and deep dermal venous plexuses draining into subcutaneous veins',
      innervation: 'Cutaneous sensory branches (Meissner, Pacinian, Merkel, Ruffini corpuscles & free nociceptive endings); sympathetic cholinergic sudomotor fibers',
      originInsertion: 'Continuous with mucocutaneous junctions; anchored to deep fascia via retinacula cutis (skin ligaments)',
      metrics: [
        { label: 'Surface Area', value: '1.5 – 2.0 m² (Adult)' },
        { label: 'Total Mass', value: '~15–16% of total body weight' },
        { label: 'Thickness Range', value: '0.5 mm (eyelids) to 4.0 mm (heels)' },
        { label: 'Resting Dermal Flow', value: '~250 mL/min (up to 6–8 L/min in hyperthermia)' }
      ],
      clinicalPearls: 'Rule of Nines estimates Total Body Surface Area (TBSA) in thermal burns. Dermal arteriovenous anastomoses (glomus bodies) in acral skin shunt blood to regulate core temperature.'
    }
  },

  // ============================================================================
  // 2. INTERNAL ORGANS & BRAIN / NERVOUS SYSTEM
  // ============================================================================
  {
    id: 'brain',
    name: 'Brain (Cerebrum, Cerebellum & Brainstem)',
    latinName: 'Encephalon (Cerebrum, Cerebellum, Truncus encephali)',
    system: 'organs',
    secondarySystem: 'nerves',
    systemLabel: 'Nervous & Organ System',
    region: 'Head & Cranium',
    keywords: ['brain', 'head', 'cerebrum', 'cerebellum', 'mind', 'thinking', 'memory', 'encephalon', 'neurons'],
    focusPos: { x: 0, y: 148, z: 4 },
    defaultZoom: 3.8,
    cameraAngles: { rotX: 0.18, rotY: -0.45 },
    color: '#f472b6',
    kids: {
      badge: '🧠 Mission Control Center!',
      pronounce: 'BRAYN (En-SEF-uh-lon)',
      summary: 'Your brain is the boss of your body! Faster than the world’s most powerful supercomputer, it lets you think, dream, play games, remember your best friends, and controls your breathing and heartbeat automatically.',
      whyYouNeedIt: 'Every thought you have, every move you make, and every sound or color you notice is processed by 86 billion tiny brain cells called neurons!',
      funFacts: [
        'Your brain generates enough electricity while you’re awake to power a small LED lightbulb!',
        'The left side of your brain controls the right side of your body, and the right side controls the left!',
        'Even though the brain feels every touch on your skin, the brain tissue itself cannot feel pain.'
      ],
      quickStats: [
        { label: 'Brain Cells', value: '~86 Billion Neurons' },
        { label: 'Message Speed', value: 'Up to 268 mph (430 km/h)' },
        { label: 'Energy Used', value: '20% of your body’s oxygen' },
        { label: 'Texture', value: 'Soft like firm jelly, protected by skull' }
      ]
    },
    pro: {
      classification: 'TA98: A14.1.03.001 • FMA: 50801',
      summary: 'Primary integration center of the Central Nervous System (CNS), subdivided into telencephalon, diencephalon, mesencephalon, pons, medulla oblongata, and cerebellum.',
      bloodSupply: 'Internal carotid arteries (anterior circulation) and vertebral-basilar system (posterior circulation) anastomosing at the Circle of Willis',
      venousDrainage: 'Superficial and deep cerebral veins draining via dural venous sinuses into the internal jugular veins',
      innervation: 'Origins of Cranial Nerves I–XII; meningeal dura innervated by trigeminal (CN V), vagus (CN X), and upper cervical nerves',
      originInsertion: 'Suspended in cerebrospinal fluid (CSF) within the cranial vault; tethered by dural reflections (falx cerebri, tentorium cerebelli)',
      metrics: [
        { label: 'Adult Mass', value: '1,300 – 1,400 g (~2% body weight)' },
        { label: 'Cerebral Blood Flow', value: '~50 mL / 100g / min (~750 mL/min total)' },
        { label: 'CSF Volume', value: '~150 mL (500 mL/day produced by choroid plexus)' },
        { label: 'Intracranial Pressure', value: '7 – 15 mmHg (supine adult)' }
      ],
      clinicalPearls: 'Monro-Kellie doctrine states cranial volume (brain + blood + CSF) is fixed; mass lesions rapidly elevate ICP, risking uncal or tonsillar herniation. Middle cerebral artery (MCA) occlusion causes contralateral hemiparesis (face/arm > leg) and aphasia (dominant hemisphere).'
    }
  },

  {
    id: 'heart',
    name: 'Heart (Four-Chambered Muscular Pump)',
    latinName: 'Cor (Atrium & Ventriculus Dexter/Sinister)',
    system: 'organs',
    secondarySystem: 'vascular',
    systemLabel: 'Cardiovascular System',
    region: 'Thorax (Middle Mediastinum)',
    keywords: ['heart', 'cardiac', 'pulse', 'heartbeat', 'pump', 'ventricle', 'atrium', 'cor', 'chest'],
    focusPos: { x: 6, y: 66, z: 8 },
    defaultZoom: 4.2,
    cameraAngles: { rotX: 0.14, rotY: -0.25 },
    color: '#ef4444',
    kids: {
      badge: '❤️ The Non-Stop Super Pump!',
      pronounce: 'HART (Kard-ee-ak)',
      summary: 'Your heart is a super-strong muscle about the size of your closed fist! It beats around 100,000 times every single day, pumping fresh oxygen-rich blood to your brain, muscles, and toes.',
      whyYouNeedIt: 'Blood carries oxygen and food energy to every cell in your body. Your heart is the engine that keeps that blood moving 24/7 — even while you sleep!',
      funFacts: [
        'Your heart has 4 special rooms (chambers) with one-way doors (valves) that make the "LUB-DUB" sound when they snap shut!',
        'In one single day, your heart pumps about 2,000 gallons (7,570 liters) of blood!',
        'When you run or play sports, your heart beats faster to deliver extra oxygen to your hard-working muscles.'
      ],
      quickStats: [
        { label: 'Size', value: 'About the size of your fist' },
        { label: 'Beats Per Day', value: '~100,000 heartbeats' },
        { label: 'Chambers', value: '4 (Left/Right Atria & Ventricles)' },
        { label: 'Blood Pumped', value: '~5 Liters every minute' }
      ]
    },
    pro: {
      classification: 'TA98: A12.1.00.001 • FMA: 7088',
      summary: 'Four-chambered fibromuscular pump housed within the pericardial sac in the middle mediastinum, driving pulmonary (low-pressure) and systemic (high-pressure) circulation.',
      bloodSupply: 'Left main coronary artery (LAD & LCx) and Right Coronary Artery (RCA) arising from the aortic sinuses of Valsalva (perfused predominantly during diastole)',
      venousDrainage: 'Coronary sinus (great, middle, and small cardiac veins) emptying into the right atrium; anterior cardiac and Thebesian veins',
      innervation: 'Intrinsic conduction system (SA node → AV node → Bundle of His → Purkinje fibers) modulated by cardiac plexus (Vagus CN X parasympathetic; T1–T4 sympathetic)',
      originInsertion: 'Apex directed anteroinferiorly and to the left (5th intercostal space, midclavicular line); base formed primarily by left atrium (T6–T9)',
      metrics: [
        { label: 'Cardiac Output (CO)', value: '~5.0 L/min (Stroke Volume ~70 mL × HR 72 bpm)' },
        { label: 'Ejection Fraction (LVEF)', value: '55% – 70% (Normal)' },
        { label: 'Chamber Pressures', value: 'LV: 120/8 mmHg | RV: 25/4 mmHg' },
        { label: 'Adult Mass', value: '250 – 350 g' }
      ],
      clinicalPearls: 'LAD occlusion ("widowmaker") infarcts the anterior wall and interventricular septum (V1–V4 ST elevation). RCA occlusion causes inferior MI (II, III, aVF) and may impair SA/AV nodal perfusion causing bradyarrhythmias.'
    }
  },

  {
    id: 'lungs',
    name: 'Lungs (Right & Left Pulmonary Lobes)',
    latinName: 'Pulmones (Pulmo dexter et sinister)',
    system: 'organs',
    systemLabel: 'Respiratory System',
    region: 'Thoracic Cavity',
    keywords: ['lungs', 'breathing', 'respiratory', 'oxygen', 'alveoli', 'chest', 'pulmonary', 'breath'],
    focusPos: { x: 0, y: 70, z: 4 },
    defaultZoom: 3.2,
    cameraAngles: { rotX: 0.12, rotY: -0.2 },
    color: '#fda4af',
    kids: {
      badge: '🫁 Spongy Oxygen Balloons!',
      pronounce: 'LUHNGZ (Pul-mo-nair-ee)',
      summary: 'Your two lungs fill up your chest like soft, spongy balloons! Every time you breathe in, they grab fresh oxygen from the air and put it into your blood. Every time you breathe out, they get rid of waste gas called carbon dioxide.',
      whyYouNeedIt: 'Every cell in your body needs oxygen to make energy. Your lungs team up with your heart to deliver oxygen everywhere!',
      funFacts: [
        'Your left lung is slightly smaller than your right lung so there is plenty of room for your heart!',
        'Inside your lungs are 300 million tiny air sacs called alveoli — if you flattened them all out, they would cover an entire tennis court!',
        'Lungs are the only organs in the human body that can float on water!'
      ],
      quickStats: [
        { label: 'Breaths Per Day', value: '~20,000 breaths' },
        { label: 'Air Sacs', value: '~300–500 Million Alveoli' },
        { label: 'Lobes', value: '3 on the Right, 2 on the Left' },
        { label: 'Surface Area', value: 'Size of a tennis court!' }
      ]
    },
    pro: {
      classification: 'TA98: A06.5.01.001 • FMA: 7195',
      summary: 'Paired conical organs of gas exchange occupying the pleural cavities. The right lung comprises 3 lobes (superior, middle, inferior) separated by oblique and horizontal fissures; the left lung has 2 lobes and the lingula.',
      bloodSupply: 'Dual circulation: Pulmonary arteries (deoxygenated blood for gas exchange) and Bronchial arteries (systemic nutritive branches from thoracic aorta)',
      venousDrainage: 'Four pulmonary veins (oxygenated blood to left atrium) and bronchial veins (draining into azygos/hemiazygos system)',
      innervation: 'Pulmonary plexus: Parasympathetic vagal fibers (bronchoconstriction, secretomotor) and sympathetic T2–T5 fibers (bronchodilation, vasoconstriction)',
      originInsertion: 'Apex projects 2.5 cm above clavicle into root of neck; base rests on the convex domes of the thoracic diaphragm',
      metrics: [
        { label: 'Total Lung Capacity', value: '~6.0 L (Tidal Volume ~500 mL)' },
        { label: 'Alveolar Surface Area', value: '~70 – 85 m²' },
        { label: 'Blood-Gas Barrier', value: '0.2 – 0.5 µm (Type I pneumocyte + fused basement membrane + endothelium)' },
        { label: 'V/Q Ratio', value: '~0.8 overall (higher at apex, lower at base)' }
      ],
      clinicalPearls: 'Right mainstem bronchus is wider, shorter, and more vertical than the left, making the right lower/middle lobes the most common site for aspirated foreign bodies and endotracheal tube mainstem intubation.'
    }
  },

  {
    id: 'liver',
    name: 'Liver & Gallbladder',
    latinName: 'Hepar et Vesica biliaris',
    system: 'organs',
    systemLabel: 'Digestive & Metabolic System',
    region: 'Right Upper Quadrant (Abdomen)',
    keywords: ['liver', 'hepatic', 'bile', 'gallbladder', 'detox', 'metabolism', 'hepar', 'abdomen'],
    focusPos: { x: -16, y: 38, z: 6 },
    defaultZoom: 3.6,
    cameraAngles: { rotX: 0.15, rotY: 0.25 },
    color: '#991b1b',
    kids: {
      badge: '🧪 The Body’s Chemical Factory & Filter!',
      pronounce: 'LIV-er (HEP-uh-tik)',
      summary: 'Tucked under your right ribs, the liver is your body’s smartest multitasker! It cleans your blood, stores sugar energy for later, makes special green juice called bile to digest food, and makes proteins so scrapes stop bleeding.',
      whyYouNeedIt: 'Everything you eat and drink passes through the liver’s security check so your body gets clean fuel and vitamins!',
      funFacts: [
        'Your liver performs over 500 different jobs at the same time!',
        'It has an amazing superpower: it is the only internal organ that can regrow itself if part of it is removed!',
        'At any moment, your liver holds about 13% of all the blood in your body.'
      ],
      quickStats: [
        { label: 'Jobs Performed', value: 'Over 500 vital tasks' },
        { label: 'Bile Made Daily', value: 'About 3 to 4 cups' },
        { label: 'Superpower', value: 'Can regenerate (regrow)!' },
        { label: 'Weight', value: 'Heaviest internal organ (~3 lbs)' }
      ]
    },
    pro: {
      classification: 'TA98: A05.8.01.001 • FMA: 7197',
      summary: 'Largest visceral gland and metabolic hub located in the right hypochondrium and epigastrium, organized into 8 functionally independent Couinaud segments.',
      bloodSupply: 'Dual afferent supply: Hepatic Portal Vein (~75% flow, nutrient-rich from GI tract/spleen) and Proper Hepatic Artery (~25% flow, oxygen-rich from celiac trunk)',
      venousDrainage: 'Central veins of hepatic lobules coalesce into Right, Middle, and Left Hepatic Veins draining directly into the Inferior Vena Cava (IVC)',
      innervation: 'Hepatic plexus (sympathetic celiac ganglia T7–T10 and parasympathetic vagal trunks); Glisson’s capsule pain referred to right shoulder via phrenic nerve (C3–C5)',
      originInsertion: 'Suspended from diaphragm and anterior abdominal wall by falciform, coronary, and triangular ligaments; porta hepatis transmits portal triad',
      metrics: [
        { label: 'Adult Mass', value: '1,400 – 1,600 g (~2.5% body weight)' },
        { label: 'Hepatic Blood Flow', value: '~1,500 mL/min (~25% of Cardiac Output)' },
        { label: 'Bile Production', value: '600 – 1,000 mL/day' },
        { label: 'Portal Vein Pressure', value: '5 – 10 mmHg (Portal HTN > 12 mmHg)' }
      ],
      clinicalPearls: 'Pringle maneuver clamps the hepatoduodenal ligament (portal triad: proper hepatic artery, portal vein, common bile duct) at the epiploic foramen of Winslow to control hepatic hemorrhage.'
    }
  },

  {
    id: 'stomach',
    name: 'Stomach',
    latinName: 'Gaster (Ventriculus)',
    system: 'organs',
    systemLabel: 'Digestive System',
    region: 'Left Upper Quadrant (Epigastrium)',
    keywords: ['stomach', 'digestion', 'gastric', 'tummy', 'belly', 'acid', 'food', 'gaster'],
    focusPos: { x: 14, y: 36, z: 7 },
    defaultZoom: 3.8,
    cameraAngles: { rotX: 0.15, rotY: -0.28 },
    color: '#fb923c',
    kids: {
      badge: '🥣 The Acid Food Blender!',
      pronounce: 'STUM-uk (GAS-trik)',
      summary: 'Your stomach is a stretchy J-shaped muscular bag! When you swallow food, your stomach squeezes, churns, and mixes it with strong stomach acid and enzymes until it turns into a soupy liquid your body can use.',
      whyYouNeedIt: 'It breaks down big bites of pizza, apples, and sandwiches into tiny nutrients and zaps germs that might be hiding in your food!',
      funFacts: [
        'Stomach acid is strong enough to dissolve metal, but your stomach protects itself with a slippery coat of mucus that renews every few days!',
        'When your stomach growls ("borborygmi"), it’s actually the sound of muscles squeezing air and liquid around inside.',
        'An adult stomach can stretch to hold almost a whole liter of food and water!'
      ],
      quickStats: [
        { label: 'Shape', value: 'Stretchy letter "J"' },
        { label: 'Muscle Layers', value: '3 crisscrossing layers for churning' },
        { label: 'Acid Level', value: 'Super strong (pH 1.5 to 3.5)' },
        { label: 'Digestion Time', value: 'Food stays here 2 to 4 hours' }
      ]
    },
    pro: {
      classification: 'TA98: A05.5.01.001 • FMA: 7148',
      summary: 'Intraperitoneal J-shaped muscular dilation of the foregut divided into cardia, fundus, body (corpus), and pyloric antrum/canal, possessing three muscularis externa layers (inner oblique, middle circular, outer longitudinal).',
      bloodSupply: 'Rich anastomotic arcade from Celiac Trunk: Left & Right Gastric (lesser curvature), Left & Right Gastroepiploic (greater curvature), and Short Gastric arteries (fundus)',
      venousDrainage: 'Parallels arteries directly or via splenic/superior mesenteric veins into the Hepatic Portal Vein',
      innervation: 'Parasympathetic via Anterior (Left) and Posterior (Right) Vagal Trunks (stimulates HCl/gastrin & motility); Sympathetic via Greater Splanchnic Nerve (T5–T9, celiac plexus)',
      originInsertion: 'Anchored between lower esophageal sphincter (LES at T11) and gastroduodenal pyloric sphincter (L1 transpyloric plane)',
      metrics: [
        { label: 'Luminal pH', value: '1.5 – 3.5 (HCl secreted by parietal cells)' },
        { label: 'Gastric Juice Volume', value: '1.5 – 2.5 L/day' },
        { label: 'Distended Capacity', value: '1.0 – 1.5 L (fasting volume ~50 mL)' },
        { label: 'Key Secretions', value: 'HCl, Intrinsic Factor, Pepsinogen, Gastrin, Ghrelin' }
      ],
      clinicalPearls: 'Posterior duodenal ulcers risk eroding into the gastroduodenal artery; lesser curvature gastric ulcers risk eroding into the left gastric artery. Parietal cell destruction (autoimmune gastritis) causes Intrinsic Factor deficiency and Vitamin B12 pernicious anemia.'
    }
  },

  {
    id: 'kidneys',
    name: 'Kidneys (Right & Left Renal Organs)',
    latinName: 'Renes (Ren dexter et sinister)',
    system: 'organs',
    systemLabel: 'Urinary & Renal System',
    region: 'Retroperitoneum (T12–L3)',
    keywords: ['kidneys', 'renal', 'urine', 'filter', 'nephron', 'water', 'electrolytes', 'back'],
    focusPos: { x: 0, y: 24, z: -8 },
    defaultZoom: 3.7,
    cameraAngles: { rotX: 0.14, rotY: 2.75 },
    color: '#b45309',
    kids: {
      badge: '🫘 The Super Blood-Washing Twins!',
      pronounce: 'KID-neez (REE-nul)',
      summary: 'Shaped just like two giant kidney beans near your lower back, your kidneys are high-tech water filters! They wash all the blood in your body dozens of times a day, keeping the good water and salts while turning waste into pee (urine).',
      whyYouNeedIt: 'They keep the exact right balance of water and minerals in your body and help control your blood pressure!',
      funFacts: [
        'Each kidney has about 1 million microscopic filters called nephrons!',
        'Your two small kidneys filter about 40 to 50 gallons (180 liters) of fluid every single day!',
        'Just like a astronaut’s water recycler on the space station, your kidneys recycle 99% of the water back into your blood.'
      ],
      quickStats: [
        { label: 'Micro-Filters', value: '~1 Million Nephrons each' },
        { label: 'Blood Filtered', value: 'All your blood ~40 times a day' },
        { label: 'Size', value: 'Size of a computer mouse (~11 cm)' },
        { label: 'Location', value: 'Protected near your lower back ribs' }
      ]
    },
    pro: {
      classification: 'TA98: A08.1.01.001 • FMA: 7203',
      summary: 'Paired bean-shaped retroperitoneal organs (T12–L3; right kidney slightly lower due to liver) regulating extracellular fluid volume, osmolarity, acid-base balance, uremic waste excretion, and endocrine synthesis (EPO, Renin, Calcitriol).',
      bloodSupply: 'Left and Right Renal Arteries arising laterally from abdominal aorta at L1–L2 → Segmental → Interlobar → Arcuate → Interlobular → Afferent arterioles → Glomerular capillaries',
      venousDrainage: 'Renal veins draining into IVC (Left renal vein is longer, crosses anterior to aorta beneath SMA, and receives left gonadal, adrenal, and inferior phrenic veins)',
      innervation: 'Renal plexus (Sympathetic T10–L1 via least/lesser splanchnic nerves regulating juxtaglomerular renin release and afferent/efferent tone; Vagal parasympathetic)',
      originInsertion: 'Encased in renal capsule, perirenal fat, Gerota’s renal fascia, and pararenal fat; hilum (V-A-U anteroposteriorly: Renal Vein, Renal Artery, Ureter)',
      metrics: [
        { label: 'Renal Blood Flow', value: '~1.1 – 1.2 L/min (20–25% of Cardiac Output)' },
        { label: 'Normal GFR', value: '90 – 120 mL/min/1.73m² (~180 L/day filtrate)' },
        { label: 'Nephron Count', value: '~900,000 – 1.2 Million per kidney' },
        { label: 'Filtration Fraction', value: '~20% (GFR / Renal Plasma Flow)' }
      ],
      clinicalPearls: 'Nutcracker syndrome occurs when the left renal vein is compressed between the Superior Mesenteric Artery (SMA) and abdominal aorta, causing hematuria, left flank pain, and left-sided varicocele.'
    }
  },

  {
    id: 'intestines',
    name: 'Small & Large Intestines',
    latinName: 'Intestinum tenue et Intestinum crassum',
    system: 'organs',
    systemLabel: 'Digestive System',
    region: 'Abdominal & Pelvic Cavity',
    keywords: ['intestines', 'gut', 'bowel', 'colon', 'small intestine', 'large intestine', 'digestion', 'nutrients'],
    focusPos: { x: 0, y: 12, z: 6 },
    defaultZoom: 3.1,
    cameraAngles: { rotX: 0.14, rotY: -0.15 },
    color: '#f9a8d4',
    kids: {
      badge: '🎢 The 25-Foot Nutrient Rollercoaster!',
      pronounce: 'In-TES-tinz',
      summary: 'Coiled neatly inside your belly is a long winding tube! First, the Small Intestine sponges up all the vitamins, proteins, and energy from your food. Then, the Large Intestine absorbs water before the leftovers leave your body.',
      whyYouNeedIt: 'Eating food wouldn’t give you any energy at all unless your intestines absorbed those nutrients into your bloodstream!',
      funFacts: [
        'If you uncoiled your small and large intestines, they would be over 22 to 25 feet (7 meters) long — taller than a giraffe!',
        'The inside of your small intestine is covered in millions of tiny finger-like bumps called villi that act like nutrient sponges.',
        'Friendly helpful bacteria ("your microbiome") live in your large intestine and help make vitamins for you!'
      ],
      quickStats: [
        { label: 'Total Length', value: '~22 to 25 feet coiled up!' },
        { label: 'Small Intestine', value: '3 parts: Duodenum, Jejunum, Ileum' },
        { label: 'Large Intestine', value: 'Absorbs water & electrolytes' },
        { label: 'Muscle Wave', value: 'Peristalsis pushes food along' }
      ]
    },
    pro: {
      classification: 'TA98: A05.6.01.001 / A05.7.01.001 • FMA: 7200 / 7201',
      summary: 'Midgut and hindgut alimentary tract comprising the small intestine (duodenum, jejunum, ileum; ~6m) and large intestine (cecum, appendix, ascending/transverse/descending/sigmoid colon, rectum; ~1.5m).',
      bloodSupply: 'Superior Mesenteric Artery (SMA: midgut from distal duodenum to proximal 2/3 transverse colon) and Inferior Mesenteric Artery (IMA: hindgut to upper rectum), linked by the Marginal Artery of Drummond',
      venousDrainage: 'Superior and Inferior Mesenteric Veins (SMV & IMV) draining into the Hepatic Portal Vein for first-pass hepatic metabolism',
      innervation: 'Enteric Nervous System (Auerbach’s myenteric plexus for motility; Meissner’s submucosal plexus for secretion) modulated by Vagus (CN X), Pelvic Splanchnic (S2–S4), and Sympathetic Splanchnic nerves',
      originInsertion: 'Suspended from posterior abdominal wall by fan-shaped mesentery proper and transverse/sigmoid mesocolon',
      metrics: [
        { label: 'Absorptive Area', value: '~250 m² (amplified 600x by plicae circulares, villi, microvilli)' },
        { label: 'Fluid Reabsorption', value: '~7.5 L/day in small intestine; ~1.4 L/day in colon' },
        { label: 'Site-Specific Uptake', value: 'Iron (Duodenum), Folate (Jejunum), B12 & Bile Salts (Terminal Ileum)' },
        { label: 'Watershed Zones', value: 'Splenic Flexure (Griffith’s point) & Rectosigmoid (Sudeck’s point)' }
      ],
      clinicalPearls: 'Splenic flexure (SMA/IMA watershed) and rectosigmoid junction (IMA/Internal Iliac watershed) are highly vulnerable to non-occlusive ischemic colitis during systemic hypotension.'
    }
  },

  // ============================================================================
  // 3. VASCULAR SYSTEM (ARTERIES, VEINS & BLOOD FLOW)
  // ============================================================================
  {
    id: 'aorta',
    name: 'Aorta (Aortic Arch, Thoracic & Abdominal Aorta)',
    latinName: 'Aorta (Ascendens, Arcus aortae, Descendens)',
    system: 'vascular',
    systemLabel: 'Cardiovascular / Arterial System',
    region: 'Thorax & Abdomen (Midline)',
    keywords: ['aorta', 'aortic arch', 'artery', 'blood flow', 'main artery', 'oxygenated blood', 'red blood'],
    focusPos: { x: 2, y: 58, z: 3 },
    defaultZoom: 3.5,
    cameraAngles: { rotX: 0.14, rotY: -0.3 },
    color: '#ef4444',
    kids: {
      badge: '🛣️ The Body’s Main Superhighway for Blood!',
      pronounce: 'Ay-OR-tuh',
      summary: 'The aorta is the biggest and strongest artery in your whole body! About as wide as a garden hose, it curves out of the top of your heart like a candy cane and carries fresh, oxygen-rich red blood out to every branch of your body.',
      whyYouNeedIt: 'Every single drop of oxygen-rich blood pumped by the left side of your heart travels through the aorta first before branching off to your brain, arms, belly, and legs!',
      funFacts: [
        'The walls of your aorta are stretchy like a thick rubber band so they can handle the powerful squeeze of each heartbeat!',
        'Three big highway exits at the top of the aortic arch send blood straight up to your head and both arms.',
        'Over your lifetime, your aorta will carry enough blood to fill hundreds of Olympic swimming pools!'
      ],
      quickStats: [
        { label: 'Vessel Type', value: 'Largest Elastic Artery (Red = Oxygenated)' },
        { label: 'Diameter', value: '~2.5 to 3 cm (like a garden hose)' },
        { label: 'Starts At', value: 'Left Ventricle of the Heart' },
        { label: 'Flow Speed', value: 'Fastest blood flow in the body!' }
      ]
    },
    pro: {
      classification: 'TA98: A12.2.01.001 • FMA: 3734',
      summary: 'Primary systemic elastic artery originating at the left ventricular aortic orifice. Elastic lamellae in the tunica media provide the Windkessel effect, converting pulsatile systolic ejection into continuous downstream perfusion.',
      bloodSupply: 'Inner third nourished by luminal diffusion; outer tunica media and adventitia supplied by vasa vasorum (from bronchial, intercostal, and lumbar arteries)',
      venousDrainage: 'Venae vasorum draining into adjacent systemic veins (azygos and lumbar veins)',
      innervation: 'Aortic arch baroreceptors innervated by Vagus Nerve (CN X) afferent fibers to the nucleus tractus solitarius (NTS)',
      originInsertion: 'Ascends from aortic valve → arches posteriorly over left mainstem bronchus (T4 sternal angle) → descends through aortic hiatus of diaphragm (T12) → bifurcates into common iliac arteries at L4',
      metrics: [
        { label: 'Normal Diameter', value: 'Ascending ≤ 3.5 cm | Abdominal ≤ 2.0 cm (AAA ≥ 3.0 cm)' },
        { label: 'Peak Systolic Velocity', value: '100 – 140 cm/s' },
        { label: 'Arch Branches', value: '1. Brachiocephalic Trunk, 2. Left Common Carotid, 3. Left Subclavian' },
        { label: 'Abdominal Branches', value: 'Celiac (T12), SMA (L1), Renal (L1–L2), IMA (L3)' }
      ],
      clinicalPearls: 'Traumatic aortic rupture most commonly occurs at the aortic isthmus (just distal to left subclavian artery origin at ligamentum arteriosum) where the mobile arch meets the fixed descending thoracic aorta.'
    }
  },

  {
    id: 'vena-cava',
    name: 'Superior & Inferior Vena Cava',
    latinName: 'Vena cava superior et Vena cava inferior',
    system: 'vascular',
    systemLabel: 'Cardiovascular / Venous System',
    region: 'Thorax & Retroperitoneum',
    keywords: ['vena cava', 'vein', 'veins', 'superior vena cava', 'inferior vena cava', 'blue blood', 'svc', 'ivc', 'blood return'],
    focusPos: { x: -8, y: 54, z: 2 },
    defaultZoom: 3.4,
    cameraAngles: { rotX: 0.12, rotY: 0.25 },
    color: '#3b82f6',
    kids: {
      badge: '🔵 The Giant Return Pipes to the Heart!',
      pronounce: 'VEE-nuh KAY-vuh',
      summary: 'After your body uses up the oxygen in your blood, the veins carry that blood back to the heart so it can get fresh oxygen from the lungs! The Superior and Inferior Vena Cava are the two biggest veins in your body — one brings blood back from your head and arms, and the other brings blood up from your legs and belly.',
      whyYouNeedIt: 'Blood flows in a non-stop circle (that’s why it’s called circulation!). Without these giant veins, blood couldn’t get back to the heart and lungs to recharge with oxygen!',
      funFacts: [
        'On anatomy charts, veins are colored blue to show that the blood inside has already delivered its oxygen payload!',
        'The Inferior Vena Cava is the widest vein in your body, running right alongside your spine.',
        'Every time you take a deep breath, pressure in your chest helps pull blood up the Vena Cava into your heart!'
      ],
      quickStats: [
        { label: 'Vessel Type', value: 'Largest Veins (Blue = Returning to Heart)' },
        { label: 'Two Main Trunks', value: 'Superior (Upper Body) & Inferior (Lower Body)' },
        { label: 'Destination', value: 'Right Atrium of the Heart' },
        { label: 'Pressure', value: 'Low, steady flow back to the heart' }
      ]
    },
    pro: {
      classification: 'TA98: A12.3.03.001 / A12.3.09.001 • FMA: 4720 / 10951',
      summary: 'Primary systemic capacitance trunks returning deoxygenated blood to the right atrium. SVC forms at the junction of left and right brachiocephalic veins (1st right costal cartilage); IVC forms at L5 from the confluence of common iliac veins.',
      bloodSupply: 'Adventitial vasa vasorum from adjacent mediastinal, phrenic, and lumbar arterial branches',
      venousDrainage: 'SVC receives azygos vein at T4 before entering superior right atrium; IVC pierces central tendon of diaphragm at T8 (caval opening) to enter inferior right atrium',
      innervation: 'Autonomic vasomotor fibers and low-pressure cardiopulmonary baroreceptors at the cavoatrial junctions (Bainbridge reflex)',
      originInsertion: 'Valveless large-caliber retroperitoneal and mediastinal venous trunks positioned to the right of the midline aorta',
      metrics: [
        { label: 'Central Venous Pressure', value: '2 – 8 mmHg (Right Atrium / SVC)' },
        { label: 'IVC Diameter', value: '1.5 – 2.5 cm (>50% inspiratory collapse = normal RAP)' },
        { label: 'Diaphragmatic Level', value: 'IVC passes through T8 (8 letters in Vena Cava)' },
        { label: 'Collateral Pathway', value: 'Azygos / Hemiazygos & Lumbar venous system' }
      ],
      clinicalPearls: 'In late pregnancy, supine positioning causes gravid uterine compression of the IVC (supine hypotensive syndrome), reducing venous return and cardiac output; relieved by 15–30° left lateral tilt.'
    }
  },

  {
    id: 'carotid-jugular',
    name: 'Carotid Arteries & Jugular Veins',
    latinName: 'Arteria carotis communis et Vena jugularis interna',
    system: 'vascular',
    systemLabel: 'Head & Neck Vascular System',
    region: 'Cervical Neck (Carotid Sheath)',
    keywords: ['carotid', 'jugular', 'neck vein', 'neck artery', 'pulse', 'brain blood', 'carotid artery', 'jugular vein'],
    focusPos: { x: 0, y: 120, z: 5 },
    defaultZoom: 4.1,
    cameraAngles: { rotX: 0.14, rotY: -0.35 },
    color: '#ef4444',
    kids: {
      badge: '💓 The Brain’s Express Blood Pipelines!',
      pronounce: 'Kuh-ROT-id & JUG-yoo-ler',
      summary: 'Running up both sides of your neck are two super-important pairs of vessels! The Carotid Arteries (red) rush fresh oxygen-rich blood up to your brain, and the Jugular Veins (blue) carry the used blood back down to your heart.',
      whyYouNeedIt: 'Your brain never takes a break and needs a constant, high-speed supply of oxygen every single second!',
      funFacts: [
        'If you gently place two fingers on the side of your neck just below your jaw, you can feel your Carotid pulse beating!',
        'Giraffes have special extra-strong valves in their jugular veins so blood doesn’t rush to their heads when they bend down to drink!',
        'The carotid artery splits into two branches like a "Y" — one for your face and one for the inside of your brain.'
      ],
      quickStats: [
        { label: 'Carotid Job', value: 'Brings fresh oxygen UP to Brain & Face' },
        { label: 'Jugular Job', value: 'Brings used blood DOWN to Heart' },
        { label: 'Pulse Spot', value: 'Easy to feel gently on the neck' },
        { label: 'Brain Supply', value: 'Delivers ~80% of the brain’s blood' }
      ]
    },
    pro: {
      classification: 'TA98: A12.2.04.006 / A12.3.05.001 • FMA: 3939 / 4724',
      summary: 'Paired neurovascular bundle enclosed within the cervical carotid sheath alongside the Vagus Nerve (CN X) and deep cervical lymph nodes.',
      bloodSupply: 'Right Common Carotid arises from Brachiocephalic Trunk; Left Common Carotid arises directly from Aortic Arch. Bifurcates at C4 (superior border of thyroid cartilage) into Internal (ICA, no neck branches) and External Carotid (ECA)',
      venousDrainage: 'Internal Jugular Vein (IJV) begins at the jugular foramen as the continuation of the sigmoid sinus and joins the subclavian vein at the venous angle (Pirogoff’s angle) to form the brachiocephalic vein',
      innervation: 'Carotid sinus baroreceptor (Hering’s nerve, branch of CN IX Glossopharyngeal) and carotid body chemoreceptor (CN IX & CN X) at the C4 bifurcation',
      originInsertion: 'Travels within carotid sheath: IJV lateral, Common/Internal Carotid medial, Vagus nerve posterior between them',
      metrics: [
        { label: 'Bifurcation Landmark', value: 'C3–C4 (Upper border of Thyroid Cartilage)' },
        { label: 'JVP Assessment', value: 'Normal ≤ 3 cm above Sternal Angle at 45° (~8 cm H₂O)' },
        { label: 'ICA Flow Share', value: '~80% of total cerebral perfusion' },
        { label: 'Central Line Target', value: 'Right IJV (straight course to SVC, avoids thoracic duct)' }
      ],
      clinicalPearls: 'Atherosclerotic plaques preferentially form at the carotid bifurcation due to turbulent boundary-layer separation. Right IJV ultrasound-guided cannulation avoids the thoracic duct (which enters at the left venous angle).'
    }
  },

  {
    id: 'brachial-radial-vessels',
    name: 'Subclavian, Brachial & Radial Vessels (Arm Circulation)',
    latinName: 'Arteria/Vena subclavia, brachialis, radialis et cephalica',
    system: 'vascular',
    systemLabel: 'Upper Limb Vascular System',
    region: 'Shoulder, Arm, Forearm & Wrist',
    keywords: ['brachial', 'radial', 'arm vein', 'wrist pulse', 'cephalic vein', 'median cubital', 'subclavian', 'arm blood'],
    focusPos: { x: 40, y: 46, z: 6 },
    defaultZoom: 3.4,
    cameraAngles: { rotX: 0.16, rotY: -0.45 },
    color: '#ef4444',
    kids: {
      badge: '⌚ Where Doctors Check Your Wrist Pulse & Blood Pressure!',
      pronounce: 'BRAY-kee-ul & RAY-dee-ul',
      summary: 'These blood vessels travel from your collarbone down through your upper arm, elbow, and wrist all the way to your fingertips! They keep your hands warm and give your arm muscles fuel to throw a ball, write, or climb.',
      whyYouNeedIt: 'Whenever a nurse puts an inflatable cuff on your arm to check your blood pressure, they are listening to the Brachial Artery!',
      funFacts: [
        'Touch the thumb-side of your wrist with two fingers — that steady tap-tap-tap is your Radial Artery pulse!',
        'Look at the inside of your elbow or the back of your hand: those greenish-blue lines under your skin are superficial veins!',
        'When your hands get cold outside, tiny muscles in these vessels narrow slightly to keep warm blood near your heart.'
      ],
      quickStats: [
        { label: 'Upper Arm', value: 'Brachial Artery (Blood Pressure cuff spot)' },
        { label: 'Thumb-Side Wrist', value: 'Radial Artery (Wrist pulse spot)' },
        { label: 'Elbow Vein', value: 'Median Cubital Vein (Standard blood draw spot)' },
        { label: 'Hand Loops', value: 'Two palmar arches feed all 10 fingers' }
      ]
    },
    pro: {
      classification: 'TA98: A12.2.09.002 / A12.3.08.001 • FMA: 22689',
      summary: 'Upper extremity arterial continuum (Subclavian → Axillary at 1st rib → Brachial at teres major → Radial & Ulnar at radial neck) paired with deep venae comitantes and superficial cephalic/basilic venous networks.',
      bloodSupply: 'Radial and ulnar arteries anastomose in the hand via the superficial (predominantly ulnar) and deep (predominantly radial) palmar arches, giving rise to common and proper palmar digital arteries',
      venousDrainage: 'Dorsal venous network drains into lateral Cephalic Vein (deltopectoral groove → axillary vein) and medial Basilic Vein (joins brachial veins to form axillary vein), connected across the cubital fossa by the Median Cubital Vein',
      innervation: 'Sympathetic postganglionic vasomotor fibers carried via roots and cords of the Brachial Plexus (C5–T1)',
      originInsertion: 'Cubital fossa contents from medial to lateral (TAN): Tendon of biceps, Artery (brachial), Nerve (median)',
      metrics: [
        { label: 'Normal BP (Brachial)', value: '< 120 / 80 mmHg' },
        { label: 'Allen Test', value: 'Verifies ulnar collateral perfusion (< 5–7 sec palmar blush) before radial arterial line/harvest' },
        { label: 'Venipuncture Site', value: 'Median Cubital Vein (separated from brachial artery/median nerve by bicipital aponeurosis)' },
        { label: 'AV Fistula Gold Standard', value: 'Brescia-Cimino radiocephalic fistula at wrist' }
      ],
      clinicalPearls: 'Supracondylar humerus fractures in children risk lacerating or tethering the brachial artery and median nerve in the cubital fossa, potentially leading to Volkmann’s ischemic contracture of forearm flexors.'
    }
  },

  {
    id: 'femoral-saphenous-vessels',
    name: 'Iliac, Femoral & Great Saphenous Vessels (Leg Circulation)',
    latinName: 'Arteria/Vena iliaca, femoralis, poplitea et Vena saphena magna',
    system: 'vascular',
    systemLabel: 'Lower Limb Vascular System',
    region: 'Pelvis, Thigh, Knee & Lower Leg',
    keywords: ['femoral', 'saphenous', 'iliac', 'leg vein', 'leg artery', 'thigh blood', 'popliteal', 'valves'],
    focusPos: { x: 18, y: -42, z: 4 },
    defaultZoom: 3.1,
    cameraAngles: { rotX: 0.15, rotY: -0.3 },
    color: '#3b82f6',
    kids: {
      badge: '🦵 Gravity-Defying Leg Veins & Power Arteries!',
      pronounce: 'FEM-or-ul & Suh-FEE-nus',
      summary: 'Your legs have the longest blood vessels in your body! The Femoral Artery rockets oxygen down to your giant leg muscles, while the Great Saphenous and Femoral Veins use special one-way trapdoors (valves) and muscle squeezes to push blood all the way back UP against gravity to your heart!',
      whyYouNeedIt: 'Pumping blood down to your feet is easy with gravity, but getting it 4 or 5 feet back UP to your heart requires one-way valves and your calf muscles acting like a second pump!',
      funFacts: [
        'The Great Saphenous Vein is the longest single vein in the entire human body — running from your big toe all the way to your hip!',
        'Every time you walk or tiptoe, your calf muscles squeeze the deep leg veins and squirt blood upward toward your heart!',
        'Surgeons sometimes borrow a piece of the Great Saphenous Vein to help fix blocked blood vessels on the heart!'
      ],
      quickStats: [
        { label: 'Longest Vein', value: 'Great Saphenous Vein (Foot to Hip)' },
        { label: 'Main Thigh Artery', value: 'Femoral Artery' },
        { label: 'Secret Weapon', value: 'One-way pocket valves stop blood falling back' },
        { label: 'Second Heart', value: 'Calf muscle pump when you walk!' }
      ]
    },
    pro: {
      classification: 'TA98: A12.2.16.010 / A12.3.11.001 • FMA: 70248 / 21376',
      summary: 'High-flow lower extremity arterial axis (External Iliac → Common Femoral beneath inguinal ligament → Deep/Superficial Femoral → Popliteal via adductor hiatus → Anterior/Posterior Tibial & Fibular) paired with deep veins and the superficial Great/Small Saphenous systems.',
      bloodSupply: 'Profunda femoris (deep artery of thigh) supplies thigh musculature via medial/lateral femoral circumflex and perforating branches; superficial femoral artery continues to supply the leg and foot',
      venousDrainage: 'Deep venous system (tibial → popliteal → femoral → external iliac) and superficial Great Saphenous Vein (ascends anterior to medial malleolus, empties into femoral vein at saphenofemoral junction) linked by perforating veins with bicuspid valves',
      innervation: 'Lumbar and sacral sympathetic chain ganglia (L1–S3) regulating lower-extremity vascular resistance and orthostatic vasoconstriction',
      originInsertion: 'Femoral triangle arrangement from lateral to medial (NAVEL): Femoral Nerve, Artery, Vein, Empty space, Lymphatics',
      metrics: [
        { label: 'Ankle-Brachial Index (ABI)', value: 'Normal 1.0 – 1.4 (PAD < 0.9; Critical Limb Ischemia < 0.4)' },
        { label: 'Venous Valves', value: '10 – 20 bicuspid valves along the Great Saphenous Vein' },
        { label: 'Catheter Access', value: 'Common Femoral Artery/Vein 1–2 cm inferior to mid-inguinal point' },
        { label: 'Pedal Pulses', value: 'Dorsalis Pedis (lateral to EHL tendon) & Posterior Tibial (posterior to medial malleolus)' }
      ],
      clinicalPearls: 'Virchow’s triad (stasis, endothelial injury, hypercoagulability) predisposes deep calf/femoral veins to Deep Vein Thrombosis (DVT), which can embolize via the IVC and right heart to cause Pulmonary Embolism (PE).'
    }
  },

  // ============================================================================
  // 4. SKELETAL SYSTEM (BONES)
  // ============================================================================
  {
    id: 'skull',
    name: 'Skull (Cranium & Mandible)',
    latinName: 'Cranium (Neurocranium et Viscerocranium)',
    system: 'skeleton',
    systemLabel: 'Axial Skeletal System',
    region: 'Head',
    keywords: ['skull', 'cranium', 'head bone', 'jaw', 'mandible', 'face bones', 'helmet'],
    focusPos: { x: 0, y: 145, z: 4 },
    defaultZoom: 3.7,
    cameraAngles: { rotX: 0.15, rotY: -0.38 },
    color: '#e2e8f0',
    kids: {
      badge: '🪖 Your Built-In Bone Helmet!',
      pronounce: 'SKUL (KRAY-nee-um)',
      summary: 'Your skull is a super-strong helmet made of 22 bones locked together like puzzle pieces! The top part (the Cranium) protects your delicate brain, while the front part shapes your face, holds your teeth, and protects your eyes and ears.',
      whyYouNeedIt: 'Without your skull helmet, every bump would hurt your brain, and without your lower jawbone (the mandible), you couldn’t chew food or talk!',
      funFacts: [
        'Out of all 22 bones in your skull, only ONE can move — your lower jawbone (the Mandible)!',
        'The lines where skull bones lock together like zig-zag zippers are called "sutures".',
        'Inside your skull behind your ear are the 3 smallest bones in your whole body (malleus, incus, stapes) — smaller than a grain of rice!'
      ],
      quickStats: [
        { label: 'Total Skull Bones', value: '22 Bones (8 Cranial, 14 Facial)' },
        { label: 'Moving Bone', value: 'Only 1 (Mandible / Lower Jaw)' },
        { label: 'Strongest Bone', value: 'Mandible is the strongest bone in the face' },
        { label: 'Smallest Bones', value: '3 Ear Ossicles inside temporal bone' }
      ]
    },
    pro: {
      classification: 'TA98: A02.1.00.001 • FMA: 46565',
      summary: 'Composite bony structure of 22 bones (excluding 6 auditory ossicles) divided into the neurocranium (frontal, parietal ×2, temporal ×2, occipital, sphenoid, ethmoid) and viscerocranium (facial skeleton & mandible) joined by fibrous gomphoses/sutures and the synovial temporomandibular joint (TMJ).',
      bloodSupply: 'Middle meningeal artery (branch of maxillary artery via foramen spinosum), superficial temporal, occipital, and facial branches of the External Carotid Artery',
      venousDrainage: 'Diploic veins and emissary veins communicating between extracranial scalp veins and intracranial dural venous sinuses',
      innervation: 'Cutaneous and periosteal sensory supply via Trigeminal Nerve divisions (CN V1 Ophthalmic, V2 Maxillary, V3 Mandibular) and C2–C3 cervical nerves',
      originInsertion: 'Articulates inferiorly with C1 Atlas at the atlanto-occipital condyles; mandible articulates via fibrocartilaginous disc at the mandibular fossa of the temporal bone',
      metrics: [
        { label: 'Cranial Vault Layers', value: 'Outer table, cancellous diploë, inner vitreous table' },
        { label: 'Fontanelle Closure', value: 'Posterior: 2–3 mos | Anterior (Bregma): 12–18 mos' },
        { label: 'Foramen Magnum', value: 'Transmits medulla, meninges, vertebral & spinal arteries, CN XI' },
        { label: 'Weakest Spot', value: 'Pterion (H-shaped junction of frontal, parietal, temporal, sphenoid)' }
      ],
      clinicalPearls: 'Trauma to the pterion fractures the thin temporal squama overlying the anterior branch of the Middle Meningeal Artery, causing an arterial Epidural Hematoma (biconvex lens-shaped on CT with a classic lucid interval).'
    }
  },

  {
    id: 'rib-cage',
    name: 'Rib Cage & Sternum (Thoracic Cage)',
    latinName: 'Cavea thoracis (Costae I–XII et Sternum)',
    system: 'skeleton',
    systemLabel: 'Axial Skeletal System',
    region: 'Thorax (Chest)',
    keywords: ['ribs', 'rib cage', 'sternum', 'breastbone', 'chest bones', 'thorax', 'costae'],
    focusPos: { x: 0, y: 68, z: 6 },
    defaultZoom: 3.1,
    cameraAngles: { rotX: 0.15, rotY: -0.28 },
    color: '#e2e8f0',
    kids: {
      badge: '🛡️ Flexible Armor for Your Heart & Lungs!',
      pronounce: 'RIB KAYJ & STER-num',
      summary: 'Feel the curved bones across your chest — that’s your rib cage! You have 12 pairs of ribs (24 ribs total) that curve from your backbone in the back to your flat breastbone (Sternum) in the front, forming a protective cage around your heart and lungs.',
      whyYouNeedIt: 'A solid box of bone wouldn’t let you breathe! Your ribs are connected to your breastbone with stretchy cartilage so your chest can expand and shrink with every breath.',
      funFacts: [
        'Both boys and girls have the exact same number of ribs: 12 pairs (24 ribs in total)!',
        'The bottom 2 pairs of ribs are called "floating ribs" because they only attach to your spine in the back, not to your breastbone in the front!',
        'Inside your flat breastbone (sternum), special red bone marrow is busy making millions of new blood cells every second.'
      ],
      quickStats: [
        { label: 'Total Ribs', value: '24 Ribs (12 Pairs)' },
        { label: 'Front Shield', value: 'Sternum (Breastbone)' },
        { label: 'True Ribs', value: 'Pairs 1–7 attach directly to Sternum' },
        { label: 'Floating Ribs', value: 'Pairs 11–12 float free in front' }
      ]
    },
    pro: {
      classification: 'TA98: A02.3.04.001 • FMA: 7480',
      summary: 'Osteocartilaginous thoracic cage formed by the sternum (manubrium, body, xiphoid process), 12 pairs of ribs (True vertebrosternal 1–7, False vertebrochondral 8–10, Floating vertebral 11–12), costal cartilages, and T1–T12 thoracic vertebrae.',
      bloodSupply: 'Posterior intercostal arteries (1st–2nd from supreme intercostal; 3rd–11th from descending thoracic aorta) anastomosing with anterior intercostal branches of the Internal Thoracic (Mammary) Artery',
      venousDrainage: 'Intercostal veins draining anteriorly into internal thoracic veins and posteriorly into the azygos/hemiazygos system',
      innervation: 'Intercostal nerves (anterior rami of T1–T11) and subcostal nerve (T12) coursing in the costal groove along the inferior rib border',
      originInsertion: 'Pump-handle motion (upper ribs elevates sternum, increasing AP diameter) and bucket-handle motion (lower ribs elevates lateral shafts, increasing transverse diameter)',
      metrics: [
        { label: 'Sternal Angle (Angle of Louis)', value: 'Manubriosternal junction at 2nd costal cartilage / T4–T5 disc' },
        { label: 'Neurovascular Bundle', value: 'Runs in inferior costal groove: VAN (Vein, Artery, Nerve superior-to-inferior)' },
        { label: 'Thoracentesis Safe Zone', value: 'Superior border of lower rib (avoids inferior costal groove VAN)' },
        { label: 'Hematopoiesis', value: 'Sternum and ribs retain active red marrow throughout adulthood' }
      ],
      clinicalPearls: 'Always insert thoracentesis needles or chest tubes immediately superior to the upper margin of the rib (in the safety triangle) to avoid lacerating the intercostal neurovascular bundle (VAN) running in the subcostal groove of the rib above.'
    }
  },

  {
    id: 'spine',
    name: 'Vertebral Column (Spine)',
    latinName: 'Columna vertebralis (Vertebrae C1–Co4)',
    system: 'skeleton',
    secondarySystem: 'nerves',
    systemLabel: 'Axial Skeletal & Neural Pillar',
    region: 'Posterior Midline (Neck to Pelvis)',
    keywords: ['spine', 'backbone', 'vertebrae', 'spinal column', 'neck bones', 'lower back', 'lumbar', 'cervical', 'thoracic'],
    focusPos: { x: 0, y: 55, z: -12 },
    defaultZoom: 2.9,
    cameraAngles: { rotX: 0.14, rotY: 2.65 },
    color: '#e2e8f0',
    kids: {
      badge: '🏗️ The Flexible Tower That Holds You Up!',
      pronounce: 'SPYN (VER-tuh-bray)',
      summary: 'Instead of one stiff stick of bone, your backbone is a stack of 33 ring-shaped bones called vertebrae with squishy jelly-donut cushions (discs) in between! This lets you stand tall while still bending, twisting, and dancing.',
      whyYouNeedIt: 'Besides holding up your head and body, the hollow rings inside your spine form a safe armored tunnel for your Spinal Cord — the main cable carrying messages between your brain and body!',
      funFacts: [
        'You are actually about 1 centimeter taller when you wake up in the morning than at bedtime because the squishy discs between your spine bones puff back up while you sleep!',
        'Humans and long-necked giraffes both have the exact same number of neck bones: 7 cervical vertebrae!',
        'Sideways, your spine is shaped like a springy "S" curve so it acts like a shock absorber when you jump.'
      ],
      quickStats: [
        { label: 'Total Bones', value: '33 Vertebrae (24 movable + Sacrum & Coccyx)' },
        { label: 'Neck (Cervical)', value: '7 Vertebrae (C1–C7)' },
        { label: 'Chest & Back', value: '12 Thoracic + 5 Lumbar' },
        { label: 'Shock Absorbers', value: '23 Intervertebral Discs' }
      ]
    },
    pro: {
      classification: 'TA98: A02.2.00.001 • FMA: 13478',
      summary: 'Segmented axial column of 33 vertebrae (7 Cervical, 12 Thoracic, 5 Lumbar, 5 fused Sacral, 4 fused Coccygeal) exhibiting primary (thoracic & sacral kyphosis) and secondary (cervical & lumbar lordosis) sagittal curvatures.',
      bloodSupply: 'Segmental spinal branches from vertebral, ascending cervical, posterior intercostal, lumbar, and lateral sacral arteries feeding the anterior and paired posterior spinal arteries',
      venousDrainage: 'Valveless Batson’s internal and external vertebral venous plexuses communicating freely with pelvic, intercostal, and cranial dural sinuses',
      innervation: 'Recurrent meningeal (sinuvertebral) nerves innervating posterior longitudinal ligament and outer annulus fibrosus; medial branches of dorsal rami innervating zygapophyseal (facet) joints',
      originInsertion: 'Stabilized by Anterior/Posterior Longitudinal Ligaments, Ligamentum Flavum, Interspinous, and Supraspinous ligaments; intervertebral discs comprise outer type-I collagen annulus fibrosus and inner proteoglycan nucleus pulposus',
      metrics: [
        { label: 'Vertebral Formula', value: 'C7 • T12 • L5 • S5 (fused) • Co4 (fused)' },
        { label: 'Adult Conus Medullaris', value: 'Terminates at L1–L2 lower border (Cauda Equina below)' },
        { label: 'Lumbar Puncture Level', value: 'L3–L4 or L4–L5 interspace (iliac crests = L4 supracristal line)' },
        { label: 'Special Vertebrae', value: 'C1 Atlas ("Yes" nod) & C2 Axis with Odontoid Dens ("No" rotation)' }
      ],
      clinicalPearls: 'Posterolateral disc herniation at L4–L5 compresses the traversing L5 nerve root (causing foot drop / weak EHL dorsiflexion), whereas L5–S1 herniation compresses the S1 root (absent Achilles reflex, weak plantarflexion). Batson’s valveless venous plexus permits prostate/breast cancer metastasis directly to vertebral bodies.'
    }
  },

  {
    id: 'humerus-radius-ulna',
    name: 'Humerus, Radius & Ulna (Arm & Forearm Bones)',
    latinName: 'Humerus, Radius et Ulna',
    system: 'skeleton',
    systemLabel: 'Appendicular Skeletal System',
    region: 'Upper Limb (Arm & Forearm)',
    keywords: ['humerus', 'radius', 'ulna', 'arm bone', 'elbow', 'forearm', 'funny bone', 'clavicle', 'shoulder'],
    focusPos: { x: -42, y: 48, z: 4 },
    defaultZoom: 3.3,
    cameraAngles: { rotX: 0.15, rotY: 0.45 },
    color: '#e2e8f0',
    kids: {
      badge: '🦾 The 3 Bones That Let Your Arm Reach, Bend & Twist!',
      pronounce: 'HYOO-mer-us, RAY-dee-us & UL-nuh',
      summary: 'Your upper arm has one big strong bone called the Humerus, and your forearm has two teammate bones called the Radius and Ulna! Together, they let your shoulder swing in circles, your elbow hinge up and down, and your hand flip palm-up or palm-down.',
      whyYouNeedIt: 'Having TWO bones in your forearm (Radius and Ulna) is the secret trick that lets you twist a doorknob, use a screwdriver, or flip a pancake!',
      funFacts: [
        'Why do they call the elbow the "Funny Bone"? Because the upper arm bone is called the HUMERUS (which sounds like "humorous")! Actually, the tingle comes from bumping the Ulnar Nerve right next to the bone.',
        'When you turn your palm face-down, the Radius bone crosses right over the Ulna bone like an "X"!',
        'Your hands and wrists at the end of these bones have 27 small bones in each hand (54 in both hands)!'
      ],
      quickStats: [
        { label: 'Upper Arm', value: '1 Bone: Humerus' },
        { label: 'Forearm', value: '2 Bones: Radius (thumb side) & Ulna (pinky side)' },
        { label: 'Elbow Joint', value: 'Hinge + Pivot Joint' },
        { label: 'Hand Bones', value: '27 bones in each hand & wrist' }
      ]
    },
    pro: {
      classification: 'TA98: A02.4.04.001 / A02.4.05.001 / A02.4.06.001 • FMA: 13303',
      summary: 'Upper limb osteology: Humerus articulates proximally at the glenohumeral ball-and-socket joint and distally at the humeroulnar (hinge) and humeroradial joints; Radius and Ulna articulate at proximal and distal radioulnar pivot joints linked by the interosseous membrane.',
      bloodSupply: 'Nutrient arteries from Anterior/Posterior Circumflex Humeral, Profunda Brachii, Radial, Ulnar, and Anterior/Posterior Interosseous arteries',
      venousDrainage: 'Deep venae comitantes of brachial, radial, and ulnar arteries',
      innervation: 'Four humerus fracture-nerve pairings: Surgical neck → Axillary nerve; Radial groove (mid-shaft) → Radial nerve; Distal supracondylar → Median nerve; Medial epicondyle → Ulnar nerve',
      originInsertion: 'Proximal radial head held against radial notch of ulna by the annular ligament, permitting 180° pronation/supination around the stationary ulna',
      metrics: [
        { label: 'Carrying Angle', value: '10° – 15° physiological cubitus valgus in full extension' },
        { label: 'Force Transmission', value: 'Hand → Scaphoid/Lunate → Distal Radius → Interosseous Membrane → Proximal Ulna → Humerus' },
        { label: 'Classic Fractures', value: 'Colles (distal radius dorsal dinner-fork), Monteggia (ulna + radial head), Galeazzi (radius + DRUJ)' },
        { label: 'Rotator Cuff Insertion', value: 'Greater Tubercle (Supraspinatus, Infraspinatus, Teres Minor) & Lesser Tubercle (Subscapularis)' }
      ],
      clinicalPearls: 'Midshaft humerus fracture damages the Radial Nerve and Profunda Brachii artery in the spiral groove, presenting with wrist drop (loss of brachioradialis and forearm extensors) and dorsal first-webspace sensory loss.'
    }
  },

  {
    id: 'pelvis',
    name: 'Pelvis (Hip Bones & Sacrum)',
    latinName: 'Pelvis (Os coxae: Ilium, Ischium, Pubis et Os sacrum)',
    system: 'skeleton',
    systemLabel: 'Pelvic Girdle & Skeletal System',
    region: 'Pelvic Region',
    keywords: ['pelvis', 'hip', 'hips', 'hip bone', 'ilium', 'ischium', 'pubis', 'sacrum', 'waist'],
    focusPos: { x: 0, y: -12, z: 2 },
    defaultZoom: 3.2,
    cameraAngles: { rotX: 0.16, rotY: -0.25 },
    color: '#e2e8f0',
    kids: {
      badge: '🥣 The Strong Basin That Connects Your Upper & Lower Body!',
      pronounce: 'PEL-vis (IL-ee-um)',
      summary: 'Your pelvis is a bowl-shaped ring of super-sturdy bones at your hips! It holds up the weight of your entire upper body when you sit or stand, protects the organs in your lower belly, and has two deep cup sockets on the sides where your leg bones plug in.',
      whyYouNeedIt: 'It bridges your spine to your two legs so you can walk upright on two feet, run, and balance!',
      funFacts: [
        'Each side of your hip bone is actually made of 3 bones (Ilium, Ischium, and Pubis) that fuse together into one solid bone as you grow up!',
        'When you sit down on a chair, you are actually sitting on two curved bottom hip bones called your "sit bones" (ischial tuberosities)!',
        'The word "Pelvis" comes from the Latin word for "basin" or "bowl".'
      ],
      quickStats: [
        { label: 'Shape', value: 'Protective Bony Bowl / Ring' },
        { label: 'Hip Socket', value: 'Acetabulum (Deep cup for thigh bone)' },
        { label: '3 Fused Bones', value: 'Ilium, Ischium, and Pubis on each side' },
        { label: 'Main Job', value: 'Transfers weight from Spine to both Legs' }
      ]
    },
    pro: {
      classification: 'TA98: A02.5.01.001 • FMA: 16585',
      summary: 'Bony ring composed of paired innominate bones (fused ilium, ischium, and pubis meeting at the triradiate cartilage of the acetabulum) joined anteriorly at the fibrocartilaginous pubic symphysis and posteriorly with the sacrum at the sacroiliac (SI) joints.',
      bloodSupply: 'Internal Iliac (iliolumbar, obturator, superior/inferior gluteal, internal pudendal) and External Iliac (deep circumflex iliac) arterial systems',
      venousDrainage: 'Rich retroperitoneal pelvic venous plexuses draining into Internal and Common Iliac Veins',
      innervation: 'Lumbosacral plexus (L1–S4); Obturator nerve (L2–L4) passes through obturator canal; Sciatic nerve (L4–S3) exits via greater sciatic foramen inferior to piriformis',
      originInsertion: 'Stabilized by iliolumbar, anterior/posterior sacroiliac, sacrotuberous, and sacrospinous ligaments; ASIS gives origin to sartorius and inguinal ligament',
      metrics: [
        { label: 'Pelvic Inlet Conjugate', value: 'Obstetric conjugate ≥ 10.5 – 11.0 cm (Gynecoid female pelvis)' },
        { label: 'Acetabular Contributions', value: 'Ilium (~2/5), Ischium (~2/5), Pubis (~1/5)' },
        { label: 'Marrow Biopsy Site', value: 'Posterior Superior Iliac Spine (PSIS) & Iliac Crest' },
        { label: 'Weight Transfer Path', value: 'Spine → Sacrum → SI Joints → Iliac Arcuate Line → Acetabulum (Standing) or Ischial Tuberosity (Sitting)' }
      ],
      clinicalPearls: 'High-energy "open-book" pelvic ring fractures can shear the posterior pelvic venous plexus and internal iliac arterial branches, causing life-threatening retroperitoneal hemorrhage (>2–3 L) requiring immediate pelvic binder stabilization.'
    }
  },

  {
    id: 'femur-tibia-fibula',
    name: 'Femur, Patella, Tibia & Fibula (Thigh, Knee & Leg Bones)',
    latinName: 'Femur, Patella, Tibia et Fibula',
    system: 'skeleton',
    systemLabel: 'Appendicular Skeletal System',
    region: 'Lower Limb (Thigh, Knee & Leg)',
    keywords: ['femur', 'thigh bone', 'tibia', 'shinbone', 'fibula', 'patella', 'kneecap', 'knee', 'leg bone', 'longest bone'],
    focusPos: { x: -18, y: -55, z: 4 },
    defaultZoom: 2.9,
    cameraAngles: { rotX: 0.14, rotY: 0.3 },
    color: '#e2e8f0',
    kids: {
      badge: '🏆 Home of the Longest & Strongest Bone in Your Body!',
      pronounce: 'FEE-mer, Puh-TEL-uh & TIB-ee-uh',
      summary: 'Your thigh bone — the Femur — is the longest, heaviest, and strongest bone in the human body! Below your shield-shaped kneecap (Patella) are your two lower leg bones: the thick shinbone (Tibia) and its slender partner (Fibula).',
      whyYouNeedIt: 'Every time you jump, sprint, or kick a soccer ball, these super-strong bones absorb forces several times heavier than your entire body weight!',
      funFacts: [
        'Weight for weight, your Femur thigh bone is stronger than solid concrete!',
        'Your Femur makes up about 1/4 (25%) of your total height!',
        'Your kneecap (Patella) is a special "sesamoid" bone built right inside a tendon to give your thigh muscles extra leverage when straightening your leg.'
      ],
      quickStats: [
        { label: 'Record Holder', value: 'Femur = Longest & Strongest Bone' },
        { label: 'Kneecap', value: 'Patella (Protects the knee joint)' },
        { label: 'Shinbone', value: 'Tibia (Carries ~85% of lower leg weight)' },
        { label: 'Side Stabilizer', value: 'Fibula (Forms outer ankle bone)' }
      ]
    },
    pro: {
      classification: 'TA98: A02.5.04.001 / A02.5.06.001 • FMA: 9611 / 24476',
      summary: 'Lower extremity weight-bearing pillar: Femur (head, neck at ~125° inclination angle, shaft, medial/lateral condyles), sesamoid Patella, medial weight-bearing Tibia, and lateral Fibula (muscle attachment & ankle mortise stability).',
      bloodSupply: 'Femoral head supplied precariously by retinacular branches of the Medial Femoral Circumflex Artery (MFCA) and minor foveolar artery inside ligamentum teres; tibial shaft supplied by nutrient branch of Posterior Tibial Artery',
      venousDrainage: 'Deep femoral, popliteal, and anterior/posterior tibial venae comitantes',
      innervation: 'Hilton’s law: Hip & knee joints innervated by Femoral, Obturator, and Sciatic (Tibial/Common Fibular) articular branches (hip pathology frequently refers pain to the medial knee via the obturator nerve)',
      originInsertion: 'Knee stabilized by ACL (prevents anterior tibial translation), PCL (prevents posterior translation), MCL, LCL, and fibrocartilaginous medial/lateral menisci',
      metrics: [
        { label: 'Angle of Inclination', value: '120° – 135° (Coxa vara < 120°; Coxa valga > 135°)' },
        { label: 'Unhappy Triad (O’Donoghue)', value: 'ACL + MCL + Medial Meniscus (from lateral valgus blow to knee)' },
        { label: 'Fibular Neck Hazard', value: 'Common Fibular (Peroneal) Nerve wraps around fibular neck → Foot Drop if injured' },
        { label: 'Compartment Syndrome', value: '4 crural compartments (Anterior, Lateral, Superficial/Deep Posterior); ΔP < 30 mmHg requires fasciotomy' }
      ],
      clinicalPearls: 'Intracapsular femoral neck fractures disrupt the ascending retinacular branches of the Medial Femoral Circumflex Artery, carrying a high risk of avascular necrosis (AVN) of the femoral head.'
    }
  },

  // ============================================================================
  // 5. MUSCULAR SYSTEM
  // ============================================================================
  {
    id: 'pectoralis-deltoid',
    name: 'Pectoralis Major & Deltoid (Chest & Shoulder Muscles)',
    latinName: 'Musculus pectoralis major et Musculus deltoideus',
    system: 'muscles',
    systemLabel: 'Upper Torso & Shoulder Musculature',
    region: 'Anterior Thorax & Shoulder',
    keywords: ['pectoralis', 'pecs', 'chest muscle', 'deltoid', 'shoulder muscle', 'pushing', 'shoulder'],
    focusPos: { x: 0, y: 80, z: 10 },
    defaultZoom: 3.1,
    cameraAngles: { rotX: 0.14, rotY: -0.25 },
    color: '#dc2626',
    kids: {
      badge: '💪 Your Pushing, Hugging & Arm-Lifting Powerhouses!',
      pronounce: 'Pek-tor-AL-is & DEL-toyd',
      summary: 'Across the front of your chest are the fan-shaped Pectoralis Major ("pec") muscles, and capping your shoulders like rounded armor pads are the Deltoid muscles! Together they let you push doors open, give big bear hugs, swim, and lift your arms up to the sky.',
      whyYouNeedIt: 'Every time you do a push-up, throw a ball, or raise your hand in class, your Pectoralis and Deltoid muscles team up to move your shoulder!',
      funFacts: [
        'The word "Deltoid" comes from the Greek letter Delta (Δ) because the shoulder muscle is shaped just like a triangle!',
        'Your Deltoid has 3 parts (front, side, and back) so you can raise your arm forward, sideways, or backward.',
        'Muscles can only PULL on bones — they never push! So to move your arm both ways, muscles work in opposing teams.'
      ],
      quickStats: [
        { label: 'Pectoralis Job', value: 'Pushes arms forward & pulls them across chest' },
        { label: 'Deltoid Job', value: 'Lifts arms up in every direction' },
        { label: 'Shape', value: 'Fan-shaped Chest + Triangle Shoulder' },
        { label: 'Teamwork', value: 'Works with back muscles (Latissimus & Trapezius)' }
      ]
    },
    pro: {
      classification: 'TA98: A04.4.01.002 / A04.6.02.002 • FMA: 9627 / 32521',
      summary: 'Superficial thoracohumeral and scapulohumeral prime movers forming the anterior wall of the axilla and rounded contour of the shoulder, separated by the deltopectoral groove (housing the cephalic vein).',
      bloodSupply: 'Thoracoacromial trunk (pectoral and deltoid branches) and Posterior Circumflex Humeral Artery',
      venousDrainage: 'Cephalic vein (in deltopectoral triangle) and thoracoacromial tributaries to the axillary vein',
      innervation: 'Pectoralis Major: Medial (C8–T1) and Lateral (C5–C7) Pectoral Nerves; Deltoid: Axillary Nerve (C5–C6 via quadrangular space)',
      originInsertion: 'Pec Major: Clavicular head, sternocostal head → lateral lip of intertubercular sulcus of humerus (adducts, internally rotates, flexes humerus). Deltoid: Lateral clavicle, acromion, scapular spine → deltoid tuberosity of humerus (abducts humerus 15°–90° after supraspinatus initiates 0°–15°)',
      metrics: [
        { label: 'Abduction Arc', value: '0°–15° Supraspinatus | 15°–90° Deltoid | >90° Serratus Anterior + Trapezius' },
        { label: 'IM Injection Landmark', value: 'Mid-deltoid 3–5 cm (2–3 fingerbreadths) inferior to acromion process' },
        { label: 'Quadrangular Space', value: 'Transmits Axillary Nerve & Posterior Circumflex Humeral Artery' },
        { label: 'Fiber Architecture', value: 'Multipennate middle deltoid fibers maximize physiological cross-sectional force' }
      ],
      clinicalPearls: 'Anterior glenohumeral dislocation or surgical neck humerus fracture can injure the Axillary Nerve (C5–C6), causing flattened deltoid atrophy, inability to abduct the arm from 15°–90°, and sensory loss over the "regimental badge" lateral shoulder patch.'
    }
  },

  {
    id: 'biceps-triceps',
    name: 'Biceps Brachii & Forearm Flexors',
    latinName: 'Musculus biceps brachii, Musculus brachialis et Musculus triceps brachii',
    system: 'muscles',
    systemLabel: 'Upper Limb Musculature',
    region: 'Anterior & Posterior Arm',
    keywords: ['biceps', 'triceps', 'arm muscle', 'flex', 'muscle', 'forearm muscles', 'curling'],
    focusPos: { x: 38, y: 60, z: 6 },
    defaultZoom: 3.4,
    cameraAngles: { rotX: 0.15, rotY: -0.42 },
    color: '#dc2626',
    kids: {
      badge: '💪 The Famous Arm-Bending & Lifting Team!',
      pronounce: 'BY-seps BRAY-kee-eye',
      summary: 'Bend your elbow and make a muscle — that bump on the front of your upper arm is your Biceps Brachii! When your Biceps contracts (gets shorter), it pulls your forearm up. When you want to straighten your arm back out, the Triceps muscle on the back of your arm pulls the other way!',
      whyYouNeedIt: 'Because muscles can only pull, your Biceps (in front) and Triceps (in back) work as an antagonistic pair so you can bend and straighten your elbow smoothly!',
      funFacts: [
        '"Bi-ceps" means "Two Heads" in Latin because the top of the muscle splits into two tendons that attach to your shoulder blade!',
        '"Tri-ceps" on the back of your arm means "Three Heads"!',
        'Your Biceps isn’t just for bending your elbow — it’s actually the strongest muscle for twisting your forearm palm-up (like turning a key or opening a jar)!'
      ],
      quickStats: [
        { label: 'Name Meaning', value: 'Biceps = "Two Heads" | Triceps = "Three Heads"' },
        { label: 'Biceps Action', value: 'Bends elbow (Flexion) & turns palm up (Supination)' },
        { label: 'Triceps Action', value: 'Straightens elbow (Extension)' },
        { label: 'Connector', value: 'Strong white Tendons attach muscle to bone' }
      ]
    },
    pro: {
      classification: 'TA98: A04.6.02.013 • FMA: 37670',
      summary: 'Anterior arm compartment (Biceps brachii, Brachialis, Coracobrachialis) and posterior compartment (Triceps brachii) acting across both the glenohumeral and elbow/radioulnar joints.',
      bloodSupply: 'Muscular branches of the Brachial Artery (anterior compartment) and Profunda Brachii Artery (posterior compartment)',
      venousDrainage: 'Brachial venae comitantes and basilic/cephalic tributaries',
      innervation: 'Anterior compartment (BBC): Musculocutaneous Nerve (C5–C7); Posterior compartment (Triceps): Radial Nerve (C6–C8)',
      originInsertion: 'Biceps Origins: Short head (coracoid process of scapula), Long head (supraglenoid tubercle via intertubercular groove). Insertion: Radial tuberosity & bicipital aponeurosis. Actions: Powerful supinator of flexed forearm and elbow flexor (Brachialis is pure elbow flexor in all positions)',
      metrics: [
        { label: 'Deep Tendon Reflexes', value: 'Biceps Reflex = C5/C6 | Brachioradialis = C6 | Triceps = C7' },
        { label: 'Peak Supination Torque', value: 'Maximal at 90° elbow flexion' },
        { label: 'Antagonist Pairing', value: 'Reciprocal Ia inhibition relaxes triceps during biceps activation' },
        { label: 'Tendon Rupture Sign', value: '"Popeye deformity" (distal retraction of muscle belly after long-head tendon rupture)' }
      ],
      clinicalPearls: 'Erb-Duchenne palsy (upper brachial plexus C5–C6 trunk traction injury) denervates deltoid, supraspinatus, infraspinatus, and biceps brachii, producing the classic "waiter’s tip" posture (adducted, internally rotated shoulder with extended, pronated forearm).'
    }
  },

  {
    id: 'rectus-abdominis-diaphragm',
    name: 'Rectus Abdominis, Obliques & Thoracic Diaphragm',
    latinName: 'Musculus rectus abdominis, Musculi obliqui et Diaphragma',
    system: 'muscles',
    systemLabel: 'Core & Respiratory Musculature',
    region: 'Thoracoabdominal Core',
    keywords: ['abs', 'abdominal', 'six pack', 'core', 'diaphragm', 'obliques', 'stomach muscles', 'breathing muscle'],
    focusPos: { x: 0, y: 30, z: 10 },
    defaultZoom: 3.1,
    cameraAngles: { rotX: 0.12, rotY: -0.18 },
    color: '#dc2626',
    kids: {
      badge: '🛡️ Your Core Armor & Umbrella Breathing Muscle!',
      pronounce: 'REK-tus Ab-DOM-ih-nis & DY-uh-fram',
      summary: 'Your abdominal ("ab") muscles wrap around your belly like a woven belt of armor to protect your organs and help you sit up, twist, and balance. Right above them, tucked under your ribs, is a dome-shaped muscle called the Diaphragm that pulls down every time you breathe in!',
      whyYouNeedIt: 'Your Diaphragm does most of the work of breathing, and your core muscles stabilize your spine every time you move!',
      funFacts: [
        'Have you ever had the hiccups? Hiccups happen when your Diaphragm muscle gets a sudden little twitch and makes you suck in air quickly!',
        'The "six-pack" look of the Rectus Abdominis comes from 3 horizontal bands of connective tissue crossing a vertical line down the middle.',
        'When you laugh hard, cough, or sneeze, your abdominal muscles contract super fast!'
      ],
      quickStats: [
        { label: 'Diaphragm Shape', value: 'Parachute / Dome under the Lungs' },
        { label: 'Core Layers', value: '4 Muscle Layers wrapping the belly' },
        { label: 'Hiccup Maker', value: 'Sudden spasm of the Diaphragm!' },
        { label: 'Main Job', value: 'Breathing + Protecting Organs + Posture' }
      ]
    },
    pro: {
      classification: 'TA98: A04.5.01.001 / A04.4.02.001 • FMA: 9628 / 13295',
      summary: 'Thoracoabdominal wall and floor: Dome-shaped musculotendinous Thoracic Diaphragm separating thoracic and abdominal cavities, paired with the anterolateral abdominal wall (External Oblique, Internal Oblique, Transversus Abdominis, and Rectus Abdominis within the rectus sheath).',
      bloodSupply: 'Rectus sheath: Superior Epigastric (from internal thoracic) anastomosing with Inferior Epigastric Artery (from external iliac). Diaphragm: Superior/Inferior Phrenic, Musculophrenic, and Pericardiophrenic arteries',
      venousDrainage: 'Superior and inferior epigastric veins (important cavocaval & portacaval collateral route) and phrenic veins',
      innervation: 'Diaphragm: Phrenic Nerve (C3, C4, C5 — "C3, 4, 5 keeps the diaphragm alive"). Abdominal wall: Thoracoabdominal nerves (T7–T11), Subcostal (T12), and Iliohypogastric/Ilioinguinal (L1)',
      originInsertion: 'Diaphragmatic apertures: Caval opening at T8 (IVC + right phrenic n.), Esophageal hiatus at T10 (Esophagus + Vagal trunks), Aortic hiatus at T12 (Aorta + Thoracic duct + Azygos vein)',
      metrics: [
        { label: 'Diaphragm Excursion', value: '1.5 – 2 cm quiet breathing | 6 – 10 cm deep inspiration' },
        { label: 'Arcuate Line', value: 'Midway between umbilicus & pubis (below this, all aponeuroses pass anterior to rectus)' },
        { label: 'Hiatal Levels', value: 'I Ate 10 Eggs At 12 (IVC=T8, Esophagus=T10, Aorta=T12)' },
        { label: 'Inguinal Hesselbach Triangle', value: 'Medial: Rectus border | Lateral: Inferior Epigastric Vessels | Inferior: Inguinal Ligament' }
      ],
      clinicalPearls: 'Direct inguinal hernias protrude through Hesselbach’s triangle medial to the inferior epigastric vessels (acquired transversalis fascia weakness), whereas indirect inguinal hernias enter the deep inguinal ring lateral to the inferior epigastric vessels (patent processus vaginalis).'
    }
  },

  {
    id: 'quadriceps-gastrocnemius',
    name: 'Quadriceps Femoris, Hamstrings & Gastrocnemius (Leg Muscles)',
    latinName: 'Musculus quadriceps femoris et Musculus triceps surae (Gastrocnemius & Soleus)',
    system: 'muscles',
    systemLabel: 'Lower Limb Musculature',
    region: 'Thigh & Calf',
    keywords: ['quadriceps', 'quads', 'thigh muscle', 'hamstrings', 'calf', 'gastrocnemius', 'achilles', 'leg muscles', 'running'],
    focusPos: { x: 18, y: -50, z: 6 },
    defaultZoom: 2.9,
    cameraAngles: { rotX: 0.14, rotY: -0.25 },
    color: '#dc2626',
    kids: {
      badge: '⚡ Your Sprinting, Jumping & Kicking Engines!',
      pronounce: 'KWOD-rih-seps & Gas-trok-NEE-mee-us',
      summary: 'Your legs hold the biggest and most powerful muscles in your body! The Quadriceps ("Quads") on the front of your thigh straighten your knee to kick and jump, the Hamstrings on the back bend your knee, and the Gastrocnemius calf muscle pulls on your Achilles tendon so you can push off the ground and tiptoe!',
      whyYouNeedIt: 'Every single step you take uses a coordinated wave of contractions through your Quads, Hamstrings, and Calf muscles!',
      funFacts: [
        '"Quadri-ceps" means "Four Heads" because it is actually a team of 4 giant muscles on the front of your thigh!',
        'Your calf muscles connect to your heel bone through the Achilles Tendon — the thickest and strongest tendon in the human body!',
        'The Gluteus Maximus (in your hip/buttocks) and Quadriceps (in your thigh) compete for the title of largest muscle by volume in the human body!'
      ],
      quickStats: [
        { label: 'Quadriceps', value: '4 Muscles on front of thigh (Extends knee)' },
        { label: 'Hamstrings', value: '3 Muscles on back of thigh (Bends knee)' },
        { label: 'Calf Muscle', value: 'Gastrocnemius & Soleus (Points toes / tiptoe)' },
        { label: 'Strongest Tendon', value: 'Achilles Tendon at the back of your heel' }
      ]
    },
    pro: {
      classification: 'TA98: A04.7.02.017 / A04.7.02.043 • FMA: 22428 / 22541',
      summary: 'Lower extremity extensor and plantarflexor prime movers: Anterior thigh Quadriceps Femoris (Rectus femoris, Vastus lateralis, Vastus medialis, Vastus intermedius), posterior thigh Hamstrings (Biceps femoris, Semitendinosus, Semimembranosus), and superficial posterior leg Triceps Surae (Gastrocnemius + Soleus).',
      bloodSupply: 'Profunda Femoris (deep femoral) and Lateral Femoral Circumflex arteries (thigh); Popliteal and Posterior Tibial sural branches (calf)',
      venousDrainage: 'Deep femoral, popliteal, and soleal venous sinuses (major calf musculovenous pump propelling venous blood cephalad)',
      innervation: 'Quadriceps: Femoral Nerve (L2–L4); Hamstrings: Tibial division of Sciatic Nerve (L5–S2, except short head of biceps femoris via Common Fibular); Gastrocnemius/Soleus: Tibial Nerve (S1–S2)',
      originInsertion: 'Quadriceps converge onto the quadriceps tendon → patella → patellar ligament → tibial tuberosity. Gastrocnemius & Soleus converge into the Calcaneal (Achilles) tendon inserting on the posterior calcaneal tuberosity',
      metrics: [
        { label: 'Patellar Reflex', value: 'L3–L4 (Femoral Nerve monosynaptic stretch reflex)' },
        { label: 'Achilles Reflex', value: 'S1–S2 (Tibial Nerve monosynaptic stretch reflex)' },
        { label: 'Achilles Tensile Load', value: 'Withstands up to 8–12× body weight during sprinting/jumping' },
        { label: 'Soleus vs. Gastrocnemius', value: 'Soleus: ~80% Type I slow-twitch (posture) | Gastroc: Type II fast-twitch (explosive push-off)' }
      ],
      clinicalPearls: 'Achilles tendon rupture typically occurs 2–6 cm proximal to the calcaneal insertion (hypovascular watershed zone) with an audible "pop"; confirmed by a positive Thompson test (absence of passive plantarflexion when squeezing the calf).'
    }
  },

  // ============================================================================
  // 6. NERVOUS SYSTEM (SPINAL CORD & PERIPHERAL PLEXUSES)
  // ============================================================================
  {
    id: 'spinal-cord-sciatic',
    name: 'Spinal Cord, Brachial Plexus & Sciatic Nerve',
    latinName: 'Medulla spinalis, Plexus brachialis et Nervus ischiadicus',
    system: 'nerves',
    systemLabel: 'Central & Peripheral Nervous System',
    region: 'Spine, Upper & Lower Extremities',
    keywords: ['nerves', 'nervous system', 'spinal cord', 'sciatic nerve', 'brachial plexus', 'vagus nerve', 'reflex', 'signals'],
    focusPos: { x: 0, y: 20, z: -4 },
    defaultZoom: 2.3,
    cameraAngles: { rotX: 0.14, rotY: -0.25 },
    color: '#facc15',
    kids: {
      badge: '⚡ Your Body’s Lightning-Fast Fiber-Optic Wiring!',
      pronounce: 'SPY-nul Kord & Sy-AT-ik Nerv',
      summary: 'Your Spinal Cord is a thick bundle of nerve cables running down the tunnel inside your backbone, branching out into 31 pairs of nerves that reach every millimeter of your skin and muscles! They carry touch, temperature, and movement signals at over 250 miles per hour.',
      whyYouNeedIt: 'If you touch something hot, your nerves use a shortcut through your Spinal Cord (a "reflex arc") to pull your hand back BEFORE your brain even finishes realizing it’s hot!',
      funFacts: [
        'The Sciatic Nerve running down the back of each leg is the longest and thickest nerve in your body — about as thick as an adult’s thumb!',
        'If you laid all the nerves in your body end-to-end, they would stretch for over 45 miles (72 kilometers)!',
        'The Vagus Nerve wanders from your brainstem all the way down to your heart, lungs, and belly to help calm your body down.'
      ],
      quickStats: [
        { label: 'Spinal Nerves', value: '31 Pairs branching off the Spinal Cord' },
        { label: 'Longest Nerve', value: 'Sciatic Nerve (Hip to Foot)' },
        { label: 'Signal Speed', value: 'Up to 268 mph (120 meters/second)' },
        { label: 'Fastest Shortcut', value: 'Spinal Reflex Arc (Instant protection!)' }
      ]
    },
    pro: {
      classification: 'TA98: A14.1.02.001 / A14.2.00.001 • FMA: 7647 / 5903',
      summary: 'Cylindrical CNS neural conduit (Spinal Cord with cervical C4–T1 and lumbosacral L1–S3 enlargements) giving rise to 31 pairs of mixed spinal nerves (8C, 12T, 5L, 5S, 1Co) organized into Cervical, Brachial, Lumbar, and Sacral plexuses.',
      bloodSupply: 'Single Anterior Spinal Artery (supplies anterior 2/3 of cord including corticospinal tracts and ventral horns) and paired Posterior Spinal Arteries (dorsal columns), reinforced by the great radicular Artery of Adamkiewicz (arising T8–L2 on the left)',
      venousDrainage: 'Anterior and posterior spinal veins draining via radicular veins into the internal vertebral venous plexus',
      innervation: 'Ascending sensory tracts: Dorsal Column–Medial Lemniscus (fine touch, vibration, proprioception; decussates in medulla) & Spinothalamic Tract (pain, temperature; decussates at anterior white commissure within 1–2 spinal segments). Descending motor: Lateral Corticospinal Tract (decussates at medullary pyramids)',
      originInsertion: 'Anchored superiorly to medulla at foramen magnum, inferiorly via filum terminale to coccyx, and laterally by 21 pairs of pial denticulate ligaments',
      metrics: [
        { label: 'Conduction Velocity', value: 'Aα myelinated fibers: 80 – 120 m/s | C unmyelinated fibers: 0.5 – 2 m/s' },
        { label: 'Brachial Plexus Roots', value: 'C5–T1 (Roots → Trunks → Divisions → Cords → Branches)' },
        { label: 'Sciatic Nerve Roots', value: 'L4–S3 (Largest nerve in body, ~2 cm diameter at piriformis exit)' },
        { label: 'Watershed Cord Zone', value: 'Mid-thoracic T4–T8 segments (vulnerable during aortic surgery if Adamkiewicz clamped)' }
      ],
      clinicalPearls: 'Brown-Séquard syndrome (hemisection of spinal cord) produces ipsilateral UMN spastic paralysis (corticospinal) and loss of vibration/proprioception (dorsal columns) below the lesion, with contralateral loss of pain and temperature (spinothalamic) starting 1–2 levels below.'
    }
  },

  // ============================================================================
  // 7. FEMALE & MALE REPRODUCTIVE / ENDOCRINE / MAMMARY SYSTEMS
  // ============================================================================
  {
    id: 'female-reproductive',
    name: 'Uterus, Ovaries & Fallopian Tubes (Female Reproductive System)',
    latinName: 'Uterus, Ovaria, Tubae uterinae (Salpinges) et Vagina',
    system: 'organs',
    systemLabel: 'Female Reproductive & Endocrine System',
    region: 'Pelvic Cavity',
    keywords: ['uterus', 'womb', 'ovary', 'ovaries', 'fallopian tube', 'uterine tube', 'cervix', 'vagina', 'female reproductive'],
    focusPos: { x: 0, y: -10, z: 3 },
    defaultZoom: 3.8,
    cameraAngles: { rotX: 0.14, rotY: -0.22 },
    color: '#ec4899',
    kids: {
      badge: '🌸 The Protective Cradle Where Babies Grow!',
      pronounce: 'YOO-ter-us & OH-vuh-reez',
      summary: 'Deep inside the female pelvis sit the Uterus (also called the womb), two almond-shaped Ovaries, and two curved Fallopian Tubes! The ovaries hold tiny egg cells and make hormones as a person grows up, while the muscular uterus is the safe, stretchy room where a baby can grow before birth.',
      whyYouNeedIt: 'Together, these organs make important hormones (estrogen and progesterone) that help bones stay strong and guide puberty and pregnancy in adulthood.',
      funFacts: [
        'A female baby is born with all the tiny egg cells (oocytes) she will ever have already safely stored inside her two ovaries!',
        'The Uterus is normally about the size and shape of an upside-down pear, made of some of the strongest, stretchiest smooth muscle in the human body.',
        'The ends of the Fallopian tubes have tiny finger-like fringes called fimbriae that gently wave to catch an egg cell!'
      ],
      quickStats: [
        { label: 'Uterus Shape', value: 'Pear-shaped muscular organ (~7.5 cm)' },
        { label: 'Ovaries', value: '2 Almond-sized glands (Left & Right)' },
        { label: 'Fallopian Tubes', value: '2 Bridges from Ovaries to Uterus' },
        { label: 'Hormones Made', value: 'Estrogen & Progesterone' }
      ]
    },
    pro: {
      classification: 'TA98: A09.1.01.001 / A09.1.03.001 • FMA: 17558 / 7209 / 18245',
      summary: 'Internal female genital tract positioned in the true pelvis between the urinary bladder anteriorly (vesicouterine pouch) and the rectum posteriorly (rectouterine pouch of Douglas). Comprises paired ovaries, uterine (Fallopian) tubes (infundibulum with fimbriae, ampulla, isthmus, intramural part), piriform uterus (fundus, corpus, isthmus, cervix), and fibromuscular vagina.',
      bloodSupply: 'Uterine Artery (from Anterior Division of Internal Iliac, crossing superior to the ureter — "water under the bridge") anastomosing with the Ovarian Artery (direct branch of abdominal aorta at L2)',
      venousDrainage: 'Uterine venous plexus → Internal Iliac Veins; Pampiniform ovarian plexus → Right Ovarian Vein (to IVC) and Left Ovarian Vein (to Left Renal Vein at 90°)',
      innervation: 'Uterovaginal plexus (inferior hypogastric plexus: T10–L1 sympathetic; S2–S4 pelvic splanchnic parasympathetic); Ovarian plexus (T10–T11)',
      originInsertion: 'Supported by the pelvic diaphragm (levator ani) and condensed endopelvic fascia: Transverse Cervical (Cardinal/Mackenrodt), Uterosacral, Round (maintains anteversion), and Broad ligaments (mesometrium, mesosalpinx, mesovarium)',
      metrics: [
        { label: 'Nulliparous Uterus', value: '~7.5 × 5.0 × 2.5 cm | Mass: 50 – 70 g' },
        { label: 'Uterine Position', value: 'Anteverted (relative to vagina) & Anteflexed (relative to cervix)' },
        { label: 'Fertilization Site', value: 'Ampulla of the Fallopian (Uterine) Tube' },
        { label: 'Cervical Transformation Zone', value: 'Squamocolumnar junction (ecto- to endocervix)' }
      ],
      clinicalPearls: 'During hysterectomy or oophorectomy, two ureteric hazards must be respected: (1) the ovarian vessels cross anterior to the ureter at the pelvic brim inside the suspensory (infundibulopelvic) ligament, and (2) the uterine artery crosses superior to the ureter 1.5 cm lateral to the cervical fornix.'
    }
  },

  {
    id: 'mammary-glands',
    name: 'Mammary Glands & Lactiferous Ducts',
    latinName: 'Glandula mammaria et Ductus lactiferi',
    system: 'organs',
    systemLabel: 'Integumentary & Exocrine System',
    region: 'Anterior Thoracic Wall (Pectoral Region)',
    keywords: ['mammary', 'mammary gland', 'breast', 'lactiferous ducts', 'lactiferous', 'chest gland'],
    focusPos: { x: 0, y: 72, z: 12 },
    defaultZoom: 3.5,
    cameraAngles: { rotX: 0.12, rotY: -0.25 },
    color: '#f59e0b',
    kids: {
      badge: '🍼 Specialized Milk-Producing Glands!',
      pronounce: 'MAM-uh-ree Glandz',
      summary: 'The mammary glands sit on the front of the chest over the pectoral muscles. They are made of 15 to 20 lobules arranged like the segments of an orange, connected by tiny branching tubes called lactiferous ducts that can make nutrient-rich milk for newborn babies.',
      whyYouNeedIt: 'In mammals (which actually get their name from "mammary"!), these glands provide newborn babies with water, energy, and protective antibodies while their immune systems are still growing.',
      funFacts: [
        'The word "Mammal" — the group of warm-blooded animals that includes humans, whales, elephants, and dogs — comes directly from the Latin word "mamma" for mammary gland!',
        'Inside each gland, the lobules are arranged in a circle like the petals of a daisy or slices of a citrus fruit.',
        'Fibrous bands called Cooper’s ligaments anchor the gland tissue gently to the skin and chest wall.'
      ],
      quickStats: [
        { label: 'Gland Lobes', value: '15 to 20 Radial Lobes per side' },
        { label: 'Duct System', value: 'Lactiferous Ducts & Sinuses' },
        { label: 'Rests Upon', value: 'Pectoralis Major & Serratus Anterior' },
        { label: 'Support Straps', value: 'Suspensory Ligaments of Cooper' }
      ]
    },
    pro: {
      classification: 'TA98: A16.0.02.001 • FMA: 57986 / 58000',
      summary: 'Modified apocrine sweat glands situated in the superficial fascia of the anterior thoracic wall (ribs 2–6, sternum to midaxillary line) overlying the pectoralis major, serratus anterior, and external oblique fascia, separated by the loose retromammary space.',
      bloodSupply: 'Perforating branches of the Internal Thoracic (Mammary) Artery (medial ~60%), Lateral Thoracic and Thoracoacromial branches (axillary artery), and posterior intercostal arteries (2nd–5th)',
      venousDrainage: 'Circulus venosus of Haller draining into Axillary, Internal Thoracic, and Posterior Intercostal veins (communicating with Batson’s vertebral venous plexus)',
      innervation: 'Anterior and lateral cutaneous branches of 2nd–6th Intercostal Nerves (T4 dermatome at the nipple); sympathetic vasomotor/smooth-muscle fibers',
      originInsertion: '15–20 tubuloalveolar secretory lobes radiating from the nipple-areolar complex, each drained by an independent lactiferous duct with a subareolar lactiferous sinus, suspended by retinacula cutis (Cooper’s ligaments)',
      metrics: [
        { label: 'Anatomical Extent', value: '2nd to 6th Rib vertically | Sternal edge to Midaxillary line' },
        { label: 'Axillary Tail (of Spence)', value: 'Extends superolaterally through foramen of Langer into axilla' },
        { label: 'Lymphatic Drainage', value: '>75% to Ipsilateral Axillary Nodes (Level I Pectoral/Anterior group first); ~20% to Parasternal (Internal Thoracic) Nodes' },
        { label: 'Endocrine Control', value: 'Estrogen (ductal growth), Progesterone (alveolar lobules), Prolactin (lactogenesis), Oxytocin (myoepithelial let-down)' }
      ],
      clinicalPearls: 'Tumor invasion and shortening of the suspensory ligaments of Cooper produces characteristic skin dimpling (retraction), whereas lymphatic obstruction of the dermal plexus produces edematous "peau d’orange" skin.'
    }
  },

  {
    id: 'male-reproductive',
    name: 'Prostate, Testes & Deferent Ducts (Male Reproductive System)',
    latinName: 'Prostata, Testes, Epididymides, Ductus deferentes et Vesiculae seminales',
    system: 'organs',
    systemLabel: 'Male Reproductive & Endocrine System',
    region: 'Pelvis & Inguinoscrotal Region',
    keywords: ['prostate', 'testis', 'testes', 'epididymis', 'deferent duct', 'vas deferens', 'seminal vesicle', 'male reproductive'],
    focusPos: { x: 0, y: -14, z: 5 },
    defaultZoom: 3.8,
    cameraAngles: { rotX: 0.14, rotY: -0.25 },
    color: '#6366f1',
    kids: {
      badge: '🧬 Male Endocrine & Reproductive Organs',
      pronounce: 'PROS-tayt & TES-teez',
      summary: 'The male reproductive system includes the paired Testes (which make testosterone hormone as a person grows up), coiled storage tubes called Epididymides, transport tubes called Deferent Ducts, and the walnut-sized Prostate gland sitting just below the urinary bladder.',
      whyYouNeedIt: 'Testosterone hormone helps build deeper voices, stronger bones, and bigger muscles during puberty.',
      funFacts: [
        'The Prostate gland is shaped and sized just like a walnut, sitting right underneath the bladder where the urethra begins.',
        'If you uncoiled the microscopic tubes (seminiferous tubules) packed inside a single testis, they would stretch for hundreds of meters!',
        'The Deferent Duct loops up over the hip bone and down behind the bladder like a rollercoaster track.'
      ],
      quickStats: [
        { label: 'Prostate Size', value: 'Walnut-sized gland (~20 g)' },
        { label: 'Testes', value: '2 Paired endocrine & reproductive glands' },
        { label: 'Main Hormone', value: 'Testosterone' },
        { label: 'Pathway', value: 'Testis → Epididymis → Deferent Duct → Urethra' }
      ]
    },
    pro: {
      classification: 'TA98: A09.3.01.001 / A09.3.08.001 • FMA: 7210 / 9600',
      summary: 'Male urogenital tract comprising paired testes (seminiferous tubules + Leydig cells), epididymides, ductus (vas) deferentes traversing the spermatic cord and inguinal canal, seminal vesicles, ejaculatory ducts, fibromuscular prostate gland surrounding the prostatic urethra, and corpora cavernosa/spongiosum.',
      bloodSupply: 'Testicular Artery (direct branch of abdominal aorta at L2), Artery to Ductus Deferens (superior/inferior vesical), and Inferior Vesical / Middle Rectal branches to the prostate',
      venousDrainage: 'Pampiniform plexus (thermoregulatory countercurrent heat exchanger) → Right Testicular Vein (to IVC) and Left Testicular Vein (to Left Renal Vein at 90°); Prostatic venous plexus (Santorini) communicating with Batson’s vertebral plexus',
      innervation: 'Testicular plexus (T10–T11); Prostatic/Cavernous nerves from Inferior Hypogastric Plexus (Parasympathetic S2–S4 pelvic splanchnic for vasodilation; Sympathetic L1–L2 hypogastric for emission)',
      originInsertion: 'Prostate zoned by McNeal into Peripheral (~70% volume, posterior), Central (~25%, surrounds ejaculatory ducts), and Transitional (~5%, periurethral) zones',
      metrics: [
        { label: 'Normal Prostate Mass', value: '~20 g (3 × 4 × 2 cm) inferior to bladder neck' },
        { label: 'Prostate Zones (McNeal)', value: 'Peripheral (Carcinoma site) vs. Transitional (BPH site)' },
        { label: 'Inguinal Canal Path', value: 'Deep Ring (transversalis fascia) → Superficial Ring (external oblique)' },
        { label: 'Thermal Regulation', value: 'Cremaster + Dartos + Pampiniform maintain ~34–35 °C' }
      ],
      clinicalPearls: 'Benign Prostatic Hyperplasia (BPH) arises in the periurethral Transitional Zone, causing early lower urinary tract obstructive symptoms, whereas prostatic adenocarcinoma most commonly arises in the posterior Peripheral Zone (palpable on digital rectal exam).'
    }
  }
];

export const ANATOMY_QUIZ_QUESTIONS = [
  {
    id: 'q1',
    targetPartId: 'heart',
    question: 'Which muscular organ beats about 100,000 times every single day and has 4 chambers that pump blood through your whole body?',
    options: [
      'The Heart',
      'The Stomach',
      'The Kidneys',
      'The Rib Cage'
    ],
    correctIndex: 0,
    explanation: 'Correct! Your Heart is a 4-chambered muscular pump about the size of your fist that pumps ~2,000 gallons of blood every day!'
  },
  {
    id: 'q2',
    targetPartId: 'aorta',
    question: 'In our 3D Blood Flow view, what is the name of the largest RED artery that arches out of the top of the heart like a superhighway?',
    options: [
      'The Sciatic Nerve',
      'The Aorta',
      'The Trachea',
      'The Patella'
    ],
    correctIndex: 1,
    explanation: 'Spot on! The Aorta is the largest elastic artery in the human body, carrying fresh oxygen-rich blood out from the left ventricle of your heart.'
  },
  {
    id: 'q3',
    targetPartId: 'vena-cava',
    question: 'Why are the Superior & Inferior Vena Cava and other veins shown in BLUE with blood flowing back toward the heart?',
    options: [
      'Because the blood inside is frozen cold',
      'Because veins carry blood that has already delivered its oxygen back to the heart & lungs to recharge',
      'Because veins only carry water',
      'Because veins push blood out to the fingers'
    ],
    correctIndex: 1,
    explanation: 'Exactly! Arteries (red) carry oxygen-rich blood away from the heart, while Veins (blue) return oxygen-depleted blood back to the heart and lungs.'
  },
  {
    id: 'q4',
    targetPartId: 'femur-tibia-fibula',
    question: 'Which bone in your thigh is the longest, heaviest, and strongest bone in the entire human body?',
    options: [
      'The Radius',
      'The Clavicle',
      'The Femur',
      'The Sternum'
    ],
    correctIndex: 2,
    explanation: 'Awesome job! The Femur (thigh bone) makes up about 1/4 of your height and is stronger weight-for-weight than concrete!'
  },
  {
    id: 'q5',
    targetPartId: 'liver',
    question: 'Which internal organ tucked under your right ribs performs over 500 chemical jobs, makes bile, and can even regrow itself?',
    options: [
      'The Liver',
      'The Deltoid Muscle',
      'The Kneecap',
      'The Jugular Vein'
    ],
    correctIndex: 0,
    explanation: 'Brilliant! The Liver is your body’s chemical factory and filter — and it’s the only internal organ that can regenerate!'
  },
  {
    id: 'q6',
    targetPartId: 'brain',
    question: 'Which organ sits safely inside your skull helmet and uses 86 billion neurons to control your thoughts, memories, and senses?',
    options: [
      'The Lungs',
      'The Brain',
      'The Pelvis',
      'The Biceps'
    ],
    correctIndex: 1,
    explanation: 'You got it! Your Brain is Mission Control, sending electrical signals at up to 268 miles per hour!'
  }
];
