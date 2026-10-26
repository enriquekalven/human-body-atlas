/**
 * German (de) translations for:
 *  - All 27 curated ANATOMY_PARTS (Kids Explorer & Clinical Pro modes)
 *  - All 37 TISSUE_INFO categories
 *  - All 6 ANATOMY_QUIZ_QUESTIONS
 */

export const PARTS_DE = {
  'integumentary-skin': {
    name: 'Haut (Integumentsystem / Cutis)',
    systemLabel: 'Integumentsystem (Hautsystem)',
    kids: {
      badge: '🛡️ Der selbstheilende Raumanzug deines Körpers!',
      pronounce: 'HAUT (Epi-DER-mis)',
      summary: 'Deine Haut ist tatsächlich das größte Organ deines gesamten Körpers! Sie funktioniert wie ein wasserfester, sich selbst reparierender Schutzanzug, der Keime draußen hält, Wasser im Körper bewahrt und dich beim Rennen durch Schwitzen abkühlt.',
      whyYouNeedIt: 'Ohne Haut könnten Bakterien leicht eindringen, und du könntest keine warme Umarmung, keine kühle Brise und kein Kitzeln spüren!',
      funFacts: [
        'In jeder einzelnen Minute verlierst du etwa 30.000 bis 40.000 abgestorbene Hautzellen — und direkt darunter wachsen sofort neue nach!',
        'Deine Haut besitzt Millionen winziger Schweißdrüsen, die wie eine eingebaute Klimaanlage arbeiten.',
        'Am dicksten ist deine Haut unter den Fußsohlen, am dünnsten auf deinen Augenlidern!'
      ],
      quickStats: [
        { label: 'Hauptschichten', value: '3 (Oberhaut, Lederhaut, Unterhaut)' },
        { label: 'Erneuerung', value: 'Neue Oberhaut alle ~28 Tage' },
        { label: 'Tastsensoren', value: 'Millionen feiner Nervenenden' },
        { label: 'Superkraft', value: 'Bildet mit Sonnenlicht Vitamin D!' }
      ]
    },
    pro: {
      summary: 'Mehrschichtiges Barriereorgan, bestehend aus verhorntem mehrschichtigem Plattenepithel (Epidermis), vaskularisierter kollagenreicher Dermis (Corium) und fettreicher Subkutis (Hypodermis).',
      bloodSupply: 'Tiefe dermale und subpapilläre Gefäßplexus aus muskulokutanen und fasziokutanen Perforansarterien',
      venousDrainage: 'Oberflächliche und tiefe dermale Venenplexus mit Abfluss in das subkutane Venennetz',
      innervation: 'Kutane sensible Äste (Meissner-, Vater-Pacini-, Merkel- und Ruffini-Körperchen sowie freie Nervenendigungen); sympathisch-cholinerge sudomotorische Fasern',
      originInsertion: 'Geht an den mukokutanen Übergängen in Schleimhaut über; über Retinacula cutis an der tiefen Faszie verankert',
      metrics: [
        { label: 'Körperoberfläche', value: '1,5 – 2,0 m² (Erwachsener)' },
        { label: 'Gesamtmasse', value: '~15 % – 16 % des Körpergewichts' },
        { label: 'Schichtdicke', value: '0,5 mm (Augenlid) bis 4,0 mm (Ferse)' },
        { label: 'Dermaler Blutfluss', value: '~250 mL/min in Ruhe (bis 6–8 L/min bei Hyperthermie)' }
      ],
      clinicalPearls: 'Das Ausmaß thermischer Verbrennungen wird nach der Neuner-Regel nach Wallace (KOF %) geschätzt. Arteriovenöse Anastomosen (Glomusorgane) der Akren regulieren die Kerntemperatur.'
    }
  },
  brain: {
    name: 'Gehirn / Enzephalon (Großhirn, Kleinhirn und Hirnstamm)',
    systemLabel: 'Nervensystem & Organe',
    kids: {
      badge: '🧠 Die Kommandozentrale deines Körpers!',
      pronounce: 'Ge-HIRN (En-ze-fa-LON)',
      summary: 'Dein Gehirn ist der Chef deines ganzen Körpers! Schneller als jeder Supercomputer lässt es dich denken, träumen, spielen, dich an deine Freunde erinnern und steuert ganz automatisch deine Atmung und deinen Herzschlag.',
      whyYouNeedIt: 'Jeder Gedanke, jede Bewegung und jeder Ton oder jede Farbe wird von rund 86 Milliarden winzigen Nervenzellen — den Neuronen — verarbeitet!',
      funFacts: [
        'Wenn du wach bist, erzeugt dein Gehirn genug Strom, um eine kleine LED-Lampe zum Leuchten zu bringen!',
        'Die linke Gehirnhälfte steuert die rechte Körperseite, und die rechte Gehirnhälfte steuert die linke Seite!',
        'Obwohl das Gehirn jeden Schmerz im Körper wahrnimmt, besitzt das Hirngewebe selbst keine Schmerzrezeptoren.'
      ],
      quickStats: [
        { label: 'Nervenzellen', value: '~86 Milliarden Neuronen' },
        { label: 'Signalgeschwindigkeit', value: 'Bis zu 430 km/h' },
        { label: 'Energiebedarf', value: 'Verbraucht ~20 % des gesamten Sauerstoffs' },
        { label: 'Konsistenz & Schutz', value: 'Weich wie Pudding, geschützt vom Schädel' }
      ]
    },
    pro: {
      summary: 'Übergeordnetes Integrationszentrum des Zentralnervensystems (ZNS), gegliedert in Telencephalon (Großhirnhemisphären), Diencephalon, Mesencephalon, Pons, Medulla oblongata und Cerebellum.',
      bloodSupply: 'Vorderer Hirnkreislauf (Aa. carotides internae) und hinterer Kreislauf (vertebrobasiläres System), anastomosiert im Circulus arteriosus cerebri (Willisii)',
      venousDrainage: 'Oberflächliche und tiefe Hirnvenen mit Abfluss über die Sinus durae matris in die Vv. jugulares internae',
      innervation: 'Ursprung der Hirnnerven I–XII; sensible Innervation der Dura mater durch Rr. meningei aus N. trigeminus (HN V), N. vagus (HN X) und oberen Zervikalnerven',
      originInsertion: 'Schwebend im Liquor cerebrospinalis innerhalb der Schädelhöhle, kompartimentiert durch Duraduplikaturen (Falx cerebri, Tentorium cerebelli)',
      metrics: [
        { label: 'Masse (Erwachsener)', value: '1.300 – 1.400 g (~2 % des Körpergewichts)' },
        { label: 'Zerebraler Blutfluss', value: '~50 mL / 100 g / min (~750 mL/min gesamt)' },
        { label: 'Liquorvolumen', value: '~150 mL (~500 mL/Tag Produktion im Plexus choroideus)' },
        { label: 'Intrakranieller Druck', value: '7 – 15 mmHg (Erwachsener im Liegen)' }
      ],
      clinicalPearls: 'Nach der Monro-Kellie-Doktrin ist das intrakranielle Volumen konstant; Raumforderungen erhöhen den ICP mit Gefahr der unkalen oder tonsillären Einklemmung. Ein Verschluss der A. cerebri media (ACM) verursacht eine brachiofazial betonte kontralaterale Hemiparese und Aphasie (dominante Hemisphäre).'
    }
  },
  heart: {
    name: 'Herz (Vierkammerige Muskelpumpe)',
    systemLabel: 'Herz-Kreislauf-System',
    kids: {
      badge: '❤️ Die unermüdliche Superpumpe!',
      pronounce: 'HERZ (Kar-di-AL)',
      summary: 'Dein Herz ist ein superstarker Muskel, etwa so groß wie deine geschlossene Faust! Es schlägt rund 100.000-mal am Tag, um frisches, sauerstoffreiches Blut zu deinem Gehirn, deinen Muskeln und bis in die Zehenspitzen zu pumpen.',
      whyYouNeedIt: 'Das Blut bringt Sauerstoff und Energie zu jeder Zelle. Dein Herz hält den Blutkreislauf rund um die Uhr in Bewegung — sogar wenn du schläfst!',
      funFacts: [
        'Dein Herz hat 4 Räume (Vorhöfe und Kammern) mit Einwegtüren (Herzklappen), die beim Schließen das „Bumm-Bumm“-Geräusch machen!',
        'An einem einzigen Tag pumpt dein Herz rund 7.570 Liter Blut!',
        'Wenn du rennst oder Sport treibst, schlägt dein Herz schneller, um deinen arbeitenden Muskeln extra viel Sauerstoff zu liefern.'
      ],
      quickStats: [
        { label: 'Größe', value: 'Etwa so groß wie deine Faust' },
        { label: 'Schläge pro Tag', value: '~100.000 Herzschläge' },
        { label: 'Herzhöhlen', value: '4 (rechter/linker Vorhof & rechte/linke Kammer)' },
        { label: 'Pumpleistung', value: '~5 Liter Blut pro Minute' }
      ]
    },
    pro: {
      summary: 'Vierkammerige fibromuskuläre Hohlorganpumpe im mittleren Mediastinum innerhalb des Perikardsacks, die simultan den Niederdruck-Lungenkreislauf und den Hochdruck-Körperkreislauf antreibt.',
      bloodSupply: 'A. coronaria sinistra (RIVA/LAD und RCX) sowie A. coronaria dextra (RCA) aus den Sinus aortae (Valsalvae); Koronarperfusion überwiegend diastolisch',
      venousDrainage: 'Sinus coronarius (V. cardiaca magna, media und parva) sowie Vv. cardiacae anteriores mit direkter Mündung in das rechte Atrium',
      innervation: 'Autonomes Erregungsleitungssystem (Sinusknoten → AV-Knoten → His-Bündel → Tawara-Schenkel → Purkinje-Fasern), moduliert durch den Plexus cardiacus (N. vagus HN X parasympathisch; Th1–Th4 sympathisch)',
      originInsertion: 'Herzspitze (Apex cordis) nach vorne-unten-links gerichtet (5. ICR in der linken Medioklavikularlinie); Herzbasis hauptsächlich vom linken Atrium gebildet (Th6–Th9)',
      metrics: [
        { label: 'Herzzeitvolumen (HZV)', value: '~5,0 L/min (Schlagvolumen ~70 mL × 72/min)' },
        { label: 'Ejektionsfraktion (LVEF)', value: '55 % – 70 % (normal)' },
        { label: 'Intrakardiale Drücke', value: 'LV: 120/8 mmHg | RV: 25/4 mmHg' },
        { label: 'Masse (Erwachsener)', value: '250 – 350 g' }
      ],
      clinicalPearls: 'Ein Verschluss des R. interventricularis anterior (RIVA/LAD) führt zum Vorderwand- und Septuminfarkt (ST-Hebung in V1–V4). Ein RCA-Verschluss verursacht einen Hinterwandinfarkt (II, III, aVF) mit Risiko von AV-Blockierungen.'
    }
  },
  lungs: {
    name: 'Lunge (Rechter und Linker Lungenflügel)',
    systemLabel: 'Atmungssystem (Respirationstrakt)',
    kids: {
      badge: '🫁 Schwammige Sauerstoff-Ballons!',
      pronounce: 'LUN-ge (Pul-mo-NAL)',
      summary: 'Deine beiden Lungenflügel füllen deinen Brustkorb wie weiche, schwammige Ballons! Beim Einatmen holen sie frischen Sauerstoff aus der Luft in dein Blut; beim Ausatmen blasen sie verbrauchte Luft (Kohlendioxid) wieder hinaus.',
      whyYouNeedIt: 'Jede Zelle im Körper braucht Sauerstoff, um Energie zu gewinnen. Lunge und Herz arbeiten als Team zusammen, um den ganzen Körper zu versorgen!',
      funFacts: [
        'Dein linker Lungenflügel ist etwas kleiner als der rechte, damit genug Platz für dein Herz bleibt!',
        'In deiner Lunge befinden sich rund 300 Millionen winzige Luftbläschen (Alveolen) — ausgebreitet wären sie so groß wie ein ganzer Tennisplatz!',
        'Die Lunge ist das einzige Organ im menschlichen Körper, das auf Wasser schwimmen kann!'
      ],
      quickStats: [
        { label: 'Atemzüge pro Tag', value: '~20.000 Atemzüge' },
        { label: 'Lungenbläschen', value: '~300 – 500 Millionen Alveolen' },
        { label: 'Lungenlappen', value: '3 rechts, 2 links' },
        { label: 'Austauschfläche', value: 'Groß wie ein Tennisplatz!' }
      ]
    },
    pro: {
      summary: 'Paarige Organe des Gasaustauschs in den Pleurahöhlen. Die rechte Lunge besitzt 3 Lappen (Ober-, Mittel-, Unterlappen, getrennt durch Fissura obliqua und horizontalis), die linke Lunge 2 Lappen (Oberlappen inkl. Incisura cardiaca und Lingula sowie Unterlappen).',
      bloodSupply: 'Doppelte Gefäßversorgung: Vasa publica (Aa. pulmonales mit desoxygeniertem Blut zum Gasaustausch) und Vasa privata (Rr. bronchiales aus der Aorta thoracica zur Eigenversorgung)',
      venousDrainage: 'Vier Vv. pulmonales (oxygeniertes Blut zum linken Atrium) und Vv. bronchiales (in das V.-azygos-/hemiazygos-System)',
      innervation: 'Plexus pulmonalis: parasympathische Vagusfasern (Bronchokonstriktion, Sekretomotorik) und sympathische Fasern aus Th2–Th5 (Bronchodilatation)',
      originInsertion: 'Lungenspitze (Apex pulmonis) überragt die mediale Klavikula um ~2,5 cm; Basis pulmonis ruht auf den Zwerchfellkuppeln',
      metrics: [
        { label: 'Totalkapazität (TLC)', value: '~6,0 L (Atemzugvolumen ~500 mL)' },
        { label: 'Alveoläre Oberfläche', value: '~70 – 85 m²' },
        { label: 'Blut-Luft-Schranke', value: '0,2 – 0,5 µm' },
        { label: 'Ventilations-Perfusions-Quotient', value: '~0,8 im Mittel (apikal höher als basal)' }
      ],
      clinicalPearls: 'Der rechte Hauptbronchus verläuft steiler, ist kürzer und weitlumiger als der linke; aspirierte Fremdkörper und zu tief vorgeschobene Endotrachealtuben gelangen daher bevorzugt in das rechte Bronchialsystem.'
    }
  },
  liver: {
    name: 'Leber und Gallenblase',
    systemLabel: 'Verdauungs- und Stoffwechselsystem',
    kids: {
      badge: '🧪 Die Chemiefabrik und der Superfilter deines Körpers!',
      pronounce: 'LE-ber und GAL-len-bla-se',
      summary: 'Gut geschützt unter deinen rechten Rippen liegt die Leber — das größte Multitalent im Körper! Sie reinigt das Blut, speichert Zuckerenergie, bildet grüne Gallenflüssigkeit für die Fettverdauung und stellt Proteine her, die Blutungen bei Schürfwunden stoppen.',
      whyYouNeedIt: 'Alles, was du isst und trinkst, durchläuft den Sicherheitscheck der Leber, damit dein Körper saubere Energie und Vitamine bekommt!',
      funFacts: [
        'Deine Leber erledigt über 500 verschiedene chemische Aufgaben gleichzeitig!',
        'Unglaubliche Superkraft: Die Leber ist das einzige innere Organ, das von selbst wieder nachwachsen (regenerieren) kann!',
        'In jedem Moment befinden sich etwa 13 % deines gesamten Blutes in der Leber.'
      ],
      quickStats: [
        { label: 'Aufgaben', value: 'Über 500 lebenswichtige Funktionen' },
        { label: 'Gallenproduktion', value: '600 – 1.000 mL pro Tag' },
        { label: 'Superkraft', value: 'Kann sich selbst regenerieren!' },
        { label: 'Gewicht', value: 'Schwerstes inneres Organ (~1,5 kg)' }
      ]
    },
    pro: {
      summary: 'Größte Anhangsdrüse des Darmtrakts und zentrales Stoffwechselorgan im rechten Hypochondrium und Epigastrium, funktionell gegliedert in 8 eigenständige Lebersegmente nach Couinaud.',
      bloodSupply: 'Duale Blutversorgung: V. portae hepatis (~75 % des Blutflusses, nährstoffreiches splanchnisches Blut) und A. hepatica propria (~25 %, sauerstoffreiches Blut aus dem Truncus coeliacus)',
      venousDrainage: 'Zentralvenen der Leberläppchen → Vv. hepaticae (dextra, intermedia, sinistra) → direkt in die V. cava inferior (VCI)',
      innervation: 'Plexus hepaticus (Sympathikus Th7–Th10 und N. vagus); Kapselspannungsschmerz (Glisson-Kapsel) strahlt über den N. phrenicus (C3–C5) in die rechte Schulter aus',
      originInsertion: 'Über Lig. falciforme, Lig. coronarium und Ligg. triangularia am Zwerchfell befestigt; Glisson-Trias verläuft im Lig. hepatoduodenale',
      metrics: [
        { label: 'Masse (Erwachsener)', value: '1.400 – 1.600 g (~2,5 % des Körpergewichts)' },
        { label: 'Hepatischer Blutfluss', value: '~1.500 mL/min (~25 % des Herzzeitvolumens)' },
        { label: 'Gallensekretion', value: '600 – 1.000 mL/Tag' },
        { label: 'Normaler Pfortaderdruck', value: '5 – 10 mmHg (> 12 mmHg = portale Hypertension)' }
      ],
      clinicalPearls: 'Beim Pringle-Manöver wird das Lig. hepatoduodenale (Glisson-Trias: A. hepatica propria, V. portae, Ductus choledochus) über das Foramen epiploicum (Winslow) abgeklemmt, um schwere Leberblutungen zu kontrollieren.'
    }
  },
  stomach: {
    name: 'Magen (Gaster)',
    systemLabel: 'Verdauungssystem',
    kids: {
      badge: '🥣 Der kräftige Säure-Mixer für dein Essen!',
      pronounce: 'MA-gen (GAS-ter)',
      summary: 'Dein Magen ist ein dehnbarer, muskulöser Beutel in Form des Buchstabens „J“! Wenn du Essen hinunterschluckst, knetet und vermischt der Magen es mit starker Magensäure, bis ein nahrhafter Brei entsteht.',
      whyYouNeedIt: 'Er zerkleinert große Bissen in winzige Nährstoffteilchen und macht Bakterien unschädlich, die mit dem Essen hineingelangt sind!',
      funFacts: [
        'Die Magensäure ist extrem stark, aber eine spezielle Schleimschicht schützt die Magenwand davor, sich selbst zu verdauen!',
        'Wenn dein Magen knurrt, hörst du die Magenmuskeln, die Luft und Flüssigkeit hin und her bewegen.',
        'Der Magen eines Erwachsenen kann sich so weit dehnen, dass er fast 1,5 Liter Essen und Flüssigkeit fasst!'
      ],
      quickStats: [
        { label: 'Form', value: 'Dehnbarer Beutel in „J“-Form' },
        { label: 'Muskelschichten', value: '3 Schichten glatter Muskulatur' },
        { label: 'Säuregrad', value: 'pH 1,5 – 3,5 (Salzsäure)' },
        { label: 'Verweildauer', value: '2 – 4 Stunden pro Mahlzeit' }
      ]
    },
    pro: {
      summary: 'Intraperitoneale, J-förmige muskuläre Erweiterung des Vorderdarms, gegliedert in Cardia, Fundus, Corpus und Pars pylorica (Antrum und Canalis pyloricus), mit dreischichtiger Tunica muscularis (Fibrae obliquae, Stratum circulare, Stratum longitudinale).',
      bloodSupply: 'Gefäßarkaden aus dem Truncus coeliacus: Aa. gastricae sinistra und dextra (kleine Kurvatur), Aa. gastroomentales sinistra und dextra (große Kurvatur) sowie Aa. gastricae breves (Fundus)',
      venousDrainage: 'Begleitende Venen mit direktem oder indirektem Abfluss (über V. splenica und V. mesenterica superior) in die V. portae hepatis',
      innervation: 'Trunci vagales anterior und posterior (HN X: Säuresekretion und Motilität) sowie N. splanchnicus major (Th5–Th9 über den Plexus coeliacus)',
      originInsertion: 'Zwischen unterem Ösophagussphinkter (Th11) und Pylorus (L1) gelegen; über Omentum minus und Omentum majus fixiert',
      metrics: [
        { label: 'Luminaler pH-Wert', value: '1,5 – 3,5 (HCl-Sekretion der Belegzellen)' },
        { label: 'Magensaftproduktion', value: '1,5 – 2,5 L/Tag' },
        { label: 'Fassungsvermögen', value: '1,0 – 1,5 L (~50 mL nüchtern)' },
        { label: 'Hauptsekrete', value: 'HCl, Intrinsic-Faktor, Pepsinogen, Gastrin, Ghrelin' }
      ],
      clinicalPearls: 'Ein Ulcus duodeni der Bulbushinterwand kann die A. gastroduodenalis arrodieren und zu einer lebensbedrohlichen oberen GI-Blutung führen. Ein Verlust der Belegzellen führt durch Mangel an Intrinsic-Faktor zur perniziösen Anämie (Vitamin-B12-Mangel).'
    }
  },
  kidneys: {
    name: 'Nieren (Rechte und Linke Niere)',
    systemLabel: 'Harnsystem (Renales System)',
    kids: {
      badge: '🫘 Die bohnenförmigen Super-Blutfilter!',
      pronounce: 'NIE-ren (Re-NAL)',
      summary: 'Hinten im unteren Rücken sitzen zwei bohnenförmige Organe: deine Nieren! Sie waschen und filtern dein gesamtes Blut dutzende Male am Tag, behalten wichtiges Wasser und Mineralstoffe zurück und machen aus Abfallstoffen Pipi (Urin).',
      whyYouNeedIt: 'Sie halten den Wasser- und Salzhaushalt im Körper im perfekten Gleichgewicht und helfen, deinen Blutdruck zu steuern!',
      funFacts: [
        'In jeder Niere arbeiten rund 1 Million mikroskopisch kleine Filter, die Nephrone heißen!',
        'Beide Nieren zusammen filtern jeden Tag etwa 180 Liter Flüssigkeit!',
        'Wie das Wasserrecyclingsystem einer Raumstation gewinnen deine Nieren 99 % des gefilterten Wassers für das Blut zurück.'
      ],
      quickStats: [
        { label: 'Mikrofilter', value: '~1 Million Nephrone pro Niere' },
        { label: 'Blutwäsche', value: 'Filtert das gesamte Blut ~40-mal am Tag' },
        { label: 'Größe', value: 'Etwa wie eine Computermaus (~11 cm)' },
        { label: 'Lage', value: 'Geschützt unter den unteren Rückenrippen' }
      ]
    },
    pro: {
      summary: 'Paarige bohnenförmige, primär retroperitoneale Organe (Th12–L3; rechte Niere durch die Leber etwas tiefer stehend) zur Regulation des Wasser-, Elektrolyt- und Säure-Basen-Haushalts, der Ausscheidung harnpflichtiger Substanzen und der endokrinen Synthese (Renin, Erythropoetin, Calcitriol).',
      bloodSupply: 'Aa. renales dextra und sinistra (aus der Aorta abdominalis auf Höhe L1–L2) → Aa. segmentales → interlobares → arcuatae → corticales radiatae → Vasa afferentia → Glomeruli',
      venousDrainage: 'Vv. renales in die VCI (die längere linke Nierenvene kreuzt ventral der Aorta unterhalb der AMS und nimmt die linke V. testicularis/ovarica und V. suprarenalis auf)',
      innervation: 'Plexus renalis (sympathische Fasern aus Th10–L1 regulieren Reninfreisetzung und Gefäßtonus; parasympathische Vagusfasern)',
      originInsertion: 'Umgeben von Capsula fibrosa, Capsula adiposa und Fascia renalis (Gerota); Hilumanordnung von ventral nach dorsal: Vene – Arterie – Nierenbecken/Ureter (V-A-U)',
      metrics: [
        { label: 'Renaler Blutfluss (RBF)', value: '~1,1 – 1,2 L/min (20 %–25 % des HZV)' },
        { label: 'Glomeruläre Filtrationsrate', value: '90 – 120 mL/min/1,73 m² (~180 L/Tag Primärharn)' },
        { label: 'Nephronanzahl', value: '~900.000 – 1,2 Millionen pro Niere' },
        { label: 'Filtrationsfraktion', value: '~20 % (GFR / renaler Plasmafluss)' }
      ],
      clinicalPearls: 'Beim Nussknacker-Syndrom wird die linke V. renalis in der aortomesenterialen Zange (zwischen A. mesenterica superior und Aorta abdominalis) komprimiert, was zu Hämaturie, linksseitigem Flankenschmerz und einer Varikozele links führen kann.'
    }
  },
  intestines: {
    name: 'Dünndarm und Dickdarm',
    systemLabel: 'Verdauungssystem',
    kids: {
      badge: '🎢 Die 7 Meter lange Nährstoff-Achterbahn!',
      pronounce: 'DÜNN-darm und DICK-darm',
      summary: 'Ordentlich zusammengefaltet in deinem Bauch liegt ein superlanges Rohr! Zuerst nimmt der Dünndarm alle Vitamine, Proteine und Energie aus dem Essen in dein Blut auf. Danach holt der Dickdarm das restliche Wasser zurück.',
      whyYouNeedIt: 'Ohne deinen Darm, der die Nährstoffe ins Blut aufnimmt, würde dir das beste Essen überhaupt keine Energie geben!',
      funFacts: [
        'Würde man deinen Dünn- und Dickdarm gerade auslegen, wären sie über 7 Meter lang — höher als eine ausgewachsene Giraffe!',
        'Die Innenseite des Dünndarms ist mit Millionen winziger fingerförmiger Ausstülpungen (Darmzotten) bedeckt.',
        'Im Dickdarm leben Billionen nützlicher Bakterien, die dir helfen, wichtige Vitamine herzustellen!'
      ],
      quickStats: [
        { label: 'Gesamtlänge', value: '~7 Meter aufgerollt im Bauch!' },
        { label: 'Dünndarm', value: 'Zwölffingerdarm, Leerdarm & Krummdarm' },
        { label: 'Dickdarm', value: 'Gewinnt Wasser und Mineralstoffe zurück' },
        { label: 'Bewegung', value: 'Muskelwellen (Peristaltik)' }
      ]
    },
    pro: {
      summary: 'Aus Mittel- und Hinterdarm hervorgehendes Darmrohr, bestehend aus Dünndarm (Duodenum, Jejunum, Ileum; ~5–6 m in vivo) und Dickdarm (Caecum mit Appendix vermiformis, Colon ascendens, transversum, descendens, sigmoideum und Rectum; ~1,5 m).',
      bloodSupply: 'A. mesenterica superior (AMS: distales Duodenum bis proximale 2/3 des Colon transversum) und A. mesenterica inferior (AMI: distales Drittel des Colon transversum bis oberes Rektum), verbunden über die Riolan-Anastomose und die Marginalarterie nach Drummond',
      venousDrainage: 'Vv. mesentericae superior und inferior mit Zusammenfluss über die V. splenica zur V. portae hepatis',
      innervation: 'Enterisches Nervensystem (Plexus myentericus Auerbach und Plexus submucosus Meissner), moduliert durch N. vagus (HN X), Nn. splanchnici pelvici (S2–S4) und Sympathikus',
      originInsertion: 'Über Mesenterium, Mesocolon transversum und Mesocolon sigmoideum an der hinteren Bauchwand aufgehängt',
      metrics: [
        { label: 'Resorptionsoberfläche', value: '~250 m² (Kerckring-Falten, Zotten und Mikrovilli)' },
        { label: 'Flüssigkeitsresorption', value: '~7,5 L/Tag (Dünndarm); ~1,4 L/Tag (Kolon)' },
        { label: 'Spezifische Resorption', value: 'Eisen (Duodenum), Folat (Jejunum), Vitamin B12 & Gallensäuren (terminales Ileum)' },
        { label: 'Wasserscheidenzonen', value: 'linke Kolonflexur (Griffith-Punkt) & rektosigmoidaler Übergang (Sudeck-Punkt)' }
      ],
      clinicalPearls: 'Die Flexura coli sinistra (Griffith-Punkt, Grenze zwischen AMS und AMI) ist als vaskuläre Wasserscheide bei systemischer Hypoperfusion besonders anfällig für eine nicht-okklusive ischämische Kolitis.'
    }
  },
  aorta: {
    name: 'Aorta / Hauptschlagader (Aortenbogen, Brust- und Bauchaorta)',
    systemLabel: 'Herz-Kreislauf- / Arteriensystem',
    kids: {
      badge: '🛣️ Die größte Blut-Autobahn deines Körpers!',
      pronounce: 'A-OR-ta (Haupt-SCHLAG-a-der)',
      summary: 'Die Aorta (Hauptschlagader) ist die größte und stärkste Arterie in deinem ganzen Körper! Dick wie ein Gartenschlauch entspringt sie oben am Herzen, macht einen großen Bogen und leitet frisches, sauerstoffreiches rotes Blut in alle Körperregionen.',
      whyYouNeedIt: 'Jeder einzelne Tropfen sauerstoffreiches Blut aus der linken Herzkammer fließt zuerst durch die Aorta, bevor er zu Gehirn, Armen und Beinen abzweigt!',
      funFacts: [
        'Die Wand der Aorta ist elastisch wie ein starkes Gummiband und dehnt sich bei jedem Herzschlag mit!',
        'Drei große „Autobahnausfahrten“ oben am Aortenbogen schicken das Blut direkt zum Kopf und in beide Arme.',
        'Im Laufe deines Lebens transportiert deine Aorta genug Blut, um hunderte olympische Schwimmbecken zu füllen!'
      ],
      quickStats: [
        { label: 'Gefäßtyp', value: 'Größte elastische Arterie (rot = O₂-reich)' },
        { label: 'Durchmesser', value: '~2,5 – 3 cm (wie ein Gartenschlauch)' },
        { label: 'Ursprung', value: 'Linke Herzkammer (Linker Ventrikel)' },
        { label: 'Strömung', value: 'Schnellster Blutfluss im Körper!' }
      ]
    },
    pro: {
      summary: 'Größte elastische Arterie des großen Kreislaufs aus dem linken Ventrikel. Die elastischen Lamellen der Tunica media bewirken die Windkesselfunktion und wandeln den pulsatilen systolischen Auswurf in einen kontinuierlichen peripheren Blutstrom um.',
      bloodSupply: 'Inneres Drittel durch luminale Diffusion; äußere Media und Adventitia durch Vasa vasorum versorgt',
      venousDrainage: 'Venae vasorum mit Abfluss in das Azygos-System und die Lumbalvenen',
      innervation: 'Barorezeptoren des Aortenbogens projizieren über den N. vagus (HN X) zum Nucleus tractus solitarii (NTS)',
      originInsertion: 'Aorta ascendens → Arcus aortae (Th4) → Hiatus aorticus des Zwerchfells (Th12) → Bifurkation in die Aa. iliacae communes auf Höhe L4',
      metrics: [
        { label: 'Normaler Durchmesser', value: 'Ascendens ≤ 3,5 cm | Abdominalis ≤ 2,0 cm (≥ 3,0 cm = Aneurysma)' },
        { label: 'Systolische Spitzengeschw.', value: '100 – 140 cm/s' },
        { label: 'Abgänge des Aortenbogens', value: '1. Truncus brachiocephalicus, 2. A. carotis communis sin., 3. A. subclavia sin.' },
        { label: 'Unpaare Viszeraläste', value: 'Truncus coeliacus (Th12), AMS (L1), AMI (L3)' }
      ],
      clinicalPearls: 'Traumatische Dezelerationsrupturen der Aorta ereignen sich typischerweise am Aortenisthmus (unmittelbar distal des Abgangs der linken A. subclavia am Lig. arteriosum) am Übergang vom mobilen Bogen zur fixierten Aorta descendens.'
    }
  },
  'vena-cava': {
    name: 'Obere und Untere Hohlvene (Vena cava superior & inferior)',
    systemLabel: 'Herz-Kreislauf- / Venensystem',
    kids: {
      badge: '🔵 Die riesigen blauen Rückstrom-Tunnel zum Herzen!',
      pronounce: 'VE-na KA-va (Hohl-VE-ne)',
      summary: 'Nachdem dein Blut seinen Sauerstoff im Körper abgegeben hat, bringen die Venen es zurück zum Herzen! Die obere und untere Hohlvene sind die beiden größten Venen deines Körpers: Eine sammelt das Blut aus Kopf und Armen, die andere aus Bauch und Beinen.',
      whyYouNeedIt: 'Blut fließt im Kreis (deshalb heißt es Blutkreislauf!). Ohne diese großen Venen käme das Blut nicht zurück zu Herz und Lunge, um neuen Sauerstoff zu tanken!',
      funFacts: [
        'In Anatomie-Atlanten werden Venen blau dargestellt, um zu zeigen, dass das Blut darin seinen Sauerstoff bereits abgeliefert hat!',
        'Die untere Hohlvene ist die breiteste Vene des Körpers und verläuft rechts neben deiner Wirbelsäule nach oben.',
        'Jedes Mal, wenn du tief einatmest, hilft der Unterdruck im Brustkorb dabei, das Blut durch die Hohlvene zum Herzen zu saugen!'
      ],
      quickStats: [
        { label: 'Gefäßtyp', value: 'Größte Körpervenen (blau = Rückfluss)' },
        { label: 'Zwei Hauptstämme', value: 'Obere (VCS) & Untere Hohlvene (VCI)' },
        { label: 'Zielort', value: 'Rechter Vorhof des Herzens' },
        { label: 'Eigenschaft', value: 'Gleichmäßiger Fluss bei niedrigem Druck' }
      ]
    },
    pro: {
      summary: 'Hauptkapazitätsgefäße des systemischen Venensystems mit Mündung in das rechte Atrium. Die V. cava superior entsteht aus dem Zusammenfluss der Vv. brachiocephalicae; die V. cava inferior bildet sich auf Höhe L5 aus den Vv. iliacae communes.',
      bloodSupply: 'Adventitielle Vasa vasorum',
      venousDrainage: 'Die VCS nimmt auf Höhe Th4 die V. azygos auf; die VCI durchtritt das Centrum tendineum des Zwerchfells im Foramen venae cavae auf Höhe Th8',
      innervation: 'Autonome vasomotorische Fasern und Niederdruck-Dehnungsrezeptoren an der Einmündung in das rechte Atrium (Bainbridge-Reflex)',
      originInsertion: 'Klappenlose, großkalibrige Venenstämme rechts der Medianlinie',
      metrics: [
        { label: 'Zentraler Venendruck (ZVD)', value: '2 – 8 mmHg (rechtes Atrium / VCS)' },
        { label: 'Durchmesser der VCI', value: '1,5 – 2,5 cm (inspiratorischer Kollaps > 50 % normal)' },
        { label: 'Zwerchfelldurchtritt', value: 'Wirbelkörperhöhe Th8 (Foramen venae cavae)' },
        { label: 'Kollateralkreisläufe', value: 'Azygos-/Hemiazygos-System und Batson-Venenplexus' }
      ],
      clinicalPearls: 'Im späten dritten Schwangerschaftstrimenon kann der gravide Uterus in Rückenlage die V. cava inferior komprimieren (Vena-cava-Kompressionssyndrom mit Abfall des HZV), was durch Linksseitenlage sofort behoben wird.'
    }
  },
  'carotid-jugular': {
    name: 'Halsschlagadern und Drosselvenen (Karotiden & Jugularvenen)',
    systemLabel: 'Kopf-Hals-Gefäßsystem',
    kids: {
      badge: '💓 Die Express-Sauerstoffleitung für dein Gehirn!',
      pronounce: 'Ka-RO-tis und Ju-gu-LA-ris',
      summary: 'Auf beiden Seiten deines Halses verlaufen extrem wichtige Blutgefäße! Die Halsschlagadern oder Karotiden (rot) bringen sauerstoffreiches Blut nach oben zum Gehirn, während die Drosselvenen oder Jugularvenen (blau) das Blut vom Kopf zurück zum Herzen leiten.',
      whyYouNeedIt: 'Dein Gehirn macht niemals Pause und braucht in jeder einzelnen Sekunde eine schnelle, zuverlässige Versorgung mit frischem Sauerstoff!',
      funFacts: [
        'Wenn du zwei Finger sanft seitlich an deinen Hals unter den Kiefer legst, kannst du den kräftigen Puls deiner Halsschlagader spüren!',
        'Jede gemeinsame Halsschlagader teilt sich wie ein „Y“ in zwei Äste: einer versorgt das Gesicht, der andere das Gehirn.',
        'Genau an dieser Gabelung sitzen winzige Drucksensoren, die ständig deinen Blutdruck messen!'
      ],
      quickStats: [
        { label: 'Aufgabe Karotiden', value: 'Frisches O₂-reiches Blut zu Gehirn & Gesicht' },
        { label: 'Aufgabe Jugularvenen', value: 'Blut vom Kopf zurück zum Herzen' },
        { label: 'Pulspunkt', value: 'Seitlich am Hals leicht tastbar' },
        { label: 'Hirnversorgung', value: 'Liefert ~80 % des Blutes für das Gehirn' }
      ]
    },
    pro: {
      summary: 'Paariger neurovaskulärer Gefäß-Nerven-Strang innerhalb der Vagina carotica, bestehend aus A. carotis communis/interna, V. jugularis interna und N. vagus (HN X).',
      bloodSupply: 'A. carotis communis dextra (aus dem Truncus brachiocephalicus) und sinistra (direkt aus dem Aortenbogen); Karotisbifurkation auf Höhe C4 (Oberrand des Schildknorpels) in A. carotis interna (ACI) und externa (ACE)',
      venousDrainage: 'Die V. jugularis interna (VJI) beginnt am Foramen jugulare als Fortsetzung des Sinus sigmoideus und vereinigt sich im Venenwinkel (Pirogoff-Winkel) mit der V. subclavia zur V. brachiocephalica',
      innervation: 'Sinus caroticus (Barorezeptor, innerviert durch den R. sinus carotici des HN IX) und Glomus caroticum (Chemorezeptor, HN IX und HN X)',
      originInsertion: 'Topographie in der Vagina carotica: Arterie medial, VJI lateral, N. vagus dorsal im Zwischenraum',
      metrics: [
        { label: 'Bifurkationshöhe', value: 'C3–C4 (Oberrand der Cartilago thyroidea)' },
        { label: 'Jugularvenendruck (JVP)', value: 'Normal ≤ 3 cm über dem Angulus sterni bei 45° Oberkörperhochlagerung' },
        { label: 'Anteil der ACI', value: '~80 % der gesamten zerebralen Perfusion' },
        { label: 'ZVK-Zugang der Wahl', value: 'Rechte VJI (gerader Verlauf zur VCS, schont den Ductus thoracicus links)' }
      ],
      clinicalPearls: 'Die Karotisbifurkation ist Prädilektionsstelle atherosklerotischer Plaques und Stenosen (Hauptursache transitorischer ischämischer Attacken [TIA] und thromboembolischer Mediainfarkte).'
    }
  },
  'brachial-radial-vessels': {
    name: 'Schlüsselbein-, Oberarm- und Speichengefäße (Armkreislauf)',
    systemLabel: 'Gefäßsystem der oberen Extremität',
    kids: {
      badge: '⌚ Wo Ärztinnen und Ärzte deinen Puls und Blutdruck messen!',
      pronounce: 'Bra-chi-A-lis und Ra-di-A-lis',
      summary: 'Diese Blutgefäße verlaufen vom Schlüsselbein durch den Oberarm, die Ellenbeuge und das Handgelenk bis in deine Fingerspitzen! Sie halten deine Hände warm und versorgen die Armmuskeln beim Schreiben, Werfen und Klettern mit Energie.',
      whyYouNeedIt: 'Wenn beim Arztbesuch die Blutdruckmanschette am Oberarm aufgepumpt wird, hört man die Oberarmarterie ab — und am Handgelenk fühlt man den Puls der Speichenarterie!',
      funFacts: [
        'Lege zwei Finger auf die Daumenseite deines Handgelenks: Dieses regelmäßige Klopfen ist deine Speichenarterie (Arteria radialis)!',
        'Die bläulichen Linien in deiner Ellenbeuge und auf dem Handrücken sind oberflächliche Venen direkt unter der Haut.',
        'Bei Kälte ziehen sich diese Gefäße etwas zusammen, um die Körperwärme im Inneren zu bewahren!'
      ],
      quickStats: [
        { label: 'Oberarmarterie', value: 'A. brachialis (Stelle für die Blutdruckmessung)' },
        { label: 'Handgelenksarterie', value: 'A. radialis (Pulsmessung auf der Daumenseite)' },
        { label: 'Ellenbeugenvene', value: 'V. mediana cubiti (häufigste Blutabnahmestelle)' },
        { label: 'Handbögen', value: '2 Gefäßbögen versorgen alle 10 Finger' }
      ]
    },
    pro: {
      summary: 'Kontinuierliche arterielle Gefäßachse der oberen Extremität (A. subclavia → A. axillaris ab der 1. Rippe → A. brachialis ab dem Unterrand des M. teres major → A. radialis und A. ulnaris am Radiushals), begleitet von tiefen Begleitvenen und oberflächlichen Hautvenen (V. cephalica und V. basilica).',
      bloodSupply: 'A. radialis und A. ulnaris bilden in der Hohlhand den Arcus palmaris superficialis (überwiegend ulnar) und den Arcus palmaris profundus (überwiegend radial)',
      venousDrainage: 'V. cephalica (lateral, im Sulcus deltoideopectoralis) und V. basilica (medial), in der Fossa cubitalis verbunden durch die V. mediana cubiti',
      innervation: 'Postganglionäre sympathische Fasern über den Plexus brachialis (C5–Th1)',
      originInsertion: 'Topographie in der Fossa cubitalis von radial nach ulnar (TAN): Bizepssehne (Tendon) – A. brachialis (Artery) – N. medianus (Nerve)',
      metrics: [
        { label: 'Normaler Blutdruck', value: '< 120 / 80 mmHg (A. brachialis)' },
        { label: 'Allen-Test', value: 'Prüft die ulnare Kollateralversorgung der Hand vor Punktion/Entnahme der A. radialis' },
        { label: 'Venöse Blutentnahme', value: 'V. mediana cubiti (durch Aponeurosis m. bicipitis von A. brachialis getrennt)' },
        { label: 'Dialyse-Shunt', value: 'Brescia-Cimino-Fistel (radiozephaler AV-Shunt am Handgelenk)' }
      ],
      clinicalPearls: 'Suprakondyläre Humerusfrakturen im Kindesalter gefährden die A. brachialis und den N. medianus in der Ellenbeuge mit dem Risiko einer ischämischen Volkmann-Kontraktur der Unterarmflexoren.'
    }
  },
  'femoral-saphenous-vessels': {
    name: 'Becken-, Oberschenkel- und Rosenvenengefäße (Beinkreislauf)',
    systemLabel: 'Gefäßsystem der unteren Extremität',
    kids: {
      badge: '🦵 Schwerkraft-besiegende Beinvenen & starke Schlagadern!',
      pronounce: 'Fe-mo-RA-lis und Sa-FE-na',
      summary: 'Deine Beine haben die längsten Blutgefäße des Körpers! Die Oberschenkelarterie bringt Sauerstoff zu deinen großen Beinmuskeln, während die Rosenvene (Vena saphena) und die tiefen Beinvenen spezielle Einweg-Taschenklappen und die Wadenmuskeln nutzen, um das Blut gegen die Schwerkraft wieder hoch zum Herzen zu pumpen!',
      whyYouNeedIt: 'Damit das Blut von den Füßen den weiten Weg nach oben zum Herzen schafft, wirken deine Wadenmuskeln bei jedem Schritt wie ein „zweites Herz“!',
      funFacts: [
        'Die große Rosenvene (Vena saphena magna) ist die längste einzelne Vene im gesamten menschlichen Körper — sie reicht vom Fußknöchel bis zur Leiste!',
        'Jedes Mal, wenn du gehst oder auf die Zehenspitzen steigst, drücken deine Wadenmuskeln die Venen zusammen und pressen das Blut nach oben.',
        'Kleine Taschenklappen in den Beinvenen schnappen sofort zu, damit das Blut nicht wieder nach unten zurückfällt!'
      ],
      quickStats: [
        { label: 'Längste Vene', value: 'Vena saphena magna (vom Fuß bis zur Leiste)' },
        { label: 'Oberschenkelarterie', value: 'Arteria femoralis' },
        { label: 'Anti-Schwerkraft-Trick', value: 'Einweg-Venenklappen verhindern Rückfluss' },
        { label: 'Zweites Herz', value: 'Die Wadenmuskelpumpe beim Gehen!' }
      ]
    },
    pro: {
      summary: 'Arterielle Hauptachse der unteren Extremität (A. iliaca externa → A. femoralis unter dem Lig. inguinale → A. profunda femoris & A. femoralis superficialis → A. poplitea durch den Hiatus adductorius → Aa. tibiales anterior/posterior & A. fibularis) sowie tiefes und oberflächliches Venensystem.',
      bloodSupply: 'Die A. profunda femoris versorgt über die Aa. circumflexae femoris und Aa. perforantes den Oberschenkel; die femoropopliteale Achse versorgt Unterschenkel und Fuß',
      venousDrainage: 'Tiefes Leitvenensystem (Vv. tibiales → V. poplitea → V. femoralis) und oberflächliche V. saphena magna (vor dem Malleolus medialis aufsteigend bis zur Einmündung am Saphenastern)',
      innervation: 'Lumbaler und sakraler Grenzstrang (L1–S3) zur orthostatischen Vasokonstriktion und Tonusregulation',
      originInsertion: 'Anordnung im Trigonum femorale (Scarpa-Dreieck) von lateral nach medial (IVAN): N. femoralis, A. femoralis, V. femoralis, Lymphgefäße im Canalis femoralis',
      metrics: [
        { label: 'Knöchel-Arm-Index (ABI)', value: 'Normal 1,0 – 1,4 (< 0,9 spricht für pAVK)' },
        { label: 'Venenklappen', value: '10 – 20 Taschenklappen entlang der V. saphena magna' },
        { label: 'Gefäßzugang', value: 'A./V. femoralis communis 1–2 cm unterhalb des Leistenbandes' },
        { label: 'Fußpulse', value: 'A. dorsalis pedis (Fußrücken) und A. tibialis posterior (hinter dem Innenknöchel)' }
      ],
      clinicalPearls: 'Eine tiefe Beinvenenthrombose (TVT) der Unterschenkel- oder Femoralvenen (Virchow-Trias) kann über die V. cava inferior und das rechte Herz zu einer lebensbedrohlichen Lungenarterienembolie (LAE) führen.'
    }
  },
  skull: {
    name: 'Schädel und Unterkiefer (Cranium & Mandibula)',
    systemLabel: 'Axiales Skelettsystem',
    kids: {
      badge: '🪖 Der fest eingebaute Knochenhelm deines Körpers!',
      pronounce: 'SCHÄ-del (KRA-ni-um)',
      summary: 'Dein Schädel ist ein superstarker Helm aus 22 Knochen, die wie Puzzleteile fest ineinandergreifen! Der obere Teil schützt dein empfindliches Gehirn, während der vordere Teil dein Gesicht formt, deine Zähne hält und Augen sowie Ohren schützt.',
      whyYouNeedIt: 'Ohne deinen Schädelhelm wäre jeder Stoß gefährlich für das Gehirn — und ohne deinen beweglichen Unterkiefer könntest du weder kauen noch sprechen!',
      funFacts: [
        'Von allen 22 Schädelknochen kann sich nur EIN EINZIGER bewegen: dein Unterkiefer (die Mandibula)!',
        'Die gezackten Linien, an denen die Schädelknochen wie Reißverschlüsse zusammenhalten, heißen Schädelnähte (Suturen).',
        'Versteckt im Mittelohr liegen die 3 kleinsten Knochen deines Körpers (Hammer, Amboss und Steigbügel) — kleiner als ein Reiskorn!'
      ],
      quickStats: [
        { label: 'Schädelknochen', value: '22 Knochen (8 Hirnschädel + 14 Gesichtsschädel)' },
        { label: 'Beweglicher Knochen', value: 'Nur 1 (Unterkiefer / Mandibula)' },
        { label: 'Stärkster Knochen', value: 'Die Mandibula (Unterkiefer)' },
        { label: 'Kleinste Knochen', value: 'Die 3 Gehörknöchelchen im Mittelohr' }
      ]
    },
    pro: {
      summary: 'Kraniofazialer Komplex aus 22 Knochen (ohne die 6 Gehörknöchelchen), unterteilt in Neurocranium (Os frontale, Ossa parietalia, Ossa temporalia, Os occipitale, Os sphenoidale, Os ethmoidale) und Viscerocranium, verbunden durch fibröse Suturen und das synoviale Kiefergelenk (Art. temporomandibularis).',
      bloodSupply: 'A. meningea media (Ast der A. maxillaris durch das Foramen spinosum) sowie Äste der A. carotis externa',
      venousDrainage: 'Vv. diploicae und Vv. emissariae als Anastomosen zwischen extrakraniellen Skalpvenen und intrakraniellen Sinus durae matris',
      innervation: 'Sensible Versorgung über die drei Hauptäste des N. trigeminus (V1 N. ophthalmicus, V2 N. maxillaris, V3 N. mandibularis) sowie obere Zervikalnerven (C2–C3)',
      originInsertion: 'Artikuliert kaudal über die Condyli occipitales mit dem Atlas (C1); das Caput mandibulae artikuliert über einen Discus articularis mit der Fossa mandibularis des Os temporale',
      metrics: [
        { label: 'Aufbau der Kalotte', value: 'Lamina externa, spongiöse Diploë und Lamina interna' },
        { label: 'Fontanellenschluss', value: 'Kleine Fontanelle: 2–3 Mon. | Große Fontanelle: 12–18 Mon.' },
        { label: 'Foramen magnum', value: 'Durchtritt von Medulla oblongata, Aa. vertebrales, Aa. spinales und HN XI' },
        { label: 'Schwachstelle', value: 'Pterion (H-förmige Nahtstelle von Stirn-, Scheitel-, Schläfen- und Keilbein)' }
      ],
      clinicalPearls: 'Schläfenbeinfrakturen im Bereich des Pterions können den R. anterior der A. meningea media zerreißen und ein akutes epidurales Hämatom verursachen (bikonvexe Linsenform im cCT, oft mit freiem Intervall).'
    }
  },
  'rib-cage': {
    name: 'Brustkorb (Rippen und Brustbein / Thorax)',
    systemLabel: 'Axiales Skelettsystem',
    kids: {
      badge: '🛡️ Die biegsame Ritterrüstung für Herz und Lunge!',
      pronounce: 'BRUST-korb (THO-rax)',
      summary: 'Taste einmal über deine Brust: Das sind deine Rippen! Du hast 12 Rippenpaare (insgesamt 24 Rippen), die von der Wirbelsäule im Rücken nach vorne zum Brustbein (Sternum) gebogen sind und einen schützenden Käfig um Herz und Lunge bilden.',
      whyYouNeedIt: 'In einem starren Knochenkasten könntest du nicht atmen! Deshalb sind die Rippen über elastischen Knorpel mit dem Brustbein verbunden, damit sich dein Brustkorb bei jedem Atemzug ausdehnen kann.',
      funFacts: [
        'Jungen und Mädchen haben genau gleich viele Rippen: 12 Paare (24 Rippen insgesamt)!',
        'Die untersten zwei Rippenpaare (11. und 12.) heißen „freie Rippen“, weil sie nur hinten an der Wirbelsäule befestigt sind.',
        'Im Inneren des Brustbeins und der Rippen bildet das rote Knochenmark jede Sekunde Millionen neuer Blutzellen!'
      ],
      quickStats: [
        { label: 'Anzahl der Rippen', value: '24 Rippen (12 Paare)' },
        { label: 'Vorderer Schild', value: 'Brustbein / Sternum' },
        { label: 'Echte Rippen', value: 'Paare 1–7 (direkt am Brustbein)' },
        { label: 'Freie Rippen', value: 'Paare 11–12 (enden frei in der Muskulatur)' }
      ]
    },
    pro: {
      summary: 'Osteokartilaginärer Thoraxkäfig aus Sternum (Manubrium, Corpus, Processus xiphoideus), 12 Rippenpaaren (Costae verae 1–7, Costae spuriae 8–10, Costae fluctuantes 11–12), Rippenknorpeln und den Brustwirbeln Th1–Th12.',
      bloodSupply: 'Aa. intercostales posteriores (aus der Aorta thoracica) in Anastomose mit den Rr. intercostales anteriores (aus der A. thoracica interna)',
      venousDrainage: 'Vv. intercostales mit ventralem Abfluss in die Vv. thoracicae internae und dorsalem Abfluss in das V.-azygos-/hemiazygos-System',
      innervation: 'Nn. intercostales (Th1–Th11) und N. subcostalis (Th12) im Sulcus costae am Rippenunterrand',
      originInsertion: 'Pumpenschwengelbewegung der oberen Rippen (sagittale Thoraxerweiterung) und Eimerhenkelbewegung der unteren Rippen (transversale Erweiterung)',
      metrics: [
        { label: 'Angulus sterni (Ludovici)', value: 'Verbindung Manubrium-Corpus auf Höhe der 2. Rippe / Bandscheibe Th4–Th5' },
        { label: 'Interkostales Bündel', value: 'Im Sulcus costae am Unterrand von oben nach unten: Vene – Arterie – Nerv (VAN)' },
        { label: 'Sichere Pleurapunktion', value: 'Immer am OBERRAND der unteren Rippe punktieren' },
        { label: 'Hämatopoese', value: 'Sternum und Rippen enthalten lebenslang aktives rotes Knochenmark' }
      ],
      clinicalPearls: 'Bei einer Pleurapunktion oder Thoraxdrainage muss die Nadel stets unmittelbar am Oberrand der unteren Rippe eingeführt werden, um das im Sulcus costae am Unterrand der oberen Rippe verlaufende Gefäß-Nerven-Bündel (Vena – Arteria – Nervus) zu schonen.'
    }
  },
  spine: {
    name: 'Wirbelsäule (Hals-, Brust-, Lendenwirbelsäule, Kreuz- und Steißbein)',
    systemLabel: 'Axiales Skelett- & Nervensystem',
    kids: {
      badge: '🏗️ Der biegsame Turm aus 33 Wirbeln, der dich aufrecht hält!',
      pronounce: 'WIR-bel-säu-le (Ver-te-BRA)',
      summary: 'Deine Wirbelsäule ist kein steifer Stab, sondern ein beweglicher Turm aus 33 ringförmigen Knochen (den Wirbeln) mit weichen Stoßdämpfer-Kissen (den Bandscheiben) dazwischen! So kannst du aufrecht stehen und dich trotzdem bücken, drehen und tanzen.',
      whyYouNeedIt: 'Neben dem Stützen von Kopf und Rumpf bilden die Wirbelringe einen gepanzerten Schutzkanal für dein empfindliches Rückenmark!',
      funFacts: [
        'Morgens nach dem Aufstehen bist du etwa 1 cm größer als abends, weil sich deine Bandscheiben nachts wieder mit Flüssigkeit vollsaugen!',
        'Menschen und langhalsige Giraffen haben genau gleich viele Halswirbel: nämlich 7!',
        'Von der Seite gesehen hat die Wirbelsäule eine federnde „S“-Form, die Sprünge und Schritte abfedert.'
      ],
      quickStats: [
        { label: 'Wirbel gesamt', value: '33 (24 freie Wirbel + Kreuzbein & Steißbein)' },
        { label: 'Halswirbel', value: '7 Halswirbel (C1–C7)' },
        { label: 'Brust & Lende', value: '12 Brustwirbel + 5 Lendenwirbel' },
        { label: 'Stoßdämpfer', value: '23 elastische Bandscheiben' }
      ]
    },
    pro: {
      summary: 'Segmentierte Achsensäule aus 33–34 Wirbeln (7 Zervikal-, 12 Thorakal-, 5 Lumbal-, 5 verschmolzene Sakral- und 4–5 verschmolzene Kokzygealwirbel) mit physiologischer Doppel-S-Krümmung (Hals- und Lendenlordose, Brust- und Sakralkyphose).',
      bloodSupply: 'Segmentale Rr. spinales aus Aa. vertebrales, Aa. intercostales posteriores, Aa. lumbales und Aa. sacrales laterales',
      venousDrainage: 'Klappenloser interner und externer vertebraler Venenplexus (Batson-Plexus)',
      innervation: 'Rr. meningei (Sinuvertebralnerven) für das Lig. longitudinale posterius und den äußeren Anulus fibrosus; Rr. mediales der Rr. dorsales für die Facettengelenke',
      originInsertion: 'Stabilisiert durch Ligg. longitudinalia anterius und posterius, Ligg. flava, interspinalia und supraspinale; Disci intervertebrales aus Faserknorpelring (Anulus fibrosus) und Gallertkern (Nucleus pulposus)',
      metrics: [
        { label: 'Wirbelformel', value: 'C7 • Th12 • L5 • S5 (Os sacrum) • Co4 (Os coccygis)' },
        { label: 'Conus medullaris', value: 'Endet beim Erwachsenen auf Höhe L1–L2 (darunter Cauda equina)' },
        { label: 'Lumbalpunktion', value: 'Interspinalraum L3/L4 oder L4/L5 (Beckenspitzenlinie = L4)' },
        { label: 'Kopfgelenke', value: 'Atlas C1 (Nickbewegung „Ja“) & Axis C2 mit Dens (Drehbewegung „Nein“)' }
      ],
      clinicalPearls: 'Ein posterolateraler Bandscheibenvorfall L4/L5 komprimiert typischerweise die absteigende Wurzel L5 (Fußheber- und Großzehenheberparese), während ein Vorfall L5/S1 die Wurzel S1 schädigt (Ausfall des Achillessehnenreflexes, Fußsenkerparese).'
    }
  },
  'humerus-radius-ulna': {
    name: 'Oberarmknochen, Speiche und Elle (Humerus, Radius & Ulna)',
    systemLabel: 'Appendikuläres Skelettsystem',
    kids: {
      badge: '🦾 Die 3 Armknochen zum Greifen, Beugen und Drehen!',
      pronounce: 'HU-me-rus, RA-di-us und UL-na',
      summary: 'Dein Oberarm besteht aus einem großen, kräftigen Knochen (dem Humerus), und dein Unterarm hat zwei Partnerknochen: die Speiche (Radius) und die Elle (Ulna)! Zusammen ermöglichen sie es dir, den Ellenbogen zu beugen und die Handfläche nach oben oder unten zu drehen.',
      whyYouNeedIt: 'Nur weil du ZWEI Knochen im Unterarm hast, kann sich die Speiche um die Elle drehen, damit du einen Schlüssel umdrehen oder einen Türknauf öffnen kannst!',
      funFacts: [
        'Wenn du deine Handfläche nach unten drehst, überkreuzt die Speiche (Radius) die Elle (Ulna) wie ein „X“!',
        'Das Kribbeln am „Musikantenknochen“ entsteht gar nicht am Knochen, sondern am Ellennerv (Nervus ulnaris), der dort dicht unter der Haut verläuft!',
        'Am Ende deines Unterarms bestehen jede Hand und jedes Handgelenk aus 27 kleinen Einzelknochen (54 in beiden Händen!).'
      ],
      quickStats: [
        { label: 'Oberarm', value: '1 Knochen: Oberarmknochen (Humerus)' },
        { label: 'Unterarm', value: '2 Knochen: Speiche (Daumenseite) & Elle (Kleinfingerseite)' },
        { label: 'Ellenbogen', value: 'Kombiniertes Scharnier- und Drehgelenk' },
        { label: 'Handknochen', value: '27 Knochen pro Hand und Handgelenk' }
      ]
    },
    pro: {
      summary: 'Skelett der oberen Extremität: Der Humerus artikuliert proximal im Glenohumeralgelenk und distal im Ellenbogengelenk; Radius und Ulna sind über das proximale und distale Radioulnargelenk sowie die Membrana interossea antebrachii verbunden.',
      bloodSupply: 'Aa. nutriciae aus Aa. circumflexae humeri, A. profunda brachii, A. radialis, A. ulnaris und Aa. interosseae',
      venousDrainage: 'Tiefe Begleitvenen (Vv. comitantes) der Aa. brachialis, radialis und ulnaris',
      innervation: 'Klassische Fraktur-Nerven-Zuordnung am Humerus: Collum chirurgicum → N. axillaris; Sulcus n. radialis (Schaft) → N. radialis; suprakondylär → N. medianus; Epicondylus medialis → N. ulnaris',
      originInsertion: 'Das Caput radii rotiert im Lig. anulare radii und ermöglicht ~180° Pronation und Supination um die feststehende Ulna',
      metrics: [
        { label: 'Tragewinkel (Cubitus valgus)', value: '10° – 15° physiologische Valgusstellung in Streckung' },
        { label: 'Kraftübertragung', value: 'Hand → Scaphoideum/Lunatum → distaler Radius → Membrana interossea → Ulna → Humerus' },
        { label: 'Klassische Frakturen', value: 'Colles (distaler Radius), Monteggia (Ulna + Radiusköpfchen), Galeazzi' },
        { label: 'Rotatorenmanschette', value: 'Tuberculum majus (Supraspinatus, Infraspinatus, Teres minor) & minus (Subscapularis)' }
      ],
      clinicalPearls: 'Eine Humerusschaftfraktur gefährdet den N. radialis im Sulcus nervi radialis und führt klassischerweise zur „Fallhand“ (Ausfall der Hand- und Fingerextensoren) sowie einer Hypästhesie im dorsalen ersten Interdigitalraum.'
    }
  },
  pelvis: {
    name: 'Becken (Hüftbeine und Kreuzbein / Pelvis)',
    systemLabel: 'Beckengürtel & Skelettsystem',
    kids: {
      badge: '🥣 Die stabile Knochenschale, die Ober- und Unterkörper verbindet!',
      pronounce: 'BEK-ken (PEL-vis)',
      summary: 'Dein Becken ist ein superstabiles, schüsselförmiges Knochenring-System an deiner Hüfte! Es trägt das Gewicht deines gesamten Oberkörpers, schützt die Organe im Unterbauch und besitzt seitlich zwei tiefe Gelenkpfannen für deine Oberschenkelknochen.',
      whyYouNeedIt: 'Es verbindet deine Wirbelsäule mit beiden Beinen, sodass du aufrecht stehen, gehen, rennen und das Gleichgewicht halten kannst!',
      funFacts: [
        'Jedes Hüftbein besteht bei Kindern noch aus 3 einzelnen Knochen (Darmbein, Sitzbein und Schambein), die erst beim Heranwachsen zu einem einzigen Knochen verschmelzen!',
        'Wenn du auf einem Stuhl sitzt, ruht dein Gewicht auf zwei gebogenen Knochen unten am Becken: den Sitzbeinhöckern.',
        'Das lateinische Wort „Pelvis“ bedeutet übersetzt tatsächlich „Schüssel“ oder „Becken“!'
      ],
      quickStats: [
        { label: 'Form', value: 'Schützender knöcherner Ring / Schale' },
        { label: 'Hüftpfanne', value: 'Acetabulum (Gelenkpfanne für den Oberschenkelkopf)' },
        { label: '3 verschmolzene Knochen', value: 'Darmbein (Ilium), Sitzbein (Ischium) & Schambein (Pubis)' },
        { label: 'Hauptaufgabe', value: 'Überträgt das Gewicht von der Wirbelsäule auf die Beine' }
      ]
    },
    pro: {
      summary: 'Knöcherner Beckenring aus den paarigen Ossa coxae (im Acetabulum über die Y-Fuge verschmolzenes Os ilium, Os ischii und Os pubis), ventral verbunden über die Symphysis pubica und dorsal über die Iliosakralgelenke (ISG) mit dem Os sacrum.',
      bloodSupply: 'Äste der A. iliaca interna (A. iliolumbalis, A. obturatoria, Aa. gluteae superior/inferior, A. pudenda interna) und A. iliaca externa',
      venousDrainage: 'Ausgedehnte retroperitoneale venöse Beckenplexus mit Abfluss in die Vv. iliacae internae und communes',
      innervation: 'Plexus lumbosacralis (L1–S4); N. obturatorius (L2–L4) durch den Canalis obturatorius; N. ischiadicus (L4–S3) durch das Foramen infrapiriforme',
      originInsertion: 'Stabilisiert durch Ligg. sacroiliaca, Lig. sacrotuberale und Lig. sacrospinale; die Spina iliaca anterior superior (SIAS) dient als Ursprung von M. sartorius und Lig. inguinale',
      metrics: [
        { label: 'Conjugata vera obstetrica', value: '≥ 10,5 – 11,0 cm (gynäkoides weibliches Becken)' },
        { label: 'Anteile am Acetabulum', value: 'Os ilium (~2/5), Os ischii (~2/5), Os pubis (~1/5)' },
        { label: 'Knochenmarkpunktion', value: 'Spina iliaca posterior superior (SIPS) & Crista iliaca' },
        { label: 'Kraftübertragung', value: 'Wirbelsäule → Sakrum → ISG → Linea arcuata → Acetabulum / Tuber ischiadicum' }
      ],
      clinicalPearls: 'Instabile „Open-Book“-Beckenringfrakturen nach Hochrasanztrauma können den präsakralen Venenplexus und Äste der A. iliaca interna zerreißen und zu lebensbedrohlichen retroperitonealen Massenblutungen führen.'
    }
  },
  'femur-tibia-fibula': {
    name: 'Oberschenkelknochen, Kniescheibe, Schien- und Wadenbein (Beinknochen)',
    systemLabel: 'Appendikuläres Skelettsystem',
    kids: {
      badge: '🏆 Heimat des längsten und stärksten Knochens deines Körpers!',
      pronounce: 'FE-mur, Pa-TEL-la und TI-bi-a',
      summary: 'Dein Oberschenkelknochen — das Femur — ist der längste, schwerste und stärkste Knochen im ganzen menschlichen Körper! Unter deiner schildförmigen Kniescheibe (Patella) liegen die beiden Unterschenkelknochen: das kräftige Schienbein (Tibia) und das schlanke Wadenbein (Fibula).',
      whyYouNeedIt: 'Jedes Mal, wenn du springst, sprintest oder einen Ball schießt, fangen diese extrem stabilen Knochen Kräfte auf, die ein Vielfaches deines Körpergewichts betragen!',
      funFacts: [
        'Bezogen auf sein Gewicht ist dein Oberschenkelknochen (Femur) stabiler als Stahlbeton!',
        'Dein Oberschenkelknochen macht etwa ein Viertel (25 %) deiner gesamten Körpergröße aus!',
        'Die Kniescheibe (Patella) ist ein besonderes „Sesambein“, das direkt in eine Sehne eingebaut ist, um das Knie zu schützen und deinen Muskeln mehr Hebelkraft zu geben.'
      ],
      quickStats: [
        { label: 'Rekordhalter', value: 'Femur = Längster & stärkster Knochen' },
        { label: 'Knieschutz', value: 'Kniescheibe / Patella' },
        { label: 'Schienbein', value: 'Tibia (trägt ~85 % der Unterschenkellast)' },
        { label: 'Seitenstütze', value: 'Wadenbein / Fibula (bildet den Außenknöchel)' }
      ]
    },
    pro: {
      summary: 'Lasttragende Säule der unteren Extremität: Femur (Caput, Collum mit CCD-Winkel ~125°, Diaphyse, Kondylen), Patella (größtes Sesambein), medial lasttragende Tibia und laterale Fibula zur Muskelinsertion und Bildung der Malleolengabel.',
      bloodSupply: 'Femurkopf überwiegend durch Rr. retinaculares der A. circumflexa femoris medialis versorgt; Tibiaschaft durch die A. nutricia aus der A. tibialis posterior',
      venousDrainage: 'Tiefe Begleitvenen (Vv. femorales, popliteae und tibiales anteriores/posteriores)',
      innervation: 'Hilton-Gesetz: Hüft- und Kniegelenk werden von Gelenkästen der Nn. femoralis, obturatorius und ischiadicus versorgt (Koxarthroseschmerz projiziert häufig über den N. obturatorius an die mediale Knieseite)',
      originInsertion: 'Kniegelenk stabilisiert durch vorderes/hinteres Kreuzband (VKB/HKB), mediales/laterales Kollateralband (MCL/LCL) sowie Innen- und Außenmeniskus',
      metrics: [
        { label: 'CCD-Winkel (Schenkelhals)', value: '120° – 135° (Coxa vara < 120°; Coxa valga > 135°)' },
        { label: 'Unhappy Triad', value: 'Vorderes Kreuzband + Innenband + Innenmeniskus (Valgus-Rotations-Trauma)' },
        { label: 'Collum fibulae', value: 'N. fibularis communis zieht um das Fibulaköpfchen → Fußheberparese bei Läsion' },
        { label: 'Unterschenkellogen', value: '4 straffe Faszienlogen (Kompartmentsyndrom-Risiko)' }
      ],
      clinicalPearls: 'Intrakapsuläre mediale Schenkelhalsfrakturen zerreißen häufig die aufsteigenden Retinakulargefäße der A. circumflexa femoris medialis und bergen ein hohes Risiko einer avaskulären Femurkopfnekrose.'
    }
  },
  'pectoralis-deltoid': {
    name: 'Großer Brustmuskel und Deltamuskel (Brust- & Schultermuskulatur)',
    systemLabel: 'Rumpf- und Schultermuskulatur',
    kids: {
      badge: '💪 Deine Kraftpakete zum Drücken, Umarmen und Armheben!',
      pronounce: 'Pek-to-RA-lis und Del-to-I-de-us',
      summary: 'Vorne auf deiner Brust liegen die fächerförmigen großen Brustmuskeln (Pectoralis major), und wie runde Schulterpolster sitzen darüber die Deltamuskeln! Zusammen helfen sie dir, Türen aufzudrücken, feste Umarmungen zu geben, zu schwimmen und die Arme hoch in die Luft zu strecken.',
      whyYouNeedIt: 'Bei jedem Liegestütz, jedem Ballwurf und jedem Melden in der Schule arbeiten Brustmuskel und Deltamuskel als starkes Team zusammen!',
      funFacts: [
        'Der Name „Deltamuskel“ kommt vom griechischen Buchstaben Delta (Δ), weil der Schultermuskel genau wie ein Dreieck geformt ist!',
        'Dein Deltamuskel besteht aus 3 Teilen (vorne, seitlich, hinten), damit du den Arm in jede Richtung heben kannst.',
        'Muskeln können immer nur an Knochen ZIEHEN, niemals drücken!'
      ],
      quickStats: [
        { label: 'Aufgabe Brustmuskel', value: 'Zieht die Arme nach vorne und zur Körpermitte' },
        { label: 'Aufgabe Deltamuskel', value: 'Hebt den Arm in alle Richtungen an' },
        { label: 'Form', value: 'Fächerförmig (Brust) + Dreieckig (Schulter)' },
        { label: 'Teamarbeit', value: 'Arbeitet mit den Rückenmuskeln zusammen' }
      ]
    },
    pro: {
      summary: 'Oberflächliche thorakohumerale und skapulohumerale Hauptbewegungsmuskeln, welche die Vorderwand der Axilla und die Schulterkontur bilden, getrennt durch den Sulcus deltoideopectoralis (mit der V. cephalica).',
      bloodSupply: 'A. thoracoacromialis (Rr. pectorales und R. deltoideus) sowie A. circumflexa humeri posterior',
      venousDrainage: 'V. cephalica und Vv. thoracoacromiales mit Mündung in die V. axillaris',
      innervation: 'M. pectoralis major: Nn. pectorales medialis (C8–Th1) und lateralis (C5–C7); M. deltoideus: N. axillaris (C5–C6 durch die laterale Achsellücke)',
      originInsertion: 'M. pectoralis major: Pars clavicularis, sternocostalis & abdominalis → Crista tuberculi majoris humeri (Adduktion, Innenrotation, Anteversion). M. deltoideus: laterales Klavikuladrittel, Akromion, Spina scapulae → Tuberositas deltoidea (Abduktion von 15° bis 90°)',
      metrics: [
        { label: 'Abduktionsbogen', value: '0°–15° M. supraspinatus | 15°–90° M. deltoideus | >90° M. serratus ant. + M. trapezius' },
        { label: 'i.m.-Injektionsort', value: 'Mittlerer M. deltoideus ~3–5 cm (2–3 Querfinger) unterhalb des Akromions' },
        { label: 'Laterale Achsellücke', value: 'Durchtritt von N. axillaris und A. circumflexa humeri posterior' },
        { label: 'Faserarchitektur', value: 'Multipennate Pars acromialis für maximales physiologisches Kraftmoment' }
      ],
      clinicalPearls: 'Eine vordere Schulterluxation oder Fraktur des Collum chirurgicum humeri kann den N. axillaris (C5–C6) schädigen, was zu einer Abflachung des Deltamuskels, einem Abduktionsdefizit (15°–90°) und einem Sensibilitätsausfall über der seitlichen Schulter führt.'
    }
  },
  'biceps-triceps': {
    name: 'Bizeps, Trizeps und Unterarmbeuger (Armmuskulatur)',
    systemLabel: 'Muskulatur der oberen Extremität',
    kids: {
      badge: '💪 Das berühmte Team zum Beugen und Strecken deiner Arme!',
      pronounce: 'BI-zeps und TRI-zeps',
      summary: 'Beuge deinen Ellenbogen und spanne den Arm an — der Muskelberg vorne am Oberarm ist dein Bizeps! Wenn er sich zusammenzieht, hebt er deinen Unterarm an. Willst du den Arm wieder strecken, zieht der Trizeps auf der Rückseite in die Gegenrichtung!',
      whyYouNeedIt: 'Weil Muskeln nur ziehen können, arbeiten Bizeps (vorne) und Trizeps (hinten) als Gegenspieler-Paar zusammen, damit du den Arm flüssig beugen und strecken kannst!',
      funFacts: [
        '„Bi-zeps“ ist Latein und bedeutet „zweiköpfig“, weil der Muskel oben mit zwei Sehnen am Schulterblatt befestigt ist!',
        '„Tri-zeps“ auf der Rückseite des Oberarms bedeutet „dreiköpfig“!',
        'Dein Bizeps beugt nicht nur den Ellenbogen, sondern ist auch der stärkste Muskel zum Drehen der Handfläche nach oben (wie beim Aufschrauben eines Glases)!'
      ],
      quickStats: [
        { label: 'Wortbedeutung', value: 'Bizeps = „2 Köpfe“ | Trizeps = „3 Köpfe“' },
        { label: 'Bizeps-Aktion', value: 'Beugt den Ellenbogen & dreht die Handfläche nach oben' },
        { label: 'Trizeps-Aktion', value: 'Streckt den Ellenbogen wieder gerade' },
        { label: 'Verbindung', value: 'Starke weiße Sehnen verbinden Muskel und Knochen' }
      ]
    },
    pro: {
      summary: 'Ventrales Oberarmkompartiment (M. biceps brachii, M. brachialis, M. coracobrachialis) und dorsales Kompartiment (M. triceps brachii) als antagonistisches Funktionsteam über Schulter-, Ellenbogen- und Radioulnargelenke.',
      bloodSupply: 'Rr. musculares der A. brachialis (ventrale Loge) und der A. profunda brachii (dorsale Loge)',
      venousDrainage: 'Vv. brachiales sowie V. basilica und V. cephalica',
      innervation: 'Ventrale Loge: N. musculocutaneus (C5–C7); dorsale Loge (M. triceps brachii): N. radialis (C6–C8)',
      originInsertion: 'M. biceps brachii: Caput breve (Proc. coracoideus) und Caput longum (Tuberculum supraglenoidale) → Tuberositas radii & Aponeurosis m. bicipitis (kräftigster Supinator bei gebeugtem Ellenbogen sowie Flexor). M. triceps brachii: Caput longum, laterale, mediale → Olecranon ulnae (Extensor)',
      metrics: [
        { label: 'Muskeleigenreflexe', value: 'Bizepssehnenreflex (BSR) = C5/C6 | Radiusperiostreflex = C6 | Trizepssehnenreflex (TSR) = C7' },
        { label: 'Maximales Supinationsmoment', value: 'Bei 90° gebeugtem Ellenbogengelenk' },
        { label: 'Reziproke Hemmung', value: 'Ia-Afferenzen hemmen den Trizeps während der Bizepskontraktion' },
        { label: 'Lange Bizepssehnenruptur', value: '„Popeye-Zeichen“ (Distalisierung des Muskelbauchs bei Ruptur der langen Sehne)' }
      ],
      clinicalPearls: 'Eine obere Plexuslähmung nach Erb-Duchenne (Läsion des Truncus superior C5–C6) führt durch Ausfall von M. deltoideus, Außenrotatoren und M. biceps brachii zur charakteristischen „Waiter’s-Tip“-Haltung (innenrotierter, adduzierter Arm mit gestrecktem, proniertem Unterarm).'
    }
  },
  'rectus-abdominis-diaphragm': {
    name: 'Gerader Bauchmuskel, Schräge Bauchmuskeln und Zwerchfell',
    systemLabel: 'Rumpf- und Atemmuskulatur',
    kids: {
      badge: '🛡️ Deine Bauchmuskel-Rüstung und der Fallschirm-Atemmuskel!',
      pronounce: 'Bauch-MUS-keln und ZWERCH-fell (Dia-FRAG-ma)',
      summary: 'Deine Bauchmuskeln umschließen deinen Bauch wie ein schützender Gürtel, halten deine Organe sicher am Platz und helfen dir beim Aufsetzen, Drehen und Balancieren. Direkt darüber, unter den Rippen, wölbt sich das Zwerchfell wie eine Kuppel, die sich bei jedem Einatmen nach unten zieht!',
      whyYouNeedIt: 'Das Zwerchfell leistet die Hauptarbeit beim Atmen, und deine Bauchmuskeln stabilisieren deine Wirbelsäule bei jeder Bewegung!',
      funFacts: [
        'Hattest du schon mal Schluckauf? Der entsteht, wenn dein Zwerchfell plötzlich kurz zuckt und du ruckartig Luft einziehst!',
        'Das „Sixpack“-Muster des geraden Bauchmuskels entsteht durch 3 bis 4 waagerechte Sehnenstreifen.',
        'Wenn du laut lachst, hustest oder niest, ziehen sich deine Bauchmuskeln blitzschnell zusammen!'
      ],
      quickStats: [
        { label: 'Form des Zwerchfells', value: 'Kuppel / Fallschirm unter der Lunge' },
        { label: 'Bauchwand', value: '4 überlagerte Muskelschichten' },
        { label: 'Ursache für Schluckauf', value: 'Plötzliches Zucken des Zwerchfells!' },
        { label: 'Hauptaufgaben', value: 'Atmung + Organschutz + Körperhaltung' }
      ]
    },
    pro: {
      summary: 'Kuppelförmige muskulotendinöse Scheidewand zwischen Brust- und Bauchhöhle (Diaphragma) sowie vierschichtige anterolaterale Bauchwand (M. obliquus externus, M. obliquus internus, M. transversus abdominis und M. rectus abdominis in der Rektusscheide).',
      bloodSupply: 'Rektusscheide: Anastomose zwischen A. epigastrica superior (aus A. thoracica interna) und A. epigastrica inferior (aus A. iliaca externa). Diaphragma: Aa. phrenicae superiores/inferiores, A. musculophrenica und A. pericardiacophrenica',
      venousDrainage: 'Vv. epigastricae superior und inferior (wichtige kavokavale und portokavale Kollateralbahn) sowie Vv. phrenicae',
      innervation: 'Diaphragma: N. phrenicus (C3–C5: „C3, 4, 5 keeps the diaphragm alive“). Bauchwand: Nn. thoracoabdominales (Th7–Th11), N. subcostalis (Th12), N. iliohypogastricus und N. ilioinguinalis (L1)',
      originInsertion: 'Zwerchfelldurchtrittsstellen: Foramen venae cavae auf Höhe Th8, Hiatus oesophageus auf Höhe Th10 (Ösophagus + Trunci vagales), Hiatus aorticus auf Höhe Th12 (Aorta + Ductus thoracicus + V. azygos)',
      metrics: [
        { label: 'Zwerchfubhub', value: '1,5 – 2 cm bei Ruheatmung | 6 – 10 cm bei tiefer Inspiration' },
        { label: 'Linea arcuata', value: 'Unterhalb verlaufen alle Aponeurosenblätter ventral des M. rectus abdominis' },
        { label: 'Durchtrittshöhen', value: 'VCI = Th8, Ösophagus = Th10, Aorta = Th12' },
        { label: 'Hesselbach-Dreieck', value: 'Medial: Rektusrand | Lateral: Vasa epigastrica inf. | Kaudal: Lig. inguinale' }
      ],
      clinicalPearls: 'Direkte Leistenhernien treten medial der Vasa epigastrica inferiora durch das Hesselbach-Dreieck (erworbene Schwäche der Fascia transversalis), während indirekte Leistenhernien lateral der Gefäße durch den inneren Leistenring verlaufen.'
    }
  },
  'quadriceps-gastrocnemius': {
    name: 'Quadrizeps, hintere Oberschenkelmuskeln und Wadenmuskel (Beinmuskulatur)',
    systemLabel: 'Muskulatur der unteren Extremität',
    kids: {
      badge: '⚡ Deine riesigen Motoren zum Sprinten, Springen und Kicken!',
      pronounce: 'Kwa-dri-ZEPS und Gas-tro-KNE-mi-us',
      summary: 'In deinen Beinen sitzen die größten und kräftigsten Muskeln deines Körpers! Der Quadrizeps vorne am Oberschenkel streckt dein Knie beim Schießen und Springen, die Muskeln auf der Rückseite beugen das Knie, und der Wadenmuskel zieht an der Achillessehne, damit du dich vom Boden abdrücken kannst!',
      whyYouNeedIt: 'Jeder einzelne Schritt nutzt ein perfekt abgestimmtes Zusammenspiel aus Oberschenkel- und Wadenmuskeln!',
      funFacts: [
        '„Quadri-zeps“ bedeutet „vierköpfig“, weil er aus einem Team von 4 großen Muskeln auf der Vorderseite deines Oberschenkels besteht!',
        'Deine Wadenmuskeln sind über die Achillessehne mit dem Fersenbein verbunden — das ist die dickste und stärkste Sehne des gesamten Körpers!',
        'Der große Gesäßmuskel (Gluteus maximus) und der Quadrizeps liefern sich ein Kopf-an-Kopf-Rennen um den Titel des größten Muskels im Körper!'
      ],
      quickStats: [
        { label: 'Quadrizeps', value: '4 Muskeln vorne am Oberschenkel (strecken das Knie)' },
        { label: 'Beinbeuger', value: '3 Muskeln hinten am Oberschenkel (beugen das Knie)' },
        { label: 'Wadenmuskel', value: 'M. gastrocnemius & M. soleus (Zehenspitzenstand)' },
        { label: 'Stärkste Sehne', value: 'Achillessehne (Tendo calcaneus) an der Ferse' }
      ]
    },
    pro: {
      summary: 'Hauptextensoren und Plantarflexoren der unteren Extremität: M. quadriceps femoris (M. rectus femoris, Mm. vasti lateralis, medialis, intermedius), ischiokrurale Muskulatur (M. biceps femoris, M. semitendinosus, M. semimembranosus) und M. triceps surae (M. gastrocnemius + M. soleus).',
      bloodSupply: 'A. profunda femoris und A. circumflexa femoris lateralis (Oberschenkel); Rr. surales der A. poplitea und A. tibialis posterior (Unterschenkel)',
      venousDrainage: 'Tiefe Femoral- und Poplitealvenen sowie Soleus-Venensinus (zentrale Muskel-Venen-Pumpe der Wade)',
      innervation: 'M. quadriceps femoris: N. femoralis (L2–L4); Ischiokrurale Gruppe: Tibialisanteil des N. ischiadicus (L5–S2, außer Caput breve m. bicipitis durch N. fibularis communis); M. triceps surae: N. tibialis (S1–S2)',
      originInsertion: 'M. quadriceps → Quadrizepssehne → Patella → Lig. patellae → Tuberositas tibiae. M. gastrocnemius & M. soleus → Tendo calcaneus (Achillessehne) → Tuber calcanei',
      metrics: [
        { label: 'Patellarsehnenreflex (PSR)', value: 'Segmente L3–L4 (N. femoralis)' },
        { label: 'Achillessehnenreflex (ASR)', value: 'Segmente S1–S2 (N. tibialis)' },
        { label: 'Zugbelastung Achillessehne', value: 'Hält beim Sprinten/Springen dem 8- bis 12-Fachen des Körpergewichts stand' },
        { label: 'Muskelfasertypen', value: 'M. soleus: ~80 % langsame Typ-I-Fasern | M. gastrocnemius: schnelle Typ-II-Fasern' }
      ],
      clinicalPearls: 'Eine Achillessehnenruptur tritt typischerweise 2–6 cm proximal des Kalkaneusansatzes (hypovaskuläre Zone) mit hörbarem Peitschenknall auf; klinischer Nachweis durch einen positiven Thompson-Test (fehlende Plantarflexion bei Wadenkompression).'
    }
  },
  'spinal-cord-sciatic': {
    name: 'Rückenmark, Armgeflecht und Ischiasnerv',
    systemLabel: 'Zentrales & Peripheres Nervensystem',
    kids: {
      badge: '⚡ Das blitzschnelle Glasfaser-Kabelnetz deines Körpers!',
      pronounce: 'RÜK-ken-mark und ISCH-i-as-nerv',
      summary: 'Dein Rückenmark ist ein dickes Bündel aus Nervenkabeln im Schutzkanal deiner Wirbelsäule. Von dort zweigen 31 Nervenpaare ab, die jeden Millimeter deiner Haut und Muskeln erreichen und Signale mit über 400 km/h weiterleiten!',
      whyYouNeedIt: 'Wenn du etwas Heißes berührst, nutzen deine Nerven eine Blitz-Abkürzung über das Rückenmark (den „Reflexbogen“), um deine Hand zurückzuziehen, BEVOR dein Gehirn den Schmerz überhaupt bemerkt!',
      funFacts: [
        'Der Ischiasnerv (Nervus ischiadicus), der hinten durch dein Bein zieht, ist der längste und dickste Nerv im Körper — fast so dick wie der Daumen eines Erwachsenen!',
        'Würde man alle Nervenfasern deines Körpers aneinanderlegen, wären sie über 72 Kilometer lang!',
        'Der Vagusnerv wandert vom Hirnstamm bis zu Herz, Lunge und Bauch, um deinen Körper in Ruhephasen zu entspannen.'
      ],
      quickStats: [
        { label: 'Spinalnerven', value: '31 Paare entspringen dem Rückenmark' },
        { label: 'Größter Nerv', value: 'Ischiasnerv / N. ischiadicus (von der Hüfte bis zum Fuß)' },
        { label: 'Signalgeschwindigkeit', value: 'Bis zu 120 m/s (430 km/h)' },
        { label: 'Blitz-Abkürzung', value: 'Spinaler Reflexbogen zum sofortigen Schutz!' }
      ]
    },
    pro: {
      summary: 'Zylindrischer ZNS-Leitungsstrang (Medulla spinalis mit Intumescentia cervicalis C4–Th1 und lumbosacralis L1–S3), aus dem 31 gemischte Spinalnervenpaare (8C, 12Th, 5L, 5S, 1Co) hervorgehen, die die Plexus cervicalis, brachialis, lumbalis und sacralis bilden.',
      bloodSupply: 'Unpaare A. spinalis anterior (versorgt die vorderen 2/3 inkl. Pyramidenbahn) und paarige Aa. spinales posteriores (Hinterstränge), verstärkt durch die große Radikulärarterie A. radicularis magna (Adamkiewicz, meist links Th8–L2)',
      venousDrainage: 'Vv. spinales anteriores und posteriores mit Abfluss in den Plexus venosus vertebralis internus',
      innervation: 'Aufsteigende Bahnen: Hinterstrang-Lemniscus-medialis-System (epikritische Sensibilität, Propriozeption) und Tractus spinothalamicus (Schmerz, Temperatur). Absteigende motorische Hauptbahn: Tractus corticospinalis lateralis',
      originInsertion: 'Geht am Foramen magnum aus der Medulla oblongata hervor; kaudal über das Filum terminale am Os coccygis und lateral über 21 Paare von Ligg. denticulata verankert',
      metrics: [
        { label: 'Leitungsgeschwindigkeit', value: 'Myelinisierte Aα-Fasern: 80 – 120 m/s | Unmyelinisierte C-Fasern: 0,5 – 2 m/s' },
        { label: 'Plexus brachialis', value: 'C5–Th1 (Wurzeln → Trunci → Divisiones → Fasciculi → Endäste)' },
        { label: 'N. ischiadicus', value: 'L4–S3 (dickster Nerv des Körpers, ~2 cm Durchmesser am Beckenaustritt)' },
        { label: 'Vaskuläre Grenzzone', value: 'Mittlere Thorakalsegmente Th4–Th8' }
      ],
      clinicalPearls: 'Das Brown-Séquard-Syndrom (halbseitige Rückenmarksläsion) führt unterhalb der Läsion zu einer ipsilateralen spastischen Parese und einem Verlust der Tiefensensibilität sowie zu einer kontralateralen dissoziierten Empfindungsstörung für Schmerz und Temperatur.'
    }
  },
  'female-reproductive': {
    name: 'Gebärmutter, Eierstöcke und Eileiter (Weibliches Fortpflanzungssystem)',
    systemLabel: 'Weibliches Fortpflanzungs- & Hormonsystem',
    kids: {
      badge: '🌸 Die geschützte Wiege, in der ein Baby heranwachsen kann!',
      pronounce: 'Ge-BÄR-mut-ter (U-te-rus) und O-VA-ri-en',
      summary: 'Gut geschützt im weiblichen Becken liegen die Gebärmutter (Uterus), zwei mandelförmige Eierstöcke (Ovarien) und zwei geschwungene Eileiter (Tuben). Die Eierstöcke bilden wichtige Hormone, während die muskulöse Gebärmutter der sichere, dehnbare Raum ist, in dem vor der Geburt ein Baby wachsen kann.',
      whyYouNeedIt: 'Zusammen bilden diese Organe wichtige Botenstoffe (Östrogen und Progesteron), die für starke Knochen und das Heranwachsen sorgen.',
      funFacts: [
        'Ein neugeborenes Mädchen trägt bereits alle winzigen Eizellen (Oozyten), die es im Leben haben wird, sicher in seinen beiden Eierstöcken!',
        'Die Gebärmutter hat normalerweise die Form und Größe einer umgedrehten Birne und besteht aus einer der stärksten glatten Muskelschichten des Körpers.',
        'Am Ende der Eileiter sitzen feine, fingerförmige Fransen (Fimbrien), die die Eizelle sanft auffangen!'
      ],
      quickStats: [
        { label: 'Form der Gebärmutter', value: 'Birnenförmiges Muskelorgan (~7,5 cm)' },
        { label: 'Eierstöcke', value: '2 mandelgroße Drüsen (links & rechts)' },
        { label: 'Eileiter', value: '2 Verbindungswege zu den Eierstöcken' },
        { label: 'Wichtige Hormone', value: 'Östrogen & Progesteron' }
      ]
    },
    pro: {
      summary: 'Inneres weibliches Genitale im kleinen Becken zwischen Harnblase ventral (Excavatio vesicouterina) und Rektum dorsal (Excavatio rectouterina / Douglas-Raum), bestehend aus paarigen Ovarien, Tubae uterinae (Infundibulum mit Fimbrien, Ampulla, Isthmus, Pars uterina), Uterus (Fundus, Corpus, Isthmus, Cervix) und Vagina.',
      bloodSupply: 'A. uterina (aus der A. iliaca interna, überkreuzt den Ureter kranial — „water under the bridge“) in Anastomose mit der A. ovarica (direkt aus der Aorta abdominalis auf Höhe L2)',
      venousDrainage: 'Plexus venosus uterinus → Vv. iliacae internae; Plexus pampiniformis → V. ovarica dextra (in die VCI) und V. ovarica sinistra (im 90°-Winkel in die linke V. renalis)',
      innervation: 'Plexus uterovaginalis (aus dem Plexus hypogastricus inferior: Sympathikus Th10–L1; Parasympathikus über Nn. splanchnici pelvici S2–S4) sowie Plexus ovaricus',
      originInsertion: 'Verankert durch den Beckenboden (M. levator ani) sowie das Parametrium mit Lig. cardinale (Mackenrodt), Lig. sacrouterinum, Lig. teres uteri und Lig. latum uteri',
      metrics: [
        { label: 'Nulliparer Uterus', value: '~7,5 × 5,0 × 2,5 cm | Masse: 50 – 70 g' },
        { label: 'Physiologische Lage', value: 'Anteversio (gegenüber Vagina) & Anteflexio (gegenüber Cervix)' },
        { label: 'Ort der Befruchtung', value: 'Ampulla tubae uterinae' },
        { label: 'Transformationszone', value: 'Plattenepithel-Zylinderepithel-Grenze der Cervix uteri' }
      ],
      clinicalPearls: 'Bei Hysterektomien oder Adnexektomien sind zwei topographische Engstellen zum Ureter entscheidend: (1) die Vasa ovarica kreuzen im Lig. suspensorium ovarii ventral über den Ureter am Beckeneingang, und (2) die A. uterina überkreuzt den Ureter ~1,5 cm lateral des Fornix vaginae.'
    }
  },
  'mammary-glands': {
    name: 'Brustdrüse und Milchgänge (Glandula mammaria)',
    systemLabel: 'Integument- & Exokrines System',
    kids: {
      badge: '🍼 Spezialisierte Drüsen zur Milchbildung!',
      pronounce: 'BRUST-drü-se (Glan-du-la mam-MA-ri-a)',
      summary: 'Die Brustdrüsen liegen an der Vorderseite des Brustkorbs direkt über den Brustmuskeln. Sie bestehen aus 15 bis 20 Drüsenlappen, die wie die Stücke einer Orange im Kreis angeordnet sind und über feine Milchgänge verbunden werden.',
      whyYouNeedIt: 'Bei allen Säugetieren versorgen diese Drüsen Neugeborene mit wertvoller Nahrung, Flüssigkeit und schützenden Antikörpern!',
      funFacts: [
        'Das englische und wissenschaftliche Wort für Säugetiere („Mammalia“) stammt direkt vom lateinischen Wort „Mamma“ für Brustdrüse!',
        'Im Inneren sind die Drüsenlappen sternförmig wie die Blütenblätter einer Margerite angeordnet.',
        'Feste Bindegewebsfasern — die Cooper-Bänder — stützen und halten das Drüsengewebe.'
      ],
      quickStats: [
        { label: 'Drüsenlappen', value: '15 bis 20 radiäre Lappen pro Seite' },
        { label: 'Gangsystem', value: 'Milchgänge (Ductus lactiferi) & Milchsinus' },
        { label: 'Muskelschicht darunter', value: 'Großer Brustmuskel (M. pectoralis major)' },
        { label: 'Halteapparat', value: 'Cooper-Haltebänder (Retinacula cutis)' }
      ]
    },
    pro: {
      summary: 'Modifizierte apokrine Hautdrüse in der Subkutis der vorderen Thoraxwand (2.–6. Rippe, Parasternalrand bis mittlere Axillarlinie) auf der Faszie des M. pectoralis major und M. serratus anterior, getrennt durch die lockere retromammäre Verschiebeschicht.',
      bloodSupply: 'Rr. perforantes der A. thoracica interna (medial ~60 %), A. thoracica lateralis und A. thoracoacromialis (aus der A. axillaris) sowie Rr. perforantes der Aa. intercostales posteriores II–V',
      venousDrainage: 'Subareolärer Venenplexus (Circulus venosus Halleri) mit Abfluss in V. axillaris, V. thoracica interna und Vv. intercostales',
      innervation: 'Rr. cutanei anteriores und laterales der Nn. intercostales II–VI (Mamille = Dermatom Th4)',
      originInsertion: '15–20 tubuloalveoläre Drüsenlappen (Lobi glandulae mammariae), deren Ductus lactiferi über je einen Sinus lactiferus auf der Papilla mammaria münden; aufgehängt durch Ligg. suspensoria mammaria (Cooper)',
      metrics: [
        { label: 'Anatomische Ausdehnung', value: '2. bis 6. Rippe vertikal | Sternalrand bis mittlere Axillarlinie' },
        { label: 'Axillärer Ausläufer', value: 'Processus axillaris (Spence-Fortsatz) bis in die Achselhöhle' },
        { label: 'Lymphabfluss', value: '>75 % in ipsilaterale axilläre Lymphknoten (Level I–III); ~20 % parasternal' },
        { label: 'Endokrine Steuerung', value: 'Östrogen (Gänge), Progesteron (Alveolen), Prolaktin (Synthese), Oxytocin (Ejektion)' }
      ],
      clinicalPearls: 'Tumorinfiltration der Cooper-Ligamente führt zur klinisch sichtbaren Hauteinziehung (Plateau-Phänomen), während eine Lymphangiosis carcinomatosa der dermalen Lymphgefäße das Bild der „Orangenhaut“ (Peau d’orange) hervorruft.'
    }
  },
  'male-reproductive': {
    name: 'Prostata, Hoden und Samenleiter (Männliches Fortpflanzungssystem)',
    systemLabel: 'Männliches Fortpflanzungs- & Hormonsystem',
    kids: {
      badge: '🧬 Männliche Hormon- und Fortpflanzungsorgane',
      pronounce: 'PROS-ta-ta und HO-den (TES-tes)',
      summary: 'Das männliche Fortpflanzungssystem umfasst die beiden Hoden (die beim Heranwachsen das Hormon Testosteron bilden), die Nebenhoden, die Samenleiter sowie die walnussgroße Vorsteherdrüse (Prostata) direkt unterhalb der Harnblase.',
      whyYouNeedIt: 'Das Hormon Testosteron sorgt in der Pubertät für eine tiefere Stimme, stärkere Knochen und kräftigere Muskeln.',
      funFacts: [
        'Die Prostata hat etwa die Größe und Form einer Walnuss oder Kastanie und umschließt den Beginn der Harnröhre direkt unter der Blase.',
        'Würde man die mikroskopisch feinen Kanälchen in einem einzigen Hoden entwirren, wären sie mehrere hundert Meter lang!',
        'Der Samenleiter zieht in einem großen Bogen über das Schambein hinweg und hinter der Harnblase wieder nach unten.'
      ],
      quickStats: [
        { label: 'Größe der Prostata', value: 'Walnussgroße Drüse (~20 g)' },
        { label: 'Hoden (Testes)', value: '2 paarige Hormon- & Keimdrüsen' },
        { label: 'Wichtigstes Hormon', value: 'Testosteron' },
        { label: 'Verlauf', value: 'Hoden → Nebenhoden → Samenleiter → Harnröhre' }
      ]
    },
    pro: {
      summary: 'Männlicher Urogenitaltrakt, bestehend aus paarigen Testes (Tubuli seminiferi + Leydig-Zwischenzellen), Epididymides, Ductus deferentes (im Funiculus spermaticus durch den Leistenkanal), Glandulae vesiculosae, Ductus ejaculatorii und der fibromuskulären Prostata um die Pars prostatica urethrae.',
      bloodSupply: 'A. testicularis (direkt aus der Aorta abdominalis auf Höhe L2), A. ductus deferentis sowie Äste der A. vesicalis inferior und A. rectalis media für die Prostata',
      venousDrainage: 'Plexus pampiniformis (Gegenstrom-Wärmeaustauscher) → V. testicularis dextra (in die VCI) und V. testicularis sinistra (im 90°-Winkel in die linke V. renalis); Plexus venosus prostaticus (Santorini) mit Verbindung zum Batson-Wirbelvenenplexus',
      innervation: 'Plexus testicularis (Th10–Th11) und Plexus hypogastricus inferior (parasympathische Nn. splanchnici pelvici S2–S4 für Vasodilatation/Erektion; sympathische Fasern L1–L2 für Emission)',
      originInsertion: 'Zonale Anatomie der Prostata nach McNeal: periphere Zone (~70 % des Volumens, dorsal), zentrale Zone (~25 %) und Transitionszone (~5 %, periurethral)',
      metrics: [
        { label: 'Normale Prostatamasse', value: '~20 g (3 × 4 × 2 cm) kaudal des Blasenhalses' },
        { label: 'Zonen nach McNeal', value: 'Periphere Zone (Karzinom) vs. Transitionszone (benigne Hyperplasie / BPH)' },
        { label: 'Leistenkanal', value: 'Anulus inguinalis profundus (Fascia transversalis) → superficialis (M. obliquus ext.)' },
        { label: 'Thermoregulation', value: 'M. cremaster + Tunica dartos + Plexus pampiniformis halten ~34–35 °C' }
      ],
      clinicalPearls: 'Die benigne Prostatahyperplasie (BPH) entsteht in der periurethralen Transitionszone und führt frühzeitig zu obstruktiven Miktionsbeschwerden (LUTS), während das Prostatakarzinom überwiegend in der dorsalen peripheren Zone entsteht (digital-rektal tastbar).'
    }
  }
};

