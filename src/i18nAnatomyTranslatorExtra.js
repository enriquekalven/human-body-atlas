/**
 * Multi-language (ja, ko, pt, fr, it) anatomical structure name translator
 * and search synonym dictionary for the Human Body 3D Atlas.
 */

export const EXACT_NAMES_EXTRA = {
  // Skin & surface
  'skin': { ja: '皮膚', ko: '피부', pt: 'Pele', fr: 'Peau', it: 'Pelle (Cute)' },
  'hair of head': { ja: '頭髪', ko: '두발 (머리카락)', pt: 'Cabelo', fr: 'Cheveux', it: 'Capelli' },
  'eyebrow': { ja: '眉毛', ko: '눈썹', pt: 'Sobrancelha', fr: 'Sourcil', it: 'Sopracciglio' },
  'lip': { ja: '口唇', ko: '입술', pt: 'Lábio', fr: 'Lèvre', it: 'Labbro' },
  'external ear': { ja: '外耳（耳介）', ko: '바깥귀 (귓바퀴)', pt: 'Orelha externa (Pavilhão auricular)', fr: 'Oreille externe (Pavillon)', it: 'Orecchio esterno (Padiglione auricolare)' },
  'eyeball': { ja: '眼球', ko: '안구 (눈)', pt: 'Globo ocular (Olho)', fr: 'Globe oculaire (Œil)', it: 'Bulbo oculare (Occhio)' },
  'lens': { ja: '水晶体', ko: '수정체', pt: 'Cristalino', fr: 'Cristallin', it: 'Cristallino' },
  'cornea': { ja: '角膜', ko: '각막', pt: 'Córnea', fr: 'Cornée', it: 'Cornea' },
  'tongue': { ja: '舌', ko: '혀', pt: 'Língua', fr: 'Langue', it: 'Lingua' },

  // Major organ groups & structures
  'brain': { ja: '脳（大脳・小脳・脳幹）', ko: '뇌 (대뇌·소뇌·뇌줄기)', pt: 'Cérebro (Encéfalo)', fr: 'Cerveau (Encéphale)', it: 'Cervello (Encefalo)' },
  'cerebrum': { ja: '大脳', ko: '대뇌', pt: 'Cérebro', fr: 'Cerveau', it: 'Cervello (Telencefalo)' },
  'cerebellum': { ja: '小脳', ko: '소뇌', pt: 'Cerebelo', fr: 'Cervelet', it: 'Cervelletto' },
  'brainstem': { ja: '脳幹', ko: '뇌줄기 (뇌간)', pt: 'Tronco encefálico', fr: 'Tronc cérébral', it: 'Tronco encefalico' },
  'midbrain': { ja: '中脳', ko: '중간뇌 (중뇌)', pt: 'Mesencéfalo', fr: 'Mésencéphale', it: 'Mesencefalo' },
  'pons': { ja: '橋', ko: '다리뇌 (교뇌)', pt: 'Ponte', fr: 'Pont (Protubérance)', it: 'Ponte di Varolio' },
  'medulla oblongata': { ja: '延髄', ko: '숨뇌 (연수)', pt: 'Bulbo raquidiano (Medula oblonga)', fr: 'Bulbe rachidien (Moelle allongée)', it: 'Bulbo (Midollo allungato)' },
  'corpus callosum': { ja: '脳梁', ko: '뇌들보 (뇌량)', pt: 'Corpo caloso', fr: 'Corps calleux', it: 'Corpo calloso' },
  'thalamus': { ja: '視床', ko: '시상', pt: 'Tálamo', fr: 'Thalamus', it: 'Talamo' },
  'hypothalamus': { ja: '視床下部', ko: '시상하부', pt: 'Hipotálamo', fr: 'Hypothalamus', it: 'Ipotalamo' },
  'hippocampus': { ja: '海馬', ko: '해마', pt: 'Hipocampo', fr: 'Hippocampe', it: 'Ippocampo' },
  'amygdala': { ja: '扁桃体', ko: '편도체', pt: 'Amígdala cerebral', fr: 'Amygdale cérébrale', it: 'Amigdala' },
  'pituitary gland': { ja: '下垂体', ko: '뇌하수체', pt: 'Glândula hipófise (Pituitária)', fr: 'Glande pituitaire (Hypophyse)', it: 'Ipofisi (Ghiandola pituitaria)' },
  'pineal gland': { ja: '松果体', ko: '솔방울샘 (송과체)', pt: 'Glândula pineal', fr: 'Glande pinéale (Épiphyse)', it: 'Epifisi (Ghiandola pineale)' },
  'falx cerebri': { ja: '大脳鎌', ko: '대뇌낫', pt: 'Foice do cérebro', fr: 'Faux du cerveau', it: 'Falce cerebrale' },
  'tentorium cerebelli': { ja: '小脳テント', ko: '소뇌천막', pt: 'Tentório do cerebelo', fr: 'Tente du cervelet', it: 'Tentorio del cervelletto' },
  'dura mater': { ja: '硬膜', ko: '경질막 (경막)', pt: 'Dura-máter', fr: 'Dure-mère', it: 'Dura madre' },
  'spinal cord': { ja: '脊髄', ko: '척수', pt: 'Medula espinhal', fr: 'Moelle épinière', it: 'Midollo spinale' },

  // Cardiorespiratory & Thoracic
  'heart': { ja: '心臓', ko: '심장', pt: 'Coração', fr: 'Cœur', it: 'Cuore' },
  'right lung': { ja: '右肺', ko: '오른허파 (우폐)', pt: 'Pulmão direito', fr: 'Poumon droit', it: 'Polmone destro' },
  'left lung': { ja: '左肺', ko: '왼허파 (좌폐)', pt: 'Pulmão esquerdo', fr: 'Poumon gauche', it: 'Polmone sinistro' },
  'lung': { ja: '肺', ko: '허파 (폐)', pt: 'Pulmão', fr: 'Poumon', it: 'Polmone' },
  'trachea': { ja: '気管', ko: '기관', pt: 'Traqueia', fr: 'Trachée', it: 'Trachea' },
  'larynx': { ja: '喉頭', ko: '후두', pt: 'Laringe', fr: 'Larynx', it: 'Laringe' },
  'pharynx': { ja: '咽頭', ko: '인두', pt: 'Faringe', fr: 'Pharynx', it: 'Faringe' },
  'thyroid gland': { ja: '甲状腺', ko: '갑상샘 (갑상선)', pt: 'Glândula tireoide', fr: 'Glande thyroïde', it: 'Ghiandola tiroide' },
  'thymus': { ja: '胸腺', ko: '가슴샘 (흉선)', pt: 'Timo', fr: 'Thymus', it: 'Timo' },
  'diaphragm': { ja: '横隔膜', ko: '가로막 (횡격막)', pt: 'Diafragma', fr: 'Diaphragme', it: 'Diaframma' },
  'esophagus': { ja: '食道', ko: '식도', pt: 'Esôfago', fr: 'Œsophage', it: 'Esofago' },

  // Digestive & Abdominal
  'stomach': { ja: '胃', ko: '위', pt: 'Estômago', fr: 'Estomac', it: 'Stomaco' },
  'liver': { ja: '肝臓', ko: '간', pt: 'Fígado', fr: 'Foie', it: 'Fegato' },
  'gallbladder': { ja: '胆嚢', ko: '쓸개 (담낭)', pt: 'Vesícula biliar', fr: 'Vésicule biliaire', it: 'Cistifellea (Colecisti)' },
  'common bile duct': { ja: '総胆管', ko: '온쓸개관 (총담관)', pt: 'Ducto colédoco', fr: 'Canal cholédoque', it: 'Dotto coledoco' },
  'cystic duct': { ja: '胆嚢管', ko: '쓸개주머니관 (담낭관)', pt: 'Ducto cístico', fr: 'Canal cystique', it: 'Dotto cistico' },
  'common hepatic duct': { ja: '総肝管', ko: '온간관 (총간관)', pt: 'Ducto hepático comum', fr: 'Canal hépatique commun', it: 'Dotto epatico comune' },
  'pancreas': { ja: '膵臓', ko: '이자 (췌장)', pt: 'Pâncreas', fr: 'Pancréas', it: 'Pancreas' },
  'spleen': { ja: '脾臓', ko: '지라 (비장)', pt: 'Baço', fr: 'Rate', it: 'Milza' },
  'small intestine': { ja: '小腸', ko: '작은창자 (소장)', pt: 'Intestino delgado', fr: 'Intestin grêle', it: 'Intestino tenue' },
  'duodenum': { ja: '十二指腸', ko: '샘창자 (십이지장)', pt: 'Duodeno', fr: 'Duodénum', it: 'Duodeno' },
  'jejunum': { ja: '空腸', ko: '빈창자 (공장)', pt: 'Jejuno', fr: 'Jéjunum', it: 'Digiuno' },
  'ileum': { ja: '回腸', ko: '돌창자 (회장)', pt: 'Íleo', fr: 'Iléon', it: 'Ileo' },
  'large intestine': { ja: '大腸', ko: '큰창자 (대장)', pt: 'Intestino grosso', fr: 'Gros intestin', it: 'Intestino crasso' },
  'colon': { ja: '結腸', ko: '잘룩창자 (결장)', pt: 'Cólon', fr: 'Côlon', it: 'Colon' },
  'cecum': { ja: '盲腸', ko: '막창자 (맹장)', pt: 'Ceco', fr: 'Cæcum', it: 'Cieco' },
  'appendix': { ja: '虫垂', ko: '막창자꼬리 (충수)', pt: 'Apêndice vermiforme', fr: 'Appendice vermiforme', it: 'Appendice vermiforme' },
  'ascending colon': { ja: '上行結腸', ko: '오름잘룩창자 (상행결장)', pt: 'Cólon ascendente', fr: 'Côlon ascendant', it: 'Colon ascendente' },
  'transverse colon': { ja: '横行結腸', ko: '가로잘룩창자 (횡행결장)', pt: 'Cólon transverso', fr: 'Côlon transverse', it: 'Colon trasverso' },
  'descending colon': { ja: '下行結腸', ko: '내림잘룩창자 (하행결장)', pt: 'Cólon descendente', fr: 'Côlon descendant', it: 'Colon discendente' },
  'sigmoid colon': { ja: 'S状結腸', ko: '구불잘룩창자 (S상결장)', pt: 'Cólon sigmoide', fr: 'Côlon sigmoïde', it: 'Colon sigmoideo' },
  'rectum': { ja: '直腸', ko: '곧은창자 (직장)', pt: 'Reto', fr: 'Rectum', it: 'Retto' },
  'mesentery': { ja: '腸間膜', ko: '창자간막 (장간막)', pt: 'Mesentério', fr: 'Mésentère', it: 'Mesentere' },

  // Urinary & Reproductive
  'kidney': { ja: '腎臓', ko: '콩팥 (신장)', pt: 'Rim', fr: 'Rein', it: 'Rene' },
  'right kidney': { ja: '右腎臓', ko: '오른콩팥 (우신장)', pt: 'Rim direito', fr: 'Rein droit', it: 'Rene destro' },
  'left kidney': { ja: '左腎臓', ko: '왼콩팥 (좌신장)', pt: 'Rim esquerdo', fr: 'Rein gauche', it: 'Rene sinistro' },
  'ureter': { ja: '尿管', ko: '요관', pt: 'Ureter', fr: 'Uretère', it: 'Uretere' },
  'right ureter': { ja: '右尿管', ko: '오른요관', pt: 'Ureter direito', fr: 'Uretère droit', it: 'Uretere destro' },
  'left ureter': { ja: '左尿管', ko: '왼요관', pt: 'Ureter esquerdo', fr: 'Uretère gauche', it: 'Uretere sinistro' },
  'urinary bladder': { ja: '膀胱', ko: '방광', pt: 'Bexiga urinária', fr: 'Vessie urinaire', it: 'Vescica urinaria' },
  'urethra': { ja: '尿道', ko: '요도', pt: 'Uretra', fr: 'Urètre', it: 'Uretra' },
  'uterus': { ja: '子宮', ko: '자궁', pt: 'Útero', fr: 'Utérus', it: 'Utero' },
  'uterine cervix': { ja: '子宮頸部', ko: '자궁목 (자궁경부)', pt: 'Colo do útero (Cérvix)', fr: 'Col de l’utérus (Cervix)', it: 'Cervice uterina (Collo dell’utero)' },
  'vagina': { ja: '腟', ko: '질', pt: 'Vagina', fr: 'Vagin', it: 'Vagina' },
  'ovary': { ja: '卵巣', ko: '난소', pt: 'Ovário', fr: 'Ovaire', it: 'Ovaio' },
  'left ovary': { ja: '左卵巣', ko: '왼난소', pt: 'Ovário esquerdo', fr: 'Ovaire gauche', it: 'Ovaio sinistro' },
  'right ovary': { ja: '右卵巣', ko: '오른난소', pt: 'Ovário direito', fr: 'Ovaire droit', it: 'Ovaio destro' },
  'fallopian tube': { ja: '卵管', ko: '자궁관 (나팔관)', pt: 'Tuba uterina (Trompa de Falópio)', fr: 'Trompe de Fallope (Trompe utérine)', it: 'Tuba di Falloppio (Salpinge)' },
  'left fallopian tube': { ja: '左卵管', ko: '왼자궁관 (좌측 나팔관)', pt: 'Tuba uterina esquerda', fr: 'Trompe de Fallope gauche', it: 'Tuba di Falloppio sinistra' },
  'right fallopian tube': { ja: '右卵管', ko: '오른자궁관 (우측 나팔관)', pt: 'Tuba uterina direita', fr: 'Trompe de Fallope droite', it: 'Tuba di Falloppio destra' },
  'female genital system': { ja: '女性生殖器系', ko: '여성 생식기계', pt: 'Sistema reprodutor feminino', fr: 'Système reproducteur féminin', it: 'Apparato riproduttivo femminile' },
  'mammary gland': { ja: '乳腺', ko: '젖샘 (유선)', pt: 'Glândula mamária', fr: 'Glande mammaire', it: 'Ghiandola mammaria' },
  'left mammary gland': { ja: '左乳腺', ko: '왼젖샘 (좌측 유선)', pt: 'Glândula mamária esquerda', fr: 'Glande mammaire gauche', it: 'Ghiandola mammaria sinistra' },
  'right mammary gland': { ja: '右乳腺', ko: '오른젖샘 (우측 유선)', pt: 'Glândula mamária direita', fr: 'Glande mammaire droite', it: 'Ghiandola mammaria destra' },
  'breast': { ja: '乳房', ko: '유방', pt: 'Mama', fr: 'Sein', it: 'Mammella (Seno)' },
  'prostate': { ja: '前立腺', ko: '전립샘 (전립선)', pt: 'Próstata', fr: 'Prostate', it: 'Prostata' },
  'testis': { ja: '精巣（睾丸）', ko: '고환 (정소)', pt: 'Testículo', fr: 'Testicule', it: 'Testicolo' },
  'left testis': { ja: '左精巣', ko: '왼고환', pt: 'Testículo esquerdo', fr: 'Testicule gauche', it: 'Testicolo sinistro' },
  'right testis': { ja: '右精巣', ko: '오른고환', pt: 'Testículo direito', fr: 'Testicule droit', it: 'Testicolo destro' },
  'epididymis': { ja: '精巣上体（副睾丸）', ko: '부고환', pt: 'Epidídimo', fr: 'Épididyme', it: 'Epididimo' },
  'deferent duct': { ja: '精管', ko: '정관', pt: 'Ducto deferente', fr: 'Canal déférent', it: 'Dotto deferente' },
  'seminal vesicle': { ja: '精嚢', ko: '정낭', pt: 'Vesícula seminal', fr: 'Vésicule séminale', it: 'Vescichetta seminale' },
  'penis': { ja: '陰茎', ko: '음경', pt: 'Pênis', fr: 'Pénis', it: 'Pene' },

  // Major vessels
  'aorta': { ja: '大動脈', ko: '대동맥', pt: 'Aorta', fr: 'Aorte', it: 'Aorta' },
  'ascending aorta': { ja: '上行大動脈', ko: '오름대동맥 (상행대동맥)', pt: 'Aorta ascendente', fr: 'Aorte ascendante', it: 'Aorta ascendente' },
  'aortic arch': { ja: '大動脈弓', ko: '대동맥활 (대동맥궁)', pt: 'Arco aórtico (Crossa da aorta)', fr: 'Arc aortique (Crosse de l’aorte)', it: 'Arco aortico' },
  'descending aorta': { ja: '下行大動脈', ko: '내림대동맥 (하행대동맥)', pt: 'Aorta descendente', fr: 'Aorte descendante', it: 'Aorta discendente' },
  'thoracic aorta': { ja: '胸大動脈', ko: '가슴대동맥 (흉대동맥)', pt: 'Aorta torácica', fr: 'Aorte thoracique', it: 'Aorta toracica' },
  'abdominal aorta': { ja: '腹大動脈', ko: '배대동맥 (복대동맥)', pt: 'Aorta abdominal', fr: 'Aorte abdominale', it: 'Aorta addominale' },
  'pulmonary trunk': { ja: '肺動脈幹', ko: '허파동맥줄기 (폐동맥간)', pt: 'Tronco pulmonar', fr: 'Tronc pulmonaire', it: 'Tronco polmonare' },
  'superior vena cava': { ja: '上大静脈', ko: '위대정맥 (상대정맥)', pt: 'Veia cava superior', fr: 'Veine cave supérieure', it: 'Vena cava superiore' },
  'inferior vena cava': { ja: '下大静脈', ko: '아래대정맥 (하대정맥)', pt: 'Veia cava inferior', fr: 'Veine cave inférieure', it: 'Vena cava inferiore' },
  'hepatic portal vein': { ja: '肝門脈', ko: '간문맥', pt: 'Veia porta hepática', fr: 'Veine porte hépatique', it: 'Vena porta epatica' },
  'portal vein': { ja: '門脈', ko: '문맥', pt: 'Veia porta', fr: 'Veine porte', it: 'Vena porta' },
  'brachiocephalic trunk': { ja: '腕頭動脈', ko: '팔머리동맥 (완두동맥)', pt: 'Tronco braquiocefálico', fr: 'Tronc brachiocéphalique', it: 'Tronco brachiocefalico (Arteria anonima)' },
  'celiac trunk': { ja: '腹腔動脈', ko: '복강동맥', pt: 'Tronco celíaco', fr: 'Tronc cœliaque', it: 'Tronco celiaco (Tripode di Haller)' },
  'superior mesenteric artery': { ja: '上腸間膜動脈', ko: '위창자간막동맥 (상장간막동맥)', pt: 'Artéria mesentérica superior', fr: 'Artère mésentérique supérieure', it: 'Arteria mesenterica superiore' },
  'inferior mesenteric artery': { ja: '下腸間膜動脈', ko: '아래창자간막동맥 (하장간막동맥)', pt: 'Artéria mesentérica inferior', fr: 'Artère mésentérique inférieure', it: 'Arteria mesenterica inferiore' },
  'basilar artery': { ja: '脳底動脈', ko: '뇌바닥동맥 (기저동맥)', pt: 'Artéria basilar', fr: 'Artère basilaire', it: 'Arteria basilare' },

  // Major skeletal groups & bones
  'skull': { ja: '頭蓋骨', ko: '머리뼈 (두개골)', pt: 'Crânio', fr: 'Crâne', it: 'Cranio' },
  'cranium': { ja: '頭蓋', ko: '뇌머리뼈', pt: 'Crânio', fr: 'Crâne', it: 'Cranio' },
  'mandible': { ja: '下顎骨', ko: '아래턱뼈 (하악골)', pt: 'Mandíbula', fr: 'Mandibule (Mâchoire inférieure)', it: 'Mandibola' },
  'hyoid bone': { ja: '舌骨', ko: '목뿔뼈 (설골)', pt: 'Osso hioide', fr: 'Os hyoïde', it: 'Osso ioide' },
  'vertebral column': { ja: '脊柱（背骨）', ko: '척주 (척추)', pt: 'Coluna vertebral', fr: 'Colonne vertébrale (Rachis)', it: 'Colonna vertebrale (Rachide)' },
  'cervical vertebral column': { ja: '頸椎', ko: '목뼈 (경추)', pt: 'Coluna cervical', fr: 'Rachis cervical', it: 'Rachide cervicale' },
  'thoracic vertebral column': { ja: '胸椎', ko: '등뼈 (흉추)', pt: 'Coluna torácica', fr: 'Rachis thoracique', it: 'Rachide toracico' },
  'lumbar vertebral column': { ja: '腰椎', ko: '허리뼈 (요추)', pt: 'Coluna lombar', fr: 'Rachis lombaire', it: 'Rachide lombare' },
  'sacrum': { ja: '仙骨', ko: '엉치뼈 (천골)', pt: 'Sacro', fr: 'Sacrum', it: 'Osso sacro' },
  'coccyx': { ja: '尾骨', ko: '꼬리뼈 (미골)', pt: 'Cóccix', fr: 'Coccyx', it: 'Coccige' },
  'atlas': { ja: '環椎（第1頸椎）', ko: '고리뼈 (제1경추, 환추)', pt: 'Atlas (Vértebra C1)', fr: 'Atlas (Vertèbre C1)', it: 'Atlante (Vertebra C1)' },
  'axis': { ja: '軸椎（第2頸椎）', ko: '중쇠뼈 (제2경추, 축추)', pt: 'Áxis (Vértebra C2)', fr: 'Axis (Vertèbre C2)', it: 'Epistrofeo (Vertebra C2)' },
  'sternum': { ja: '胸骨', ko: '복장뼈 (흉골)', pt: 'Esterno', fr: 'Sternum', it: 'Sterno' },
  'rib': { ja: '肋骨', ko: '갈비뼈 (늑골)', pt: 'Costela', fr: 'Côte', it: 'Costa (Costola)' },
  'pelvis': { ja: '骨盤', ko: '골반', pt: 'Pelve (Bacia)', fr: 'Bassin (Pelvis)', it: 'Pelvi (Bacino)' },
  'hip bone': { ja: '寛骨', ko: '볼기뼈 (관골)', pt: 'Osso coxal (Quadril)', fr: 'Os coxal (Os iliaque)', it: 'Osso dell’anca (Osso coxale)' }
};

