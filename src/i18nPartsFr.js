/**
 * French (fr) translations for:
 *  - All 27 curated ANATOMY_PARTS (Kids Explorer & Clinical Pro modes)
 *  - All 37 TISSUE_INFO categories
 *  - All 6 ANATOMY_QUIZ_QUESTIONS
 */

export const PARTS_FR = {
  'integumentary-skin': {
    name: 'Peau (Système Tégumentaire)',
    systemLabel: 'Système Tégumentaire',
    kids: {
      badge: '🛡️ La super combinaison spatiale de ton corps !',
      pronounce: 'PÔ (Épiderme)',
      summary: 'Ta peau est en réalité le plus grand organe de tout ton corps ! C’est une combinaison imperméable qui se répare toute seule, bloque les microbes, garde l’eau à l’intérieur et te rafraîchit avec la sueur quand tu cours.',
      whyYouNeedIt: 'Sans la peau, les microbes entreraient facilement et tu ne pourrais pas sentir un câlin chaleureux, une brise fraîche ou des chatouilles !',
      funFacts: [
        'Tu perds environ 30 000 à 40 000 cellules mortes de peau chaque minute — et de nouvelles cellules poussent juste en dessous !',
        'Ta peau possède des millions de petites glandes sudoripares qui agissent comme une climatisation naturelle.',
        'La peau la plus épaisse est sous tes pieds, et la plus fine est sur tes paupières !'
      ],
      quickStats: [
        { label: 'Couches principales', value: '3 (Épiderme, Derme, Hypoderme)' },
        { label: 'Renouvellement', value: 'Nouvel épiderme tous les ~28 jours' },
        { label: 'Capteurs tactiles', value: 'Des millions de terminaisons nerveuses' },
        { label: 'Super-pouvoir', value: 'Fabrique de la vitamine D au soleil !' }
      ]
    },
    pro: {
      summary: 'Organe barrière multicouche composé d’un épiderme pavimenteux stratifié kératinisé, d’un derme collagénique vascularisé et d’un hypoderme (fascia superficiel) adipeux.',
      bloodSupply: 'Plexus vasculaires cutanés profonds et sous-papillaires issus des artères perforantes musculocutanées et fasciocutanées',
      venousDrainage: 'Plexus veineux dermiques superficiels et profonds se drainant dans le réseau veineux sous-cutané',
      innervation: 'Rameaux sensitifs cutanés (corpuscules de Meissner, Pacini, disques de Merkel, terminaisons de Ruffini et terminaisons libres) ; fibres sympathiques cholinergiques sudomotrices',
      originInsertion: 'En continuité avec les muqueuses aux jonctions cutanéomuqueuses ; ancrée au fascia profond par les rétinaculums cutanés',
      metrics: [
        { label: 'Surface corporelle', value: '1,5 – 2,0 m² (adulte)' },
        { label: 'Masse totale', value: '~15 % – 16 % de la masse corporelle' },
        { label: 'Épaisseur', value: '0,5 mm (paupière) à 4,0 mm (talon)' },
        { label: 'Débit sanguin dermique', value: '~250 mL/min au repos (jusqu’à 6–8 L/min en hyperthermie)' }
      ],
      clinicalPearls: 'La surface des brûlures est évaluée par la « règle des neuf » de Wallace. Les anastomoses artérioveineuses (glomus) du derme acral régulent la thermorégulation centrale.'
    }
  },
  brain: {
    name: 'Cerveau / Encéphale (Cerveau, Cervelet et Tronc Cérébral)',
    systemLabel: 'Système Nerveux et Organique',
    kids: {
      badge: '🧠 Le centre de contrôle de ton corps !',
      pronounce: 'Sèr-VÔ (An-sé-FAL)',
      summary: 'Ton cerveau est le grand chef de ton corps ! Plus rapide que n’importe quel superordinateur, il te permet de penser, rêver, jouer, te souvenir de tes amis, et il contrôle automatiquement ta respiration et les battements de ton cœur.',
      whyYouNeedIt: 'Chaque pensée, chaque mouvement et chaque son ou couleur est traité par environ 86 milliards de cellules nerveuses appelées neurones !',
      funFacts: [
        'Quand tu es éveillé, ton cerveau produit assez d’électricité pour allumer une petite ampoule LED !',
        'La moitié gauche de ton cerveau commande le côté droit de ton corps, et la moitié droite commande le côté gauche !',
        'Le tissu cérébral lui-même ne possède aucun récepteur de douleur.'
      ],
      quickStats: [
        { label: 'Cellules cérébrales', value: '~86 milliards de neurones' },
        { label: 'Vitesse des signaux', value: 'Jusqu’à 430 km/h' },
        { label: 'Énergie consommée', value: 'Utilise ~20 % de l’oxygène du corps' },
        { label: 'Texture et protection', value: 'Doux comme un flan, protégé par le crâne' }
      ]
    },
    pro: {
      summary: 'Centre intégrateur suprême du système nerveux central (SNC), subdivisé en télencéphale (hémisphères cérébraux), diencéphale, mésencéphale, pont, bulbe rachidien (moelle allongée) et cervelet.',
      bloodSupply: 'Circulations antérieure (artères carotides internes) et postérieure (système vertébrobasilaire) anastomosées au sein du polygone de Willis',
      venousDrainage: 'Veines cérébrales superficielles et profondes se drainant dans les sinus veineux duraux puis les veines jugulaires internes',
      innervation: 'Origine des nerfs crâniens I à XII ; la dure-mère reçoit une innervation sensitive méningée des nerfs trijumeau (NC V), vague (NC X) et cervicaux supérieurs',
      originInsertion: 'En suspension dans le liquide cérébrospinal (LCS) et compartimenté par les replis duraux (faux du cerveau et tente du cervelet)',
      metrics: [
        { label: 'Masse adulte', value: '1 300 – 1 400 g (~2 % du poids corporel)' },
        { label: 'Débit sanguin cérébral', value: '~50 mL / 100g / min (~750 mL/min au total)' },
        { label: 'Volume de LCS', value: '~150 mL (~500 mL/jour produits par les plexus choroïdes)' },
        { label: 'Pression intracrânienne', value: '7 – 15 mmHg (adulte en décubitus dorsal)' }
      ],
      clinicalPearls: 'Selon la doctrine de Monro-Kellie, le volume intracrânien est constant ; tout processus expansif élève la PIC et expose à l’engagement temporal (uncal) ou cérébelleux. L’occlusion de l’artère cérébrale moyenne (ACM) provoque une hémiplégie controlatérale à prédominance brachiofaciale et une aphasie (hémisphère dominant).'
    }
  },
  heart: {
    name: 'Cœur (Pompe Musculaire à 4 Cavités)',
    systemLabel: 'Système Cardiovasculaire',
    kids: {
      badge: '❤️ La super pompe qui ne s’arrête jamais !',
      pronounce: 'KEUR',
      summary: 'Ton cœur est un muscle super puissant de la taille de ton poing fermé ! Il bat environ 100 000 fois par jour pour envoyer du sang riche en oxygène vers ton cerveau, tes muscles et jusqu’au bout de tes orteils.',
      whyYouNeedIt: 'Le sang apporte de l’oxygène et de l’énergie à chaque cellule. Ton cœur fait circuler le sang 24h/24, même pendant que tu dors !',
      funFacts: [
        'Le cœur possède 4 cavités (oreillettes et ventricules) et des portes à sens unique (valves) qui font « boum-boum » en se fermant !',
        'En une seule journée, ton cœur pompe environ 7 570 litres de sang !',
        'Quand tu cours, ton cœur bat plus vite pour envoyer plus d’oxygène à tes muscles.'
      ],
      quickStats: [
        { label: 'Taille', value: 'Environ la taille de ton poing' },
        { label: 'Battements par jour', value: '~100 000 battements' },
        { label: 'Cavités', value: '4 (Oreillettes G/D et Ventricules G/D)' },
        { label: 'Débit', value: '~5 litres par minute' }
      ]
    },
    pro: {
      summary: 'Pompe fibromusculaire à quatre cavités située dans le médiastin moyen au sein du péricarde, assurant simultanément la circulation pulmonaire (basse pression) et systémique (haute pression).',
      bloodSupply: 'Artères coronaires gauche (IVA et circonflexe) et droite (ACD) naissant des sinus de Valsalva ; perfusion myocardique principalement diastolique',
      venousDrainage: 'Sinus coronaire (recevant les grande, moyenne et petite veines cardiaques) et veines cardiaques antérieures s’abouchant dans l’atrium droit',
      innervation: 'Système cardionecteur intrinsèque (nœud sinusal → nœud AV → faisceau de His → réseau de Purkinje) modulé par le plexus cardiaque (nerf vague NC X et sympathique T1–T4)',
      originInsertion: 'Apex orienté en bas, en avant et à gauche (5e espace intercostal gauche sur la ligne médioclaviculaire) ; base formée principalement par l’atrium gauche (T6–T9)',
      metrics: [
        { label: 'Débit cardiaque (DC)', value: '~5,0 L/min (VES ~70 mL × 72 bpm)' },
        { label: 'Fraction d’éjection (FEVG)', value: '55 % – 70 % (normale)' },
        { label: 'Pressions cavitaires', value: 'VG : 120/8 mmHg | VD : 25/4 mmHg' },
        { label: 'Masse adulte', value: '250 – 350 g' }
      ],
      clinicalPearls: 'L’occlusion de l’artère interventriculaire antérieure (IVA) entraîne un infarctus antéro-septal (sus-décalage ST en V1–V4). L’occlusion de la coronaire droite (ACD) provoque un infarctus inférieur (DII, DIII, aVF) avec risque de bloc atrioventriculaire.'
    }
  },
  lungs: {
    name: 'Poumons (Droit et Gauche)',
    systemLabel: 'Système Respiratoire',
    kids: {
      badge: '🫁 Des ballons spongieux remplis d’oxygène !',
      pronounce: 'Pou-MON',
      summary: 'Tes deux poumons remplissent ta poitrine comme des ballons doux et spongieux ! Quand tu inspires, ils captent l’oxygène frais de l’air pour le sang ; quand tu expires, ils rejettent le dioxyde de carbone.',
      whyYouNeedIt: 'Chaque cellule de ton corps a besoin d’oxygène pour fabriquer de l’énergie. Les poumons et le cœur font équipe pour oxygéner tout ton corps !',
      funFacts: [
        'Ton poumon gauche est un petit peu plus petit que le droit pour laisser de la place à ton cœur !',
        'À l’intérieur des poumons, il y a environ 300 millions de minuscules sacs d’air appelés alvéoles — dépliés, ils couvriraient un terrain de tennis !',
        'Les poumons sont les seuls organes du corps humain capables de flotter sur l’eau !'
      ],
      quickStats: [
        { label: 'Respirations / jour', value: '~20 000 respirations' },
        { label: 'Sacs d’air', value: '~300 à 500 millions d’alvéoles' },
        { label: 'Lobes pulmonaires', value: '3 à droite, 2 à gauche' },
        { label: 'Surface d’échange', value: 'La taille d’un court de tennis !' }
      ]
    },
    pro: {
      summary: 'Organes pairs d’hématose logés dans les cavités pleurales. Le poumon droit compte 3 lobes (supérieur, moyen, inférieur séparés par les scissures oblique et horizontale) et le poumon gauche 2 lobes (supérieur avec incisure cardiaque et lingula, et inférieur).',
      bloodSupply: 'Double vascularisation : artères pulmonaires (sang désoxygéné pour l’hématose) et artères bronchiques (branches de l’aorte thoracique nourricières des bronches)',
      venousDrainage: 'Quatre veines pulmonaires (sang oxygéné vers l’atrium gauche) et veines bronchiques (système azygos)',
      innervation: 'Plexus pulmonaire : fibres parasympathiques vagales (bronchoconstriction) et sympathiques T2–T5 (bronchodilatation)',
      originInsertion: 'Apex dépassant de ~2,5 cm le tiers médial de la clavicule ; base reposant sur la coupole diaphragmatique',
      metrics: [
        { label: 'Capacité pulmonaire totale', value: '~6,0 L (Volume courant ~500 mL)' },
        { label: 'Surface alvéolaire', value: '~70 – 85 m²' },
        { label: 'Barrière alvéolo-capillaire', value: '0,2 – 0,5 µm' },
        { label: 'Rapport V/Q', value: '~0,8 global (plus élevé aux sommets qu’aux bases)' }
      ],
      clinicalPearls: 'La bronche principale droite étant plus large, plus courte et plus verticale que la gauche, les corps étrangers inhalés se logent préférentiellement à droite.'
    }
  },
  liver: {
    name: 'Foie et Vésicule Biliaire',
    systemLabel: 'Système Digestif et Métabolique',
    kids: {
      badge: '🧪 L’usine chimique et le super filtre du corps !',
      pronounce: 'FWA é Vé-zi-kul Bi-li-ÈR',
      summary: 'Caché sous tes côtes à droite, le foie est le champion du multitâche ! Il nettoie le sang, stocke l’énergie, fabrique un liquide vert appelé la bile pour digérer les graisses et aide les petites coupures à cicatriser.',
      whyYouNeedIt: 'Tout ce que tu manges et bois est vérifié par le foie pour fournir à ton corps une énergie propre et des vitamines !',
      funFacts: [
        'Le foie accomplit plus de 500 tâches différentes en même temps !',
        'Super-pouvoir incroyable : le foie est le seul organe interne capable de repousser et de se régénérer !',
        'À tout moment, environ 13 % de tout ton sang se trouve dans ton foie.'
      ],
      quickStats: [
        { label: 'Fonctions', value: 'Plus de 500 fonctions vitales' },
        { label: 'Production de bile', value: '600 à 1 000 mL par jour' },
        { label: 'Super-pouvoir', value: 'Peut se régénérer tout seul !' },
        { label: 'Poids', value: 'Le plus lourd des organes internes (~1,5 kg)' }
      ]
    },
    pro: {
      summary: 'Plus volumineuse glande parenchymateuse et carrefour métabolique de l’organisme, située dans l’hypocondre droit et l’épigastre, subdivisée en 8 segments fonctionnels indépendants selon Couinaud.',
      bloodSupply: 'Double apport : veine porte hépatique (~75 % du débit, sang splanchnique riche en nutriments) et artère hépatique propre (~25 % du débit, sang oxygéné issu du tronc cœliaque)',
      venousDrainage: 'Veines centrolobulaires → veines hépatiques (sus-hépatiques) droite, moyenne et gauche → veine cave inférieure (VCI)',
      innervation: 'Plexus hépatique (sympathique T7–T10 et vague) ; la distension de la capsule de Glisson projette une douleur à l’épaule droite via le nerf phrénique (C3–C5)',
      originInsertion: 'Suspendu au diaphragme par les ligaments falciforme, coronaire et triangulaires ; pédicule hépatique contenu dans le ligament hépatoduodénal',
      metrics: [
        { label: 'Masse adulte', value: '1 400 – 1 600 g (~2,5 % du poids corporel)' },
        { label: 'Débit sanguin hépatique', value: '~1 500 mL/min (~25 % du débit cardiaque)' },
        { label: 'Sécrétion biliaire', value: '600 – 1 000 mL/jour' },
        { label: 'Pression portale normale', value: '5 – 10 mmHg (> 12 mmHg = hypertension portale)' }
      ],
      clinicalPearls: 'La manœuvre de Pringle consiste à clamper le pédicule hépatique (ligament hépatoduodénal : artère hépatique propre, veine porte, voie biliaire principale) via le foramen omental de Winslow pour contrôler une hémorragie hépatique.'
    }
  },
  stomach: {
    name: 'Estomac',
    systemLabel: 'Système Digestif',
    kids: {
      badge: '🥣 Le mixeur acide des aliments !',
      pronounce: 'Ès-to-MA',
      summary: 'Ton estomac est une poche musculaire extensible en forme de « J » ! Quand tu avales ton repas, il brasse et mélange les aliments avec un acide puissant pour les transformer en bouillie nutritive.',
      whyYouNeedIt: 'Il découpe les aliments en minuscules morceaux et détruit les microbes qui auraient pu se glisser dans la nourriture !',
      funFacts: [
        'L’acide de l’estomac est très fort, mais une couche spéciale de mucus protège la paroi de l’estomac !',
        'Les gargouillis du ventre viennent des muscles de l’estomac et de l’intestin qui déplacent l’air et les liquides.',
        'L’estomac d’un adulte peut s’étirer pour contenir jusqu’à 1,5 litre de nourriture !'
      ],
      quickStats: [
        { label: 'Forme', value: 'Poche extensible en forme de « J »' },
        { label: 'Couches musculaires', value: '3 couches de muscle lisse' },
        { label: 'Acidité', value: 'pH 1,5 à 3,5 (acide chlorhydrique)' },
        { label: 'Temps de brassage', value: '2 à 4 heures par repas' }
      ]
    },
    pro: {
      summary: 'Réservoir musculaire intrapéritonéal en J issu de l’intestin antérieur, comprenant le cardia, le fundus, le corps et la partie pylorique (antre et canal pylorique), doté de 3 couches musculaires lisses (oblique interne, circulaire moyenne, longitudinale externe).',
      bloodSupply: 'Cercles artériels issus du tronc cœliaque : artères gastriques gauche et droite (petite courbure), gastro-omentales gauche et droite (grande courbure) et gastriques courtes (fundus)',
      venousDrainage: 'Veines homonymes se drainant directement ou via les veines splénique et mésentérique supérieure dans la veine porte',
      innervation: 'Troncs vagaux antérieur et postérieur (NC X : sécrétion acide et motricité) et nerfs grands splanchniques (T5–T9 via le plexus cœliaque)',
      originInsertion: 'S’étend du sphincter œsophagien inférieur (T11) au sphincter pylorique (L1), relié par le petit et le grand omentum',
      metrics: [
        { label: 'pH luminal', value: '1,5 – 3,5 (sécrétion de HCl par les cellules pariétales)' },
        { label: 'Sécrétion gastrique', value: '1,5 – 2,5 L/jour' },
        { label: 'Capacité', value: '1,0 – 1,5 L (~50 mL à jeun)' },
        { label: 'Sécrétions principales', value: 'HCl, facteur intrinsèque, pepsinogène, gastrine, ghréline' }
      ],
      clinicalPearls: 'Un ulcère perforant de la face postérieure du bulbe duodénal peut éroder l’artère gastroduodénale et provoquer une hémorragie digestive massive. L’atrophie des cellules pariétales entraîne une carence en facteur intrinsèque et une anémie de Biermer (carence en B12).'
    }
  },
  kidneys: {
    name: 'Reins (Droit et Gauche)',
    systemLabel: 'Système Urinaire',
    kids: {
      badge: '🫘 Les jumeaux super-filtres du sang !',
      pronounce: 'RẼ (Rein)',
      summary: 'En bas de ton dos se trouvent deux organes en forme de haricot : les reins ! Ce sont des stations d’épuration qui nettoient ton sang des dizaines de fois par jour, gardent l’eau utile et transforment les déchets en pipi (urine).',
      whyYouNeedIt: 'Ils maintiennent l’équilibre parfait de l’eau et du sel dans ton corps et aident à régler la pression artérielle !',
      funFacts: [
        'Chaque rein contient environ 1 million de micro-filtres appelés néphrons !',
        'Ensemble, tes deux reins filtrent environ 180 litres de liquide chaque jour !',
        'Comme dans une station spatiale, les reins recyclent 99 % de l’eau filtrée dans le sang.'
      ],
      quickStats: [
        { label: 'Micro-filtres', value: '~1 million de néphrons par rein' },
        { label: 'Nettoyage du sang', value: 'Filtre tout le sang ~40 fois/jour' },
        { label: 'Taille', value: 'Comme une souris d’ordinateur (~11 cm)' },
        { label: 'Protection', value: 'Protégés par les côtes inférieures du dos' }
      ]
    },
    pro: {
      summary: 'Organes rétropéritonéaux pairs en forme de haricot (T12–L3 ; rein droit légèrement plus bas sous le foie) assurant l’homéostasie hydro-électrolytique et acido-basique, l’excrétion azotée et des fonctions endocrines (rénine, EPO, calcitriol).',
      bloodSupply: 'Artères rénales droite et gauche (issues de l’aorte en L1–L2) → segmentaires → interlobaires → arquées → interlobulaires → artérioles afférentes → glomérules',
      venousDrainage: 'Veines rénales vers la VCI (la veine rénale gauche croise l’aorte sous la pince de l’artère mésentérique supérieure et reçoit les veines gonadique et surrénale gauches)',
      innervation: 'Plexus rénal (sympathique T10–L1 régulant la sécrétion de rénine et le tonus vasculaire ; parasympathique vagal)',
      originInsertion: 'Entourés par la capsule fibreuse, la graisse périrénale et le fascia rénal de Gerota ; rapports au hile d’avant en arrière : Veine – Artère – Bassinet (V-A-P)',
      metrics: [
        { label: 'Débit sanguin rénal', value: '~1,1 – 1,2 L/min (20 %–25 % du débit cardiaque)' },
        { label: 'Débit de filtration (DFG)', value: '90 – 120 mL/min/1,73m² (~180 L/jour d’urine primitive)' },
        { label: 'Nombre de néphrons', value: '~900 000 – 1,2 million par rein' },
        { label: 'Fraction de filtration', value: '~20 % (DFG / Flux plasmatique rénal)' }
      ],
      clinicalPearls: 'Le syndrome casse-noisette (Nutcracker) résulte de la compression de la veine rénale gauche dans la pince aorto-mésentérique (entre l’AMS et l’aorte), causant hématurie, douleur lombaire gauche et varicocèle gauche.'
    }
  },
  intestines: {
    name: 'Intestin Grêle et Gros Intestin',
    systemLabel: 'Système Digestif',
    kids: {
      badge: '🎢 Le grand huit de 7 mètres des nutriments !',
      pronounce: 'Ẽ-tès-TẼ',
      summary: 'Bien replié dans ton ventre se trouve un long tube incroyable ! D’abord, l’intestin grêle absorbe toutes les vitamines et l’énergie de ton repas vers le sang ; ensuite, le gros intestin récupère l’eau restante.',
      whyYouNeedIt: 'Sans tes intestins pour faire passer les nutriments dans le sang, manger ne te donnerait aucune énergie !',
      funFacts: [
        'Dépliés bout à bout, tes intestins mesurent plus de 7 mètres de long — plus haut qu’une girafe !',
        'La paroi de l’intestin grêle est tapissée de millions de minuscules replis appelés villosités pour capter les nutriments.',
        'Des milliers de milliards de bonnes bactéries vivent dans ton gros intestin et fabriquent des vitamines !'
      ],
      quickStats: [
        { label: 'Longueur totale', value: '~7 mètres repliés dans le ventre !' },
        { label: 'Intestin grêle', value: 'Duodénum, Jéjunum et Iléon' },
        { label: 'Gros intestin', value: 'Réabsorbe l’eau et les minéraux' },
        { label: 'Mouvement', value: 'Ondes musculaires (péristaltisme)' }
      ]
    },
    pro: {
      summary: 'Tube digestif dérivé de l’intestin moyen et postérieur, comprenant l’intestin grêle (duodénum, jéjunum, iléon ; ~6 m in vivo) et le gros intestin (cæcum, appendice, côlons ascendant, transverse, descendant, sigmoïde et rectum ; ~1,5 m).',
      bloodSupply: 'Artère mésentérique supérieure (AMS : intestin moyen jusqu’aux 2/3 droits du côlon transverse) et artère mésentérique inférieure (AMI : 1/3 gauche du transverse au haut rectum), reliées par l’arcade bordante de Riolan / Drummond',
      venousDrainage: 'Veines mésentériques supérieure et inférieure rejoignant la veine splénique pour former la veine porte',
      innervation: 'Système nerveux entérique (plexus myentérique d’Auerbach et sous-muqueux de Meissner) modulé par le nerf vague (NC X), les nerfs splanchniques pelviens (S2–S4) et le sympathique',
      originInsertion: 'Suspendu à la paroi abdominale postérieure par le mésentère, le mésocôlon transverse et le mésosigmoïde',
      metrics: [
        { label: 'Surface d’absorption', value: '~250 m² (plis circulaires, villosités et microvillosités)' },
        { label: 'Réabsorption d’eau', value: '~7,5 L/jour (grêle) ; ~1,4 L/jour (côlon)' },
        { label: 'Sites spécifiques', value: 'Fer (duodénum), Folates (jéjunum), Vitamine B12 et sels biliaires (iléon terminal)' },
        { label: 'Zones watershed', value: 'Angle colique gauche (point de Griffith) et jonction rectosigmoïdienne (point de Sudeck)' }
      ],
      clinicalPearls: 'L’angle colique gauche (splénique — point de Griffith) est une zone frontière entre les territoires de l’AMS et de l’AMI, particulièrement vulnérable à la colite ischémique lors d’une hypoperfusion.'
    }
  },
  aorta: {
    name: 'Aorte (Crosse Aortique, Aorte Thoracique et Abdominale)',
    systemLabel: 'Système Cardiovasculaire / Artériel',
    kids: {
      badge: '🛣️ La plus grande autoroute sanguine du corps !',
      pronounce: 'A-ORT',
      summary: 'L’aorte est la plus grande et la plus solide artère de ton corps ! Large comme un tuyau d’arrosage, elle sort du sommet du cœur en formant une arche et distribue le sang rouge riche en oxygène à tout le corps.',
      whyYouNeedIt: 'Chaque goutte de sang oxygéné pompée par le cœur gauche passe d’abord par l’aorte avant d’aller vers le cerveau, les bras et les jambes !',
      funFacts: [
        'La paroi de l’aorte est élastique et s’étire à chaque battement de cœur !',
        'Les trois grandes branches au sommet de la crosse aortique envoient le sang directement à la tête et aux deux bras.',
        'Au cours d’une vie, l’aorte transporte de quoi remplir des centaines de piscines olympiques !'
      ],
      quickStats: [
        { label: 'Type de vaisseau', value: 'Plus grande artère élastique (rouge = riche en O₂)' },
        { label: 'Diamètre', value: '~2,5 à 3 cm' },
        { label: 'Départ', value: 'Ventricule gauche du cœur' },
        { label: 'Vitesse', value: 'Le flux sanguin le plus rapide du corps !' }
      ]
    },
    pro: {
      summary: 'Tronc artériel élastique principal de la circulation systémique naissant du ventricule gauche. Les lames élastiques de la média assurent l’effet Windkessel, amortissant l’onde systolique pour maintenir une perfusion diastolique continue.',
      bloodSupply: 'Tiers interne par diffusion luminale ; média externe et adventice vascularisées par les vasa vasorum',
      venousDrainage: 'Venae vasorum se drainant dans le système azygos et les veines lombaires',
      innervation: 'Barorécepteurs de la crosse aortique projetant via le nerf vague (NC X) vers le noyau du tractus solitaire',
      originInsertion: 'Aorte ascendante → crosse aortique (T4) → hiatus aortique du diaphragme (T12) → bifurcation aortique en artères iliaques communes en L4',
      metrics: [
        { label: 'Diamètre normal', value: 'Ascendante ≤ 3,5 cm | Abdominale ≤ 2,0 cm (≥ 3,0 cm = anévrisme)' },
        { label: 'Vitesse systolique', value: '100 – 140 cm/s' },
        { label: 'Branches de la crosse', value: '1. Tronc brachiocéphalique, 2. Carotide commune G, 3. Subclavière G' },
        { label: 'Branches digestives', value: 'Tronc cœliaque (T12), AMS (L1), AMI (L3)' }
      ],
      clinicalPearls: 'La rupture traumatique de l’aorte par décélération siège électivement au niveau de l’isthme aortique (en aval de la subclavière gauche, au niveau du ligament artériel), jonction entre l’arche mobile et l’aorte descendante fixée.'
    }
  },
  'vena-cava': {
    name: 'Veines Caves Supérieure et Inférieure',
    systemLabel: 'Système Cardiovasculaire / Veineux',
    kids: {
      badge: '🔵 Les grands tunnels bleus de retour vers le cœur !',
      pronounce: 'VÈN KAV',
      summary: 'Une fois que le sang a livré son oxygène aux organes, les veines le ramènent au cœur ! Les veines caves supérieure et inférieure sont les deux plus grosses veines du corps : l’une ramène le sang de la tête et des bras, l’autre des jambes et du ventre.',
      whyYouNeedIt: 'Le sang tourne en boucle ! Sans ces deux grandes veines, le sang ne pourrait pas revenir au cœur et aux poumons pour faire le plein d’oxygène.',
      funFacts: [
        'Sur les modèles anatomiques, les veines sont colorées en bleu pour montrer que le sang a déjà donné son oxygène !',
        'La veine cave inférieure est la veine la plus large du corps et longe le côté droit de la colonne vertébrale.',
        'Chaque fois que tu inspires profondément, ta respiration aide à aspirer le sang vers le cœur !'
      ],
      quickStats: [
        { label: 'Type de vaisseau', value: 'Plus grands troncs veineux (bleu = retour)' },
        { label: 'Deux troncs', value: 'VCS (haut du corps) et VCI (bas du corps)' },
        { label: 'Arrivée', value: 'Oreillette droite (atrium droit) du cœur' },
        { label: 'Flux', value: 'Retour régulier à basse pression' }
      ]
    },
    pro: {
      summary: 'Principaux vaisseaux capacitifs ramenant le sang désoxygéné systémique à l’atrium droit. La VCS naît de la confluence des troncs veineux brachiocéphaliques ; la VCI naît en L5 de la réunion des veines iliaques communes.',
      bloodSupply: 'Vasa vasorum adventitiels',
      venousDrainage: 'La VCS reçoit la grande veine azygos (T4) avant de s’aboucher dans l’atrium droit ; la VCI traverse le centre tendineux du diaphragme en T8',
      innervation: 'Fibres vasomotrices autonomes et mécanorécepteurs atrio-caves à basse pression (réflexe de Bainbridge)',
      originInsertion: 'Troncs veineux avalvulés de gros calibre situés à droite du rachis',
      metrics: [
        { label: 'Pression veineuse centrale (PVC)', value: '2 – 8 mmHg (atrium droit / VCS)' },
        { label: 'Diamètre de la VCI', value: '1,5 – 2,5 cm (collapsus inspiratoire > 50 % normal)' },
        { label: 'Foramen de la VCI', value: 'Niveau T8 (dans le centrephrénique)' },
        { label: 'Voies collatérales', value: 'Système azygos/hémiazygos et plexus vertébral de Batson' }
      ],
      clinicalPearls: 'En fin de grossesse en décubitus dorsal, l’utérus gravide peut comprimer la VCI contre le rachis lombaire (syndrome cave inférieur), corrigé par le décubitus latéral gauche.'
    }
  },
  'carotid-jugular': {
    name: 'Artères Carotides et Veines Jugulaires',
    systemLabel: 'Système Vasculaire Cervico-Crânien',
    kids: {
      badge: '💓 La ligne express d’oxygène pour ton cerveau !',
      pronounce: 'Ka-ro-TID é Ju-gu-LÈR',
      summary: 'De chaque côté de ton cou passent des vaisseaux très importants ! Les artères carotides (rouges) apportent du sang riche en oxygène au cerveau, et les veines jugulaires (bleues) ramènent le sang vers le cœur.',
      whyYouNeedIt: 'Ton cerveau travaille sans arrêt et a besoin d’une livraison rapide d’oxygène à chaque seconde !',
      funFacts: [
        'En posant doucement deux doigts sur le côté de ton cou, tu peux sentir battre le pouls de ton artère carotide !',
        'Chaque artère carotide commune se divise en « Y » : une branche pour le visage et une branche pour le cerveau.',
        'Au niveau de cette bifurcation se trouvent de petits capteurs qui surveillent la pression artérielle !'
      ],
      quickStats: [
        { label: 'Rôle des carotides', value: 'Apporter le sang oxygéné au cerveau et au visage' },
        { label: 'Rôle des jugulaires', value: 'Ramener le sang de la tête vers le cœur' },
        { label: 'Prise de pouls', value: 'Palpable sur le côté du cou' },
        { label: 'Part cérébrale', value: 'Fournit ~80 % du sang du cerveau' }
      ]
    },
    pro: {
      summary: 'Pédicules neurovasculaires pairs cheminant dans la gaine carotidienne (artères carotides commune et interne, veine jugulaire interne et nerf vague NC X).',
      bloodSupply: 'Carotide commune droite (issue du tronc brachiocéphalique) et gauche (issue de l’arche aortique) bifurquant en C4 en carotide interne (ACI, sans branche cervicale) et carotide externe (ACE)',
      venousDrainage: 'La veine jugulaire interne (VJI) fait suite au sinus sigmoïde au foramen jugulaire et s’unit à la veine subclavière pour former le tronc brachiocéphalique',
      innervation: 'Sinus carotidien (barorécepteur innervé par le NC IX) et glomus carotidien (chémorécepteur innervé par les NC IX et X)',
      originInsertion: 'Dans la gaine carotidienne : artère en dedans, VJI en dehors et nerf vague en arrière dans l’angle dièdre postérieur',
      metrics: [
        { label: 'Niveau de bifurcation', value: 'C3–C4 (bord supérieur du cartilage thyroïde)' },
        { label: 'Pression veineuse jugulaire', value: '≤ 3 cm au-dessus de l’angle sternal à 45°' },
        { label: 'Apport carotidien', value: '~80 % de la perfusion cérébrale totale' },
        { label: 'Voie veineuse centrale', value: 'VJI droite privilégiée (trajet rectiligne vers la VCS, évite le conduit thoracique)' }
      ],
      clinicalPearls: 'La bifurcation carotidienne est un site majeur d’athérosclérose et de sténose, source fréquente d’accidents ischémiques transitoires (AIT) et d’AVC ischémiques.'
    }
  },
  'brachial-radial-vessels': {
    name: 'Vaisseaux Subclaviers, Brachiaux et Radiaux (Circulation du Bras)',
    systemLabel: 'Système Vasculaire du Membre Supérieur',
    kids: {
      badge: '⌚ Là où le médecin prend ta tension et ton pouls !',
      pronounce: 'Bra-ki-AL é Ra-di-AL',
      summary: 'Ces vaisseaux partent sous la clavicule et descendent le long du bras, du coude et du poignet jusqu’au bout des doigts ! Ils gardent tes mains bien chaudes et donnent de l’énergie à tes muscles.',
      whyYouNeedIt: 'Quand l’infirmière gonfle le brassard sur ton bras, elle écoute ton artère brachiale ; au poignet, on sent battre l’artère radiale !',
      funFacts: [
        'Pose deux doigts sur ton poignet du côté du pouce : ce petit battement régulier est ton artère radiale !',
        'Les lignes bleues visibles au pli du coude et sur le dos de la main sont des veines superficielles.',
        'Quand il fait froid, ces vaisseaux se resserrent un peu pour garder la chaleur au centre du corps !'
      ],
      quickStats: [
        { label: 'Artère du bras', value: 'Artère brachiale (mesure de la tension)' },
        { label: 'Artère du poignet', value: 'Artère radiale (prise du pouls)' },
        { label: 'Veine du coude', value: 'Veine médiane du coude (prise de sang)' },
        { label: 'Arcades palmaires', value: '2 arcades irriguent les 10 doigts' }
      ]
    },
    pro: {
      summary: 'Axe artériel continu du membre supérieur (artère subclavière → axillaire sous la 1re côte → brachiale au bord inférieur du grand rond → radiale et ulnaire au col du radius) et réseaux veineux profond et superficiel (céphalique et basilique).',
      bloodSupply: 'Les artères radiale et ulnaire s’anastomosent dans la paume en formant les arcades palmaires superficielle et profonde',
      venousDrainage: 'Veine céphalique (latérale, sillon deltopectoral) et veine basilique (médiale), reliées au pli du coude par la veine médiane cubitale',
      innervation: 'Fibres sympathiques post-ganglionnaires issues du plexus brachial (C5–T1)',
      originInsertion: 'Rapports dans la fosse cubitale de dehors en dedans : Tendon du biceps – Artère brachiale – Nerf médian (TAN)',
      metrics: [
        { label: 'PA brachiale normale', value: '< 120 / 80 mmHg' },
        { label: 'Test d’Allen', value: 'Vérifie la suppléance ulnaire de l’arcade palmaire avant ponction radiale' },
        { label: 'Ponction veineuse', value: 'Veine médiane du coude (protégée de l’artère par l’expansion bicipitale)' },
        { label: 'Abord d’hémodialyse', value: 'Fistule artérioveineuse radio-céphalique de Brescia-Cimino' }
      ],
      clinicalPearls: 'Une fracture supracondylienne de l’humérus chez l’enfant peut léser l’artère brachiale et le nerf médian dans la fosse cubitale, exposant au syndrome de Volkmann.'
    }
  },
  'femoral-saphenous-vessels': {
    name: 'Vaisseaux Iliaques, Fémoraux et Saphènes (Circulation de la Jambe)',
    systemLabel: 'Système Vasculaire du Membre Inférieur',
    kids: {
      badge: '🦵 Des veines qui défient la gravité et des artères puissantes !',
      pronounce: 'Fé-mo-RAL é Sa-FÈN',
      summary: 'Tes jambes possèdent les plus longs vaisseaux sanguins du corps ! L’artère fémorale apporte l’oxygène aux muscles de la cuisse, tandis que les veines saphène et fémorale utilisent des « valvules » anti-retour et les muscles du mollet pour faire remonter le sang jusqu’au cœur !',
      whyYouNeedIt: 'Pour faire remonter le sang de tes pieds jusqu’au cœur contre la gravité, tes mollets agissent comme un « deuxième cœur » à chaque pas !',
      funFacts: [
        'La grande veine saphène est la plus longue veine de tout le corps humain — elle va de la cheville jusqu’en haut de la cuisse !',
        'Chaque fois que tu marches, les muscles du mollet pressent les veines pour propulser le sang vers le haut.',
        'De petites portes à sens unique appelées valvules empêchent le sang de redescendre dans les jambes !'
      ],
      quickStats: [
        { label: 'Plus longue veine', value: 'Grande veine saphène (du pied à l’aine)' },
        { label: 'Artère de la cuisse', value: 'Artère fémorale' },
        { label: 'Secret anti-gravité', value: 'Valvules veineuses à sens unique' },
        { label: 'Deuxième cœur', value: 'La pompe musculaire du mollet !' }
      ]
    },
    pro: {
      summary: 'Axe artériel du membre inférieur (artère iliaque externe → fémorale commune sous le ligament inguinal → fémorale profonde et superficielle → poplitée au hiatus adducteur → tibiales antérieure/postérieure et fibulaire) et systèmes veineux profond et saphène.',
      bloodSupply: 'L’artère fémorale profonde irrigue la cuisse ; l’axe fémoro-poplité et tibial irrigue la jambe et le pied',
      venousDrainage: 'Réseau profond (veines tibiales → poplitée → fémorale) et grande veine saphène (en avant de la malléole médiale jusqu’à la crosse saphéno-fémorale)',
      innervation: 'Chaînes sympathiques lombaire et sacrée (L1–S3) contrôlant le tonus vasoconstricteur orthostatique',
      originInsertion: 'Dans le trigone fémoral de Scarpa, de dehors en dedans (NAVEL) : Nerf fémoral, Artère fémorale, Veine fémorale, Espace du canal fémoral et Lymphonœuds',
      metrics: [
        { label: 'Indice de pression systolique (IPS)', value: 'Normal 1,0 – 1,4 (< 0,9 = artériopathie oblitérante AOMI)' },
        { label: 'Valvules veineuses', value: '10 – 20 valvules bicuspides sur la grande saphène' },
        { label: 'Abord endovasculaire', value: 'Artère/veine fémorale commune 1–2 cm sous le ligament inguinal' },
        { label: 'Pouls pédieux et tibial', value: 'Artère dorsale du pied (pédieuse) et artère tibiale postérieure' }
      ],
      clinicalPearls: 'Une thrombose veineuse profonde (TVP) des veines soléaires ou fémoro-poplitées (triade de Virchow) expose au risque de migration embolique dans l’artère pulmonaire (embolie pulmonaire).'
    }
  },
  skull: {
    name: 'Crâne et Mandibule',
    systemLabel: 'Système Squelettique Axial',
    kids: {
      badge: '🪖 Le casque osseux naturel de ton corps !',
      pronounce: 'KRÂN é Mã-di-BUL',
      summary: 'Ton crâne est un puzzle ultra-solide de 22 os assemblés comme un casque ! La partie haute protège ton cerveau, et la partie avant forme ton visage, soutient tes dents et protège tes yeux et tes oreilles.',
      whyYouNeedIt: 'Sans ce casque osseux, le moindre choc blesserait ton cerveau ; et sans la mâchoire mobile (mandibule), tu ne pourrais ni mâcher ni parler !',
      funFacts: [
        'Sur les 22 os du crâne, un seul peut bouger : la mandibule (l’os de la mâchoire inférieure) !',
        'Les lignes en zigzag qui soudent les os du crâne entre eux s’appellent des sutures.',
        'Cachés au fond de l’oreille moyenne se trouvent les 3 plus petits os du corps — plus petits qu’un grain de riz !'
      ],
      quickStats: [
        { label: 'Nombre d’os', value: '22 os (8 pour le crâne + 14 pour la face)' },
        { label: 'Os mobile', value: '1 seul (la Mandibule)' },
        { label: 'Os facial le plus fort', value: 'La Mandibule' },
        { label: 'Plus petits os', value: 'Les 3 osselets de l’oreille moyenne' }
      ]
    },
    pro: {
      summary: 'Complexe crânio-facial de 22 os (hors osselets de l’ouïe) divisé en neurocrâne (frontal, pariétaux, temporaux, occipital, sphénoïde, ethmoïde) et viscérocrâne, unis par des sutures fibreuses et l’articulation temporo-mandibulaire (ATM) synoviale.',
      bloodSupply: 'Artère méningée moyenne (branche de l’artère maxillaire via le foramen épineux) et branches de la carotide externe',
      venousDrainage: 'Veines diploïques et émissaires reliant le scalp aux sinus veineux duraux',
      innervation: 'Trois branches du nerf trijumeau (V1 ophtalmique, V2 maxillaire, V3 mandibulaire) et nerfs cervicaux supérieurs (C2–C3)',
      originInsertion: 'Articulé en bas par les condyles occipitaux avec l’atlas (C1) ; le condyle mandibulaire s’articule avec la fosse mandibulaire temporale',
      metrics: [
        { label: 'Architecture de la voûte', value: 'Table externe, diploé spongieux et table interne' },
        { label: 'Fermeture des fontanelles', value: 'Postérieure : 2–3 mois | Antérieure (Bregma) : 12–18 mois' },
        { label: 'Foramen magnum', value: 'Livre passage au bulbe, aux artères vertébrales et au NC XI' },
        { label: 'Zone de faiblesse', value: 'Ptérion (jonction en H des os frontal, pariétal, temporal et sphénoïde)' }
      ],
      clinicalPearls: 'Une fracture temporale au niveau du ptérion peut déchirer la branche antérieure de l’artère méningée moyenne et provoquer un hématome extra-dural aigu (image biconvexe en lentille au scanner, souvent après un intervalle libre).'
    }
  },
  'rib-cage': {
    name: 'Cage Thoracique (Côtes et Sternum)',
    systemLabel: 'Système Squelettique Axial',
    kids: {
      badge: '🛡️ L’armure souple qui protège ton cœur et tes poumons !',
      pronounce: 'KÔT é Stèr-NOM',
      summary: 'Touche les os courbés sur ta poitrine : c’est ta cage thoracique ! Tu as 12 paires de côtes (24 en tout) qui partent de la colonne vertébrale dans le dos et rejoignent l’os plat du sternum à l’avant pour protéger le cœur et les poumons.',
      whyYouNeedIt: 'Les côtes sont reliées au sternum par du cartilage souple, ce qui permet à ta poitrine de se gonfler à chaque respiration !',
      funFacts: [
        'Les garçons et les filles ont exactement le même nombre de côtes : 12 paires (24 côtes) !',
        'Les deux dernières paires (11e et 12e côtes) sont appelées « côtes flottantes » car elles ne sont attachées qu’à l’arrière.',
        'À l’intérieur du sternum et des côtes, la moelle osseuse rouge fabrique des millions de globules rouges chaque seconde !'
      ],
      quickStats: [
        { label: 'Total des côtes', value: '24 côtes (12 paires)' },
        { label: 'Bouclier avant', value: 'Sternum (manubrium, corps, appendice xiphoïde)' },
        { label: 'Vraies côtes', value: 'Paires 1 à 7 (reliées directement au sternum)' },
        { label: 'Côtes flottantes', value: 'Paires 11 et 12 (libres à l’avant)' }
      ]
    },
    pro: {
      summary: 'Cage ostéocartilagineuse formée par le sternum (manubrium, corps, processus xiphoïde), 12 paires de côtes (vraies 1–7, fausses 8–10, flottantes 11–12), les cartilages costaux et les vertèbres thoraciques T1–T12.',
      bloodSupply: 'Artères intercostales postérieures (aorte thoracique) anastomosées avec les artères intercostales antérieures (artère thoracique interne)',
      venousDrainage: 'Veines intercostales se drainant en avant dans les veines thoraciques internes et en arrière dans le système azygos',
      innervation: 'Nerfs intercostaux (T1–T11) et nerf subcostal (T12) cheminant dans le sillon costal inférieur',
      originInsertion: 'Mouvements en « bras de pompe » (côtes supérieures → diamètre antéropostérieur) et en « anse de seau » (côtes inférieures → diamètre transversal)',
      metrics: [
        { label: 'Angle sternal (de Louis)', value: 'Jonction manubrio-sternale en regard du 2e cartilage costal et de T4–T5' },
        { label: 'Pédicule intercostal', value: 'Sillon costal inférieur de haut en bas : Veine – Artère – Nerf (VAN)' },
        { label: 'Ponction pleurale sûre', value: 'Toujours au bord SUPÉRIEUR de la côte inférieure' },
        { label: 'Hématopoïèse', value: 'Moelle osseuse rouge active toute la vie dans le sternum et les côtes' }
      ],
      clinicalPearls: 'Lors d’une ponction pleurale ou d’un drainage thoracique, l’aiguille doit impérativement raser le bord supérieur de la côte inférieure pour éviter de léser le pédicule intercostal (VAN) situé au bord inférieur de la côte sus-jacente.'
    }
  },
  spine: {
    name: 'Colonne Vertébrale (Cervicale, Thoracique, Lombaire, Sacrum et Coccyx)',
    systemLabel: 'Système Squelettique Axial et Neural',
    kids: {
      badge: '🏗️ La tour flexible de 33 vertèbres qui te soutient !',
      pronounce: 'Ko-LON Vèr-té-BRAL',
      summary: 'Ta colonne vertébrale n’est pas un bâton rigide, mais une tour souple de 33 os en forme d’anneaux appelés vertèbres, séparés par de petits coussins élastiques appelés disques ! Elle te permet de te tenir droit, de te pencher et de danser.',
      whyYouNeedIt: 'En plus de porter ta tête et ton buste, les anneaux des vertèbres forment un tunnel solide qui protège ta moelle épinière !',
      funFacts: [
        'Tu mesures environ 1 cm de plus le matin au réveil parce que les disques de ta colonne seregonflent d’eau pendant la nuit !',
        'Les humains et les girafes au long cou ont exactement le même nombre de vertèbres cervicales : 7 !',
        'Vue de profil, la colonne dessine une courbe en « S » qui amortit les chocs comme un ressort.'
      ],
      quickStats: [
        { label: 'Total des vertèbres', value: '33 (24 mobiles + Sacrum et Coccyx)' },
        { label: 'Cou (Cervicales)', value: '7 vertèbres (C1–C7)' },
        { label: 'Dos et Lombaires', value: '12 thoraciques + 5 lombaires' },
        { label: 'Amortisseurs', value: '23 disques intervertébraux' }
      ]
    },
    pro: {
      summary: 'Axe rachidien segmenté de 33 vertèbres (7 cervicales, 12 thoraciques, 5 lombaires, 5 sacrées soudées et 4 coccygiennes soudées) présentant des cyphoses primaires (thoracique, sacrée) et des lordoses secondaires (cervicale, lombaire).',
      bloodSupply: 'Rameaux spinaux segmentaires des artères vertébrales, intercostales postérieures, lombaires et sacrées latérales',
      venousDrainage: 'Plexus veineux vertébraux internes et externes avalvulés de Batson',
      innervation: 'Nerfs sinu-vertébraux de Luschka pour le ligament longitudinal postérieur et l’annulus externe ; branches médiales dorsales pour les articulaires postérieures',
      originInsertion: 'Stabilité assurée par les ligaments longitudinaux antérieur et postérieur, jaunes, interépineux et supra-épineux ; disques formés d’un annulus fibrosus et d’un nucleus pulposus',
      metrics: [
        { label: 'Formule rachidienne', value: 'C7 • T12 • L5 • S5 (soudées) • Co4 (soudées)' },
        { label: 'Cône médullaire adulte', value: 'Se termine en L1–L2 (prolongé par la queue de cheval)' },
        { label: 'Ponction lombaire', value: 'Espaces L3–L4 ou L4–L5 (ligne bi-iliaque de Tuffier = L4)' },
        { label: 'Rachis cervical supérieur', value: 'Atlas C1 (flexion « oui ») et Axis C2 avec odontoïde (rotation « non »)' }
      ],
      clinicalPearls: 'Une hernie discale postérolatérale L4–L5 comprime la racine L5 (déficit des releveurs du pied / steppage), tandis qu’une hernie L5–S1 comprime la racine S1 (abolition du réflexe achilléen et déficit de flexion plantaire).'
    }
  },
  'humerus-radius-ulna': {
    name: 'Humérus, Radius et Ulna (Os du Bras et de l’Avant-Bras)',
    systemLabel: 'Système Squelettique Appendiculaire',
    kids: {
      badge: '🦾 Les 3 os pour tendre, plier et tourner ton bras !',
      pronounce: 'U-mé-RUS, Ra-di-US é Ul-NA',
      summary: 'Ton bras possède un grand os appelé l’humérus, et ton avant-bras possède deux os coéquipiers appelés le radius et l’ulna (cubitus) ! Ensemble, ils permettent de plier le coude et de tourner la paume vers le haut ou vers le bas.',
      whyYouNeedIt: 'Avoir deux os dans l’avant-bras est l’astuce qui permet au radius de pivoter autour de l’ulna pour tourner une clé ou une poignée de porte !',
      funFacts: [
        'Quand tu tournes la paume vers le bas, le radius croise par-dessus l’ulna en formant un « X » !',
        'La décharge électrique qu’on ressent en se cognant le coude vient du nerf ulnaire qui passe juste contre l’os !',
        'Au bout de l’avant-bras, chaque main et poignet compte 27 petits os (54 pour les deux mains !).'
      ],
      quickStats: [
        { label: 'Bras', value: '1 os : Humérus' },
        { label: 'Avant-bras', value: '2 os : Radius (côté pouce) et Ulna (côté auriculaire)' },
        { label: 'Articulation du coude', value: 'Charnière + pivot de rotation' },
        { label: 'Os de la main', value: '27 os par main et poignet' }
      ]
    },
    pro: {
      summary: 'Squelette du membre supérieur : l’humérus s’articule en haut à l’épaule (gléno-humérale) et en bas au coude ; le radius et l’ulna s’articulent aux radio-ulnaires proximale et distale, reliés par la membrane interosseuse.',
      bloodSupply: 'Artères nourricières issues des artères circonflexes humérales, brachiale profonde, radiale, ulnaire et interosseuses',
      venousDrainage: 'Veines profondes satellites des artères brachiale, radiale et ulnaire',
      innervation: 'Rapports vasculo-nerveux des fractures de l’humérus : col chirurgical → nerf axillaire ; gouttière radiale (diaphyse) → nerf radial ; palette humérale → nerf médian ; épicondyle médial → nerf ulnaire',
      originInsertion: 'La tête radiale pivote dans le ligament annulaire, permettant ~180° de pronosupination autour de l’ulna',
      metrics: [
        { label: 'Valgus physiologique', value: '10° – 15° d’angle de portage du coude en extension' },
        { label: 'Transmission des forces', value: 'Main → Scaphoïde/Lunatum → Radius distal → Membrane interosseuse → Ulna → Humérus' },
        { label: 'Fractures classiques', value: 'Pouteau-Colles (radius distal), Monteggia, Galeazzi' },
        { label: 'Coiffe des rotateurs', value: 'Tubercule majeur (supra-épineux, infra-épineux, petit rond) et mineur (subscapulaire)' }
      ],
      clinicalPearls: 'Une fracture de la diaphyse humérale moyenne expose à la lésion du nerf radial dans le sillon du nerf radial, entraînant une paralysie des extenseurs du poignet (« main tombante » en col de cygne).'
    }
  },
  pelvis: {
    name: 'Bassin / Pelvis (Os Coxaux et Sacrum)',
    systemLabel: 'Ceinture Pelvienne et Squelette',
    kids: {
      badge: '🥣 Le bol solide qui relie le haut et le bas du corps !',
      pronounce: 'Ba-SẼ (Pel-VIS)',
      summary: 'Ton bassin (ou pelvis) est un anneau osseux ultra-solide en forme de bol au niveau des hanches ! Il porte le poids du haut du corps, protège les organes du bas-ventre et possède deux cavités profondes où s’emboîtent les os des cuisses.',
      whyYouNeedIt: 'Il relie ta colonne vertébrale à tes deux jambes pour que tu puisses marcher debout, courir et garder l’équilibre !',
      funFacts: [
        'Chaque os de la hanche est formé de 3 os (ilion, ischion et pubis) qui fusionnent en grandissant !',
        'Quand tu es assis, tu reposes sur deux os solides du bas du bassin appelés tubérosités ischiatiques.',
        'Le mot latin « pelvis » signifie tout simplement « bassine » ou « bol » !'
      ],
      quickStats: [
        { label: 'Forme', value: 'Anneau osseux protecteur en forme de bol' },
        { label: 'Cavité de la hanche', value: 'Acétabulum (cotyle pour le fémur)' },
        { label: '3 os soudés', value: 'Ilion, Ischion et Pubis de chaque côté' },
        { label: 'Rôle principal', value: 'Transmet le poids de la colonne aux jambes' }
      ]
    },
    pro: {
      summary: 'Anneau ostéo-articulaire formé par les deux os coxaux (ilium, ischium et pubis fusionnés au niveau du cartilage en Y de l’acétabulum) réunis en avant par la symphyse pubienne et en arrière au sacrum par les articulations sacro-iliaques.',
      bloodSupply: 'Branches des artères iliaques interne (ilio-lombaire, obturatrice, glutéales supérieure et inférieure, pudendale interne) et externe',
      venousDrainage: 'Riches plexus veineux pelviens rétropéritonéaux se drainant dans les veines iliaques internes',
      innervation: 'Plexus lombosacré (L1–S4) ; nerf obturateur (L2–L4) par le canal obturateur ; nerf sciatique (L4–S3) par la grande incisure ischiatique sous le piriforme',
      originInsertion: 'Stabilisé par les ligaments sacro-iliaques, sacro-tubéral et sacro-épineux ; l’EIAS donne insertion au sartorius et au ligament inguinal',
      metrics: [
        { label: 'Conjugué obstétrical', value: '≥ 10,5 – 11,0 cm (bassin féminin gynécoïde)' },
        { label: 'Constitution du cotyle', value: 'Ilium (~2/5), Ischium (~2/5), Pubis (~1/5)' },
        { label: 'Ponction médullaire', value: 'Épine iliaque postéro-supérieure (EIPS) et crête iliaque' },
        { label: 'Transfert des charges', value: 'Rachis → Sacrum → Art. SI → Ligne arquée → Acétabulum / Tubérosité ischiatique' }
      ],
      clinicalPearls: 'Les fractures instables de l’anneau pelvien en « livre ouvert » à haute énergie peuvent déchirer le plexus veineux pelvien postérieur et les branches de l’artère iliaque interne, causant un hématome rétropéritonéal massif.'
    }
  },
  'femur-tibia-fibula': {
    name: 'Fémur, Patella, Tibia et Fibula (Os de la Cuisse et de la Jambe)',
    systemLabel: 'Système Squelettique Appendiculaire',
    kids: {
      badge: '🏆 L’os le plus long et le plus solide de tout ton corps !',
      pronounce: 'Fé-MUR, Pa-tè-LA é Ti-bi-A',
      summary: 'L’os de ta cuisse — le fémur — est l’os le plus long, le plus lourd et le plus fort du corps humain ! Sous la rotule (patella) du genou se trouvent les deux os de la jambe : le tibia épais et sa fine partenaire, la fibula (péroné).',
      whyYouNeedIt: 'Chaque fois que tu sautes, cours ou frappes dans un ballon, ces os absorbent des forces plusieurs fois supérieures à ton poids !',
      funFacts: [
        'À poids égal, le fémur de ta cuisse est plus résistant que le béton solide !',
        'Ton fémur représente environ le quart (25 %) de toute ta taille !',
        'La rotule (patella) est un os spécial logé dans un tendon pour protéger le genou et décupler la force de ta cuisse.'
      ],
      quickStats: [
        { label: 'Record', value: 'Fémur = Os le plus long et le plus fort' },
        { label: 'Bouclier du genou', value: 'Patella / Rotule' },
        { label: 'Os du tibia', value: 'Tibia (porte ~85 % du poids de la jambe)' },
        { label: 'Stabilisateur latéral', value: 'Fibula / Péroné (forme la malléole externe)' }
      ]
    },
    pro: {
      summary: 'Colonne portante du membre inférieur : fémur (tête, col avec angle cervico-diaphysaire ~125°, diaphyse, condyles), patella sésamoïde, tibia médial porteur et fibula latérale stabilisant la mortaise talo-crurale.',
      bloodSupply: 'La tête fémorale est vascularisée principalement par les branches rétinaculaires de l’artère circonflexe fémorale médiale (ACFM) ; la diaphyse tibiale par l’artère tibiale postérieure',
      venousDrainage: 'Veines fémorales profondes, poplitées et tibiales antérieures/postérieures',
      innervation: 'Loi de Hilton : hanche et genou innervés par des rameaux des nerfs fémoral, obturateur et sciatique (une coxopathie projette souvent une douleur à la face médiale du genou via le nerf obturateur)',
      originInsertion: 'Genou stabilisé par les ligaments croisés (LCA, LCP), collatéraux (LCM, LCL) et les ménisques médial et latéral',
      metrics: [
        { label: 'Angle cervico-diaphysaire', value: '120° – 135° (Coxa vara < 120° ; Coxa valga > 135°)' },
        { label: 'Triade malheureuse', value: 'LCA + LCM + Ménisque médial (traumatisme en valgus-rotation externe)' },
        { label: 'Col de la fibula', value: 'Cravaté par le nerf fibulaire commun → Steppage en cas de lésion' },
        { label: 'Loges de la jambe', value: '4 loges aponévrotiques inextensibles' }
      ],
      clinicalPearls: 'Les fractures intracapsulaires du col fémoral interrompent les rameaux rétinaculaires de l’artère circonflexe fémorale médiale, exposant à l’ostéonécrose aseptique de la tête fémorale.'
    }
  },
  'pectoralis-deltoid': {
    name: 'Grand Pectoral et Deltoïde (Muscles de la Poitrine et de l’Épaule)',
    systemLabel: 'Musculature Thoracique et Scapulaire',
    kids: {
      badge: '💪 Tes moteurs pour pousser, enlacer et lever les bras !',
      pronounce: 'Pèk-to-RAL é Dèl-to-ID',
      summary: 'Sur le devant de la poitrine se trouvent les muscles grands pectoraux en forme d’éventail, et sur tes épaules les muscles deltoïdes ! Ensemble, ils te permettent de pousser une porte, nager, lancer une balle et lever la main.',
      whyYouNeedIt: 'Chaque fois que tu fais des pompes, lances un ballon ou lèves le bras en classe, le grand pectoral et le deltoïde travaillent en équipe !',
      funFacts: [
        'Le mot « deltoïde » vient de la lettre grecque Delta (Δ) car ce muscle a la forme d’un triangle !',
        'Le deltoïde a 3 parties (avant, côté, arrière) pour lever le bras dans toutes les directions.',
        'Les muscles ne peuvent que TIRER sur les os, jamais pousser !'
      ],
      quickStats: [
        { label: 'Rôle du pectoral', value: 'Pousser et rapprocher les bras devant soi' },
        { label: 'Rôle du deltoïde', value: 'Lever le bras dans toutes les directions' },
        { label: 'Forme', value: 'Éventail (poitrine) + Triangle (épaule)' },
        { label: 'Coéquipiers', value: 'Muscles du dos (grand dorsal et trapèze)' }
      ]
    },
    pro: {
      summary: 'Moteurs superficiels thoraco-huméraux et scapulo-huméraux formant la paroi antérieure de l’aisselle et le galbe de l’épaule, séparés par le sillon deltopectoral (contenant la veine céphalique).',
      bloodSupply: 'Tronc thoraco-acromial (branches pectorale et deltoïdienne) et artère circonflexe humérale postérieure',
      venousDrainage: 'Veine céphalique et veines thoraco-acromiales vers la veine axillaire',
      innervation: 'Grand pectoral : nerfs pectoraux médial (C8–T1) et latéral (C5–C7) ; Deltoïde : nerf axillaire (C5–C6 via l’espace quadrilatère de Velpeau)',
      originInsertion: 'Grand pectoral : chefs claviculaire et sterno-costal → crête du tubercule majeur de l’humérus (adduction et rotation médiale). Deltoïde : clavicule, acromion, épine scapulaire → tubérosité deltoïdienne (abduction de 15° à 90°)',
      metrics: [
        { label: 'Rythme d’abduction', value: '0°–15° Supra-épineux | 15°–90° Deltoïde | >90° Dentelé antérieur + Trapèze' },
        { label: 'Injection IM', value: 'Deltoïde moyen 3–5 cm sous l’acromion' },
        { label: 'Espace quadrilatère', value: 'Contient le nerf axillaire et l’artère circonflexe humérale postérieure' },
        { label: 'Architecture', value: 'Faisceau moyen multipenné à forte section physiologique' }
      ],
      clinicalPearls: 'La luxation antéro-interne de l’épaule ou la fracture du col chirurgical de l’humérus peut léser le nerf axillaire (C5–C6), entraînant une paralysie de l’abduction (15°–90°) et une hypoesthésie du moignon de l’épaule.'
    }
  },
  'biceps-triceps': {
    name: 'Biceps Brachial, Triceps et Muscles de l’Avant-Bras',
    systemLabel: 'Musculature du Membre Supérieur',
    kids: {
      badge: '💪 Le célèbre duo qui plie et tend tes bras !',
      pronounce: 'Bi-SÈPS é Tri-SÈPS',
      summary: 'Plie le coude et contracte ton bras : cette boule sur le devant est ton biceps brachial ! Quand il se contracte, il tire ton avant-bras vers le haut. Pour retendre le bras, c’est le triceps à l’arrière qui tire dans l’autre sens !',
      whyYouNeedIt: 'Comme les muscles ne savent que tirer, le biceps (devant) et le triceps (derrière) travaillent en duo opposé pour plier et tendre le coude !',
      funFacts: [
        '« Bi-ceps » veut dire « deux têtes » en latin car le haut du muscle s’attache à l’omoplate par deux tendons !',
        '« Tri-ceps » à l’arrière du bras veut dire « trois têtes » !',
        'Le biceps est aussi le muscle le plus puissant pour tourner la paume de la main vers le haut (comme quand tu tournes une clé) !'
      ],
      quickStats: [
        { label: 'Sens du nom', value: 'Biceps = 2 chefs | Triceps = 3 chefs' },
        { label: 'Action du biceps', value: 'Plie le coude et tourne la paume vers le haut' },
        { label: 'Action du triceps', value: 'Tend le coude (extension)' },
        { label: 'Attaches', value: 'De solides tendons blancs relient le muscle à l’os' }
      ]
    },
    pro: {
      summary: 'Loge brachiale antérieure (biceps brachial, brachial, coracobrachial) et loge postérieure (triceps brachial) agissant comme couple antagoniste sur le coude et les articulations radio-ulnaires.',
      bloodSupply: 'Branches musculaires de l’artère brachiale (loge antérieure) et de l’artère brachiale profonde (loge postérieure)',
      venousDrainage: 'Veines brachiales, basilique et céphalique',
      innervation: 'Loge antérieure : nerf musculocutané (C5–C7) ; loge postérieure (triceps) : nerf radial (C6–C8)',
      originInsertion: 'Biceps : chef court (processus coracoïde) et chef long (tubercule supraglénoïdal) → tubérosité radiale (supinateur principal et fléchisseur). Triceps : chefs long, latéral et médial → olécrane de l’ulna (extenseur)',
      metrics: [
        { label: 'Réflexes ostéotendineux', value: 'Bicipital = C5/C6 | Stylo-radial = C6 | Tricipital = C7' },
        { label: 'Couple de supination', value: 'Maximal lorsque le coude est fléchi à 90°' },
        { label: 'Inhibition réciproque', value: 'Les afférences Ia relâchent le triceps lors de la contraction du biceps' },
        { label: 'Rupture du long biceps', value: 'Signe de Popeye (rétraction globuleuse distale du corps charnu)' }
      ],
      clinicalPearls: 'La paralysie radiculaire supérieure du plexus brachial de Duchenne-Erb (C5–C6) paralyse le deltoïde, le biceps et le brachial, figeant le membre supérieur en rotation interne et pronation (« signe du pourboire du serveur »).'
    }
  },
  'rectus-abdominis-diaphragm': {
    name: 'Droit de l’Abdomen, Obliques et Diaphragme Thoracique',
    systemLabel: 'Musculature de la Sangle Abdominale et Respiratoire',
    kids: {
      badge: '🛡️ Ton armure abdominale et le muscle parachute de la respiration !',
      pronounce: 'Ab-do-mi-NÔ é Di-a-FRAGM',
      summary: 'Tes muscles abdominaux entourent ton ventre comme une ceinture protectrice pour protéger tes organes et t’aider à te redresser et pivoter. Juste au-dessus, sous les côtes, se trouve le diaphragme : un muscle en forme de dôme qui s’abaisse à chaque inspiration !',
      whyYouNeedIt: 'Le diaphragme assure l’essentiel de ta respiration, et tes abdominaux stabilisent ta colonne vertébrale à chaque mouvement !',
      funFacts: [
        'Tu as déjà eu le hoquet ? Le hoquet survient quand ton diaphragme se contracte brusquement par surprise !',
        'Les « tablettes de chocolat » du muscle droit de l’abdomen sont dessinées par 3 bandes fibreuses horizontales.',
        'Quand tu ris aux éclats, tousses ou éternues, tes muscles abdominaux se contractent à toute vitesse !'
      ],
      quickStats: [
        { label: 'Forme du diaphragme', value: 'Coupole / parachute sous les poumons' },
        { label: 'Sangle abdominale', value: '4 couches musculaires croisées' },
        { label: 'Cause du hoquet', value: 'Spasme soudain du diaphragme !' },
        { label: 'Rôles clés', value: 'Respiration + Protection + Posture' }
      ]
    },
    pro: {
      summary: 'Cloison musculo-tendineuse thoraco-abdominale en double coupole (diaphragme) et paroi abdominale antérolatérale à 4 couches (oblique externe, oblique interne, transverse et droit de l’abdomen dans sa gaine).',
      bloodSupply: 'Gaine des droits : anastomose des artères épigastriques supérieure (thoracique interne) et inférieure (iliaque externe). Diaphragme : artères phréniques, musculophrénique et péricardiacophrénique',
      venousDrainage: 'Veines épigastriques supérieure et inférieure (voie collatérale cavo-cave et porto-cave) et veines phréniques',
      innervation: 'Diaphragme : nerf phrénique (C3, C4, C5). Paroi abdominale : nerfs thoraco-abdominaux (T7–T11), subcostal (T12) et ilio-hypogastrique/ilio-inguinal (L1)',
      originInsertion: 'Orifices diaphragmatiques : foramen de la VCI en T8, hiatus œsophagien en T10 (œsophage + nerfs vagues), hiatus aortique en T12 (aorte + conduit thoracique + veine azygos)',
      metrics: [
        { label: 'Course diaphragmatique', value: '1,5 – 2 cm au repos | 6 – 10 cm en inspiration forcée' },
        { label: 'Ligne arquée (de Douglas)', value: 'À mi-distance ombilic-pubis (en dessous, toutes les aponévroses passent en avant du droit)' },
        { label: 'Niveaux des orifices', value: 'VCI = T8, Œsophage = T10, Aorte = T12' },
        { label: 'Triangle de Hesselbach', value: 'Médial : bord du droit | Latéral : vaisseaux épigastriques inf. | Inférieur : lig. inguinal' }
      ],
      clinicalPearls: 'Les hernies inguinales directes font issue à travers le triangle de Hesselbach en dedans des vaisseaux épigastriques inférieurs, tandis que les hernies indirectes empruntent l’anneau inguinal profond en dehors de ces vaisseaux.'
    }
  },
  'quadriceps-gastrocnemius': {
    name: 'Quadriceps Fémoral, Ischio-Jambiers et Gastrocnémien (Muscles de la Jambe)',
    systemLabel: 'Musculature du Membre Inférieur',
    kids: {
      badge: '⚡ Tes moteurs géants pour courir, sauter et tirer !',
      pronounce: 'Kwa-dri-SÈPS é Gas-trok-né-MYẼ',
      summary: 'Tes jambes abritent les muscles les plus grands et les plus puissants du corps ! Le quadriceps à l’avant de la cuisse tend le genou pour sauter, les ischio-jambiers à l’arrière plient le genou, et le gastrocnémien du mollet tire sur le tendon d’Achille pour te propulser !',
      whyYouNeedIt: 'Chaque pas que tu fais utilise une vague coordonnée entre ta cuisse et ton mollet !',
      funFacts: [
        '« Quadri-ceps » veut dire « quatre têtes » car c’est une équipe de 4 grands muscles sur le devant de la cuisse !',
        'Les muscles du mollet s’attachent à l’os du talon par le tendon d’Achille — le tendon le plus épais et le plus résistant du corps !',
        'Le grand glutéal (grand fessier) et le quadriceps sont les muscles les plus volumineux du corps humain !'
      ],
      quickStats: [
        { label: 'Quadriceps', value: '4 muscles devant la cuisse (tendent le genou)' },
        { label: 'Ischio-jambiers', value: '3 muscles derrière la cuisse (plient le genou)' },
        { label: 'Mollet', value: 'Gastrocnémien et Soléaire (monter sur la pointe des pieds)' },
        { label: 'Tendon le plus fort', value: 'Tendon calcanéen (d’Achille)' }
      ]
    },
    pro: {
      summary: 'Moteurs extenseurs et fléchisseurs plantaires du membre inférieur : quadriceps fémoral antérieur (droit fémoral, vastes latéral, médial et intermédiaire), ischio-jambiers postérieurs (biceps fémoral, semi-tendineux, semi-membraneux) et triceps sural (gastrocnémien + soléaire).',
      bloodSupply: 'Artères fémorale profonde et circonflexe fémorale latérale (cuisse) ; artères surales issues de la poplitée et tibiale postérieure (jambe)',
      venousDrainage: 'Veines fémorales profondes, poplitées et sinus veineux soléaires (pompe musculo-veineuse du mollet)',
      innervation: 'Quadriceps : nerf fémoral (L2–L4) ; Ischio-jambiers : contingent tibial du nerf sciatique (L5–S2, sauf court biceps par le fibulaire commun) ; Triceps sural : nerf tibial (S1–S2)',
      originInsertion: 'Quadriceps → tendon quadricipital → patella → ligament patellaire → tubérosité tibiale. Gastrocnémien et soléaire → tendon calcanéen (d’Achille) → tubérosité du calcanéus',
      metrics: [
        { label: 'Réflexe rotulien', value: 'L3–L4 (nerf fémoral)' },
        { label: 'Réflexe achilléen', value: 'S1–S2 (nerf tibial)' },
        { label: 'Charge sur le tendon d’Achille', value: 'Supporte jusqu’à 8 à 12 fois le poids du corps en course/saut' },
        { label: 'Typologie des fibres', value: 'Soléaire : ~80 % fibres lentes type I (posture) | Gastrocnémien : fibres rapides type II' }
      ],
      clinicalPearls: 'La rupture du tendon calcanéen (d’Achille) survient typiquement 2 à 6 cm au-dessus de son insertion calcanéenne (zone hypovasculaire) et se traduit par une manœuvre de Thompson positive.'
    }
  },
  'spinal-cord-sciatic': {
    name: 'Moelle Épinière, Plexus Brachial et Nerf Sciatique',
    systemLabel: 'Système Nerveux Central et Périphérique',
    kids: {
      badge: '⚡ Le réseau de fibre optique ultra-rapide de ton corps !',
      pronounce: 'Mwal É-pi-NYÈR é Nèr Sya-TIK',
      summary: 'Ta moelle épinière est un gros câble nerveux qui descend dans le tunnel de ta colonne vertébrale et donne naissance à 31 paires de nerfs qui rejoignent chaque millimètre de ta peau et de tes muscles, à plus de 400 km/h !',
      whyYouNeedIt: 'Si tu touches quelque chose de brûlant, tes nerfs prennent un raccourci dans la moelle épinière (« arc réflexe ») pour retirer ta main AVANT même que ton cerveau ait eu le temps de réfléchir !',
      funFacts: [
        'Le nerf sciatique qui descend derrière chaque jambe est le nerf le plus long et le plus épais du corps — presque aussi large qu’un pouce d’adulte !',
        'Mis bout à bout, tous les nerfs de ton corps s’étendraient sur plus de 72 kilomètres !',
        'Le nerf vague voyage du tronc cérébral jusqu’au cœur, aux poumons et au ventre pour apaiser le corps.'
      ],
      quickStats: [
        { label: 'Nerfs spinaux', value: '31 paires issues de la moelle épinière' },
        { label: 'Plus grand nerf', value: 'Nerf sciatique (du bassin jusqu’au pied)' },
        { label: 'Vitesse du signal', value: 'Jusqu’à 120 m/s (430 km/h)' },
        { label: 'Raccourci éclair', value: 'Arc réflexe médullaire !' }
      ]
    },
    pro: {
      summary: 'Cordon médullaire du SNC (avec renflements cervical C4–T1 et lombosacré L1–S3) donnant naissance à 31 paires de nerfs spinaux mixtes (8C, 12T, 5L, 5S, 1Co) organisés en plexus cervical, brachial, lombaire et sacré.',
      bloodSupply: 'Artère spinale antérieure unique (2/3 antérieurs) et artères spinales postérieures paires (cordons postérieurs), renforcées par l’artère radiculaire magna d’Adamkiewicz (origine gauche T8–L2)',
      venousDrainage: 'Veines spinales antérieures et postérieures se drainant dans les plexus veineux vertébraux internes',
      innervation: 'Voies ascendantes : cordons postérieurs-lemnisque médial (tact épicritique et proprioception) et faisceau spinothalamique (thermo-algésie). Voie descendante : faisceau corticospinal latéral',
      originInsertion: 'Prolonge le bulbe au foramen magnum ; amarrée en bas au coccyx par le filum terminale et latéralement par les ligaments dentelés',
      metrics: [
        { label: 'Vitesse de conduction', value: 'Fibres myélinisées Aα : 80 – 120 m/s | Fibres C : 0,5 – 2 m/s' },
        { label: 'Plexus brachial', value: 'C5–T1 (Racines → Troncs → Divisions → Faisceaux → Branches)' },
        { label: 'Nerf sciatique (ischiatique)', value: 'L4–S3 (Plus gros nerf de l’organisme, ~2 cm de diamètre)' },
        { label: 'Zone médullaire critique', value: 'Segments thoraciques moyens T4–T8' }
      ],
      clinicalPearls: 'Le syndrome de Brown-Séquard (hémisection médullaire) associe sous la lésion un syndrome pyramidal et une perte proprioceptive homolatéraux à une anesthésie thermo-algique controlatérale.'
    }
  },
  'female-reproductive': {
    name: 'Utérus, Ovaires et Trompes de Fallope (Système Reproducteur Féminin)',
    systemLabel: 'Système Reproducteur et Endocrinien Féminin',
    kids: {
      badge: '🌸 Le berceau protecteur où grandissent les bébés !',
      pronounce: 'U-té-RUS é O-VÈR',
      summary: 'À l’intérieur du bassin féminin se trouvent l’utérus, deux ovaires en forme d’amande et deux trompes de Fallope. Les ovaires fabriquent des hormones importantes, et l’utérus musculaire est la chambre sûre et extensible où un bébé peut se développer avant la naissance.',
      whyYouNeedIt: 'Ces organes produisent des hormones (œstrogènes et progestérone) essentielles pour la solidité des os et la croissance à l’âge adulte.',
      funFacts: [
        'Une petite fille naît avec tous les ovocytes qu’elle aura durant sa vie déjà précieusement gardés dans ses deux ovaires !',
        'L’utérus a la taille et la forme d’une petite poire inversée et possède l’un des muscles lisses les plus puissants du corps.',
        'L’extrémité des trompes de Fallope possède de petites franges appelées fimbriae qui accueillent doucement l’ovule !'
      ],
      quickStats: [
        { label: 'Forme de l’utérus', value: 'Organe musculaire en forme de poire (~7,5 cm)' },
        { label: 'Ovaires', value: '2 glandes de la taille d’une amande' },
        { label: 'Trompes utérines', value: '2 ponts reliant les ovaires à l’utérus' },
        { label: 'Hormones', value: 'Œstrogènes et Progestérone' }
      ]
    },
    pro: {
      summary: 'Tractus génital féminin interne situé dans le petit bassin entre la vessie en avant (cul-de-sac vésico-utérin) et le rectum en arrière (cul-de-sac recto-utérin de Douglas), comprenant les ovaires, les trompes utérines de Fallope, l’utérus (fundus, corps, isthme, col) et le vagin.',
      bloodSupply: 'Artère utérine (branche de l’iliaque interne croisant l’uretère par-dessus — « l’eau passe sous le pont ») anastomosée avec l’artère ovarique (branche de l’aorte en L2)',
      venousDrainage: 'Plexus veineux utérin → veines iliaques internes ; plexus pampiniforme → veine ovarique droite (vers la VCI) et gauche (vers la veine rénale gauche)',
      innervation: 'Plexus utérovaginal (plexus hypogastrique inférieur : sympathique T10–L1 ; parasympathique splanchnique pelvien S2–S4) et plexus ovarique',
      originInsertion: 'Soutenu par le diaphragme pelvien (élévateur de l’anus) et le paramètre (ligaments cardinaux de Mackenrodt, utéro-sacrés, ronds et larges)',
      metrics: [
        { label: 'Utérus nullipare', value: '~7,5 × 5,0 × 2,5 cm | Masse : 50 – 70 g' },
        { label: 'Position habituelle', value: 'Antéversé et antéfléchi' },
        { label: 'Site de fécondation', value: 'Ampoule de la trompe utérine' },
        { label: 'Zone de jonction', value: 'Jonction pavimento-cylindrique du col utérin' }
      ],
      clinicalPearls: 'Lors d’une hystérectomie, deux rapports urétéraux sont fondamentaux : les vaisseaux ovariques croisent l’uretère en avant dans le ligament lombo-ovarien, et l’artère utérine croise au-dessus de l’uretère à 1,5 cm du col.'
    }
  },
  'mammary-glands': {
    name: 'Glandes Mammaires et Canaux Galactophores',
    systemLabel: 'Système Tégumentaire et Exocrine',
    kids: {
      badge: '🍼 Glandes spécialisées produisant le lait maternel !',
      pronounce: 'GLÃD Ma-MÈR',
      summary: 'Les glandes mammaires reposent sur le devant de la poitrine, au-dessus des muscles pectoraux. Elles sont composées de 15 à 20 lobes disposés comme les quartiers d’une orange, reliés par de petits canaux galactophores.',
      whyYouNeedIt: 'Chez les mammifères, ces glandes fournissent aux nouveau-nés une alimentation complète ainsi que des anticorps protecteurs !',
      funFacts: [
        'Le mot « mammifère » vient directement du latin « mamma » !',
        'Dans chaque glande, les lobes sont organisés en cercle comme les pétales d’une marguerite.',
        'De solides travées fibreuses appelées ligaments de Cooper soutiennent la glande mammaire.'
      ],
      quickStats: [
        { label: 'Lobes glandulaires', value: '15 à 20 lobes radiaires par côté' },
        { label: 'Réseau de canaux', value: 'Canaux et sinus galactophores' },
        { label: 'Plan musculaire', value: 'Sur le grand pectoral et le dentelé antérieur' },
        { label: 'Maintien', value: 'Ligaments suspenseurs de Cooper' }
      ]
    },
    pro: {
      summary: 'Glandes sudoripares apocrines modifiées situées dans le fascia superficiel de la paroi thoracique antérieure (2e à 6e côtes) en avant du fascia pectoral, dont elles sont séparées par l’espace rétromammaire de Chassaignac.',
      bloodSupply: 'Rameaux perforants de l’artère thoracique interne (~60 % médial), artères thoracique latérale et thoraco-acromiale, et rameaux intercostaux postérieurs (2e–5e)',
      venousDrainage: 'Cercle veineux de Haller se drainant vers les veines axillaire, thoracique interne et intercostales',
      innervation: 'Rameaux cutanés antérieurs et latéraux des nerfs intercostaux T2–T6 (mamelon = dermatome T4)',
      originInsertion: '15 à 20 lobes tubulo-alvéolaires convergeant vers les conduits et sinus lactifères au mamelon, soutenus par les ligaments suspenseurs de Cooper',
      metrics: [
        { label: 'Limites anatomiques', value: '2e à 6e côte | Bord sternal à ligne axillaire moyenne' },
        { label: 'Prolongement axillaire', value: 'Queue de Spence vers le creux axillaire' },
        { label: 'Drainage lymphatique', value: '>75 % vers les nœuds axillaires homolatéraux ; ~20 % vers la chaîne parasternale' },
        { label: 'Contrôle endocrinien', value: 'Œstrogènes (canaux), Progestérone (acini), Prolactine et Ocytocine' }
      ],
      clinicalPearls: 'La traction tumorale sur les ligaments de Cooper provoque une rétraction cutanée, tandis que l’obstruction lymphatique dermique engendre l’aspect en « peau d’orange ».'
    }
  },
  'male-reproductive': {
    name: 'Prostate, Testicules et Conduits Déférents (Système Reproducteur Masculin)',
    systemLabel: 'Système Reproducteur et Endocrinien Masculin',
    kids: {
      badge: '🧬 Organes endocriniens et reproducteurs masculins',
      pronounce: 'Pros-TAT é Tès-ti-KUL',
      summary: 'Le système reproducteur masculin comprend les deux testicules (qui produisent l’hormone testostérone), les épididymes, les conduits déférents et la prostate, une glande de la taille d’une noix située juste sous la vessie.',
      whyYouNeedIt: 'La testostérone aide la voix à mûrir et renforce les os et les muscles pendant la croissance.',
      funFacts: [
        'La prostate a la forme et la taille d’une châtaigne ou d’une noix, placée juste sous la vessie autour de l’urètre.',
        'Mis bout à bout, les tubes microscopiques d’un seul testicule mesureraient plusieurs centaines de mètres !',
        'Le conduit déférent remonte en boucle au-dessus de l’os du bassin avant de redescendre derrière la vessie.'
      ],
      quickStats: [
        { label: 'Taille de la prostate', value: 'Glande de la taille d’une noix (~20 g)' },
        { label: 'Testicules', value: '2 glandes endocrines et reproductrices' },
        { label: 'Hormone principale', value: 'Testostérone' },
        { label: 'Trajet', value: 'Testicule → Épididyme → Conduit déférent → Urètre' }
      ]
    },
    pro: {
      summary: 'Tractus urogénital masculin comprenant les testicules (tubes séminifères et cellules de Leydig), les épididymes, les conduits déférents (dans le cordon spermatique), les vésicules séminales, les conduits éjaculateurs et la prostate entourant l’urètre prostatique.',
      bloodSupply: 'Artères testiculaires (branches directes de l’aorte en L2), artère du conduit déférent et branches vésicales inférieures et rectales moyennes pour la prostate',
      venousDrainage: 'Plexus pampiniforme → veine testiculaire droite (dans la VCI) et gauche (dans la veine rénale gauche à 90°) ; plexus veineux prostatique de Santorini communicant avec le plexus de Batson',
      innervation: 'Plexus testiculaire (T10–T11) et plexus hypogastrique inférieur (nerfs splanchniques pelviens S2–S4 parasympathiques ; fibres sympathiques L1–L2)',
      originInsertion: 'Subdivision zonale de McNeal : zone périphérique (~70 %, postérieure), zone centrale (~25 %) et zone de transition (~5 %, péri-urétrale)',
      metrics: [
        { label: 'Masse prostatique normale', value: '~20 g (3 × 4 × 2 cm) sous le col vésical' },
        { label: 'Zones de McNeal', value: 'Périphérique (siège des cancers) vs Transition (siège de l’HBP)' },
        { label: 'Canal inguinal', value: 'Anneau profond (fascia transversalis) → Anneau superficiel (oblique externe)' },
        { label: 'Thermorégulation', value: 'Crémaster + Dartos + Plexus pampiniforme maintiennent ~34–35 °C' }
      ],
      clinicalPearls: 'L’hypertrophie bénigne de la prostate (HBP) se développe dans la zone de transition péri-urétrale causant une dysurie précoce, tandis que l’adénocarcinome prostatique siège préférentiellement dans la zone périphérique postérieure.'
    }
  }
};

