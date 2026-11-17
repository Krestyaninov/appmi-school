// ═══════════════════════════════════════════════════════════════
// 🔵 ROBOROCK — База знаний по роботам-пылесосам
// AppMi Category Trainer | v1.0
// Источник: прайс 17.09.2026 (3 позиции) + официальная экспертиза
// ═══════════════════════════════════════════════════════════════

const ROBOROCK_KB = {
  brand: "Roborock",
  brandKey: "roborock",
  brandColor: "#E8362A",
  logo: "🔵",

  // ── 1. ЛИНЕЙКИ ──────────────────────────────────────────────
  series: [
    {
      id: "E", name: "E-серия", emoji: "🟤",
      positioning: "Бюджетная/базовая линейка. Простая навигация, без LiDAR. Нет автосбора пыли. Начальный уровень для знакомства с брендом.",
      priceRange: "бюджет",
      keyModels: ["E4", "E5"],
      levelOrder: 1, color: "#a16207"
    },
    {
      id: "Q", name: "Q-серия", emoji: "🟢",
      positioning: "Доступный средний класс с LiDAR-навигацией. Часто включает автосбор пыли. Хорошая навигация по доступной цене.",
      priceRange: "средний класс",
      keyModels: ["Q7", "Q8", "Q10", "QV", "QR"],
      levelOrder: 2, color: "#10b981"
    },
    {
      id: "S", name: "S-серия", emoji: "🔵",
      positioning: "Премиальная классическая линейка. LiDAR, развитая навигация, камера и распознавание препятствий у старших моделей. Проверенная платформа.",
      priceRange: "премиум",
      keyModels: ["S7", "S8", "S8 MaxV Ultra"],
      levelOrder: 3, color: "#3b82f6"
    },
    {
      id: "Qrevo", name: "Qrevo", emoji: "🟣",
      positioning: "Средний и высокий класс. Multifunctional Dock, влажная уборка, автоочистка. Основная актуальная линейка Roborock с широким выбором уровней.",
      priceRange: "59 000 – 63 000 ₽ (в нашем каталоге)",
      keyModels: ["Qrevo S", "Qrevo Pro", "Qrevo Edge", "Qrevo Edge 2 Flow", "Qrevo Curv", "Qrevo 2", "Qrevo 2 Pro"],
      levelOrder: 3, color: "#8b5cf6"
    },
    {
      id: "Saros", name: "Saros", emoji: "🔴",
      positioning: "Топовая флагманская линейка. Ультратонкие корпуса, продвинутейшая навигация (ReactiveAI 3.0 / StarSight), максимальные мощности, самоочистка. Вершина Roborock.",
      priceRange: "79 000 ₽ (Saros Z70 в каталоге)",
      keyModels: ["Saros 10", "Saros 10R", "Saros 20", "Saros 20 Flow", "Saros 20 Sonic", "Saros Z70"],
      levelOrder: 5, color: "#ef4444"
    },
    {
      id: "F", name: "F-серия (Combo)", emoji: "🟡",
      positioning: "Комбо-устройства: робот + ручной/вертикальный пылесос в одной системе. Гибкость для тех, кто хочет и робота, и ручной пылесос.",
      priceRange: "комбо",
      keyModels: ["F25 Combo", "F25 ACE Combo"],
      levelOrder: 2, color: "#f59e0b"
    }
  ],

  // ── 2. КАТАЛОГ МОДЕЛЕЙ ───────────────────────────────────────
  catalog: [
    // E-серия
    { id: "E4",        name: "Roborock E4",           series: "E",     suffixes: [],                  region: "—",  color: "—",     price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—",       features: ["Базовая уборка", "Без LiDAR", "Без станции автосбора"],        positioning: "Начальный уровень Roborock" },
    { id: "E5",        name: "Roborock E5",           series: "E",     suffixes: [],                  region: "—",  color: "—",     price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—",       features: ["Базовая уборка", "Влажная уборка", "Без LiDAR"],               positioning: "E4 с влажной уборкой" },
    // Q-серия
    { id: "Q7",        name: "Roborock Q7",           series: "Q",     suffixes: [],                  region: "—",  color: "—",     price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "RRE0...", features: ["PreciSense LiDAR", "Автосбор пыли", "Dual Anti-Tangle"],       positioning: "Доступная Q-серия с LiDAR и автосбором" },
    { id: "Q8",        name: "Roborock Q8",           series: "Q",     suffixes: [],                  region: "—",  color: "—",     price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—",       features: ["LiDAR", "Улучшенное всасывание vs Q7", "Влажная уборка"],     positioning: "Q7 с большей мощностью" },
    { id: "Q10",       name: "Roborock Q10",          series: "Q",     suffixes: [],                  region: "—",  color: "—",     price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "RRE0...", features: ["LiDAR", "VibraRise 2.0", "Автосбор пыли", "Reactive Tech"],    positioning: "Топ Q-серии с виброшваброй" },
    // S-серия
    { id: "S7",        name: "Roborock S7",           series: "S",     suffixes: [],                  region: "—",  color: "—",     price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "S91COP",  features: ["LiDAR", "VibraRise", "Подъём швабры на ковре"],               positioning: "Классика S-серии с виброшваброй" },
    { id: "S8",        name: "Roborock S8",           series: "S",     suffixes: [],                  region: "—",  color: "—",     price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "S90VER",  features: ["LiDAR", "Dual DuoRoller Brush", "VibraRise 2.0"],             positioning: "Обновлённая S-серия с двойной щёткой" },
    { id: "S8mvu",     name: "Roborock S8 MaxV Ultra",series: "S",     suffixes: ["MaxV", "Ultra"],   region: "CE", color: "—",     price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—",       features: ["Камера ReactiveAI", "Ultra-станция", "Refill & Drainage"],    positioning: "Топ S-серии: камера + полная станция", keyDiff: "Ultra = полная станция; Refill & Drainage = подключение к водопроводу" },
    // Qrevo
    { id: "QrS",       name: "Roborock Qrevo S",      series: "Qrevo", suffixes: ["S"],               region: "CE", color: "—",     price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "QX1PEC",  features: ["Multifunctional Dock", "7 000 Pa", "FlexiArm"],               positioning: "Доступный вход в Qrevo-линейку" },
    { id: "QrSPr",     name: "Roborock Qrevo S Pro",  series: "Qrevo", suffixes: ["S", "Pro"],        region: "—",  color: "—",     price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—",       features: ["18 500 Pa", "Анти-запутывание", "Multifunctional Dock"],      positioning: "Qrevo S усиленный" },
    { id: "QrPr",      name: "Roborock Qrevo Pro",    series: "Qrevo", suffixes: ["Pro"],             region: "—",  color: "—",     price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—",       features: ["Multifunctional Dock 2.0", "FlexiArm", "Подъём швабры 10 мм"],"positioning": "Qrevo с улучшенной документацией" },
    { id: "QrE",       name: "Roborock Qrevo Edge",   series: "Qrevo", suffixes: ["Edge"],            region: "RU", color: "White", price: 59000, inStock: true,  inOurCatalog: true,  isNew: false, partnum: "—",       features: ["Преодоление порогов", "Тонкий корпус", "Multifunctional Dock"],positioning: "Qrevo для квартир с порогами" },
    { id: "QrE2F",     name: "Roborock Qrevo Edge 2 Flow", series: "Qrevo", suffixes: ["Edge","2","Flow"], region: "—", color: "—", price: 0,  inStock: false, inOurCatalog: false, isNew: true,  partnum: "—",       features: ["SpiraFlow 2.0 самоочистка", "35 000 Pa", "Корпус 8.98 см"],   positioning: "Топовый Edge с самоочисткой под давлением" },
    { id: "QrC",       name: "Roborock Qrevo Curv",   series: "Qrevo", suffixes: ["Curv"],            region: "RU", color: "White", price: 63000, inStock: true,  inOurCatalog: true,  isNew: false, partnum: "—",       features: ["AdaptiLift", "Высокая мощность", "Multifunctional Dock"],    positioning: "Qrevo с технологией подъёма для порогов" },
    { id: "Qr2",       name: "Roborock Qrevo 2",      series: "Qrevo", suffixes: ["2"],               region: "—",  color: "—",     price: 0,     inStock: false, inOurCatalog: false, isNew: true,  partnum: "—",       features: ["Новое поколение Qrevo", "Улучшенная станция"],               positioning: "Следующее поколение Qrevo" },
    { id: "Qr2Pr",     name: "Roborock Qrevo 2 Pro",  series: "Qrevo", suffixes: ["2", "Pro"],        region: "—",  color: "—",     price: 0,     inStock: false, inOurCatalog: false, isNew: true,  partnum: "—",       features: ["25 000 Pa", "Авто-отсоединение швабры на ковре"],            positioning: "Топ второго поколения Qrevo" },
    // Saros
    { id: "S10",       name: "Roborock Saros 10",         series: "Saros", suffixes: [],           region: "CE", color: "—", price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—",       features: ["Корпус 7.98 см", "ReactiveAI 3.0", "VibraRise 4.0"],           positioning: "Флагман Saros — ультратонкий" },
    { id: "S10R",      name: "Roborock Saros 10R",        series: "Saros", suffixes: ["R"],        region: "—",  color: "—", price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—",       features: ["StarSight 2.0 навигация", "AdaptiLift", "Корпус ~8 см"],      positioning: "Saros 10 с другой навигационной системой", keyDiff: "10R: StarSight вместо ReactiveAI; R = другая навигация" },
    { id: "S20",       name: "Roborock Saros 20",         series: "Saros", suffixes: [],           region: "—",  color: "—", price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—",       features: ["AdaptiLift 3.0", "StarSight 2.0", "36 000 Pa"],               positioning: "Старший Saros — максимальная мощность" },
    { id: "S20F",      name: "Roborock Saros 20 Flow",    series: "Saros", suffixes: ["Flow"],     region: "—",  color: "—", price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—",       features: ["SpiraFlow 2.0 — мойка под давлением", "36 000 Pa"],           positioning: "Saros 20 с улучшенной самоочисткой швабры" },
    { id: "S20Sn",     name: "Roborock Saros 20 Sonic",   series: "Saros", suffixes: ["Sonic"],    region: "—",  color: "—", price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—",       features: ["VibraRise 5.0", "Корпус 7.95 см", "Sonic-вибрация"],          positioning: "Saros 20 с соникной вибрационной шваброй" },
    { id: "SZ70",      name: "Roborock Saros Z70",         series: "Saros", suffixes: ["Z70"],      region: "RU", color: "Black", price: 79000, inStock: true, inOurCatalog: true, isNew: true, partnum: "—",       features: ["OmniGrip манипулятор", "22 000 Pa", "Захват предметов с пола"], positioning: "Уникальная модель: складной манипулятор для подбора объектов", keyDiff: "Z70 = единственный Roborock с механическим манипулятором-рукой" },
    // F-Combo
    { id: "F25A",      name: "Roborock F25 ACE Combo",    series: "F",     suffixes: ["ACE","Combo"], region: "CE", color: "—", price: 0,  inStock: false, inOurCatalog: false, isNew: false, partnum: "—",       features: ["Робот + ручной пылесос", "Единая система", "LiDAR"],          positioning: "Комбо: робот и ручной пылесос в одном решении" }
  ],

  // ── 3. СУФФИКСЫ ─────────────────────────────────────────────
  suffixes: [
    { suffix: "Ultra",  meaning: "Полнофункциональная станция самообслуживания: автосбор пыли, мойка и сушка швабры, автодолив воды. Аналог Dreame Ultra.", example: "S8 MaxV Ultra, Saros 20", category: "station" },
    { suffix: "Pro",    meaning: "Усиленная версия: большая мощность всасывания, улучшенная щётка, дополнительные сенсоры или функции навигации.", example: "Qrevo S Pro, Qrevo 2 Pro", category: "version" },
    { suffix: "MaxV",   meaning: "Max Versatility: модели с камерой и системой распознавания препятствий ReactiveAI. Визуальная идентификация объектов на полу.", example: "S8 MaxV Ultra", category: "nav" },
    { suffix: "Max",    meaning: "Максимальная мощность всасывания в рамках модели без камеры.", example: "Q7 Max, Q8 Max", category: "version" },
    { suffix: "R",      meaning: "В Saros 10R: другая навигационная система StarSight 2.0 вместо ReactiveAI. R = иная технология навигации, не просто ревизия.", example: "Saros 10R", category: "nav" },
    { suffix: "Flow",   meaning: "SpiraFlow 2.0 — самоочистка швабры под давлением воды. Принципиально иной способ промывки по сравнению со стандартным.", example: "Saros 20 Flow, Qrevo Edge 2 Flow", category: "version" },
    { suffix: "Sonic",  meaning: "VibraRise 5.0 — соникная (звуковая) вибрация швабры для более глубокой очистки пола.", example: "Saros 20 Sonic", category: "version" },
    { suffix: "Curv",   meaning: "AdaptiLift — технология подъёма корпуса для преодоления порогов и ковров. Curv = curved lift.", example: "Qrevo Curv", category: "nav" },
    { suffix: "Edge",   meaning: "Акцент на преодолении порогов и тонком корпусе для уборки вдоль стен и под низкой мебелью.", example: "Qrevo Edge, Qrevo Edge 2 Flow", category: "nav" },
    { suffix: "Combo",  meaning: "Комплект: робот-пылесос + ручной/вертикальный пылесос в одной системе и зарядной базе.", example: "F25 Combo, F25 ACE Combo", category: "set" },
    { suffix: "CE",     meaning: "Европейская сертификация (Conformité Européenne). Часто указывается в документации Roborock. Могут отличаться язык и набор функций.", example: "Saros 10 CE, Qrevo S CE (QX1PEC)", category: "region" },
    { suffix: "Z70",    meaning: "Обозначение специфической технологии — OmniGrip манипулятор. Z70 — уникальная модель со складной механической рукой.", example: "Saros Z70", category: "other" }
  ],

  // ── 4. ПАРТНОМЕР ────────────────────────────────────────────
  partnumberGuide: {
    brand: "Roborock",
    format: "RR + платформа + цифра + регион (или отдельный формат для Qrevo)",
    example: "QX1PEC / RRW0PEP",
    parts: [
      { chars: "RR",          meaning: "Roborock Robot — стандартный префикс" },
      { chars: "E",           meaning: "Платформа E (Q-серия, доступная)" },
      { chars: "A",           meaning: "Платформа A (Q-серия альтернативная)" },
      { chars: "W",           meaning: "Платформа W (Qrevo-серия)" },
      { chars: "S",           meaning: "Платформа S (S-серия, премиальная)" },
      { chars: "Цифра",       meaning: "Внутреннее поколение или ревизия" },
      { chars: "2–3 символа", meaning: "Регион, сертификация, конфигурация (PE, CP, VER...)" },
      { chars: "EWFD...",     meaning: "Код СТАНЦИИ (Dock) — не самого робота! Отдельная сертификация" }
    ],
    keyRule: "У Roborock станция имеет ОТДЕЛЬНЫЙ партномер (EWFD...). Всегда проверяй код и робота, и станции — они сертифицируются отдельно.",
    checkList: [
      "Полное имя: 'Qrevo S Pro', а не просто 'Qrevo'",
      "Партномер робота на нижней наклейке (QX1PEC, RRW0PEP, S90VER...)",
      "Партномер станции отдельно (EWFD24LRR и т.п.)",
      "Тип станции: Tank (ручные баки) vs Refill & Drainage (подключение к водопроводу)"
    ],
    examples: [
      { partnum: "QX1PEC",    model: "Roborock Qrevo S",        note: "Q-платформа Qrevo, PE = регион/конфиг, C = ревизия" },
      { partnum: "RRW0PEP",   model: "Roborock Qrevo (робот)",  note: "RR + W = Qrevo-платформа" },
      { partnum: "EWFD24LRR", model: "Станция для Qrevo",       note: "EW = Dock, FD = тип, 24 = год, LRR = конфиг" },
      { partnum: "S90VER",    model: "Roborock S8 (или Saros)",  note: "S-серия, 90 = платформа, VER = регион" },
      { partnum: "S91COP",    model: "Roborock S7",              note: "S91 = S-серия поколение, COP = конфигурация" }
    ]
  },

  // ── 5. ТИПИЧНЫЕ ОШИБКИ ──────────────────────────────────────
  commonMistakes: [
    {
      mistake: "«Qrevo S и Qrevo S Pro — одна и та же модель»",
      correct: "Qrevo S (QX1PEC, 7 000 Pa) и Qrevo S Pro (18 500 Pa, анти-запутывание) — разные модели с разными характеристиками. Pro значительно мощнее."
    },
    {
      mistake: "«Saros 10 и Saros 10R отличаются только буквой R»",
      correct: "R = принципиально другая навигационная система. Saros 10 — ReactiveAI 3.0, Saros 10R — StarSight 2.0 с AdaptiLift. Это разные технологии навигации."
    },
    {
      mistake: "«Партномер станции — то же самое что партномер робота»",
      correct: "У Roborock станция имеет отдельный партномер (EWFD...). Qrevo + EWFD24LRR = два разных кода. Запчасти и гарантия ведутся отдельно."
    },
    {
      mistake: "«Saros Z70 — просто дорогой Saros с другим названием»",
      correct: "Saros Z70 уникален: единственная модель Roborock со складным механическим манипулятором OmniGrip, который может подбирать носки и мелкие предметы с пола."
    },
    {
      mistake: "«Ultra у Roborock = то же самое что Ultra у Dreame»",
      correct: "Концепция похожа (полная станция самообслуживания), но реализация отличается. У Roborock также есть версия Refill & Drainage System (подключение к водопроводу) vs Tank (ручные баки). Уточняйте тип."
    },
    {
      mistake: "«Flow и Sonic — просто маркетинговые слова»",
      correct: "Flow = SpiraFlow 2.0 — мойка швабры под напором воды (принципиально иначе чем стандарт). Sonic = VibraRise 5.0 — соникная вибрация для глубокой очистки. Это реальные технологические различия."
    }
  ],

  // ── 6. ВОПРОСЫ ──────────────────────────────────────────────
  quiz: [
    {
      id: "r-q1", topic: "series", difficulty: "easy",
      prompt: "Какая линейка Roborock является флагманской в 2026 году?",
      options: ["Q-серия — доступная с LiDAR", "S-серия — классика Premium", "Saros — ультратонкие флагманы с ReactiveAI", "Qrevo — средний класс"],
      answer: 2,
      explain: "Saros — топовая линейка Roborock. Ультратонкие корпуса (от 7.95 см), ReactiveAI 3.0 / StarSight 2.0, до 36 000 Pa. Saros Z70 (79 000 ₽) — в нашем каталоге."
    },
    {
      id: "r-q2", topic: "series", difficulty: "easy",
      prompt: "Клиент хочет робот Roborock с умным обходом препятствий и камерой. Какая функция/линейка нужна?",
      options: ["Q-серия — базовая, без камеры", "MaxV — модели с камерой ReactiveAI для распознавания объектов", "E-серия — бюджетная", "Combo-серия — двойное устройство"],
      answer: 1,
      explain: "MaxV (Max Versatility) = камера + ReactiveAI для распознавания препятствий. Пример: S8 MaxV Ultra. Это ключевое отличие от базовых моделей без камеры."
    },
    {
      id: "r-q3", topic: "series", difficulty: "medium",
      prompt: "В чём принципиальное отличие Qrevo-серии от Q-серии?",
      options: ["Только в названии — одна и та же платформа", "Qrevo дешевле Q-серии", "Qrevo — акцент на Multifunctional Dock, мойке и автоочистке; Q — базовая с LiDAR без полной станции", "Q-серия новее Qrevo"],
      answer: 2,
      explain: "Q-серия — LiDAR, часто автосбор пыли, доступная цена. Qrevo — Multifunctional Dock (мойка, сушка, долив), FlexiArm, более сложная станция. Qrevo позиционируется выше Q."
    },
    {
      id: "r-q4", topic: "catalog", difficulty: "easy",
      prompt: "Какие модели Roborock есть в актуальном каталоге AppMi?",
      options: ["S8 MaxV Ultra и Q10 Pro", "Saros Z70, Qrevo Curv, Qrevo Edge", "Только Qrevo 2 Pro", "Saros 20 и Saros 10"],
      answer: 1,
      explain: "В нашем прайсе: Roborock Saros Z70 (79 000 ₽), Qrevo Curv (63 000 ₽), Qrevo Edge (59 000 ₽). Это три актуальные позиции."
    },
    {
      id: "r-q5", topic: "catalog", difficulty: "medium",
      prompt: "Клиент смотрит Roborock Saros Z70 (79 000 ₽) и спрашивает: «Что в нём особенного?». Правильный ответ:",
      options: ["Просто дорогой флагман Saros с большим корпусом", "Единственный в ассортименте с механическим манипулятором OmniGrip, который поднимает носки и мелкие вещи с пола", "Это Qrevo в новом корпусе Saros", "Особенность — 36 000 Pa, самый мощный"],
      answer: 1,
      explain: "Saros Z70 — единственный Roborock со складным 5-осевым манипулятором OmniGrip. Может хватать и убирать небольшие предметы. 22 000 Pa — не рекорд по мощности, но уникальная функция."
    },
    {
      id: "r-q6", topic: "suffixes", difficulty: "medium",
      prompt: "Чем отличается Roborock Saros 10 от Saros 10R?",
      options: ["Только цветом корпуса", "10R = Refill (подключение к водопроводу)", "10R использует StarSight 2.0 с AdaptiLift вместо ReactiveAI 3.0 — принципиально другая навигация", "10R — бюджетная версия 10"],
      answer: 2,
      explain: "R в Saros 10R = другая навигационная система StarSight 2.0 (не ReactiveAI). AdaptiLift позволяет подниматься над препятствиями. Это разные технологии, а не просто ревизия."
    },
    {
      id: "r-q7", topic: "suffixes", difficulty: "medium",
      prompt: "Что означает суффикс «Flow» в Roborock Saros 20 Flow и Qrevo Edge 2 Flow?",
      options: ["Плавная анимация в приложении", "SpiraFlow 2.0 — самоочистка швабры под давлением воды, а не простое полоскание", "Flow = режим быстрой уборки", "Улучшенная система всасывания воздуха"],
      answer: 1,
      explain: "Flow = SpiraFlow 2.0. Вместо простого полоскания швабры — промывка под давлением воды по спирали. Принципиально более чистый результат, чем у стандартных моделей."
    },
    {
      id: "r-q8", topic: "partnumbers", difficulty: "medium",
      prompt: "Менеджер видит код QX1PEC на нижней наклейке робота. Это:",
      options: ["Код чехла или аксессуара", "Серийный номер конкретного экземпляра", "Модельный код Roborock Qrevo S (CE-конфигурация)", "Код прошивки"],
      answer: 2,
      explain: "QX1PEC — официальный партномер Roborock Qrevo S в CE-конфигурации. Q = Qrevo-платформа, X1 = модель, PEC = регион/конфигурация."
    },
    {
      id: "r-q9", topic: "partnumbers", difficulty: "hard",
      prompt: "Поставщик называет код EWFD24LRR. Что это?",
      options: ["Роботный пылесос новой серии EW", "Партномер СТАНЦИИ (Dock) для Qrevo — не самого робота", "Прошивка версии 24", "Аксессуарный набор"],
      answer: 1,
      explain: "EWFD... = код Dock-станции. У Roborock робот и станция имеют раздельные партномера и отдельную сертификацию. EWFD24LRR — станция, а RRW0PEP — сам робот Qrevo."
    },
    {
      id: "r-q10", topic: "partnumbers", difficulty: "hard",
      prompt: "В чём ключевое отличие партномеров Roborock от Dreame?",
      options: ["Нет отличий — одинаковая система", "У Roborock станция имеет отдельный партномер (EWFD...); у Dreame комплект указывается как +RC... дополнение", "У Dreame партномера нет вообще", "Roborock использует буквы, Dreame — цифры"],
      answer: 1,
      explain: "У Roborock станция = отдельный продукт со своим кодом (EWFD...) и своей сертификацией. У Dreame дополнительный модуль добавляется к базовому коду как +RC.... Разные подходы к идентификации."
    },
    {
      id: "r-q11", topic: "series", difficulty: "medium",
      prompt: "В чём разница между Q-серией и S-серией Roborock?",
      options: ["Только в названии", "Q — средний класс с LiDAR по доступной цене; S — премиальная классика с более развитой навигацией и камерами у старших моделей", "S дешевле Q", "Q — Saros, S — Qrevo"],
      answer: 1,
      explain: "Q-серия = доступный средний класс с LiDAR (Q7, Q8, Q10). S-серия = премиальная классика (S7, S8, S8 MaxV Ultra). У старших S есть камера ReactiveAI. S8 MaxV Ultra — топ S-серии."
    },
    {
      id: "r-q12", topic: "catalog", difficulty: "medium",
      prompt: "Клиент сравнивает Qrevo Curv (63 000 ₽) и Qrevo Edge (59 000 ₽). Как объяснить разницу?",
      options: ["Curv дороже — значит лучше, брать Curv", "Edge — акцент на тонком корпусе и преодолении порогов; Curv — акцент на AdaptiLift и мощности. Выбор зависит от планировки квартиры", "Одинаковые — брать дешевле (Edge)", "Curv — старая модель, Edge — новее"],
      answer: 1,
      explain: "Edge = тонкий корпус + пороги. Curv = AdaptiLift для препятствий + мощность. Если у клиента много порогов и узкие проходы — Edge. Если важна мощность и подъём — Curv."
    },
    {
      id: "r-q13", topic: "mistakes", difficulty: "medium",
      prompt: "Поставщик предлагает «Roborock Qrevo» и «Roborock Qrevo S» — одна и та же модель?",
      options: ["Да — Qrevo и Qrevo S одно и то же", "Нет — Qrevo S (QX1PEC, 7 000 Pa) и Qrevo (RRW0PEP, 12 000 Pa, FlexiArm) — разные аппаратные платформы", "Только разные цвета", "Qrevo S это Qrevo старого поколения"],
      answer: 1,
      explain: "Qrevo S (QX1PEC) и Qrevo (RRW0PEP) — разные партномера, разные характеристики (7 000 vs 12 000 Pa), разные станции. Несмотря на похожие названия — разные платформы."
    },
    {
      id: "r-q14", topic: "suffixes", difficulty: "easy",
      prompt: "Что означает суффикс «Combo» у Roborock F25 ACE Combo?",
      options: ["Комплект расходников на год", "Комбинированное устройство: робот-пылесос + ручной пылесос в единой системе", "Combo = Complete у Dreame", "Несколько цветов на выбор"],
      answer: 1,
      explain: "Combo = робот + ручной пылесос в одной системе с общей зарядной базой. Для клиентов, которым нужны оба типа уборки: и автономная роботом, и ручная."
    },
    {
      id: "r-q15", topic: "mistakes", difficulty: "hard",
      prompt: "Почему нельзя заказывать запчасти на «Roborock Qrevo» без указания партномера?",
      options: ["Можно — все Qrevo одинаковые", "Qrevo S (QX1PEC) и Qrevo (RRW0PEP) разные платформы — запчасти несовместимы. Нужен точный партномер с шильдика", "Запчастей для Qrevo нет вообще", "Достаточно серийного номера"],
      answer: 1,
      explain: "Qrevo S и Qrevo — разные аппаратные платформы с разными запчастями. Без партномера с шильдика гарантирована ошибка при заказе комплектующих."
    },
    {
      id: "r-q16", topic: "series", difficulty: "easy",
      prompt: "Клиент хочет робота Roborock «с руками, который убирает носки». Что предложить?",
      options: ["Saros 20 Sonic — самый мощный", "Qrevo 2 Pro — топовый Qrevo", "Saros Z70 — единственная модель с манипулятором OmniGrip", "S8 MaxV Ultra — с камерой"],
      answer: 2,
      explain: "Saros Z70 — единственная модель с OmniGrip манипулятором. Складной 5-осевой «рычаг» захватывает и убирает небольшие предметы. Уникальная функция на рынке."
    },
    {
      id: "r-q17", topic: "suffixes", difficulty: "medium",
      prompt: "Roborock S8 MaxV Ultra: расшифруй каждый суффикс правильно.",
      options: ["S8 = серия, Max = максимальная мощность, V = version, Ultra = ультрапрочный", "S8 = серия S8, MaxV = камера+ReactiveAI (Max Versatility), Ultra = полная станция самообслуживания", "S8 = 8 сенсоров, MaxV = мощная вибрация", "MaxV Ultra = просто маркетинговое название"],
      answer: 1,
      explain: "S8 = модель в S-серии. MaxV (Max Versatility) = камера + ReactiveAI для распознавания объектов. Ultra = полнофункциональная станция (автосбор, мойка, сушка). Три независимых суффикса."
    },
    {
      id: "r-q18", topic: "catalog", difficulty: "medium",
      prompt: "Какой из этих роботов Roborock есть в каталоге AppMi по самой доступной цене?",
      options: ["Saros Z70 — 79 000 ₽", "Qrevo Curv — 63 000 ₽", "Qrevo Edge — 59 000 ₽", "Qrevo 2 Pro"],
      answer: 2,
      explain: "Qrevo Edge — 59 000 ₽, самая доступная позиция Roborock в нашем каталоге. Qrevo Curv — 63 000 ₽, Saros Z70 — 79 000 ₽."
    },
    {
      id: "r-q19", topic: "mistakes", difficulty: "hard",
      prompt: "Что нужно проверить при получении Roborock с Multifunctional Dock, чтобы убедиться в совместимости для клиента с водопроводом?",
      options: ["Только цвет и мощность", "Тип станции: Tank version (ручные баки) или Refill & Drainage System (подключение к трубам) — это разные конструкции", "Только партномер робота", "Год производства"],
      answer: 1,
      explain: "Два типа станций: Tank = ручные баки для воды и грязной воды. Refill & Drainage = подключение к водопроводу и канализации. Клиент с трубами нужен второй тип — уточняй при заказе."
    },
    {
      id: "r-q20", topic: "series", difficulty: "medium",
      prompt: "Клиент сравнивает Dreame L60 Pro Ultra (83 500 ₽) и Roborock Saros Z70 (79 000 ₽). Как объяснить разницу?",
      options: ["Одинаковые — брать дешевле", "L60 Pro Ultra — топ L-серии Dreame с Ultra-станцией; Saros Z70 — Roborock с уникальным манипулятором OmniGrip. Разные сильные стороны", "Dreame всегда лучше Roborock", "Saros дороже — значит лучше"],
      answer: 1,
      explain: "L60 Pro Ultra: акцент на мощной Ultra-станции, горячая мойка швабры. Saros Z70: уникальный манипулятор для подбора предметов, 22 000 Pa. Разные сценарии использования — нужно понять приоритеты клиента."
    }
  ]
};
