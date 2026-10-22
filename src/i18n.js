/**
 * Internationalization (i18n) hub for the Human Body 3D Atlas.
 * Supports English ('en'), Spanish ('es'), and Simplified Chinese ('zh').
 */

import { ANATOMY_PARTS, ANATOMY_QUIZ_QUESTIONS } from './anatomyData.js';
import { TISSUE_INFO } from './content.js';
import { PARTS_ES, TISSUE_INFO_ES, QUIZ_QUESTIONS_ES } from './i18nPartsEs.js';
import { PARTS_ZH, TISSUE_INFO_ZH, QUIZ_QUESTIONS_ZH } from './i18nPartsZh.js';
import { translateAnatomyName, MULTILINGUAL_SYNONYMS } from './i18nAnatomyTranslator.js';

export { translateAnatomyName, MULTILINGUAL_SYNONYMS };

export const SUPPORTED_LANGS = ['en', 'es', 'zh'];

export function normalizeLang(raw) {
  if (!raw) return 'en';
  const s = String(raw).toLowerCase().trim();
  if (s.startsWith('es')) return 'es';
  if (s.startsWith('zh') || s.startsWith('cmn')) return 'zh';
  return 'en';
}

export const UI_STRINGS = {
  en: {
    pageTitle: 'Human Body 3D Atlas — Realistic Interactive Anatomy',
    skipLink: 'Skip to body part details',
    canvasAria:
      'Interactive 3D human body. Drag to rotate, scroll or pinch to zoom toward the pointer, right-drag to pan, click a structure to see its name. Arrow keys rotate, plus and minus zoom.',
    loadingTitle: 'Building the human body…',
    loadingSubDefault: 'Loading real anatomical models',
    loadingLayer: (layerName) => `Loading ${layerName}…`,
    loadingProgress: (pct, loadedMb, totalMb) => `${pct}% · ${loadedMb} of ${totalMb} MB`,
    brandTitle: 'Human Body 3D Atlas',
    brandSubtitle: 'Female & Male · 2,225 named structures',
    searchLabel: 'Search any body part',
    searchPlaceholder: 'Search any body part — heart, femur, uterus, aorta, biceps…',
    searchResultsAria: 'Matching body parts',
    searchStillLoading: 'Still loading the body — one moment…',
    searchNoMatch: 'No match. Try “heart”, “femur”, “uterus”, “aorta” or “biceps”.',
    structuresCount: (n) => `${n} structure${n > 1 ? 's' : ''}`,
    sexGroupAria: 'Body anatomy',
    female: 'Female',
    male: 'Male',
    audienceGroupAria: 'Explanation level',
    kids: 'Kids',
    pro: 'Clinical',
    langGroupAria: 'Language',
    quizBtn: 'Quiz',
    viewBarAria: 'Body system views',
    viewPresets: {
      skin: 'Skin',
      muscles: 'Muscles',
      skeleton: 'Skeleton',
      circulation: 'Veins & blood flow',
      organs: 'Organs',
      nervous: 'Brain & nerves',
      xray: 'X-ray (all systems)'
    },
    layerNames: {
      skin: 'Skin',
      muscles: 'Muscles',
      skeleton: 'Skeleton',
      vessels: 'Veins & arteries',
      organs: 'Organs',
      nerves: 'Brain & nerves'
    },
    layerLabels: {
      skin: 'Skin & surface',
      muscles: 'Muscular system',
      skeleton: 'Skeletal system',
      vessels: 'Cardiovascular system',
      organs: 'Internal organs',
      nerves: 'Nervous system',
      default: 'Anatomy'
    },
    leftPanelAria: 'Display controls',
    layersTitle: 'Layers',
    layersHint: "Fade any layer to see what's underneath.",
    heartPanelTitle: 'Heart & blood flow',
    heartRateLabel: 'Heart rate',
    bpmUnit: (v) => `${v} bpm`,
    legendArteries: 'Arteries (oxygen-rich)',
    legendVeins: 'Veins (returning)',
    bloodFlowBtn: 'Blood flow animation',
    displayPanelTitle: 'Display',
    labelsBtn: 'Labels',
    isolateBtn: 'Isolate selection',
    autoRotateBtn: 'Auto-rotate',
    resetViewBtn: 'Reset view',
    qualityLabel: 'Render quality',
    qualityHigh: 'High (soft shadows + ambient occlusion)',
    qualityBalanced: 'Balanced',
    qualityFast: 'Fast (older devices)',
    skinToneLabel: 'Skin tone',
    skinToneSwatchAria: (name) => `${name} skin tone`,
    inspectorAria: 'Selected body part',
    emptyTitle: 'Explore the body',
    emptyDesc: 'Hover over the model to see names. Click any structure — or search above — to zoom in and learn about it.',
    tips: [
      { bold: 'Drag', rest: ' to rotate · ', bold2: 'Scroll', rest2: ' to zoom toward the pointer' },
      { bold: 'Right-drag', rest: ' (or two fingers) to pan' },
      { rest: 'Pick a system above: skin, muscles, skeleton, veins, organs, nerves' }
    ],
    readAloudBtn: '🔊 Read aloud',
    readAloudAria: 'Read aloud',
    stopSpeakBtn: '⏹️ Stop',
    stopSpeakAria: 'Stop reading aloud',
    zoomPartBtn: 'Zoom to it',
    isolatePartBtn: 'Show only this',
    showAllBtn: 'Show everything',
    clearBtn: 'Clear',
    sayIt: (pron) => `Say it: “${pron}”`,
    sideLabel: (side) => `${side === 'left' ? 'left' : side === 'right' ? 'right' : side} side`,
    partOfChip: (name) => `Part of: ${name} — show all`,
    belongsTo: 'Belongs to',
    structuresInSelection: 'Structures in this selection',
    moreChip: (n) => `+${n} more`,
    whyYouNeedIt: 'Why you need it',
    fastFacts: 'Fast facts',
    funFacts: 'Fun facts',
    arterialSupply: 'Arterial supply',
    venousDrainage: 'Venous drainage',
    innervation: 'Innervation',
    attachmentsRelations: 'Attachments / relations',
    referenceValues: 'Reference values',
    clinicalCorrelation: 'Clinical correlation',
    sourceModel: (fj, fma) => `Model: BodyParts3D element ${fj} · FMA concept ${fma || 'n/a'}`,
    sourceRecon: (fma) => `Source: Reconstructed surface derived from BodyParts3D anatomical boundaries · FMA concept ${fma || 'n/a'}`,
    sourceVhf: (fma) => `Source: NIH HuBMAP Visible Human Female Reference Atlas (CC BY 4.0) · FMA concept ${fma || 'n/a'}`,
    zoomOutAria: 'Zoom out',
    zoomInAria: 'Zoom in',
    zoomLabel: 'Zoom',
    footerAttribution: '3D anatomy: BodyParts3D © DBCLS & NIH HuBMAP Human Reference Atlas (Visible Human Female), CC BY 4.0',
    quizTitle: 'Anatomy quiz',
    quizCloseBtn: 'Close',
    quizCloseAria: 'Close quiz',
    quizStep: (curr, total, score) => `Question ${curr} of ${total} · Score ${score}`,
    quizNextBtn: 'Next question',
    quizSeeScoreBtn: 'See my score',
    quizScoreTitle: (score, total) => `You scored ${score} out of ${total}!`,
    quizPerfectLead: 'Perfect — you are an anatomy expert!',
    quizGoodLead: 'Great exploring! Play again or keep investigating the body.',
    quizPlayAgainBtn: 'Play again',
    errorLoadModels: 'The 3D models could not be loaded. Please check your connection and reload the page.',
    errorWebgl: 'Your browser could not start the 3D viewer (WebGL 2 is required).'
  },
  es: {
    pageTitle: 'Atlas 3D del Cuerpo Humano — Anatomía Interactiva Realista',
    skipLink: 'Saltar a los detalles de la estructura anatómica',
    canvasAria:
      'Cuerpo humano 3D interactivo. Arrastra para rotar, usa la rueda o pellizca para acercar hacia el cursor, arrastra con clic derecho para desplazar y haz clic en una estructura para ver su nombre.',
    loadingTitle: 'Construyendo el cuerpo humano…',
    loadingSubDefault: 'Cargando modelos anatómicos reales',
    loadingLayer: (layerName) => `Cargando ${layerName}…`,
    loadingProgress: (pct, loadedMb, totalMb) => `${pct}% · ${loadedMb} de ${totalMb} MB`,
    brandTitle: 'Atlas 3D del Cuerpo Humano',
    brandSubtitle: 'Femenino y Masculino · 2.225 estructuras con nombre',
    searchLabel: 'Buscar cualquier parte del cuerpo',
    searchPlaceholder: 'Busca cualquier parte — corazón, fémur, útero, aorta, bíceps…',
    searchResultsAria: 'Partes del cuerpo coincidentes',
    searchStillLoading: 'Cargando el modelo anatómico — un momento…',
    searchNoMatch: 'Sin coincidencias. Prueba con «corazón», «fémur», «útero», «aorta» o «bíceps».',
    structuresCount: (n) => `${n} estructura${n > 1 ? 's' : ''}`,
    sexGroupAria: 'Anatomía corporal',
    female: 'Femenino',
    male: 'Masculino',
    audienceGroupAria: 'Nivel de explicación',
    kids: 'Niños',
    pro: 'Clínico',
    langGroupAria: 'Idioma',
    quizBtn: 'Quiz',
    viewBarAria: 'Vistas de sistemas corporales',
    viewPresets: {
      skin: 'Piel',
      muscles: 'Músculos',
      skeleton: 'Esqueleto',
      circulation: 'Venas y flujo sanguíneo',
      organs: 'Órganos',
      nervous: 'Cerebro y nervios',
      xray: 'Rayos X (todos los sistemas)'
    },
    layerNames: {
      skin: 'Piel',
      muscles: 'Músculos',
      skeleton: 'Esqueleto',
      vessels: 'Venas y arterias',
      organs: 'Órganos',
      nerves: 'Cerebro y nervios'
    },
    layerLabels: {
      skin: 'Piel y superficie',
      muscles: 'Sistema muscular',
      skeleton: 'Sistema esquelético',
      vessels: 'Sistema cardiovascular',
      organs: 'Órganos internos',
      nerves: 'Sistema nervioso',
      default: 'Anatomía'
    },
    leftPanelAria: 'Controles de visualización',
    layersTitle: 'Capas',
    layersHint: 'atenúa cualquier capa para ver qué hay debajo.',
    heartPanelTitle: 'Corazón y flujo sanguíneo',
    heartRateLabel: 'Frecuencia cardíaca',
    bpmUnit: (v) => `${v} lpm`,
    legendArteries: 'Arterias (ricas en oxígeno)',
    legendVeins: 'Venas (retorno)',
    bloodFlowBtn: 'Animación de flujo sanguíneo',
    displayPanelTitle: 'Pantalla',
    labelsBtn: 'Etiquetas',
    isolateBtn: 'Aislar selección',
    autoRotateBtn: 'Autorrotar',
    resetViewBtn: 'Restablecer vista',
    qualityLabel: 'Calidad visual',
    qualityHigh: 'Alta (sombras suaves + oclusión ambiental)',
    qualityBalanced: 'Equilibrada',
    qualityFast: 'Rápida (dispositivos antiguos)',
    skinToneLabel: 'Tono de piel',
    skinToneSwatchAria: (name) => `Tono de piel ${name}`,
    inspectorAria: 'Parte del cuerpo seleccionada',
    emptyTitle: 'Explora el cuerpo humano',
    emptyDesc: 'Pasa el cursor sobre el modelo para ver los nombres. Haz clic en cualquier estructura — o busca arriba — para acercarte y aprender sobre ella.',
    tips: [
      { bold: 'Arrastra', rest: ' para rotar · ', bold2: 'Rueda', rest2: ' para acercar hacia el cursor' },
      { bold: 'Clic derecho y arrastra', rest: ' (o dos dedos) para desplazar' },
      { rest: 'Elige un sistema arriba: piel, músculos, esqueleto, venas, órganos, nervios' }
    ],
    readAloudBtn: '🔊 Leer en voz alta',
    readAloudAria: 'Leer en voz alta',
    stopSpeakBtn: '⏹️ Detener',
    stopSpeakAria: 'Detener lectura en voz alta',
    zoomPartBtn: 'Acercar',
    isolatePartBtn: 'Mostrar solo esto',
    showAllBtn: 'Mostrar todo',
    clearBtn: 'Limpiar',
    sayIt: (pron) => `Cómo se dice: «${pron}»`,
    sideLabel: (side) => `lado ${side === 'left' ? 'izquierdo' : side === 'right' ? 'derecho' : side}`,
    partOfChip: (name) => `Parte de: ${name} — mostrar todo`,
    belongsTo: 'Pertenece a',
    structuresInSelection: 'Estructuras en esta selección',
    moreChip: (n) => `+${n} más`,
    whyYouNeedIt: 'Por qué lo necesitas',
    fastFacts: 'Datos rápidos',
    funFacts: 'Datos curiosos',
    arterialSupply: 'Irrigación arterial',
    venousDrainage: 'Drenaje venoso',
    innervation: 'Inervación',
    attachmentsRelations: 'Inserciones y relaciones',
    referenceValues: 'Valores de referencia',
    clinicalCorrelation: 'Correlación clínica',
    sourceModel: (fj, fma) => `Modelo: elemento BodyParts3D ${fj} · concepto FMA ${fma || 'n/a'}`,
    sourceRecon: (fma) => `Fuente: Superficie reconstruida a partir de límites anatómicos de BodyParts3D · concepto FMA ${fma || 'n/a'}`,
    sourceVhf: (fma) => `Fuente: Atlas de Referencia Visible Human Female de NIH HuBMAP (CC BY 4.0) · concepto FMA ${fma || 'n/a'}`,
    zoomOutAria: 'Alejar',
    zoomInAria: 'Acercar',
    zoomLabel: 'Zoom',
    footerAttribution: 'Anatomía 3D: BodyParts3D © DBCLS y NIH HuBMAP Human Reference Atlas (Visible Human Female), CC BY 4.0',
    quizTitle: 'Quiz de anatomía',
    quizCloseBtn: 'Cerrar',
    quizCloseAria: 'Cerrar quiz',
    quizStep: (curr, total, score) => `Pregunta ${curr} de ${total} · Puntuación ${score}`,
    quizNextBtn: 'Siguiente pregunta',
    quizSeeScoreBtn: 'Ver mi puntuación',
    quizScoreTitle: (score, total) => `¡Obtuviste ${score} de ${total}!`,
    quizPerfectLead: '¡Perfecto — eres un experto en anatomía!',
    quizGoodLead: '¡Excelente exploración! Juega de nuevo o sigue investigando el cuerpo.',
    quizPlayAgainBtn: 'Jugar de nuevo',
    errorLoadModels: 'No se pudieron cargar los modelos 3D. Verifica tu conexión y recarga la página.',
    errorWebgl: 'Tu navegador no pudo iniciar el visor 3D (se requiere WebGL 2).'
  },
  zh: {
    pageTitle: '人体 3D 解剖图谱 — 逼真交互式人体解剖',
    skipLink: '跳转到解剖结构详情',
    canvasAria:
      '交互式 3D 人体模型。拖动旋转，滚轮或双指缩放至指针位置，右键拖动平移，点击任何解剖结构查看名称。方向键旋转，加减号缩放。',
    loadingTitle: '正在构建人体 3D 模型…',
    loadingSubDefault: '正在加载真实解剖结构模型',
    loadingLayer: (layerName) => `正在加载 ${layerName}…`,
    loadingProgress: (pct, loadedMb, totalMb) => `${pct}% · ${loadedMb} / ${totalMb} MB`,
    brandTitle: '人体 3D 解剖图谱',
    brandSubtitle: '女性与男性 · 2,225 个命名解剖结构',
    searchLabel: '搜索任何身体部位',
    searchPlaceholder: '搜索身体部位 — 心脏、股骨、子宫、主动脉、肱二头肌…',
    searchResultsAria: '匹配的身体部位',
    searchStillLoading: '正在加载解剖模型 — 请稍候…',
    searchNoMatch: '未找到匹配项。试试“心脏”、“股骨”、“子宫”、“主动脉”或“肱二头肌”。',
    structuresCount: (n) => `${n} 个解剖结构`,
    sexGroupAria: '身体解剖性别',
    female: '女性',
    male: '男性',
    audienceGroupAria: '讲解模式',
    kids: '少儿科普',
    pro: '临床医学',
    langGroupAria: '语言',
    quizBtn: '趣味测验',
    viewBarAria: '人体系统视图',
    viewPresets: {
      skin: '皮肤',
      muscles: '肌肉',
      skeleton: '骨骼',
      circulation: '血管与血流',
      organs: '内脏器官',
      nervous: '大脑与神经',
      xray: '透视（全系统）'
    },
    layerNames: {
      skin: '皮肤',
      muscles: '肌肉',
      skeleton: '骨骼',
      vessels: '静脉与动脉',
      organs: '内脏器官',
      nerves: '大脑与神经'
    },
    layerLabels: {
      skin: '皮肤与体表',
      muscles: '肌肉系统',
      skeleton: '骨骼系统',
      vessels: '心血管系统',
      organs: '内脏器官系统',
      nerves: '神经系统',
      default: '解剖结构'
    },
    leftPanelAria: '显示控制',
    layersTitle: '解剖图层',
    layersHint: '调低任意图层透明度，透视内部深层结构。',
    heartPanelTitle: '心率与血液流动',
    heartRateLabel: '心率',
    bpmUnit: (v) => `${v} 次/分`,
    legendArteries: '动脉（富氧血）',
    legendVeins: '静脉（回流血）',
    bloodFlowBtn: '血液流动动画',
    displayPanelTitle: '显示设置',
    labelsBtn: '结构标签',
    isolateBtn: '单独显示选中项',
    autoRotateBtn: '自动旋转',
    resetViewBtn: '重置视角',
    qualityLabel: '渲染画质',
    qualityHigh: '高画质（柔和阴影 + 环境光遮蔽）',
    qualityBalanced: '均衡模式',
    qualityFast: '流畅模式（适合旧设备）',
    skinToneLabel: '肤色',
    skinToneSwatchAria: (name) => `${name} 肤色`,
    inspectorAria: '选中的身体部位',
    emptyTitle: '探索人体奥秘',
    emptyDesc: '将鼠标悬停在模型上可查看名称。点击任意结构（或在上方搜索）即可聚焦放大并深入了解。',
    tips: [
      { bold: '拖动', rest: ' 旋转视角 · ', bold2: '滚轮', rest2: ' 向光标位置缩放' },
      { bold: '右键拖动', rest: '（或双指滑动）平移视图' },
      { rest: '在上方切换系统视图：皮肤、肌肉、骨骼、血管、器官、神经' }
    ],
    readAloudBtn: '🔊 语音朗读',
    readAloudAria: '语音朗读',
    stopSpeakBtn: '⏹️ 停止',
    stopSpeakAria: '停止朗读',
    zoomPartBtn: '聚焦放大',
    isolatePartBtn: '仅显示此结构',
    showAllBtn: '显示全部结构',
    clearBtn: '清除选择',
    sayIt: (pron) => `发音提示：“${pron}”`,
    sideLabel: (side) => `${side === 'left' ? '左侧' : side === 'right' ? '右侧' : side}`,
    partOfChip: (name) => `属于：${name} — 查看整体`,
    belongsTo: '所属解剖分组',
    structuresInSelection: '当前选中包含的结构',
    moreChip: (n) => `另外 ${n} 个结构`,
    whyYouNeedIt: '为什么人体需要它',
    fastFacts: '核心档案',
    funFacts: '趣味冷知识',
    arterialSupply: '动脉供血',
    venousDrainage: '静脉回流',
    innervation: '神经支配',
    attachmentsRelations: '起止点与毗邻关系',
    referenceValues: '临床参考指标',
    clinicalCorrelation: '临床相关性与要点',
    sourceModel: (fj, fma) => `模型来源：BodyParts3D 构件 ${fj} · FMA 概念 ${fma || 'n/a'}`,
    sourceRecon: (fma) => `模型来源：基于 BodyParts3D 解剖边界重建表面 · FMA 概念 ${fma || 'n/a'}`,
    sourceVhf: (fma) => `模型来源：NIH HuBMAP 可视女性人类参考图谱 (CC BY 4.0) · FMA 概念 ${fma || 'n/a'}`,
    zoomOutAria: '缩小',
    zoomInAria: '放大',
    zoomLabel: '缩放',
    footerAttribution: '3D 解剖模型：BodyParts3D © DBCLS 与 NIH HuBMAP 人类参考图谱 (Visible Human Female)，CC BY 4.0',
    quizTitle: '解剖知识小测验',
    quizCloseBtn: '关闭',
    quizCloseAria: '关闭测验',
    quizStep: (curr, total, score) => `第 ${curr} / ${total} 题 · 得分 ${score}`,
    quizNextBtn: '下一题',
    quizSeeScoreBtn: '查看得分',
    quizScoreTitle: (score, total) => `你答对了 ${score} / ${total} 题！`,
    quizPerfectLead: '满分！你是真正的人体解剖学达人！',
    quizGoodLead: '探索得非常棒！可以再挑战一次，或继续探索人体模型。',
    quizPlayAgainBtn: '再玩一次',
    errorLoadModels: '无法加载 3D 解剖模型，请检查网络连接并刷新页面。',
    errorWebgl: '您的浏览器无法启动 3D 视图（需要 WebGL 2 支持）。'
  }
};

