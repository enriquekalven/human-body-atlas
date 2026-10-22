/**
 * Italian (it) translations for:
 *  - All 27 curated ANATOMY_PARTS (Kids Explorer & Clinical Pro modes)
 *  - All 37 TISSUE_INFO categories
 *  - All 6 ANATOMY_QUIZ_QUESTIONS
 */

export const PARTS_IT = {
  'integumentary-skin': {
    name: 'Pelle / Cute (Apparato Tegumentario)',
    systemLabel: 'Apparato Tegumentario',
    kids: {
      badge: '🛡️ La super tuta spaziale che protegge il tuo corpo!',
      pronounce: 'PÈL-le (Epidermide)',
      summary: 'La tua pelle è in realtà l’organo più grande di tutto il tuo corpo! Funziona come una tuta impermeabile che si ripara da sola, tiene fuori i microbi, trattiene l’acqua e ti rinfresca con il sudore quando corri.',
      whyYouNeedIt: 'Senza la pelle i germi entrerebbero facilmente e non potresti sentire un abbraccio caldo, una brezza fresca o il solletico!',
      funFacts: [
        'Ogni minuto perdi circa 30.000–40.000 cellule morte della pelle, mentre sotto ne crescono subito di nuove!',
        'La pelle possiede milioni di piccole ghiandole sudoripare che funzionano come il climatizzatore naturale del corpo.',
        'La pelle più spessa si trova sotto la pianta dei piedi, mentre la più sottile è sulle palpebre!'
      ],
      quickStats: [
        { label: 'Strati principali', value: '3 (Epidermide, Derma, Ipoderma)' },
        { label: 'Ricambio', value: 'Nuova epidermide ogni ~28 giorni' },
        { label: 'Sensori tattili', value: 'Milioni di terminazioni nervose' },
        { label: 'Superpotere', value: 'Produce vitamina D grazie al sole!' }
      ]
    },
    pro: {
      summary: 'Organo barriera multistrato costituito da epidermide pavimentosa stratificata cheratinizzata, derma collagenico vascolarizzato e ipoderma (tela sottocutanea) adiposo.',
      bloodSupply: 'Plessi vascolari cutanei profondi e sottopapillari derivanti da arterie perforanti muscolocutanee e fasciocutanee',
      venousDrainage: 'Plessi venosi dermici superficiali e profondi tributari della rete venosa sottocutanea',
      innervation: 'Rami sensitivi cutanei (corpuscoli di Meissner, Pacini, dischi di Merkel, terminazioni di Ruffini e terminazioni libere); fibre simpatiche colinergiche sudomotorie',
      originInsertion: 'In continuità con le mucose alle giunzioni mucocutanee; ancorata alla fascia profonda tramite i retinacoli cutanei',
      metrics: [
        { label: 'Superficie corporea', value: '1,5 – 2,0 m² (adulto)' },
        { label: 'Massa totale', value: '~15% – 16% del peso corporeo' },
        { label: 'Spessore', value: '0,5 mm (palpebra) – 4,0 mm (tallone)' },
        { label: 'Flusso ematico dermico', value: '~250 mL/min a riposo (fino a 6–8 L/min in ipertermia)' }
      ],
      clinicalPearls: 'L’estensione delle ustioni si valuta con la «regola del nove» di Wallace. Le anastomosi arterovenose (glomi) del derma acrale regolano la termoregolazione centrale.'
    }
  },
  brain: {
    name: 'Cervello / Encefalo (Cervello, Cervelletto e Tronco Encefalico)',
    systemLabel: 'Sistema Nervoso e degli Organi',
    kids: {
      badge: '🧠 Il centro di comando del tuo corpo!',
      pronounce: 'Cer-VÈL-lo (En-CÈ-fa-lo)',
      summary: 'Il cervello è il capo di tutto il tuo corpo! Più veloce di qualsiasi supercomputer, ti permette di pensare, sognare, giocare, ricordare gli amici e controlla automaticamente il respiro e il battito del cuore.',
      whyYouNeedIt: 'Ogni pensiero, movimento, suono o colore viene elaborato da circa 86 miliardi di cellule nervose chiamate neuroni!',
      funFacts: [
        'Quando sei sveglio, il tuo cervello genera abbastanza elettricità da accendere una piccola lampadina LED!',
        'La metà sinistra del cervello controlla la parte destra del corpo, e la metà destra controlla la parte sinistra!',
        'Il tessuto cerebrale in sé non possiede recettori del dolore.'
      ],
      quickStats: [
        { label: 'Cellule cerebrali', value: '~86 miliardi di neuroni' },
        { label: 'Velocità dei segnali', value: 'Fino a 430 km/h' },
        { label: 'Consumo energetico', value: 'Usa ~20% di tutto l’ossigeno del corpo' },
        { label: 'Consistenza e difesa', value: 'Morbido come un budino, protetto dal cranio' }
      ]
    },
    pro: {
      summary: 'Centro integratore supremo del sistema nervoso centrale (SNC), suddiviso in telencefalo (emisferi cerebrali), diencefalo, mesencefalo, ponte, bulbo (midollo allungato) e cervelletto.',
      bloodSupply: 'Circolo anteriore (arterie carotidi interne) e posteriore (sistema vertebro-basilare) anastomizzati nel poligono di Willis',
      venousDrainage: 'Vene cerebrali superficiali e profonde drenanti nei seni venosi della dura madre e quindi nelle vene giugulari interne',
      innervation: 'Origine dei nervi cranici I–XII; la dura madre è innervata da rami meningei del trigemino (NC V), vago (NC X) e nervi cervicali superiori',
      originInsertion: 'Sospeso nel liquido cefalorachidiano (LCR) nella cavità cranica e compartimentato dalle pieghe durali (falce cerebrale e tentorio del cervelletto)',
      metrics: [
        { label: 'Massa adulta', value: '1.300 – 1.400 g (~2% del peso corporeo)' },
        { label: 'Flusso ematico cerebrale', value: '~50 mL / 100g / min (~750 mL/min totale)' },
        { label: 'Volume LCR', value: '~150 mL (~500 mL/die prodotti dai plessi corioidei)' },
        { label: 'Pressione intracranica', value: '7 – 15 mmHg (adulto supino)' }
      ],
      clinicalPearls: 'Per la dottrina di Monro-Kellie il volume intracranico è costante; masse occupanti spazio innalzano la PIC causando erniazione uncale o tonsillare. L’occlusione dell’arteria cerebrale media (ACM) causa emiplegia controlaterale brachio-facciale e afasia (emisfero dominante).'
    }
  },
  heart: {
    name: 'Cuore (Pompa Muscolare a 4 Camere)',
    systemLabel: 'Apparato Cardiovascolare',
    kids: {
      badge: '❤️ La super pompa che non si ferma mai!',
      pronounce: 'KWÒ-re',
      summary: 'Il tuo cuore è un muscolo fortissimo grande quanto il tuo pugno chiuso! Batte circa 100.000 volte al giorno per pompare sangue fresco ricco di ossigeno al cervello, ai muscoli e fino alla punta dei piedi.',
      whyYouNeedIt: 'Il sangue porta ossigeno ed energia a ogni cellula. Il cuore fa circolare il sangue 24 ore su 24, anche mentre dormi!',
      funFacts: [
        'Il cuore ha 4 camere (atri e ventricoli) e porte a senso unico (valvole) che fanno «tum-tum» quando si chiudono!',
        'In un solo giorno il tuo cuore pompa circa 7.570 litri di sangue!',
        'Quando corri, il cuore batte più veloce per portare più ossigeno ai muscoli.'
      ],
      quickStats: [
        { label: 'Dimensioni', value: 'Grande circa quanto il tuo pugno' },
        { label: 'Battiti al giorno', value: '~100.000 battiti' },
        { label: 'Camere', value: '4 (Atrio dx/sx e Ventricolo dx/sx)' },
        { label: 'Portata', value: '~5 litri al minuto' }
      ]
    },
    pro: {
      summary: 'Pompa fibromuscolare tetracamerale situata nel mediastino medio entro il sacco pericardico, che alimenta simultaneamente il circolo polmonare (a bassa pressione) e il circolo sistemico (ad alta pressione).',
      bloodSupply: 'Arterie coronarie sinistra (discendente anteriore IVA e circonflessa) e destra (ACD) originanti dai seni aortici di Valsalva; perfusione prevalentemente diastolica',
      venousDrainage: 'Seno coronario (vene cardiache magna, media e parva) e vene cardiache anteriori che sboccano direttamente nell’atrio destro',
      innervation: 'Sistema di conduzione specifico (nodo SA → nodo AV → fascio di His → fibre di Purkinje) modulato dal plesso cardiaco (nervo vago NC X e simpatico T1–T4)',
      originInsertion: 'Apice rivolto in basso, avanti e a sinistra (5° spazio intercostale sulla linea emiclaveare sinistra); base formata principalmente dall’atrio sinistro (T6–T9)',
      metrics: [
        { label: 'Gittata cardiaca (GC)', value: '~5,0 L/min (Gittata sistolica ~70 mL × 72 bpm)' },
        { label: 'Frazione d’eiezione (FEVS)', value: '55% – 70% (normale)' },
        { label: 'Pressioni cavitarie', value: 'VS: 120/8 mmHg | VD: 25/4 mmHg' },
        { label: 'Massa adulta', value: '250 – 350 g' }
      ],
      clinicalPearls: 'L’occlusione dell’arteria interventricolare anteriore (IVA) provoca infarto antero-settale (sopraslivellamento ST in V1–V4). L’occlusione della coronaria destra (ACD) causa infarto inferiore (DII, DIII, aVF) e rischio di blocco AV.'
    }
  },
  lungs: {
    name: 'Polmoni (Destro e Sinistro)',
    systemLabel: 'Apparato Respiratorio',
    kids: {
      badge: '🫁 Palloncini spugnosi pieni di ossigeno!',
      pronounce: 'Pol-MÓ-ni',
      summary: 'I tuoi due polmoni riempiono il petto come morbidi palloncini spugnosi! Quando inspiri catturano l’ossigeno fresco dall’aria per il sangue; quando espiri buttano fuori l’anidride carbonica.',
      whyYouNeedIt: 'Ogni cellula del corpo ha bisogno di ossigeno per produrre energia. Polmoni e cuore lavorano in squadra per rifornire tutto il corpo!',
      funFacts: [
        'Il polmone sinistro è leggermente più piccolo del destro per fare spazio al cuore!',
        'Dentro i polmoni ci sono circa 300 milioni di minuscole sacche d’aria chiamate alveoli — distesi coprirebbero un campo da tennis!',
        'I polmoni sono gli unici organi del corpo umano capaci di galleggiare sull’acqua!'
      ],
      quickStats: [
        { label: 'Respiri al giorno', value: '~20.000 respiri' },
        { label: 'Sacche d’aria', value: '~300 – 500 milioni di alveoli' },
        { label: 'Lobi polmonari', value: '3 a destra, 2 a sinistra' },
        { label: 'Superficie di scambio', value: 'Grande come un campo da tennis!' }
      ]
    },
    pro: {
      summary: 'Organi pari deputati all’ematosi situati nelle cavità pleuriche. Il polmone destro presenta 3 lobi (superiore, medio, inferiore separati dalle scissure obliqua e orizzontale) e il sinistro 2 lobi (superiore con incisura cardiaca e lingula, e inferiore).',
      bloodSupply: 'Doppia vascolarizzazione: arterie polmonari (sangue deossigenato per lo scambio gassoso) e arterie bronchiali (rami dell’aorta toracica nutritizi per l’albero bronchiale)',
      venousDrainage: 'Quattro vene polmonari (sangue ossigenato all’atrio sinistro) e vene bronchiali (sistema azygos)',
      innervation: 'Plesso polmonare: fibre parasimpatiche vagali (broncocostrizione) e simpatiche T2–T5 (broncodilatazione)',
      originInsertion: 'L’apice sporge ~2,5 cm sopra il terzo mediale della clavicola; la base poggia sulla cupola diaframmatica',
      metrics: [
        { label: 'Capacità polmonare totale', value: '~6,0 L (Volume corrente ~500 mL)' },
        { label: 'Superficie alveolare', value: '~70 – 85 m²' },
        { label: 'Barriera aria-sangue', value: '0,2 – 0,5 µm' },
        { label: 'Rapporto V/Q', value: '~0,8 medio (più alto agli apici che alle basi)' }
      ],
      clinicalPearls: 'Il bronco principale destro è più largo, più corto e più verticale del sinistro; pertanto i corpi estranei inalati si incuneano più frequentemente a destra.'
    }
  },
  liver: {
    name: 'Fegato e Cistifellea (Colecisti)',
    systemLabel: 'Apparato Digerente e Metabolico',
    kids: {
      badge: '🧪 La fabbrica chimica e il super filtro del corpo!',
      pronounce: 'FÉ-ga-to e Cis-ti-fèl-LEA',
      summary: 'Nascosto sotto le costole di destra, il fegato è il campione del multitasking! Pulisce il sangue, immagazzina zuccheri energetici, produce la bile verde per digerire i grassi e fabbrica proteine che fermano il sangue quando ti sbucci un ginocchio.',
      whyYouNeedIt: 'Tutto ciò che mangi e bevi passa dal controllo del fegato per dare al corpo energia pulita e vitamine!',
      funFacts: [
        'Il fegato svolge oltre 500 compiti chimici diversi contemporaneamente!',
        'Superpotere incredibile: il fegato è l’unico organo interno capace di rigenerarsi e ricrescere!',
        'In ogni istante circa il 13% di tutto il tuo sangue si trova dentro il fegato.'
      ],
      quickStats: [
        { label: 'Funzioni', value: 'Oltre 500 funzioni vitali' },
        { label: 'Produzione di bile', value: '600 – 1.000 mL al giorno' },
        { label: 'Superpotere', value: 'Si rigenera da solo!' },
        { label: 'Peso', value: 'Il più pesante organo interno (~1,5 kg)' }
      ]
    },
    pro: {
      summary: 'Più voluminosa ghiandola parenchimatosa e centrale metabolica dell’organismo, situata nell’ipocondrio destro ed epigastrio, suddivisa in 8 segmenti funzionali indipendenti di Couinaud.',
      bloodSupply: 'Doppio afflusso: vena porta (~75% del flusso, sangue refluo splancnico ricco di nutrienti) e arteria epatica propria (~25% del flusso, sangue ossigenato dal tronco celiaco)',
      venousDrainage: 'Vene centrolobulari → vene epatiche (sovraepatiche) destra, media e sinistra → vena cava inferiore (VCI)',
      innervation: 'Plesso epatico (simpatico T7–T10 e vago); la distensione della capsula di Glisson irradia dolore alla spalla destra tramite il nervo frenico (C3–C5)',
      originInsertion: 'Sospeso al diaframma tramite i legamenti falciforme, coronario e triangolari; triade portale contenuta nel legamento epatoduodenale',
      metrics: [
        { label: 'Massa adulta', value: '1.400 – 1.600 g (~2,5% del peso corporeo)' },
        { label: 'Flusso ematico epatico', value: '~1.500 mL/min (~25% della gittata cardiaca)' },
        { label: 'Secrezione biliare', value: '600 – 1.000 mL/die' },
        { label: 'Pressione portale normale', value: '5 – 10 mmHg (> 12 mmHg = ipertensione portale)' }
      ],
      clinicalPearls: 'La manovra di Pringle consiste nel clampaggio del peduncolo epatico (legamento epatoduodenale: arteria epatica propria, vena porta, coledoco) attraverso il forame epiploico di Winslow per arrestare un’emorragia epatica.'
    }
  },
  stomach: {
    name: 'Stomaco',
    systemLabel: 'Apparato Digerente',
    kids: {
      badge: '🥣 Il frullatore acido del cibo!',
      pronounce: 'STÒ-ma-ko',
      summary: 'Il tuo stomaco è una sacca muscolare elastica a forma di «J»! Quando ingoi il cibo, lo impasta e lo mescola con succhi gastrici acidi per trasformarlo in una pappa nutriente facile da assorbire.',
      whyYouNeedIt: 'Sminuzza il cibo in particelle piccolissime ed elimina i batteri che potrebbero essere entrati con gli alimenti!',
      funFacts: [
        'L’acido dello stomaco è fortissimo, ma uno strato speciale di muco protegge le pareti dello stomaco!',
        'Il brontolio della pancia è il suono dei muscoli dello stomaco che spingono aria e liquidi.',
        'Lo stomaco di un adulto può dilatarsi fino a contenere circa 1,5 litri di cibo e acqua!'
      ],
      quickStats: [
        { label: 'Forma', value: 'Sacca elastica a forma di «J»' },
        { label: 'Strati muscolari', value: '3 strati di muscolatura liscia' },
        { label: 'Acidità', value: 'pH 1,5 – 3,5 (acido cloridrico)' },
        { label: 'Tempo di digestione', value: '2 – 4 ore per pasto' }
      ]
    },
    pro: {
      summary: 'Dilatazione muscolare intraperitoneale a J dell’intestino anteriore, suddivisa in cardias, fondo, corpo e regione pilorica (antro e canale pilorico), dotata di tonaca muscolare a 3 strati (obliquo interno, circolare medio, longitudinale esterno).',
      bloodSupply: 'Arcate anastomotiche dal tronco celiaco: arterie gastriche sinistra e destra (piccola curvatura), gastroepiploiche sinistra e destra (grande curvatura) e gastriche brevi (fondo)',
      venousDrainage: 'Vene omonime tributarie direttamente o tramite le vene splenica e mesenterica superiore della vena porta',
      innervation: 'Tronchi vagali anteriore e posteriore (NC X: secrezione acida e motilità) e nervi grandi splancnici (T5–T9 tramite il plesso celiaco)',
      originInsertion: 'Compreso tra lo sfintere esofageo inferiore (T11) e il piloro (L1), fissato dal piccolo e dal grande omento',
      metrics: [
        { label: 'pH luminale', value: '1,5 – 3,5 (secrezione di HCl dalle cellule parietali)' },
        { label: 'Secrezione gastrica', value: '1,5 – 2,5 L/die' },
        { label: 'Capacità', value: '1,0 – 1,5 L (~50 mL a digiuno)' },
        { label: 'Principali secrezioni', value: 'HCl, fattore intrinseco, pepsinogeno, gastrina, grelina' }
      ],
      clinicalPearls: 'Un’ulcera peptica della parete posteriore del bulbo duodenale può erodere l’arteria gastroduodenale causando emorragia digestiva massiva. La perdita delle cellule parietali causa carenza di fattore intrinseco e anemia perniciosa (deficit di vitamina B12).'
    }
  },
  kidneys: {
    name: 'Reni (Destro e Sinistro)',
    systemLabel: 'Apparato Urinario',
    kids: {
      badge: '🫘 I gemelli super-filtri del sangue!',
      pronounce: 'RÈ-ni',
      summary: 'Nella parte bassa della schiena ci sono due organi a forma di fagiolo: i reni! Filtrano e puliscono tutto il tuo sangue decine di volte al giorno, trattenendo l’acqua buona e trasformando le scorie in pipì (urina).',
      whyYouNeedIt: 'Mantengono il perfetto equilibrio di acqua e sali minerali nel corpo e aiutano a regolare la pressione del sangue!',
      funFacts: [
        'Dentro ogni rene ci sono circa 1 milione di micro-filtri chiamati nefroni!',
        'Insieme, i tuoi due reni filtrano circa 180 litri di liquido ogni giorno!',
        'Proprio come una stazione spaziale, i reni riciclano il 99% dell’acqua filtrata rimettendola nel sangue.'
      ],
      quickStats: [
        { label: 'Micro-filtri', value: '~1 milione di nefroni per rene' },
        { label: 'Pulizia del sangue', value: 'Filtra tutto il sangue ~40 volte al giorno' },
        { label: 'Dimensioni', value: 'Come il mouse di un computer (~11 cm)' },
        { label: 'Posizione', value: 'Protetti dalle ultime costole nella schiena' }
      ]
    },
    pro: {
      summary: 'Organi retroperitoneali pari a forma di fagiolo (T12–L3; il rene destro è leggermente più basso per il rapporto con il fegato) deputati all’omeostasi idro-elettrolitica e acido-base, all’escrezione azotata e alla secrezione endocrina (renina, EPO, calcitriolo).',
      bloodSupply: 'Arterie renali destra e sinistra (rami dell’aorta in L1–L2) → segmentali → interlobari → arcuate → interlobulari → arteriole afferenti → glomeruli',
      venousDrainage: 'Vene renali nella VCI (la vena renale sinistra incrocia anteriormente l’aorta sotto l’arteria mesenterica superiore ricevendo le vene gonadica e surrenale sinistre)',
      innervation: 'Plesso renale (fibre simpatiche T10–L1 regolano il rilascio di renina e il tono vascolare; fibre parasimpatiche vagali)',
      originInsertion: 'Avvolti da capsula fibrosa, capsula adiposa perirenale e fascia renale di Gerota; rapporti all’ilo dall’avanti all’indietro: Vena – Arteria – Pelvi renale (V-A-P)',
      metrics: [
        { label: 'Flusso ematico renale', value: '~1,1 – 1,2 L/min (20%–25% della gittata cardiaca)' },
        { label: 'Filtrato glomerulare (VFG)', value: '90 – 120 mL/min/1,73m² (~180 L/die di pre-urina)' },
        { label: 'Numero di nefroni', value: '~900.000 – 1,2 milioni per rene' },
        { label: 'Frazione di filtrazione', value: '~20% (VFG / Flusso plasmatico renale)' }
      ],
      clinicalPearls: 'La sindrome dello schiaccianoci (Nutcracker) è dovuta alla compressione della vena renale sinistra nel compasso aorto-mesenterico (tra AMS e aorta), causando ematuria, dolore al fianco sinistro e varicocele sinistro.'
    }
  },
  intestines: {
    name: 'Intestino Tenue e Intestino Crasso',
    systemLabel: 'Apparato Digerente',
    kids: {
      badge: '🎢 Le montagne russe di 7 metri dei nutrienti!',
      pronounce: 'In-tes-TI-no',
      summary: 'Ripiegato ordinatamente nella pancia c’è un tubo lunghissimo! Prima l’intestino tenue assorbe tutte le vitamine e l’energia dal cibo verso il sangue; poi l’intestino crasso recupera l’acqua rimasta.',
      whyYouNeedIt: 'Senza l’intestino che assorbe i nutrienti nel sangue, mangiare non darebbe alcuna energia al tuo corpo!',
      funFacts: [
        'Se srotolassimo il tuo intestino in linea retta sarebbe lungo più di 7 metri — più alto di una giraffa!',
        'La parete interna dell’intestino tenue è coperta da milioni di minuscoli «ditini» chiamati villi intestinali.',
        'Miliardi di batteri buoni vivono nell’intestino crasso e ti aiutano a produrre vitamine!'
      ],
      quickStats: [
        { label: 'Lunghezza totale', value: '~7 metri ripiegati nella pancia!' },
        { label: 'Intestino tenue', value: 'Duodeno, Digiuno e Ileo' },
        { label: 'Intestino crasso', value: 'Assorbe acqua e sali minerali' },
        { label: 'Movimento', value: 'Onde muscolari (peristalsi)' }
      ]
    },
    pro: {
      summary: 'Canale alimentare derivato dall’intestino medio e posteriore, comprendente l’intestino tenue (duodeno, digiuno, ileo; ~6 m in vivo) e l’intestino crasso (cieco, appendice, colon ascendente, trasverso, discendente, sigmoideo e retto; ~1,5 m).',
      bloodSupply: 'Arteria mesenterica superiore (AMS: fino ai 2/3 prossimali del colon trasverso) e arteria mesenterica inferiore (AMI: dal 1/3 distale del trasverso al retto superiore), anastomizzate tramite l’arteria marginale di Drummond',
      venousDrainage: 'Vene mesenteriche superiore e inferiore che confluiscono con la vena splenica a formare la vena porta',
      innervation: 'Sistema nervoso enterico (plesso mienterico di Auerbach e sottomucoso di Meissner) modulato dal nervo vago (NC X), nervi splancnici pelvici (S2–S4) e simpatico',
      originInsertion: 'Sospeso alla parete addominale posteriore tramite mesentere, mesocolon trasverso e mesosigma',
      metrics: [
        { label: 'Superficie assorbente', value: '~250 m² (pieghe circolari, villi e microvilli)' },
        { label: 'Riassorbimento idrico', value: '~7,5 L/die (tenue); ~1,4 L/die (colon)' },
        { label: 'Siti specifici', value: 'Ferro (duodeno), Folati (digiuno), Vitamina B12 e sali biliari (ileo terminale)' },
        { label: 'Zone spartiacque', value: 'Flessura splenica (punto di Griffith) e giunzione rettosigmoidea (punto di Sudeck)' }
      ],
      clinicalPearls: 'La flessura colica sinistra (splenica — punto di Griffith) è un’area spartiacque tra i territori di AMS e AMI, particolarmente vulnerabile alla colite ischemica negli stati di ipoperfusione.'
    }
  },
  aorta: {
    name: 'Aorta (Arco Aortico, Aorta Toracica e Addominale)',
    systemLabel: 'Apparato Cardiovascolare / Arterioso',
    kids: {
      badge: '🛣️ La più grande autostrada del sangue del tuo corpo!',
      pronounce: 'A-ÒR-ta',
      summary: 'L’aorta è l’arteria più grande e robusta del tuo corpo! Spessa come un tubo da giardino, parte dalla cima del cuore formando un arco e trasporta sangue rosso ricco di ossigeno a tutti i rami del corpo.',
      whyYouNeedIt: 'Ogni goccia di sangue ossigenato pompata dal cuore sinistro passa prima dall’aorta per poi raggiungere cervello, braccia e gambe!',
      funFacts: [
        'La parete dell’aorta è elastica e si dilata a ogni battito del cuore!',
        'Le tre grandi diramazioni in cima all’arco aortico portano il sangue direttamente alla testa e alle braccia.',
        'Nel corso della vita l’aorta trasporta abbastanza sangue da riempire centinaia di piscine olimpioniche!'
      ],
      quickStats: [
        { label: 'Tipo di vaso', value: 'Più grande arteria elastica (rossa = ricca di O₂)' },
        { label: 'Diametro', value: '~2,5 – 3 cm' },
        { label: 'Origine', value: 'Ventricolo sinistro del cuore' },
        { label: 'Velocità', value: 'Il flusso sanguigno più veloce del corpo!' }
      ]
    },
    pro: {
      summary: 'Principale tronco arterioso elastico della circolazione sistemica originante dal ventricolo sinistro. Le lamine elastiche della tonaca media garantiscono l’effetto Windkessel, trasformando l’eiezione pulsatile sistolica in flusso continuo diastolico.',
      bloodSupply: 'Terzo interno per diffusione luminale; tonaca media esterna e avventizia nutrite dai vasa vasorum',
      venousDrainage: 'Venae vasorum drenanti nel sistema azygos e nelle vene lombari',
      innervation: 'Barocettori dell’arco aortico che proiettano tramite il nervo vago (NC X) al nucleo del tratto solitario (NTS)',
      originInsertion: 'Aorta ascendente → arco aortico (T4) → iato aortico diaframmatico (T12) → biforcazione nelle arterie iliache comuni in L4',
      metrics: [
        { label: 'Diametro normale', value: 'Ascendente ≤ 3,5 cm | Addominale ≤ 2,0 cm (≥ 3,0 cm = aneurisma)' },
        { label: 'Velocità di picco sistolico', value: '100 – 140 cm/s' },
        { label: 'Rami dell’arco aortico', value: '1. Tronco brachiocefalico, 2. Carotide comune sx, 3. Succlavia sx' },
        { label: 'Rami viscerali impari', value: 'Tronco celiaco (T12), AMS (L1), AMI (L3)' }
      ],
      clinicalPearls: 'La rottura traumatica dell’aorta da decelerazione si verifica tipicamente a livello dell’istmo aortico (distalmente all’origine della succlavia sinistra, presso il legamento arterioso), punto di passaggio tra arco mobile e aorta discendente fissa.'
    }
  },
  'vena-cava': {
    name: 'Vena Cava Superiore e Vena Cava Inferiore',
    systemLabel: 'Apparato Cardiovascolare / Venoso',
    kids: {
      badge: '🔵 I grandi tunnel blu di ritorno al cuore!',
      pronounce: 'VÉ-na KÀ-va',
      summary: 'Dopo che il sangue ha consegnato l’ossigeno a tutto il corpo, le vene lo riportano al cuore! La vena cava superiore e inferiore sono le due vene più grandi del corpo: una raccoglie il sangue da testa e braccia, l’altra da gambe e pancia.',
      whyYouNeedIt: 'Il sangue viaggia in un circuito continuo! Senza queste grandi vene il sangue non potrebbe tornare al cuore e ai polmoni per ricaricarsi di ossigeno.',
      funFacts: [
        'Negli atlanti anatomici le vene sono colorate di blu per indicare il sangue che ha già ceduto il suo ossigeno!',
        'La vena cava inferiore è la vena più larga del corpo e sale lungo il lato destro della colonna vertebrale.',
        'Ogni volta che fai un respiro profondo, il cambio di pressione nel torace aiuta ad aspirare il sangue verso il cuore!'
      ],
      quickStats: [
        { label: 'Tipo di vaso', value: 'Principali tronchi venosi (blu = ritorno)' },
        { label: 'Due tronchi', value: 'VCS (parte superiore) e VCI (parte inferiore)' },
        { label: 'Arrivo', value: 'Atrio destro del cuore' },
        { label: 'Caratteristica', value: 'Flusso costante a bassa pressione' }
      ]
    },
    pro: {
      summary: 'Principali vasi dicapacitanza che riportano il sangue deossigenato sistemico all’atrio destro. La VCS origina dalla confluenza delle vene brachiocefaliche; la VCI si forma a livello di L5 dall’unione delle vene iliache comuni.',
      bloodSupply: 'Vasa vasorum avventiziali',
      venousDrainage: 'La VCS riceve la vena azygos (T4) prima di entrare nell’atrio destro; la VCI attraversa il centro tendineo del diaframma a livello di T8',
      innervation: 'Fibre vasomotorie autonome e meccanocettori atrio-cavali a bassa pressione (riflesso di Bainbridge)',
      originInsertion: 'Tronchi venosi avalvolati di grosso calibro posti a destra della linea mediana',
      metrics: [
        { label: 'Pressione venosa centrale (PVC)', value: '2 – 8 mmHg (atrio destro / VCS)' },
        { label: 'Diametro della VCI', value: '1,5 – 2,5 cm (collasso inspiratorio > 50% normale)' },
        { label: 'Forame della vena cava', value: 'Livello vertebrale T8 (centro tendineo del diaframma)' },
        { label: 'Circoli collaterali', value: 'Sistema azygos/emiazygos e plesso vertebrale di Batson' }
      ],
      clinicalPearls: 'Nel terzo trimestre di gravidanza in posizione supina, l’utero gravido può comprimere la VCI contro la colonna lombare (sindrome ipotensiva supina), risolvibile con il decubito laterale sinistro.'
    }
  },
  'carotid-jugular': {
    name: 'Arterie Carotidi e Vene Giugulari',
    systemLabel: 'Sistema Vascolare Cervico-Cranico',
    kids: {
      badge: '💓 La linea diretta di ossigeno per il tuo cervello!',
      pronounce: 'Ka-RÒ-ti-di e Giu-gu-LÀ-ri',
      summary: 'Ai due lati del collo scorrono vasi sanguigni importantissimi! Le arterie carotidi (rosse) portano sangue ricco di ossigeno al cervello, mentre le vene giugulari (blu) riportano il sangue dalla testa al cuore.',
      whyYouNeedIt: 'Il cervello non si ferma mai e ha bisogno di un rifornimento costante e veloce di ossigeno ogni singolo secondo!',
      funFacts: [
        'Appoggiando delicatamente due dita sul lato del collo puoi sentire il battito forte dell’arteria carotide!',
        'Ogni arteria carotide comune si divide a «Y»: un ramo va al viso e l’altro entra nel cranio per il cervello.',
        'Proprio alla biforcazione della carotide ci sono dei sensori speciali che misurano la pressione del sangue!'
      ],
      quickStats: [
        { label: 'Funzione carotidi', value: 'Portare sangue ricco di O₂ a cervello e viso' },
        { label: 'Funzione giugulari', value: 'Riportare il sangue dalla testa al cuore' },
        { label: 'Polso arterioso', value: 'Palpabile sul lato del collo' },
        { label: 'Apporto cerebrale', value: 'Fornisce ~80% del sangue al cervello' }
      ]
    },
    pro: {
      summary: 'Fasci vascolonervosi pari contenuti nella guaina carotidea (arterie carotidi comune e interna, vena giugulare interna e nervo vago NC X).',
      bloodSupply: 'Carotide comune destra (dal tronco brachiocefalico) e sinistra (dall’arco aortico) che si biforcano a livello del margine superiore della cartilagine tiroidea (C4) in carotide interna (ACI) ed esterna (ACE)',
      venousDrainage: 'La vena giugulare interna (VGI) continua il seno sigmoideo al forame giugulare e si unisce alla vena succlavia formando la vena brachiocefalica',
      innervation: 'Seno carotideo (barocettore innervato dal NC IX) e glomo carotideo (chemocettore innervato dai NC IX e X)',
      originInsertion: 'Nella guaina carotidea: arteria medialmente, VGI lateralmente e nervo vago posteriormente nell’angolo diedro',
      metrics: [
        { label: 'Livello di biforcazione', value: 'C3–C4 (margine superiore della cartilagine tiroidea)' },
        { label: 'Pressione venosa giugulare', value: '≤ 3 cm sopra l’angolo sternale a 45°' },
        { label: 'Contributo della carotide int.', value: '~80% della perfusione cerebrale totale' },
        { label: 'Accesso venoso centrale', value: 'VGI destra di prima scelta (decorso rettilineo verso la VCS, evita il dotto toracico)' }
      ],
      clinicalPearls: 'La biforcazione carotidea è sede elettiva di placche aterosclerotiche e stenosi, rappresentando una causa maggiore di attacchi ischemici transitori (TIA) e ictus ischemico.'
    }
  },
  'brachial-radial-vessels': {
    name: 'Vasi Succlavi, Brachiali e Radiali (Circolazione del Braccio)',
    systemLabel: 'Sistema Vascolare dell’Arto Superiore',
    kids: {
      badge: '⌚ Dove il medico misura la pressione e sente il polso!',
      pronounce: 'Bra-ki-À-le e Ra-di-À-le',
      summary: 'Questi vasi partono sotto la clavicola e scendono lungo il braccio, il gomito e il polso fino alla punta delle dita! Mantengono calde le mani e portano energia ai muscoli per scrivere, lanciare e afferrare.',
      whyYouNeedIt: 'Quando il medico gonfia il bracciale sul braccio ascolta l’arteria brachiale; sul polso sente battere l’arteria radiale!',
      funFacts: [
        'Appoggia due dita sul polso dal lato del pollice: quel battito ritmico è la tua arteria radiale!',
        'Le linee bluastre visibili nella piega del gomito e sul dorso della mano sono vene superficiali.',
        'Quando fa freddo questi vasi si stringono un po’ per trattenere il calore al centro del corpo!'
      ],
      quickStats: [
        { label: 'Arteria del braccio', value: 'Arteria brachiale (misurazione pressione)' },
        { label: 'Arteria del polso', value: 'Arteria radiale (battito al polso)' },
        { label: 'Vena del gomito', value: 'Vena mediana del gomito (prelievo del sangue)' },
        { label: 'Arcate palmari', value: '2 arcate arteriose nutrono le 10 dita' }
      ]
    },
    pro: {
      summary: 'Asse arterioso continuo dell’arto superiore (arteria succlavia → ascellare alla 1ª costa → brachiale al margine inferiore del grande rotondo → radiale e ulnare al collo del radio) accompagnato dalle vene profonde e superficiali (cefalica e basilica).',
      bloodSupply: 'Le arterie radiale e ulnare formano nella mano le arcate palmari superficiale (prevalenza ulnare) e profonda (prevalenza radiale)',
      venousDrainage: 'Vena cefalica (laterale, solco deltoideo-pettorale) e vena basilica (mediale), collegate nella fossa cubitale dalla vena mediana del gomito',
      innervation: 'Fibre simpatiche postgangliari originate dal plesso brachiale (C5–T1)',
      originInsertion: 'Rapporti nella fossa cubitale da laterale a mediale: Tendine del bicipite – Arteria brachiale – Nervo mediano (TAN)',
      metrics: [
        { label: 'PA brachiale normale', value: '< 120 / 80 mmHg' },
        { label: 'Test di Allen', value: 'Verifica il circolo collaterale ulnare della mano prima di pungere la radiale' },
        { label: 'Venipuntura', value: 'Vena mediana del gomito (separata dall’arteria brachiale dal lacerto fibroso)' },
        { label: 'Fistola per emodialisi', value: 'Fistola radio-cefalica di Brescia-Cimino al polso' }
      ],
      clinicalPearls: 'Le fratture sovracondiloidee dell’omero nei bambini possono ledere l’arteria brachiale e il nervo mediano nella fossa cubitale, con rischio di contrattura ischemica di Volkmann.'
    }
  },
  'femoral-saphenous-vessels': {
    name: 'Vasi Iliaci, Femorali e Safeni (Circolazione della Gamba)',
    systemLabel: 'Sistema Vascolare dell’Arto Inferiore',
    kids: {
      badge: '🦵 Vene che sfidano la gravità e potenti arterie!',
      pronounce: 'Fe-mo-RÀ-le e Sa-FÈ-na',
      summary: 'Le tue gambe hanno i vasi sanguigni più lunghi del corpo! L’arteria femorale porta ossigeno ai muscoli della coscia, mentre le vene safena e femorale usano speciali «valvole» e la spinta dei muscoli del polpaccio per far risalire il sangue fino al cuore!',
      whyYouNeedIt: 'Per far risalire il sangue dai piedi al cuore contro la forza di gravità, i muscoli del polpaccio funzionano come un «secondo cuore» a ogni passo!',
      funFacts: [
        'La vena grande safena è la vena più lunga di tutto il corpo umano: va dalla caviglia fino in cima alla coscia!',
        'Ogni volta che cammini, i muscoli del polpaccio spremono le vene spingendo il sangue verso l’alto.',
        'Dentro le vene delle gambe ci sono tante valvole a nido di rondine che impediscono al sangue di tornare indietro!'
      ],
      quickStats: [
        { label: 'Vena più lunga', value: 'Vena grande safena (dal piede all’inguine)' },
        { label: 'Arteria della coscia', value: 'Arteria femorale' },
        { label: 'Segreto anti-gravità', value: 'Valvole venose unidirezionali' },
        { label: 'Secondo cuore', value: 'La pompa muscolare del polpaccio!' }
      ]
    },
    pro: {
      summary: 'Asse arterioso dell’arto inferiore (arteria iliaca esterna → femorale comune sotto il legamento inguinale → femorale profonda e superficiale → poplitea nello iato adduttorio → tibiali anteriore/posteriore e peroniera) e sistemi venosi profondo e safeno.',
      bloodSupply: 'L’arteria femorale profonda irrora la coscia; l’asse femoro-popliteo-tibiale vascolarizza gamba e piede',
      venousDrainage: 'Circolo venoso profondo (vene tibiali → poplitea → femorale) e vena grande safena (sale anteriormente al malleolo mediale fino alla crosse safeno-femorale)',
      innervation: 'Catene simpatiche lombare e sacrale (L1–S3) per il controllo del tono vasocostrittore ortostatico',
      originInsertion: 'Nel triangolo femorale di Scarpa, da laterale a mediale (NAVEL): Nervo femorale, Arteria femorale, Vena femorale, Spazio del canale femorale e Linfonodi',
      metrics: [
        { label: 'Indice caviglia-braccio (ABI)', value: 'Normale 1,0 – 1,4 (< 0,9 indica arteriopatia obliterante periferica)' },
        { label: 'Valvole venose', value: '10 – 20 valvole bicuspidi lungo la grande safena' },
        { label: 'Accesso endovascolare', value: 'Arteria/vena femorale comune 1–2 cm sotto il legamento inguinale' },
        { label: 'Polsi periferici', value: 'Arteria dorsale del piede (pedidia) e arteria tibiale posteriore' }
      ],
      clinicalPearls: 'La trombosi venosa profonda (TVP) delle vene soleali o femoro-poplitee (triade di Virchow) può causare embolia polmonare (EP) attraverso la VCI e il cuore destro.'
    }
  },
  skull: {
    name: 'Cranio e Mandibola',
    systemLabel: 'Sistema Scheletrico Assile',
    kids: {
      badge: '🪖 Il casco naturale di osso del tuo corpo!',
      pronounce: 'KRÀ-nio e Man-DÌ-bo-la',
      summary: 'Il tuo cranio è un puzzle super resistente di 22 ossa incastrate come un casco! La parte superiore protegge il cervello, mentre quella anteriore forma il viso, sostiene i denti e protegge occhi e orecchie.',
      whyYouNeedIt: 'Senza il casco del cranio qualsiasi urto farebbe male al cervello; e senza la mandibola mobile non potresti masticare né parlare!',
      funFacts: [
        'Delle 22 ossa del cranio, solo UNA può muoversi: la mandibola (l’osso del mento)!',
        'Le linee a zig-zag che uniscono le ossa del cranio come una cerniera si chiamano suture.',
        'Nascoste nell’orecchio medio ci sono le 3 ossa più piccole del corpo umano: più piccole di un chicco di riso!'
      ],
      quickStats: [
        { label: 'Totale ossa', value: '22 ossa (8 del neurocranio + 14 dello splancnocranio)' },
        { label: 'Osso mobile', value: 'Solo 1 (la Mandibola)' },
        { label: 'Osso facciale più forte', value: 'La Mandibola' },
        { label: 'Ossa più piccole', value: 'I 3 ossicini dell’udito nell’orecchio medio' }
      ]
    },
    pro: {
      summary: 'Complesso cranio-facciale di 22 ossa (esclusi i 6 ossicini dell’udito) suddiviso in neurocranio (frontale, parietali, temporali, occipitale, sfenoide, etmoide) e splancnocranio, uniti da suture fibrose e dall’articolazione temporo-mandibolare (ATM) sinoviale.',
      bloodSupply: 'Arteria meningea media (ramo dell’arteria mascellare attraverso il foro spinoso) e rami della carotide esterna',
      venousDrainage: 'Vene diploiche ed emissarie che mettono in comunicazione il cuoio capelluto con i seni venosi durali',
      innervation: 'Le tre branche del nervo trigemino (V1 oftalmico, V2 mascellare, V3 mandibolare) e i nervi cervicali superiori (C2–C3)',
      originInsertion: 'Si articola inferiormente tramite i condili occipitali con l’atlante (C1); il condilo mandibolare si articola con la fossa mandibolare del temporale',
      metrics: [
        { label: 'Struttura della volta', value: 'Tavolato esterno, diploe spugnosa e tavolato interno vitreo' },
        { label: 'Chiusura delle fontanelle', value: 'Posteriore: 2–3 mesi | Anteriore (Bregma): 12–18 mesi' },
        { label: 'Forame magno', value: 'Dà passaggio a bulbo, arterie vertebrali, arterie spinali e NC XI' },
        { label: 'Punto di minor resistenza', value: 'Pterion (giunzione ad H di frontale, parietale, temporale e sfenoide)' }
      ],
      clinicalPearls: 'Una frattura temporale in corrispondenza dello pterion può lacerare il ramo anteriore dell’arteria meningea media causando un ematoma epidurale acuto (aspetto biconvesso a lente biconvessa alla TC, spesso con intervallo lucido).'
    }
  },
  'rib-cage': {
    name: 'Gabbia Toracica (Coste e Sterno)',
    systemLabel: 'Sistema Scheletrico Assile',
    kids: {
      badge: '🛡️ L’armatura flessibile che protegge cuore e polmoni!',
      pronounce: 'KÒ-ste e STÈR-no',
      summary: 'Senti le ossa curve sul petto: è la tua gabbia toracica! Hai 12 paia di costole (24 in tutto) che partono dalla colonna vertebrale dietro la schiena e si uniscono allo sterno davanti per proteggere cuore e polmoni.',
      whyYouNeedIt: 'Le costole sono collegate allo sterno da cartilagini flessibili che permettono al torace di allargarsi ogni volta che respiri!',
      funFacts: [
        'Maschi e femmine hanno esattamente lo stesso numero di costole: 12 paia (24 costole)!',
        'Le ultime due paia (11ª e 12ª) si chiamano «costole fluttuanti» perché sono attaccate solo dietro alla colonna.',
        'Dentro lo sterno e le costole, il midollo osseo rosso produce milioni di nuove cellule del sangue ogni secondo!'
      ],
      quickStats: [
        { label: 'Totale costole', value: '24 costole (12 paia)' },
        { label: 'Scudo anteriore', value: 'Sterno (manubrio, corpo, processo xifoideo)' },
        { label: 'Coste vere', value: 'Paia 1–7 (legate direttamente allo sterno)' },
        { label: 'Coste fluttuanti', value: 'Paia 11–12 (libere anteriormente)' }
      ]
    },
    pro: {
      summary: 'Gabbia osteocartilaginea formata dallo sterno (manubrio, corpo, processo xifoideo), 12 paia di coste (vere 1–7, false 8–10, fluttuanti 11–12), cartilagini costali e vertebre toraciche T1–T12.',
      bloodSupply: 'Arterie intercostali posteriori (aorta toracica) anastomizzate con le arterie intercostali anteriori (arteria toracica interna)',
      venousDrainage: 'Vene intercostali drenanti anteriormente nelle vene toraciche interne e posteriormente nel sistema azygos',
      innervation: 'Nervi intercostali (T1–T11) e nervo sottocostale (T12) decorrenti nel solco costale inferiore',
      originInsertion: 'Movimento a «leva di pompa» (coste superiori → diametro antero-posteriore) e a «manico di secchio» (coste inferiori → diametro trasverso)',
      metrics: [
        { label: 'Angolo sternale (di Louis)', value: 'Giunzione manubrio-sternale a livello della 2ª cartilagine costale e T4–T5' },
        { label: 'Fascio vascolonervoso', value: 'Solco costale inferiore dall’alto in basso: Vena – Arteria – Nervo (VAN)' },
        { label: 'Toracentesi sicura', value: 'Inserire l’ago sul margine SUPERIORE della costa sottostante' },
        { label: 'Ematopoiesi', value: 'Midollo osseo rosso attivo per tutta la vita nello sterno e nelle coste' }
      ],
      clinicalPearls: 'Nella toracentesi o nel posizionamento di un drenaggio toracico, l’ago deve sempre scorrere sul margine superiore della costa inferiore per non ledere il fascio vascolonervoso intercostale (VAN) posto nel solco costale inferiore.'
    }
  },
  spine: {
    name: 'Colonna Vertebrale (Cervicale, Toracica, Lombare, Sacro e Coccige)',
    systemLabel: 'Sistema Scheletrico Assile e Neurale',
    kids: {
      badge: '🏗️ La torre flessibile di 33 vertebre che ti sostiene!',
      pronounce: 'Ko-LÓN-na Ver-te-BRÀ-le',
      summary: 'La tua colonna vertebrale non è un bastone rigido, ma una torre flessibile di 33 ossa ad anello chiamate vertebre, con morbidi cuscinetti chiamati dischi tra l’una e l’altra! Così puoi stare dritto, piegarti e ballare.',
      whyYouNeedIt: 'Oltre a sostenere la testa e il tronco, gli anelli delle vertebre formano un tunnel corazzato che protegge il midollo spinale!',
      funFacts: [
        'Al mattino appena sveglio sei più alto di circa 1 cm perché durante la notte i dischi della colonna si riempiono d’acqua!',
        'Gli esseri umani e le giraffe dal collo lunghissimo hanno esattamente lo stesso numero di vertebre nel collo: 7!',
        'Vista di lato, la colonna disegna una morbida «S» che ammortizza i salti come una molla.'
      ],
      quickStats: [
        { label: 'Totale vertebre', value: '33 (24 mobili + Sacro e Coccige)' },
        { label: 'Collo (Cervicali)', value: '7 vertebre (C1–C7)' },
        { label: 'Torace e Lombi', value: '12 toraciche + 5 lombari' },
        { label: 'Ammortizzatori', value: '23 dischi intervertebrali' }
      ]
    },
    pro: {
      summary: 'Colonna assile segmentata di 33 vertebre (7 cervicali, 12 toraciche, 5 lombari, 5 sacrali fuse e 4 coccigee fuse) con cifosi primarie (toracica, sacrale) e lordosi secondarie (cervicale, lombare).',
      bloodSupply: 'Rami spinali segmentali dalle arterie vertebrali, intercostali posteriori, lombari e sacrali laterali',
      venousDrainage: 'Plessi venosi vertebrali interni ed esterni avalvolati di Batson',
      innervation: 'Nervi sinuvertebrali ricorrenti per il legamento longitudinale posteriore e l’anello fibroso esterno; rami mediali dorsali per le faccette articolari',
      originInsertion: 'Stabilizzata dai legamenti longitudinali anteriore e posteriore, gialli, interspinosi e sovraspinoso; dischi formati da anello fibroso e nucleo polposo',
      metrics: [
        { label: 'Formula vertebrale', value: 'C7 • T12 • L5 • S5 (fuse) • Co4 (fuse)' },
        { label: 'Cono midollare adulto', value: 'Termina a livello L1–L2 (prosegue nella cauda equina)' },
        { label: 'Puntura lombare', value: 'Spazi L3–L4 o L4–L5 (linea bisiliaca di Tuffier = L4)' },
        { label: 'Rachide cervicale sup.', value: 'Atlante C1 (flesso-estensione «sì») ed Epistrofeo C2 con dente (rotazione «no»)' }
      ],
      clinicalPearls: 'L’ernia del disco posterolaterale L4–L5 comprime la radice L5 (deficit di dorsiflessione dell’alluce / piede cadente), mentre l’ernia L5–S1 comprime la radice S1 (abolizione del riflesso achilleo e deficit di flessione plantare).'
    }
  },
  'humerus-radius-ulna': {
    name: 'Omero, Radio e Ulna (Ossa del Braccio e dell’Avambraccio)',
    systemLabel: 'Sistema Scheletrico Appendicolare',
    kids: {
      badge: '🦾 Le 3 ossa per allungare, piegare e ruotare il braccio!',
      pronounce: 'Ò-me-ro, RÀ-dio e ÙL-na',
      summary: 'Il tuo braccio ha un osso grande chiamato omero, e l’avambraccio ha due ossa compagne chiamate radio e ulna! Insieme permettono al gomito di piegarsi e alla mano di ruotare con il palmo in su o in giù.',
      whyYouNeedIt: 'Avere due ossa nell’avambraccio permette al radio di ruotare sopra l’ulna per girare una chiave o una maniglia!',
      funFacts: [
        'Quando giri il palmo della mano verso il basso, il radio si incrocia sopra l’ulna formando una «X»!',
        'La scossa che senti quando urti il gomito viene dal nervo ulnare che passa proprio vicino all’osso!',
        'In fondo all’avambraccio, ogni mano e polso contiene ben 27 piccole ossa (54 in tutte e due le mani!).'
      ],
      quickStats: [
        { label: 'Braccio', value: '1 osso: Omero' },
        { label: 'Avambraccio', value: '2 ossa: Radio (lato pollice) e Ulna (lato mignolo)' },
        { label: 'Gomito', value: 'Articolazione a cerniera + perno' },
        { label: 'Ossa della mano', value: '27 ossa in ogni mano e polso' }
      ]
    },
    pro: {
      summary: 'Scheletro dell’arto superiore: l’omero si articola prossimalmente nella gleno-omerale e distalmente nel gomito; il radio e l’ulna si articolano nelle radio-ulnari prossimale e distale uniti dalla membrana interossea.',
      bloodSupply: 'Arterie nutritizie dalle arterie circonflessa omerale, brachiale profonda, radiale, ulnare e interossee',
      venousDrainage: 'Vene profonde satelliti delle arterie brachiale, radiale e ulnare',
      innervation: 'Correlazioni frattura-nervo dell’omero: collo chirurgico → nervo ascellare; solco radiale (diafisi) → nervo radiale; sovracondiloidea → nervo mediano; epicondilo mediale → nervo ulnare',
      originInsertion: 'Il capitello radiale ruota entro il legamento anulare consentendo ~180° di pronosupinazione attorno all’ulna',
      metrics: [
        { label: 'Angolo di valgismo', value: '10° – 15° di valgismo fisiologico del gomito in estensione' },
        { label: 'Trasmissione del carico', value: 'Mano → Scafoide/Semilunare → Radio distale → Membrana interossea → Ulna → Omero' },
        { label: 'Fratture classiche', value: 'Colles (radio distale), Monteggia (ulna + capitello radiale), Galeazzi' },
        { label: 'Cuffia dei rotatori', value: 'Tubercolo maggiore (sovraspinato, infraspinato, piccolo rotondo) e minore (sottoscapolare)' }
      ],
      clinicalPearls: 'La frattura diafisaria media dell’omero può ledere il nervo radiale nel solco spirale, provocando la «mano cadente» (paralisi degli estensori del polso) e ipoestesia del 1° spazio interdigitale dorsale.'
    }
  },
  pelvis: {
    name: 'Bacino / Pelvi (Ossa dell’Anca e Osso Sacro)',
    systemLabel: 'Cingolo Pelvico e Sistema Scheletrico',
    kids: {
      badge: '🥣 La robusta conca che unisce la parte alta e bassa del corpo!',
      pronounce: 'Ba-CÌ-no (PÈL-vi)',
      summary: 'Il tuo bacino (o pelvi) è un anello osseo super resistente a forma di conca all’altezza dei fianchi! Sostiene il peso della parte superiore del corpo, protegge gli organi della pancia e ha due incavi profondi per le ossa delle gambe.',
      whyYouNeedIt: 'Collega la colonna vertebrale alle due gambe permettendoti di stare in piedi, camminare, correre e mantenere l’equilibrio!',
      funFacts: [
        'Ogni osso dell’anca è formato da 3 ossa (ileo, ischio e pube) che si fondono insieme mentre cresci!',
        'Quando ti siedi su una sedia, ti appoggi su due ossa curve chiamate tuberosità ischiatiche.',
        'La parola latina «pelvis» significa proprio «catino» o «ciotola»!'
      ],
      quickStats: [
        { label: 'Forma', value: 'Anello osseo protettivo a forma di conca' },
        { label: 'Incavo dell’anca', value: 'Acetabolo (alloggiamento per il femore)' },
        { label: '3 ossa fuse', value: 'Ileo, Ischio e Pube su ogni lato' },
        { label: 'Ruolo principale', value: 'Trasferisce il peso dalla colonna alle gambe' }
      ]
    },
    pro: {
      summary: 'Anello osteo-articolare costituito dalle due ossa coxali (ileo, ischio e pube fusi nella cartilagine triradiata dell’acetabolo) unite anteriormente nella sinfisi pubica e posteriormente al sacro nelle articolazioni sacro-iliache.',
      bloodSupply: 'Rami delle arterie iliache interna (ileolombare, otturatoria, glutee superiore e inferiore, pudenda interna) ed esterna',
      venousDrainage: 'Ricchi plessi venosi pelvici retroperitoneali drenanti nelle vene iliache interne e comuni',
      innervation: 'Plesso lombosacrale (L1–S4); nervo otturatorio (L2–L4) nel canale otturatorio; nervo ischiatico/sciatico (L4–S3) attraverso il grande forame ischiatico',
      originInsertion: 'Stabilizzato dai legamenti sacro-iliaci, sacrotuberoso e sacrospinoso; la SIAS dà origine al sartorio e al legamento inguinale',
      metrics: [
        { label: 'Coniugata ostetrica', value: '≥ 10,5 – 11,0 cm (pelvi femminile ginecoide)' },
        { label: 'Costituzione dell’acetabolo', value: 'Ileo (~2/5), Ischio (~2/5), Pube (~1/5)' },
        { label: 'Biopsia osteomidollare', value: 'Spina iliaca postero-superiore (SIPS) e cresta iliaca' },
        { label: 'Trasferimento del carico', value: 'Colonna → Sacro → Art. SI → Linea arcuata → Acetabolo / Tuberosità ischiatica' }
      ],
      clinicalPearls: 'Le fratture instabili dell’anello pelvico ad «open book» ad alta energia possono lacerare il plesso venoso pelvico posteriore e i rami dell’arteria iliaca interna provocando emorragia retroperitoneale.'
    }
  },
  'femur-tibia-fibula': {
    name: 'Femore, Rotula (Patella), Tibia e Perone (Ossa della Gamba)',
    systemLabel: 'Sistema Scheletrico Appendicolare',
    kids: {
      badge: '🏆 L’osso più lungo e più forte di tutto il tuo corpo!',
      pronounce: 'FÈ-mo-re, RÒ-tu-la e TÌ-bia',
      summary: 'L’osso della coscia — il femore — è l’osso più lungo, più pesante e più forte del corpo umano! Sotto la rotula (patella) del ginocchio ci sono le due ossa della gamba: la robusta tibia e il sottile perone (fibula).',
      whyYouNeedIt: 'Ogni volta che salti, corri o calci un pallone, queste ossa assorbono forze molte volte superiori al peso del tuo corpo!',
      funFacts: [
        'A parità di peso, il femore della coscia è più resistente del cemento armato!',
        'Il tuo femore misura circa un quarto (25%) di tutta la tua altezza!',
        'La rotula (patella) è un osso speciale inserito in un tendine per proteggere il ginocchio e dare più leva ai muscoli.'
      ],
      quickStats: [
        { label: 'Detentore del record', value: 'Femore = Osso più lungo e più forte' },
        { label: 'Scudo del ginocchio', value: 'Rotula / Patella' },
        { label: 'Osso dello stinco', value: 'Tibia (sostiene ~85% del carico)' },
        { label: 'Supporto laterale', value: 'Perone / Fibula (forma il malleolo esterno)' }
      ]
    },
    pro: {
      summary: 'Pilastro portante dell’arto inferiore: femore (testa, collo con angolo d’inclinazione ~125°, diafisi, condili), patella sesamoide, tibia mediale portante e fibula (perone) laterale per l’inserzione muscolare e la stabilità del mortaio tibio-peroneo-astragalico.',
      bloodSupply: 'La testa femorale è irrorata principalmente dai rami retinacolari dell’arteria circonflessa femorale mediale (ACFM); la diafisi tibiale dall’arteria tibiale posteriore',
      venousDrainage: 'Vene femorali profonde, poplitee e tibiali anteriori/posteriori',
      innervation: 'Legge di Hilton: anca e ginocchio sono innervati da rami dei nervi femorale, otturatorio e ischiatico (le coxopatie spesso riferiscono dolore alla faccia mediale del ginocchio tramite il nervo otturatorio)',
      originInsertion: 'Ginocchio stabilizzato da LCA, LCP, LCM, LCL e menischi mediale e laterale',
      metrics: [
        { label: 'Angolo cervico-diafisario', value: '120° – 135° (Coxa vara < 120°; Coxa valga > 135°)' },
        { label: 'Triade infelice (O’Donoghue)', value: 'LCA + LCM + Menisco mediale (trauma distorsivo in valgo)' },
        { label: 'Collo del perone', value: 'Circondato dal nervo peroneo comune → Piede cadente se leso' },
        { label: 'Logge della gamba', value: '4 logge fasciali inestensibili' }
      ],
      clinicalPearls: 'Le fratture intracapsulari del collo del femore interrompono i vasi retinacolari dell’arteria circonflessa femorale mediale, comportando un elevato rischio di necrosi avascolare (NAV) della testa femorale.'
    }
  },
  'pectoralis-deltoid': {
    name: 'Grande Pettorale e Deltoide (Muscoli del Petto e della Spalla)',
    systemLabel: 'Muscolatura Toracica e della Spalla',
    kids: {
      badge: '💪 I tuoi motori per spingere, abbracciare e alzare le braccia!',
      pronounce: 'Pet-to-RÀ-le e Del-TÒI-de',
      summary: 'Sul davanti del petto ci sono i muscoli grandi pettorali a forma di ventaglio, e sulle spalle i muscoli deltoidi! Insieme ti permettono di spingere le porte, nuotare, lanciare una palla e alzare le braccia in alto.',
      whyYouNeedIt: 'Ogni volta che fai un piegamento, lanci una palla o alzi la mano in classe, grande pettorale e deltoide lavorano in squadra!',
      funFacts: [
        'Il nome «deltoide» viene dalla lettera greca Delta (Δ) perché il muscolo della spalla ha la forma di un triangolo!',
        'Il deltoide ha 3 parti (anteriore, laterale e posteriore) per sollevare il braccio in ogni direzione.',
        'I muscoli possono solo TIRARE le ossa, mai spingerle!'
      ],
      quickStats: [
        { label: 'Azione del pettorale', value: 'Spinge e avvicina le braccia davanti al petto' },
        { label: 'Azione del deltoide', value: 'Solleva il braccio in tutte le direzioni' },
        { label: 'Forma', value: 'Ventaglio (petto) + Triangolo (spalla)' },
        { label: 'Gioco di squadra', value: 'Collabora con i muscoli della schiena' }
      ]
    },
    pro: {
      summary: 'Motori primari toraco-omerali e scapolo-omerali superficiali che formano la parete anteriore dell’ascella e il profilo arrotondato della spalla, separati dal solco deltoideo-pettorale (attraversato dalla vena cefalica).',
      bloodSupply: 'Arteria toraco-acromiale (rami pettorale e deltoideo) e arteria circonflessa omerale posteriore',
      venousDrainage: 'Vena cefalica e vene toraco-acromiali tributarie della vena ascellare',
      innervation: 'Grande pettorale: nervi pettorali mediale (C8–T1) e laterale (C5–C7); Deltoide: nervo ascellare (C5–C6 attraverso lo spazio quadrangolare)',
      originInsertion: 'Grande pettorale: capi clavicolare e sternocostale → cresta del tubercolo maggiore dell’omero (adduzione e intrarotazione). Deltoide: clavicola, acromion, spina della scapola → tuberosità deltoidea (abduzione da 15° a 90°)',
      metrics: [
        { label: 'Arco di abduzione', value: '0°–15° Sovraspinato | 15°–90° Deltoide | >90° Dentato anteriore + Trapezio' },
        { label: 'Sede iniezione IM', value: 'Deltoide medio 3–5 cm sotto l’acromion' },
        { label: 'Spazio quadrangolare', value: 'Dà passaggio al nervo ascellare e all’arteria circonflessa omerale post.' },
        { label: 'Architettura', value: 'Parte intermedia multipennata ad elevata sezione fisiologica' }
      ],
      clinicalPearls: 'La lussazione anteriore di spalla o la frattura del collo chirurgico dell’omero possono ledere il nervo ascellare (C5–C6), causando atrofia del deltoide, deficit di abduzione (15°–90°) e ipoestesia laterale della spalla.'
    }
  },
  'biceps-triceps': {
    name: 'Bicipite Brachiale, Tricipite e Muscoli dell’Avambraccio',
    systemLabel: 'Muscolatura dell’Arto Superiore',
    kids: {
      badge: '💪 La famosa coppia che piega e distende le braccia!',
      pronounce: 'Bi-CÌ-pi-te e Tri-CÌ-pi-te',
      summary: 'Piega il gomito e mostra il muscolo: quel rigonfiamento sul davanti del braccio è il bicipite brachiale! Quando si contrae tira su l’avambraccio. Quando invece vuoi distendere di nuovo il braccio, il tricipite dietro tira in senso opposto!',
      whyYouNeedIt: 'Poiché i muscoli possono solo tirare, il bicipite (davanti) e il tricipite (dietro) lavorano in coppia opposta per piegare e stendere il gomito!',
      funFacts: [
        '«Bi-cipite» significa «due teste» in latino perché in alto si divide in due tendini fissati alla scapola!',
        '«Tri-cipite» nella parte posteriore del braccio significa «tre teste»!',
        'Il bicipite è anche il muscolo più forte per ruotare il palmo della mano verso l’alto (come quando giri una chiave)!'
      ],
      quickStats: [
        { label: 'Significato', value: 'Bicipite = 2 capi | Tricipite = 3 capi' },
        { label: 'Azione del bicipite', value: 'Piega il gomito e ruota il palmo in su' },
        { label: 'Azione del tricipite', value: 'Distende il gomito (estensione)' },
        { label: 'Connessione', value: 'Forti tendini bianchi legano il muscolo all’osso' }
      ]
    },
    pro: {
      summary: 'Loggia brachiale anteriore (bicipite brachiale, brachiale, coracobrachiale) e loggia posteriore (tricipite brachiale) che agiscono come coppia antagonista su gomito e articolazioni radio-ulnari.',
      bloodSupply: 'Rami muscolari dell’arteria brachiale (loggia anteriore) e dell’arteria brachiale profonda (loggia posteriore)',
      venousDrainage: 'Vene brachiali, basilica e cefalica',
      innervation: 'Loggia anteriore: nervo muscolocutaneo (C5–C7); loggia posteriore (tricipite): nervo radiale (C6–C8)',
      originInsertion: 'Bicipite: capo breve (processo coracoideo) e capo lungo (tubercolo sopraglenoideo) → tuberosità radiale (potente supinatore e flessore). Tricipite: capi lungo, laterale e mediale → olecrano dell’ulna (estensore)',
      metrics: [
        { label: 'Riflessi osteotendinei', value: 'Bicipitale = C5/C6 | Brachioradiale = C6 | Tricipitale = C7' },
        { label: 'Coppia di supinazione', value: 'Massima con il gomito flesso a 90°' },
        { label: 'Inibizione reciproca', value: 'Afférenti Ia rilasciano il tricipite durante la contrazione del bicipite' },
        { label: 'Rottura del capo lungo', value: 'Segno di Braccio di Ferro (Popeye sign: retrazione distale del ventre)' }
      ],
      clinicalPearls: 'La paralisi ostetrica superiore di Erb-Duchenne (lesione del tronco superiore C5–C6 del plesso brachiale) paralizza deltoide, bicipite e brachiale, causando l’atteggiamento a «mancia del cameriere».'
    }
  },
  'rectus-abdominis-diaphragm': {
    name: 'Retto dell’Addome, Obliqui e Diaframma Toracico',
    systemLabel: 'Muscolatura del Core e Respiratoria',
    kids: {
      badge: '🛡️ La tua armatura addominale e il muscolo paracadute del respiro!',
      pronounce: 'RÈT-to del-l’Ad-DÒ-me e Dia-FRÀM-ma',
      summary: 'I muscoli addominali avvolgono la pancia come una cintura protettiva per difendere gli organi e aiutarti a sederti, ruotare e stare in equilibrio. Proprio sopra di loro, sotto le costole, c’è il diaframma: un muscolo a cupola che si abbassa ogni volta che inspiri!',
      whyYouNeedIt: 'Il diaframma compie la maggior parte del lavoro quando respiri, e gli addominali stabilizzano la colonna vertebrale in ogni movimento!',
      funFacts: [
        'Hai mai avuto il singhiozzo? Succede quando il muscolo diaframma fa un piccolo balzo improvviso facendoti inspirare di colpo!',
        'La «tartaruga» del muscolo retto dell’addome è disegnata da 3 bande fibrose orizzontali.',
        'Quando ridi forte, tossisci o starnutisci, i tuoi muscoli addominali si contraggono velocissimamente!'
      ],
      quickStats: [
        { label: 'Forma del diaframma', value: 'Cupola / paracadute sotto i polmoni' },
        { label: 'Parete addominale', value: '4 strati muscolari protettivi' },
        { label: 'Causa del singhiozzo', value: 'Spasmo improvviso del diaframma!' },
        { label: 'Funzioni principali', value: 'Respirazione + Protezione + Postura' }
      ]
    },
    pro: {
      summary: 'Setto muscolo-tendineo toraco-addominale a doppia cupola (diaframma) e parete addominale anterolaterale a 4 strati (obliquo esterno, obliquo interno, trasverso dell’addome e retto dell’addome nella guaina dei retti).',
      bloodSupply: 'Guaina dei retti: anastomosi tra arteria epigastrica superiore (toracica interna) ed epigastrica inferiore (iliaca esterna). Diaframma: arterie freniche, muscolofrenica e pericardiofrenica',
      venousDrainage: 'Vene epigastriche superiore e inferiore (importante via collaterale cavo-cavale e porto-sistemica) e vene freniche',
      innervation: 'Diaframma: nervo frenico (C3, C4, C5). Parete addominale: nervi toraco-addominali (T7–T11), sottocostale (T12) e ileoipogastrico/ileoinghinale (L1)',
      originInsertion: 'Orifizi diaframmatici: forame della vena cava in T8, iato esofageo in T10 (esofago + tronchi vagali), iato aortico in T12 (aorta + dotto toracico + vena azygos)',
      metrics: [
        { label: 'Escursione diaframmatica', value: '1,5 – 2 cm a riposo | 6 – 10 cm in inspirazione profonda' },
        { label: 'Linea arcuata (di Douglas)', value: 'A metà tra ombelico e pube (sotto, le aponeurosi passano davanti al retto)' },
        { label: 'Livelli degli iati', value: 'VCI = T8, Esofago = T10, Aorta = T12' },
        { label: 'Triangolo di Hesselbach', value: 'Mediale: retto | Laterale: vasi epigastrici inf. | Inferiore: leg. inguinale' }
      ],
      clinicalPearls: 'Le ernie inguinali dirette protrudono attraverso il triangolo di Hesselbach medialmente ai vasi epigastrici inferiori, mentre le ernie indirette impegnano l’anello inguinale profondo lateralmente a tali vasi.'
    }
  },
  'quadriceps-gastrocnemius': {
    name: 'Quadricipite Femorale, Ischiocrurali e Gastrocnemio (Muscoli della Gamba)',
    systemLabel: 'Muscolatura dell’Arto Inferiore',
    kids: {
      badge: '⚡ I tuoi motori giganti per correre, saltare e calciare!',
      pronounce: 'Kwa-dri-CÌ-pi-te e Gas-tro-CNÈ-mio',
      summary: 'Le tue gambe possiedono i muscoli più grandi e potenti del corpo! Il quadricipite davanti alla coscia distende il ginocchio per calciare e saltare, i muscoli posteriori piegano il ginocchio, e il gastrocnemio nel polpaccio tira il tendine d’Achille per darti la spinta!',
      whyYouNeedIt: 'Ogni passo che fai usa un’onda coordinata tra i muscoli della coscia e del polpaccio!',
      funFacts: [
        '«Quadri-cipite» significa «quattro teste» perché è una squadra di 4 grandi muscoli sulla parte anteriore della coscia!',
        'I muscoli del polpaccio si uniscono al tallone tramite il tendine d’Achille: il tendine più spesso e forte del corpo umano!',
        'Il grande gluteo e il quadricipite si contendono il titolo di muscolo più voluminoso del corpo!'
      ],
      quickStats: [
        { label: 'Quadricipite', value: '4 muscoli anteriori della coscia (estendono il ginocchio)' },
        { label: 'Ischiocrurali', value: '3 muscoli posteriori della coscia (flettono il ginocchio)' },
        { label: 'Polpaccio', value: 'Gastrocnemio e Soleo (stare sulle punte)' },
        { label: 'Tendine più forte', value: 'Tendine calcaneale (d’Achille)' }
      ]
    },
    pro: {
      summary: 'Estensori e flessori plantari primari dell’arto inferiore: quadricipite femorale anteriore (retto femorale, vasto laterale, mediale e intermedio), ischiocrurali posteriori (bicipite femorale, semitendinoso, semimembranoso) e tricipite della sura (gastrocnemio + soleo).',
      bloodSupply: 'Arterie femorale profonda e circonflessa femorale laterale (coscia); rami surali delle arterie poplitea e tibiale posteriore (gamba)',
      venousDrainage: 'Vene femorali profonde, poplitee e seni venosi soleali (pompa muscolo-venosa del polpaccio)',
      innervation: 'Quadricipite: nervo femorale (L2–L4); Ischiocrurali: componente tibiale dello sciatico (L5–S2, eccetto capo breve del bicipite dal peroneo comune); Tricipite surale: nervo tibiale (S1–S2)',
      originInsertion: 'Quadricipite → tendine quadricipitale → patella → legamento patellare → tuberosità tibiale. Gastrocnemio e soleo → tendine calcaneale (d’Achille) → tuberosità del calcagno',
      metrics: [
        { label: 'Riflesso rotuleo (patellare)', value: 'L3–L4 (nervo femorale)' },
        { label: 'Riflesso achilleo', value: 'S1–S2 (nervo tibiale)' },
        { label: 'Carico sul tendine d’Achille', value: 'Sopporta fino a 8–12 volte il peso corporeo nella corsa/salto' },
        { label: 'Tipologia di fibre', value: 'Soleo: ~80% fibre lente tipo I (postura) | Gastrocnemio: fibre rapide tipo II' }
      ],
      clinicalPearls: 'La rottura del tendine d’Achille avviene tipicamente 2–6 cm prossimalmente all’inserzione calcaneale (zona ipovascolare) ed è confermata dalla positività del test di Thompson.'
    }
  },
  'spinal-cord-sciatic': {
    name: 'Midollo Spinale, Plesso Brachiale e Nervo Sciatico',
    systemLabel: 'Sistema Nervoso Centrale e Periferico',
    kids: {
      badge: '⚡ La rete in fibra ottica ultraveloce del tuo corpo!',
      pronounce: 'Mi-DÓL-lo Spi-NÀ-le e Nèr-vo Sci-À-ti-ko',
      summary: 'Il midollo spinale è un grosso fascio di cavi nervosi che scende nel tunnel della colonna vertebrale e dà origine a 31 paia di nervi che raggiungono ogni millimetro della pelle e dei muscoli, viaggiando a oltre 400 km/h!',
      whyYouNeedIt: 'Se tocchi qualcosa di bollente, i nervi usano una scorciatoia nel midollo spinale («arco riflesso») per ritirare la mano PRIMA ancora che il cervello se ne accorga!',
      funFacts: [
        'Il nervo sciatico (ischiatico) che scende lungo la parte posteriore della gamba è il nervo più lungo e spesso del corpo — largo quasi quanto il pollice di un adulto!',
        'Se mettessimo in fila tutti i nervi del corpo, sarebbero lunghi oltre 72 chilometri!',
        'Il nervo vago viaggia dal tronco encefalico fino al cuore, ai polmoni e alla pancia per rilassare il corpo.'
      ],
      quickStats: [
        { label: 'Nervi spinali', value: '31 paia che emergono dal midollo spinale' },
        { label: 'Nervo più grande', value: 'Nervo sciatico / ischiatico (dall’anca al piede)' },
        { label: 'Velocità del segnale', value: 'Fino a 120 m/s (430 km/h)' },
        { label: 'Scorciatoia lampo', value: 'Arco riflesso spinale!' }
      ]
    },
    pro: {
      summary: 'Cordone midollare del SNC (con rigonfiamenti cervicale C4–T1 e lombosacrale L1–S3) da cui emergono 31 paia di nervi spinali misti (8C, 12T, 5L, 5S, 1Co) organizzati nei plessi cervicale, brachiale, lombare e sacrale.',
      bloodSupply: 'Arteria spinale anteriore impari (2/3 anteriori) e arterie spinali posteriori pari (cordoni posteriori), rinforzate dalla grande arteria radicolare di Adamkiewicz (origine sinistra T8–L2)',
      venousDrainage: 'Vene spinali anteriori e posteriori drenanti nel plesso venoso vertebrale interno',
      innervation: 'Vie ascendenti: cordoni posteriori-lemnisco mediale (tatto epicritico e propriocezione) e fascio spinotalamico (dolore e temperatura). Via discendente: fascio corticospinale laterale',
      originInsertion: 'Continua il bulbo al forame magno; ancorato inferiormente al coccige dal filum terminale e lateralmente dai legamenti denticolati',
      metrics: [
        { label: 'Velocità di conduzione', value: 'Fibre mieliniche Aα: 80 – 120 m/s | Fibre amieliniche C: 0,5 – 2 m/s' },
        { label: 'Plesso brachiale', value: 'C5–T1 (Radici → Tronchi → Divisioni → Corde → Rami terminali)' },
        { label: 'Nervo ischiatico (sciatico)', value: 'L4–S3 (Più grande nervo del corpo, ~2 cm di diametro)' },
        { label: 'Zona spartiacque midollare', value: 'Segmenti toracici medi T4–T8' }
      ],
      clinicalPearls: 'La sindrome di Brown-Séquard (emisezione midollare) determina paralisi spastica e perdita propriocettiva omolaterali sotto la lesione, con perdita controlaterale della sensibilità termo-dolorifica.'
    }
  },
  'female-reproductive': {
    name: 'Utero, Ovaie e Tube di Falloppio (Apparato Riproduttivo Femminile)',
    systemLabel: 'Apparato Riproduttivo ed Endocrino Femminile',
    kids: {
      badge: '🌸 La culla protettiva dove crescono i bambini!',
      pronounce: 'Ù-te-ro e O-VÀ-ie',
      summary: 'All’interno del bacino femminile si trovano l’utero, due ovaie a forma di mandorla e due tube di Falloppio. Le ovaie producono ormoni importanti, mentre l’utero muscolare è la stanza sicura ed elastica dove può crescere un bambino prima di nascere.',
      whyYouNeedIt: 'Questi organi producono ormoni (estrogeni e progesterone) fondamentali per mantenere forti le ossa e guidare la crescita.',
      funFacts: [
        'Una bambina nasce già con tutte le cellule uovo (ovociti) che avrà nella vita custodite nelle due ovaie!',
        'L’utero ha la forma e le dimensioni di una piccola pera capovolta ed è formato da uno dei muscoli lisci più forti del corpo.',
        'Le estremità delle tube di Falloppio hanno piccole frange chiamate fimbrie che accolgono delicatamente la cellula uovo!'
      ],
      quickStats: [
        { label: 'Forma dell’utero', value: 'Organo muscolare a forma di pera (~7,5 cm)' },
        { label: 'Ovaie', value: '2 ghiandole grandi come mandorle' },
        { label: 'Tube di Falloppio', value: '2 canali che collegano ovaie e utero' },
        { label: 'Ormoni', value: 'Estrogeni e Progesterone' }
      ]
    },
    pro: {
      summary: 'Tratto genitale femminile interno situato nella piccola pelvi tra la vescica anteriormente (cavo vescico-uterino) e il retto posteriormente (cavo retto-uterino del Douglas), comprendente ovaie, tube uterine di Falloppio, utero (fondo, corpo, istmo, cervice) e vagina.',
      bloodSupply: 'Arteria uterina (ramo dell’iliaca interna che incrocia superiormente l’uretere — «l’acqua passa sotto il ponte») anastomizzata con l’arteria ovarica (ramo dell’aorta in L2)',
      venousDrainage: 'Plesso uterino → vene iliache interne; plesso pampiniforme → vena ovarica destra (nella VCI) e sinistra (nella vena renale sinistra)',
      innervation: 'Plesso uterovaginale (ipogastrico inferiore: simpatico T10–L1; parasimpatico splancnico pelvico S2–S4) e plesso ovarico',
      originInsertion: 'Sostenuto dal diaframma pelvico (elevatore dell’ano) e dai legamenti cardinali (di Mackenrodt), uterosacrali, rotondi e larghi',
      metrics: [
        { label: 'Utero nulliparo', value: '~7,5 × 5,0 × 2,5 cm | Massa: 50 – 70 g' },
        { label: 'Posizione fisiologica', value: 'Antiverso e antiflesso' },
        { label: 'Sede di fecondazione', value: 'Ampolla della tuba uterina' },
        { label: 'Zona di trasformazione', value: 'Giunzione squamo-colonnare (GSC) cervicale' }
      ],
      clinicalPearls: 'Nell’isterectomia sono fondamentali due rapporti con l’uretere: i vasi ovarici incrociano anteriormente l’uretere nel legamento sospensore dell’ovaio, e l’arteria uterina incrocia sopra l’uretere a ~1,5 cm dal fornice cervicale laterale.'
    }
  },
  'mammary-glands': {
    name: 'Ghiandole Mammarie e Dotti Galattofori',
    systemLabel: 'Apparato Tegumentario ed Esocrino',
    kids: {
      badge: '🍼 Ghiandole specializzate che producono il latte materno!',
      pronounce: 'Ghiàn-do-le Mam-MÀ-rie',
      summary: 'Le ghiandole mammarie si trovano sulla parte anteriore del torace, sopra i muscoli pettorali. Sono formate da 15–20 lobi disposti come gli spicchi di un’arancia, collegati da piccoli canali chiamati dotti galattofori.',
      whyYouNeedIt: 'Nei mammiferi queste ghiandole forniscono ai neonati nutrimento completo e anticorpi protettivi!',
      funFacts: [
        'La parola «mammifero» deriva direttamente dal latino «mamma»!',
        'Dentro ogni ghiandola i lobi sono disposti in cerchio come i petali di una margherita.',
        'Fasci fibrosi chiamati legamenti di Cooper sostengono delicatamente il tessuto ghiandolare.'
      ],
      quickStats: [
        { label: 'Lobi ghiandolari', value: '15 – 20 lobi radiali per lato' },
        { label: 'Rete di canali', value: 'Dotti e seni galattofori' },
        { label: 'Piano muscolare', value: 'Sopra il grande pettorale e il dentato anteriore' },
        { label: 'Supporto', value: 'Legamenti sospensori di Cooper' }
      ]
    },
    pro: {
      summary: 'Ghiandole sudoripare apocrine modificate situate nella fascia superficiale della parete toracica anteriore (2ª–6ª costa) sopra la fascia pettorale, separate dallo spazio retromammario.',
      bloodSupply: 'Rami perforanti dell’arteria toracica interna (~60% mediale), arterie toracica laterale e toraco-acromiale, e rami intercostali posteriori (2°–5°)',
      venousDrainage: 'Plesso venoso subareolare drenante nelle vene ascellare, toracica interna e intercostali',
      innervation: 'Rami cutanei anteriori e laterali dei nervi intercostali 2°–6° (capezzolo = dermatomero T4)',
      originInsertion: '15–20 lobi tubulo-alveolari convergenti nei dotti e seni galattofori al capezzolo, sostenuti dai legamenti sospensori di Cooper',
      metrics: [
        { label: 'Estensione anatomica', value: '2ª – 6ª costa | Margine sternale – linea ascellare media' },
        { label: 'Prolungamento ascellare', value: 'Coda di Spence verso il cavo ascellare' },
        { label: 'Drenaggio linfatico', value: '>75% ai linfonodi ascellari omolaterali; ~20% ai parasternali' },
        { label: 'Controllo endocrino', value: 'Estrogeni (dotti), Progesterone (alveoli), Prolattina e Ossitocina' }
      ],
      clinicalPearls: 'La trazione neoplastica sui legamenti di Cooper causa retrazione cutanea, mentre il blocco linfatico dermico produce l’edema a «buccia d’arancia» (peau d’orange).'
    }
  },
  'male-reproductive': {
    name: 'Prostata, Testicoli e Dotti Deferenti (Apparato Riproduttivo Maschile)',
    systemLabel: 'Apparato Riproduttivo ed Endocrino Maschile',
    kids: {
      badge: '🧬 Organi endocrini e riproduttivi maschili',
      pronounce: 'PRÒ-sta-ta e Te-STÌ-ko-li',
      summary: 'L’apparato riproduttivo maschile comprende i due testicoli (che producono l’ormone testosterone), gli epididimi, i dotti deferenti e la prostata, una ghiandola grande come una noce situata proprio sotto la vescica.',
      whyYouNeedIt: 'L’ormone testosterone aiuta a rendere la voce più profonda e a rinforzare ossa e muscoli durante la crescita.',
      funFacts: [
        'La prostata ha la forma e la grandezza di una castagna o di una noce e circonda l’inizio dell’uretra sotto la vescica.',
        'I tubicini microscopici contenuti in un solo testicolo, se srotolati, misurerebbero centinaia di metri!',
        'Il dotto deferente sale formando un arco sopra l’osso dell’anca per poi scendere dietro la vescica.'
      ],
      quickStats: [
        { label: 'Dimensioni prostata', value: 'Ghiandola grande come una noce (~20 g)' },
        { label: 'Testicoli', value: '2 ghiandole endocrine e riproduttive' },
        { label: 'Ormone principale', value: 'Testosterone' },
        { label: 'Percorso', value: 'Testicolo → Epididimo → Dotto deferente → Uretra' }
      ]
    },
    pro: {
      summary: 'Tratto urogenitale maschile composto da testicoli (tubuli seminiferi e cellule di Leydig), epididimi, dotti deferenti (nel funicolo spermatico), vescichette seminali, dotti eiaculatori e prostata che circonda l’uretra prostatica.',
      bloodSupply: 'Arterie testicolari (rami diretti dell’aorta in L2), arteria deferenziale e rami vescicali inferiori e rettali medi per la prostata',
      venousDrainage: 'Plesso pampiniforme → vena testicolare destra (nella VCI) e sinistra (nella vena renale sinistra a 90°); plesso venoso prostatico del Santorini comunicante con il plesso di Batson',
      innervation: 'Plesso testicolare (T10–T11) e plesso ipogastrico inferiore (nervi splancnici pelvici S2–S4 parasimpatici; fibre simpatiche L1–L2)',
      originInsertion: 'Suddivisione zonale di McNeal: zona periferica (~70%, posteriore), zona centrale (~25%) e zona di transizione (~5%, periuretrale)',
      metrics: [
        { label: 'Massa prostatica normale', value: '~20 g (3 × 4 × 2 cm) sotto il collo vescicale' },
        { label: 'Zone di McNeal', value: 'Periferica (sede di carcinoma) vs Transizione (sede di IPB)' },
        { label: 'Canale inguinale', value: 'Anello profondo (fascia trasversale) → Anello superficiale (obliquo esterno)' },
        { label: 'Termoregolazione', value: 'Cremastere + Dartos + Plesso pampiniforme mantengono ~34–35 °C' }
      ],
      clinicalPearls: 'L’iperplasia prostatica benigna (IPB) origina nella zona di transizione periuretrale causando sintomi ostruttivi precoci, mentre l’adenocarcinoma insorge prevalentemente nella zona periferica posteriore.'
    }
  }
};