export const TISSUE_INFO_DE = {
  skin: {
    label: 'Haut (Cutis)',
    kids: 'Das ist deine Haut — die dehnbare, wasserfeste Schutzrüstung deines Körpers! Sie hält Keime fern, bewahrt Wasser im Körper und steckt voller winziger Sensoren für Berührung, Wärme und Kälte.',
    pro: 'Integument: verhorntes mehrschichtiges Plattenepithel (Epidermis) über vaskularisierter kollagenreicher Dermis und fettreicher Subkutis.'
  },
  hair: {
    label: 'Haare (Pili)',
    kids: 'Haare halten deinen Kopf warm und schützen ihn vor der Sonne. Jedes Haar wächst aus einer winzigen Tasche in der Haut, dem Haarfollikel.',
    pro: 'Keratinisierte Terminalhaarschäfte aus dermalen Haarfollikeln; UV-Photoprotektion und thermische Isolation.'
  },
  muscle: {
    label: 'Skelettmuskel',
    kids: 'Das ist ein Muskel! Muskeln bestehen aus Bündeln elastischer Fasern, die an deinen Knochen ziehen, damit du dich bewegen kannst. Sie arbeiten immer im Team.',
    pro: 'Quergestreifte, willkürliche Skelettmuskulatur. Zu beachten sind Faserverlauf, Ursprung/Ansatz und periphere Innervation.'
  },
  tendon: {
    label: 'Sehne (Tendo)',
    kids: 'Das ist eine Sehne — ein superstarkes Seil, das den Muskel mit dem Knochen verbindet und am Knochen zieht, wenn sich der Muskel anspannt.',
    pro: 'Straffes, parallelfaseriges Bindegewebe (Typ-I-Kollagen) zur Kraftübertragung vom Muskel auf das Skelett.'
  },
  ligament: {
    label: 'Band (Ligamentum)',
    kids: 'Bänder sind feste Haltegurte, die deine Knochen an den Gelenken zusammenhalten, während du dich bewegst.',
    pro: 'Straffes Bindegewebe zwischen Skelettelementen zur passiven Gelenkstabilisierung und Propriozeption.'
  },
  bone: {
    label: 'Knochen (Os)',
    kids: 'Das ist ein Knochen! Knochen sind lebendige Bauteile deines Körpers: Sie stützen dich, schützen deine Organe und bilden im Knochenmark neue Blutzellen.',
    pro: 'Lamellenknochen mit kortikaler (Substantia compacta) und trabekulärer (Substantia spongiosa) Architektur; Stützfunktion, Mineralhomöostase und Hämatopoese.'
  },
  tooth: {
    label: 'Zahn (Dens)',
    kids: 'Deine Zähne sind mit Zahnschmelz überzogen — dem härtesten Material im gesamten menschlichen Körper!',
    pro: 'Zahnschmelz (Enamelum) über Dentin und Pulpa, über das Parodontium (Gomphosis) in der Alveole verankert; permanentes Gebiss mit 32 Zähnen.'
  },
  cartilage: {
    label: 'Knorpel (Cartilago)',
    kids: 'Knorpel ist glattes, biegsames Gewebe — genau wie deine Nasenspitze! Er polstert die Gelenke und hält deine Luftröhre offen.',
    pro: 'Avaskulärer hyaliner, elastischer oder Faserknorpel (Ernährung durch Diffusion); reibungsarme Gelenkflächen.'
  },
  artery: {
    label: 'Arterie (Schlagader)',
    kids: 'Das ist eine Arterie (Schlagader) — ein starkes, elastisches Rohr, das hellrotes, sauerstoffreiches Blut VOM Herzen in den ganzen Körper transportiert!',
    pro: 'Systemische Arterie (kräftige Tunica media). Transportiert sauerstoffreiches Blut zentrifugal mit pulsatiler Strömung.'
  },
  arteryDeoxy: {
    label: 'Lungenarterie',
    kids: 'Diese besondere Arterie bringt sauerstoffarmes Blut vom Herzen zur Lunge, um frischen Sauerstoff aufzunehmen — deshalb ist sie blau gefärbt!',
    pro: 'Pulmonalarterieller Gefäßbaum: leitet desoxygeniertes Blut aus dem rechten Ventrikel in die Lunge (Niederdrucksystem).'
  },
  vein: {
    label: 'Vene (Blutader)',
    kids: 'Das ist eine Vene! Venen bringen das Blut, das seinen Sauerstoff bereits abgegeben hat, ZURÜCK zum Herzen und besitzen Einwegklappen.',
    pro: 'Systemische Vene (Kapazitätsgefäß mit Venenklappen in den Extremitäten). Leitet desoxygeniertes Blut zum rechten Atrium zurück.'
  },
  veinOxy: {
    label: 'Lungenvene',
    kids: 'Diese Vene bringt frisches, sauerstoffreiches Blut aus der Lunge zurück zum Herzen — deshalb ist sie rot dargestellt!',
    pro: 'Vena pulmonalis: führt frisch oxygeniertes Blut aus den Lungenkapillaren in das linke Atrium.'
  },
  nerve: {
    label: 'Nerv (Nervus)',
    kids: 'Nerven sind die Stromkabel deines Körpers. Sie schicken blitzschnelle Nachrichten zwischen deinem Gehirn und jedem Körperteil hin und her.',
    pro: 'Peripherer Nerv oder Hirnnerv: myelinisierte und unmyelinisierte Axone, umhüllt von Endoneurium, Perineurium und Epineurium.'
  },
  cord: {
    label: 'Rückenmark (Medulla spinalis)',
    kids: 'Das Rückenmark ist das Hauptkabel deines Nervensystems und verläuft gut geschützt im Tunnel deiner Wirbelsäule.',
    pro: 'Medulla spinalis: zentrale graue Substanz und periphere weiße Leitungsbahnen; Conus medullaris auf Höhe L1–L2.'
  },
  brain: {
    label: 'Gehirn (Encephalon)',
    kids: 'Das ist ein Teil deines Gehirns — deiner Kommandozentrale! Es steuert Gedanken, Bewegungen, Sehen, Erinnerungen und Gefühle.',
    pro: 'Struktur des Zentralnervensystems (ZNS). Korrelation mit Gefäßterritorium und funktioneller Rindenlokalisation.'
  },
  dura: {
    label: 'Harte Hirnhaut (Dura mater)',
    kids: 'Diese feste Schutzhülle (harte Hirnhaut) umschließt und stützt dein Gehirn.',
    pro: 'Pachymeninx (Dura mater cranialis), die die Schädelhöhle unterteilt und die venösen Sinus durae matris führt.'
  },
  csf: {
    label: 'Ventrikelsystem & Liquor',
    kids: 'Mit Flüssigkeit gefüllte Räume tief im Gehirn, die es bei Erschütterungen wie ein Wasserbett abpolstern!',
    pro: 'Hirnventrikelsystem mit Liquor cerebrospinalis (~150 mL Gesamtvolumen, gebildet im Plexus choroideus).'
  },
  heart: {
    label: 'Herz (Cor)',
    kids: 'Ein Teil deines Herzens — der unermüdlichen Muskelpumpe, die rund 100.000-mal am Tag schlägt!',
    pro: 'Kardiale Struktur. Korrelation mit Koronarversorgung, Erregungsleitungssystem und Klappenfunktion.'
  },
  lung: {
    label: 'Lunge (Pulmo)',
    kids: 'Deine Lungenflügel sind schwammige Ballons, die bei jedem Atemzug verbrauchte Luft gegen frischen Sauerstoff tauschen.',
    pro: 'Lungenparenchym: ~300–500 Millionen Alveolen mit ~70–85 m² Gasaustauschoberfläche.'
  },
  airway: {
    label: 'Atemwege (Tracheobronchialbaum)',
    kids: 'Das sind deine Luftrohre (Luftröhre und Bronchien), die sich wie ein Baum in der Lunge verzweigen.',
    pro: 'Luftleitendes System (Tracheobronchialbaum): ~23 dichotome Teilungsgenerationen mit Knorpelspangen.'
  },
  liver: {
    label: 'Leber (Hepar)',
    kids: 'Die Leber ist die Chemiefabrik deines Körpers: Sie reinigt das Blut, speichert Energie und bildet Gallenflüssigkeit.',
    pro: 'Leberparenchym (Couinaud-Segmente) mit dualer Perfusion aus V. portae (~75 %) und A. hepatica propria (~25 %).'
  },
  gallbladder: {
    label: 'Gallenblase (Vesica biliaris)',
    kids: 'Die Gallenblase speichert die grüne Gallenflüssigkeit, die beim Verdauen von Fetten hilft.',
    pro: 'Gallenblase und Gallenwege: speichert und konzentriert Galle mit Abfluss über den Ductus cysticus in den Ductus choledochus.'
  },
  stomach: {
    label: 'Magen (Gaster)',
    kids: 'Dein Magen ist ein dehnbarer Muskelbeutel, der das Essen mit starker Säure durchmischt.',
    pro: 'Gaster: sezerniert HCl, Pepsinogen und Intrinsic-Faktor und durchmischt den Speisebrei (Chymus).'
  },
  intestine: {
    label: 'Dünndarm (Intestinum tenue)',
    kids: 'Der Dünndarm ist ein langes, gewundenes Rohr, das die Nährstoffe aus dem Essen in dein Blut aufnimmt.',
    pro: 'Dünndarm (Duodenum, Jejunum, Ileum): Hauptort der enzymatischen Verdauung und Nährstoffresorption (~6 m in vivo).'
  },
  colon: {
    label: 'Dickdarm (Colon)',
    kids: 'Der Dickdarm holt das Wasser zurück und beherbergt Billionen nützlicher Darmbakterien.',
    pro: 'Dickdarm (Intestinum crassum): Wasser- und Elektrolytresorption sowie mikrobielle Fermentation.'
  },
  pancreas: {
    label: 'Bauchspeicheldrüse (Pancreas)',
    kids: 'Die Bauchspeicheldrüse bildet wichtige Verdauungssäfte und das Hormon Insulin, das deinen Blutzucker regelt.',
    pro: 'Gemischte exokrine (Verdauungsenzyme) und endokrine Drüse (Langerhans-Inseln: Insulin, Glukagon).'
  },
  kidney: {
    label: 'Niere (Ren)',
    kids: 'Deine Nieren sind bohnenförmige Filter, die das Blut waschen und Urin bilden.',
    pro: 'Nierenparenchym: ~1 Million Nephrone pro Niere; GFR ~120 mL/min; endokrine Bildung von Renin, EPO und Calcitriol.'
  },
  bladder: {
    label: 'Harnblase (Vesica urinaria)',
    kids: 'Die Harnblase ist ein dehnbarer Beutel, der den Urin sammelt, bis du zur Toilette gehst.',
    pro: 'Harnblase und Urethra: glatter M. detrusor vesicae mit einer physiologischen Kapazität von ~400–600 mL.'
  },
  spleen: {
    label: 'Milz (Splen / Lien)',
    kids: 'Die Milz filtert dein Blut und unterstützt deine Abwehrkräfte im Kampf gegen Krankheitserreger.',
    pro: 'Sekundäres lymphatisches Organ: rote Pulpa (Erythrozytenabbau) und weiße Pulpa (Immunantwort).'
  },
  eye: {
    label: 'Auge (Oculus)',
    kids: 'Ein Teil deines Auges — der Kamera deines Körpers, die Licht bündelt, damit dein Gehirn Bilder sehen kann!',
    pro: 'Okuläre Struktur. Korrelation mit der optischen Achse (Cornea → Linse → Retina) und der Orbita.'
  },
  pupil: {
    label: 'Augenlinse (Lens)',
    kids: 'Die Augenlinse liegt direkt hinter der Pupille und verändert ihre Form, um nah und fern scharfzustellen.',
    pro: 'Kristalllinse und Zonulafasern; Akkommodation durch den M. ciliaris (Linsentrübung = Katarakt).'
  },
  lip: {
    label: 'Lippe (Labium)',
    kids: 'Deine Lippen helfen dir beim Sprechen, Essen und Lächeln. Sie sind rosig, weil viele feine Blutgefäße durchscheinen.',
    pro: 'Lippen: M. orbicularis oris, bedeckt von dünnem, kapillarreichem Lippenrot.'
  },
  gland: {
    label: 'Drüse (Glandula)',
    kids: 'Drüsen stellen spezielle Flüssigkeiten oder wichtige Botenstoffe (Hormone) für deinen Körper her.',
    pro: 'Exokrines oder endokrines Drüsengewebe; Korrelation mit Sekretionsprodukt und neurovaskulärer Steuerung.'
  },
  tongue: {
    label: 'Zunge & Mundboden (Lingua)',
    kids: 'Dieses bewegliche Muskelgewebe hilft dir beim Schmecken, Kauen, Schlucken und Sprechen.',
    pro: 'Orale Weichteil- und Zungenmuskulatur; motorische und sensorische/gustatorische Innervation über HN V3, VII, IX und XII.'
  },
  mesentery: {
    label: 'Gekröse (Mesenterium)',
    kids: 'Diese dünne Gewebefalte hält deinen Darm an seinem Platz und führt seine Blutgefäße.',
    pro: 'Peritonealduplikatur zur Aufhängung des Darmrohrs mit zuführenden mesenterialen Gefäßen, Nerven und Lymphbahnen.'
  },
  reproductive: {
    label: 'Fortpflanzungsorgan',
    kids: 'Gehört zum Fortpflanzungssystem: den Organen, die Hormone bilden und im Erwachsenenalter das Kinderkriegen ermöglichen.',
    pro: 'Struktur des Reproduktions- und endokrinen Systems (NIH HuBMAP & BodyParts3D Referenzmodelle).'
  },
  organ: {
    label: 'Inneres Organ',
    kids: 'Eines deiner inneren Organe, das im Team mit den anderen arbeitet, um dich gesund zu halten.',
    pro: 'Anatomische Viszeralstruktur aus dem Foundational Model of Anatomy (FMA).'
  }
};