// [en, ja, ko, pt, fr, it]
export const TERM_STEMS_EXTRA = [
  ['sternocleidomastoid', '胸鎖乳突筋', '목빗근 (흉쇄유돌근)', 'esternocleidomastóideo', 'sterno-cléido-mastoïdien', 'sternocleidomastoideo'],
  ['pectoralis major', '大胸筋', '큰가슴근 (대흉근)', 'peitoral maior', 'grand pectoral', 'grande pettorale'],
  ['pectoralis minor', '小胸筋', '작은가슴근 (소흉근)', 'peitoral menor', 'petit pectoral', 'piccolo pettorale'],
  ['latissimus dorsi', '広背筋', '넓은등근 (광배근)', 'latíssimo do dorso (grande dorsal)', 'grand dorsal', 'gran dorsale'],
  ['biceps brachii', '上腕二頭筋', '위팔두갈래근 (상완이두근)', 'bíceps braquial', 'biceps brachial', 'bicipite brachiale'],
  ['triceps brachii', '上腕三頭筋', '위팔세갈래근 (상완삼두근)', 'tríceps braquial', 'triceps brachial', 'tricipite brachiale'],
  ['biceps femoris', '大腿二頭筋', '넙다리두갈래근 (대퇴이두근)', 'bíceps femoral', 'biceps fémoral', 'bicipite femorale'],
  ['rectus abdominis', '腹直筋', '배곧은근 (복직근)', 'reto do abdome', 'droit de l’abdomen', 'retto dell’addome'],
  ['transversus abdominis', '腹横筋', '배가로근 (복횡근)', 'transverso do abdome', 'transverse de l’abdomen', 'trasverso dell’addome'],
  ['external oblique', '外腹斜筋', '바깥배빗근 (외복사근)', 'oblíquo externo do abdome', 'oblique externe de l’abdomen', 'obliquo esterno dell’addome'],
  ['internal oblique', '内腹斜筋', '속배빗근 (내복사근)', 'oblíquo interno do abdome', 'oblique interne de l’abdomen', 'obliquo interno dell’addome'],
  ['rectus femoris', '大腿直筋', '넙다리곧은근 (대퇴직근)', 'reto femoral', 'droit fémoral', 'retto femorale'],
  ['vastus lateralis', '外側広筋', '가쪽넓은근 (외측광근)', 'vasto lateral', 'vaste latéral', 'vasto laterale'],
  ['vastus medialis', '内側広筋', '안쪽넓은근 (내측광근)', 'vasto medial', 'vaste médial', 'vasto mediale'],
  ['vastus intermedius', '中間広筋', '중간넓은근 (중간광근)', 'vasto intermédio', 'vaste intermédiaire', 'vasto intermedio'],
  ['quadriceps femoris', '大腿四頭筋', '넙다리네갈래근 (대퇴사두근)', 'quadríceps femoral', 'quadriceps fémoral', 'quadricipite femorale'],
  ['gluteus maximus', '大臀筋', '큰볼기근 (대둔근)', 'glúteo máximo', 'grand glutéal (grand fessier)', 'grande gluteo'],
  ['gluteus medius', '中臀筋', '중간볼기근 (중둔근)', 'glúteo médio', 'moyen glutéal (moyen fessier)', 'medio gluteo'],
  ['gluteus minimus', '小臀筋', '작은볼기근 (소둔근)', 'glúteo mínimo', 'petit glutéal (petit fessier)', 'piccolo gluteo'],
  ['gastrocnemius', '腓腹筋', '장딴지근 (비복근)', 'gastrocnêmio (panturrilha)', 'gastrocnémien (jumeaux)', 'gastrocnemio (gemelli)'],
  ['soleus', 'ヒラメ筋', '가자미근', 'sóleo', 'soléaire', 'soleo'],
  ['calcaneal tendon', 'アキレス腱（踵골腱）', '아킬레스힘줄 (발꿈치힘줄)', 'tendão calcâneo (de Aquiles)', 'tendon calcanéen (d’Achille)', 'tendine calcaneare (d’Achille)'],
  ['tibialis anterior', '前脛骨筋', '앞정강근 (전경골근)', 'tibial anterior', 'tibial antérieur', 'tibiale anteriore'],
  ['sartorius', '縫工筋', '넙다리빗근 (봉공근)', 'sartório', 'sartorius (couturier)', 'sartorio'],
  ['deltoid', '三角筋', '어깨세모근 (삼각근)', 'deltoide', 'deltoïde', 'deltoide'],
  ['trapezius', '僧帽筋', '등세모근 (승모근)', 'trapézio', 'trapèze', 'trapezio'],
  ['brachioradialis', '腕橈骨筋', '위팔노근 (완요골근)', 'braquiorradial', 'brachio-radial', 'brachioradiale'],
  ['brachialis', '上腕筋', '위팔근 (상완근)', 'braquial', 'brachial', 'brachiale'],
  ['masseter', '咬筋', '깨물근 (교근)', 'masseter', 'masséter', 'massetere'],
  ['temporalis', '側頭筋', '관자근 (측두근)', 'temporal', 'temporal', 'temporale'],
  ['cervical vertebra', '頸椎', '목뼈 (경추)', 'vértebra cervical', 'vertèbre cervicale', 'vertebra cervicale'],
  ['thoracic vertebra', '胸椎', '등뼈 (흉추)', 'vértebra torácica', 'vertèbre thoracique', 'vertebra toracica'],
  ['lumbar vertebra', '腰椎', '허리뼈 (요추)', 'vértebra lombar', 'vertèbre lombaire', 'vertebra lombare'],
  ['intervertebral disc', '椎間板', '척추사이원반 (추간판)', 'disco intervertebral', 'disque intervertébral', 'disco intervertebrale'],
  ['intervertebral disk', '椎間板', '척추사이원반 (추간판)', 'disco intervertebral', 'disque intervertébral', 'disco intervertebrale'],
  ['costal cartilage', '肋軟骨', '갈비연골 (늑연골)', 'cartilagem costal', 'cartilage costal', 'cartilagine costale'],
  ['clavicle', '鎖骨', '빗장뼈 (쇄골)', 'clavícula', 'clavicule', 'clavicola'],
  ['scapula', '肩甲骨', '어깨뼈 (견갑골)', 'escápula (omoplata)', 'scapula (omoplate)', 'scapola'],
  ['humerus', '上腕骨', '위팔뼈 (상완골)', 'úmero', 'humérus', 'omero'],
  ['radius', '橈骨', '노뼈 (요골)', 'rádio', 'radius', 'radio'],
  ['ulna', '尺骨', '자뼈 (척골)', 'ulna (cúbito)', 'ulna (cubitus)', 'ulna'],
  ['femur', '大腿骨', '넙다리뼈 (대퇴골)', 'fêmur', 'fémur', 'femore'],
  ['patella', '膝蓋骨', '무릎뼈 (슬개골)', 'patela (rótula)', 'patella (rotule)', 'rotula (patella)'],
  ['tibia', '脛骨', '정강뼈 (경골)', 'tíbia', 'tibia', 'tibia'],
  ['fibula', '腓骨', '종아리뼈 (비골)', 'fíbula (perônio)', 'fibula (péroné)', 'fibula (perone)'],
  ['calcaneus', '踵骨', '발꿈치뼈 (종골)', 'calcâneo', 'calcanéus', 'calcagno'],
  ['talus', '距骨', '목말뼈 (거골)', 'tálus (astrágalo)', 'talus (astragale)', 'astragalo (talo)'],
  ['frontal bone', '前頭骨', '이마뼈 (전두골)', 'osso frontal', 'os frontal', 'osso frontale'],
  ['parietal bone', '頭頂骨', '마루뼈 (두정골)', 'osso parietal', 'os pariétal', 'osso parietale'],
  ['temporal bone', '側頭骨', '관자뼈 (측두골)', 'osso temporal', 'os temporal', 'osso temporale'],
  ['occipital bone', '後頭骨', '뒤통수뼈 (후두골)', 'osso occipital', 'os occipital', 'osso occipitale'],
  ['zygomatic bone', '頬骨', '광대뼈 (관골)', 'osso zigomático', 'os zygomatique', 'osso zigomatico'],
  ['maxilla', '上顎骨', '위턱뼈 (상악골)', 'maxila (maxilar superior)', 'maxillaire', 'mascella'],
  ['great saphenous vein', '大伏在静脈', '큰두렁정맥 (대복재정맥)', 'veia safena magna', 'grande veine saphène', 'vena grande safena'],
  ['small saphenous vein', '小伏在静脈', '작은두렁정맥 (소복재정맥)', 'veia safena parva', 'petite veine saphène', 'vena piccola safena'],
  ['common carotid artery', '総頸動脈', '온목동맥 (총경동맥)', 'artéria carótida comum', 'artère carotide commune', 'arteria carotide comune'],
  ['internal carotid artery', '内頸動脈', '속목동맥 (내경동맥)', 'artéria carótida interna', 'artère carotide interne', 'arteria carotide interna'],
  ['external carotid artery', '外頸動脈', '바깥목동맥 (외경동맥)', 'artéria carótida externa', 'artère carotide externe', 'arteria carotide esterna'],
  ['internal jugular vein', '内頸静脈', '속목정맥 (내경정맥)', 'veia jugular interna', 'veine jugulaire interne', 'vena giugulare interna'],
  ['external jugular vein', '外頸静脈', '바깥목정맥 (외경정맥)', 'veia jugular externa', 'veine jugulaire externe', 'vena giugulare esterna'],
  ['subclavian artery', '鎖骨下動脈', '빗장밑동맥 (쇄골하동맥)', 'artéria subclávia', 'artère subclavière', 'arteria succlavia'],
  ['subclavian vein', '鎖骨下静脈', '빗장밑정맥 (쇄골하정맥)', 'veia subclávia', 'veine subclavière', 'vena succlavia'],
  ['axillary artery', '腋窩動脈', '겨드랑동맥 (액와동맥)', 'artéria axilar', 'artère axillaire', 'arteria ascellare'],
  ['brachial artery', '上腕動脈', '위팔동맥 (상완동맥)', 'artéria braquial', 'artère brachiale', 'arteria brachiale'],
  ['radial artery', '橈骨動脈', '노동맥 (요골동맥)', 'artéria radial', 'artère radiale', 'arteria radiale'],
  ['ulnar artery', '尺骨動脈', '자동맥 (척골동맥)', 'artéria ulnar', 'artère ulnaire', 'arteria ulnare'],
  ['femoral artery', '大腿動脈', '넙다리동맥 (대퇴동맥)', 'artéria femoral', 'artère fémorale', 'arteria femorale'],
  ['femoral vein', '大腿静脈', '넙다리정맥 (대퇴정맥)', 'veia femoral', 'veine fémorale', 'vena femorale'],
  ['coronary artery', '冠動脈', '심장동맥 (관상동맥)', 'artéria coronária', 'artère coronaire', 'arteria coronaria'],
  ['pulmonary artery', '肺動脈', '허파동맥 (폐동맥)', 'artéria pulmonar', 'artère pulmonaire', 'arteria polmonare'],
  ['pulmonary vein', '肺静脈', '허파정맥 (폐정맥)', 'veia pulmonar', 'veine pulmonaire', 'vena polmonare'],
  ['renal artery', '腎動脈', '콩팥동맥 (신동맥)', 'artéria renal', 'artère rénale', 'arteria renale'],
  ['renal vein', '腎静脈', '콩팥정맥 (신정맥)', 'veia renal', 'veine rénale', 'vena renale'],
  ['sciatic nerve', '坐骨神経', '궁둥신경 (좌골신경)', 'nervo ciático (isquiático)', 'nerf sciatique', 'nervo sciatico (ischiatico)'],
  ['femoral nerve', '大腿神経', '넙다리신경 (대퇴신경)', 'nervo femoral', 'nerf fémoral', 'nervo femorale'],
  ['vagus nerve', '迷走神経', '미주신경', 'nervo vago', 'nerf vague (pneumogastrique)', 'nervo vago'],
  ['phrenic nerve', '横隔神経', '가로막신경 (횡격막신경)', 'nervo frênico', 'nerf phrénique', 'nervo frenico'],
  ['median nerve', '正中神経', '정중신경', 'nervo mediano', 'nerf médian', 'nervo mediano'],
  ['ulnar nerve', '尺骨神経', '자신경 (척골신경)', 'nervo ulnar', 'nerf ulnaire (cubital)', 'nervo ulnare'],
  ['radial nerve', '橈骨神経', '노신경 (요골신경)', 'nervo radial', 'nerf radial', 'nervo radiale'],
  ['optic nerve', '視神経', '시각신경 (시신경)', 'nervo óptico', 'nerf optique', 'nervo ottico'],
  ['brachial plexus', '腕神経叢', '팔신경얼기 (완신경총)', 'plexo braquial', 'plexus brachial', 'plesso brachiale']
];