export const TISSUE_INFO_IT = {
  skin: {
    kids: 'Questa è la tua pelle: l’armatura elastica e impermeabile del tuo corpo! Blocca i germi, trattiene l’acqua ed è piena di sensori per il tatto, il caldo e il freddo.',
    pro: 'Tegumento: epidermide pavimentosa stratificata cheratinizzata su derma collagenico vascolarizzato e ipoderma adiposo.'
  },
  hair: {
    kids: 'I capelli tengono calda la testa e la proteggono dal sole. Ogni capello cresce da una piccola tasca nella pelle chiamata follicolo.',
    pro: 'Fusti piliferi cheratinizzati originati dai follicoli piliferi dermici; fotoprotezione UV e isolamento termico.'
  },
  muscle: {
    kids: 'Questo è un muscolo! I muscoli sono fasci di fibre elastiche che tirano le ossa per farti muovere. Lavorano sempre in squadra.',
    pro: 'Muscolo scheletrico (striato volontario). Notare l’orientamento deiik, le inserzioni e l’innervazione.'
  },
  tendon: {
    kids: 'Questo è un tendine: una fune super resistente che collega il muscolo all’osso per tirarlo quando il muscolo si contrae.',
    pro: 'Tessuto connettivo denso regolare (collagene di tipo I) che trasmette la forza muscolare all’osso.'
  },
  ligament: {
    kids: 'I legamenti sono nastri robusti che tengono unite le ossa nelle articolazioni mentre ti muovi.',
    pro: 'Tessuto connettivo denso fibroso che collega osso a osso, fornendo stabilità articolare e propriocezione.'
  },
  bone: {
    kids: 'Questo è un osso! Le ossa sono parti vive che ti sostengono, proteggono gli organi e fabbricano le cellule del sangue nel midollo.',
    pro: 'Osso lamellare corticale (compatto) e trabecolare (spugnoso); sostegno meccanico, omeostasi minerale ed ematopoiesi.'
  },
  tooth: {
    kids: 'I denti sono ricoperti dallo smalto: il materiale più duro di tutto il corpo umano!',
    pro: 'Smalto su dentina e polpa dentaria, ancorato dal legamento parodontale (gonfosi); 32 denti permanenti nell’adulto.'
  },
  cartilage: {
    kids: 'La cartilagine è un tessuto liscio e flessibile, come la punta del naso. Ammortizza le articolazioni e tiene aperta la trachea.',
    pro: 'Cartilagine ialina, elastica o fibrosa avascolare nutrita per diffusione; superfici articolari a basso attrito.'
  },
  artery: {
    kids: 'Questa è un’arteria: un tubo forte ed elastico che porta il sangue rosso ricco di ossigeno DAL cuore a tutto il corpo!',
    pro: 'Arteria sistemica (tonaca media spessa). Trasporta sangue ossigenato centrifugamente con flusso pulsatile.'
  },
  arteryDeoxy: {
    kids: 'Questa arteria porta il sangue dal cuore ai polmoni per fare il pieno di ossigeno fresco: per questo è colorata di blu!',
    pro: 'Albero arterioso polmonare: trasporta sangue deossigenato dal ventricolo destro ai polmoni (bassa pressione).'
  },
  vein: {
    kids: 'Questa è una vena! Le vene riportano al cuore il sangue che ha già ceduto l’ossigeno e hanno valvole a senso unico.',
    pro: 'Vena sistemica (vaso di capacitanza dotato di valvole negli arti). Riporta il sangue deossigenato all’atrio destro.'
  },
  veinOxy: {
    kids: 'Questa vena riporta il sangue fresco ricco di ossigeno dai polmoni al cuore: per questo è rossa!',
    pro: 'Vena polmonare: riporta il sangue ossigenato dai polmoni all’atrio sinistro.'
  },
  nerve: {
    kids: 'I nervi sono i cavi elettrici del tuo corpo e trasportano messaggi velocissimi tra il cervello e ogni parte di te.',
    pro: 'Nervo periferico o cranico: assoni mielinici e amielinici avvolti da endonevrio, perinevrio ed epinevrio.'
  },
  cord: {
    kids: 'Il midollo spinale è il cavo principale del sistema nervoso e scende protetto nel tunnel della colonna vertebrale.',
    pro: 'Midollo spinale: sostanza grigia centrale e cordoni di sostanza bianca periferici; cono midollare in L1–L2.'
  },
  brain: {
    kids: 'Questa è una parte del tuo cervello, il centro di comando! Controlla pensieri, movimenti, vista, memoria ed emozioni.',
    pro: 'Struttura del sistema nervoso centrale. Correlare con il territorio vascolare e la localizzazione funzionale.'
  },
  dura: {
    kids: 'Questa membrana resistente (la dura madre) avvolge e protegge il cervello.',
    pro: 'Ripiegamento durale (meninge) che compartimenta la cavità cranica e accoglie i seni venosi durali.'
  },
  csf: {
    kids: 'Spazi pieni di liquido dentro il cervello che lo proteggono dagli urti come un materasso ad acqua!',
    pro: 'Sistema ventricolare contenente liquido cefalorachidiano (~150 mL, prodotto dai plessi corioidei).'
  },
  heart: {
    kids: 'Una parte del tuo cuore: la pompa muscolare instancabile che batte circa 100.000 volte al giorno!',
    pro: 'Struttura cardiaca. Correlare con l’irrorazione coronarica, il sistema di conduzione e la funzione valvolare.'
  },
  lung: {
    kids: 'I tuoi polmoni sono spugnosi e scambiano anidride carbonica con ossigeno fresco a ogni respiro.',
    pro: 'Parenchima polmonare: ~300–500 milioni di alveoli con ~70 m² di superficie di scambio gassoso.'
  },
  airway: {
    kids: 'Questi sono i tubi dell’aria (trachea e bronchi) che si ramificano come un albero dentro i polmoni.',
    pro: 'Vie aeree di conduzione (albero tracheobronchiale): ~23 generazioni di ramificazione con supporto cartilagineo.'
  },
  liver: {
    kids: 'Il fegato è la fabbrica chimica del corpo: pulisce il sangue, conserva energia e produce la bile.',
    pro: 'Parenchima epatico (segmenti di Couinaud) a doppio afflusso: vena porta (~75%) e arteria epatica (~25%).'
  },
  gallbladder: {
    kids: 'La cistifellea conserva la bile, un liquido verde che aiuta a digerire i grassi.',
    pro: 'Vie biliari: concentra e immagazzina la bile, drenando tramite il dotto cistico nel coledoco.'
  },
  stomach: {
    kids: 'Il tuo stomaco è una sacca muscolare che mescola il cibo con l’acido per digerirlo.',
    pro: 'Stomaco: secerne HCl, pepsinogeno e fattore intrinseco, rimescolando il chimo.'
  },
  intestine: {
    kids: 'L’intestino tenue è un lungo tubo tortuoso che assorbe i nutrienti dal cibo nel sangue.',
    pro: 'Intestino tenue (duodeno, digiuno, ileo): sede principale della digestione e dell’assorbimento (~6 m in vivo).'
  },
  colon: {
    kids: 'L’intestino crasso assorbe l’acqua e ospita miliardi di batteri amici.',
    pro: 'Intestino crasso (colon): riassorbimento idro-elettrolitico e fermentazione da parte del microbiota.'
  },
  pancreas: {
    kids: 'Il pancreas produce succhi digestivi e l’insulina, che regola lo zucchero nel sangue.',
    pro: 'Ghiandola mista esocrina (enzimi acinari) ed endocrina (isole di Langerhans: insulina, glucagone).'
  },
  kidney: {
    kids: 'I tuoi reni sono filtri a forma di fagiolo che puliscono il sangue e producono l’urina.',
    pro: 'Parenchima renale: ~1 milione di nefroni per rene; VFG ~120 mL/min; funzioni endocrine (renina, EPO, calcitriolo).'
  },
  bladder: {
    kids: 'La vescica è una sacca elastica che raccoglie l’urina finché non vai in bagno.',
    pro: 'Vescica urinaria e uretra: muscolo detrusore liscio con capacità fisiologica di ~400–600 mL.'
  },
  spleen: {
    kids: 'La milza filtra il sangue e aiuta le difese immunitarie a combattere i germi.',
    pro: 'Organo linfoide secondario: polpa rossa (emocateresi) e polpa bianca (risposta immunitaria).'
  },
  eye: {
    kids: 'Una parte del tuo occhio: la fotocamera del corpo che mette a fuoco la luce per far vedere le immagini al cervello!',
    pro: 'Struttura oculare. Correlare con l’asse ottico (cornea → cristallino → retina) e le relazioni orbitarie.'
  },
  pupil: {
    kids: 'Il cristallino si trova dietro la pupilla e cambia forma per mettere a fuoco da vicino e da lontano.',
    pro: 'Cristallino e fibre zonulari; accomodazione tramite il muscolo ciliare (la sua opacizzazione è la cataratta).'
  },
  lip: {
    kids: 'Le labbra ti aiutano a parlare, mangiare e sorridere. Sono rosee perché ricche di piccoli vasi sanguigni.',
    pro: 'Labbra: muscolo orbicolare della bocca rivestito da sottile epitelio vermiglio riccamente vascolarizzato.'
  },
  gland: {
    kids: 'Le ghiandole producono liquidi speciali o ormoni indispensabili per il corpo.',
    pro: 'Tessuto ghiandolare esocrino o endocrino; correlare con il secreto e la regolazione neurovascolare.'
  },
  tongue: {
    kids: 'Questo tessuto morbido ti aiuta a sentire i sapori, masticare, deglutire e parlare.',
    pro: 'Tessuto molle orale; innervazione motoria e sensitiva/gustativa dai nervi cranici V3, VII, IX e XII.'
  },
  mesentery: {
    kids: 'Questo sottile foglietto tiene fermo l’intestino e porta i suoi vasi sanguigni.',
    pro: 'Piega peritoneale che sospende l’intestino e conduce vasi, nervi e linfatici mesenterici.'
  },
  reproductive: {
    kids: 'Fa parte dell’apparato riproduttivo: gli organi che producono ormoni e permettono di avere figli da grandi.',
    pro: 'Struttura dell’apparato riproduttivo ed endocrino (modelli di riferimento NIH HuBMAP e BodyParts3D).'
  },
  organ: {
    kids: 'È uno degli organi interni del tuo corpo che lavora in squadra con gli altri per mantenerti in salute.',
    pro: 'Struttura anatomica dal Foundational Model of Anatomy (FMA).'
  }
};