export const TISSUE_INFO_FR = {
  skin: {
    kids: 'Voici ta peau — l’armure souple et imperméable de ton corps ! Elle bloque les microbes, garde l’eau et contient des millions de capteurs de toucher et de température.',
    pro: 'Tégument : épiderme pavimenteux stratifié kératinisé sur un derme collagénique vascularisé et un hypoderme adipeux.'
  },
  hair: {
    kids: 'Les cheveux gardent ta tête au chaud et la protègent du soleil. Chaque cheveu pousse dans un petit follicule.',
    pro: 'Tiges pilaires kératinisées issues des follicules pileux dermiques ; photoprotection UV et isolation thermique.'
  },
  muscle: {
    kids: 'C’est un muscle ! Les muscles sont des faisceaux de fibres élastiques qui tirent sur tes os pour te faire bouger.',
    pro: 'Muscle squelettique strié volontaire. Noter l’orientation fasciculaire, les insertions et l’innervation.'
  },
  tendon: {
    kids: 'Voici un tendon — un câble ultra-solide qui attache le muscle à l’os pour le tirer quand le muscle se contracte.',
    pro: 'Tissu conjonctif dense régulier (collagène de type I) transmettant la force musculaire à l’os.'
  },
  ligament: {
    kids: 'Les ligaments sont des bandes résistantes qui relient les os entre eux au niveau des articulations.',
    pro: 'Tissu conjonctif dense fibreux unissant os à os ; assure la stabilité articulaire passive et la proprioception.'
  },
  bone: {
    kids: 'C’est un os ! Les os sont des tissus vivants qui te soutiennent, protègent tes organes et fabriquent les cellules du sang dans leur moelle.',
    pro: 'Os lamellaire cortical (compact) et trabéculaire (spongieux) ; soutien mécanique, homéostasie minérale et hématopoïèse.'
  },
  tooth: {
    kids: 'Les dents sont recouvertes d’émail — la substance la plus dure de tout ton corps !',
    pro: 'Émail sur dentine et pulpe dentaire, ancré par le ligament parodontal (gomphose) ; 32 dents permanentes chez l’adulte.'
  },
  cartilage: {
    kids: 'Le cartilage est un tissu lisse et souple, comme le bout de ton nez. Il protège les articulations et maintient la trachée ouverte.',
    pro: 'Cartilage hyalin, élastique ou fibreux avasculaire nourri par diffusion ; surfaces articulaires à faible friction.'
  },
  artery: {
    kids: 'Voici une artère — un vaisseau solide et élastique qui transporte le sang rouge riche en oxygène DEPUIS le cœur vers tout le corps !',
    pro: 'Artère systémique (média épaisse). Transporte le sang oxygéné de façon centrifuge avec un flux pulsatile.'
  },
  arteryDeoxy: {
    kids: 'Cette artère transporte le sang du cœur vers les poumons pour recharger l’oxygène — c’est pourquoi elle est colorée en bleu !',
    pro: 'Arbre artériel pulmonaire : transporte le sang désoxygéné du ventricule droit aux poumons (basse pression).'
  },
  vein: {
    kids: 'Voici une veine ! Les veines ramènent vers le cœur le sang qui a déjà livré son oxygène, grâce à des valvules anti-retour.',
    pro: 'Veine systémique (vaisseau capacitif à paroi mince et valvules). Ramène le sang désoxygéné vers l’atrium droit.'
  },
  veinOxy: {
    kids: 'Cette veine ramène le sang frais riche en oxygène des poumons vers le cœur — elle est donc colorée en rouge !',
    pro: 'Veine pulmonaire : ramène le sang oxygéné des poumons vers l’atrium gauche.'
  },
  nerve: {
    kids: 'Les nerfs sont les câbles électriques de ton corps, transmettant des messages ultra-rapides entre le cerveau et chaque organe.',
    pro: 'Nerf périphérique ou crânien : axones myélinisés et amyéliniques entourés d’endonèvre, périnèvre et épinèvre.'
  },
  cord: {
    kids: 'La moelle épinière est le câble principal du système nerveux, protégé dans le tunnel de la colonne vertébrale.',
    pro: 'Moelle épinière : substance grise centrale et cordons de substance blanche périphériques ; cône médullaire en L1–L2.'
  },
  brain: {
    kids: 'Voici une partie de ton cerveau — le centre de commande ! Il gère la pensée, les mouvements, la vue, la mémoire et les émotions.',
    pro: 'Structure du système nerveux central. Corréler avec le territoire vasculaire et la localisation fonctionnelle.'
  },
  dura: {
    kids: 'Cette membrane résistante (la dure-mère) enveloppe et soutient ton cerveau.',
    pro: 'Repli dural (méninge) cloisonnant la cavité crânienne et abritant les sinus veineux duraux.'
  },
  csf: {
    kids: 'Ces espaces remplis de liquide au cœur du cerveau le protègent des chocs comme un matelas d’eau !',
    pro: 'Système ventriculaire contenant le liquide cérébrospinal (~150 mL, produit par les plexus choroïdes).'
  },
  heart: {
    kids: 'Une partie de ton cœur — la pompe musculaire infatigable qui bat environ 100 000 fois par jour !',
    pro: 'Structure cardiaque. Corréler avec la vascularisation coronaire, le tissu nodal et la fonction valvulaire.'
  },
  lung: {
    kids: 'Tes poumons sont spongieux et échangent le gaz carbonique contre de l’oxygène frais à chaque respiration.',
    pro: 'Parenchyme pulmonaire : ~300–500 millions d’alvéoles offrant ~70 m² de surface d’échange gazeux.'
  },
  airway: {
    kids: 'Ce sont tes conduits d’air (trachée et bronches) qui se ramifient comme un arbre pour amener l’air dans les poumons.',
    pro: 'Voies aériennes de conduction (arbre trachéobronchique) : ~23 générations de division dichotomique.'
  },
  liver: {
    kids: 'Le foie est l’usine chimique du corps : il filtre le sang, stocke l’énergie et fabrique la bile.',
    pro: 'Parenchyme hépatique (segments de Couinaud) à double vascularisation : veine porte (~75 %) et artère hépatique (~25 %).'
  },
  gallbladder: {
    kids: 'La vésicule biliaire stocke la bile, un liquide vert qui aide à digérer les graisses.',
    pro: 'Voie biliaire accessoire : concentre et stocke la bile, drainée par le conduit cystique vers le cholédoque.'
  },
  stomach: {
    kids: 'Ton estomac est une poche musculaire qui brasse les aliments avec de l’acide digestif.',
    pro: 'Estomac : sécrète HCl, pepsinogène et facteur intrinsèque, et assure le brassage du chyme.'
  },
  intestine: {
    kids: 'L’intestin grêle est un long tube sinueux qui absorbe les nutriments des aliments vers le sang.',
    pro: 'Intestin grêle (duodénum, jéjunum, iléon) : site majeur de la digestion et de l’absorption (~6 m in vivo).'
  },
  colon: {
    kids: 'Le gros intestin réabsorbe l’eau et abrite des milliards de bactéries utiles.',
    pro: 'Gros intestin (côlon) : réabsorption hydro-électrolytique et fermentation par le microbiote.'
  },
  pancreas: {
    kids: 'Le pancréas fabrique des sucs digestifs et de l’insuline pour réguler le sucre dans le sang.',
    pro: 'Glande amphicrine exocrine (enzymes acineuses) et endocrine (îlots de Langerhans : insuline, glucagon).'
  },
  kidney: {
    kids: 'Tes reins sont des filtres en forme de haricot qui nettoient le sang et fabriquent l’urine.',
    pro: 'Parenchyme rénal : ~1 million de néphrons par rein ; DFG ~120 mL/min ; rôles endocriniens (rénine, EPO, calcitriol).'
  },
  bladder: {
    kids: 'La vessie est un réservoir extensible qui garde l’urine jusqu’à ce que tu ailles aux toilettes.',
    pro: 'Vessie et urètre : muscle lisse détrusor d’une capacité physiologique de ~400–600 mL.'
  },
  spleen: {
    kids: 'La rate filtre le sang et aide ton système immunitaire à combattre les microbes.',
    pro: 'Organe lymphoïde secondaire : pulpe rouge (érythrolyse) et pulpe blanche (immunité adaptative).'
  },
  eye: {
    kids: 'Une partie de ton œil — la caméra de ton corps qui focalise la lumière pour envoyer des images au cerveau !',
    pro: 'Structure oculaire. Corréler avec l’axe optique (cornée → cristallin → rétine) et l’orbite.'
  },
  pupil: {
    kids: 'Le cristallin est situé juste derrière la pupille et change de forme pour faire la mise au point de près ou de loin.',
    pro: 'Cristallin et fibres zonulaires ; accommodation via le muscle ciliaire (son opacification est la cataracte).'
  },
  lip: {
    kids: 'Tes lèvres t’aident à parler, manger et sourire. Elles sont rosées grâce aux nombreux petits vaisseaux sanguins.',
    pro: 'Lèvres : muscle orbiculaire de la bouche recouvert d’un épithélium vermillon fin richement vascularisé.'
  },
  gland: {
    kids: 'Les glandes fabriquent des liquides spéciaux ou des hormones indispensables à ton corps.',
    pro: 'Tissu glandulaire exocrine ou endocrine ; corréler avec le produit de sécrétion et la régulation neurovasculaire.'
  },
  tongue: {
    kids: 'Ce tissu souple t’aide à goûter les saveurs, mâcher, avaler et parler.',
    pro: 'Tissu mou oral ; innervation motrice et sensitive/gustative par les nerfs crâniens V3, VII, IX et XII.'
  },
  mesentery: {
    kids: 'Ce fin feuillet maintient tes intestins en place et transporte leurs vaisseaux sanguins.',
    pro: 'Repli péritonéal suspendant le tube digestif et véhiculant les vaisseaux, nerfs et lymphatiques mésentériques.'
  },
  reproductive: {
    kids: 'Fait partie du système reproducteur — les organes qui fabriquent des hormones et permettent d’avoir des enfants à l’âge adulte.',
    pro: 'Structure de l’appareil reproducteur et endocrinien (modèles de référence NIH HuBMAP et BodyParts3D).'
  },
  organ: {
    kids: 'C’est l’un des organes internes de ton corps, qui travaille en équipe avec les autres pour te garder en bonne santé.',
    pro: 'Structure anatomique issue du Foundational Model of Anatomy (FMA).'
  }
};