const WORD_MAP_JA = {
  left: '左', right: '右', superior: '上', inferior: '下', middle: '中',
  anterior: '前', posterior: '後', medial: '内側', lateral: '外側',
  internal: '内', external: '外', superficial: '浅', deep: '深',
  common: '総', ascending: '上行', descending: '下行', transverse: '横',
  artery: '動脈', vein: '静脈', nerve: '神経', muscle: '筋', tendon: '腱',
  ligament: '靭帯', bone: '骨', cartilage: '軟骨', gland: '腺',
  ganglion: '神経節', plexus: '神経叢', trunk: '幹', branch: '枝',
  lobe: '葉', head: '頭', body: '体', neck: '頸', arch: '弓',
  sinus: '洞', duct: '管', rib: '肋骨', vertebra: '椎骨', tooth: '歯',
  lung: '肺', bronchus: '気管支', ventricle: '心室', atrium: '心房'
};

const WORD_MAP_KO = {
  left: '왼', right: '오른', superior: '위', inferior: '아래', middle: '중간',
  anterior: '앞', posterior: '뒤', medial: '안쪽', lateral: '가쪽',
  internal: '속', external: '바깥', superficial: '얕은', deep: '깊은',
  common: '온', ascending: '오름', descending: '내림', transverse: '가로',
  artery: '동맥', vein: '정맥', nerve: '신경', muscle: '근', tendon: '힘줄',
  ligament: '인대', bone: '뼈', cartilage: '연골', gland: '샘',
  ganglion: '신경절', plexus: '신경얼기', trunk: '줄기', branch: '가지',
  lobe: '엽', head: '갈래', body: '몸통', neck: '목', arch: '활',
  sinus: '정맥동', duct: '관', rib: '갈비뼈', vertebra: '척추뼈', tooth: '치아',
  lung: '허파', bronchus: '기관지', ventricle: '심실', atrium: '심방'
};