export const QUIZ_QUESTIONS_DE = [
  {
    id: 'q1',
    targetPartId: 'heart',
    question: 'Welches muskulöse Organ schlägt rund 100.000-mal am Tag und besitzt 4 Kammern, die das Blut durch deinen gesamten Körper pumpen?',
    options: ['Das Herz', 'Der Magen', 'Die Nieren', 'Der Brustkorb'],
    correctIndex: 0,
    explanation: 'Richtig! Dein Herz ist eine vierkammerige Muskelpumpe von der Größe deiner Faust, die täglich rund 7.570 Liter Blut durch den Körper pumpt!'
  },
  {
    id: 'q2',
    targetPartId: 'aorta',
    question: 'Wie heißt in unserer 3D-Blutfluss-Ansicht die größte ROTE Schlagader, die wie eine Autobahn oben aus dem Herzen entspringt?',
    options: ['Der Ischiasnerv', 'Die Aorta (Hauptschlagader)', 'Die Luftröhre', 'Die Kniescheibe'],
    correctIndex: 1,
    explanation: 'Volltreffer! Die Aorta ist die größte elastische Arterie des menschlichen Körpers und leitet sauerstoffreiches Blut aus der linken Herzkammer in den Körper.'
  },
  {
    id: 'q3',
    targetPartId: 'vena-cava',
    question: 'Warum werden die Obere und Untere Hohlvene (Vena cava) und andere Venen BLAU dargestellt, während das Blut zum Herzen zurückfließt?',
    options: [
      'Weil das Blut darin eiskalt gefroren ist',
      'Weil Venen das Blut, das seinen Sauerstoff bereits abgegeben hat, zurück zu Herz und Lunge bringen',
      'Weil Venen nur Wasser transportieren',
      'Weil Venen das Blut in die Fingerspitzen drücken'
    ],
    correctIndex: 1,
    explanation: 'Genau! Arterien (rot) leiten sauerstoffreiches Blut vom Herzen weg, während Venen (blau) das sauerstoffarme Blut wieder zurück zu Herz und Lunge führen.'
  },
  {
    id: 'q4',
    targetPartId: 'femur-tibia-fibula',
    question: 'Welcher Knochen in deinem Oberschenkel ist der längste, schwerste und stärkste Knochen im gesamten menschlichen Körper?',
    options: ['Die Speiche (Radius)', 'Das Schlüsselbein', 'Der Oberschenkelknochen (Femur)', 'Das Brustbein (Sternum)'],
    correctIndex: 2,
    explanation: 'Klasse! Das Femur (der Oberschenkelknochen) macht etwa ein Viertel deiner Körpergröße aus und ist bezogen auf sein Gewicht stabiler als Beton!'
  },
  {
    id: 'q5',
    targetPartId: 'liver',
    question: 'Welches innere Organ unter deinen rechten Rippen erfüllt über 500 chemische Aufgaben, bildet Gallenflüssigkeit und kann sogar nachwachsen?',
    options: ['Die Leber', 'Der Deltamuskel', 'Die Kniescheibe', 'Die Drosselvene'],
    correctIndex: 0,
    explanation: 'Brillant! Die Leber ist die Chemiefabrik und der Filter deines Körpers — und das einzige innere Organ, das sich selbst regenerieren kann!'
  },
  {
    id: 'q6',
    targetPartId: 'brain',
    question: 'Welches Organ liegt sicher geschützt unter deinem Schädelhelm und steuert mit 86 Milliarden Nervenzellen deine Gedanken, Erinnerungen und Sinne?',
    options: ['Die Lunge', 'Das Gehirn', 'Das Becken', 'Der Bizeps'],
    correctIndex: 1,
    explanation: 'Perfekt! Dein Gehirn ist die Kommandozentrale deines Körpers und verschickt elektrische Signale mit bis zu 430 km/h!'
  }
];
