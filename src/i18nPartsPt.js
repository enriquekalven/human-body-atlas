/**
 * Portuguese (pt) translations for:
 *  - All 27 curated ANATOMY_PARTS (Kids Explorer & Clinical Pro modes)
 *  - All 37 TISSUE_INFO categories
 *  - All 6 ANATOMY_QUIZ_QUESTIONS
 */

export const PARTS_PT = {
  'integumentary-skin': {
    name: 'Pele (Sistema Tegumentar)',
    systemLabel: 'Sistema Tegumentar',
    kids: {
      badge: '🛡️ O supertraje espacial que protege o seu corpo!',
      pronounce: 'PÉ-li (Epiderme)',
      summary: 'A sua pele é, na verdade, o maior órgão de todo o seu corpo! Ela funciona como um traje espacial impermeável e autorreparável que impede a entrada de micróbios, retém a água e refresca você com o suor quando corre.',
      whyYouNeedIt: 'Sem a pele, os germes entrariam facilmente no corpo e você não conseguiria sentir um abraço quentinho, uma brisa fresca ou cócegas!',
      funFacts: [
        'Você perde cerca de 30.000 a 40.000 células mortas da pele por minuto — e cria células novinhas logo abaixo!',
        'Sua pele tem milhões de pequenas glândulas de suor que funcionam como o ar-condicionado natural do corpo.',
        'A pele mais grossa fica na sola dos pés, e a mais fina fica nas pálpebras!'
      ],
      quickStats: [
        { label: 'Camadas principais', value: '3 (Epiderme, Derme, Hipoderme)' },
        { label: 'Renovação', value: 'Pele nova a cada ~28 dias' },
        { label: 'Sensores de toque', value: 'Milhões de terminações nervosas' },
        { label: 'Superpoder', value: 'Produz vitamina D com a luz do sol!' }
      ]
    },
    pro: {
      summary: 'Órgão de barreira multicamadas composto por epiderme pavimentosa estratificada queratinizada, derme colagenosa vascularizada e tela subcutânea (hipoderme) adiposa.',
      bloodSupply: 'Plexos vasculares cutâneos profundos e subpapilares oriundos de artérias perfurantes musculocutâneas e fasciocutâneas',
      venousDrainage: 'Plexos venosos dérmicos superficiais e profundos drenando para a rede venosa subcutânea',
      innervation: 'Ramos sensitivos cutâneos (corpúsculos de Meissner, Pacini, discos de Merkel, terminações de Ruffini e fibras livres de dor/temperatura); fibras simpáticas colinérgicas sudomotoras',
      originInsertion: 'Contínua com as mucosas nas junções mucocutâneas; ancorada à fáscia profunda pelos retináculos da pele (ligamentos cutâneos)',
      metrics: [
        { label: 'Área de superfície', value: '1,5 – 2,0 m² (adulto)' },
        { label: 'Massa total', value: '~15% – 16% da massa corporal' },
        { label: 'Espessura', value: '0,5 mm (pálpebra) a 4,0 mm (calcanhar)' },
        { label: 'Fluxo sanguíneo dérmico', value: '~250 mL/min em repouso (até 6–8 L/min no calor)' }
      ],
      clinicalPearls: 'A extensão de queimaduras é estimada pela "Regra dos Nove" da superfície corporal total (SCT). Anastomoses arteriovenosas (corpos glômicos) na derme acral regulam a perda térmica central.'
    }
  },
  brain: {
    name: 'Encéfalo / Cérebro (Cérebro, Cerebelo e Tronco Encefálico)',
    systemLabel: 'Sistema Nervoso e de Órgãos',
    kids: {
      badge: '🧠 O centro de comando do seu corpo!',
      pronounce: 'SÉ-re-bro (En-SÉ-fa-lo)',
      summary: 'O cérebro é o chefe de todo o seu corpo! Mais rápido que qualquer supercomputador, ele permite que você pense, sonhe, jogue, lembre dos amigos e controla automaticamente a respiração e os batimentos do coração.',
      whyYouNeedIt: 'Cada pensamento, cada movimento e cada som ou cor que você percebe é processado por cerca de 86 bilhões de células nervosas chamadas neurônios!',
      funFacts: [
        'Quando você está acordado, seu cérebro gera eletricidade suficiente para acender uma pequena lâmpada de LED!',
        'O lado esquerdo do cérebro controla o lado direito do corpo, e o lado direito controla o lado esquerdo!',
        'O tecido cerebral em si não tem sensores de dor.'
      ],
      quickStats: [
        { label: 'Células cerebrais', value: '~86 bilhões de neurônios' },
        { label: 'Velocidade do sinal', value: 'Até 430 km/h' },
        { label: 'Consumo de energia', value: 'Usa ~20% de todo o oxigênio do corpo' },
        { label: 'Textura e proteção', value: 'Macio como pudim, protegido pelo crânio' }
      ]
    },
    pro: {
      summary: 'Centro integrador supremo do sistema nervoso central (SNC), subdividido em telencéfalo (hemisférios cerebrais), diencéfalo, mesencéfalo, ponte, bulbo (medula oblonga) e cerebelo.',
      bloodSupply: 'Circulação anterior (artérias carótidas internas) e posterior (sistema vertebrobasilar) anastomosadas no polígono de Willis (círculo arterial do cérebro)',
      venousDrainage: 'Veias cerebrais superficiais e profundas drenando para os seios venosos da dura-máter e, daí, para as veias jugulares internas',
      innervation: 'Origem dos nervos cranianos I–XII; a dura-máter recebe inervação sensitiva meníngea dos nervos trigêmeo (NC V), vago (NC X) e cervicais superiores',
      originInsertion: 'Suspenso no líquido cefalorraquidiano (LCR) dentro da cavidade craniana e compartimentalizado pelas pregas durais (foice do cérebro e tentório do cerebelo)',
      metrics: [
        { label: 'Massa encefálica adulta', value: '1.300 – 1.400 g (~2% do peso corporal)' },
        { label: 'Fluxo sanguíneo (FSC)', value: '~50 mL / 100g / min (~750 mL/min total)' },
        { label: 'Volume de LCR', value: '~150 mL (~500 mL/dia produzidos pelos plexos corióideos)' },
        { label: 'Pressão intracraniana', value: '7 – 15 mmHg (adulto em decúbito dorsal)' }
      ],
      clinicalPearls: 'A doutrina de Monro-Kellie dita que o volume intracraniano (parênquima + sangue + LCR) é fixo; lesões expansivas elevam a PIC e causam herniação uncal ou tonsilar. A oclusão da artéria cerebral média (ACM) causa hemiparesia contralateral (predomínio braquiofacial) e afasia no hemisfério dominante.'
    }
  },
  heart: {
    name: 'Coração (Bomba Muscular de 4 Câmaras)',
    systemLabel: 'Sistema Cardiovascular',
    kids: {
      badge: '❤️ A superbomba que nunca descansa!',
      pronounce: 'Ko-ra-SÃU',
      summary: 'Seu coração é um músculo superforte do tamanho da sua mão fechada! Ele bate cerca de 100.000 vezes por dia, bombeando sangue fresco rico em oxigênio para o cérebro, músculos e até a ponta dos pés.',
      whyYouNeedIt: 'O sangue leva oxigênio e energia para todas as células do corpo. O coração mantém o sangue circulando 24 horas por dia, mesmo enquanto você dorme!',
      funFacts: [
        'O coração tem 4 câmaras (átrios e ventrículos) e portas de sentido único (valvas) que fazem o som "tum-tá" quando se fecham!',
        'Em apenas um dia, seu coração bombeia cerca de 7.570 litros de sangue!',
        'Quando você corre, o coração bate mais rápido para entregar mais oxigênio aos músculos.'
      ],
      quickStats: [
        { label: 'Tamanho', value: 'Do tamanho do seu punho fechado' },
        { label: 'Batimentos por dia', value: '~100.000 batimentos' },
        { label: 'Câmaras', value: '4 (Átrios esq./dir. e Ventrículos esq./dir.)' },
        { label: 'Bombeamento', value: '~5 litros por minuto' }
      ]
    },
    pro: {
      summary: 'Bomba fibromuscular tetracavitária localizada no mediastino médio dentro do saco pericárdico, impulsionando simultaneamente a circulação pulmonar (baixa pressão) e a sistêmica (alta pressão).',
      bloodSupply: 'Artérias coronárias esquerda (ramos interventricular anterior/DA e circunflexo/CX) e direita (ACD) originadas nos seios aórticos de Valsalva; perfusão predominantemente diastólica',
      venousDrainage: 'Seio coronário (recebendo as veias cardíacas magna, média e parva) e veias cardíacas anteriores drenando diretamente no átrio direito',
      innervation: 'Sistema de condução intrínseco (nó SA → nó AV → feixe de His → fibras de Purkinje) modulado pelo plexo cardíaco (parassimpático vagal NC X e simpático T1–T4)',
      originInsertion: 'Ápice dirigido anteroinferiormente para a esquerda (5º espaço intercostal na linha hemiclavicular esquerda); base formada principalmente pelo átrio esquerdo (T6–T9)',
      metrics: [
        { label: 'Débito cardíaco (DC)', value: '~5,0 L/min (Volume sistólico ~70 mL × 72 bpm)' },
        { label: 'Fração de ejeção (FEVE)', value: '55% – 70% (normal)' },
        { label: 'Pressões cavitárias', value: 'VE: 120/8 mmHg | VD: 25/4 mmHg' },
        { label: 'Massa adulta', value: '250 – 350 g' }
      ],
      clinicalPearls: 'A oclusão da artéria descendente anterior (DA) infarta a parede anterior do VE e os 2/3 anteriores do septo interventricular (supradesnivelamento de ST em V1–V4). A oclusão da ACD causa infarto inferior (DII, DIII, aVF) e risco de bloqueio AV.'
    }
  },
  lungs: {
    name: 'Pulmões (Direito e Esquerdo)',
    systemLabel: 'Sistema Respiratório',
    kids: {
      badge: '🫁 Balões esponjosos de oxigênio!',
      pronounce: 'Pul-MÕIS',
      summary: 'Seus dois pulmões são como balões macios e esponjosos dentro do peito! A cada inspiração, eles capturam oxigênio fresco do ar para o sangue; a cada expiração, eliminam o gás carbônico.',
      whyYouNeedIt: 'Todas as células do corpo precisam de oxigênio para produzir energia. Os pulmões e o coração trabalham juntos para abastecer todo o corpo!',
      funFacts: [
        'O pulmão esquerdo é um pouquinho menor que o direito para dar espaço ao coração!',
        'Dentro dos pulmões existem cerca de 300 milhões de bolsinhas de ar chamadas alvéolos — abertas, cobririam uma quadra de tênis inteira!',
        'Os pulmões são os únicos órgãos do corpo humano capazes de flutuar na água!'
      ],
      quickStats: [
        { label: 'Respirações por dia', value: '~20.000 respirações' },
        { label: 'Bolsas de ar', value: '~300 a 500 milhões de alvéolos' },
        { label: 'Lobos pulmonares', value: '3 no direito, 2 no esquerdo' },
        { label: 'Área de troca', value: 'Do tamanho de uma quadra de tênis!' }
      ]
    },
    pro: {
      summary: 'Órgãos pares de troca gasosa situados nas cavidades pleurais. O pulmão direito possui 3 lobos (superior, médio e inferior separados pelas fissuras oblíqua e horizontal) e o esquerdo possui 2 lobos (superior com língula e incisura cardíaca, e inferior).',
      bloodSupply: 'Circulação dupla: tronco e artérias pulmonares (sangue desoxigenado para hematose) e artérias brônquicas (ramos da aorta torácica para nutrição das vias aéreas)',
      venousDrainage: 'Quatro veias pulmonares (sangue oxigenado para o átrio esquerdo) e veias brônquicas (sistema ázigos/hemiázigos)',
      innervation: 'Plexo pulmonar: fibras parassimpáticas vagais (broncoconstrição e secreção) e simpáticas T2–T5 (broncodilatação)',
      originInsertion: 'O ápice projeta-se ~2,5 cm acima do terço medial da clavícula; a base côncava repousa sobre a cúpula diafragmática',
      metrics: [
        { label: 'Capacidade pulmonar total', value: '~6,0 L (Volume corrente ~500 mL)' },
        { label: 'Superfície alveolar', value: '~70 – 85 m²' },
        { label: 'Barreira alvéolo-capilar', value: '0,2 – 0,5 µm (pneumócito I + lâmina basal + endotélio)' },
        { label: 'Relação V/Q', value: '~0,8 global (maior no ápice, menor na base)' }
      ],
      clinicalPearls: 'O brônquio principal direito é mais largo, mais curto e mais vertical que o esquerdo; por isso, corpos estranhos aspirados alojam-se preferencialmente no brônquio principal direito.'
    }
  },
  liver: {
    name: 'Fígado e Vesícula Biliar',
    systemLabel: 'Sistema Digestório e Metabólico',
    kids: {
      badge: '🧪 A fábrica química e superfiltro do corpo!',
      pronounce: 'FÍ-ga-du i Ve-ZÍ-ku-la',
      summary: 'Escondido sob as costelas do lado direito, o fígado é o grande mestre multitarefa do corpo! Ele limpa o sangue, guarda energia, produz a bile verde para digerir gorduras e cria proteínas que ajudam a estancar pequenos cortes.',
      whyYouNeedIt: 'Tudo o que você come e bebe passa pela inspeção do fígado para que seu corpo receba energia limpa e vitaminas!',
      funFacts: [
        'O fígado realiza mais de 500 tarefas diferentes ao mesmo tempo!',
        'Superpoder incrível: o fígado é o único órgão interno capaz de se regenerar e crescer novamente!',
        'A qualquer momento, cerca de 13% de todo o seu sangue está passando pelo fígado.'
      ],
      quickStats: [
        { label: 'Funções', value: 'Mais de 500 funções vitais' },
        { label: 'Produção de bile', value: '600 a 1.000 mL por dia' },
        { label: 'Superpoder', value: 'Capacidade de regeneração!' },
        { label: 'Peso', value: 'Maior órgão interno (~1,5 kg)' }
      ]
    },
    pro: {
      summary: 'Maior glândula parenquimatosa e centro metabólico do corpo, localizado no hipocôndrio direito e epigástrio, dividido em 8 segmentos funcionais independentes de Couinaud.',
      bloodSupply: 'Aporte sanguíneo duplo: veia porta hepática (~75% do fluxo, rico em nutrientes do trato GI e baço) e artéria hepática própria (~25% do fluxo, sangue oxigenado do tronco celíaco)',
      venousDrainage: 'Veias centrolobulares → veias hepáticas direita, média e esquerda → veia cava inferior (VCI) logo abaixo do diafragma',
      innervation: 'Plexo hepático (simpático T7–T10 e parassimpático vagal); a distensão da cápsula de Glisson causa dor referida no ombro direito via nervo frênico (C3–C5)',
      originInsertion: 'Suspenso no diafragma e parede abdominal anterior pelos ligamentos falciforme, coronário e triangulares; tríade portal contida no ligamento hepatoduodenal',
      metrics: [
        { label: 'Massa adulta', value: '1.400 – 1.600 g (~2,5% do peso corporal)' },
        { label: 'Fluxo sanguíneo hepático', value: '~1.500 mL/min (~25% do débito cardíaco)' },
        { label: 'Produção de bile', value: '600 – 1.000 mL/dia' },
        { label: 'Pressão portal normal', value: '5 – 10 mmHg (> 12 mmHg = hipertensão portal)' }
      ],
      clinicalPearls: 'A manobra de Pringle clampeia o ligamento hepatoduodenal (tríade portal: artéria hepática própria, veia porta e ducto colédoco) através do forame omental (de Winslow) para controlar hemorragias hepáticas.'
    }
  },
  stomach: {
    name: 'Estômago',
    systemLabel: 'Sistema Digestório',
    kids: {
      badge: '🥣 O misturador ácido de alimentos!',
      pronounce: 'Es-TÔ-ma-gu',
      summary: 'Seu estômago é uma bolsa muscular elástica em forma de "J"! Quando você engole a comida, ele aperta, mistura e usa suco gástrico ácido e enzimas para transformar a refeição em um mingau nutritivo.',
      whyYouNeedIt: 'Ele quebra pedaços grandes de comida em partes minúsculas e destrói bactérias que possam ter entrado com o alimento!',
      funFacts: [
        'O ácido do estômago é superforte, mas uma camada especial de muco protege a parede do estômago para que ele não digira a si mesmo!',
        'O barulho de "barriga roncando" acontece quando os músculos do estômago empurram ar e líquidos.',
        'O estômago de um adulto pode se esticar para guardar até 1,5 litro de comida e líquido!'
      ],
      quickStats: [
        { label: 'Formato', value: 'Bolsa elástica em forma de "J"' },
        { label: 'Camadas musculares', value: '3 camadas de músculo liso' },
        { label: 'Acidez', value: 'pH 1,5 a 3,5 (ácido clorídrico)' },
        { label: 'Tempo de mistura', value: '2 a 4 horas por refeição' }
      ]
    },
    pro: {
      summary: 'Dilatação muscular intraperitoneal em forma de J do intestino anterior, dividida em cárdia, fundo, corpo e parte pilórica (antro e canal pilórico), com túnica muscular em 3 camadas (oblíqua interna, circular média e longitudinal externa).',
      bloodSupply: 'Rica rede anastomótica do tronco celíaco: artérias gástricas esquerda e direita (curvatura menor), gastromentais esquerda e direita (curvatura maior) e gástricas curtas (fundo)',
      venousDrainage: 'Veias homônimas drenando diretamente ou via veias esplênica e mesentérica superior para a veia porta',
      innervation: 'Troncos vagais anterior e posterior (NC X: secreção ácida e motilidade) e nervos esplâncnicos maiores (T5–T9 via plexo celíaco)',
      originInsertion: 'Entre o esfíncter esofágico inferior (T11) e o esfíncter pilórico (L1), fixado pelos omentos menor e maior',
      metrics: [
        { label: 'pH luminal', value: '1,5 – 3,5 (secreção de HCl pelas células parietais)' },
        { label: 'Secreção gástrica', value: '1,5 – 2,5 L/dia' },
        { label: 'Capacidade', value: '1,0 – 1,5 L (~50 mL em jejum)' },
        { label: 'Secreções principais', value: 'HCl, fator intrínseco, pepsinogênio, gastrina, grelina' }
      ],
      clinicalPearls: 'Úlceras pépticas posteriores na primeira porção do duodeno podem erodir a artéria gastroduodenal causando hemorragia digestiva alta maciça. A perda de células parietais causa deficiência de fator intrínseco e anemia perniciosa (déficit de B12).'
    }
  },
  kidneys: {
    name: 'Rins (Direito e Esquerdo)',
    systemLabel: 'Sistema Urinário',
    kids: {
      badge: '🫘 A dupla de superfiltros do sangue!',
      pronounce: 'Rĩs (Rim)',
      summary: 'Na parte de trás da barriga ficam dois órgãos em forma de feijão chamados rins! Eles lavam e filtram todo o seu sangue dezenas de vezes por dia, devolvendo a água boa e transformando as impurezas em xixi (urina).',
      whyYouNeedIt: 'Eles mantêm o equilíbrio perfeito de água e sais minerais no corpo e ajudam a controlar a pressão arterial!',
      funFacts: [
        'Dentro de cada rim existem cerca de 1 milhão de microfiltros chamados néfrons!',
        'Juntos, seus dois rins filtram cerca de 180 litros de líquido todos os dias!',
        'Como uma estação espacial, os rins reciclam 99% da água filtrada de volta para o sangue.'
      ],
      quickStats: [
        { label: 'Microfiltros', value: '~1 milhão de néfrons em cada rim' },
        { label: 'Limpeza do sangue', value: 'Filtra todo o sangue ~40 vezes/dia' },
        { label: 'Tamanho', value: 'Do tamanho de um mouse (~11 cm)' },
        { label: 'Proteção', value: 'Protegidos pelas costelas inferiores nas costas' }
      ]
    },
    pro: {
      summary: 'Órgãos retroperitoneais pares em forma de feijão (T12–L3; o rim direito é ligeiramente mais baixo devido ao fígado) que regulam o volume extracelular, osmolalidade, equilíbrio ácido-base e funções endócrinas (renina, eritropoietina, calcitriol).',
      bloodSupply: 'Artérias renais direita e esquerda (ramos da aorta em L1–L2) → segmentares → interlobares → arqueadas → interlobulares → arteríolas aferentes → glomérulos',
      venousDrainage: 'Veias renais direita e esquerda para a VCI (a veia renal esquerda cruza anteriormente a aorta sob a artéria mesentérica superior e recebe as veias gonadal e suprarrenal esquerdas)',
      innervation: 'Plexo renal (fibras simpáticas T10–L1 regulam a liberação de renina e o tônus vascular; fibras vagais parassimpáticas)',
      originInsertion: 'Envoltos por cápsula fibrosa, gordura perirrenal e fáscia renal (de Gerota); relação no hilo renal de anterior para posterior: Veia – Artéria – Pelve renal (V-A-P)',
      metrics: [
        { label: 'Fluxo sanguíneo renal', value: '~1,1 – 1,2 L/min (20%–25% do débito cardíaco)' },
        { label: 'Taxa de filtração (TFG)', value: '90 – 120 mL/min/1,73m² (~180 L/dia de filtrado)' },
        { label: 'Número de néfrons', value: '~900.000 – 1,2 milhão por rim' },
        { label: 'Fração de filtração', value: '~20% (TFG / Fluxo plasmático renal)' }
      ],
      clinicalPearls: 'Na síndrome do quebra-nozes (Nutcracker), a veia renal esquerda é comprimida entre a artéria mesentérica superior (AMS) e a aorta abdominal, causando hematúria, dor no flanco esquerdo e varicocele esquerda.'
    }
  },
  intestines: {
    name: 'Intestino Delgado e Intestino Grosso',
    systemLabel: 'Sistema Digestório',
    kids: {
      badge: '🎢 A montanha-russa de 7 metros dos nutrientes!',
      pronounce: 'Ĩ-tes-TI-nus',
      summary: 'Dobrado direitinho dentro da sua barriga há um tubo longo incrível! Primeiro, o intestino delgado absorve todas as vitaminas, proteínas e açúcares da comida para o sangue; depois, o intestino grosso absorve a água restante.',
      whyYouNeedIt: 'Sem os intestinos para absorver os nutrientes para o sangue, comer não daria nenhuma energia para o seu corpo!',
      funFacts: [
        'Se esticássemos seus intestinos em linha reta, eles teriam mais de 7 metros — mais altos que uma girafa!',
        'O interior do intestino delgado tem milhões de "dedinhos" microscópicos chamados vilosidades para capturar nutrientes.',
        'Trilhões de bactérias amigas vivem no intestino grosso e ajudam a produzir vitaminas!'
      ],
      quickStats: [
        { label: 'Comprimento total', value: '~7 metros dobrados na barriga!' },
        { label: 'Intestino delgado', value: 'Duodeno, Jejuno e Íleo' },
        { label: 'Intestino grosso', value: 'Absorve água e sais minerais' },
        { label: 'Movimento', value: 'Ondas musculares (peristaltismo)' }
      ]
    },
    pro: {
      summary: 'Tubo digestório derivado do intestino médio e posterior, compreendendo o intestino delgado (duodeno, jejuno e íleo; ~6 m in vivo) e o intestino grosso (ceco, apêndice, cólons ascendente, transverso, descendente e sigmoide, e reto; ~1,5 m).',
      bloodSupply: 'Artéria mesentérica superior (AMS: intestino médio até os 2/3 proximais do cólon transverso) e artéria mesentérica inferior (AMI: 1/3 distal do transverso ao reto superior), anastomosadas pela artéria marginal de Drummond',
      venousDrainage: 'Veias mesentéricas superior e inferior convergem com a veia esplênica para formar a veia porta hepática',
      innervation: 'Sistema nervoso entérico (plexo mioentérico de Auerbach e submucoso de Meissner) modulado pelo nervo vago (NC X), esplâncnicos pélvicos (S2–S4) e simpático toracolombar',
      originInsertion: 'Suspenso na parede abdominal posterior pelo mesentério, mesocólon transverso e mesossigmoide',
      metrics: [
        { label: 'Área de absorção', value: '~250 m² (pregas circulares, vilosidades e microvilosidades)' },
        { label: 'Absorção hídrica', value: '~7,5 L/dia no delgado; ~1,4 L/dia no cólon' },
        { label: 'Absorção específica', value: 'Ferro (duodeno), Folato (jejuno), Vitamina B12 e sais biliares (íleo terminal)' },
        { label: 'Zonas de penumbra vascular', value: 'Flexura esplênica (ponto de Griffith) e junção retossigmoide (ponto de Sudeck)' }
      ],
      clinicalPearls: 'A flexura cólica esquerda (esplênica — ponto de Griffith) e a junção retossigmoide (ponto de Sudeck) são zonas limítrofes vasculares vulneráveis à colite isquêmica em estados de hipoperfusão.'
    }
  },
  aorta: {
    name: 'Aorta (Arco Aórtico, Aorta Torácica e Abdominal)',
    systemLabel: 'Sistema Cardiovascular / Arterial',
    kids: {
      badge: '🛣️ A maior super-rodovia de sangue do corpo!',
      pronounce: 'A-ÓR-ta',
      summary: 'A aorta é a maior e mais forte artéria do seu corpo! Grossa como uma mangueira de jardim, ela faz uma curva no topo do coração e leva sangue vermelho vivo rico em oxigênio para todos os ramos do corpo.',
      whyYouNeedIt: 'Cada gota de sangue oxigenado bombeada pelo lado esquerdo do coração passa primeiro pela aorta antes de viajar para a cabeça, braços e pernas!',
      funFacts: [
        'A parede da aorta é elástica como uma borracha forte, esticando a cada batida do coração!',
        'Três grandes saídas no topo do arco da aorta levam sangue diretamente para o cérebro e os dois braços.',
        'Ao longo da vida, a aorta transporta sangue suficiente para encher centenas de piscinas olímpicas!'
      ],
      quickStats: [
        { label: 'Tipo de vaso', value: 'Maior artéria elástica (vermelha = rica em O₂)' },
        { label: 'Diâmetro', value: '~2,5 a 3 cm' },
        { label: 'Início', value: 'Ventrículo esquerdo do coração' },
        { label: 'Velocidade', value: 'O fluxo sanguíneo mais rápido do corpo!' }
      ]
    },
    pro: {
      summary: 'Tronco arterial elástico principal da circulação sistêmica originado no ventrículo esquerdo. As lâminas elásticas da túnica média proporcionam o efeito Windkessel, mantendo a perfusão diastólica contínua.',
      bloodSupply: 'Terço luminal por difusão direta; média externa e adventícia supridas por vasa vasorum',
      venousDrainage: 'Venae vasorum drenando para o sistema ázigos e veias lombares',
      innervation: 'Barorreceptores do arco aórtico via nervo vago (NC X) para o núcleo do trato solitário (NTS)',
      originInsertion: 'Aorta ascendente → arco aórtico (T4) → hiato aórtico diafragmático (T12) → bifurcação nas artérias ilíacas comuns em L4',
      metrics: [
        { label: 'Diâmetro normal', value: 'Ascendente ≤ 3,5 cm | Abdominal ≤ 2,0 cm (≥ 3,0 cm = aneurisma)' },
        { label: 'Velocidade de pico', value: '100 – 140 cm/s' },
        { label: 'Ramos do arco aórtico', value: '1. Tronco braquiocefálico, 2. Carótida comum esq., 3. Subclávia esq.' },
        { label: 'Ramos viscerais ímpares', value: 'Tronco celíaco (T12), AMS (L1), AMI (L3)' }
      ],
      clinicalPearls: 'A ruptura traumática da aorta ocorre classicamente no istmo aórtico (distal à origem da artéria subclávia esquerda, junto ao ligamento arterioso), onde o arco móvel une-se à aorta descendente fixa.'
    }
  },
  'vena-cava': {
    name: 'Veias Cavas Superior e Inferior',
    systemLabel: 'Sistema Cardiovascular / Venoso',
    kids: {
      badge: '🔵 Os grandes túneis azuis de retorno ao coração!',
      pronounce: 'VÊI-a KA-va',
      summary: 'Depois que o sangue entrega o oxigênio para o corpo, as veias trazem o sangue de volta ao coração! As veias cavas superior e inferior são as duas maiores veias do corpo: uma traz o sangue da cabeça e dos braços, e a outra traz das pernas e da barriga.',
      whyYouNeedIt: 'O sangue circula em um ciclo sem fim! Sem essas duas grandes veias, o sangue usado não conseguiria voltar ao coração e aos pulmões para pegar mais oxigênio.',
      funFacts: [
        'Nos atlas de anatomia, as veias são pintadas de azul para mostrar que o sangue já entregou a maior parte do oxigênio!',
        'A veia cava inferior é a veia mais larga do corpo e sobe ao lado direito da coluna vertebral.',
        'Cada vez que você inspira fundo, a mudança de pressão no peito ajuda a puxar o sangue de volta ao coração!'
      ],
      quickStats: [
        { label: 'Tipo de vaso', value: 'Maiores troncos venosos (azul = retorno)' },
        { label: 'Dois troncos', value: 'VCS (parte superior) e VCI (parte inferior)' },
        { label: 'Destino', value: 'Átrio direito do coração' },
        { label: 'Pressão', value: 'Retorno suave de baixa pressão' }
      ]
    },
    pro: {
      summary: 'Principais vasos de capacitância que retornam o sangue desoxigenado sistêmico ao átrio direito. A VCS forma-se pela união das veias braquiocefálicas; a VCI forma-se ao nível de L5 pela confluência das veias ilíacas comuns.',
      bloodSupply: 'Vasa vasorum adventiciais',
      venousDrainage: 'A VCS recebe a veia ázigos (T4) antes de entrar no átrio direito; a VCI atravessa o centro tendíneo do diafragma em T8',
      innervation: 'Fibras vasomotoras autônomas e mecanorreceptores veno-atriais de baixa pressão (reflexo de Bainbridge)',
      originInsertion: 'Troncos venosos avalvulares de grande calibre situados à direita da linha média',
      metrics: [
        { label: 'Pressão venosa central (PVC)', value: '2 – 8 mmHg (átrio direito / VCS)' },
        { label: 'Diâmetro da VCI', value: '1,5 – 2,5 cm (colapso inspiratório > 50% normal)' },
        { label: 'Forame da veia cava', value: 'Nível vertebral T8 (centro tendíneo do diafragma)' },
        { label: 'Vias colaterais', value: 'Sistema ázigos/hemiázigos e plexo vertebral de Batson' }
      ],
      clinicalPearls: 'No final da gestação em decúbito dorsal, o útero gravídico pode comprimir a VCI contra a coluna lombar (síndrome da hipotensão supina), sendo aliviada pelo decúbito lateral esquerdo.'
    }
  },
  'carotid-jugular': {
    name: 'Artérias Carótidas e Veias Jugulares',
    systemLabel: 'Sistema Vascular Cervicocraniano',
    kids: {
      badge: '💓 A via expressa de oxigênio para o cérebro!',
      pronounce: 'Ka-RÓ-ti-das i Ju-gu-LA-ris',
      summary: 'Nos dois lados do pescoço passam vasos sanguíneos superimportantes! As artérias carótidas (vermelhas) levam sangue cheio de oxigênio para o cérebro, e as veias jugulares (azuis) trazem o sangue de volta para o coração.',
      whyYouNeedIt: 'O cérebro nunca dorme e precisa de uma entrega rápida e constante de oxigênio a cada segundo!',
      funFacts: [
        'Se você encostar dois dedos suavemente na lateral do pescoço, poderá sentir o pulso forte da artéria carótida!',
        'Cada artéria carótida comum se divide em forma de "Y": um ramo vai para o rosto e o outro entra no crânio para o cérebro.',
        'Na bifurcação da carótida existem sensores especiais que monitoram a pressão do sangue!'
      ],
      quickStats: [
        { label: 'Função da carótida', value: 'Levar sangue rico em O₂ ao cérebro e face' },
        { label: 'Função da jugular', value: 'Drenar o sangue da cabeça de volta ao coração' },
        { label: 'Ponto de pulso', value: 'Palpável na lateral do pescoço' },
        { label: 'Suprimento cerebral', value: 'Fornece ~80% do fluxo sanguíneo do cérebro' }
      ]
    },
    pro: {
      summary: 'Feixes neurovasculares pares contidos na bainha carotídea (artérias carótidas comum e interna, veia jugular interna e nervo vago NC X).',
      bloodSupply: 'Carótida comum direita (do tronco braquiocefálico) e esquerda (direta do arco aórtico) bifurcam-se ao nível da borda superior da cartilagem tireoide (C4) em carótida interna (ACI) e externa (ACE)',
      venousDrainage: 'A veia jugular interna (VJI) continua o seio sigmoide no forame jugular e une-se à veia subclávia formando a veia braquiocefálica',
      innervation: 'Seio carotídeo (barorreceptor inervado pelo NC IX) e corpo carotídeo (quimiorreceptor inervado pelos NC IX e X)',
      originInsertion: 'Na bainha carotídea: artéria medial, VJI lateral e nervo vago posteriormente entre os vasos',
      metrics: [
        { label: 'Nível da bifurcação', value: 'C3–C4 (borda superior da cartilagem tireoide)' },
        { label: 'Pressão venosa jugular', value: '≤ 3 cm acima do ângulo esternal a 45° (~8 cmH₂O)' },
        { label: 'Fluxo da carótida interna', value: '~80% da perfusão cerebral total' },
        { label: 'Acesso venoso central', value: 'VJI direita preferida (trajeto reto para a VCS e evita o ducto torácico)' }
      ],
      clinicalPearls: 'A bifurcação carotídea é local frequente de placas ateroscleróticas e estenose, constituindo importante fonte cardioembólica/arterioembólica de AIT e AVC isquêmico.'
    }
  },
  'brachial-radial-vessels': {
    name: 'Vasos Subclávios, Braquiais e Radiais (Circulação do Braço)',
    systemLabel: 'Sistema Vascular do Membro Superior',
    kids: {
      badge: '⌚ Onde o médico mede a sua pressão e sente o seu pulso!',
      pronounce: 'Bra-ki-AL i Ha-di-AL',
      summary: 'Esses vasos começam sob a clavícula e descem pelo braço, cotovelo e punho até a ponta dos dedos! Eles mantêm suas mãos quentinhas e levam energia para os músculos escreverem, desenharem e brincarem.',
      whyYouNeedIt: 'Quando o médico coloca a braçadeira no seu braço para medir a pressão, ele escuta a artéria braquial; no pulso, ele sente a artéria radial!',
      funFacts: [
        'Coloque dois dedos no pulso, do lado do polegar — esse batimento rítmico é a sua artéria radial!',
        'As linhas azuladas que você vê na dobra do cotovelo e no dorso da mão são veias superficiais.',
        'No frio, esses vasos se contraem um pouquinho para guardar o calor no centro do corpo!'
      ],
      quickStats: [
        { label: 'Artéria do braço', value: 'Artéria braquial (manguito de pressão)' },
        { label: 'Artéria do punho', value: 'Artéria radial (pulso no lado do polegar)' },
        { label: 'Veia do cotovelo', value: 'Veia intermédia do cotovelo (exame de sangue)' },
        { label: 'Arcos da mão', value: '2 arcos arteriais irrigam os 10 dedos' }
      ]
    },
    pro: {
      summary: 'Eixo arterial contínuo do membro superior (artéria subclávia → axilar na 1ª costela → braquial na borda inferior do redondo maior → radial e ulnar no colo do rádio) acompanhado pelas veias profundas e superficiais (cefálica e basílica).',
      bloodSupply: 'Artérias radial e ulnar formam os arcos palmares superficial (predomínio ulnar) e profundo (predomínio radial)',
      venousDrainage: 'Veia cefálica (lateral, sulco deltopeitoral) e veia basílica (medial), comunicadas anteriormente na fossa cubital pela veia intermédia do cotovelo',
      innervation: 'Fibras simpáticas pós-ganglionares do plexo braquial (C5–T1)',
      originInsertion: 'Conteúdo da fossa cubital de lateral para medial: Tendão do bíceps – Artéria braquial – Nervo mediano (TAN)',
      metrics: [
        { label: 'PA braquial normal', value: '< 120 / 80 mmHg' },
        { label: 'Teste de Allen', value: 'Avalia a patência colateral do arco palmar pela artéria ulnar' },
        { label: 'Venopunção padrão', value: 'Veia intermédia do cotovelo (separada da artéria pela aponeurose bicipital)' },
        { label: 'Fístula de hemodiálise', value: 'Fístula radiocefálica de Brescia-Cimino no punho' }
      ],
      clinicalPearls: 'Fraturas supracondilianas do úmero em crianças podem lesar a artéria braquial e o nervo mediano na fossa cubital, causando contratura isquêmica de Volkmann se não tratadas.'
    }
  },
  'femoral-saphenous-vessels': {
    name: 'Vasos Ilíacos, Femorais e Safenos (Circulação da Perna)',
    systemLabel: 'Sistema Vascular do Membro Inferior',
    kids: {
      badge: '🦵 Veias que vencem a gravidade e artérias potentes!',
      pronounce: 'Fe-mo-RAL i Sa-FE-na',
      summary: 'Suas pernas têm os vasos sanguíneos mais longos do corpo! A artéria femoral leva oxigênio para os músculos da coxa, enquanto as veias safena e femoral usam "válvulas" de mão única e os músculos da panturrilha para empurrar o sangue de volta ao coração contra a gravidade!',
      whyYouNeedIt: 'Para subir mais de um metro dos pés até o coração, as veias contam com a panturrilha funcionando como um "segundo coração" a cada passo!',
      funFacts: [
        'A veia safena magna é a veia mais longa do corpo humano — vai do tornozelo até o topo da coxa!',
        'Sempre que você caminha ou fica na ponta dos pés, o músculo da panturrilha aperta as veias e bombeia o sangue para cima.',
        'As válvulas dentro das veias das pernas funcionam como portinhas que se fecham para o sangue não cair de volta!'
      ],
      quickStats: [
        { label: 'Veia mais longa', value: 'Veia safena magna (do pé à virilha)' },
        { label: 'Artéria da coxa', value: 'Artéria femoral' },
        { label: 'Segredo antigravidade', value: 'Válvulas venosas de sentido único' },
        { label: 'Segundo coração', value: 'Bomba muscular da panturrilha!' }
      ]
    },
    pro: {
      summary: 'Eixo arterial do membro inferior (artéria ilíaca externa → femoral comum sob o ligamento inguinal → femoral profunda e superficial → poplítea no hiato adutor → tibiais anterior/posterior e fibular) e sistemas venosos profundo e safeno.',
      bloodSupply: 'Artéria femoral profunda (circunflexas femorais e perfurantes) nutre a coxa; eixo femoropoplíteo-tibial irriga perna e pé',
      venousDrainage: 'Veias profundas (tibiais → poplítea → femoral) e veia safena magna (ascende anterior ao maléolo medial até a junção safenofemoral)',
      innervation: 'Troncos simpáticos lombar e sacral (L1–S3) controlam a vasoconstrição ortostática',
      originInsertion: 'No trígono femoral (de Scarpa), de lateral para medial (NAVEL): Nervo femoral, Artéria femoral, Veia femoral, Espaço vazio (canal femoral) e Linfonodos',
      metrics: [
        { label: 'Índice tornozelo-braquial (ITB)', value: 'Normal 1,0 – 1,4 (< 0,9 indica doença arterial periférica)' },
        { label: 'Válvulas venosas', value: '10 – 20 válvulas bicúspides ao longo da safena magna' },
        { label: 'Acesso endovascular', value: 'Artéria/veia femoral comum 1–2 cm abaixo do ligamento inguinal' },
        { label: 'Pulsos distais', value: 'Artéria dorsal do pé (pediosa) e artéria tibial posterior' }
      ],
      clinicalPearls: 'A trombose venosa profunda (TVP) nas veias soleares ou femoropoplíteas (tríade de Virchow) pode embolizar via VCI e coração direito causando tromboembolismo pulmonar (TEP).'
    }
  },
  skull: {
    name: 'Crânio e Mandíbula',
    systemLabel: 'Sistema Esquelético Axial',
    kids: {
      badge: '🪖 O capacete natural de osso do seu corpo!',
      pronounce: 'KRÂ-ni-u i Mã-DÍ-bu-la',
      summary: 'Seu crânio é um quebra-cabeça superforte de 22 ossos encaixados como um capacete! A parte de cima protege o cérebro, e a parte da frente forma o rosto, segura os dentes e protege os olhos e ouvidos.',
      whyYouNeedIt: 'Sem o capacete do crânio, qualquer batida machucaria o cérebro; e sem a mandíbula móvel, você não conseguiria mastigar nem falar!',
      funFacts: [
        'Dos 22 ossos do crânio, apenas UM se move: a mandíbula (o osso do queixo)!',
        'As linhas em zigue-zague que unem os ossos do crânio como um zíper chamam-se suturas.',
        'Escondidos dentro do osso temporal (no ouvido médio) estão os 3 menores ossos do corpo — menores que um grão de arroz!'
      ],
      quickStats: [
        { label: 'Total de ossos', value: '22 ossos (8 no neurocrânio + 14 na face)' },
        { label: 'Osso móvel', value: 'Apenas 1 (a Mandíbula)' },
        { label: 'Osso facial mais forte', value: 'Mandíbula' },
        { label: 'Menores ossos', value: '3 ossículos da audição no ouvido médio' }
      ]
    },
    pro: {
      summary: 'Complexo craniofacial de 22 ossos (excluindo os 6 ossículos auditivos) dividido em neurocrânio (frontal, parietais, temporais, occipital, esfenoide, etmoide) e viscerocrânio, unidos por suturas fibrosas e pela articulação temporomandibular (ATM) sinovial.',
      bloodSupply: 'Artéria meníngea média (ramo da artéria maxilar via forame espinhoso) e ramos da carótida externa (temporal superficial, occipital, facial)',
      venousDrainage: 'Veias diploicas e emissárias comunicando o couro cabeludo com os seios venosos durais',
      innervation: 'Divisões do nervo trigêmeo (V1 oftálmico, V2 maxilar, V3 mandibular) e nervos cervicais superiores (C2–C3)',
      originInsertion: 'Articula-se inferiormente nos côndilos occipitais com o atlas (C1); o côndilo mandibular articula-se com a fossa mandibular temporal na ATM',
      metrics: [
        { label: 'Camadas da calvária', value: 'Tábua externa, díploe esponjoso e tábua interna' },
        { label: 'Fechamento das fontanelas', value: 'Posterior: 2–3 meses | Anterior (Bregma): 12–18 meses' },
        { label: 'Forame magno', value: 'Transmite bulbo, meninges, artérias vertebrais e NC XI' },
        { label: 'Ponto mais frágil', value: 'Ptério (junção em H de frontal, parietal, temporal e esfenoide)' }
      ],
      clinicalPearls: 'Traumas na região temporal sobre o ptério podem fraturar o osso fino e lacerar o ramo anterior da artéria meníngea média, causando hematoma epidural agudo (aspecto biconvexo/lenticular na TC).'
    }
  },
  'rib-cage': {
    name: 'Caixa Torácica (Costelas e Esterno)',
    systemLabel: 'Sistema Esquelético Axial',
    kids: {
      badge: '🛡️ A armadura flexível que protege o coração e os pulmões!',
      pronounce: 'Kos-TÉ-las i Es-TÉR-nu',
      summary: 'Sinta os ossos curvos no seu peito — essa é a sua caixa torácica! Você tem 12 pares de costelas (24 no total) que saem da coluna nas costas e se unem ao osso esterno na frente para proteger o coração e os pulmões.',
      whyYouNeedIt: 'As costelas se ligam ao esterno por cartilagens flexíveis, permitindo que o peito se expanda cada vez que você respira fundo!',
      funFacts: [
        'Meninos e meninas têm exatamente o mesmo número de costelas: 12 pares (24 costelas)!',
        'Os dois últimos pares (11ª e 12ª costelas) são chamados de "costelas flutuantes" porque não se prendem na frente.',
        'Dentro do esterno e das costelas, a medula óssea vermelha fabrica milhões de células sanguíneas novas a cada segundo!'
      ],
      quickStats: [
        { label: 'Total de costelas', value: '24 costelas (12 pares)' },
        { label: 'Escudo frontal', value: 'Esterno (manúbrio, corpo e processo xifoide)' },
        { label: 'Costelas verdadeiras', value: 'Pares 1 a 7 (ligadas direto ao esterno)' },
        { label: 'Costelas flutuantes', value: 'Pares 11 e 12 (livres na frente)' }
      ]
    },
    pro: {
      summary: 'Gaiola osteocartilaginosa formada pelo esterno (manúbrio, corpo e processo xifoide), 12 pares de costelas (verdadeiras 1–7, falsas 8–10, flutuantes 11–12), cartilagens costais e vértebras torácicas T1–T12.',
      bloodSupply: 'Artérias intercostais posteriores (aorta torácica e intercostal suprema) anastomosadas com as artérias intercostais anteriores (artéria torácica interna)',
      venousDrainage: 'Veias intercostais drenando anteriormente para as veias torácicas internas e posteriormente para o sistema ázigos/hemiázigos',
      innervation: 'Nervos intercostais (T1–T11) e nervo subcostal (T12) no sulco costal inferior',
      originInsertion: 'Movimento em "alça de bomba" (costelas superiores → diâmetro anteroposterior) e "alça de balde" (costelas inferiores → diâmetro transverso)',
      metrics: [
        { label: 'Ângulo esternal (de Louis)', value: 'Junção manubrioesternal ao nível da 2ª cartilagem costal e T4–T5' },
        { label: 'Feixe vasculonervoso', value: 'Sulco costal na borda inferior: Veia – Artéria – Nervo (VAN)' },
        { label: 'Toracocentese segura', value: 'Inserir a agulha na borda SUPERIOR da costela inferior' },
        { label: 'Hematopoiese', value: 'Medula óssea vermelha ativa no esterno e costelas por toda a vida' }
      ],
      clinicalPearls: 'Na toracocentese ou drenagem torácica, a agulha deve sempre passar rente à borda superior da costela inferior para evitar lesão do feixe intercostal (VAN) alojado no sulco costal inferior da costela acima.'
    }
  },
  spine: {
    name: 'Coluna Vertebral (Cervical, Torácica, Lombar, Sacro e Cóccix)',
    systemLabel: 'Sistema Esquelético Axial e Neural',
    kids: {
      badge: '🏗️ A torre flexível de 33 ossos que sustenta você!',
      pronounce: 'Ko-LU-na Ver-te-BRAL',
      summary: 'Sua coluna não é uma barra dura, mas sim uma torre flexível de 33 ossos em forma de anel chamados vértebras, com almofadinhas macias chamadas discos entre eles! Assim você pode ficar em pé, se curvar e girar.',
      whyYouNeedIt: 'Além de sustentar sua cabeça e tronco, os anéis das vértebras formam um túnel blindado que protege a medula espinhal!',
      funFacts: [
        'Você é cerca de 1 cm mais alto quando acorda de manhã porque os discos da coluna absorvem água enquanto você dorme!',
        'Os seres humanos e as girafas têm exatamente o mesmo número de vértebras no pescoço: 7 vértebras cervicais!',
        'Vista de lado, a coluna tem curvas em forma de "S" que funcionam como uma mola amortecedora.'
      ],
      quickStats: [
        { label: 'Total de vértebras', value: '33 (24 móveis + Sacro e Cóccix)' },
        { label: 'Pescoço (Cervical)', value: '7 vértebras (C1–C7)' },
        { label: 'Tórax e Lombar', value: '12 torácicas + 5 lombares' },
        { label: 'Amortecedores', value: '23 discos intervertebrais' }
      ]
    },
    pro: {
      summary: 'Coluna axial segmentada de 33 vértebras (7 cervicais, 12 torácicas, 5 lombares, 5 sacrais fundidas e 4 coccígeas fundidas) apresentando cifoses primárias (torácica e sacral) e lordoses secundárias (cervical e lombar).',
      bloodSupply: 'Ramos espinhais segmentares das artérias vertebrais, intercostais posteriores, lombares e sacrais laterais',
      venousDrainage: 'Plexos venosos vertebrais internos e externos avalvulares de Batson',
      innervation: 'Nervos sinuvertebrais (meníngeos recorrentes) para o ligamento longitudinal posterior e ânulo fibroso externo; ramos mediais dorsais para as articulações zigapofisárias',
      originInsertion: 'Unida pelos ligamentos longitudinais anterior e posterior, amarelo, interespinhoso e supraespinhoso; discos compostos por ânulo fibroso e núcleo pulposo',
      metrics: [
        { label: 'Fórmula vertebral', value: 'C7 • T12 • L5 • S5 (fundidas) • Co4 (fundidas)' },
        { label: 'Cone medular adulto', value: 'Termina no nível L1–L2 (abaixo segue a cauda equina)' },
        { label: 'Punção lombar segura', value: 'Espaços L3–L4 ou L4–L5 (linha intercristal de Tuffier = L4)' },
        { label: 'Cervicais superiores', value: 'Atlas C1 (flexo-extensão "sim") e Áxis C2 com dente (rotação "não")' }
      ],
      clinicalPearls: 'A hérnia discal posterolateral em L4–L5 comprime a raiz L5 (fraqueza na dorsiflexão do hálux / pé caído), enquanto em L5–S1 comprime a raiz S1 (abolição do reflexo aquileu e fraqueza na flexão plantar).'
    }
  },
  'humerus-radius-ulna': {
    name: 'Úmero, Rádio e Ulna (Ossos do Braço e Antebraço)',
    systemLabel: 'Sistema Esquelético Apendicular',
    kids: {
      badge: '🦾 Os 3 ossos para alcançar, dobrar e girar a mão!',
      pronounce: 'Ú-me-ru, HÁ-di-u i UL-na',
      summary: 'O braço tem um osso grande chamado úmero, e o antebraço tem dois ossos parceiros chamados rádio e ulna! Juntos, eles permitem dobrar o cotovelo e girar a palma da mão para cima e para baixo.',
      whyYouNeedIt: 'Ter dois ossos no antebraço (rádio e ulna) é o segredo que permite girar uma maçaneta, usar uma chave ou virar a mão!',
      funFacts: [
        'Quando você vira a palma da mão para baixo, o osso rádio cruza por cima da ulna formando um "X"!',
        'Aquele choque no cotovelo quando batemos sem querer vem do nervo ulnar que passa bem pertinho do osso!',
        'Na ponta desses ossos, cada mão e punho possui 27 ossos pequenos (54 nas duas mãos!).'
      ],
      quickStats: [
        { label: 'Braço', value: '1 osso: Úmero' },
        { label: 'Antebraço', value: '2 ossos: Rádio (lado do polegar) e Ulna (mindinho)' },
        { label: 'Articulação do cotovelo', value: 'Dobradiça + pivô de rotação' },
        { label: 'Ossos da mão', value: '27 ossos em cada mão e punho' }
      ]
    },
    pro: {
      summary: 'Eixo osteológico do membro superior: o úmero articula-se proximalmente na glenoumeral e distalmente no cotovelo; o rádio e a ulna articulam-se nas radioulnares proximal e distal unidos pela membrana interóssea.',
      bloodSupply: 'Artérias nutrícias oriundas das circunflexas umerais, braquial profunda, radial, ulnar e interósseas',
      venousDrainage: 'Veias profundas satélites das artérias braquial, radial e ulnar',
      innervation: 'Relações fratura-nervo do úmero: colo cirúrgico → nervo axilar; sulco do nervo radial (diáfise) → nervo radial; supracondiliana → nervo mediano; epicôndilo medial → nervo ulnar',
      originInsertion: 'A cabeça do rádio gira dentro do ligamento anular permitindo ~180° de pronação e supinação sobre a ulna',
      metrics: [
        { label: 'Ângulo de carregamento', value: '10° – 15° de valgismo fisiológico do cotovelo' },
        { label: 'Transmissão de carga', value: 'Mão → Escafoide/Semilunar → Rádio distal → Membrana interóssea → Ulna → Úmero' },
        { label: 'Fraturas clássicas', value: 'Colles (rádio distal), Monteggia (ulna + cabeça do rádio), Galeazzi (rádio + ARUD)' },
        { label: 'Manguito rotador', value: 'Tubérculo maior (supraespinal, infraespinal, redondo menor) e menor (subescapular)' }
      ],
      clinicalPearls: 'A fratura diafisária média do úmero pode lesar o nervo radial no sulco espiral, causando "mão caída" (paralisia dos extensores do punho) e hipoestesia no 1º espaço interdigital dorsal.'
    }
  },
  pelvis: {
    name: 'Pelve (Ossos do Quadril e Sacro)',
    systemLabel: 'Cintura Pélvica e Sistema Esquelético',
    kids: {
      badge: '🥣 A bacia forte que liga a parte de cima e de baixo do corpo!',
      pronounce: 'PÉL-vi (Ílio e Sacro)',
      summary: 'Sua pelve (ou bacia) é um anel superforte em forma de tigela nos quadris! Ela sustenta o peso da parte de cima do corpo, protege os órgãos da barriga inferior e tem dois encaixes profundos para os ossos das pernas.',
      whyYouNeedIt: 'Ela conecta a coluna vertebral às duas pernas para que você possa caminhar em pé, correr e se equilibrar!',
      funFacts: [
        'Cada osso do quadril é formado por 3 ossos (ílio, ísquio e púbis) que se fundem enquanto você cresce!',
        'Quando você se senta, apoia o peso sobre dois ossos resistentes chamados túberes isquiáticos.',
        'A palavra "pelve" vem do latim e significa exatamente "bacia" ou "tigela"!'
      ],
      quickStats: [
        { label: 'Formato', value: 'Anel ósseo protetor em forma de bacia' },
        { label: 'Encaixe do quadril', value: 'Acetábulo (soquete para o fêmur)' },
        { label: '3 ossos fundidos', value: 'Ílio, Ísquio e Púbis de cada lado' },
        { label: 'Função principal', value: 'Transmite o peso da coluna para as pernas' }
      ]
    },
    pro: {
      summary: 'Anel osteoligamentar formado pelos ossos coxais pares (ílio, ísquio e púbis fundidos no acetábulo) unidos anteriormente na sínfise púbica e posteriormente ao sacro nas articulações sacroilíacas.',
      bloodSupply: 'Ramos das artérias ilíacas interna (iliolombar, obturatória, glúteas superior e inferior, pudenda interna) e externa (circunflexa ilíaca profunda)',
      venousDrainage: 'Plexos venosos pélvicos retroperitoneais drenando para as veias ilíacas internas e comuns',
      innervation: 'Plexo lombossacral (L1–S4); nervo obturatório (L2–L4) pelo canal obturatório; nervo isquiático/ciático (L4–S3) pelo forame isquiático maior',
      originInsertion: 'Estabilizada pelos ligamentos sacroilíacos, sacrotuberal e sacroespinal; a EIAS dá origem ao músculo sartório e ao ligamento inguinal',
      metrics: [
        { label: 'Conjugado obstétrico', value: '≥ 10,5 – 11,0 cm (pelve feminina ginecoide)' },
        { label: 'Divisão do acetábulo', value: 'Ílio (~2/5), Ísquio (~2/5), Púbis (~1/5)' },
        { label: 'Biópsia de medula óssea', value: 'Espinha ilíaca posterossuperior (EIPS) e crista ilíaca' },
        { label: 'Transmissão de carga', value: 'Coluna → Sacro → Art. SI → Linha arqueada → Acetábulo / Túber isquiático' }
      ],
      clinicalPearls: 'Fraturas pélvicas em "livro aberto" de alta energia podem lacerar o plexo venoso pélvico posterior e ramos da artéria ilíaca interna, causando hemorragia retroperitoneal grave.'
    }
  },
  'femur-tibia-fibula': {
    name: 'Fêmur, Patela, Tíbia e Fíbula (Ossos da Coxa, Joelho e Perna)',
    systemLabel: 'Sistema Esquelético Apendicular',
    kids: {
      badge: '🏆 O lar do osso mais longo e mais forte do corpo!',
      pronounce: 'FÊ-mur, Pa-TÉ-la i TÍ-bi-a',
      summary: 'O osso da coxa — o fêmur — é o osso mais longo, pesado e forte de todo o corpo humano! Abaixo da patela (a rodinha do joelho) ficam os dois ossos da canela: a tíbia grossa e sua parceira fina, a fíbula.',
      whyYouNeedIt: 'Sempre que você pula, corre ou chuta uma bola, esses ossos superfortes absorvem forças várias vezes maiores que o seu peso!',
      funFacts: [
        'Comparado peso por peso, o osso fêmur da coxa é mais resistente que o concreto!',
        'Seu fêmur representa cerca de um quarto (25%) de toda a sua altura!',
        'Sua patela no joelho é um osso especial que fica dentro de um tendão para proteger a articulação e dar mais força ao esticar a perna.'
      ],
      quickStats: [
        { label: 'Recordista', value: 'Fêmur = Osso mais longo e mais forte' },
        { label: 'Escudo do joelho', value: 'Patela (protege a articulação)' },
        { label: 'Osso da canela', value: 'Tíbia (suporta ~85% do peso da perna)' },
        { label: 'Suporte lateral', value: 'Fíbula (forma o tornozelo externo)' }
      ]
    },
    pro: {
      summary: 'Pilar de sustentação do membro inferior: fêmur (cabeça, colo com ângulo de inclinação ~125°, diáfise e côndilos), patela sesamoide, tíbia medial de carga e fíbula lateral para inserção muscular e estabilidade da pinça maleolar.',
      bloodSupply: 'A cabeça femoral é suprida principalmente pelos ramos retinaculares da artéria circunflexa femoral medial (ACFM); a diáfise tibial recebe ramo nutrício da artéria tibial posterior',
      venousDrainage: 'Veias femorais profundas, poplíteas e tibiais anteriores/posteriores',
      innervation: 'Lei de Hilton: articulações do quadril e joelho inervadas pelos nervos femoral, obturatório e isquiático (patologias do quadril frequentemente referem dor medial no joelho via nervo obturatório)',
      originInsertion: 'Joelho estabilizado por LCA, LCP, LCM, LCL e meniscos medial e lateral',
      metrics: [
        { label: 'Ângulo colo-diáfise', value: '120° – 135° (Coxa vara < 120°; Coxa valga > 135°)' },
        { label: 'Tríade infeliz (O’Donoghue)', value: 'LCA + LCM + Menisco medial (estresse em valgo no joelho)' },
        { label: 'Risco no colo da fíbula', value: 'Nervo fibular comum contorna o colo da fíbula → Pé caído se lesado' },
        { label: 'Compartimentos da perna', value: '4 compartimentos fasciais (anterior, lateral, posteriores superficial e profundo)' }
      ],
      clinicalPearls: 'Fraturas intracapsulares do colo do fêmur rompem os vasos retinaculares da artéria circunflexa femoral medial, apresentando alto risco de necrose avascular (NAV) da cabeça femoral.'
    }
  },
  'pectoralis-deltoid': {
    name: 'Peitoral Maior e Deltoide (Músculos do Peito e Ombro)',
    systemLabel: 'Musculatura Torácica e do Ombro',
    kids: {
      badge: '💪 Seus motores para empurrar, abraçar e levantar os braços!',
      pronounce: 'Pei-to-RAL i Del-TÓI-di',
      summary: 'Na frente do peito ficam os músculos peitorais em forma de leque, e cobrindo os ombros ficam os músculos deltoides! Juntos, eles permitem empurrar portas, dar abraços apertados, nadar e levantar os braços bem alto.',
      whyYouNeedIt: 'Cada vez que você faz uma flexão, joga uma bola ou levanta a mão na escola, o peitoral e o deltoide trabalham em equipe!',
      funFacts: [
        'O nome "deltoide" vem da letra grega Delta (Δ) porque o músculo do ombro tem formato de triângulo!',
        'O deltoide tem 3 partes (anterior, lateral e posterior) para levantar o braço para a frente, para o lado ou para trás.',
        'Os músculos só conseguem PUXAR os ossos, nunca empurrar! Por isso trabalham em duplas opostas.'
      ],
      quickStats: [
        { label: 'Ação do peitoral', value: 'Empurra e aproxima os braços à frente' },
        { label: 'Ação do deltoide', value: 'Levanta o braço em todas as direções' },
        { label: 'Formato', value: 'Peito em leque + Ombro triangular' },
        { label: 'Trabalho em equipe', value: 'Atua com os músculos das costas' }
      ]
    },
    pro: {
      summary: 'Motores primários toracoumerais e escapuloumerais superficiais que formam a parede anterior da axila e o contorno do ombro, separados pelo sulco deltopeitoral (que aloja a veia cefálica).',
      bloodSupply: 'Tronco toracoacromial (ramos peitoral e deltoideo) e artéria circunflexa umeral posterior',
      venousDrainage: 'Veia cefálica e tributárias toracoacromiais para a veia axilar',
      innervation: 'Peitoral maior: nervos peitorais medial (C8–T1) e lateral (C5–C7); Deltoide: nervo axilar (C5–C6 via espaço quadrangular)',
      originInsertion: 'Peitoral maior: partes clavicular e esternocostal → crista do tubérculo maior do úmero (adução, rotação medial e flexão). Deltoide: clavícula lateral, acrômio e espinha da escápula → tuberosidade deltoidea (abdução de 15° a 90°)',
      metrics: [
        { label: 'Arco de abdução', value: '0°–15° Supraespinal | 15°–90° Deltoide | >90° Serrátil anterior + Trapézio' },
        { label: 'Injeção intramuscular', value: 'Deltoide médio 3–5 cm abaixo do acrômio' },
        { label: 'Espaço quadrangular', value: 'Transmite o nervo axilar e a artéria circunflexa umeral posterior' },
        { label: 'Arquitetura muscular', value: 'Parte acromial multipenada maximiza a força de abdução' }
      ],
      clinicalPearls: 'A luxação glenoumeral anterior ou fratura do colo cirúrgico do úmero pode lesar o nervo axilar (C5–C6), causando atrofia do deltoide, perda da abdução (15°–90°) e anestesia na face lateral do ombro.'
    }
  },
  'biceps-triceps': {
    name: 'Bíceps Braquial, Tríceps e Músculos do Antebraço',
    systemLabel: 'Musculatura do Membro Superior',
    kids: {
      badge: '💪 A dupla famosa que dobra e estica os seus braços!',
      pronounce: 'BÍ-seps i TRÍ-seps',
      summary: 'Dobre o cotovelo e mostre o muque: esse músculo na frente do braço é o bíceps braquial! Quando ele contrai, puxa o antebraço para cima. Quando você quer esticar o braço de novo, o tríceps na parte de trás puxa no sentido oposto!',
      whyYouNeedIt: 'Como os músculos só puxam, o bíceps (na frente) e o tríceps (atrás) funcionam como uma dupla perfeita para dobrar e esticar o cotovelo!',
      funFacts: [
        '"Bí-ceps" significa "duas cabeças" em latim, porque a parte superior do músculo se divide em dois tendões presos à escápula!',
        '"Trí-ceps" na parte de trás do braço significa "três cabeças"!',
        'O bíceps não serve só para dobrar o cotovelo — ele também é o músculo mais forte para girar a palma da mão para cima!'
      ],
      quickStats: [
        { label: 'Significado', value: 'Bíceps = 2 cabeças | Tríceps = 3 cabeças' },
        { label: 'Ação do bíceps', value: 'Dobra o cotovelo e gira a palma para cima' },
        { label: 'Ação do tríceps', value: 'Estica o cotovelo (extensão)' },
        { label: 'Conexão', value: 'Tendões fortes ligam o músculo ao osso' }
      ]
    },
    pro: {
      summary: 'Compartimento braquial anterior (bíceps braquial, braquial, coracobraquial) e posterior (tríceps braquial) atuando sobre as articulações glenoumeral, do cotovelo e radioulnar.',
      bloodSupply: 'Ramos musculares da artéria braquial (anterior) e artéria braquial profunda (posterior)',
      venousDrainage: 'Veias braquiais, basílica e cefálica',
      innervation: 'Compartimento anterior: nervo musculocutâneo (C5–C7); compartimento posterior (tríceps): nervo radial (C6–C8)',
      originInsertion: 'Bíceps: cabeça curta (processo coracoide) e longa (tubérculo supraglenoidal) → tuberosidade do rádio e aponeurose bicipital (supinador potente e flexor). Tríceps: cabeças longa, lateral e medial → olécrano da ulna (extensor)',
      metrics: [
        { label: 'Reflexos tendinosos', value: 'Bicipital = C5/C6 | Braquiorradial = C6 | Tricipital = C7' },
        { label: 'Torque de supinação', value: 'Máximo com o cotovelo fletido a 90°' },
        { label: 'Inibição recíproca', value: 'Aferentes Ia relaxam o tríceps durante a ativação do bíceps' },
        { label: 'Ruptura da cabeça longa', value: 'Sinal do Popeye (retração distal do ventre muscular)' }
      ],
      clinicalPearls: 'A paralisia de Erb-Duchenne (lesão do tronco superior C5–C6 do plexo braquial) paralisa deltoide, bíceps e braquial, resultando na postura clássica em "gorjeta de garçom".'
    }
  },
  'rectus-abdominis-diaphragm': {
    name: 'Reto do Abdome, Oblíquos e Diafragma Torácico',
    systemLabel: 'Musculatura do Core e Respiratória',
    kids: {
      badge: '🛡️ Sua armadura abdominal e o músculo paraquedas da respiração!',
      pronounce: 'HÉ-tu du Ab-DÔ-mi i Di-a-FRÁG-ma',
      summary: 'Seus músculos abdominais envolvem a barriga como um cinturão protetor para guardar seus órgãos e ajudar você a sentar, girar e se equilibrar. Logo acima deles, sob as costelas, fica o diafragma: um músculo em forma de cúpula que desce toda vez que você puxa o ar!',
      whyYouNeedIt: 'O diafragma faz a maior parte do trabalho da respiração, e os músculos abdominais estabilizam a coluna em todos os movimentos!',
      funFacts: [
        'Sabe quando você tem soluço? Isso acontece quando o músculo diafragma dá um pulinho repentino fazendo o ar entrar rápido!',
        'Os "gomos" do músculo reto abdominal são formados por 3 faixas fibrosas horizontais que cruzam o músculo.',
        'Quando você dá gargalhadas, tosse ou espirra, seus músculos abdominais entram em ação na hora!'
      ],
      quickStats: [
        { label: 'Formato do diafragma', value: 'Cúpula / paraquedas sob os pulmões' },
        { label: 'Parede abdominal', value: '4 camadas musculares protetoras' },
        { label: 'Causa do soluço', value: 'Espasmo repentino do diafragma!' },
        { label: 'Funções principais', value: 'Respiração + Proteção + Postura' }
      ]
    },
    pro: {
      summary: 'Septo musculotendinoso toracoabdominal em dupla cúpula (diafragma) e parede abdominal anterolateral em 4 camadas (oblíquo externo, oblíquo interno, transverso do abdome e reto do abdome na bainha dos retos).',
      bloodSupply: 'Bainha dos retos: artérias epigástricas superior (torácica interna) e inferior (ilíaca externa). Diafragma: artérias frênicas superiores/inferiores, musculofrênica e pericardicofrênica',
      venousDrainage: 'Veias epigástricas superior e inferior (via colateral cavocava e portossistêmica) e veias frênicas',
      innervation: 'Diafragma: nervo frênico (C3, C4, C5). Parede abdominal: nervos toracoabdominais (T7–T11), subcostal (T12) e ilio-hipogástrico/ilioinguinal (L1)',
      originInsertion: 'Hiatos diafragmáticos: forame da veia cava em T8 (VCI + frênico direito), hiato esofágico em T10 (esôfago + troncos vagais), hiato aórtico em T12 (aorta + ducto torácico + veia ázigos)',
      metrics: [
        { label: 'Excursão diafragmática', value: '1,5 – 2 cm basal | 6 – 10 cm inspiração profunda' },
        { label: 'Linha arqueada (de Douglas)', value: 'Meio caminho entre umbigo e púbis (abaixo, aponeuroses passam anteriores ao reto)' },
        { label: 'Níveis dos hiatos', value: 'VCI = T8, Esôfago = T10, Aorta = T12' },
        { label: 'Trígono de Hesselbach', value: 'Medial: reto | Lateral: vasos epigástricos inf. | Inferior: lig. inguinal' }
      ],
      clinicalPearls: 'Hérnias inguinais diretas protruem através do trígono de Hesselbach medialmente aos vasos epigástricos inferiores, enquanto hérnias indiretas atravessam o anel inguinal profundo lateralmente a esses vasos.'
    }
  },
  'quadriceps-gastrocnemius': {
    name: 'Quadríceps Femoral, Isquiotibiais e Gastrocnêmio (Músculos da Perna)',
    systemLabel: 'Musculatura do Membro Inferior',
    kids: {
      badge: '⚡ Seus motores gigantes para correr, pular e chutar!',
      pronounce: 'Kwa-DRÍ-seps i Gas-trok-NÊ-mi-u',
      summary: 'Suas pernas têm os músculos mais volumosos e potentes do corpo! O quadríceps na frente da coxa estica o joelho para chutar e pular, os posteriores da coxa dobram o joelho, e o gastrocnêmio na panturrilha puxa o tendão de Aquiles para impulsionar você!',
      whyYouNeedIt: 'Cada passo, corrida ou salto usa o trabalho coordenado entre a coxa e a panturrilha!',
      funFacts: [
        '"Quadrí-ceps" significa "quatro cabeças", pois é um time de 4 grandes músculos na frente da coxa!',
        'Os músculos da panturrilha prendem-se ao calcanhar pelo tendão de Aquiles — o tendão mais grosso e forte do corpo!',
        'O glúteo máximo e o quadríceps disputam o título de maior músculo em volume do corpo humano!'
      ],
      quickStats: [
        { label: 'Quadríceps', value: '4 músculos na frente da coxa (esticam o joelho)' },
        { label: 'Isquiotibiais', value: '3 músculos atrás da coxa (dobram o joelho)' },
        { label: 'Panturrilha', value: 'Gastrocnêmio e Sóleo (ficar na ponta dos pés)' },
        { label: 'Tendão mais forte', value: 'Tendão calcâneo (de Aquiles)' }
      ]
    },
    pro: {
      summary: 'Extensores e flexores plantares primários do membro inferior: quadríceps femoral anterior (reto femoral, vastos lateral, medial e intermédio), isquiotibiais posteriores (bíceps femoral, semitendíneo, semimembranáceo) e tríceps sural (gastrocnêmio + sóleo).',
      bloodSupply: 'Artérias femoral profunda e circunflexa femoral lateral (coxa); ramos surais das artérias poplítea e tibial posterior (perna)',
      venousDrainage: 'Veias femorais profundas, poplíteas e seios venosos soleares (bomba veno-muscular da panturrilha)',
      innervation: 'Quadríceps: nervo femoral (L2–L4); Isquiotibiais: componente tibial do isquiático (L5–S2, exceto cabeça curta do bíceps pelo fibular comum); Tríceps sural: nervo tibial (S1–S2)',
      originInsertion: 'Quadríceps → tendão quadricipital → patela → ligamento patelar → tuberosidade da tíbia. Gastrocnêmio e sóleo → tendão calcâneo (de Aquiles) → calcâneo posterior',
      metrics: [
        { label: 'Reflexo patelar', value: 'L3–L4 (nervo femoral)' },
        { label: 'Reflexo aquileu', value: 'S1–S2 (nervo tibial)' },
        { label: 'Carga no tendão de Aquiles', value: 'Suporta até 8–12× o peso corporal na corrida/salto' },
        { label: 'Fibras musculares', value: 'Sóleo: ~80% tipo I lentas (postura) | Gastrocnêmio: tipo II rápidas' }
      ],
      clinicalPearls: 'A ruptura do tendão calcâneo (de Aquiles) ocorre tipicamente 2–6 cm acima de sua inserção (zona hipovascular) e apresenta teste de Thompson positivo (ausência de flexão plantar à compressão da panturrilha).'
    }
  },
  'spinal-cord-sciatic': {
    name: 'Medula Espinhal, Plexo Braquial e Nervo Ciático',
    systemLabel: 'Sistema Nervoso Central e Periférico',
    kids: {
      badge: '⚡ A rede de cabos de fibra óptica ultrarrápida do corpo!',
      pronounce: 'Me-DU-la Es-pi-ÑAL i Si-Á-ti-ku',
      summary: 'A medula espinhal é um feixe grosso de nervos que desce pelo túnel dentro da coluna vertebral e envia 31 pares de ramos nervosos para cada pedacinho da pele e dos músculos, levando mensagens a mais de 400 km/h!',
      whyYouNeedIt: 'Se você encostar em algo muito quente, seus nervos usam um atalho na medula espinhal ("arco reflexo") para puxar a mão ANTES mesmo de o cérebro perceber!',
      funFacts: [
        'O nervo ciático (isquiático) que desce pela parte de trás de cada perna é o maior e mais grosso nervo do corpo — quase da largura de um polegar adulto!',
        'Se colocássemos todos os nervos do corpo em fila, eles teriam mais de 72 quilômetros!',
        'O nervo vago viaja do tronco encefálico até o coração, pulmões e barriga para acalmar o corpo.'
      ],
      quickStats: [
        { label: 'Nervos espinhais', value: '31 pares saindo da medula espinhal' },
        { label: 'Maior nervo', value: 'Nervo ciático / isquiático (do quadril ao pé)' },
        { label: 'Velocidade', value: 'Até 120 m/s (430 km/h)' },
        { label: 'Atalho instantâneo', value: 'Arco reflexo espinhal!' }
      ]
    },
    pro: {
      summary: 'Medula espinhal cilíndrica do SNC (com intumescências cervical C4–T1 e lombossacral L1–S3) originando 31 pares de nervos espinhais mistos (8C, 12T, 5L, 5S, 1Co) organizados nos plexos cervical, braquial, lombar e sacral.',
      bloodSupply: 'Artéria espinhal anterior única (2/3 anteriores) e artérias espinhais posteriores pares (colunas dorsais), reforçadas pela artéria radicular magna de Adamkiewicz (T8–L2 à esquerda)',
      venousDrainage: 'Veias espinhais anteriores e posteriores drenando para o plexo venoso vertebral interno',
      innervation: 'Vias ascendentes: coluna dorsal-lemnisco medial (tato epicrítico e propriocepção) e trato espinotalâmico (dor e temperatura). Via descendente: trato corticoespinhal lateral',
      originInsertion: 'Contínua com o bulbo no forame magno; ancorada inferiormente ao cóccix pelo filamento terminal e lateralmente pelos ligamentos denticulados',
      metrics: [
        { label: 'Velocidade de condução', value: 'Fibras Aα mielinizadas: 80 – 120 m/s | Fibras C: 0,5 – 2 m/s' },
        { label: 'Plexo braquial', value: 'C5–T1 (Raízes → Troncos → Divisões → Fascículos → Ramos)' },
        { label: 'Nervo isquiático (ciático)', value: 'L4–S3 (Maior nervo periférico, ~2 cm de diâmetro)' },
        { label: 'Zona crítica medular', value: 'Segmentos torácicos T4–T8' }
      ],
      clinicalPearls: 'A síndrome de Brown-Séquard (hemissecção medular) causa paralisia espástica e perda proprioceptiva ipsilaterais abaixo da lesão, com perda contralateral de dor e temperatura.'
    }
  },
  'female-reproductive': {
    name: 'Útero, Ovários e Tubas Uterinas (Sistema Reprodutor Feminino)',
    systemLabel: 'Sistema Reprodutor e Endócrino Feminino',
    kids: {
      badge: '🌸 O berço protetor onde os bebês se desenvolvem!',
      pronounce: 'Ú-te-ru i O-VÁ-ri-us',
      summary: 'Dentro da pelve feminina ficam o útero, dois ovários em forma de amêndoa e duas tubas uterinas. Os ovários produzem hormônios importantes, e o útero muscular é o espaço seguro e elástico onde um bebê pode crescer antes de nascer.',
      whyYouNeedIt: 'Esses órgãos produzem hormônios (estrogênio e progesterona) que ajudam a manter os ossos fortes e guiam o crescimento na vida adulta.',
      funFacts: [
        'Uma menina já nasce com todos os óvulos (oócitos) que terá ao longo da vida guardados dentro dos dois ovários!',
        'O útero tem o tamanho e formato de uma pera invertida e possui uma das musculaturas lisas mais fortes do corpo.',
        'As pontas das tubas uterinas têm franjas delicadas chamadas fímbrias que capturam o óvulo com suavidade!'
      ],
      quickStats: [
        { label: 'Formato do útero', value: 'Órgão muscular em forma de pera (~7,5 cm)' },
        { label: 'Ovários', value: '2 glândulas do tamanho de amêndoas' },
        { label: 'Tubas uterinas', value: '2 canais ligando os ovários ao útero' },
        { label: 'Hormônios', value: 'Estrogênio e Progesterona' }
      ]
    },
    pro: {
      summary: 'Trato genital feminino interno situado na pelve verdadeira entre a bexiga urinária (escavação vesicouterina) e o reto (escavação retouterina de Douglas), compreendendo ovários, tubas uterinas (infundíbulo, ampola, istmo), útero (fundo, corpo, istmo, colo) e vagina.',
      bloodSupply: 'Artéria uterina (ramo da ilíaca interna que cruza superiormente ao ureter — "água sob a ponte") anastomosada com a artériaovárica (ramo da aorta em L2)',
      venousDrainage: 'Plexo uterino → veias ilíacas internas; plexo pampiniforme → veia ovárica direita (para a VCI) e esquerda (para a veia renal esquerda)',
      innervation: 'Plexo uterovaginal (hipogástrico inferior: simpático T10–L1; parassimpático esplâncnico pélvico S2–S4) e plexo ovárico',
      originInsertion: 'Sustentado pelo diafragma pélvico (levantador do ânus) e ligamentos cardinais (de Mackenrodt), uterossacros, redondos e largos',
      metrics: [
        { label: 'Útero nulíparo', value: '~7,5 × 5,0 × 2,5 cm | Massa: 50 – 70 g' },
        { label: 'Posição uterina habitual', value: 'Anteversoflexão (antevertido e antefletido)' },
        { label: 'Local de fecundação', value: 'Ampola da tuba uterina' },
        { label: 'Zona de transformação', value: 'Junção escamocolunar (JEC) do colo uterino' }
      ],
      clinicalPearls: 'Na histerectomia, duas relações com o ureter são críticas: os vasos ováricos cruzam anteriormente o ureter no ligamento infundibulopélvico, e a artéria uterina cruza sobre o ureter a ~1,5 cm do fórnice lateral.'
    }
  },
  'mammary-glands': {
    name: 'Glândulas Mamárias e Ductos Lactíferos',
    systemLabel: 'Sistema Tegumentar e Exócrino',
    kids: {
      badge: '🍼 Glândulas especializadas produtoras de leite nutritivo!',
      pronounce: 'GLÃ-du-las Ma-MÁ-ri-as',
      summary: 'As glândulas mamárias ficam na parede anterior do tórax, sobre os músculos peitorais. São formadas por 15 a 20 lobos organizados como gomos de uma laranja, conectados por pequenos canais chamados ductos lactíferos.',
      whyYouNeedIt: 'Nos mamíferos, essas glândulas fornecem aos recém-nascidos nutrição completa e anticorpos protetores!',
      funFacts: [
        'A palavra "mamífero" vem diretamente do latim "mamma"!',
        'Dentro de cada glândula, os lobos ficam dispostos em círculo como pétalas de uma margarida.',
        'Fibras resistentes chamadas ligamentos de Cooper sustentam o tecido mamário na pele e na parede do peito.'
      ],
      quickStats: [
        { label: 'Lobos glandulares', value: '15 a 20 lobos radiais de cada lado' },
        { label: 'Sistema de canais', value: 'Ductos e seios lactíferos' },
        { label: 'Base muscular', value: 'Sobre o peitoral maior e serrátil anterior' },
        { label: 'Sustentação', value: 'Ligamentos suspensores de Cooper' }
      ]
    },
    pro: {
      summary: 'Glândulas sudoríparas apócrinas modificadas situadas na tela subcutânea da parede torácica anterior (2ª à 6ª costelas) sobre a fáscia peitoral, separadas pelo espaço retromamário.',
      bloodSupply: 'Ramos perfurantes da artéria torácica interna (~60% medial), artérias torácica lateral e toracoacromial, e ramos intercostais posteriores (2º–5º)',
      venousDrainage: 'Plexo venoso subareolar drenando para as veias axilar, torácica interna e intercostais',
      innervation: 'Ramos cutâneos anteriores e laterais dos nervos intercostais 2º–6º (mamilo = dermátomo T4)',
      originInsertion: '15–20 lobos tubuloalveolares convergindo em ductos e seios lactíferos no complexo aréolo-papilar, sustentados pelos ligamentos suspensores de Cooper',
      metrics: [
        { label: 'Extensão anatômica', value: '2ª à 6ª costela | Borda esternal à linha axilar média' },
        { label: 'Cauda axilar (de Spence)', value: 'Prolongamento superolateral para a axila' },
        { label: 'Drenagem linfática', value: '>75% para linfonodos axilares ipsilaterais; ~20% para paraesternais' },
        { label: 'Regulação hormonal', value: 'Estrogênio (ductos), Progesterona (alvéolos), Prolactina e Ocitocina' }
      ],
      clinicalPearls: 'A tração tumoral sobre os ligamentos de Cooper causa retração cutânea, enquanto o bloqueio linfático dérmico produz o aspecto em "casca de laranja" (peau d’orange).'
    }
  },
  'male-reproductive': {
    name: 'Próstata, Testículos e Ductos Deferentes (Sistema Reprodutor Masculino)',
    systemLabel: 'Sistema Reprodutor e Endócrino Masculino',
    kids: {
      badge: '🧬 Órgãos endócrinos e reprodutores masculinos',
      pronounce: 'PRÓS-ta-ta i Tes-TÍ-ku-lus',
      summary: 'O sistema reprodutor masculino inclui os dois testículos (que produzem o hormônio testosterona), os epidídimos, os ductos deferentes e a glândula próstata, do tamanho de uma noz, localizada logo abaixo da bexiga.',
      whyYouNeedIt: 'O hormônio testosterona ajuda a engrossar a voz e a fortalecer ossos e músculos durante o crescimento.',
      funFacts: [
        'A próstata tem o formato e o tamanho de uma noz, ficando logo abaixo da bexiga urinária.',
        'Os túbulos microscópicos dentro de um único testículo, se desenrolados, mediriam centenas de metros!',
        'O ducto deferente sobe fazendo uma curva sobre o osso do quadril até chegar atrás da bexiga.'
      ],
      quickStats: [
        { label: 'Tamanho da próstata', value: 'Glândula do tamanho de uma noz (~20 g)' },
        { label: 'Testículos', value: '2 glândulas endócrinas e reprodutoras' },
        { label: 'Hormônio principal', value: 'Testosterona' },
        { label: 'Trajeto', value: 'Testículo → Epidídimo → Ducto deferente → Uretra' }
      ]
    },
    pro: {
      summary: 'Trato urogenital masculino composto pelos testículos (túbulos seminíferos e células de Leydig), epidídimos, ductos deferentes (no funículo espermático), glândulas seminais, ductos ejaculatórios e próstata circunscrevendo a uretra prostática.',
      bloodSupply: 'Artérias testiculares (ramos diretos da aorta em L2), artéria do ducto deferente e ramos vesicais inferiores e retais médios para a próstata',
      venousDrainage: 'Plexo pampiniforme → veia testicular direita (VCI) e esquerda (veia renal esquerda a 90°); plexo venoso prostático de Santorini comunicando-se com o plexo de Batson',
      innervation: 'Plexo testicular (T10–T11) e plexo hipogástrico inferior (nervos esplâncnicos pélvicos S2–S4 parassimpáticos; fibras simpáticas L1–L2)',
      originInsertion: 'A próstata divide-se (McNeal) em zona periférica (~70%, posterior), zona central (~25%) e zona de transição (~5%, periuretral)',
      metrics: [
        { label: 'Massa prostática normal', value: '~20 g (3 × 4 × 2 cm) abaixo do colo vesical' },
        { label: 'Zonas de McNeal', value: 'Periférica (sede de carcinoma) vs. Transição (sede de HPB)' },
        { label: 'Canal inguinal', value: 'Anel inguinal profundo (fáscia transversal) → Anel superficial (oblíquo externo)' },
        { label: 'Termorregulação', value: 'Cremaster + Dartos + Plexo pampiniforme mantêm ~34–35 °C' }
      ],
      clinicalPearls: 'A hiperplasia prostática benigna (HPB) acomete a zona de transição periuretral causando sintomas obstrutivos precoces, enquanto o adenocarcinoma origina-se predominantemente na zona periférica posterior.'
    }
  }
};