const WORD_MAP_PT = {
  left: 'esquerdo(a)', right: 'direito(a)', superior: 'superior', inferior: 'inferior',
  middle: 'médio(a)', anterior: 'anterior', posterior: 'posterior', medial: 'medial',
  lateral: 'lateral', internal: 'interno(a)', external: 'externo(a)',
  superficial: 'superficial', deep: 'profundo(a)', common: 'comum',
  ascending: 'ascendente', descending: 'descendente', transverse: 'transverso(a)',
  artery: 'artéria', vein: 'veia', nerve: 'nervo', muscle: 'músculo',
  tendon: 'tendão', ligament: 'ligamento', bone: 'osso', cartilage: 'cartilagem',
  gland: 'glândula', ganglion: 'gânglio', plexus: 'plexo', trunk: 'tronco',
  branch: 'ramo', lobe: 'lobo', head: 'cabeça', part: 'parte', body: 'corpo',
  neck: 'colo', arch: 'arco', sinus: 'seio', duct: 'ducto', rib: 'costela',
  vertebra: 'vértebra', tooth: 'dente', lung: 'pulmão', bronchus: 'brônquio',
  ventricle: 'ventrículo', atrium: 'átrio'
};

const WORD_MAP_FR = {
  left: 'gauche', right: 'droit(e)', superior: 'supérieur(e)', inferior: 'inférieur(e)',
  middle: 'moyen(ne)', anterior: 'antérieur(e)', posterior: 'postérieur(e)', medial: 'médial(e)',
  lateral: 'latéral(e)', internal: 'interne', external: 'externe',
  superficial: 'superficiel(le)', deep: 'profond(e)', common: 'commun(e)',
  ascending: 'ascendant(e)', descending: 'descendant(e)', transverse: 'transverse',
  artery: 'artère', vein: 'veine', nerve: 'nerf', muscle: 'muscle',
  tendon: 'tendon', ligament: 'ligament', bone: 'os', cartilage: 'cartilage',
  gland: 'glande', ganglion: 'ganglion', plexus: 'plexus', trunk: 'tronc',
  branch: 'branche', lobe: 'lobe', head: 'chef', part: 'partie', body: 'corps',
  neck: 'col', arch: 'arc', sinus: 'sinus', duct: 'canal', rib: 'côte',
  vertebra: 'vertèbre', tooth: 'dent', lung: 'poumon', bronchus: 'bronche',
  ventricle: 'ventricule', atrium: 'atrium (oreillette)'
};

const WORD_MAP_IT = {
  left: 'sinistro(a)', right: 'destro(a)', superior: 'superiore', inferior: 'inferiore',
  middle: 'medio(a)', anterior: 'anteriore', posterior: 'posteriore', medial: 'mediale',
  lateral: 'laterale', internal: 'interno(a)', external: 'esterno(a)',
  superficial: 'superficiale', deep: 'profondo(a)', common: 'comune',
  ascending: 'ascendente', descending: 'discendente', transverse: 'trasverso(a)',
  artery: 'arteria', vein: 'vena', nerve: 'nervo', muscle: 'muscolo',
  tendon: 'tendine', ligament: 'legamento', bone: 'osso', cartilage: 'cartilagine',
  gland: 'ghiandola', ganglion: 'ganglio', plexus: 'plesso', trunk: 'tronco',
  branch: 'ramo', lobe: 'lobo', head: 'capo', part: 'parte', body: 'corpo',
  neck: 'collo', arch: 'arco', sinus: 'seno', duct: 'dotto', rib: 'costa',
  vertebra: 'vertebra', tooth: 'dente', lung: 'polmone', bronchus: 'bronco',
  ventricle: 'ventricolo', atrium: 'atrio'
};

const WORD_MAP_DE = {
  left: 'linker/linke/linkes', right: 'rechter/rechte/rechtes', superior: 'oberer/obere', inferior: 'unterer/untere',
  middle: 'mittlerer/mittlere', anterior: 'vorderer/vordere', posterior: 'hinterer/hintere', medial: 'medialer/mediale',
  lateral: 'lateraler/laterale', internal: 'innerer/innere', external: 'äußerer/äußere',
  superficial: 'oberflächlicher/oberflächliche', deep: 'tiefer/tiefe', common: 'gemeinsamer/gemeinsame',
  ascending: 'aufsteigender/aufsteigende', descending: 'absteigender/absteigende', transverse: 'querverlaufender/querverlaufende',
  artery: 'Arterie (Schlagader)', vein: 'Vene', nerve: 'Nerv', muscle: 'Muskel',
  tendon: 'Sehne', ligament: 'Band (Ligament)', bone: 'Knochen', cartilage: 'Knorpel',
  gland: 'Drüse', ganglion: 'Ganglion (Nervenknoten)', plexus: 'Geflecht (Plexus)', trunk: 'Stamm (Truncus)',
  branch: 'Ast (Ramus)', lobe: 'Lappen', head: 'Kopf (Caput)', part: 'Teil (Pars)', body: 'Körper (Corpus)',
  neck: 'Hals (Collum)', arch: 'Bogen (Arcus)', sinus: 'Sinus', duct: 'Gang (Ductus)', rib: 'Rippe',
  vertebra: 'Wirbel', tooth: 'Zahn', lung: 'Lunge', bronchus: 'Bronchus',
  ventricle: 'Herzkammer (Ventrikel)', atrium: 'Vorhof (Atrium)'
};

const WORD_MAP_AR = {
  left: 'أيسر / يسرى', right: 'أيمن / يمنى', superior: 'علوي', inferior: 'سفلي',
  middle: 'أوسط', anterior: 'أمامي', posterior: 'خلفي', medial: 'إنسي',
  lateral: 'وحشي (جانبي)', internal: 'داخلي (باطن)', external: 'خارجي (ظاهر)',
  superficial: 'سطحي', deep: 'عميق', common: 'أصلي (مشترك)',
  ascending: 'صاعد', descending: 'نازل', transverse: 'مستعرض',
  artery: 'شريان', vein: 'وريد', nerve: 'عصب', muscle: 'عضلة',
  tendon: 'وتر', ligament: 'رباط', bone: 'عظم', cartilage: 'غضروف',
  gland: 'غدة', ganglion: 'عقدة عصبية', plexus: 'ضفيرة', trunk: 'جذع',
  branch: 'فرع', lobe: 'فص', head: 'رأس', part: 'جزء', body: 'جسم',
  neck: 'عنق', arch: 'قوس', sinus: 'جيب', duct: 'قناة', rib: 'ضلع',
  vertebra: 'فقرة', tooth: 'سن', lung: 'رئة', bronchus: 'قصبة هوائية',
  ventricle: 'بطين', atrium: 'أذين'
};

