/**
 * Spanish (es) translations for:
 *  - All 27 curated ANATOMY_PARTS (Kids Explorer & Clinical Pro modes)
 *  - All 37 TISSUE_INFO categories
 *  - All 6 ANATOMY_QUIZ_QUESTIONS
 */

export const PARTS_ES = {
  'integumentary-skin': {
    name: 'Piel (Sistema Tegumentario)',
    systemLabel: 'Sistema Tegumentario',
    kids: {
      badge: '🛡️ ¡El supertraje de tu cuerpo!',
      pronounce: 'PYEL (E-pi-DER-mis)',
      summary: '¡La piel es en realidad el órgano más grande de todo tu cuerpo! Funciona como un traje espacial impermeable que se repara solo: impide la entrada de microbios, protege todo por dentro y te ayuda a refrescarte cuando corres.',
      whyYouNeedIt: '¡Sin la piel, los gérmenes entrarían fácilmente y no podrías sentir un abrazo cálido, una brisa fresca ni las cosquillas!',
      funFacts: [
        '¡Pierdes entre 30,000 y 40,000 células diminutas de piel cada minuto y creas células nuevas debajo!',
        'Tu piel tiene millones de glándulas sudoríparas que funcionan como tu propio aire acondicionado.',
        '¡La piel es más gruesa en la planta de los pies y más fina en los párpados!'
      ],
      quickStats: [
        { label: 'Capas', value: '3 capas principales (Epidermis, Dermis, Hipodermis)' },
        { label: 'Renovación', value: 'Piel externa nueva cada ~28 días' },
        { label: 'Sensores táctiles', value: 'Millones de terminaciones nerviosas' },
        { label: 'Superpoder', value: '¡Produce vitamina D con la luz del sol!' }
      ]
    },
    pro: {
      summary: 'Órgano barrera multicapa compuesto por epidermis escamosa estratificada queratinizada, dermis colagenosa vascularizada e hipodermis subcutánea rica en tejido adiposo.',
      bloodSupply: 'Arterias perforantes cutáneas que forman los plexos vasculares dérmico profundo y subpapilar',
      venousDrainage: 'Plexos venosos dérmicos superficial y profundo que drenan hacia las venas subcutáneas',
      innervation: 'Ramas sensitivas cutáneas (corpúsculos de Meissner, Pacini, Merkel, Ruffini y terminaciones nociceptivas libres); fibras simpáticas colinérgicas sudomotoras',
      originInsertion: 'Continua con las uniones mucocutáneas; anclada a la fascia profunda mediante los retináculos cutáneos (ligamentos de la piel)',
      metrics: [
        { label: 'Superficie total', value: '1.5 – 2.0 m² (Adulto)' },
        { label: 'Masa total', value: '~15–16% del peso corporal total' },
        { label: 'Rango de grosor', value: '0.5 mm (párpados) a 4.0 mm (talones)' },
        { label: 'Flujo dérmico en reposo', value: '~250 mL/min (hasta 6–8 L/min en hipertermia)' }
      ],
      clinicalPearls: 'La Regla de los Nueves de Wallace estima la superficie corporal quemada (SCQ). Las anastomosis arteriovenosas dérmicas (cuerpos glómicos) en piel acral derivan sangre para regular la temperatura central.'
    }
  },

  brain: {
    name: 'Cerebro (Cerebro, Cerebelo y Tronco Encefálico)',
    systemLabel: 'Sistema Nervioso y de Órganos',
    kids: {
      badge: '🧠 ¡El centro de control de misión!',
      pronounce: 'Se-RE-bro (En-SÉ-fa-lo)',
      summary: '¡El cerebro es el jefe de tu cuerpo! Más rápido que la supercomputadora más potente del mundo, te permite pensar, soñar, jugar, recordar a tus mejores amigos y controla automáticamente tu respiración y los latidos del corazón.',
      whyYouNeedIt: '¡Cada pensamiento que tienes, cada movimiento que haces y cada sonido o color que notas es procesado por 86 mil millones de células cerebrales llamadas neuronas!',
      funFacts: [
        '¡Cuando estás despierto, tu cerebro genera suficiente electricidad como para encender una bombilla LED pequeña!',
        '¡El lado izquierdo del cerebro controla el lado derecho del cuerpo, y el lado derecho controla el izquierdo!',
        'Aunque el cerebro siente cada toque en tu piel, el tejido cerebral en sí no siente dolor.'
      ],
      quickStats: [
        { label: 'Células cerebrales', value: '~86 mil millones de neuronas' },
        { label: 'Velocidad de señal', value: 'Hasta 430 km/h (268 mph)' },
        { label: 'Energía usada', value: '20% del oxígeno de tu cuerpo' },
        { label: 'Textura', value: 'Suave como gelatina firme, protegido por el cráneo' }
      ]
    },
    pro: {
      summary: 'Centro primario de integración del Sistema Nervioso Central (SNC), subdividido en telencéfalo, diencéfalo, mesencéfalo, protuberancia (puente), bulbo raquídeo y cerebelo.',
      bloodSupply: 'Arterias carótidas internas (circulación anterior) y sistema vertebrobasilar (circulación posterior) anastomosados en el polígono de Willis',
      venousDrainage: 'Venas cerebrales superficiales y profundas que drenan a través de los senos venosos durales hacia las venas yugulares internas',
      innervation: 'Origen de los pares craneales I–XII; duramadre meníngea inervada por ramas del trigémino (NC V), vago (NC X) y nervios cervicales superiores',
      originInsertion: 'Suspendido en líquido cefalorraquídeo (LCR) dentro de la bóveda craneal; estabilizado por repliegues durales (hoz del cerebro, tienda del cerebelo)',
      metrics: [
        { label: 'Masa adulta', value: '1,300 – 1,400 g (~2% del peso corporal)' },
        { label: 'Flujo sanguíneo cerebral', value: '~50 mL / 100g / min (~750 mL/min total)' },
        { label: 'Volumen de LCR', value: '~150 mL (500 mL/día producidos por plexos coroideos)' },
        { label: 'Presión intracraneal', value: '7 – 15 mmHg (adulto en decúbito supino)' }
      ],
      clinicalPearls: 'La doctrina de Monro-Kellie establece que el volumen intracraneal (parénquima + sangre + LCR) es fijo; las lesiones ocupantes de espacio elevan rápidamente la PIC con riesgo de herniación uncal o amigdalina. La oclusión de la arteria cerebral media (ACM) causa hemiparesia contralateral (cara/brazo > pierna) y afasia en el hemisferio dominante.'
    }
  },

  heart: {
    name: 'Corazón (Bomba Muscular de Cuatro Cavidades)',
    systemLabel: 'Sistema Cardiovascular',
    kids: {
      badge: '❤️ ¡La superbomba que nunca se detiene!',
      pronounce: 'Ko-ra-SON (Kar-DÍ-a-ko)',
      summary: '¡Tu corazón es un músculo superfuerte del tamaño de tu puño cerrado! Late unas 100,000 veces todos los días, bombeando sangre fresca rica en oxígeno hacia tu cerebro, tus músculos y hasta la punta de tus pies.',
      whyYouNeedIt: 'La sangre lleva oxígeno y energía a cada célula de tu cuerpo. ¡El corazón es el motor que mantiene esa sangre en movimiento las 24 horas del día, incluso mientras duermes!',
      funFacts: [
        '¡Tu corazón tiene 4 habitaciones especiales (cavidades) con puertas de un solo sentido (válvulas) que hacen el sonido "LUB-DUB" al cerrarse!',
        '¡En un solo día, tu corazón bombea unos 7,570 litros (2,000 galones) de sangre!',
        'Cuando corres o haces deporte, tu corazón late más rápido para llevar oxígeno extra a tus músculos.'
      ],
      quickStats: [
        { label: 'Tamaño', value: 'Del tamaño de tu puño cerrado' },
        { label: 'Latidos por día', value: '~100,000 latidos' },
        { label: 'Cavidades', value: '4 (Aurículas y Ventrículos izq./der.)' },
        { label: 'Sangre bombeada', value: '~5 litros cada minuto' }
      ]
    },
    pro: {
      summary: 'Bomba fibromuscular tetracameral alojada dentro del saco pericárdico en el mediastino medio, que impulsa la circulación pulmonar (baja presión) y sistémica (alta presión).',
      bloodSupply: 'Arteria coronaria izquierda (descendente anterior DA y circunfleja CX) y arteria coronaria derecha (ACD) originadas en los senos aórticos de Valsalva (perfundidas predominantemente en diástole)',
      venousDrainage: 'Seno coronario (venas cardíacas magna, media y menor) que drena en la aurícula derecha; venas cardíacas anteriores y mínimas de Tebesio',
      innervation: 'Sistema cardionector intrínseco (nodo SA → nodo AV → haz de His → fibras de Purkinje) modulado por el plexo cardíaco (vago NC X parasimpático; T1–T4 simpático)',
      originInsertion: 'Ápex dirigido anteroinferiormente hacia la izquierda (5.º espacio intercostal, línea medioclavicular); base formada principalmente por la aurícula izquierda (T6–T9)',
      metrics: [
        { label: 'Gasto cardíaco (GC)', value: '~5.0 L/min (Volumen sistólico ~70 mL × FC 72 lpm)' },
        { label: 'Fracción de eyección (FEVI)', value: '55% – 70% (Normal)' },
        { label: 'Presiones intracavitarias', value: 'VI: 120/8 mmHg | VD: 25/4 mmHg' },
        { label: 'Masa adulta', value: '250 – 350 g' }
      ],
      clinicalPearls: 'La oclusión de la arteria descendente anterior (DA) infarta la pared anterior y los dos tercios anteriores del tabique interventricular (elevación del ST en V1–V4). La oclusión de la ACD causa infarto inferior (II, III, aVF) y puede comprometer el nodo SA/AV provocando bradiarritmias.'
    }
  },

  lungs: {
    name: 'Pulmones (Lóbulos Pulmonares Derecho e Izquierdo)',
    systemLabel: 'Sistema Respiratorio',
    kids: {
      badge: '🫁 ¡Globos esponjosos de oxígeno!',
      pronounce: 'Pul-MO-nes (Res-pi-ra-TO-rio)',
      summary: '¡Tus dos pulmones llenan tu pecho como globos suaves y esponjosos! Cada vez que inhalas, toman oxígeno fresco del aire y lo pasan a tu sangre. Cada vez que exhalas, expulsan un gas de desecho llamado dióxido de carbono.',
      whyYouNeedIt: 'Cada célula de tu cuerpo necesita oxígeno para producir energía. ¡Tus pulmones hacen equipo con tu corazón para llevar oxígeno a todas partes!',
      funFacts: [
        '¡Tu pulmón izquierdo es un poco más pequeño que el derecho para dejarle espacio a tu corazón!',
        'Dentro de tus pulmones hay 300 millones de bolsitas de aire llamadas alvéolos; si las extendieras todas, ¡cubrirían una cancha entera de tenis!',
        '¡Los pulmones son los únicos órganos del cuerpo humano que pueden flotar en el agua!'
      ],
      quickStats: [
        { label: 'Respiraciones al día', value: '~20,000 respiraciones' },
        { label: 'Sacos de aire', value: '~300–500 millones de alvéolos' },
        { label: 'Lóbulos', value: '3 en el derecho, 2 en el izquierdo' },
        { label: 'Superficie interna', value: '¡Del tamaño de una cancha de tenis!' }
      ]
    },
    pro: {
      summary: 'Órganos cónicos pares de intercambio gaseoso situados en las cavidades pleurales. El pulmón derecho consta de 3 lóbulos (superior, medio, inferior) separados por las cisuras oblicua y horizontal; el izquierdo posee 2 lóbulos y la língula.',
      bloodSupply: 'Doble circulación: arterias pulmonares (sangre desoxigenada para hematosis) y arterias bronquiales (ramas nutritivas sistémicas de la aorta torácica)',
      venousDrainage: 'Cuatro venas pulmonares (sangre oxigenada hacia la aurícula izquierda) y venas bronquiales (drenan al sistema ácigos/hemiácigos)',
      innervation: 'Plexo pulmonar: fibras parasimpáticas vagales (broncoconstricción, secretomotoras) y fibras simpáticas T2–T5 (broncodilatación, vasoconstricción)',
      originInsertion: 'El vértice sobresale 2.5 cm por encima de la clavícula hacia la raíz del cuello; la base descansa sobre las cúpulas convexas del diafragma torácico',
      metrics: [
        { label: 'Capacidad pulmonar total', value: '~6.0 L (Volumen corriente ~500 mL)' },
        { label: 'Superficie alveolar', value: '~70 – 85 m²' },
        { label: 'Barrera alveolocapilar', value: '0.2 – 0.5 µm (Neumocito tipo I + membrana basal fusionada + endotelio)' },
        { label: 'Relación V/Q', value: '~0.8 global (mayor en el vértice, menor en la base)' }
      ],
      clinicalPearls: 'El bronquio principal derecho es más ancho, corto y vertical que el izquierdo, por lo que los lóbulos medio e inferior derechos son el sitio más frecuente de aspiración de cuerpos extraños e intubación selectiva accidental.'
    }
  },

  liver: {
    name: 'Hígado y Vesícula Biliar',
    systemLabel: 'Sistema Digestivo y Metabólico',
    kids: {
      badge: '🧪 ¡La fábrica química y filtro del cuerpo!',
      pronounce: 'Í-ga-do (He-PÁ-ti-ko)',
      summary: 'Protegido bajo tus costillas derechas, ¡el hígado es el órgano más multitarea de tu cuerpo! Limpia tu sangre, guarda energía en forma de azúcar para más tarde, fabrica un líquido verde llamado bilis para digerir las grasas y produce proteínas para que las heridas dejen de sangrar.',
      whyYouNeedIt: '¡Todo lo que comes y bebes pasa por el control de seguridad del hígado para que tu cuerpo reciba combustible limpio y vitaminas!',
      funFacts: [
        '¡Tu hígado realiza más de 500 trabajos diferentes al mismo tiempo!',
        'Tiene un superpoder increíble: ¡es el único órgano interno capaz de regenerarse y volver a crecer si se retira una parte!',
        'En cualquier momento, tu hígado contiene cerca del 13% de toda la sangre de tu cuerpo.'
      ],
      quickStats: [
        { label: 'Funciones', value: 'Más de 500 tareas vitales' },
        { label: 'Bilis diaria', value: 'Unas 3 a 4 tazas al día' },
        { label: 'Superpoder', value: '¡Puede regenerarse por sí solo!' },
        { label: 'Peso', value: 'Órgano interno más pesado (~1.5 kg)' }
      ]
    },
    pro: {
      summary: 'Glándula visceral más grande y centro metabólico situado en el hipocondrio derecho y epigastrio, organizado en 8 segmentos funcionalmente independientes de Couinaud.',
      bloodSupply: 'Doble aporte aferente: vena porta hepática (~75% del flujo, rica en nutrientes del tracto GI y bazo) y arteria hepática propia (~25% del flujo, rica en oxígeno del tronco celíaco)',
      venousDrainage: 'Las venas centrales de los lobulillos hepáticos confluyen en las venas hepáticas derecha, media e izquierda que desembocan directamente en la vena cava inferior (VCI)',
      innervation: 'Plexo hepático (ganglios celíacos simpáticos T7–T10 y troncos vagales parasimpáticos); el dolor de la cápsula de Glisson se refiere al hombro derecho vía nervio frénico (C3–C5)',
      originInsertion: 'Suspendido del diafragma y la pared abdominal anterior por los ligamentos falciforme, coronario y triangulares; el hilio hepático transmite la tríada portal',
      metrics: [
        { label: 'Masa adulta', value: '1,400 – 1,600 g (~2.5% del peso corporal)' },
        { label: 'Flujo sanguíneo hepático', value: '~1,500 mL/min (~25% del gasto cardíaco)' },
        { label: 'Producción de bilis', value: '600 – 1,000 mL/día' },
        { label: 'Presión venosa portal', value: '5 – 10 mmHg (Hipertensión portal > 12 mmHg)' }
      ],
      clinicalPearls: 'La maniobra de Pringle pinza el ligamento hepatoduodenal (tríada portal: arteria hepática propia, vena porta y colédoco) en el hiato de Winslow para controlar hemorragias hepáticas.'
    }
  },

  stomach: {
    name: 'Estómago',
    systemLabel: 'Sistema Digestivo',
    kids: {
      badge: '🥣 ¡La licuadora ácida de alimentos!',
      pronounce: 'Es-TÓ-ma-go (GÁS-tri-ko)',
      summary: '¡Tu estómago es una bolsa muscular elástica con forma de letra "J"! Cuando tragas comida, tu estómago la aprieta, la bate y la mezcla con ácido gástrico y enzimas hasta convertirla en un líquido espeso que tu cuerpo puede aprovechar.',
      whyYouNeedIt: '¡Descompone bocados grandes de comida en nutrientes diminutos y elimina microbios que podrían venir en los alimentos!',
      funFacts: [
        'El ácido del estómago es tan fuerte que podría corroer metal, ¡pero tu estómago se protege con una capa resbaladiza de moco que se renueva cada pocos días!',
        'Cuando te ruge la panza ("borborigmos"), en realidad es el sonido de los músculos moviendo aire y líquido por dentro.',
        '¡El estómago de un adulto puede estirarse para guardar casi un litro entero de comida y agua!'
      ],
      quickStats: [
        { label: 'Forma', value: 'Letra "J" elástica' },
        { label: 'Capas musculares', value: '3 capas entrecruzadas para batir' },
        { label: 'Nivel de ácido', value: 'Muy fuerte (pH 1.5 a 3.5)' },
        { label: 'Tiempo aquí', value: 'La comida permanece 2 a 4 horas' }
      ]
    },
    pro: {
      summary: 'Dilatación muscular intraperitoneal en forma de J del intestino anterior dividida en cardias, fundus, cuerpo y antro/canal pilórico, provista de tres capas de muscular externa (oblicua interna, circular media y longitudinal externa).',
      bloodSupply: 'Rica arcada anastomótica del tronco celíaco: arterias gástricas izquierda y derecha (curvatura menor), gastroomentales izquierda y derecha (curvatura mayor) y gástricas cortas (fundus)',
      venousDrainage: 'Paralelo a las arterias directamente o a través de las venas esplénica y mesentérica superior hacia la vena porta hepática',
      innervation: 'Parasimpática vía troncos vagales anterior (izquierdo) y posterior (derecho) (estimula HCl/gastrina y motilidad); simpática vía nervio esplácnico mayor (T5–T9, plexo celíaco)',
      originInsertion: 'Anclado entre el esfínter esofágico inferior (EEI en T11) y el esfínter pilórico gastroduodenal (plano transpílorico L1)',
      metrics: [
        { label: 'pH luminal', value: '1.5 – 3.5 (HCl secretado por células parietales)' },
        { label: 'Volumen de jugo gástrico', value: '1.5 – 2.5 L/día' },
        { label: 'Capacidad distendida', value: '1.0 – 1.5 L (volumen en ayunas ~50 mL)' },
        { label: 'Secreciones clave', value: 'HCl, Factor Intrínseco, Pepsinógeno, Gastrina, Grelina' }
      ],
      clinicalPearls: 'Las úlceras duodenales posteriores pueden erosionar la arteria gastroduodenal; las úlceras gástricas de la curvatura menor pueden erosionar la arteria gástrica izquierda. La destrucción autoinmune de células parietales causa deficiencia de factor intrínseco y anemia perniciosa por falta de vitamina B12.'
    }
  },

  kidneys: {
    name: 'Riñones (Órganos Renales Derecho e Izquierdo)',
    systemLabel: 'Sistema Urinario y Renal',
    kids: {
      badge: '🫘 ¡Los gemelos superlavadores de sangre!',
      pronounce: 'Ri-ÑO-nes (Re-NAL)',
      summary: 'Con forma de dos frijoles gigantes cerca de la parte baja de tu espalda, ¡tus riñones son filtros de agua de alta tecnología! Lavan toda la sangre de tu cuerpo decenas de veces al día, conservando el agua y las sales buenas mientras convierten los desechos en pipí (orina).',
      whyYouNeedIt: '¡Mantienen el equilibrio exacto de agua y minerales en tu cuerpo y ayudan a controlar tu presión arterial!',
      funFacts: [
        '¡Cada riñón tiene alrededor de 1 millón de filtros microscópicos llamados nefronas!',
        '¡Tus dos pequeños riñones filtran unos 180 litros (45 galones) de líquido todos los días!',
        'Igual que el reciclador de agua de una estación espacial, tus riñones reciclan el 99% del agua de vuelta a tu sangre.'
      ],
      quickStats: [
        { label: 'Microfiltros', value: '~1 millón de nefronas cada uno' },
        { label: 'Sangre filtrada', value: 'Toda tu sangre ~40 veces al día' },
        { label: 'Tamaño', value: 'Como un ratón de computadora (~11 cm)' },
        { label: 'Ubicación', value: 'Protegidos cerca de las costillas bajas' }
      ]
    },
    pro: {
      summary: 'Órganos retroperitoneales pares con forma de frijol (T12–L3; el riñón derecho algo más bajo por el hígado) que regulan el volumen del líquido extracelular, la osmolaridad, el equilibrio ácido-base, la excreción de desechos urémicos y la síntesis endocrina (EPO, renina, calcitriol).',
      bloodSupply: 'Arterias renales izquierda y derecha originadas lateralmente de la aorta abdominal en L1–L2 → segmentarias → interlobares → arqueadas → interlobulillares → arteriolas aferentes → capilares glomerulares',
      venousDrainage: 'Venas renales que drenan en la VCI (la vena renal izquierda es más larga, cruza anterior a la aorta bajo la AMS y recibe las venas gonadal, suprarrenal y frénica inferior izquierdas)',
      innervation: 'Plexo renal (simpático T10–L1 vía nervios esplácnicos menor e imo que regulan la liberación yuxtaglomerular de renina y el tono vascular; parasimpático vagal)',
      originInsertion: 'Envueltos por cápsula renal, grasa perirrenal, fascia renal de Gerota y grasa pararrenal; hilio renal (V-A-U de anterior a posterior: vena renal, arteria renal, uréter)',
      metrics: [
        { label: 'Flujo sanguíneo renal', value: '~1.1 – 1.2 L/min (20–25% del gasto cardíaco)' },
        { label: 'TFG normal', value: '90 – 120 mL/min/1.73m² (~180 L/día de filtrado)' },
        { label: 'Número de nefronas', value: '~900,000 – 1.2 millones por riñón' },
        { label: 'Fracción de filtración', value: '~20% (TFG / Flujo plasmático renal)' }
      ],
      clinicalPearls: 'El síndrome del cascanueces ocurre cuando la vena renal izquierda queda comprimida entre la arteria mesentérica superior (AMS) y la aorta abdominal, provocando hematuria, dolor en flanco izquierdo y varicocele izquierdo.'
    }
  },

  intestines: {
    name: 'Intestino Delgado e Intestino Grueso',
    systemLabel: 'Sistema Digestivo',
    kids: {
      badge: '🎢 ¡La montaña rusa de nutrientes de 7 metros!',
      pronounce: 'In-tes-TI-nos',
      summary: '¡Enrollado ordenadamente dentro de tu abdomen hay un tubo largo y sinuoso! Primero, el intestino delgado absorbe todas las vitaminas, proteínas y energía de tu comida. Luego, el intestino grueso recupera el agua antes de que los restos salgan del cuerpo.',
      whyYouNeedIt: '¡Comer no te daría nada de energía si tus intestinos no absorbieran esos nutrientes hacia tu sangre!',
      funFacts: [
        'Si desenrollaras tu intestino delgado y grueso, ¡medirían unos 7 metros (22 a 25 pies) de largo, más alto que una jirafa!',
        'El interior del intestino delgado está cubierto por millones de prolongaciones diminutas llamadas vellosidades que actúan como esponjas de nutrientes.',
        '¡Bacterias amigables ("tu microbiota") viven en tu intestino grueso y te ayudan a fabricar vitaminas!'
      ],
      quickStats: [
        { label: 'Longitud total', value: '~7 metros enrollados' },
        { label: 'Intestino delgado', value: '3 partes: Duodeno, Yeyuno e Íleon' },
        { label: 'Intestino grueso', value: 'Absorbe agua y electrolitos' },
        { label: 'Ola muscular', value: 'La peristalsis empuja los alimentos' }
      ]
    },
    pro: {
      summary: 'Tracto alimentario del intestino medio y posterior compuesto por el intestino delgado (duodeno, yeyuno, íleon; ~6 m) y el intestino grueso (ciego, apéndice, colon ascendente/transverso/descendente/sigmoide y recto; ~1.5 m).',
      bloodSupply: 'Arteria mesentérica superior (AMS: intestino medio desde el duodeno distal hasta los 2/3 proximales del colon transverso) y arteria mesentérica inferior (AMI: intestino posterior hasta el recto superior), unidas por la arteria marginal de Drummond',
      venousDrainage: 'Venas mesentéricas superior e inferior (VMS y VMI) que drenan en la vena porta hepática para el metabolismo hepático de primer paso',
      innervation: 'Sistema nervioso entérico (plexo mientérico de Auerbach para motilidad; plexo submucoso de Meissner para secreción) modulado por el vago (NC X), nervios esplácnicos pélvicos (S2–S4) y esplácnicos simpáticos',
      originInsertion: 'Suspendido de la pared abdominal posterior por el mesenterio propiamente dicho en abanico y los mesocolon transverso y sigmoide',
      metrics: [
        { label: 'Superficie absortiva', value: '~250 m² (amplificada 600 veces por pliegues circulares, vellosidades y microvellosidades)' },
        { label: 'Reabsorción hídrica', value: '~7.5 L/día en intestino delgado; ~1.4 L/día en colon' },
        { label: 'Absorción específica', value: 'Hierro (duodeno), folato (yeyuno), B12 y sales biliares (íleon terminal)' },
        { label: 'Zonas limítrofes', value: 'Ángulo esplénico (punto de Griffith) y unión rectosigmoidea (punto de Sudeck)' }
      ],
      clinicalPearls: 'El ángulo esplénico del colon (territorio limítrofe AMS/AMI) y la unión rectosigmoidea (territorio AMI/ilíaca interna) son altamente vulnerables a la colitis isquémica no oclusiva durante estados de hipotensión sistémica.'
    }
  },

  aorta: {
    name: 'Aorta (Arco Aórtico, Aorta Torácica y Abdominal)',
    systemLabel: 'Sistema Cardiovascular / Arterial',
    kids: {
      badge: '🛣️ ¡La autopista principal de sangre del cuerpo!',
      pronounce: 'A-OR-ta',
      summary: '¡La aorta es la arteria más grande y resistente de todo tu cuerpo! Casi tan ancha como una manguera de jardín, sale de la parte superior de tu corazón haciendo una curva como un bastón de caramelo y lleva sangre roja rica en oxígeno hacia cada rincón de tu cuerpo.',
      whyYouNeedIt: '¡Cada gota de sangre oxigenada que bombea el lado izquierdo de tu corazón viaja primero por la aorta antes de repartirse hacia el cerebro, los brazos, el abdomen y las piernas!',
      funFacts: [
        '¡Las paredes de tu aorta son elásticas como una banda de goma gruesa para soportar el potente impulso de cada latido!',
        'Tres grandes salidas en la parte superior del arco aórtico envían sangre directamente a tu cabeza y a ambos brazos.',
        '¡A lo largo de tu vida, tu aorta transportará suficiente sangre como para llenar cientos de piscinas olímpicas!'
      ],
      quickStats: [
        { label: 'Tipo de vaso', value: 'Arteria elástica más grande (Roja = Oxigenada)' },
        { label: 'Diámetro', value: '~2.5 a 3 cm (como una manguera)' },
        { label: 'Nace en', value: 'Ventrículo izquierdo del corazón' },
        { label: 'Velocidad', value: '¡El flujo sanguíneo más rápido del cuerpo!' }
      ]
    },
    pro: {
      summary: 'Principal arteria elástica sistémica originada en el orificio aórtico del ventrículo izquierdo. Las láminas elásticas de la túnica media proporcionan el efecto Windkessel, transformando la eyección sistólica pulsátil en perfusión continua.',
      bloodSupply: 'Tercio interno nutrido por difusión luminal; túnica media externa y adventicia irrigadas por vasa vasorum (de arterias bronquiales, intercostales y lumbares)',
      venousDrainage: 'Venae vasorum que drenan en las venas sistémicas adyacentes (sistema ácigos y venas lumbares)',
      innervation: 'Barorreceptores del arco aórtico inervados por fibras aferentes del nervio vago (NC X) hacia el núcleo del tracto solitario (NTS)',
      originInsertion: 'Asciende desde la válvula aórtica → se arquea posteriormente sobre el bronquio principal izquierdo (ángulo esternal T4) → desciende por el hiato aórtico del diafragma (T12) → se bifurca en arterias ilíacas comunes en L4',
      metrics: [
        { label: 'Diámetro normal', value: 'Ascendente ≤ 3.5 cm | Abdominal ≤ 2.0 cm (AAA ≥ 3.0 cm)' },
        { label: 'Velocidad sistólica pico', value: '100 – 140 cm/s' },
        { label: 'Ramas del arco', value: '1. Tronco braquiocefálico, 2. Carótida común izq., 3. Subclavia izq.' },
        { label: 'Ramas abdominales', value: 'Tronco celíaco (T12), AMS (L1), Renales (L1–L2), AMI (L3)' }
      ],
      clinicalPearls: 'La rotura traumática de aorta ocurre con mayor frecuencia en el istmo aórtico (inmediatamente distal al origen de la arteria subclavia izquierda, junto al ligamento arterioso), donde el arco móvil se une a la aorta torácica descendente fija.'
    }
  },

  'vena-cava': {
    name: 'Vena Cava Superior e Inferior',
    systemLabel: 'Sistema Cardiovascular / Venoso',
    kids: {
      badge: '🔵 ¡Las tuberías gigantes de regreso al corazón!',
      pronounce: 'VE-na KA-va',
      summary: 'Después de que tu cuerpo usa el oxígeno de la sangre, ¡las venas la llevan de regreso al corazón para recargar oxígeno en los pulmones! La vena cava superior y la vena cava inferior son las dos venas más grandes del cuerpo: una trae sangre de la cabeza y los brazos, y la otra sube la sangre desde las piernas y el abdomen.',
      whyYouNeedIt: '¡La sangre viaja en un círculo continuo (por eso se llama circulación)! Sin estas venas gigantes, la sangre no podría volver al corazón y los pulmones.',
      funFacts: [
        '¡En los atlas de anatomía, las venas se colorean de azul para mostrar que la sangre ya entregó su carga de oxígeno!',
        'La vena cava inferior es la vena más ancha de tu cuerpo y sube justo al lado de tu columna vertebral.',
        '¡Cada vez que respiras profundo, el cambio de presión en tu pecho ayuda a aspirar sangre hacia arriba por la vena cava hasta el corazón!'
      ],
      quickStats: [
        { label: 'Tipo de vaso', value: 'Venas más grandes (Azul = Regreso al corazón)' },
        { label: 'Dos troncos', value: 'Superior (parte alta) e Inferior (parte baja)' },
        { label: 'Destino', value: 'Aurícula derecha del corazón' },
        { label: 'Presión', value: 'Flujo suave y constante hacia el corazón' }
      ]
    },
    pro: {
      summary: 'Troncos sistémicos primarios de capacitancia que devuelven sangre desoxigenada a la aurícula derecha. La VCS se forma por la unión de las venas braquiocefálicas derecha e izquierda (1.er cartílago costal derecho); la VCI se forma en L5 por la confluencia de las venas ilíacas comunes.',
      bloodSupply: 'Vasa vasorum adventiciales procedentes de ramas arteriales mediastínicas, frénicas y lumbares adyacentes',
      venousDrainage: 'La VCS recibe la vena ácigos en T4 antes de entrar en la aurícula derecha superior; la VCI atraviesa el centro tendinoso del diafragma en T8 (orificio de la cava) hacia la aurícula derecha inferior',
      innervation: 'Fibras vasomotoras autónomas y barorreceptores cardiopulmonares de baja presión en las uniones cavoauriculares (reflejo de Bainbridge)',
      originInsertion: 'Troncos venosos retroperitoneales y mediastínicos de gran calibre y sin válvulas, situados a la derecha de la aorta en la línea media',
      metrics: [
        { label: 'Presión venosa central', value: '2 – 8 mmHg (Aurícula derecha / VCS)' },
        { label: 'Diámetro de la VCI', value: '1.5 – 2.5 cm (colapso inspiratorio >50% = PAD normal)' },
        { label: 'Nivel diafragmático', value: 'La VCI cruza el diafragma en T8' },
        { label: 'Vía colateral', value: 'Sistema venoso ácigos / hemiácigos y lumbar' }
      ],
      clinicalPearls: 'En el embarazo avanzado, el decúbito supino provoca compresión de la VCI por el útero grávido (síndrome de hipotensión supina), reduciendo el retorno venoso y el gasto cardíaco; se alivia con inclinación lateral izquierda de 15–30°.'
    }
  },

  'carotid-jugular': {
    name: 'Arterias Carótidas y Venas Yugulares',
    systemLabel: 'Sistema Vascular de Cabeza y Cuello',
    kids: {
      badge: '💓 ¡Las tuberías exprés de sangre para el cerebro!',
      pronounce: 'Ka-RÓ-ti-das y Yu-gu-LA-res',
      summary: '¡Subiendo por ambos lados de tu cuello hay dos pares de vasos superimportantes! Las arterias carótidas (rojas) llevan sangre fresca rica en oxígeno hacia tu cerebro, y las venas yugulares (azules) bajan la sangre usada de vuelta al corazón.',
      whyYouNeedIt: '¡Tu cerebro nunca descansa y necesita un suministro constante y rápido de oxígeno cada segundo!',
      funFacts: [
        '¡Si apoyas suavemente dos dedos a un lado del cuello, justo debajo de la mandíbula, puedes sentir latir tu pulso carotídeo!',
        '¡Las jirafas tienen válvulas extra fuertes en sus venas yugulares para que la sangre no se agolpe en su cabeza cuando se agachan a beber agua!',
        'La arteria carótida se divide en dos ramas como una "Y": una para la cara y otra para el interior del cerebro.'
      ],
      quickStats: [
        { label: 'Función carótida', value: 'Sube oxígeno fresco al cerebro y la cara' },
        { label: 'Función yugular', value: 'Baja la sangre usada de regreso al corazón' },
        { label: 'Punto de pulso', value: 'Fácil de sentir suavemente en el cuello' },
        { label: 'Aporte cerebral', value: 'Entrega ~80% de la sangre del cerebro' }
      ]
    },
    pro: {
      summary: 'Paquete neurovascular par envuelto dentro de la vaina carotídea cervical junto con el nervio vago (NC X) y los ganglios linfáticos cervicales profundos.',
      bloodSupply: 'La carótida común derecha nace del tronco braquiocefálico; la izquierda nace directamente del arco aórtico. Se bifurca en C4 (borde superior del cartílago tiroides) en carótida interna (ACI, sin ramas cervicales) y carótida externa (ACE)',
      venousDrainage: 'La vena yugular interna (VYI) comienza en el agujero yugular como continuación del seno sigmoideo y se une a la vena subclavia en el ángulo venoso de Pirogoff para formar la vena braquiocefálica',
      innervation: 'Barorreceptor del seno carotídeo (nervio de Hering, rama del glosofaríngeo NC IX) y quimiorreceptor del cuerpo carotídeo (NC IX y NC X) en la bifurcación C4',
      originInsertion: 'Discurre dentro de la vaina carotídea: VYI lateral, carótida común/interna medial y nervio vago posterior entre ambas',
      metrics: [
        { label: 'Referencia de bifurcación', value: 'C3–C4 (Borde superior del cartílago tiroides)' },
        { label: 'Evaluación de PVY', value: 'Normal ≤ 3 cm sobre el ángulo esternal a 45° (~8 cm H₂O)' },
        { label: 'Flujo de la ACI', value: '~80% de la perfusión cerebral total' },
        { label: 'Acceso venoso central', value: 'VYI derecha (trayecto recto a la VCS, evita el conducto torácico)' }
      ],
      clinicalPearls: 'Las placas ateroscleróticas se forman preferentemente en la bifurcación carotídea debido a la separación turbulenta de la capa límite. La canalización ecoguiada de la VYI derecha evita lesionar el conducto torácico (que desemboca en el ángulo venoso izquierdo).'
    }
  },

  'brachial-radial-vessels': {
    name: 'Vasos Subclavios, Braquiales y Radiales (Circulación del Brazo)',
    systemLabel: 'Sistema Vascular del Miembro Superior',
    kids: {
      badge: '⌚ ¡Donde el médico toma tu pulso y presión arterial!',
      pronounce: 'Bra-KIAL y Ra-DIAL',
      summary: '¡Estos vasos sanguíneos viajan desde tu clavícula bajando por el brazo, el codo y la muñeca hasta la punta de tus dedos! Mantienen tus manos calientes y dan energía a los músculos del brazo para lanzar una pelota, escribir o trepar.',
      whyYouNeedIt: '¡Cada vez que te ponen un brazalete inflable en el brazo para medir tu presión arterial, están escuchando tu arteria braquial!',
      funFacts: [
        '¡Toca con dos dedos la muñeca del lado del pulgar: ese golpecito constante es el pulso de tu arteria radial!',
        'Mira el pliegue interno de tu codo o el dorso de tu mano: ¡esas líneas azuladas bajo la piel son venas superficiales!',
        'Cuando hace frío afuera, pequeños músculos en estos vasos se estrechan un poco para conservar el calor cerca del corazón.'
      ],
      quickStats: [
        { label: 'Brazo superior', value: 'Arteria braquial (manguito de presión arterial)' },
        { label: 'Muñeca (lado pulgar)', value: 'Arteria radial (punto del pulso en la muñeca)' },
        { label: 'Vena del codo', value: 'Vena mediana cubital (análisis de sangre)' },
        { label: 'Arcos de la mano', value: 'Dos arcos palmares irrigan los 10 dedos' }
      ]
    },
    pro: {
      summary: 'Continuo arterial de la extremidad superior (subclavia → axilar en la 1.ª costilla → braquial en el borde inferior del redondo mayor → radial y cubital en el cuello del radio) emparejado con venas satélites profundas y las redes venosas superficiales cefálica y basílica.',
      bloodSupply: 'Las arterias radial y cubital se anastomosan en la mano mediante los arcos palmares superficial (predominantemente cubital) y profundo (predominantemente radial), originando las arterias digitales palmares',
      venousDrainage: 'La red venosa dorsal drena en la vena cefálica lateral (surco deltopectoral → vena axilar) y la vena basílica medial (se une a las venas braquiales para formar la vena axilar), conectadas en la fosa cubital por la vena mediana cubital',
      innervation: 'Fibras vasomotoras simpáticas posganglionares transportadas a través de las raíces y fascículos del plexo braquial (C5–T1)',
      originInsertion: 'Contenido de la fosa cubital de lateral a medial: tendón del bíceps, arteria braquial y nervio mediano',
      metrics: [
        { label: 'PA normal (braquial)', value: '< 120 / 80 mmHg' },
        { label: 'Prueba de Allen', value: 'Verifica perfusión colateral cubital (< 5–7 s) antes de punción radial' },
        { label: 'Sitio de venopunción', value: 'Vena mediana cubital (separada de la arteria braquial por la aponeurosis bicipital)' },
        { label: 'Fístula AV de elección', value: 'Fístula radiocefálica de Brescia-Cimino en la muñeca' }
      ],
      clinicalPearls: 'Las fracturas supracondíleas de húmero en niños pueden lesionar o atrapar la arteria braquial y el nervio mediano en la fosa cubital, con riesgo de contractura isquémica de Volkmann de los flexores del antebrazo.'
    }
  },

  'femoral-saphenous-vessels': {
    name: 'Vasos Ilíacos, Femorales y Safenos (Circulación de la Pierna)',
    systemLabel: 'Sistema Vascular del Miembro Inferior',
    kids: {
      badge: '🦵 ¡Venas que desafían la gravedad y arterias potentes!',
      pronounce: 'Fe-mo-RAL y Sa-FE-na',
      summary: '¡Tus piernas tienen los vasos sanguíneos más largos del cuerpo! La arteria femoral impulsa oxígeno hacia los grandes músculos del muslo, mientras que las venas safena magna y femoral usan compuertas de un solo sentido (válvulas) y el empuje de tus músculos para subir la sangre contra la gravedad de regreso al corazón.',
      whyYouNeedIt: 'Bajar sangre hacia los pies es fácil con la gravedad, ¡pero subirla más de un metro de regreso al corazón necesita válvulas antirretorno y que tus pantorrillas funcionen como un segundo corazón!',
      funFacts: [
        '¡La vena safena magna es la vena más larga de todo el cuerpo humano: va desde el dedo gordo del pie hasta la ingle!',
        '¡Cada vez que caminas o te pones de puntillas, los músculos de la pantorrilla aprietan las venas profundas e impulsan la sangre hacia arriba!',
        'A veces los cirujanos usan un segmento de la vena safena magna para reparar arterias obstruidas en el corazón.'
      ],
      quickStats: [
        { label: 'Vena más larga', value: 'Vena safena magna (del pie a la cadera)' },
        { label: 'Arteria del muslo', value: 'Arteria femoral' },
        { label: 'Arma secreta', value: 'Válvulas de bolsillo que impiden el reflujo' },
        { label: 'Segundo corazón', value: '¡La bomba muscular de la pantorrilla al caminar!' }
      ]
    },
    pro: {
      summary: 'Eje arterial de alto flujo del miembro inferior (ilíaca externa → femoral común bajo el ligamento inguinal → femoral profunda y superficial → poplítea por el hiato aductor → tibial anterior/posterior y peronea) acompañado de venas profundas y los sistemas safenos mayor y menor.',
      bloodSupply: 'La arteria femoral profunda irriga la musculatura del muslo mediante ramas circunflejas femorales medial/lateral y perforantes; la arteria femoral superficial continúa para irrigar la pierna y el pie',
      venousDrainage: 'Sistema venoso profundo (tibial → poplítea → femoral → ilíaca externa) y vena safena magna superficial (asciende anterior al maléolo medial y desemboca en la vena femoral en el cayado safenofemoral) comunicados por venas perforantes con válvulas bicúspides',
      innervation: 'Ganglios de la cadena simpática lumbar y sacra (L1–S3) que regulan la resistencia vascular periférica y la vasoconstricción ortostática',
      originInsertion: 'Disposición en el triángulo femoral de lateral a medial (NAVEL): Nervio femoral, Arteria femoral, Vena femoral, Espacio vacío y Linfáticos',
      metrics: [
        { label: 'Índice tobillo-brazo (ITB)', value: 'Normal 1.0 – 1.4 (EAP < 0.9; isquemia crítica < 0.4)' },
        { label: 'Válvulas venosas', value: '10 – 20 válvulas bicúspides a lo largo de la vena safena magna' },
        { label: 'Acceso por catéter', value: 'Arteria/vena femoral común 1–2 cm inferior al punto medio inguinal' },
        { label: 'Pulsos pedios', value: 'Pedio dorsal (lateral al tendón EHL) y tibial posterior (tras maléolo medial)' }
      ],
      clinicalPearls: 'La tríada de Virchow (estasis, lesión endotelial, hipercoagulabilidad) predispone a las venas profundas de la pantorrilla y muslo a la trombosis venosa profunda (TVP), que puede embolizar por la VCI y el corazón derecho causando tromboembolismo pulmonar (TEP).'
    }
  },

  skull: {
    name: 'Cráneo y Mandíbula',
    systemLabel: 'Sistema Esquelético Axial',
    kids: {
      badge: '🪖 ¡Tu casco de hueso integrado!',
      pronounce: 'KRÁ-ne-o y Man-DÍ-bu-la',
      summary: '¡Tu cráneo es un casco superfuerte formado por 22 huesos encajados como piezas de rompecabezas! La parte superior protege tu delicado cerebro, mientras que la parte frontal da forma a tu cara, sostiene tus dientes y protege tus ojos y oídos.',
      whyYouNeedIt: '¡Sin el casco de tu cráneo, cualquier golpe lastimaría tu cerebro, y sin tu mandíbula inferior no podrías masticar ni hablar!',
      funFacts: [
        '¡De los 22 huesos del cráneo, solo UNO puede moverse: la mandíbula inferior!',
        'Las líneas en zigzag donde se unen los huesos del cráneo como cierres se llaman "suturas".',
        '¡Dentro del cráneo, detrás del tímpano, están los 3 huesos más pequeños de todo el cuerpo (martillo, yunque y estribo), más pequeños que un grano de arroz!'
      ],
      quickStats: [
        { label: 'Huesos del cráneo', value: '22 huesos (8 craneales y 14 faciales)' },
        { label: 'Hueso móvil', value: 'Solo 1 (Mandíbula inferior)' },
        { label: 'Hueso más fuerte', value: 'La mandíbula es el hueso más fuerte de la cara' },
        { label: 'Huesos más pequeños', value: '3 huesecillos del oído en el hueso temporal' }
      ]
    },
    pro: {
      summary: 'Estructura ósea compuesta por 22 huesos (excluyendo los 6 huesecillos del oído) dividida en neurocráneo (frontal, parietales ×2, temporales ×2, occipital, esfenoides, etmoides) y viscerocráneo (esqueleto facial y mandíbula) unidos por suturas fibrosas y la articulación temporomandibular (ATM) sinovial.',
      bloodSupply: 'Arteria meníngea media (rama de la arteria maxilar a través del agujero espinoso), ramas temporal superficial, occipital y facial de la arteria carótida externa',
      venousDrainage: 'Venas diploicas y venas emisarias que comunican las venas extracraneales del cuero cabelludo con los senos venosos durales intracraneales',
      innervation: 'Inervación sensitiva cutánea y perióstica mediante las divisiones del nervio trigémino (NC V1 oftálmico, V2 maxilar, V3 mandibular) y nervios cervicales C2–C3',
      originInsertion: 'Se articula inferiormente con el atlas (C1) en los cóndilos atlantooccipitales; la mandíbula se articula mediante un disco fibrocartilaginoso en la fosa mandibular del hueso temporal',
      metrics: [
        { label: 'Capas de la bóveda', value: 'Tabla externa, diploe esponjoso y tabla interna vítrea' },
        { label: 'Cierre de fontanelas', value: 'Posterior: 2–3 meses | Anterior (Bregma): 12–18 meses' },
        { label: 'Agujero magno', value: 'Transmite bulbo raquídeo, meninges, arterias vertebrales y espinales, NC XI' },
        { label: 'Punto más frágil', value: 'Pterion (unión en H de frontal, parietal, temporal y esfenoides)' }
      ],
      clinicalPearls: 'El traumatismo sobre el pterion fractura la delgada escama temporal sobre la rama anterior de la arteria meníngea media, causando un hematoma epidural arterial (imagen biconvexa lenticular en TC con intervalo lúcido clásico).'
    }
  },

  'rib-cage': {
    name: 'Caja Torácica y Esternón (Costillas)',
    systemLabel: 'Sistema Esquelético Axial',
    kids: {
      badge: '🛡️ ¡Armadura flexible para tu corazón y pulmones!',
      pronounce: 'Kos-TI-llas y Es-ter-NÓN',
      summary: 'Siente los huesos curvos en tu pecho: ¡esa es tu caja torácica! Tienes 12 pares de costillas (24 en total) que se curvan desde tu columna en la espalda hasta el hueso plano del pecho (esternón) al frente, formando una jaula protectora alrededor del corazón y los pulmones.',
      whyYouNeedIt: '¡Una caja sólida de hueso no te dejaría respirar! Tus costillas se unen al esternón mediante cartílago flexible para que tu pecho se infle y desinfle con cada respiración.',
      funFacts: [
        '¡Tanto los niños como las niñas tienen exactamente el mismo número de costillas: 12 pares (24 costillas en total)!',
        'Los 2 últimos pares se llaman "costillas flotantes" porque solo se unen a la columna por detrás, ¡no al esternón por delante!',
        'Dentro de tu esternón plano, la médula ósea roja fabrica millones de células sanguíneas nuevas cada segundo.'
      ],
      quickStats: [
        { label: 'Total de costillas', value: '24 costillas (12 pares)' },
        { label: 'Escudo frontal', value: 'Esternón' },
        { label: 'Costillas verdaderas', value: 'Pares 1–7 unidos directamente al esternón' },
        { label: 'Costillas flotantes', value: 'Pares 11–12 libres por delante' }
      ]
    },
    pro: {
      summary: 'Caja osteocartilaginosa torácica formada por el esternón (manubrio, cuerpo, apófisis xifoides), 12 pares de costillas (verdaderas vertebroesternales 1–7, falsas vertebrocondrales 8–10, flotantes vertebrales 11–12), cartílagos costales y vértebras torácicas T1–T12.',
      bloodSupply: 'Arterias intercostales posteriores (1.ª–2.ª de la intercostal suprema; 3.ª–11.ª de la aorta torácica descendente) anastomosadas con ramas intercostales anteriores de la arteria torácica (mamaria) interna',
      venousDrainage: 'Venas intercostales que drenan anteriormente en las venas torácicas internas y posteriormente en el sistema ácigos/hemiácigos',
      innervation: 'Nervios intercostales (ramos anteriores de T1–T11) y nervio subcostal (T12) que discurren por el surco costal en el borde inferior de cada costilla',
      originInsertion: 'Movimiento en palanca de bomba (costillas superiores elevan el esternón aumentando el diámetro AP) y en asa de cubo (costillas inferiores elevan los arcos laterales aumentando el diámetro transversal)',
      metrics: [
        { label: 'Ángulo esternal (de Louis)', value: 'Unión manubrioesternal en el 2.º cartílago costal / disco T4–T5' },
        { label: 'Paquete neurovascular', value: 'En el surco costal inferior: VAN (Vena, Arteria, Nervio de arriba abajo)' },
        { label: 'Zona segura toracocentesis', value: 'Borde superior de la costilla inferior (evita el paquete VAN superior)' },
        { label: 'Hematopoyesis', value: 'El esternón y las costillas conservan médula roja activa toda la vida adulta' }
      ],
      clinicalPearls: 'Las agujas de toracocentesis o tubos de tórax deben insertarse siempre inmediatamente por encima del borde superior de la costilla inferior para evitar lesionar el paquete neurovascular intercostal (VAN) alojado en el surco subcostal de la costilla superior.'
    }
  },

  spine: {
    name: 'Columna Vertebral (Espina Dorsal)',
    systemLabel: 'Pilar Esquelético Axial y Neural',
    kids: {
      badge: '🏗️ ¡La torre flexible que te mantiene de pie!',
      pronounce: 'Ko-LUM-na Ver-te-BRAL',
      summary: 'En lugar de ser un palo rígido de hueso, ¡tu columna vertebral es una torre de 33 huesos en forma de anillo llamados vértebras, con cojines blanditos (discos) en medio! Esto te permite mantenerte erguido y al mismo tiempo doblarte, girar y bailar.',
      whyYouNeedIt: 'Además de sostener tu cabeza y tu cuerpo, los anillos huecos de tu columna forman un túnel blindado para tu médula espinal, ¡el cable principal que lleva mensajes entre tu cerebro y tu cuerpo!',
      funFacts: [
        '¡Eres aproximadamente 1 centímetro más alto al despertar por la mañana que al acostarte porque los discos blandos entre tus vértebras se rehidratan mientras duermes!',
        '¡Los humanos y las jirafas de cuello largo tienen exactamente el mismo número de vértebras en el cuello: 7 vértebras cervicales!',
        'Vista de lado, tu columna tiene forma de "S" con resorte para absorber impactos cuando saltas.'
      ],
      quickStats: [
        { label: 'Total de huesos', value: '33 vértebras (24 móviles + Sacro y Cóccix)' },
        { label: 'Cuello (Cervical)', value: '7 vértebras (C1–C7)' },
        { label: 'Pecho y espalda baja', value: '12 torácicas + 5 lumbares' },
        { label: 'Amortiguadores', value: '23 discos intervertebrales' }
      ]
    },
    pro: {
      summary: 'Columna axial segmentada de 33 vértebras (7 cervicales, 12 torácicas, 5 lumbares, 5 sacras fusionadas, 4 coccígeas fusionadas) con curvaturas sagitales primarias (cifosis torácica y sacra) y secundarias (lordosis cervical y lumbar).',
      bloodSupply: 'Ramas espinales segmentarias de las arterias vertebral, cervical ascendente, intercostales posteriores, lumbares y sacras laterales que nutren las arterias espinales anterior y posteriores',
      venousDrainage: 'Plexos venosos vertebrales interno y externo avalvulares de Batson que comunican libremente con las venas pélvicas, intercostales y senos durales craneales',
      innervation: 'Nervios recurrentes meníngeos (sinuvertebrales de Luschka) que inervan el ligamento longitudinal posterior y el anillo fibroso externo; ramos mediales de los ramos dorsales para las articulaciones cigapofisarias (facetarias)',
      originInsertion: 'Estabilizada por los ligamentos longitudinales anterior y posterior, ligamento amarillo, interespinosos y supraespinoso; los discos intervertebrales constan de anillo fibroso externo de colágeno tipo I y núcleo pulposo interno rico en proteoglicanos',
      metrics: [
        { label: 'Fórmula vertebral', value: 'C7 • T12 • L5 • S5 (fusionadas) • Co4 (fusionadas)' },
        { label: 'Cono medular adulto', value: 'Termina en el borde inferior de L1–L2 (cola de caballo debajo)' },
        { label: 'Nivel de punción lumbar', value: 'Espacio L3–L4 o L4–L5 (crestas ilíacas = línea supracrestal L4)' },
        { label: 'Vértebras especiales', value: 'C1 Atlas (asentir "Sí") y C2 Axis con diente odontoides (girar "No")' }
      ],
      clinicalPearls: 'La hernia discal posterolateral en L4–L5 comprime la raíz L5 (causando pie caído / debilidad en dorsiflexión del hallux), mientras que la hernia L5–S1 comprime la raíz S1 (abolición del reflejo aquíleo y debilidad en flexión plantar). El plexo venoso avalvular de Batson permite metástasis directas de cáncer de próstata o mama a los cuerpos vertebrales.'
    }
  },

  'humerus-radius-ulna': {
    name: 'Húmero, Radio y Cúbito (Huesos del Brazo y Antebrazo)',
    systemLabel: 'Sistema Esquelético Apendicular',
    kids: {
      badge: '🦾 ¡Los 3 huesos que permiten alcanzar, doblar y girar el brazo!',
      pronounce: 'Ú-me-ro, RA-dio y KÚ-bi-to',
      summary: 'Tu brazo superior tiene un hueso grande y fuerte llamado húmero, ¡y tu antebrazo tiene dos huesos compañeros llamados radio y cúbito (ulna)! Juntos permiten que tu hombro gire en círculos, tu codo se doble como una bisagra y tu mano gire con la palma hacia arriba o hacia abajo.',
      whyYouNeedIt: '¡Tener DOS huesos en el antebrazo (radio y cúbito) es el truco secreto que te permite girar el pomo de una puerta, usar un destornillador o voltear un panqueque!',
      funFacts: [
        'En inglés al codo lo llaman "hueso de la risa" porque el HÚMERO suena como "humorous" (gracioso). En realidad, ¡el hormigueo al golpearte el codo viene del nervio cubital que pasa junto al hueso!',
        '¡Cuando giras la palma de la mano hacia abajo, el hueso radio se cruza por encima del cúbito formando una "X"!',
        'Al final de estos huesos, tus manos y muñecas tienen 27 huesos pequeños en cada mano (¡54 entre las dos!).'
      ],
      quickStats: [
        { label: 'Brazo superior', value: '1 hueso: Húmero' },
        { label: 'Antebrazo', value: '2 huesos: Radio (lado pulgar) y Cúbito (lado meñique)' },
        { label: 'Articulación del codo', value: 'Articulación en bisagra + pivote' },
        { label: 'Huesos de la mano', value: '27 huesos en cada mano y muñeca' }
      ]
    },
    pro: {
      summary: 'Osteología del miembro superior: el húmero se articula proximalmente en la articulación glenohumeral esferoidea y distalmente en las articulaciones humerocubital (troclear) y humerorradial; el radio y el cúbito (ulna) se articulan en las articulaciones radiocubitales proximal y distal unidas por la membrana interósea.',
      bloodSupply: 'Arterias nutricias procedentes de las arterias circunflejas humerales anterior/posterior, braquial profunda, radial, cubital e interóseas anterior/posterior',
      venousDrainage: 'Venas satélites profundas de las arterias braquial, radial y cubital',
      innervation: 'Cuatro pares fractura-nervio del húmero: cuello quirúrgico → nervio axilar; surco radial (diáfisis media) → nervio radial; supracondílea distal → nervio mediano; epicóndilo medial → nervio cubital',
      originInsertion: 'La cabeza del radio se mantiene contra la escotadura radial del cúbito mediante el ligamento anular, permitiendo 180° de pronación/supinación alrededor del cúbito fijo',
      metrics: [
        { label: 'Ángulo de carga', value: '10° – 15° de cúbito valgo fisiológico en extensión completa' },
        { label: 'Transmisión de fuerza', value: 'Mano → Escafoides/Semilunar → Radio distal → Membrana interósea → Cúbito proximal → Húmero' },
        { label: 'Fracturas clásicas', value: 'Colles (radio distal en dorso de tenedor), Monteggia (cúbito + cabeza radial), Galeazzi (radio + ARCD)' },
        { label: 'Inserción manguito rotador', value: 'Tubérculo mayor (supraespinoso, infraespinoso, redondo menor) y menor (subescapular)' }
      ],
      clinicalPearls: 'La fractura diafisaria media del húmero lesiona el nervio radial y la arteria braquial profunda en el canal de torsión, presentándose con mano caída (parálisis de extensores de muñeca y braquiorradial) e hipoestesia en el primer espacio interdigital dorsal.'
    }
  },

  pelvis: {
    name: 'Pelvis (Huesos Coxales y Sacro)',
    systemLabel: 'Cintura Pélvica y Sistema Esquelético',
    kids: {
      badge: '🥣 ¡El cuenco fuerte que conecta la mitad superior e inferior del cuerpo!',
      pronounce: 'PEL-vis (Í-li-on y SA-kro)',
      summary: '¡Tu pelvis es un anillo con forma de cuenco formado por huesos superresistentes en tus caderas! Sostiene el peso de toda la parte superior de tu cuerpo cuando te sientas o estás de pie, protege los órganos de la parte baja del abdomen y tiene dos copas profundas a los lados donde encajan los huesos de tus piernas.',
      whyYouNeedIt: '¡Conecta tu columna vertebral con tus dos piernas para que puedas caminar erguido en dos pies, correr y mantener el equilibrio!',
      funFacts: [
        '¡Cada hueso de la cadera está formado en realidad por 3 huesos (ilion, isquion y pubis) que se fusionan en uno solo a medida que creces!',
        'Cuando te sientas en una silla, te apoyas sobre dos huesos curvos inferiores llamados tuberosidades isquiáticas.',
        'La palabra "pelvis" viene del latín y significa "cuenco" o "vasija".'
      ],
      quickStats: [
        { label: 'Forma', value: 'Cuenco / anillo óseo protector' },
        { label: 'Copa de la cadera', value: 'Acetábulo (cavidad para el fémur)' },
        { label: '3 huesos fusionados', value: 'Ilion, Isquion y Pubis en cada lado' },
        { label: 'Función principal', value: 'Transfiere el peso de la columna a las piernas' }
      ]
    },
    pro: {
      summary: 'Anillo óseo compuesto por los huesos coxales pares (ilion, isquion y pubis fusionados en el cartílago trirradiado del acetábulo) unidos anteriormente en la sínfisis del pubis fibrocartilaginosa y posteriormente con el sacro en las articulaciones sacroilíacas (SI).',
      bloodSupply: 'Sistemas arteriales ilíaco interno (iliolumbar, obturatriz, glúteas superior/inferior, pudenda interna) e ilíaco externo (circunfleja ilíaca profunda)',
      venousDrainage: 'Ricos plexos venosos pélvicos retroperitoneales que drenan en las venas ilíacas internas y comunes',
      innervation: 'Plexo lumbosacro (L1–S4); el nervio obturador (L2–L4) atraviesa el conducto obturador; el nervio ciático (L4–S3) sale por el agujero ciático mayor inferior al músculo piriforme',
      originInsertion: 'Estabilizada por los ligamentos iliolumbar, sacroilíacos anterior/posterior, sacrotuberoso y sacroespinoso; la EIAS da origen al sartorio y al ligamento inguinal',
      metrics: [
        { label: 'Conjugado obstétrico', value: '≥ 10.5 – 11.0 cm (pelvis femenina ginecoide)' },
        { label: 'Contribuciones acetabulares', value: 'Ilion (~2/5), Isquion (~2/5), Pubis (~1/5)' },
        { label: 'Sitio de biopsia medular', value: 'Espina ilíaca posterosuperior (EIPS) y cresta ilíaca' },
        { label: 'Transferencia de carga', value: 'Columna → Sacro → Art. SI → Línea arqueada → Acetábulo (de pie) o Tuberosidad isquiática (sentado)' }
      ],
      clinicalPearls: 'Las fracturas del anillo pélvico en "libro abierto" de alta energía pueden desgarrar el plexo venoso pélvico posterior y ramas de la arteria ilíaca interna, provocando hemorragia retroperitoneal potencialmente mortal (>2–3 L) que requiere estabilización inmediata con faja pélvica.'
    }
  },

  'femur-tibia-fibula': {
    name: 'Fémur, Rótula, Tibia y Peroné (Huesos del Muslo, Rodilla y Pierna)',
    systemLabel: 'Sistema Esquelético Apendicular',
    kids: {
      badge: '🏆 ¡Hogar del hueso más largo y fuerte de tu cuerpo!',
      pronounce: 'FÉ-mur, RÓ-tu-la y TI-bia',
      summary: '¡El hueso de tu muslo —el fémur— es el hueso más largo, pesado y fuerte del cuerpo humano! Debajo de tu rótula con forma de escudo (patela) están los dos huesos de la parte baja de la pierna: la gruesa espinilla (tibia) y su compañero delgado, el peroné (fíbula).',
      whyYouNeedIt: '¡Cada vez que saltas, corres o pateas un balón de fútbol, estos huesos superfuertes absorben fuerzas varias veces mayores que todo el peso de tu cuerpo!',
      funFacts: [
        '¡Comparado peso por peso, el hueso fémur de tu muslo es más resistente que el concreto sólido!',
        '¡Tu fémur representa aproximadamente una cuarta parte (25%) de toda tu estatura!',
        'Tu rótula (patela) es un hueso "sesamoideo" especial construido dentro de un tendón para darle mayor palanca a los músculos del muslo al estirar la pierna.'
      ],
      quickStats: [
        { label: 'Récord', value: 'Fémur = Hueso más largo y fuerte' },
        { label: 'Rodilla', value: 'Rótula / Patela (protege la articulación)' },
        { label: 'Espinilla', value: 'Tibia (soporta ~85% del peso de la pierna)' },
        { label: 'Estabilizador lateral', value: 'Peroné / Fíbula (forma el tobillo externo)' }
      ]
    },
    pro: {
      summary: 'Pilar portador de carga del miembro inferior: fémur (cabeza, cuello con ángulo de inclinación de ~125°, diáfisis, cóndilos medial y lateral), rótula sesamoidea, tibia medial portadora de peso y peroné (fíbula) lateral para inserción muscular y estabilidad de la mortaja tibioperoneoastragalina.',
      bloodSupply: 'La cabeza femoral recibe irrigación precaria por las ramas retinaculares de la arteria circunfleja femoral medial (ACFM) y la arteria del ligamento redondo; la diáfisis tibial es irrigada por la rama nutricia de la arteria tibial posterior',
      venousDrainage: 'Venas satélites femorales profundas, poplíteas y tibiales anteriores/posteriores',
      innervation: 'Ley de Hilton: las articulaciones de la cadera y rodilla están inervadas por ramas articulares de los nervios femoral, obturador y ciático (la patología de cadera suele referir dolor a la cara medial de la rodilla vía nervio obturador)',
      originInsertion: 'Rodilla estabilizada por el LCA (impide traslación tibial anterior), LCP (impide traslación posterior), LCM, LCL y los meniscos fibrocartilaginosos medial y lateral',
      metrics: [
        { label: 'Ángulo de inclinación', value: '120° – 135° (Coxa vara < 120°; Coxa valga > 135°)' },
        { label: 'Tríada desgraciada (O’Donoghue)', value: 'LCA + LCM + Menisco medial (por impacto valgo lateral en la rodilla)' },
        { label: 'Riesgo en cuello del peroné', value: 'El nervio peroneo común rodea el cuello del peroné → Pie caído si se lesiona' },
        { label: 'Síndrome compartimental', value: '4 compartimentos crurales; ΔP < 30 mmHg requiere fasciotomía urgente' }
      ],
      clinicalPearls: 'Las fracturas intracapsulares del cuello femoral interrumpen las ramas retinaculares ascendentes de la arteria circunfleja femoral medial, conllevando un alto riesgo de necrosis avascular (NAV) de la cabeza femoral.'
    }
  },

  'pectoralis-deltoid': {
    name: 'Pectoral Mayor y Deltoides (Músculos del Pecho y Hombro)',
    systemLabel: 'Musculatura Torácica Superior y del Hombro',
    kids: {
      badge: '💪 ¡Tus motores para empujar, abrazar y levantar los brazos!',
      pronounce: 'Pek-to-RAL y Del-TOI-des',
      summary: '¡En la parte frontal de tu pecho están los músculos pectorales mayores con forma de abanico, y cubriendo tus hombros como hombreras redondeadas están los músculos deltoides! Juntos te permiten abrir puertas, dar grandes abrazos, nadar y levantar los brazos hacia el cielo.',
      whyYouNeedIt: '¡Cada vez que haces una lagartija, lanzas una pelota o levantas la mano en clase, tus músculos pectoral y deltoides trabajan en equipo para mover tu hombro!',
      funFacts: [
        '¡La palabra "deltoides" viene de la letra griega Delta (Δ) porque el músculo del hombro tiene forma de triángulo!',
        'Tu deltoides tiene 3 partes (frontal, lateral y posterior) para que puedas levantar el brazo hacia adelante, hacia el lado o hacia atrás.',
        '¡Los músculos solo pueden TIRAR de los huesos, nunca empujar! Por eso trabajan en equipos opuestos.'
      ],
      quickStats: [
        { label: 'Función pectoral', value: 'Empuja los brazos al frente y los junta' },
        { label: 'Función deltoides', value: 'Levanta los brazos en todas direcciones' },
        { label: 'Forma', value: 'Pecho en abanico + Hombro triangular' },
        { label: 'Equipo', value: 'Trabaja con los músculos de la espalda (dorsal y trapecio)' }
      ]
    },
    pro: {
      summary: 'Motores primarios toracohumerales y escapulohumerales superficiales que forman la pared anterior de la axila y el contorno redondeado del hombro, separados por el surco deltopectoral (que aloja la vena cefálica).',
      bloodSupply: 'Tronco toracoacromial (ramas pectoral y deltoidea) y arteria circunfleja humeral posterior',
      venousDrainage: 'Vena cefálica (en el triángulo deltopectoral) y tributarias toracoacromiales hacia la vena axilar',
      innervation: 'Pectoral mayor: nervios pectorales medial (C8–T1) y lateral (C5–C7); Deltoides: nervio axilar (C5–C6 a través del espacio cuadrangular)',
      originInsertion: 'Pectoral mayor: cabezas clavicular y esternocostal → labio lateral del surco intertubercular del húmero (aduce, rota internamente y flexiona el húmero). Deltoides: clavícula lateral, acromion y espina de la escápula → tuberosidad deltoidea del húmero (abduce el húmero de 15° a 90° tras iniciar el supraespinoso de 0° a 15°)',
      metrics: [
        { label: 'Arco de abducción', value: '0°–15° Supraespinoso | 15°–90° Deltoides | >90° Serrato anterior + Trapecio' },
        { label: 'Inyección IM', value: 'Deltoides medio 3–5 cm (2–3 traveses de dedo) bajo el acromion' },
        { label: 'Espacio cuadrangular', value: 'Transmite el nervio axilar y la arteria circunfleja humeral posterior' },
        { label: 'Arquitectura fibrilar', value: 'Fibras multipennadas en el deltoides medio maximizan la fuerza de sección transversal' }
      ],
      clinicalPearls: 'La luxación glenohumeral anterior o la fractura del cuello quirúrgico del húmero pueden lesionar el nervio axilar (C5–C6), provocando atrofia y aplanamiento del deltoides, incapacidad para abducir el brazo entre 15° y 90° y pérdida sensitiva sobre la región lateral del hombro.'
    }
  },

  'biceps-triceps': {
    name: 'Bíceps Braquial, Tríceps y Flexores del Antebrazo',
    systemLabel: 'Musculatura del Miembro Superior',
    kids: {
      badge: '💪 ¡El famoso equipo que dobla y estira tus brazos!',
      pronounce: 'BÍ-seps Bra-KIAL y TRÍ-seps',
      summary: 'Dobla el codo y saca músculo: ¡ese bulto en la parte delantera de tu brazo es tu bíceps braquial! Cuando el bíceps se contrae (se acorta), tira de tu antebrazo hacia arriba. Cuando quieres volver a estirar el brazo, ¡el músculo tríceps en la parte trasera tira en sentido contrario!',
      whyYouNeedIt: 'Como los músculos solo pueden tirar, ¡tu bíceps (adelante) y tu tríceps (atrás) trabajan como una pareja antagónica para doblar y estirar el codo suavemente!',
      funFacts: [
        '¡"Bí-ceps" significa "dos cabezas" en latín porque la parte superior del músculo se divide en dos tendones que se sujetan al omóplato!',
        '¡"Trí-ceps" en la parte posterior del brazo significa "tres cabezas"!',
        'Tu bíceps no solo dobla el codo: ¡también es el músculo más fuerte para girar la palma de la mano hacia arriba (como al girar una llave o abrir un frasco)!'
      ],
      quickStats: [
        { label: 'Significado', value: 'Bíceps = "Dos cabezas" | Tríceps = "Tres cabezas"' },
        { label: 'Acción del bíceps', value: 'Dobla el codo (flexión) y gira la palma arriba (supinación)' },
        { label: 'Acción del tríceps', value: 'Estira el codo (extensión)' },
        { label: 'Conector', value: 'Tendones blancos fuertes unen el músculo al hueso' }
      ]
    },
    pro: {
      summary: 'Compartimento braquial anterior (bíceps braquial, braquial, coracobraquial) y compartimento posterior (tríceps braquial) que actúan sobre las articulaciones glenohumeral, del codo y radiocubital.',
      bloodSupply: 'Ramas musculares de la arteria braquial (compartimento anterior) y de la arteria braquial profunda (compartimento posterior)',
      venousDrainage: 'Venas satélites braquiales y tributarias basílicas/cefálicas',
      innervation: 'Compartimento anterior (BBC): nervio musculocutáneo (C5–C7); compartimento posterior (tríceps): nervio radial (C6–C8)',
      originInsertion: 'Orígenes del bíceps: cabeza corta (apófisis coracoides), cabeza larga (tubérculo supraglenoideo por el surco intertubercular). Inserción: tuberosidad del radio y aponeurosis bicipital. Acción: potente supinador del antebrazo flexionado y flexor del codo (el braquial es el flexor puro en cualquier posición)',
      metrics: [
        { label: 'Reflejos osteotendinosos', value: 'Bicipital = C5/C6 | Estilorradial = C6 | Tricipital = C7' },
        { label: 'Torque máximo supinación', value: 'Máximo con el codo a 90° de flexión' },
        { label: 'Pareja antagonista', value: 'Inhibición recíproca Ia relaja el tríceps al activar el bíceps' },
        { label: 'Signo de rotura tendinosa', value: '"Signo de Popeye" (retracción distal del vientre tras rotura de la cabeza larga)' }
      ],
      clinicalPearls: 'La parálisis de Erb-Duchenne (lesión por tracción del tronco superior C5–C6 del plexo braquial) denerva el deltoides, supraespinoso, infraespinoso y bíceps braquial, produciendo la postura clásica en "propina de mesero" (hombro en aducción y rotación interna, antebrazo extendido y pronado).'
    }
  },

  'rectus-abdominis-diaphragm': {
    name: 'Recto Abdominal, Oblicuos y Diafragma Torácico',
    systemLabel: 'Musculatura Central (Core) y Respiratoria',
    kids: {
      badge: '🛡️ ¡Tu armadura central y el músculo paraguas para respirar!',
      pronounce: 'REK-to Ab-do-mi-NAL y Dia-FRAG-ma',
      summary: 'Tus músculos abdominales envuelven tu abdomen como un cinturón tejido de armadura para proteger tus órganos y ayudarte a sentarte, girar y mantener el equilibrio. Justo encima de ellos, debajo de tus costillas, hay un músculo con forma de paraguas llamado diafragma que baja cada vez que inhalas.',
      whyYouNeedIt: '¡Tu diafragma hace la mayor parte del trabajo al respirar, y tus músculos abdominales estabilizan tu columna en cada movimiento!',
      funFacts: [
        '¿Alguna vez has tenido hipo? ¡El hipo ocurre cuando tu músculo diafragma da un pequeño brinco repentino y te hace tomar aire de golpe!',
        'La forma de "tableta" del recto abdominal se debe a 3 bandas horizontales de tejido conectivo que cruzan una línea vertical en el centro.',
        '¡Cuando te ríes fuerte, toses o estornudas, tus músculos abdominales se contraen superrápido!'
      ],
      quickStats: [
        { label: 'Forma del diafragma', value: 'Paracaídas / cúpula debajo de los pulmones' },
        { label: 'Capas abdominales', value: '4 capas musculares que envuelven el abdomen' },
        { label: 'Causante del hipo', value: '¡Espasmo repentino del diafragma!' },
        { label: 'Función principal', value: 'Respiración + Proteger órganos + Postura' }
      ]
    },
    pro: {
      summary: 'Pared y techo toracoabdominal: diafragma torácico musculotendinoso en forma de doble cúpula que separa las cavidades torácica y abdominal, junto con la pared abdominal anterolateral (oblicuo externo, oblicuo interno, transverso del abdomen y recto del abdomen dentro de la vaina de los rectos).',
      bloodSupply: 'Vaina de los rectos: arteria epigástrica superior (de la torácica interna) anastomosada con la arteria epigástrica inferior (de la ilíaca externa). Diafragma: arterias frénicas superiores/inferiores, musculofrénica y pericardiofrénica',
      venousDrainage: 'Venas epigástricas superior e inferior (importante vía colateral cavocava y portocava) y venas frénicas',
      innervation: 'Diafragma: nervio frénico (C3, C4, C5). Pared abdominal: nervios toracoabdominales (T7–T11), subcostal (T12) e iliohipogástrico/ilioinguinal (L1)',
      originInsertion: 'Hiatos diafragmáticos: orificio de la cava en T8 (VCI + nervio frénico derecho), hiato esofágico en T10 (esófago + troncos vagales), hiato aórtico en T12 (aorta + conducto torácico + vena ácigos)',
      metrics: [
        { label: 'Excursión diafragmática', value: '1.5 – 2 cm respiración tranquila | 6 – 10 cm inspiración profunda' },
        { label: 'Línea arqueada (de Douglas)', value: 'A mitad entre ombligo y pubis (debajo, todas las aponeurosis pasan anteriores al recto)' },
        { label: 'Niveles de los hiatos', value: 'VCI = T8, Esófago = T10, Aorta = T12' },
        { label: 'Triángulo de Hesselbach', value: 'Medial: borde del recto | Lateral: vasos epigástricos inf. | Inferior: ligamento inguinal' }
      ],
      clinicalPearls: 'Las hernias inguinales directas protruyen a través del triángulo de Hesselbach mediales a los vasos epigástricos inferiores (debilidad adquirida de la fascia transversal), mientras que las hernias inguinales indirectas entran por el anillo inguinal profundo laterales a los vasos epigástricos inferiores (persistencia del conducto peritoneovaginal).'
    }
  },

  'quadriceps-gastrocnemius': {
    name: 'Cuádriceps Femoral, Isquiotibiales y Gastrocnemio (Músculos de la Pierna)',
    systemLabel: 'Musculatura del Miembro Inferior',
    kids: {
      badge: '⚡ ¡Tus motores para correr, saltar y patear!',
      pronounce: 'KUÁ-dri-seps y Gas-trok-NE-mio',
      summary: '¡Tus piernas tienen los músculos más grandes y potentes del cuerpo! El cuádriceps en la parte frontal del muslo estira la rodilla para patear y saltar, los isquiotibiales en la parte trasera doblan la rodilla, y el músculo gastrocnemio (gemelos) de la pantorrilla tira del tendón de Aquiles para impulsarte y ponerte de puntillas.',
      whyYouNeedIt: '¡Cada paso que das utiliza una ola coordinada de contracciones entre tus cuádriceps, isquiotibiales y pantorrillas!',
      funFacts: [
        '¡"Cuádri-ceps" significa "cuatro cabezas" porque en realidad es un equipo de 4 músculos gigantes en la parte frontal del muslo!',
        'Los músculos de tu pantorrilla se unen al hueso del talón mediante el tendón de Aquiles, ¡el tendón más grueso y fuerte del cuerpo humano!',
        '¡El glúteo mayor y el cuádriceps compiten por el título del músculo de mayor volumen en todo el cuerpo!'
      ],
      quickStats: [
        { label: 'Cuádriceps', value: '4 músculos al frente del muslo (extienden la rodilla)' },
        { label: 'Isquiotibiales', value: '3 músculos detrás del muslo (doblan la rodilla)' },
        { label: 'Pantorrilla', value: 'Gastrocnemio y Sóleo (ponerse de puntillas)' },
        { label: 'Tendón más fuerte', value: 'Tendón de Aquiles en la parte trasera del talón' }
      ]
    },
    pro: {
      summary: 'Motores primarios extensores y flexores plantares del miembro inferior: cuádriceps femoral anterior del muslo (recto femoral, vasto lateral, vasto medial, vasto intermedio), isquiotibiales posteriores (bíceps femoral, semitendinoso, semimembranoso) y tríceps sural posterior superficial de la pierna (gastrocnemio + sóleo).',
      bloodSupply: 'Arterias femoral profunda y circunfleja femoral lateral (muslo); ramas surales de las arterias poplítea y tibial posterior (pantorrilla)',
      venousDrainage: 'Venas femorales profundas, poplíteas y senos venosos del sóleo (principal bomba musculovenosa de la pantorrilla que impulsa la sangre venosa en sentido cefálico)',
      innervation: 'Cuádriceps: nervio femoral (L2–L4); Isquiotibiales: división tibial del nervio ciático (L5–S2, excepto la cabeza corta del bíceps femoral por el peroneo común); Gastrocnemio/Sóleo: nervio tibial (S1–S2)',
      originInsertion: 'El cuádriceps converge en el tendón cuadricipital → rótula → ligamento rotuliano → tuberosidad tibial. El gastrocnemio y el sóleo convergen en el tendón calcáneo (de Aquiles) insertándose en la tuberosidad posterior del calcáneo',
      metrics: [
        { label: 'Reflejo rotuliano', value: 'L3–L4 (reflejo miotático monosináptico del nervio femoral)' },
        { label: 'Reflejo aquíleo', value: 'S1–S2 (reflejo miotático monosináptico del nervio tibial)' },
        { label: 'Carga tensil de Aquiles', value: 'Soporta hasta 8–12 veces el peso corporal al correr o saltar' },
        { label: 'Sóleo vs. Gastrocnemio', value: 'Sóleo: ~80% fibras tipo I lentas (postura) | Gastrocnemio: tipo II rápidas (impulso)' }
      ],
      clinicalPearls: 'La rotura del tendón de Aquiles ocurre típicamente 2–6 cm proximal a su inserción calcánea (zona crítica hipovascular) con un chasquido audible; se confirma mediante la prueba de Thompson positiva (ausencia de flexión plantar pasiva al comprimir la pantorrilla).'
    }
  },

  'spinal-cord-sciatic': {
    name: 'Médula Espinal, Plexo Braquial y Nervio Ciático',
    systemLabel: 'Sistema Nervioso Central y Periférico',
    kids: {
      badge: '⚡ ¡El cableado de fibra óptica ultrarrápido de tu cuerpo!',
      pronounce: 'MÉ-du-la Es-pi-NAL y Nér-vio Si-Á-ti-ko',
      summary: 'Tu médula espinal es un grueso haz de cables nerviosos que baja por el túnel dentro de tu columna vertebral y se ramifica en 31 pares de nervios que llegan a cada milímetro de tu piel y tus músculos. ¡Transportan señales de tacto, temperatura y movimiento a más de 400 kilómetros por hora!',
      whyYouNeedIt: '¡Si tocas algo caliente, tus nervios usan un atajo a través de tu médula espinal (un "arco reflejo") para retirar tu mano ANTES de que tu cerebro termine de darse cuenta!',
      funFacts: [
        '¡El nervio ciático que baja por la parte posterior de cada pierna es el nervio más largo y grueso de tu cuerpo, casi tan ancho como el pulgar de un adulto!',
        'Si pusieras todos los nervios de tu cuerpo uno tras otro en fila, ¡se extenderían por más de 72 kilómetros (45 millas)!',
        'El nervio vago viaja desde tu tronco encefálico hasta el corazón, los pulmones y el abdomen para ayudar a relajar tu cuerpo.'
      ],
      quickStats: [
        { label: 'Nervios espinales', value: '31 pares que salen de la médula espinal' },
        { label: 'Nervio más largo', value: 'Nervio ciático (de la cadera al pie)' },
        { label: 'Velocidad de señal', value: 'Hasta 120 metros por segundo (430 km/h)' },
        { label: 'Atajo más rápido', value: '¡Arco reflejo espinal (protección instantánea)!' }
      ]
    },
    pro: {
      summary: 'Conducto neural cilíndrico del SNC (médula espinal con intumescencias cervical C4–T1 y lumbosacra L1–S3) que da origen a 31 pares de nervios espinales mixtos (8C, 12T, 5L, 5S, 1Co) organizados en los plexos cervical, braquial, lumbar y sacro.',
      bloodSupply: 'Arteria espinal anterior única (irriga los 2/3 anteriores de la médula incluidos los tractos corticoespinales y astas ventrales) y arterias espinales posteriores pares (columnas dorsales), reforzadas por la gran arteria radicular magna de Adamkiewicz (origen T8–L2 izquierdo)',
      venousDrainage: 'Venas espinales anteriores y posteriores que drenan mediante venas radiculares hacia el plexo venoso vertebral interno',
      innervation: 'Vías ascendentes: columna dorsal-lemnisco medial (tacto fino, vibración, propiocepción; decusa en bulbo) y tracto espinotalámico (dolor, temperatura; decusa en comisura blanca anterior). Vía motora descendente: tracto corticoespinal lateral (decusa en las pirámides bulbares)',
      originInsertion: 'Anclada superiormente al bulbo raquídeo en el agujero magno, inferiormente al cóccix mediante el filum terminal y lateralmente por 21 pares de ligamentos dentados piales',
      metrics: [
        { label: 'Velocidad de conducción', value: 'Fibras mielínicas Aα: 80 – 120 m/s | Fibras amielínicas C: 0.5 – 2 m/s' },
        { label: 'Raíces plexo braquial', value: 'C5–T1 (Raíces → Troncos → Divisiones → Fascículos → Ramas)' },
        { label: 'Raíces nervio ciático', value: 'L4–S3 (Nervio más grande del cuerpo, ~2 cm de diámetro al salir bajo el piriforme)' },
        { label: 'Zona medular limítrofe', value: 'Segmentos torácicos medios T4–T8 (vulnerables en cirugía aórtica si se ocluye Adamkiewicz)' }
      ],
      clinicalPearls: 'El síndrome de Brown-Séquard (hemisección medular) produce parálisis espástica ipsilateral de motoneurona superior (vía corticoespinal) y pérdida de vibración/propiocepción (columnas dorsales) bajo la lesión, con pérdida contralateral del dolor y temperatura (vía espinotalámica) comenzando 1–2 niveles por debajo.'
    }
  },

  'female-reproductive': {
    name: 'Útero, Ovarios y Trompas de Falopio (Sistema Reproductor Femenino)',
    systemLabel: 'Sistema Reproductor y Endocrino Femenino',
    kids: {
      badge: '🌸 ¡La cuna protectora donde crecen los bebés!',
      pronounce: 'Ú-te-ro y O-VA-rios',
      summary: 'En el interior de la pelvis femenina se encuentran el útero (también llamado matriz), dos ovarios con forma de almendra y dos trompas de Falopio curvas. Los ovarios guardan células diminutas llamadas óvulos y producen hormonas al crecer, mientras que el útero muscular es la habitación segura y elástica donde puede desarrollarse un bebé antes de nacer.',
      whyYouNeedIt: 'En conjunto, estos órganos producen hormonas importantes (estrógeno y progesterona) que ayudan a mantener los huesos fuertes y guían la pubertad y el embarazo en la edad adulta.',
      funFacts: [
        '¡Una bebé nace con todos los óvulos (ovocitos) que tendrá en su vida ya guardados de forma segura dentro de sus dos ovarios!',
        'El útero tiene normalmente el tamaño y la forma de una pera invertida, y está formado por uno de los músculos lisos más fuertes y elásticos del cuerpo humano.',
        '¡Los extremos de las trompas de Falopio tienen flecos diminutos como deditos llamados fimbrias que se mueven suavemente para atrapar al óvulo!'
      ],
      quickStats: [
        { label: 'Forma del útero', value: 'Órgano muscular en forma de pera (~7.5 cm)' },
        { label: 'Ovarios', value: '2 glándulas del tamaño de una almendra' },
        { label: 'Trompas de Falopio', value: '2 puentes desde los ovarios hasta el útero' },
        { label: 'Hormonas', value: 'Estrógeno y Progesterona' }
      ]
    },
    pro: {
      summary: 'Tracto genital femenino interno situado en la pelvis verdadera entre la vejiga urinaria anteriormente (fondo de saco vesicouterino) y el recto posteriormente (fondo de saco rectouterino de Douglas). Comprende los ovarios pares, las trompas uterinas de Falopio (infundíbulo con fimbrias, ampolla, istmo, porción intramural), el útero piriforme (fondo, cuerpo, istmo, cérvix) y la vagina fibromuscular.',
      bloodSupply: 'Arteria uterina (rama de la división anterior de la ilíaca interna, que cruza por encima del uréter — "agua bajo el puente") anastomosada con la arteria ovárica (rama directa de la aorta abdominal en L2)',
      venousDrainage: 'Plexo venoso uterino → venas ilíacas internas; plexo pampiniforme ovárico → vena ovárica derecha (a la VCI) y vena ovárica izquierda (a la vena renal izquierda en ángulo de 90°)',
      innervation: 'Plexo uterovaginal (plexo hipogástrico inferior: simpático T10–L1; parasimpático esplácnico pélvico S2–S4); plexo ovárico (T10–T11)',
      originInsertion: 'Sostenido por el diafragma pélvico (elevador del ano) y condensaciones de la fascia endopélvica: ligamentos cervicales transversos (cardinales de Mackenrodt), uterosacros, redondos (mantienen la anteversión) y anchos (mesometrio, mesosálpinx, mesovario)',
      metrics: [
        { label: 'Útero nulíparo', value: '~7.5 × 5.0 × 2.5 cm | Masa: 50 – 70 g' },
        { label: 'Posición uterina', value: 'Anteverso (respecto a la vagina) y anteflexo (respecto al cérvix)' },
        { label: 'Sitio de fecundación', value: 'Ampolla de la trompa uterina (de Falopio)' },
        { label: 'Zona de transformación', value: 'Unión escamocolumnar cervical (ectocérvix a endocérvix)' }
      ],
      clinicalPearls: 'Durante la histerectomía u ooforectomía deben respetarse dos relaciones ureterales críticas: (1) los vasos ováricos cruzan anteriores al uréter en el estrecho superior de la pelvis dentro del ligamento suspensorio del ovario (infundibulopélvico), y (2) la arteria uterina cruza superior al uréter a 1.5 cm lateral del fórnix cervical.'
    }
  },

  'mammary-glands': {
    name: 'Glándulas Mamarias y Conductos Galactóforos',
    systemLabel: 'Sistema Tegumentario y Exocrino',
    kids: {
      badge: '🍼 ¡Glándulas especializadas productoras de leche!',
      pronounce: 'GLÁN-du-las Ma-MA-rias',
      summary: 'Las glándulas mamarias se sitúan en la parte frontal del pecho, sobre los músculos pectorales. Están formadas por entre 15 y 20 lóbulos dispuestos como los gajos de una naranja, conectados por pequeños tubos ramificados llamados conductos galactóforos que pueden producir leche nutritiva para los bebés recién nacidos.',
      whyYouNeedIt: 'En los mamíferos (¡que reciben su nombre precisamente de "mamaria"!), estas glándulas proporcionan a los recién nacidos agua, energía y anticuerpos protectores mientras su sistema inmunitario sigue madurando.',
      funFacts: [
        '¡La palabra "mamífero" —el grupo de animales de sangre caliente que incluye a los humanos, ballenas, elefantes y perros— viene directamente del latín "mamma"!',
        'Dentro de cada glándula, los lóbulos están organizados en círculo como los pétalos de una margarita o los gajos de una naranja.',
        'Bandas fibrosas llamadas ligamentos de Cooper sostienen suavemente el tejido glandular a la piel y a la pared del pecho.'
      ],
      quickStats: [
        { label: 'Lóbulos glandulares', value: '15 a 20 lóbulos radiales por lado' },
        { label: 'Sistema de conductos', value: 'Conductos y senos galactóforos' },
        { label: 'Descansa sobre', value: 'Pectoral mayor y serrato anterior' },
        { label: 'Bandas de soporte', value: 'Ligamentos suspensorios de Cooper' }
      ]
    },
    pro: {
      summary: 'Glándulas sudoríparas apocrinas modificadas situadas en la fascia superficial de la pared torácica anterior (costillas 2.ª–6.ª, desde el borde esternal hasta la línea axilar media) sobre la fascia del pectoral mayor, serrato anterior y oblicuo externo, separadas por el espacio retromamario laxo.',
      bloodSupply: 'Ramas perforantes de la arteria torácica (mamaria) interna (~60% medial), ramas torácica lateral y toracoacromial (arteria axilar) y arterias intercostales posteriores (2.ª–5.ª)',
      venousDrainage: 'Círculo venoso de Haller que drena hacia las venas axilar, torácica interna e intercostales posteriores (comunicadas con el plexo venoso vertebral de Batson)',
      innervation: 'Ramas cutáneas anteriores y laterales de los nervios intercostales 2.º–6.º (dermatoma T4 en el pezón); fibras simpáticas vasomotoras y de músculo liso',
      originInsertion: '15–20 lóbulos secretores tubuloalveolares que irradian desde el complejo areola-pezón, cada uno drenado por un conducto galactóforo independiente con seno galactóforo subareolar, suspendidos por los retináculos cutáneos (ligamentos de Cooper)',
      metrics: [
        { label: 'Extensión anatómica', value: '2.ª a 6.ª costilla verticalmente | Borde esternal a línea axilar media' },
        { label: 'Cola axilar (de Spence)', value: 'Se extiende superolateralmente por el foramen de Langer hacia la axila' },
        { label: 'Drenaje linfático', value: '>75% hacia ganglios axilares ipsilaterales (nivel I pectoral primero); ~20% hacia ganglios paraesternales' },
        { label: 'Control endocrino', value: 'Estrógeno (conductos), Progesterona (alvéolos), Prolactina (lactogénesis), Oxitocina (eyección)' }
      ],
      clinicalPearls: 'La invasión tumoral y el acortamiento de los ligamentos suspensorios de Cooper producen la característica retracción o umbilicación cutánea, mientras que la obstrucción linfática del plexo dérmico produce el edema cutáneo en "piel de naranja".'
    }
  },

  'male-reproductive': {
    name: 'Próstata, Testículos y Conductos Deferentes (Sistema Reproductor Masculino)',
    systemLabel: 'Sistema Reproductor y Endocrino Masculino',
    kids: {
      badge: '🧬 Órganos endocrinos y reproductores masculinos',
      pronounce: 'PRÓS-ta-ta y Tes-TÍ-ku-los',
      summary: 'El sistema reproductor masculino incluye los dos testículos (que producen la hormona testosterona al crecer), tubos enrollados de almacenamiento llamados epidídimos, tubos de transporte llamados conductos deferentes y la glándula próstata, del tamaño de una nuez, situada justo debajo de la vejiga urinaria.',
      whyYouNeedIt: 'La hormona testosterona ayuda a desarrollar una voz más grave, huesos más fuertes y músculos más grandes durante la pubertad.',
      funFacts: [
        'La glándula próstata tiene la forma y el tamaño de una nuez y se ubica justo debajo de la vejiga, rodeando el inicio de la uretra.',
        '¡Si desenrollaras los tubos microscópicos (túbulos seminíferos) dentro de un solo testículo, medirían cientos de metros!',
        'El conducto deferente sube haciendo un arco sobre el hueso de la cadera y baja por detrás de la vejiga como una pista de montaña rusa.'
      ],
      quickStats: [
        { label: 'Tamaño de la próstata', value: 'Glándula del tamaño de una nuez (~20 g)' },
        { label: 'Testículos', value: '2 glándulas endocrinas y reproductoras' },
        { label: 'Hormona principal', value: 'Testosterona' },
        { label: 'Recorrido', value: 'Testículo → Epidídimo → Conducto deferente → Uretra' }
      ]
    },
    pro: {
      summary: 'Tracto urogenital masculino compuesto por los testículos pares (túbulos seminíferos + células de Leydig), epidídimos, conductos deferentes que atraviesan el cordón espermático y el conducto inguinal, vesículas seminales, conductos eyaculadores, glándula prostática fibromuscular que rodea la uretra prostática y cuerpos cavernosos/esponjoso.',
      bloodSupply: 'Arteria testicular (rama directa de la aorta abdominal en L2), arteria del conducto deferente (vesical superior/inferior) y ramas vesical inferior y rectal media para la próstata',
      venousDrainage: 'Plexo pampiniforme (intercambiador de calor a contracorriente) → vena testicular derecha (a la VCI) y vena testicular izquierda (a la vena renal izquierda a 90°); plexo venoso prostático de Santorini comunicado con el plexo vertebral de Batson',
      innervation: 'Plexo testicular (T10–T11); nervios prostáticos y cavernosos del plexo hipogástrico inferior (parasimpático esplácnico pélvico S2–S4 para vasodilatación; simpático hipogástrico L1–L2 para emisión)',
      originInsertion: 'Próstata dividida según McNeal en zona periférica (~70% del volumen, posterior), zona central (~25%, rodea conductos eyaculadores) y zona transicional (~5%, periuretral)',
      metrics: [
        { label: 'Masa prostática normal', value: '~20 g (3 × 4 × 2 cm) inferior al cuello vesical' },
        { label: 'Zonas prostáticas (McNeal)', value: 'Periférica (asiento de carcinoma) vs. Transicional (asiento de HBP)' },
        { label: 'Trayecto inguinal', value: 'Anillo profundo (fascia transversal) → Anillo superficial (oblicuo externo)' },
        { label: 'Termorregulación', value: 'Cremáster + Dartos + Plexo pampiniforme mantienen ~34–35 °C' }
      ],
      clinicalPearls: 'La hiperplasia benigna de próstata (HBP) se origina en la zona transicional periuretral provocando síntomas obstructivos urinarios bajos tempranos, mientras que el adenocarcinoma prostático se origina con mayor frecuencia en la zona periférica posterior (palpable al tacto rectal).'
    }
  }
};