export const TISSUE_INFO_PT = {
  skin: {
    kids: 'Esta é a sua pele — a armadura elástica e impermeável do corpo! Ela barra germes, guarda água e tem milhões de sensores de toque, calor e frio.',
    pro: 'Tegumento: epiderme pavimentosa estratificada queratinizada sobre derme colagenosa vascular e hipoderme adiposa.'
  },
  hair: {
    kids: 'O cabelo protege a cabeça do sol e ajuda a manter o calor. Cada fio nasce de uma bolsinha na pele chamada folículo.',
    pro: 'Hastes pilosas queratinizadas originadas de folículos pilosos dérmicos; fotoproteção UV e isolamento térmico.'
  },
  muscle: {
    kids: 'Este é um músculo! Os músculos são feixes de fibras elásticas que puxam os ossos para você se mover. Eles trabalham sempre em equipe.',
    pro: 'Músculo esquelético (estriado voluntário). Observar orientação fascicular, origem/inserção e inervação.'
  },
  tendon: {
    kids: 'Este é um tendão — um cabo superforte que prende o músculo ao osso para puxá-lo quando o músculo contrai.',
    pro: 'Tecido conjuntivo denso modelado (colágeno tipo I) que transmite força muscular ao osso.'
  },
  ligament: {
    kids: 'Os ligamentos são faixas resistentes que unem um osso ao outro nas articulações, mantendo tudo firme.',
    pro: 'Tecido conjuntivo denso fibroso que conecta osso a osso, garantindo estabilidade articular e propriocepção.'
  },
  bone: {
    kids: 'Este é um osso! Os ossos são partes vivas que sustentam o corpo, protegem órgãos e fabricam sangue na medula óssea.',
    pro: 'Tecido ósseo lamelar cortical (compacto) e trabecular (esponjoso); suporte biomecânico, homeostase mineral e hematopoiese.'
  },
  tooth: {
    kids: 'Os dentes são cobertos por esmalte — a substância mais dura de todo o corpo humano! Eles cortam e trituram os alimentos.',
    pro: 'Esmalte sobre dentina e polpa dental, fixado pelo ligamento periodontal (gonfose); 32 dentes permanentes no adulto.'
  },
  cartilage: {
    kids: 'A cartilagem é um tecido liso e flexível, como a ponta do nariz. Ela amortece as articulações e mantém a traqueia aberta.',
    pro: 'Cartilagem hialina, elástica ou fibrosa avascular nutrida por difusão; superfícies articulares de baixo atrito.'
  },
  artery: {
    kids: 'Esta é uma artéria — um tubo forte e elástico que leva sangue vermelho vivo cheio de oxigênio DO coração para o corpo!',
    pro: 'Artéria sistêmica (túnica média espessa). Conduz sangue oxigenado centrifugamente sob fluxo pulsátil.'
  },
  arteryDeoxy: {
    kids: 'Esta artéria leva sangue do coração para os pulmões para buscar oxigênio novo — por isso está pintada de azul!',
    pro: 'Árvore arterial pulmonar: conduz sangue desoxigenado do ventrículo direito aos pulmões (circuito de baixa pressão).'
  },
  vein: {
    kids: 'Esta é uma veia! As veias trazem o sangue que já entregou oxigênio DE VOLTA para o coração e possuem válvulas de mão única.',
    pro: 'Veia sistêmica (vaso de capacitância com válvulas nos membros). Retorna sangue desoxigenado ao átrio direito.'
  },
  veinOxy: {
    kids: 'Esta veia traz sangue novinho e cheio de oxigênio dos pulmões para o coração — por isso é vermelha!',
    pro: 'Veia pulmonar: retorna sangue oxigenado dos pulmões para o átrio esquerdo.'
  },
  nerve: {
    kids: 'Os nervos são os cabos elétricos do corpo, levando mensagens ultrarrápidas entre o cérebro e todas as partes de você.',
    pro: 'Nervo periférico ou craniano: axônios mielinizados e amielinizados envolvidos por endoneuro, perineuro e epineuro.'
  },
  cord: {
    kids: 'A medula espinhal é o cabo principal do sistema nervoso, descendo protegida por dentro da coluna vertebral.',
    pro: 'Medula espinhal: substância cinzenta central e tratos de substância branca periféricos; cone medular em L1–L2.'
  },
  brain: {
    kids: 'Esta é uma parte do seu cérebro — o centro de comando! Ele controla pensamentos, movimentos, sentidos, memória e emoções.',
    pro: 'Estrutura do sistema nervoso central. Correlacionar com o território vascular e localização funcional.'
  },
  dura: {
    kids: 'Esta é uma membrana resistente (dura-máter) que envolve e protege o cérebro.',
    pro: 'Prega dural (meninge) que compartimentaliza a cavidade craniana e abriga os seios venosos durais.'
  },
  csf: {
    kids: 'Espaços cheios de líquido dentro do cérebro que funcionam como um colchão de água protetor!',
    pro: 'Sistema ventricular contendo líquido cefalorraquidiano (~150 mL, produzido pelos plexos corióideos).'
  },
  heart: {
    kids: 'Parte do seu coração — a bomba muscular incansável que bate cerca de 100.000 vezes por dia!',
    pro: 'Estrutura cardíaca. Correlacionar com irrigação coronariana, sistema de condução e função valvar.'
  },
  lung: {
    kids: 'Seus pulmões são esponjosos e trocam gás carbônico por oxigênio fresco a cada respiração.',
    pro: 'Parênquima pulmonar: ~300–500 milhões de alvéolos com ~70 m² de superfície de hematose.'
  },
  airway: {
    kids: 'Estes são os tubos de ar (traqueia e brônquios) que se ramificam como uma árvore para levar ar aos pulmões.',
    pro: 'Via aérea condutora (árvore traqueobrônquica): ~23 gerações de ramificação com suporte cartilaginoso.'
  },
  liver: {
    kids: 'O fígado é a fábrica química do corpo: limpa o sangue, estoca energia e produz bile.',
    pro: 'Parênquima hepático (segmentos de Couinaud) com duplo aporte: veia porta (~75%) e artéria hepática (~25%).'
  },
  gallbladder: {
    kids: 'A vesícula biliar guarda a bile, um líquido esverdeado que ajuda a digerir gorduras.',
    pro: 'Via biliar: armazena e concentra a bile, drenando pelo ducto cístico para o colédoco.'
  },
  stomach: {
    kids: 'Seu estômago é uma bolsa muscular que mistura a comida com ácido para iniciar a digestão.',
    pro: 'Estômago: secreta HCl, pepsinogênio e fator intrínseco, formando o quimo.'
  },
  intestine: {
    kids: 'O intestino delgado é um longo tubo sinuoso que absorve os nutrientes da comida para o sangue.',
    pro: 'Intestino delgado (duodeno, jejuno, íleo): principal local de digestão e absorção (~6 m in vivo).'
  },
  colon: {
    kids: 'O intestino grosso absorve água e abriga trilhões de bactérias benéficas.',
    pro: 'Intestino grosso: reabsorção de água e eletrólitos e fermentação pela microbiota.'
  },
  pancreas: {
    kids: 'O pâncreas produz enzimas digestivas e a insulina, que controla o açúcar no sangue.',
    pro: 'Glândula mista exócrina (ácinos enzimáticos) e endócrina (ilhotas de Langerhans: insulina, glucagon).'
  },
  kidney: {
    kids: 'Seus rins são filtros em forma de feijão que limpam o sangue e produzem a urina.',
    pro: 'Parênquima renal: ~1 milhão de néfrons por rim; TFG ~120 mL/min; secreção de renina, EPO e calcitriol.'
  },
  bladder: {
    kids: 'A bexiga é uma bolsa elástica que guarda a urina até a hora de ir ao banheiro.',
    pro: 'Bexiga urinária e uretra: músculo detrusor liso com capacidade fisiológica de ~400–600 mL.'
  },
  spleen: {
    kids: 'O baço filtra o sangue e ajuda as células de defesa a combater micróbios.',
    pro: 'Órgão linfoide secundário: polpa vermelha (hemocaterese) e polpa branca (resposta imune).'
  },
  eye: {
    kids: 'Parte do seu olho — a câmera fotográfica do corpo que foca a luz para o cérebro ver imagens!',
    pro: 'Estrutura ocular. Correlacionar com o eixo óptico (córnea → cristalino → retina) e órbita.'
  },
  pupil: {
    kids: 'O cristalino fica atrás da pupila e muda de forma para focar objetos de perto e de longe.',
    pro: 'Cristalino e fibras zonulares; acomodação pelo músculo ciliar (sua opacificação denomina-se catarata).'
  },
  lip: {
    kids: 'Seus lábios ajudam a falar, comer e sorrir. São rosados porque têm muitos vasinhos perto da superfície.',
    pro: 'Lábios: músculo orbicular da boca recoberto por epitélio vermelhão ricamente vascularizado.'
  },
  gland: {
    kids: 'As glândulas produzem líquidos especiais ou hormônios importantes para o corpo.',
    pro: 'Tecido glandular exócrino ou endócrino; correlacionar com secreção e controle neurovascular.'
  },
  tongue: {
    kids: 'Este tecido macio ajuda você a sentir os sabores, mastigar, engolir e falar.',
    pro: 'Tecido mole oral; inervação motora e sensitiva/gustativa pelos NC V3, VII, IX e XII.'
  },
  mesentery: {
    kids: 'Esta lâmina fina segura os intestinos no lugar e conduz seus vasos sanguíneos.',
    pro: 'Prega peritoneal que suspende o tubo digestório e conduz vasos, nervos e linfáticos mesentéricos.'
  },
  reproductive: {
    kids: 'Faz parte do sistema reprodutor — órgãos que produzem hormônios e permitem gerar bebês na vida adulta.',
    pro: 'Estrutura do trato reprodutor e endócrino (modelos de referência NIH HuBMAP e BodyParts3D).'
  },
  organ: {
    kids: 'Este é um dos órgãos internos do seu corpo, trabalhando em equipe para manter você saudável.',
    pro: 'Estrutura anatômica do Foundational Model of Anatomy (FMA).'
  }
};