export const EXACT_NAMES_DE_AR = {
  'skin': { de: 'Haut (Cutis)', ar: 'الجلد' },
  'hair of head': { de: 'Kopfhaar', ar: 'شعر الرأس' },
  'eyebrow': { de: 'Augenbraue', ar: 'الحاجب' },
  'lip': { de: 'Lippe', ar: 'الشفة' },
  'external ear': { de: 'Äußeres Ohr (Ohrmuschel)', ar: 'الأذن الخارجية (صيوان الأذن)' },
  'eyeball': { de: 'Augapfel (Auge)', ar: 'مقلة العين (العين)' },
  'lens': { de: 'Augenlinse', ar: 'عدسة العين' },
  'cornea': { de: 'Hornhaut (Cornea)', ar: 'القرنية' },
  'tongue': { de: 'Zunge', ar: 'اللسان' },
  'brain': { de: 'Gehirn (Encephalon)', ar: 'الدماغ (المخ والمخيخ وجذع الدماغ)' },
  'cerebrum': { de: 'Großhirn (Cerebrum)', ar: 'المخ' },
  'cerebellum': { de: 'Kleinhirn (Cerebellum)', ar: 'المخيخ' },
  'brainstem': { de: 'Hirnstamm', ar: 'جذع الدماغ' },
  'midbrain': { de: 'Mittelhirn (Mesencephalon)', ar: 'الدماغ المتوسط' },
  'pons': { de: 'Brücke (Pons)', ar: 'الجسر' },
  'medulla oblongata': { de: 'Verlängertes Mark (Medulla oblongata)', ar: 'النخاع المستطيل (البصلة السيسائية)' },
  'corpus callosum': { de: 'Balken (Corpus callosum)', ar: 'الجسم الثفني' },
  'thalamus': { de: 'Thalamus', ar: 'المهاد' },
  'hypothalamus': { de: 'Hypothalamus', ar: 'تحت المهاد (الوطاء)' },
  'hippocampus': { de: 'Hippocampus', ar: 'الحُصين' },
  'amygdala': { de: 'Mandelkern (Amygdala)', ar: 'اللوزة الدماغية' },
  'pituitary gland': { de: 'Hirnanhangsdrüse (Hypophyse)', ar: 'الغدة النخامية' },
  'pineal gland': { de: 'Zirbeldrüse (Epiphyse)', ar: 'الغدة الصنوبرية' },
  'falx cerebri': { de: 'Großhirnsichel (Falx cerebri)', ar: 'مِنجل المخ' },
  'tentorium cerebelli': { de: 'Kleinhirnzelt (Tentorium cerebelli)', ar: 'خيمة المخيخ' },
  'dura mater': { de: 'Harte Hirnhaut (Dura mater)', ar: 'الأم الجافية' },
  'spinal cord': { de: 'Rückenmark (Medulla spinalis)', ar: 'الحبل الشوكي (النخاع الشوكي)' },
  'heart': { de: 'Herz (Cor)', ar: 'القلب' },
  'right lung': { de: 'Rechter Lungenflügel', ar: 'الرئة اليمنى' },
  'left lung': { de: 'Linker Lungenflügel', ar: 'الرئة اليسرى' },
  'lung': { de: 'Lunge (Pulmo)', ar: 'الرئة' },
  'trachea': { de: 'Luftröhre (Trachea)', ar: 'الرغامى (القصبة الهوائية)' },
  'larynx': { de: 'Kehlkopf (Larynx)', ar: 'الحنجرة' },
  'pharynx': { de: 'Rachen (Pharynx)', ar: 'البلعوم' },
  'thyroid gland': { de: 'Schilddrüse (Glandula thyroidea)', ar: 'الغدة الدرقية' },
  'thymus': { de: 'Thymus (Bries)', ar: 'الغدة الزعترية (التيموس)' },
  'diaphragm': { de: 'Zwerchfell (Diaphragma)', ar: 'الحجاب الحاجز' },
  'esophagus': { de: 'Speiseröhre (Ösophagus)', ar: 'المريء' },
  'stomach': { de: 'Magen (Gaster)', ar: 'المعدة' },
  'liver': { de: 'Leber (Hepar)', ar: 'الكبد' },
  'gallbladder': { de: 'Gallenblase (Vesica biliaris)', ar: 'المرارة (الحويصلة الصفراوية)' },
  'common bile duct': { de: 'Hauptgallengang (Ductus choledochus)', ar: 'القناة الصفراوية المشتركة' },
  'cystic duct': { de: 'Gallenblasengang (Ductus cysticus)', ar: 'القناة المرارية' },
  'common hepatic duct': { de: 'Gemeinsamer Lebergang (Ductus hepaticus communis)', ar: 'القناة الكبدية المشتركة' },
  'pancreas': { de: 'Bauchspeicheldrüse (Pankreas)', ar: 'البنكرياس' },
  'spleen': { de: 'Milz (Splen / Lien)', ar: 'الطحال' },
  'small intestine': { de: 'Dünndarm (Intestinum tenue)', ar: 'الأمعاء الدقيقة' },
  'duodenum': { de: 'Zwölffingerdarm (Duodenum)', ar: 'الاثنا عشر (العفج)' },
  'jejunum': { de: 'Leerdarm (Jejunum)', ar: 'الصائم' },
  'ileum': { de: 'Krummdarm (Ileum)', ar: 'اللفائفي' },
  'large intestine': { de: 'Dickdarm (Intestinum crassum)', ar: 'الأمعاء الغليظة' },
  'colon': { de: 'Grimmdarm (Kolon)', ar: 'القولون' },
  'cecum': { de: 'Blinddarm (Caecum)', ar: 'الأعور' },
  'appendix': { de: 'Wurmfortsatz (Appendix vermiformis)', ar: 'الزائدة الدودية' },
  'ascending colon': { de: 'Aufsteigender Grimmdarm (Colon ascendens)', ar: 'القولون الصاعد' },
  'transverse colon': { de: 'Querverlaufender Grimmdarm (Colon transversum)', ar: 'القولون المستعرض' },
  'descending colon': { de: 'Absteigender Grimmdarm (Colon descendens)', ar: 'القولون النازل' },
  'sigmoid colon': { de: 'S-Darm (Colon sigmoideum)', ar: 'القولون السيني' },
  'rectum': { de: 'Mastdarm (Rektum)', ar: 'المستقيم' },
  'mesentery': { de: 'Gekröse (Mesenterium)', ar: 'المساريقا' },
  'kidney': { de: 'Niere (Ren)', ar: 'الكلية' },
  'right kidney': { de: 'Rechte Niere', ar: 'الكلية اليمنى' },
  'left kidney': { de: 'Linke Niere', ar: 'الكلية اليسرى' },
  'ureter': { de: 'Harnleiter (Ureter)', ar: 'الحالب' },
  'right ureter': { de: 'Rechter Harnleiter', ar: 'الحالب الأيمن' },
  'left ureter': { de: 'Linker Harnleiter', ar: 'الحالب الأيسر' },
  'urinary bladder': { de: 'Harnblase (Vesica urinaria)', ar: 'المثانة البولية' },
  'urethra': { de: 'Harnröhre (Urethra)', ar: 'الإحليل (مجري البول)' },
  'uterus': { de: 'Gebärmutter (Uterus)', ar: 'الرحم' },
  'uterine cervix': { de: 'Gebärmutterhals (Zervix)', ar: 'عنق الرحم' },
  'vagina': { de: 'Scheide (Vagina)', ar: 'المهبل' },
  'ovary': { de: 'Eierstock (Ovar)', ar: 'المبيض' },
  'left ovary': { de: 'Linker Eierstock', ar: 'المبيض الأيسر' },
  'right ovary': { de: 'Rechter Eierstock', ar: 'المبيض الأيمن' },
  'fallopian tube': { de: 'Eileiter (Tuba uterina)', ar: 'قناة فالوب (البوق الرحمي)' },
  'left fallopian tube': { de: 'Linker Eileiter', ar: 'قناة فالوب اليسرى' },
  'right fallopian tube': { de: 'Rechter Eileiter', ar: 'قناة فالوب اليمنى' },
  'female genital system': { de: 'Weibliches Fortpflanzungssystem', ar: 'الجهاز التناسلي الأنثوي' },
  'mammary gland': { de: 'Brustdrüse (Glandula mammaria)', ar: 'الغدة الثديية' },
  'left mammary gland': { de: 'Linke Brustdrüse', ar: 'الغدة الثديية اليسرى' },
  'right mammary gland': { de: 'Rechte Brustdrüse', ar: 'الغدة الثديية اليمنى' },
  'breast': { de: 'Brust (Mamma)', ar: 'الثدي' },
  'prostate': { de: 'Vorsteherdrüse (Prostata)', ar: 'البروستاتا (الموثة)' },
  'testis': { de: 'Hoden (Testis)', ar: 'الخصية' },
  'left testis': { de: 'Linker Hoden', ar: 'الخصية اليسرى' },
  'right testis': { de: 'Rechter Hoden', ar: 'الخصية اليمنى' },
  'epididymis': { de: 'Nebenhoden (Epididymis)', ar: 'البربخ' },
  'deferent duct': { de: 'Samenleiter (Ductus deferens)', ar: 'الأسهر (القناة الناقلة للمني)' },
  'seminal vesicle': { de: 'Bläschendrüse (Samenbläschen)', ar: 'الحويصلة المنوية' },
  'penis': { de: 'Penis', ar: 'القضيب' },
  'aorta': { de: 'Hauptschlagader (Aorta)', ar: 'الشريان الأبهر (الأورطي)' },
  'ascending aorta': { de: 'Aufsteigende Aorta (Aorta ascendens)', ar: 'الأبهر الصاعد' },
  'aortic arch': { de: 'Aortenbogen (Arcus aortae)', ar: 'قوس الأبهر' },
  'descending aorta': { de: 'Absteigende Aorta (Aorta descendens)', ar: 'الأبهر النازل' },
  'thoracic aorta': { de: 'Brustaorta (Aorta thoracica)', ar: 'الأبهر الصدري' },
  'abdominal aorta': { de: 'Bauchaorta (Aorta abdominalis)', ar: 'الأبهر البطني' },
  'pulmonary trunk': { de: 'Lungenarterienstamm (Truncus pulmonalis)', ar: 'الجذع الرئوي' },
  'superior vena cava': { de: 'Obere Hohlvene (Vena cava superior)', ar: 'الوريد الأجوف العلوي' },
  'inferior vena cava': { de: 'Untere Hohlvene (Vena cava inferior)', ar: 'الوريد الأجوف السفلي' },
  'hepatic portal vein': { de: 'Pfortader (Vena portae hepatis)', ar: 'وريد الباب الكبدي' },
  'portal vein': { de: 'Pfortader (Vena portae)', ar: 'الوريد البابي' },
  'brachiocephalic trunk': { de: 'Arm-Kopf-Stamm (Truncus brachiocephalicus)', ar: 'الجذع العضدي الرأسي' },
  'celiac trunk': { de: 'Bauchhöhlenstamm (Truncus coeliacus)', ar: 'الجذع البطني (الزلاقي)' },
  'superior mesenteric artery': { de: 'Obere Eingeweidearterie (Arteria mesenterica superior)', ar: 'الشريان المساريقي العلوي' },
  'inferior mesenteric artery': { de: 'Untere Eingeweidearterie (Arteria mesenterica inferior)', ar: 'الشريان المساريقي السفلي' },
  'basilar artery': { de: 'Basilararterie (Arteria basilaris)', ar: 'الشريان القاعدي' },
  'skull': { de: 'Schädel (Cranium)', ar: 'الجمجمة' },
  'cranium': { de: 'Hirnschädel (Cranium)', ar: 'قحف الجمجمة' },
  'mandible': { de: 'Unterkiefer (Mandibula)', ar: 'الفك السفلي' },
  'hyoid bone': { de: 'Zungenbein (Os hyoideum)', ar: 'العظم اللامي' },
  'vertebral column': { de: 'Wirbelsäule (Columna vertebralis)', ar: 'العمود الفقري' },
  'cervical vertebral column': { de: 'Halswirbelsäule (HWS)', ar: 'العمود الفقري العنقي' },
  'thoracic vertebral column': { de: 'Brustwirbelsäule (BWS)', ar: 'العمود الفقري الصدري' },
  'lumbar vertebral column': { de: 'Lendenwirbelsäule (LWS)', ar: 'العمود الفقري القطني' },
  'sacrum': { de: 'Kreuzbein (Os sacrum)', ar: 'العجز' },
  'coccyx': { de: 'Steißbein (Os coccygis)', ar: 'العصعص' },
  'atlas': { de: 'Atlas (1. Halswirbel C1)', ar: 'الفهقة (الفقرة العنقية الأولى C1)' },
  'axis': { de: 'Axis (2. Halswirbel C2)', ar: 'المحور (الفقرة العنقية الثانية C2)' },
  'sternum': { de: 'Brustbein (Sternum)', ar: 'عظم القص' },
  'rib': { de: 'Rippe (Costa)', ar: 'الضلع' },
  'pelvis': { de: 'Becken (Pelvis)', ar: 'الحوض' },
  'hip bone': { de: 'Hüftbein (Os coxae)', ar: 'عظم الورك' }
};