export const TISSUE_INFO_ES = {
  skin: {
    kids: 'Esta es tu piel: la armadura elástica e impermeable de tu cuerpo. Impide el paso de gérmenes, conserva el agua y está llena de sensores diminutos que sienten el tacto, el calor y el frío.',
    pro: 'Tegumento: epidermis escamosa estratificada queratinizada sobre una dermis colagenosa vascular e hipodermis adiposa. Órgano primario de barrera, termorregulación y sensibilidad.'
  },
  hair: {
    kids: 'El cabello ayuda a mantener tu cabeza abrigada y la protege del sol. Cada pelo crece desde un pequeño bolsillo en la piel llamado folículo.',
    pro: 'Tallos pilosos terminales (queratinizados) originados en folículos pilosos dérmicos; el cabello craneal proporciona fotoprotección UV y aislamiento térmico.'
  },
  muscle: {
    kids: '¡Este es un músculo! Los músculos son haces de fibras largas y elásticas que tiran de tus huesos para que puedas moverte. Solo pueden tirar —nunca empujar—, así que trabajan en equipo.',
    pro: 'Músculo esquelético (estriado, voluntario). Obsérvese la orientación fascicular, inserciones e inervación; la fuerza depende del área transversal fisiológica y del ángulo de pennación.'
  },
  tendon: {
    kids: 'Este es un tendón: una cuerda superresistente que une un músculo a un hueso. Cuando el músculo se contrae, el tendón tira del hueso.',
    pro: 'Tejido conectivo denso regular (colágeno tipo I) que transmite la fuerza muscular al hueso; relativamente hipovascular, por lo que cicatriza lentamente.'
  },
  ligament: {
    kids: 'Los ligamentos son bandas resistentes que sujetan un hueso con otro en tus articulaciones para mantenerlos alineados mientras te mueves.',
    pro: 'Tejido conectivo denso regular que une hueso con hueso; proporciona estabilidad articular pasiva y retroalimentación propioceptiva.'
  },
  bone: {
    kids: '¡Este es un hueso! Los huesos son partes vivas y en crecimiento de tu cuerpo. Te sostienen, protegen tus órganos e incluso fabrican células sanguíneas nuevas dentro de su médula.',
    pro: 'Hueso laminar con arquitectura cortical (compacta) y trabecular (esponjosa); sitio de inserción muscular, homeostasis mineral y hematopoyesis.'
  },
  tooth: {
    kids: '¡Los dientes están cubiertos de esmalte, el material más duro de todo tu cuerpo! Los distintos dientes cortan, desgarran y trituran los alimentos.',
    pro: 'Esmalte sobre dentina y pulpa dental, anclado por el ligamento periodontal (gonfosis). Dentición adulta: 32 dientes permanentes.'
  },
  cartilage: {
    kids: 'El cartílago es un tejido liso y flexible, como la punta de tu nariz. Amortigua las articulaciones y mantiene abiertos conductos como la tráquea.',
    pro: 'Cartílago hialino, elástico o fibroso avascular nutrido por difusión. El cartílago articular ofrece superficies de muy baja fricción.'
  },
  artery: {
    kids: 'Esta es una arteria: un tubo fuerte y elástico que lleva sangre roja brillante, rica en oxígeno, DESDE tu corazón hacia el resto del cuerpo. ¡Mira cómo viajan los pulsos!',
    pro: 'Arteria sistémica (túnica media gruesa). Transporta sangre oxigenada centrífugamente con flujo pulsátil impulsado por la eyección ventricular izquierda.'
  },
  arteryDeoxy: {
    kids: 'Esta arteria es especial: lleva sangre "usada" desde el corazón hacia los pulmones para recoger oxígeno fresco; ¡por eso está coloreada de azul!',
    pro: 'Árbol arterial pulmonar: transporta sangre desoxigenada desde el ventrículo derecho hasta los pulmones (circuito de baja presión, ~25/10 mmHg).'
  },
  vein: {
    kids: 'Esta es una vena. Las venas llevan de REGRESO al corazón la sangre que ya entregó su oxígeno. Tienen válvulas de un solo sentido para que la sangre no retroceda.',
    pro: 'Vena sistémica (vaso de capacitancia, túnica media delgada, válvulas en extremidades). Devuelve sangre desoxigenada centrípetamente hacia la aurícula derecha.'
  },
  veinOxy: {
    kids: 'Esta vena lleva sangre fresca rica en oxígeno desde los pulmones de vuelta al corazón; ¡por eso es de color rojo aunque sea una vena!',
    pro: 'Vena pulmonar: retorna sangre oxigenada desde los pulmones hacia la aurícula izquierda.'
  },
  nerve: {
    kids: 'Los nervios son como los cables eléctricos de tu cuerpo. Llevan mensajes ultrarrápidos entre tu cerebro y cada parte de ti.',
    pro: 'Nervio periférico o craneal: axones mielínicos y amielínicos agrupados en endoneuro, perineuro y epineuro.'
  },
  cord: {
    kids: 'La médula espinal es el cable principal de tu sistema nervioso y baja por el túnel protegido dentro de tu columna vertebral.',
    pro: 'Médula espinal: sustancia gris central (somas neuronales) y tractos periféricos de sustancia blanca; el cono medular termina en L1–L2.'
  },
  brain: {
    kids: '¡Esta es una parte de tu cerebro, el centro de control! Distintas zonas se encargan de pensar, moverse, ver, recordar y sentir emociones.',
    pro: 'Estructura del sistema nervioso central. Correlacionar con el territorio vascular (circulación anterior vs. posterior) y la localización funcional.'
  },
  dura: {
    kids: 'Esta es una lámina protectora resistente que envuelve y sostiene tu cerebro.',
    pro: 'Repliegue dural (meninges) que compartimenta la cavidad craneal y aloja los senos venosos durales a lo largo de sus inserciones.'
  },
  csf: {
    kids: 'Estos son espacios llenos de líquido en lo profundo del cerebro. ¡El líquido amortigua y protege al cerebro como un colchón de agua!',
    pro: 'Sistema ventricular con líquido cefalorraquídeo (~150 mL de volumen, ~500 mL/día producidos por los plexos coroideos).'
  },
  heart: {
    kids: '¡Esta es una parte de tu corazón, la bomba muscular incansable que late unas 100,000 veces al día!',
    pro: 'Estructura cardíaca. Correlacionar con la irrigación coronaria, el sistema de conducción y la función valvular.'
  },
  lung: {
    kids: 'Tus pulmones son esponjosos y cambian aire usado por oxígeno fresco cada vez que respiras.',
    pro: 'Parénquima pulmonar: ~300–500 millones de alvéolos con ~70 m² de superficie de intercambio gaseoso.'
  },
  airway: {
    kids: 'Estos son tus tubos de aire. Se ramifican como un árbol invertido para llevar el aire hasta lo más profundo de los pulmones.',
    pro: 'Vía aérea de conducción (árbol traqueobronquial): ~23 generaciones de ramificación dicotómica con soporte cartilaginoso hasta los bronquios.'
  },
  liver: {
    kids: 'El hígado es la fábrica química de tu cuerpo: limpia la sangre, almacena energía y produce bilis para digerir las grasas.',
    pro: 'Parénquima hepático (segmentos de Couinaud) con doble irrigación: vena porta (~75%) y arteria hepática (~25%).'
  },
  gallbladder: {
    kids: 'La vesícula biliar guarda la bilis, un líquido verde que ayuda a digerir los alimentos con grasa.',
    pro: 'Vía biliar: concentra y almacena la bilis; drena a través del conducto cístico hacia el conducto colédoco.'
  },
  stomach: {
    kids: 'Tu estómago es una bolsa muscular elástica que bate los alimentos con ácido fuerte.',
    pro: 'Región gástrica del intestino anterior: secreta HCl, pepsinógeno y factor intrínseco; forma y mezcla el quimo.'
  },
  intestine: {
    kids: 'El intestino delgado es un tubo largo y sinuoso que absorbe los nutrientes de la comida hacia la sangre.',
    pro: 'Intestino delgado (duodeno, yeyuno, íleon): sitio principal de digestión y absorción; ~6 m de longitud in vivo.'
  },
  colon: {
    kids: 'El intestino grueso absorbe el agua y es hogar de billones de bacterias beneficiosas.',
    pro: 'Intestino grueso: reabsorción de agua y electrolitos, fermentación por la microbiota y almacenamiento fecal.'
  },
  pancreas: {
    kids: 'El páncreas fabrica jugos digestivos e insulina, que controla el nivel de azúcar en tu sangre.',
    pro: 'Glándula mixta exocrina (enzimas acinares) y endocrina (islotes de Langerhans: insulina, glucagón, somatostatina).'
  },
  kidney: {
    kids: 'Tus riñones son filtros con forma de frijol que limpian la sangre y producen la orina.',
    pro: 'Parénquima renal: ~1 millón de nefronas por riñón; TFG ~120 mL/min; funciones endocrinas (renina, EPO, calcitriol).'
  },
  bladder: {
    kids: 'La vejiga es una bolsa elástica que almacena la orina hasta que vas al baño.',
    pro: 'Vejiga urinaria y uretra: músculo liso detrusor con capacidad fisiológica de ~400–600 mL.'
  },
  spleen: {
    kids: 'El bazo filtra tu sangre y ayuda a tus defensas a combatir los gérmenes.',
    pro: 'Órgano linfoide secundario: la pulpa roja filtra eritrocitos senescentes; la pulpa blanca genera respuestas inmunitarias.'
  },
  eye: {
    kids: '¡Esta es una parte de tu ojo, la cámara fotográfica de tu cuerpo! Enfoca la luz para que tu cerebro pueda ver imágenes.',
    pro: 'Estructura ocular. Correlacionar con el eje óptico (córnea → cristalino → retina) y las relaciones orbitarias.'
  },
  pupil: {
    kids: 'El cristalino está justo detrás del círculo negro de tu ojo (la pupila). Cambia de forma para enfocar cosas cercanas y lejanas.',
    pro: 'Cristalino y fibras zonulares. Acomodación mediante el músculo ciliar; su opacificación constituye la catarata.'
  },
  lip: {
    kids: 'Tus labios te ayudan a hablar, comer, silbar y sonreír. Se ven rosados porque tienen muchos vasos sanguíneos cerca de la superficie.',
    pro: 'Labios: músculo orbicular de la boca cubierto por epitelio bermellón fino con rica red capilar; arterias labiales superior e inferior.'
  },
  gland: {
    kids: 'Las glándulas fabrican líquidos especiales o mensajeros químicos (hormonas) que tu cuerpo necesita.',
    pro: 'Tejido glandular (exocrino o endocrino). Correlacionar con su producto de secreción y regulación neurovascular.'
  },
  tongue: {
    kids: 'Este tejido blando te ayuda a saborear, masticar, tragar y hablar.',
    pro: 'Tejido blando oral; correlacionar con su inervación motora y sensitiva/gustativa (NC V3, VII, IX, XII).'
  },
  mesentery: {
    kids: 'Esta lámina delgada sostiene tus intestinos en su lugar y lleva sus vasos sanguíneos.',
    pro: 'Pliegue peritoneal que suspende el tubo digestivo y conduce los vasos, linfáticos y nervios mesentéricos.'
  },
  reproductive: {
    kids: 'Esta estructura forma parte del sistema reproductor: los órganos que producen hormonas y permiten tener bebés en la etapa adulta.',
    pro: 'Estructura del tracto reproductor y endocrino (órganos de referencia NIH HuBMAP Visible Human Female y BodyParts3D).'
  },
  organ: {
    kids: 'Este es uno de los órganos internos de tu cuerpo, que trabaja en equipo con los demás para mantenerte sano.',
    pro: 'Estructura anatómica del modelo fundacional de anatomía (Foundational Model of Anatomy, FMA).'
  }
};