export const QUIZ_QUESTIONS_IT = [
  {
    id: 'q1',
    targetPartId: 'heart',
    question: 'Quale organo muscolare batte circa 100.000 volte al giorno e ha 4 camere che pompano il sangue in tutto il corpo?',
    options: ['Il Cuore', 'Lo Stomaco', 'I Reni', 'La Gabbia Toracica'],
    correctIndex: 0,
    explanation: 'Esatto! Il tuo cuore è una pompa muscolare a 4 camere grande quanto un pugno che spinge circa 7.570 litri di sangue ogni giorno.'
  },
  {
    id: 'q2',
    targetPartId: 'aorta',
    question: 'Nella vista del flusso sanguigno, come si chiama la più grande arteria ROSSA che esce dalla cima del cuore come un’autostrada?',
    options: ['Il Nervo Sciatico', 'L’Aorta', 'La Trachea', 'La Rotula'],
    correctIndex: 1,
    explanation: 'Proprio così! L’aorta è la più grande arteria elastica del corpo umano e porta il sangue ricco di ossigeno dal ventricolo sinistro.'
  },
  {
    id: 'q3',
    targetPartId: 'vena-cava',
    question: 'Perché la Vena Cava Superiore e Inferiore e le altre vene sono mostrate in BLU con il sangue che torna verso il cuore?',
    options: [
      'Perché il sangue all’interno è ghiacciato',
      'Perché le vene riportano al cuore e ai polmoni il sangue che ha già consegnato il suo ossigeno',
      'Perché le vene trasportano solo acqua',
      'Perché le vene spingono il sangue verso la punta delle dita'
    ],
    correctIndex: 1,
    explanation: 'Benissimo! Le arterie (rosse) portano sangue ricco di ossigeno dal cuore, mentre le vene (blu) riportano il sangue al cuore e ai polmoni.'
  },
  {
    id: 'q4',
    targetPartId: 'femur-tibia-fibula',
    question: 'Quale osso della coscia è il più lungo, il più pesante e il più forte di tutto il corpo umano?',
    options: ['Il Radio', 'La Clavicola', 'Il Femore', 'Lo Sterno'],
    correctIndex: 2,
    explanation: 'Ottimo! Il femore (osso della coscia) rappresenta circa 1/4 della tua altezza ed è più resistente del cemento!'
  },
  {
    id: 'q5',
    targetPartId: 'liver',
    question: 'Quale organo sotto le costole di destra svolge oltre 500 funzioni chimiche, produce la bile e può rigenerarsi?',
    options: ['Il Fegato', 'Il Muscolo Deltoide', 'La Rotula', 'La Vena Giugulare'],
    correctIndex: 0,
    explanation: 'Fantastico! Il fegato è la fabbrica chimica e il filtro del corpo, ed è l’unico organo interno capace di rigenerarsi!'
  },
  {
    id: 'q6',
    targetPartId: 'brain',
    question: 'Quale organo protetto dal casco del cranio usa 86 miliardi di neuroni per controllare pensieri, ricordi e sensi?',
    options: ['I Polmoni', 'Il Cervello (Encefalo)', 'Il Bacino', 'Il Bicipite'],
    correctIndex: 1,
    explanation: 'Perfetto! Il tuo cervello è il centro di comando e invia segnali elettrici fino a 430 chilometri all’ora.'
  }
];