export const STEM_DE_AR = [
  ['sternocleidomastoid', 'Kopfwender (M. sternocleidomastoideus)', 'العضلة القصية الترقوية الخشائية'],
  ['pectoralis major', 'Großer Brustmuskel (M. pectoralis major)', 'العضلة الصدرية الكبرى'],
  ['pectoralis minor', 'Kleiner Brustmuskel (M. pectoralis minor)', 'العضلة الصدرية الصغرى'],
  ['latissimus dorsi', 'Breiter Rückenmuskel (M. latissimus dorsi)', 'العضلة العريضة الظهرية'],
  ['biceps brachii', 'Zweiköpfiger Armmuskel (M. biceps brachii)', 'العضلة ذات الرأسين العضدية (البايسبس)'],
  ['triceps brachii', 'Dreiköpfiger Armmuskel (M. triceps brachii)', 'العضلة ثلاثية الرؤوس العضدية (الترايسبس)'],
  ['biceps femoris', 'Zweiköpfiger Oberschenkelmuskel (M. biceps femoris)', 'العضلة ذات الرأسين الفخذية'],
  ['rectus abdominis', 'Gerader Bauchmuskel (M. rectus abdominis)', 'العضلة المستقيمة البطنية'],
  ['transversus abdominis', 'Querer Bauchmuskel (M. transversus abdominis)', 'العضلة المستعرضة البطنية'],
  ['external oblique', 'Äußerer schräger Bauchmuskel (M. obliquus externus abdominis)', 'العضلة المائلة الخارجية للبطن'],
  ['internal oblique', 'Innerer schräger Bauchmuskel (M. obliquus internus abdominis)', 'العضلة المائلة الداخلية للبطن'],
  ['rectus femoris', 'Gerader Oberschenkelmuskel (M. rectus femoris)', 'العضلة المستقيمة الفخذية'],
  ['vastus lateralis', 'Äußerer Schenkelmuskel (M. vastus lateralis)', 'العضلة المتسعة الوحشية'],
  ['vastus medialis', 'Innerer Schenkelmuskel (M. vastus medialis)', 'العضلة المتسعة الإنسية'],
  ['vastus intermedius', 'Mittlerer Schenkelmuskel (M. vastus intermedius)', 'العضلة المتسعة المتوسطة'],
  ['quadriceps femoris', 'Vierköpfiger Oberschenkelmuskel (Quadrizeps)', 'عضلة الفخذ رباعية الرؤوس'],
  ['gluteus maximus', 'Großer Gesäßmuskel (M. gluteus maximus)', 'العضلة الألوية الكبرى'],
  ['gluteus medius', 'Mittlerer Gesäßmuskel (M. gluteus medius)', 'العضلة الألوية الوسطى'],
  ['gluteus minimus', 'Kleiner Gesäßmuskel (M. gluteus minimus)', 'العضلة الألوية الصغرى'],
  ['gastrocnemius', 'Zwillingswadenmuskel (M. gastrocnemius)', 'عضلة الساق التوأمية (بطة الساق)'],
  ['soleus', 'Schollenmuskel (M. soleus)', 'العضلة النعلية'],
  ['calcaneal tendon', 'Achillessehne (Tendo calcaneus)', 'وتر أخيل (الوتر العقبي)'],
  ['tibialis anterior', 'Vorderer Schienbeinmuskel (M. tibialis anterior)', 'العضلة الظنبوبية الأمامية'],
  ['sartorius', 'Schneidermuskel (M. sartorius)', 'العضلة الخياطية'],
  ['deltoid', 'Deltamuskel (M. deltoideus)', 'العضلة الدالية'],
  ['trapezius', 'Kapuzenmuskel (M. trapezius)', 'العضلة شبه المنحرفة'],
  ['brachioradialis', 'Oberarmspeichenmuskel (M. brachioradialis)', 'العضلة العضدية الكعبرية'],
  ['brachialis', 'Armbeuger (M. brachialis)', 'العضلة العضدية'],
  ['masseter', 'Kaumuskel (M. masseter)', 'العضلة الماضغة'],
  ['temporalis', 'Schläfenmuskel (M. temporalis)', 'العضلة الصدغية'],
  ['cervical vertebra', 'Halswirbel (Vertebra cervicalis)', 'فقرة عنقية'],
  ['thoracic vertebra', 'Brustwirbel (Vertebra thoracica)', 'فقرة صدرية'],
  ['lumbar vertebra', 'Lendenwirbel (Vertebra lumbalis)', 'فقرة قطنية'],
  ['intervertebral disc', 'Bandscheibe (Discus intervertebralis)', 'قرص بين الفقرات'],
  ['intervertebral disk', 'Bandscheibe (Discus intervertebralis)', 'قرص بين الفقرات'],
  ['costal cartilage', 'Rippenknorpel (Cartilago costalis)', 'غضروف ضلعي'],
  ['clavicle', 'Schlüsselbein (Clavicula)', 'الترقوة'],
  ['scapula', 'Schulterblatt (Scapula)', 'لوح الكتف'],
  ['humerus', 'Oberarmknochen (Humerus)', 'عظم العضد'],
  ['radius', 'Speiche (Radius)', 'عظم الكعبرة'],
  ['ulna', 'Elle (Ulna)', 'عظم الزند'],
  ['femur', 'Oberschenkelknochen (Femur)', 'عظم الفخذ'],
  ['patella', 'Kniescheibe (Patella)', 'الرضفة (صابونة الركبة)'],
  ['tibia', 'Schienbein (Tibia)', 'الظنبوب (قصبة الساق)'],
  ['fibula', 'Wadenbein (Fibula)', 'الشظية'],
  ['calcaneus', 'Fersenbein (Calcaneus)', 'عظم العقب (الكعب)'],
  ['talus', 'Sprungbein (Talus)', 'عظم القعب'],
  ['frontal bone', 'Stirnbein (Os frontale)', 'العظم الجبهي'],
  ['parietal bone', 'Scheitelbein (Os parietale)', 'العظم الجداري'],
  ['temporal bone', 'Schläfenbein (Os temporale)', 'العظم الصدغي'],
  ['occipital bone', 'Hinterhauptbein (Os occipitale)', 'العظم القذالي'],
  ['zygomatic bone', 'Jochbein (Os zygomaticum)', 'العظم الوجني'],
  ['maxilla', 'Oberkiefer (Maxilla)', 'الفك العلوي'],
  ['great saphenous vein', 'Große Rosenader (Vena saphena magna)', 'الوريد الصافن الكبير'],
  ['small saphenous vein', 'Kleine Rosenader (Vena saphena parva)', 'الوريد الصافن الصغير'],
  ['common carotid artery', 'Gemeinsame Halsschlagader (A. carotis communis)', 'الشريان السباتي الأصلي'],
  ['internal carotid artery', 'Innere Halsschlagader (A. carotis interna)', 'الشريان السباتي الداخلي'],
  ['external carotid artery', 'Äußere Halsschlagader (A. carotis externa)', 'الشريان السباتي الخارجي'],
  ['internal jugular vein', 'Innere Drosselvene (V. jugularis interna)', 'الوريد الوداجي الداخلي'],
  ['external jugular vein', 'Äußere Drosselvene (V. jugularis externa)', 'الوريد الوداجي الخارجي'],
  ['subclavian artery', 'Schlüsselbeinarterie (A. subclavia)', 'الشريان تحت الترقوة'],
  ['subclavian vein', 'Schlüsselbeinvene (V. subclavia)', 'الوريد تحت الترقوة'],
  ['axillary artery', 'Achselarterie (A. axillaris)', 'الشريان الإبطي'],
  ['brachial artery', 'Oberarmarterie (A. brachialis)', 'الشريان العضدي'],
  ['radial artery', 'Speichenarterie (A. radialis)', 'الشريان الكعبري'],
  ['ulnar artery', 'Ellenarterie (A. ulnaris)', 'الشريان الزندي'],
  ['femoral artery', 'Oberschenkelarterie (A. femoralis)', 'الشريان الفخذي'],
  ['femoral vein', 'Oberschenkelvene (V. femoralis)', 'الوريد الفخذي'],
  ['coronary artery', 'Herzkranzarterie (A. coronaria)', 'الشريان التاجي'],
  ['pulmonary artery', 'Lungenarterie (A. pulmonalis)', 'الشريان الرئوي'],
  ['pulmonary vein', 'Lungenvene (V. pulmonalis)', 'الوريد الرئوي'],
  ['renal artery', 'Nierenarterie (A. renalis)', 'الشريان الكلوي'],
  ['renal vein', 'Nierenvene (V. renalis)', 'الوريد الكلوي'],
  ['sciatic nerve', 'Ischiasnerv (N. ischiadicus)', 'العصب الوركي (عرق النسا)'],
  ['femoral nerve', 'Oberschenkelnerv (N. femoralis)', 'العصب الفخذي'],
  ['vagus nerve', 'Vagusnerv (N. vagus, X. Hirnnerv)', 'العصب المبهم (الحائر)'],
  ['phrenic nerve', 'Zwerchfellnerv (N. phrenicus)', 'العصب الحجابي'],
  ['median nerve', 'Mittelarmnerv (N. medianus)', 'العصب المتوسط'],
  ['ulnar nerve', 'Ellennerv (N. ulnaris)', 'العصب الزندي'],
  ['radial nerve', 'Speichennerv (N. radialis)', 'العصب الكعبري'],
  ['optic nerve', 'Sehnerv (N. opticus)', 'العصب البصري'],
  ['brachial plexus', 'Armgeflecht (Plexus brachialis)', 'الضفيرة العضدية']
];

function capFirst(s) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const LANG_STEM_INDEX = { ja: 1, ko: 2, pt: 3, fr: 4, it: 5 };

function translateDeArFragment(s, lang) {
  if (EXACT_NAMES_DE_AR[s] && EXACT_NAMES_DE_AR[s][lang]) {
    return EXACT_NAMES_DE_AR[s][lang];
  }
  const stemIdx = lang === 'de' ? 1 : 2;
  for (const row of STEM_DE_AR) {
    if (s === row[0]) return row[stemIdx];
  }
  const wordMap = lang === 'de' ? WORD_MAP_DE : WORD_MAP_AR;
  let working = s;
  let replaced = false;
  for (const row of STEM_DE_AR) {
    if (working.includes(row[0])) {
      working = working.replace(row[0], row[stemIdx]);
      replaced = true;
    }
  }
  if (!replaced) {
    const tokens = working.split(/\s+/);
    if (tokens.length >= 2) {
      const last = tokens[tokens.length - 1];
      if (wordMap[last]) {
        const head = wordMap[last];
        const mods = tokens.slice(0, -1).map((t) => wordMap[t] || t).join(' ');
        return lang === 'ar' ? `${head} ${mods}` : `${mods} ${head}`;
      }
    }
  }
  return working;
}

export function translateExtraLang(lower, original, lang) {
  if (lang === 'de' || lang === 'ar') {
    if (EXACT_NAMES_DE_AR[lower] && EXACT_NAMES_DE_AR[lower][lang]) {
      return EXACT_NAMES_DE_AR[lower][lang];
    }
    const leftWord = lang === 'de' ? 'links' : 'الأيسر';
    const rightWord = lang === 'de' ? 'rechts' : 'الأيمن';
    const ofMatch = lower.match(/^(.+?)\s+of\s+(left|right\s+)?(.+)$/);
    if (ofMatch) {
      const [, prefix, sideRaw, rest] = ofMatch;
      const prefixTr = translateDeArFragment(prefix.trim(), lang);
      const restTr = translateDeArFragment(rest.trim(), lang);
      const sideTr = sideRaw ? (sideRaw.trim() === 'left' ? leftWord : rightWord) : '';
      return lang === 'ar'
        ? `${prefixTr} ${restTr}${sideTr ? ' ' + sideTr : ''}`
        : capFirst(`${prefixTr} (${restTr}${sideTr ? ', ' + sideTr : ''})`);
    }
    const sideMatch = lower.match(/^(left|right)\s+(.+)$/);
    if (sideMatch) {
      const [, side, rest] = sideMatch;
      const restTr = translateDeArFragment(rest.trim(), lang);
      const sideTr = side === 'left' ? leftWord : rightWord;
      return lang === 'ar' ? `${restTr} (${sideTr})` : capFirst(`${restTr} (${sideTr})`);
    }
    const frag = translateDeArFragment(lower, lang);
    return frag ? (lang === 'ar' ? frag : capFirst(frag)) : original;
  }

  if (EXACT_NAMES_EXTRA[lower] && EXACT_NAMES_EXTRA[lower][lang]) {
    return EXACT_NAMES_EXTRA[lower][lang];
  }
  const stemIdx = LANG_STEM_INDEX[lang];
  if (!stemIdx) return original;

  if (lang === 'ja' || lang === 'ko') {
    const wordMap = lang === 'ja' ? WORD_MAP_JA : WORD_MAP_KO;
    const leftPrefix = lang === 'ja' ? '左' : '왼';
    const rightPrefix = lang === 'ja' ? '右' : '오른';

    const ofMatch = lower.match(/^(.+?)\s+of\s+(left|right\s+)?(.+)$/);
    if (ofMatch) {
      const [, prefix, sideRaw, rest] = ofMatch;
      const sideStr = sideRaw ? (sideRaw.trim() === 'left' ? leftPrefix : rightPrefix) : '';
      const restTr = translateCjkFragment(rest.trim(), lang, stemIdx, wordMap);
      const prefixTr = translateCjkFragment(prefix.trim(), lang, stemIdx, wordMap);
      return lang === 'ja' ? `${sideStr}${restTr}の${prefixTr}` : `${sideStr} ${restTr} ${prefixTr}`.trim();
    }

    const sideMatch = lower.match(/^(left|right)\s+(.+)$/);
    if (sideMatch) {
      const [, side, rest] = sideMatch;
      const sideStr = side === 'left' ? leftPrefix : rightPrefix;
      const restTr = translateCjkFragment(rest.trim(), lang, stemIdx, wordMap);
      return lang === 'ja' ? `${sideStr}${restTr}` : `${sideStr}${restTr}`;
    }

    return translateCjkFragment(lower, lang, stemIdx, wordMap) || original;
  }

  // Romance languages: pt, fr, it
  const wordMap = lang === 'pt' ? WORD_MAP_PT : lang === 'fr' ? WORD_MAP_FR : WORD_MAP_IT;
  const prep = lang === 'it' ? 'di' : 'de';
  const leftWord = lang === 'pt' ? 'esquerdo(a)' : lang === 'fr' ? 'gauche' : 'sinistro(a)';
  const rightWord = lang === 'pt' ? 'direito(a)' : lang === 'fr' ? 'droit(e)' : 'destro(a)';

  const ofMatch = lower.match(/^(.+?)\s+of\s+(left|right\s+)?(.+)$/);
  if (ofMatch) {
    const [, prefix, sideRaw, rest] = ofMatch;
    const prefixTr = translateRomanceFragment(prefix.trim(), lang, stemIdx, wordMap);
    const restTr = translateRomanceFragment(rest.trim(), lang, stemIdx, wordMap);
    const sideTr = sideRaw ? (sideRaw.trim() === 'left' ? leftWord : rightWord) : '';
    return capFirst(`${prefixTr} ${prep} ${restTr}${sideTr ? ' ' + sideTr : ''}`);
  }

  const sideMatch = lower.match(/^(left|right)\s+(.+)$/);
  if (sideMatch) {
    const [, side, rest] = sideMatch;
    const restTr = translateRomanceFragment(rest.trim(), lang, stemIdx, wordMap);
    const sideTr = side === 'left' ? leftWord : rightWord;
    return capFirst(`${restTr} ${sideTr}`);
  }

  const frag = translateRomanceFragment(lower, lang, stemIdx, wordMap);
  return frag ? capFirst(frag) : original;
}