export const QUIZ_QUESTIONS_ES = [
  {
    id: 'q1',
    targetPartId: 'heart',
    question: '¿Qué órgano muscular late unas 100,000 veces al día y tiene 4 cavidades que bombean sangre a todo tu cuerpo?',
    options: [
      'El Corazón',
      'El Estómago',
      'Los Riñones',
      'La Caja Torácica'
    ],
    correctIndex: 0,
    explanation: '¡Correcto! Tu corazón es una bomba muscular de 4 cavidades del tamaño de tu puño que impulsa unos 7,570 litros de sangre cada día.'
  },
  {
    id: 'q2',
    targetPartId: 'aorta',
    question: 'En la vista 3D del flujo sanguíneo, ¿cómo se llama la arteria ROJA más grande que sale de la parte superior del corazón como una autopista?',
    options: [
      'El Nervio Ciático',
      'La Aorta',
      'La Tráquea',
      'La Rótula'
    ],
    correctIndex: 1,
    explanation: '¡Exacto! La aorta es la arteria elástica más grande del cuerpo humano y lleva sangre fresca rica en oxígeno desde el ventrículo izquierdo.'
  },
  {
    id: 'q3',
    targetPartId: 'vena-cava',
    question: '¿Por qué la Vena Cava Superior e Inferior y las demás venas se muestran en AZUL con sangre que regresa hacia el corazón?',
    options: [
      'Porque la sangre de adentro está congelada',
      'Porque las venas devuelven la sangre que ya entregó su oxígeno al corazón y los pulmones para recargarse',
      'Porque las venas solo llevan agua',
      'Porque las venas empujan sangre hacia los dedos'
    ],
    correctIndex: 1,
    explanation: '¡Muy bien! Las arterias (rojas) llevan sangre rica en oxígeno desde el corazón, mientras que las venas (azules) devuelven la sangre hacia el corazón y los pulmones.'
  },
  {
    id: 'q4',
    targetPartId: 'femur-tibia-fibula',
    question: '¿Qué hueso de tu muslo es el más largo, pesado y fuerte de todo el cuerpo humano?',
    options: [
      'El Radio',
      'La Clavícula',
      'El Fémur',
      'El Esternón'
    ],
    correctIndex: 2,
    explanation: '¡Excelente! El fémur (hueso del muslo) representa cerca de 1/4 de tu estatura y, peso por peso, ¡es más resistente que el concreto!'
  },
  {
    id: 'q5',
    targetPartId: 'liver',
    question: '¿Qué órgano interno bajo tus costillas derechas realiza más de 500 funciones químicas, produce bilis e incluso puede regenerarse?',
    options: [
      'El Hígado',
      'El Músculo Deltoides',
      'La Rótula',
      'La Vena Yugular'
    ],
    correctIndex: 0,
    explanation: '¡Brillante! El hígado es la fábrica química y filtro de tu cuerpo, ¡y es el único órgano interno capaz de regenerarse!'
  },
  {
    id: 'q6',
    targetPartId: 'brain',
    question: '¿Qué órgano está protegido dentro del casco de tu cráneo y usa 86 mil millones de neuronas para controlar tus pensamientos, recuerdos y sentidos?',
    options: [
      'Los Pulmones',
      'El Cerebro',
      'La Pelvis',
      'El Bíceps'
    ],
    correctIndex: 1,
    explanation: '¡Lo lograste! Tu cerebro es el centro de control y envía señales eléctricas a velocidades de hasta 430 kilómetros por hora.'
  }
];