export const QUIZ_QUESTIONS_PT = [
  {
    id: 'q1',
    targetPartId: 'heart',
    question: 'Qual órgão muscular bate cerca de 100.000 vezes por dia e tem 4 câmaras que bombeiam sangue para todo o corpo?',
    options: ['O Coração', 'O Estômago', 'Os Rins', 'A Caixa Torácica'],
    correctIndex: 0,
    explanation: 'Correto! Seu coração é uma bomba muscular de 4 câmaras do tamanho de um punho que bombeia cerca de 7.570 litros de sangue todos os dias.'
  },
  {
    id: 'q2',
    targetPartId: 'aorta',
    question: 'Na visualização do fluxo sanguíneo, qual é o nome da maior artéria VERMELHA que sai do topo do coração como uma rodovia?',
    options: ['O Nervo Ciático', 'A Aorta', 'A Traqueia', 'A Patela'],
    correctIndex: 1,
    explanation: 'Exato! A aorta é a maior artéria elástica do corpo humano, levando sangue rico em oxigênio a partir do ventrículo esquerdo.'
  },
  {
    id: 'q3',
    targetPartId: 'vena-cava',
    question: 'Por que as Veias Cavas Superior e Inferior e outras veias são mostradas em AZUL com o sangue voltando para o coração?',
    options: [
      'Porque o sangue dentro delas está congelado',
      'Porque as veias devolvem o sangue que já entregou seu oxigênio de volta ao coração e aos pulmões',
      'Porque as veias transportam apenas água',
      'Porque as veias empurram o sangue para a ponta dos dedos'
    ],
    correctIndex: 1,
    explanation: 'Muito bem! As artérias (vermelhas) levam sangue rico em oxigênio do coração, enquanto as veias (azuis) trazem o sangue de volta ao coração e pulmões.'
  },
  {
    id: 'q4',
    targetPartId: 'femur-tibia-fibula',
    question: 'Qual osso da sua coxa é o mais longo, mais pesado e mais forte de todo o corpo humano?',
    options: ['O Rádio', 'A Clavícula', 'O Fêmur', 'O Esterno'],
    correctIndex: 2,
    explanation: 'Excelente! O fêmur (osso da coxa) representa cerca de 1/4 da sua altura e é mais resistente que o concreto!'
  },
  {
    id: 'q5',
    targetPartId: 'liver',
    question: 'Qual órgão interno sob as costelas direitas realiza mais de 500 funções químicas, produz bile e pode se regenerar?',
    options: ['O Fígado', 'O Músculo Deltoide', 'A Patela', 'A Veia Jugular'],
    correctIndex: 0,
    explanation: 'Brilhante! O fígado é a fábrica química e filtro do corpo, além de ser o único órgão interno capaz de se regenerar!'
  },
  {
    id: 'q6',
    targetPartId: 'brain',
    question: 'Qual órgão fica protegido dentro do capacete do crânio e usa 86 bilhões de neurônios para controlar pensamentos, memórias e sentidos?',
    options: ['Os Pulmões', 'O Cérebro (Encéfalo)', 'A Pelve', 'O Bíceps'],
    correctIndex: 1,
    explanation: 'Perfeito! Seu cérebro é o centro de comando e envia sinais elétricos a velocidades de até 430 km/h.'
  }
];