export function getUiStrings(lang = 'en') {
  return UI_STRINGS[normalizeLang(lang)] || UI_STRINGS.en;
}

export function getLocalizedLayerLabel(layer, lang = 'en') {
  const ui = getUiStrings(lang);
  return ui.layerLabels[layer] || ui.layerLabels.default;
}

export function getLocalizedPart(curatedEntry, lang = 'en') {
  if (!curatedEntry) return null;
  const l = normalizeLang(lang);
  if (l === 'en') return curatedEntry;
  const dict = l === 'es' ? PARTS_ES : l === 'zh' ? PARTS_ZH : null;
  const tr = dict && dict[curatedEntry.id];
  if (!tr) return curatedEntry;
  return {
    ...curatedEntry,
    name: tr.name || curatedEntry.name,
    latinName: tr.latinName || curatedEntry.latinName,
    systemLabel: tr.systemLabel || curatedEntry.systemLabel,
    kids: tr.kids ? { ...curatedEntry.kids, ...tr.kids } : curatedEntry.kids,
    pro: tr.pro ? { ...curatedEntry.pro, ...tr.pro } : curatedEntry.pro
  };
}

export function getLocalizedTissueInfo(tissueKey, lang = 'en') {
  const l = normalizeLang(lang);
  const fallback = TISSUE_INFO[tissueKey] || TISSUE_INFO.organ;
  if (l === 'en') return fallback;
  const dict = l === 'es' ? TISSUE_INFO_ES : l === 'zh' ? TISSUE_INFO_ZH : null;
  if (dict && dict[tissueKey]) return dict[tissueKey];
  if (dict && dict.organ) return dict.organ;
  return fallback;
}

export function getLocalizedQuizQuestions(lang = 'en') {
  const l = normalizeLang(lang);
  if (l === 'es') return QUIZ_QUESTIONS_ES;
  if (l === 'zh') return QUIZ_QUESTIONS_ZH;
  return ANATOMY_QUIZ_QUESTIONS;
}