function translateCjkFragment(s, lang, stemIdx, wordMap) {
  if (EXACT_NAMES_EXTRA[s] && EXACT_NAMES_EXTRA[s][lang]) {
    return EXACT_NAMES_EXTRA[s][lang];
  }
  for (const row of TERM_STEMS_EXTRA) {
    if (s === row[0]) return row[stemIdx];
  }
  let working = s;
  let replaced = false;
  for (const row of TERM_STEMS_EXTRA) {
    if (working.includes(row[0])) {
      working = working.replace(row[0], row[stemIdx]);
      replaced = true;
    }
  }
  const tokens = working.split(/\s+/);
  const mapped = tokens.map((t) => {
    const clean = t.replace(/[^a-z]/g, '');
    if (wordMap[clean]) {
      replaced = true;
      return wordMap[clean];
    }
    return t;
  });
  if (replaced) {
    return lang === 'ja' ? mapped.join('') : mapped.join(' ');
  }
  return working;
}

function translateRomanceFragment(s, lang, stemIdx, wordMap) {
  if (EXACT_NAMES_EXTRA[s] && EXACT_NAMES_EXTRA[s][lang]) {
    return EXACT_NAMES_EXTRA[s][lang].toLowerCase();
  }
  for (const row of TERM_STEMS_EXTRA) {
    if (s === row[0]) return row[stemIdx];
  }
  let working = s;
  for (const row of TERM_STEMS_EXTRA) {
    if (working.includes(row[0])) {
      working = working.replace(row[0], row[stemIdx]);
    }
  }
  if (working === s) {
    const tokens = working.split(/\s+/);
    if (tokens.length >= 2) {
      const last = tokens[tokens.length - 1];
      if (wordMap[last]) {
        const head = wordMap[last];
        const mods = tokens.slice(0, -1).map((t) => wordMap[t] || t).join(' ');
        return `${head} ${mods}`;
      }
    }
  }
  return working;
}