export const QUIZ_QUESTIONS_FR = [
  {
    id: 'q1',
    targetPartId: 'heart',
    question: 'Quel organe musculaire bat environ 100 000 fois par jour et possède 4 cavités qui pompent le sang dans tout ton corps ?',
    options: ['Le Cœur', 'L’Estomac', 'Les Reins', 'La Cage Thoracique'],
    correctIndex: 0,
    explanation: 'Bravo ! Ton cœur est une pompe musculaire à 4 cavités de la taille de ton poing qui propulse environ 7 570 litres de sang par jour.'
  },
  {
    id: 'q2',
    targetPartId: 'aorta',
    question: 'Dans la vue du flux sanguin, comment s’appelle la plus grande artère ROUGE qui sort du sommet du cœur comme une autoroute ?',
    options: ['Le Nerf Sciatique', 'L’Aorte', 'La Trachée', 'La Patella (Rotule)'],
    correctIndex: 1,
    explanation: 'Exactement ! L’aorte est la plus grande artère élastique du corps humain et distribue le sang oxygéné issu du ventricule gauche.'
  },
  {
    id: 'q3',
    targetPartId: 'vena-cava',
    question: 'Pourquoi les veines caves supérieure et inférieure ainsi que les autres veines sont-elles représentées en BLEU avec un flux retournant au cœur ?',
    options: [
      'Parce que le sang à l’intérieur est gelé',
      'Parce que les veines ramènent le sang qui a déjà livré son oxygène vers le cœur et les poumons',
      'Parce que les veines ne transportent que de l’eau',
      'Parce que les veines poussent le sang vers le bout des doigts'
    ],
    correctIndex: 1,
    explanation: 'Très bien ! Les artères (rouges) partent du cœur avec du sang riche en oxygène, tandis que les veines (bleues) ramènent le sang au cœur et aux poumons.'
  },
  {
    id: 'q4',
    targetPartId: 'femur-tibia-fibula',
    question: 'Quel os de ta cuisse est le plus long, le plus lourd et le plus solide de tout le corps humain ?',
    options: ['Le Radius', 'La Clavicule', 'Le Fémur', 'Le Sternum'],
    correctIndex: 2,
    explanation: 'Excellent ! Le fémur (os de la cuisse) représente environ le quart de ta taille et est plus résistant que le béton !'
  },
  {
    id: 'q5',
    targetPartId: 'liver',
    question: 'Quel organe situé sous tes côtes droites réalise plus de 500 fonctions chimiques, produit la bile et peut se régénérer ?',
    options: ['Le Foie', 'Le Muscle Deltoïde', 'La Rotule', 'La Veine Jugulaire'],
    correctIndex: 0,
    explanation: 'Génial ! Le foie est l’usine chimique et le filtre de ton corps, et c’est le seul organe interne capable de se régénérer !'
  },
  {
    id: 'q6',
    targetPartId: 'brain',
    question: 'Quel organe protégé par le casque du crâne utilise 86 milliards de neurones pour commander tes pensées, ta mémoire et tes sens ?',
    options: ['Les Poumons', 'Le Cerveau', 'Le Bassin', 'Le Biceps'],
    correctIndex: 1,
    explanation: 'Parfait ! Ton cerveau est le centre de commande du corps et envoie des signaux électriques jusqu’à 430 km/h.'
  }
];