export const EXTRA_MULTILINGUAL_SYNONYMS = {
  // Japanese (ja)
  '心臓': 'heart',
  '脳': 'brain',
  '大脳': 'brain',
  '小脳': 'cerebellum',
  '脳幹': 'brainstem',
  '肺': 'lung',
  '右肺': 'right lung',
  '左肺': 'left lung',
  '肝臓': 'liver',
  '胆嚢': 'gallbladder',
  '胃': 'stomach',
  '腎臓': 'kidney',
  '尿管': 'ureter',
  '膀胱': 'urinary bladder',
  '小腸': 'small intestine',
  '大腸': 'large intestine',
  '結腸': 'colon',
  '十二指腸': 'duodenum',
  '直腸': 'rectum',
  '虫垂': 'appendix',
  '膵臓': 'pancreas',
  '脾臓': 'spleen',
  '子宮': 'uterus',
  '卵巣': 'ovary',
  '卵管': 'fallopian tube',
  '乳腺': 'mammary gland',
  '乳房': 'mammary gland',
  '前立腺': 'prostate',
  '精巣': 'testis',
  '睾丸': 'testis',
  '皮膚': 'skin',
  '眼球': 'eyeball',
  '目': 'eyeball',
  '水晶体': 'lens',
  '外耳': 'external ear',
  '耳': 'external ear',
  '舌': 'tongue',
  '気管': 'trachea',
  '喉頭': 'larynx',
  '食道': 'esophagus',
  '甲状腺': 'thyroid gland',
  '頭蓋骨': 'skull',
  '下顎骨': 'mandible',
  '脊柱': 'vertebral column',
  '背骨': 'vertebral column',
  '頸椎': 'cervical vertebra',
  '胸椎': 'thoracic vertebra',
  '腰椎': 'lumbar vertebra',
  '仙骨': 'sacrum',
  '尾骨': 'coccyx',
  '肋骨': 'rib',
  '胸骨': 'sternum',
  '鎖骨': 'clavicle',
  '肩甲骨': 'scapula',
  '上腕骨': 'humerus',
  '橈骨': 'radius',
  '尺骨': 'ulna',
  '骨盤': 'pelvis',
  '大腿骨': 'femur',
  '膝蓋骨': 'patella',
  '脛骨': 'tibia',
  '腓骨': 'fibula',
  '大胸筋': 'pectoralis major',
  '三角筋': 'deltoid',
  '僧帽筋': 'trapezius',
  '広背筋': 'latissimus dorsi',
  '上腕二頭筋': 'biceps brachii',
  '上腕三頭筋': 'triceps brachii',
  '腹直筋': 'rectus abdominis',
  '横隔膜': 'diaphragm',
  '大臀筋': 'gluteus maximus',
  '大腿四頭筋': 'rectus femoris',
  '大腿直筋': 'rectus femoris',
  '大腿二頭筋': 'biceps femoris',
  '腓腹筋': 'gastrocnemius',
  'ヒラメ筋': 'soleus',
  'アキレス腱': 'calcaneal tendon',
  '大動脈': 'aorta',
  '上大静脈': 'superior vena cava',
  '下大静脈': 'inferior vena cava',
  '頸動脈': 'carotid artery',
  '頸静脈': 'jugular vein',
  '大腿動脈': 'femoral artery',
  '大伏在静脈': 'great saphenous vein',
  '脊髄': 'spinal cord',
  '坐骨神経': 'sciatic nerve',
  '迷走神経': 'vagus nerve',

  // Korean (ko)
  '심장': 'heart',
  '뇌': 'brain',
  '대뇌': 'brain',
  '소뇌': 'cerebellum',
  '뇌줄기': 'brainstem',
  '뇌간': 'brainstem',
  '폐': 'lung',
  '허파': 'lung',
  '간': 'liver',
  '간장': 'liver',
  '쓸개': 'gallbladder',
  '담낭': 'gallbladder',
  '위': 'stomach',
  '위장': 'stomach',
  '콩팥': 'kidney',
  '신장': 'kidney',
  '방광': 'urinary bladder',
  '소장': 'small intestine',
  '작은창자': 'small intestine',
  '대장': 'large intestine',
  '큰창자': 'large intestine',
  '결장': 'colon',
  '십이지장': 'duodenum',
  '직장': 'rectum',
  '충수': 'appendix',
  '맹장': 'cecum',
  '이자': 'pancreas',
  '췌장': 'pancreas',
  '지라': 'spleen',
  '비장': 'spleen',
  '자궁': 'uterus',
  '난소': 'ovary',
  '나팔관': 'fallopian tube',
  '자궁관': 'fallopian tube',
  '유선': 'mammary gland',
  '유방': 'mammary gland',
  '전립선': 'prostate',
  '전립샘': 'prostate',
  '고환': 'testis',
  '정소': 'testis',
  '피부': 'skin',
  '안구': 'eyeball',
  '눈': 'eyeball',
  '수정체': 'lens',
  '귀': 'external ear',
  '혀': 'tongue',
  '기관': 'trachea',
  '식도': 'esophagus',
  '갑상선': 'thyroid gland',
  '갑상샘': 'thyroid gland',
  '두개골': 'skull',
  '머리뼈': 'skull',
  '하악골': 'mandible',
  '아래턱뼈': 'mandible',
  '척추': 'vertebral column',
  '척주': 'vertebral column',
  '경추': 'cervical vertebra',
  '목뼈': 'cervical vertebra',
  '흉추': 'thoracic vertebra',
  '등뼈': 'thoracic vertebra',
  '요추': 'lumbar vertebra',
  '허리뼈': 'lumbar vertebra',
  '천골': 'sacrum',
  '엉치뼈': 'sacrum',
  '미골': 'coccyx',
  '꼬리뼈': 'coccyx',
  '갈비뼈': 'rib',
  '늑골': 'rib',
  '흉골': 'sternum',
  '복장뼈': 'sternum',
  '쇄골': 'clavicle',
  '빗장뼈': 'clavicle',
  '견갑골': 'scapula',
  '어깨뼈': 'scapula',
  '상완골': 'humerus',
  '위팔뼈': 'humerus',
  '요골': 'radius',
  '노뼈': 'radius',
  '척골': 'ulna',
  '자뼈': 'ulna',
  '골반': 'pelvis',
  '대퇴골': 'femur',
  '넙다리뼈': 'femur',
  '슬개골': 'patella',
  '무릎뼈': 'patella',
  '경골': 'tibia',
  '정강뼈': 'tibia',
  '비골': 'fibula',
  '종아리뼈': 'fibula',
  '대흉근': 'pectoralis major',
  '큰가슴근': 'pectoralis major',
  '삼각근': 'deltoid',
  '어깨세모근': 'deltoid',
  '승모근': 'trapezius',
  '광배근': 'latissimus dorsi',
  '이두근': 'biceps brachii',
  '상완이두근': 'biceps brachii',
  '위팔두갈래근': 'biceps brachii',
  '삼두근': 'triceps brachii',
  '상완삼두근': 'triceps brachii',
  '위팔세갈래근': 'triceps brachii',
  '복직근': 'rectus abdominis',
  '배곧은근': 'rectus abdominis',
  '횡격막': 'diaphragm',
  '가로막': 'diaphragm',
  '대둔근': 'gluteus maximus',
  '큰볼기근': 'gluteus maximus',
  '대퇴사두근': 'rectus femoris',
  '대퇴이두근': 'biceps femoris',
  '비복근': 'gastrocnemius',
  '장딴지근': 'gastrocnemius',
  '아킬레스건': 'calcaneal tendon',
  '아킬레스힘줄': 'calcaneal tendon',
  '대동맥': 'aorta',
  '대정맥': 'vena cava',
  '경동맥': 'carotid artery',
  '경정맥': 'jugular vein',
  '대퇴동맥': 'femoral artery',
  '척수': 'spinal cord',
  '좌골신경': 'sciatic nerve',
  '궁둥신경': 'sciatic nerve',
  '미주신경': 'vagus nerve',

  // Portuguese (pt)
  'coração': 'heart',
  'coracao': 'heart',
  'cérebro': 'brain',
  'encéfalo': 'brain',
  'pulmão': 'lung',
  'pulmao': 'lung',
  'pulmões': 'lung',
  'pulmoes': 'lung',
  'fígado': 'liver',
  'figado': 'liver',
  'estômago': 'stomach',
  'rim': 'kidney',
  'rins': 'kidney',
  'bexiga': 'urinary bladder',
  'intestino delgado': 'small intestine',
  'intestino grosso': 'large intestine',
  'baço': 'spleen',
  'baco': 'spleen',
  'útero': 'uterus',
  'ovário': 'ovary',
  'ovario': 'ovary',
  'tuba uterina': 'fallopian tube',
  'glândula mamária': 'mammary gland',
  'próstata': 'prostate',
  'testículo': 'testis',
  'pele': 'skin',
  'olho': 'eyeball',
  'orelha': 'external ear',
  'língua': 'tongue',
  'lingua': 'tongue',
  'traqueia': 'trachea',
  'esôfago': 'esophagus',
  'crânio': 'skull',
  'cranio': 'skull',
  'coluna vertebral': 'vertebral column',
  'costela': 'rib',
  'costelas': 'rib',
  'esterno': 'sternum',
  'úmero': 'humerus',
  'umero': 'humerus',
  'rádio': 'radius',
  'bacia': 'pelvis',
  'pelve': 'pelvis',
  'fêmur': 'femur',
  'patela': 'patella',
  'tíbia': 'tibia',
  'fíbula': 'fibula',
  'peitoral': 'pectoralis major',
  'panturrilha': 'gastrocnemius',
  'tendão de aquiles': 'calcaneal tendon',
  'veia cava': 'vena cava',
  'medula espinhal': 'spinal cord',
  'nervo ciático': 'sciatic nerve',

  // French (fr)
  'cœur': 'heart',
  'coeur': 'heart',
  'cerveau': 'brain',
  'encéphale': 'brain',
  'cervelet': 'cerebellum',
  'poumon': 'lung',
  'poumons': 'lung',
  'foie': 'liver',
  'vésicule biliaire': 'gallbladder',
  'estomac': 'stomach',
  'rein': 'kidney',
  'reins': 'kidney',
  'vessie': 'urinary bladder',
  'intestin grêle': 'small intestine',
  'gros intestin': 'large intestine',
  'côlon': 'colon',
  'pancréas': 'pancreas',
  'rate': 'spleen',
  'utérus': 'uterus',
  'ovaire': 'ovary',
  'trompe de fallope': 'fallopian tube',
  'glande mammaire': 'mammary gland',
  'sein': 'mammary gland',
  'testicule': 'testis',
  'peau': 'skin',
  'œil': 'eyeball',
  'oeil': 'eyeball',
  'oreille': 'external ear',
  'langue': 'tongue',
  'trachée': 'trachea',
  'œsophage': 'esophagus',
  'oesophage': 'esophagus',
  'crâne': 'skull',
  'crane': 'skull',
  'mâchoire': 'mandible',
  'colonne vertébrale': 'vertebral column',
  'rachis': 'vertebral column',
  'côte': 'rib',
  'côtes': 'rib',
  'clavicule': 'clavicle',
  'omoplate': 'scapula',
  'humérus': 'humerus',
  'bassin': 'pelvis',
  'fémur': 'femur',
  'rotule': 'patella',
  'péroné': 'fibula',
  'grand pectoral': 'pectoralis major',
  'deltoïde': 'deltoid',
  'trapèze': 'trapezius',
  'grand dorsal': 'latissimus dorsi',
  'diaphragme': 'diaphragm',
  'grand fessier': 'gluteus maximus',
  'mollet': 'gastrocnemius',
  'tendon d’achille': 'calcaneal tendon',
  "tendon d'achille": 'calcaneal tendon',
  'aorte': 'aorta',
  'veine cave': 'vena cava',
  'carotide': 'carotid artery',
  'jugulaire': 'jugular vein',
  'moelle épinière': 'spinal cord',
  'nerf sciatique': 'sciatic nerve',

  // Italian (it)
  'cuore': 'heart',
  'cervello': 'brain',
  'encefalo': 'brain',
  'cervelletto': 'cerebellum',
  'polmone': 'lung',
  'polmoni': 'lung',
  'fegato': 'liver',
  'cistifellea': 'gallbladder',
  'colecisti': 'gallbladder',
  'stomaco': 'stomach',
  'rene': 'kidney',
  'reni': 'kidney',
  'vescica': 'urinary bladder',
  'intestino tenue': 'small intestine',
  'intestino crasso': 'large intestine',
  'milza': 'spleen',
  'ovaio': 'ovary',
  'ovaie': 'ovary',
  'tuba di falloppio': 'fallopian tube',
  'ghiandola mammaria': 'mammary gland',
  'mammella': 'mammary gland',
  'testicolo': 'testis',
  'pelle': 'skin',
  'cute': 'skin',
  'occhio': 'eyeball',
  'orecchio': 'external ear',
  'trachea': 'trachea',
  'esofago': 'esophagus',
  'mandibola': 'mandible',
  'colonna vertebrale': 'vertebral column',
  'rachide': 'vertebral column',
  'costola': 'rib',
  'costole': 'rib',
  'sterno': 'sternum',
  'clavicola': 'clavicle',
  'scapola': 'scapula',
  'omero': 'humerus',
  'bacino': 'pelvis',
  'femore': 'femur',
  'rotula': 'patella',
  'perone': 'fibula',
  'grande pettorale': 'pectoralis major',
  'bicipite': 'biceps brachii',
  'tricipite': 'triceps brachii',
  'diaframma': 'diaphragm',
  'grande gluteo': 'gluteus maximus',
  'quadricipite': 'rectus femoris',
  'polpaccio': 'gastrocnemius',
  'tendine d’achille': 'calcaneal tendon',
  "tendine d'achille": 'calcaneal tendon',
  'vena cava': 'vena cava',
  'midollo spinale': 'spinal cord',
  'nervo sciatico': 'sciatic nerve',

  // German (de)
  'herz': 'heart',
  'gehirn': 'brain',
  'hirn': 'brain',
  'großhirn': 'cerebrum',
  'kleinhirn': 'cerebellum',
  'hirnstamm': 'brainstem',
  'lunge': 'lung',
  'lungen': 'lung',
  'leber': 'liver',
  'gallenblase': 'gallbladder',
  'magen': 'stomach',
  'niere': 'kidney',
  'nieren': 'kidney',
  'harnblase': 'urinary bladder',
  'blase': 'urinary bladder',
  'dünndarm': 'small intestine',
  'dickdarm': 'large intestine',
  'blinddarm': 'cecum',
  'wurmfortsatz': 'appendix',
  'bauchspeicheldrüse': 'pancreas',
  'milz': 'spleen',
  'gebärmutter': 'uterus',
  'eierstock': 'ovary',
  'eileiter': 'fallopian tube',
  'brustdrüse': 'mammary gland',
  'vorsteherdrüse': 'prostate',
  'hoden': 'testis',
  'haut': 'skin',
  'auge': 'eyeball',
  'augapfel': 'eyeball',
  'ohr': 'external ear',
  'zunge': 'tongue',
  'luftröhre': 'trachea',
  'kehlkopf': 'larynx',
  'speiseröhre': 'esophagus',
  'schilddrüse': 'thyroid gland',
  'schädel': 'skull',
  'unterkiefer': 'mandible',
  'wirbelsäule': 'vertebral column',
  'kreuzbein': 'sacrum',
  'steißbein': 'coccyx',
  'rippe': 'rib',
  'rippen': 'rib',
  'brustbein': 'sternum',
  'schlüsselbein': 'clavicle',
  'schulterblatt': 'scapula',
  'oberarmknochen': 'humerus',
  'speiche': 'radius',
  'elle': 'ulna',
  'becken': 'pelvis',
  'oberschenkelknochen': 'femur',
  'kniescheibe': 'patella',
  'schienbein': 'tibia',
  'wadenbein': 'fibula',
  'brustmuskel': 'pectoralis major',
  'bizeps': 'biceps brachii',
  'trizeps': 'triceps brachii',
  'zwerchfell': 'diaphragm',
  'gesäßmuskel': 'gluteus maximus',
  'quadrizeps': 'rectus femoris',
  'wadenmuskel': 'gastrocnemius',
  'achillessehne': 'calcaneal tendon',
  'hauptschlagader': 'aorta',
  'hohlvene': 'vena cava',
  'halsschlagader': 'carotid artery',
  'rückenmark': 'spinal cord',
  'ischiasnerv': 'sciatic nerve',

  // Arabic (ar)
  'قلب': 'heart',
  'القلب': 'heart',
  'دماغ': 'brain',
  'الدماغ': 'brain',
  'مخ': 'brain',
  'المخ': 'brain',
  'مخيخ': 'cerebellum',
  'المخيخ': 'cerebellum',
  'رئة': 'lung',
  'الرئة': 'lung',
  'الرئتان': 'lung',
  'كبد': 'liver',
  'الكبد': 'liver',
  'مرارة': 'gallbladder',
  'المرارة': 'gallbladder',
  'معدة': 'stomach',
  'المعدة': 'stomach',
  'كلية': 'kidney',
  'الكلية': 'kidney',
  'الكلى': 'kidney',
  'مثانة': 'urinary bladder',
  'المثانة': 'urinary bladder',
  'الأمعاء الدقيقة': 'small intestine',
  'الأمعاء الغليظة': 'large intestine',
  'قولون': 'colon',
  'القولون': 'colon',
  'بنكرياس': 'pancreas',
  'البنكرياس': 'pancreas',
  'طحال': 'spleen',
  'الطحال': 'spleen',
  'رحم': 'uterus',
  'الرحم': 'uterus',
  'مبيض': 'ovary',
  'المبيض': 'ovary',
  'قناة فالوب': 'fallopian tube',
  'ثدي': 'mammary gland',
  'الثدي': 'mammary gland',
  'بروستاتا': 'prostate',
  'البروستاتا': 'prostate',
  'خصية': 'testis',
  'الخصية': 'testis',
  'جلد': 'skin',
  'الجلد': 'skin',
  'عين': 'eyeball',
  'العين': 'eyeball',
  'أذن': 'external ear',
  'الأذن': 'external ear',
  'لسان': 'tongue',
  'اللسان': 'tongue',
  'القصبة الهوائية': 'trachea',
  'حنجرة': 'larynx',
  'الحنجرة': 'larynx',
  'مريء': 'esophagus',
  'المريء': 'esophagus',
  'الغدة الدرقية': 'thyroid gland',
  'جمجمة': 'skull',
  'الجمجمة': 'skull',
  'الفك السفلي': 'mandible',
  'العمود الفقري': 'vertebral column',
  'ضلع': 'rib',
  'الأضلاع': 'rib',
  'الترقوة': 'clavicle',
  'لوح الكتف': 'scapula',
  'عظم العضد': 'humerus',
  'الحوض': 'pelvis',
  'عظم الفخذ': 'femur',
  'الرضفة': 'patella',
  'الحجاب الحاجز': 'diaphragm',
  'وتر أخيل': 'calcaneal tendon',
  'الأبهر': 'aorta',
  'الشريان الأبهر': 'aorta',
  'الأورطي': 'aorta',
  'الحبل الشوكي': 'spinal cord',
  'النخاع الشوكي': 'spinal cord',
  'العصب الوركي': 'sciatic nerve'
};
