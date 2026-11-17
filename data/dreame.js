// ═══════════════════════════════════════════════════════════════
// 🤖 DREAME — База знаний по роботам-пылесосам
// AppMi Category Trainer | v1.0
// Источник: прайс Roborock-Dreame-Deerma 17.09.2026 + экспертиза
// ═══════════════════════════════════════════════════════════════

const DREAME_KB = {
  brand: "Dreame",
  brandKey: "dreame",
  brandColor: "#00B4D8",
  logo: "🤖",

  // ── 1. ЛИНЕЙКИ ──────────────────────────────────────────────
  series: [
    {
      id: "F", name: "F-серия", emoji: "🟢",
      positioning: "Доступная линейка. Простая навигация, базовая уборка. Нет полноценной станции самообслуживания. Отличный выбор для старта с роботом-пылесосом.",
      priceRange: "до 22 500 ₽",
      keyModels: ["F10", "F10 Plus", "F21 Plus"],
      levelOrder: 1, color: "#10b981"
    },
    {
      id: "D", name: "D-серия", emoji: "🔵",
      positioning: "Базовый и средне-бюджетный сегмент. Есть модели с полноценной станцией (Ultra), но без максимального набора L-серии. Хорошее соотношение цена/функции.",
      priceRange: "18 000 – 38 000 ₽",
      keyModels: ["D20", "D20 Plus", "D20 Pro", "D20 Ultra", "D30 Ultra", "D10S Pro"],
      levelOrder: 2, color: "#3b82f6"
    },
    {
      id: "L", name: "L-серия", emoji: "🟣",
      positioning: "Средний и верхне-средний класс. Развитая навигация (LiDAR), влажная уборка, станция самообслуживания. Основная боевая линейка Dreame по объёму продаж.",
      priceRange: "44 000 – 83 500 ₽",
      keyModels: ["L40 Ultra CE", "L40S Ultra", "L40S Pro Ultra", "L50 Ultra CE", "L50 Ultra", "L60 Ultra", "L60 Pro Ultra"],
      levelOrder: 3, color: "#8b5cf6"
    },
    {
      id: "X", name: "X-серия", emoji: "🔴",
      positioning: "Флагманы Dreame. Максимальный набор функций: полная Ultra-станция, лучшая навигация, обход препятствий, горячая мойка швабры. Топ ассортимента.",
      priceRange: "66 000 – 107 000 ₽",
      keyModels: ["X40 Ultra Complete", "X50 Ultra Complete", "X50 Master", "X60 Ultra Complete", "X60 Master"],
      levelOrder: 4, color: "#ef4444"
    },
    {
      id: "Aqua", name: "Aqua-серия", emoji: "💧",
      positioning: "Специализация на влажной уборке. Роликовая мойка пола вместо стандартной швабры. Идеальна для твёрдых полов (плитка, паркет). Не для ковров.",
      priceRange: "под заказ",
      keyModels: ["Aqua10 Ultra Roller Complete"],
      levelOrder: 2, color: "#06b6d4"
    }
  ],

  // ── 2. КАТАЛОГ МОДЕЛЕЙ ───────────────────────────────────────
  catalog: [
    // F-серия
    { id: "F10-w",   name: "Dreame F10",        series: "F", suffixes: [],       region: "RU", color: "White", price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—", features: ["Базовая уборка", "Простая навигация", "Без станции"],           positioning: "Начальный уровень F-серии" },
    { id: "F10-b",   name: "Dreame F10",        series: "F", suffixes: [],       region: "RU", color: "Black", price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—", features: ["Базовая уборка", "Простая навигация", "Без станции"],           positioning: "F10 в чёрном цвете" },
    { id: "F10p",    name: "Dreame F10 Plus",   series: "F", suffixes: ["Plus"], region: "RU", color: "White", price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—", features: ["Улучшенная щётка vs F10", "Простая навигация"],                 positioning: "F10 с улучшенной щёткой" },
    { id: "F21p",    name: "Dreame F21 Plus",   series: "F", suffixes: ["Plus"], region: "RU", color: "White", price: 22500, inStock: true,  inOurCatalog: true,  isNew: true,  partnum: "—", features: ["Новый дизайн 2026", "Улучшенная навигация", "Влажная уборка"], positioning: "Актуальная доступная новинка F-серии" },
    // D-серия
    { id: "D20-w",   name: "Dreame D20",        series: "D", suffixes: [],         region: "RU", color: "White", price: 18000, inStock: true,  inOurCatalog: true,  isNew: false, partnum: "—", features: ["Базовая уборка", "Простая навигация", "Без станции"],                   positioning: "Самая доступная модель D-серии" },
    { id: "D20-b",   name: "Dreame D20",        series: "D", suffixes: [],         region: "RU", color: "Black", price: 18000, inStock: true,  inOurCatalog: true,  isNew: false, partnum: "—", features: ["Те же характеристики что White", "Чёрный корпус"],                    positioning: "D20 в чёрном цвете" },
    { id: "D20p",    name: "Dreame D20 Plus",   series: "D", suffixes: ["Plus"],   region: "RU", color: "White", price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—", features: ["Улучшенная щётка vs D20", "Простая навигация"],                         positioning: "D20 с улучшенной щёткой" },
    { id: "D20pr",   name: "Dreame D20 Pro",    series: "D", suffixes: ["Pro"],    region: "RU", color: "White", price: 20000, inStock: true,  inOurCatalog: true,  isNew: false, partnum: "—", features: ["Усиленное всасывание", "Расширенная навигация", "Влажная уборка"],     positioning: "Продвинутее D20 по мощности и навигации" },
    { id: "D20u",    name: "Dreame D20 Ultra",  series: "D", suffixes: ["Ultra"],  region: "RU", color: "White", price: 34000, inStock: true,  inOurCatalog: true,  isNew: false, partnum: "—", features: ["Станция автосбора пыли", "Мойка швабры", "Автодолив воды"],            positioning: "Топ D-серии — со станцией" },
    { id: "D30u",    name: "Dreame D30 Ultra",  series: "D", suffixes: ["Ultra"],  region: "RU", color: "White", price: 38000, inStock: true,  inOurCatalog: true,  isNew: true,  partnum: "—", features: ["Новейший D", "Улучшенная навигация", "Полная станция Ultra"],          positioning: "Флагман D-серии — почти L-уровень по цене" },
    { id: "D10sp",   name: "Dreame D10S Pro",   series: "D", suffixes: ["Pro"],    region: "EU", color: "Black", price: 21000, inStock: true,  inOurCatalog: true,  isNew: false, partnum: "—", features: ["Лазерная LiDAR навигация", "Влажная уборка", "EU-версия"],            positioning: "D10S с расширенными функциями и LiDAR" },
    // L-серия
    { id: "L10sp",   name: "Dreame L10S Pro",         series: "L", suffixes: ["Pro"],           region: "EU", color: "Black", price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—",        features: ["LiDAR навигация", "Станция самоочистки", "Влажная уборка"],         positioning: "L10S с улучшенной щёткой и станцией" },
    { id: "L40ce",   name: "Dreame L40 Ultra CE",     series: "L", suffixes: ["Ultra", "CE"],   region: "CE", color: "White", price: 44000, inStock: true,  inOurCatalog: true,  isNew: false, partnum: "—",        features: ["Станция Ultra", "Автосбор пыли", "Мойка швабры", "CE-сертификат"], positioning: "Доступный вход в Ultra-уровень L-серии" },
    { id: "L40eu",   name: "Dreame L40",               series: "L", suffixes: [],                region: "EU", color: "White", price: 0,     inStock: false, inOurCatalog: false, isNew: false, partnum: "—",        features: ["L-серия без полной Ultra-станции"],                                 positioning: "L40 без станции — базовая L" },
    { id: "L40su",   name: "Dreame L40S Ultra",        series: "L", suffixes: ["Ultra"],         region: "RU", color: "White", price: 55000, inStock: true,  inOurCatalog: true,  isNew: true,  partnum: "—",        features: ["Обновлённый L40", "Станция Ultra", "Улучшенная щётка"],            positioning: "L40 нового поколения — актуальная замена L40" },
    { id: "L40spu",  name: "Dreame L40S Pro Ultra",    series: "L", suffixes: ["Pro", "Ultra"],  region: "RU", color: "White", price: 66000, inStock: true,  inOurCatalog: true,  isNew: false, partnum: "—",        features: ["Расширенная навигация", "Pro-щётка", "Полная станция Ultra"],       positioning: "Топ L40-поколения" },
    { id: "L50cew",  name: "Dreame L50 Ultra CE",      series: "L", suffixes: ["Ultra", "CE"],   region: "CE", color: "White", price: 49000, inStock: true,  inOurCatalog: true,  isNew: true,  partnum: "RLL53SE",  features: ["28 000 Pa всасывание", "Мойка швабры 100°C", "AceClean DryBoard"], positioning: "Лучшая цена для Ultra-уровня в каталоге", keyDiff: "CE дешевле AE (68 000), но другой партномер — разные запчасти" },
    { id: "L50ceb",  name: "Dreame L50 Ultra CE",      series: "L", suffixes: ["Ultra", "CE"],   region: "CE", color: "Black", price: 49000, inStock: true,  inOurCatalog: true,  isNew: true,  partnum: "RLL53SE",  features: ["Те же характеристики что White CE", "Чёрный корпус"],              positioning: "L50 Ultra CE в чёрном цвете — тот же RLL53SE" },
    { id: "L50u",    name: "Dreame L50 Ultra",         series: "L", suffixes: ["Ultra"],         region: "RU", color: "White", price: 68000, inStock: true,  inOurCatalog: true,  isNew: false, partnum: "RLL94CE",  features: ["TriCut Brush 3.0", "Мойка 100°C", "AceClean DryBoard", "5 200 mAh"],positioning: "Основная (не-CE) версия L50 Ultra", keyDiff: "RLL94CE — другой партномер чем CE-версия (RLL53SE)" },
    { id: "L50spu",  name: "Dreame L50S Pro Ultra",    series: "L", suffixes: ["Pro", "Ultra"],  region: "RU", color: "White", price: 0,     inStock: false, inOurCatalog: false, isNew: true,  partnum: "RLL88HE",  features: ["Обновлённый L50 Pro", "Улучшенная навигация"],                     positioning: "Топ L50S-поколения (под заказ)" },
    { id: "L60uw",   name: "Dreame L60 Ultra",         series: "L", suffixes: ["Ultra"],         region: "RU", color: "White", price: 69400, inStock: true,  inOurCatalog: true,  isNew: true,  partnum: "—",        features: ["Новейшее поколение L", "Расширенная навигация", "Полная станция"], positioning: "Актуальная L60 Ultra — новинка 2026" },
    { id: "L60uae",  name: "Dreame L60 Ultra AE",      series: "L", suffixes: ["Ultra", "AE"],   region: "AE", color: "White", price: 0,     inStock: false, inOurCatalog: false, isNew: true,  partnum: "—",        features: ["AE-регион", "Иные настройки и сертификация"],                     positioning: "L60 Ultra AE-версия (нет в наличии)" },
    { id: "L60puw",  name: "Dreame L60 Pro Ultra",     series: "L", suffixes: ["Pro", "Ultra"],  region: "RU", color: "White", price: 83500, inStock: true,  inOurCatalog: true,  isNew: true,  partnum: "—",        features: ["Топ L60-поколения", "Pro-навигация", "Максимальная станция"],      positioning: "Флагман L-серии 2026" },
    { id: "L60pub",  name: "Dreame L60 Pro Ultra",     series: "L", suffixes: ["Pro", "Ultra"],  region: "RU", color: "Black", price: 83500, inStock: true,  inOurCatalog: true,  isNew: true,  partnum: "—",        features: ["Те же характеристики что White", "Чёрный корпус"],                 positioning: "L60 Pro Ultra в чёрном цвете" },
    // X-серия
    { id: "X40uc",   name: "Dreame X40 Ultra Complete", series: "X", suffixes: ["Ultra", "Complete"], region: "EU", color: "White", price: 66000, inStock: true,  inOurCatalog: true,  isNew: false, partnum: "—",       features: ["Флагман X40", "Полная станция", "Расширенный комплект", "Лучший обход препятствий"], positioning: "Флагман предыдущего поколения X" },
    { id: "X50uc",   name: "Dreame X50 Ultra Complete", series: "X", suffixes: ["Ultra", "Complete"], region: "RU", color: "Black", price: 79000, inStock: true,  inOurCatalog: true,  isNew: false, partnum: "RLX84LE", features: ["Флагман X50", "Расширенный комплект Complete", "Максимальный обход препятствий"], positioning: "Флагман X50-поколения в полной комплектации" },
    { id: "X50m",    name: "Dreame X50 Master",         series: "X", suffixes: ["Master"],            region: "RU", color: "Black", price: 79500, inStock: true,  inOurCatalog: true,  isNew: false, partnum: "—",       features: ["Топ X50", "Master-комплект выше Complete", "Все возможные функции X50"],           positioning: "Высшая комплектация X50 — превосходит Complete" },
    { id: "X60ucw",  name: "Dreame X60 Ultra Complete", series: "X", suffixes: ["Ultra", "Complete"], region: "RU", color: "White", price: 98500, inStock: true,  inOurCatalog: true,  isNew: true,  partnum: "—",       features: ["Флагман X60", "Полный комплект Complete", "Лучшая навигация 2026"],                 positioning: "Новинка: X60 в полной комплектации" },
    { id: "X60ucb",  name: "Dreame X60 Ultra Complete", series: "X", suffixes: ["Ultra", "Complete"], region: "RU", color: "Black", price: 98500, inStock: true,  inOurCatalog: true,  isNew: true,  partnum: "—",       features: ["Те же характеристики что White", "Чёрный корпус"],                                  positioning: "X60 Ultra Complete в чёрном цвете" },
    { id: "X60m",    name: "Dreame X60 Master",         series: "X", suffixes: ["Master"],            region: "RU", color: "Black", price: 107000,inStock: true,  inOurCatalog: true,  isNew: true,  partnum: "—",       features: ["ТОП всего ассортимента Dreame", "Master = максимальная комплектация", "Все функции X60"], positioning: "Самый дорогой и функциональный Dreame в каталоге" },
    // Aqua
    { id: "Aq10",    name: "Dreame Aqua10 Ultra Roller Complete", series: "Aqua", suffixes: ["Ultra", "Roller", "Complete"], region: "RU", color: "White", price: 0, inStock: false, inOurCatalog: false, isNew: false, partnum: "—", features: ["Роликовая мойка пола", "Акцент на влажной уборке", "Не для ковров"], positioning: "Специализированный робот для мытья твёрдых полов" }
  ],

  // ── 3. СУФФИКСЫ ─────────────────────────────────────────────
  suffixes: [
    { suffix: "Ultra",    meaning: "Полная станция самообслуживания: автосбор пыли, мойка и сушка швабры, автодолив воды и чистящего средства.", example: "L50 Ultra, X60 Ultra, D20 Ultra", category: "station" },
    { suffix: "Pro",      meaning: "Более продвинутая версия базовой модели: усиленное всасывание, лучшая щётка или улучшенная навигация. Выше базовой, но ниже Ultra в той же линейке.", example: "D20 Pro, D10S Pro, L40S Pro Ultra", category: "version" },
    { suffix: "Master",   meaning: "Высшая комплектация флагмана X-серии. Выше Ultra Complete по функциям или комплекту аксессуаров. Master > Complete > Ultra.", example: "X50 Master, X60 Master", category: "version" },
    { suffix: "Complete", meaning: "Расширенный комплект: дополнительные расходники (фильтры, швабры, мешки) и/или модуль автодозирования чистящего средства (RC...).", example: "X50 Ultra Complete, X60 Ultra Complete, Aqua10 Ultra Roller Complete", category: "set" },
    { suffix: "Plus",     meaning: "Небольшое улучшение базовой модели: лучшая щётка, улучшенный фильтр или расширенный набор функций.", example: "D20 Plus, F10 Plus, F21 Plus", category: "version" },
    { suffix: "s",        meaning: "Обновлённая / расширенная версия в рамках поколения. L40S > L40, L10S > L10. Апгрейд щётки, навигации или станции.", example: "L10S Pro, L40S Ultra, L50S Pro Ultra", category: "version" },
    { suffix: "CE",       meaning: "Европейская сертификация (Conformité Européenne). Часто дешевле AE-версии, но другой партномер — другие запчасти и совместимость.", example: "L40 Ultra CE, L50 Ultra CE → RLL53SE", category: "region" },
    { suffix: "AE",       meaning: "Регион ОАЭ и Ближний Восток. Другой партномер даже при похожем названии. L50 Ultra AE (RLL51SE) ≠ L50 Ultra CE (RLL53SE).", example: "L50 Ultra AE, L60 Ultra AE", category: "region" },
    { suffix: "EU",       meaning: "Европейский рынок (общий). Может отличаться вилкой, блоком питания, языком приложения.", example: "L40 White EU, D10S Pro Black EU", category: "region" },
    { suffix: "Roller",   meaning: "Роликовая мойка пола — принципиально иной механизм влажной уборки. Только для твёрдых полов.", example: "Aqua10 Ultra Roller Complete", category: "nav" },
    { suffix: "NEW",      meaning: "Маркировка нового поступления в прайсе поставщика. НЕ является официальным суффиксом модели. В карточку товара писать нельзя.", example: "В прайсе: 'L60 Ultra White RU NEW'", category: "other" }
  ],

  // ── 4. ЧТО ЧИТАТЬ В ПАРТНОМЕРЕ ──────────────────────────────
  partnumberGuide: {
    brand: "Dreame",
    format: "R + буква_линейки + платформа + регион",
    example: "RLL53SE",
    parts: [
      { chars: "R",           meaning: "Робот-пылесос (Robot)" },
      { chars: "RL",          meaning: "Dreame (специфический префикс бренда)" },
      { chars: "3-я буква",   meaning: "Серия: L → L-серия, X → X-серия, D → D-серия, H → Aqua Roller, Z → Aqua Track" },
      { chars: "Цифры",       meaning: "Внутренняя платформа и поколение" },
      { chars: "2 буквы",     meaning: "Регион/сертификация: CE, SE, HE, LE, DE..." },
      { chars: "-1, -2, -6",  meaning: "Ревизия, рынок или изменение комплектации" },
      { chars: "+RC...",       meaning: "Дополнительный модуль (автодозирование средства)" }
    ],
    keyRule: "Одно маркетинговое имя ≠ один партномер. L50 Ultra CE (RLL53SE) и L50 Ultra AE (RLL51SE) — разные аппаратные версии с разными запчастями.",
    checkList: [
      "Полное имя: не 'L50 Ultra', а 'L50 Ultra CE' или 'L50 Ultra AE'",
      "Партномер с шильдика на дне робота (вида RLL.../RLX...)",
      "Суффикс -1, -6 и коды +RC... меняют комплектацию",
      "Регион влияет на блок питания, язык приложения, доступность функций"
    ],
    examples: [
      { partnum: "RLL53SE",         model: "Dreame L50 Ultra CE",         note: "RL=Dreame, L=L-серия, 53=платформа, SE=сертификация" },
      { partnum: "RLL51SE",         model: "Dreame L50 Ultra AE",         note: "Тот же L50, другой регион — другой партномер!" },
      { partnum: "RLL94CE",         model: "Dreame L50 Ultra (основная)", note: "CE в суффиксе здесь означает конфигурацию, не регион" },
      { partnum: "RLX84LE",         model: "Dreame X50 Ultra Complete",   note: "RLX = X-серия Dreame" },
      { partnum: "RLL53SE+RCLE0511",model: "L50 Ultra CE + модуль дозирования", note: "+RC = дополнительный модуль AutoDosing" }
    ]
  },

  // ── 5. ТИПИЧНЫЕ ОШИБКИ ──────────────────────────────────────
  commonMistakes: [
    {
      mistake: "«L50 Ultra CE и L50 Ultra — одна и та же модель»",
      correct: "Разные партномера (RLL53SE vs RLL94CE), разные цены (49 000 vs 68 000 ₽). CE — европейская сертификация, отдельная версия. Всегда уточняйте суффикс у поставщика."
    },
    {
      mistake: "«NEW в прайсе — часть официального названия модели»",
      correct: "NEW — маркировка нового поступления у поставщика. Официальное имя: 'Dreame L60 Ultra'. Писать 'L60 Ultra NEW' в карточке товара — ошибка."
    },
    {
      mistake: "«Ultra — это всегда самый топ»",
      correct: "В X-серии: Ultra < Ultra Complete < Master. X60 Master (107 000) выше X60 Ultra Complete (98 500). В L-серии Ultra = наличие полной станции, а не максимум."
    },
    {
      mistake: "«D20 Pro дороже D20 Ultra? Значит Pro лучше Ultra»",
      correct: "Pro = улучшенные характеристики базовой модели. Ultra = наличие станции самообслуживания. D20 Ultra (34 000) ВСЕГДА выше D20 Pro (20 000) по функциям — но дешевле X60 Master."
    },
    {
      mistake: "«Цена 0 в прайсе = модель снята с производства»",
      correct: "Цена 0 = временно нет в наличии / под заказ. Не значит 'бесплатно' и не значит 'снято с продажи'. Пример: L50S Pro Ultra NEW — 0 руб, но реальная новинка."
    },
    {
      mistake: "«Клиент хочет мыть паркет — берём L60 Pro Ultra»",
      correct: "Лучше сначала уточнить: только паркет и плитка без ковров? Тогда Aqua10 Ultra Roller специально для этого. Если есть ковры — да, L или X серия."
    },
    {
      mistake: "«Sufix s (строчная) = Special Edition»",
      correct: "'s' в Dreame означает обновлённое поколение. L40S — апгрейд L40, L10S — апгрейд L10. Это не Special, это upgrade."
    }
  ],

  // ── 6. ВОПРОСЫ ──────────────────────────────────────────────
  quiz: [
    {
      id: "d-q1", topic: "series", difficulty: "easy",
      prompt: "Менеджер видит в прайсе «Dreame X60 Master». Какая это серия и что она означает?",
      options: ["D-серия — базовый бюджетный уровень", "L-серия — средний класс со станцией", "X-серия — флагманы с максимальным набором функций", "F-серия — доступная линейка"],
      answer: 2,
      explain: "X-серия — флагманы Dreame. X60 Master (107 000 ₽) — топ всего ассортимента: максимальная станция, лучшая навигация, все возможные функции."
    },
    {
      id: "d-q2", topic: "series", difficulty: "easy",
      prompt: "Клиент ищет робота-пылесоса «чтобы начать, недорого, без лишних функций». Какую серию предложить в первую очередь?",
      options: ["X-серия — флагман, зато надёжно", "F-серия — доступная, простая навигация", "L60 Pro Ultra — топ, клиент не прогадает", "Aqua-серия — специализированная"],
      answer: 1,
      explain: "F-серия — правильный старт для клиента без опыта с роботами. F21 Plus есть в наличии за 22 500 ₽. Не нужно продавать флагман тому, кто только изучает категорию."
    },
    {
      id: "d-q3", topic: "series", difficulty: "medium",
      prompt: "Клиент говорит: «У меня везде плитка и паркет, никаких ковров. Хочу лучший вариант для мытья пола». Что предложить в первую очередь?",
      options: ["X60 Master — топ флагман", "D30 Ultra — хорошее соотношение цена/качество", "Aqua10 Ultra Roller Complete — специально для твёрдых полов", "L60 Ultra — L-серия со станцией"],
      answer: 2,
      explain: "Aqua-серия создана именно для этого сценария: роликовая мойка для твёрдых полов. Если ковров нет — это правильный выбор. Если есть ковры — Aqua не подойдёт, нужна L или X серия."
    },
    {
      id: "d-q4", topic: "suffixes", difficulty: "easy",
      prompt: "Что означает суффикс «Ultra» у роботов Dreame?",
      options: ["Просто маркетинговое слово без конкретного значения", "Максимальная мощность всасывания", "Наличие полной станции самообслуживания (автосбор, мойка, сушка, долив)", "Гусеничный привод для высоких порогов"],
      answer: 2,
      explain: "Ultra = полная станция самообслуживания. Это главный признак: автосбор пыли, мойка и сушка швабры, автодолив воды. Мощность тоже растёт, но Ultra = именно станция."
    },
    {
      id: "d-q5", topic: "suffixes", difficulty: "medium",
      prompt: "Правильная иерархия комплектаций X-серии Dreame (от базовой к топу):",
      options: ["Ultra → Master → Ultra Complete", "Ultra Complete → Ultra → Master", "Ultra → Ultra Complete → Master", "Master → Ultra → Ultra Complete"],
      answer: 2,
      explain: "В X-серии: Ultra (базовая флагманская) < Ultra Complete (расширенный комплект) < Master (топовая комплектация). X60 Master (107 000) > X60 Ultra Complete (98 500)."
    },
    {
      id: "d-q6", topic: "suffixes", difficulty: "medium",
      prompt: "Чем отличается Dreame L40S Ultra (55 000 ₽) от Dreame L40 Ultra CE (44 000 ₽)?",
      options: ["Только цветом корпуса — характеристики одинаковые", "L40S — обновлённое поколение L40 (суффикс 's'), CE — региональная версия оригинала", "CE-версия лучше по характеристикам", "L40S — это L40 в CE-сертификации"],
      answer: 1,
      explain: "'s' означает апгрейд поколения: L40S — новее и лучше L40. CE — региональная сертификация L40. L40S > L40 по поколению и оснащению, отсюда разница в цене."
    },
    {
      id: "d-q7", topic: "suffixes", difficulty: "hard",
      prompt: "Поставщик называет товар «Dreame L50 Ultra» без уточнений. Почему этого недостаточно для точного заказа?",
      options: ["Достаточно — L50 Ultra это однозначная модель", "Нужно уточнить только цвет корпуса", "Нужен регион/сертификация (CE / AE / без суффикса) — это разные партномера и цены", "Нужна только дата производства"],
      answer: 2,
      explain: "L50 Ultra CE (RLL53SE, 49 000 ₽) и L50 Ultra без суффикса (RLL94CE, 68 000 ₽) — разные модели с разными ценами и запчастями. Всегда уточняйте суффикс региона."
    },
    {
      id: "d-q8", topic: "partnumbers", difficulty: "medium",
      prompt: "На дне робота код RLL53SE. Что это за модель?",
      options: ["Dreame X50 Ultra Complete", "Dreame D30 Ultra", "Dreame L50 Ultra CE", "Dreame L60 Pro Ultra"],
      answer: 2,
      explain: "RLL53SE: R=робот, RL=Dreame, L=L-серия, 53=платформа, SE=сертификация. Это Dreame L50 Ultra CE — официально подтверждено в декларации соответствия."
    },
    {
      id: "d-q9", topic: "partnumbers", difficulty: "hard",
      prompt: "RLL51SE и RLL53SE — в чём разница?",
      options: ["Ничем — одинаковые модели", "RLL51SE = L50 Ultra AE (Ближний Восток), RLL53SE = L50 Ultra CE — разные региональные версии", "RLL51SE старше на одно поколение", "Разные цвета корпуса"],
      answer: 1,
      explain: "RLL51SE — L50 Ultra AE (Ближний Восток), RLL53SE — L50 Ultra CE (Европа). Одно маркетинговое имя, но разные аппаратные версии. Запчасти несовместимы."
    },
    {
      id: "d-q10", topic: "partnumbers", difficulty: "hard",
      prompt: "Что означает код «RLL53SE + RCLE0511» в документах Dreame?",
      options: ["Две разные несвязанные модели", "Робот L50 Ultra CE + дополнительный модуль автодозирования чистящего средства", "Ревизия RC — улучшенная версия робота", "Гарантийный код + серийный номер"],
      answer: 1,
      explain: "+RC... = дополнительный модуль. RCLE0511 — модуль автодозирования (Auto-Dosing). L50 Ultra CE с этим кодом = комплект с автоматической подачей чистящего средства."
    },
    {
      id: "d-q11", topic: "catalog", difficulty: "easy",
      prompt: "Какой самый дорогой робот-пылесос Dreame в актуальном каталоге AppMi?",
      options: ["Dreame L60 Pro Ultra (83 500 ₽)", "Dreame X50 Master (79 500 ₽)", "Dreame X60 Ultra Complete (98 500 ₽)", "Dreame X60 Master (107 000 ₽)"],
      answer: 3,
      explain: "X60 Master — 107 000 ₽, абсолютный топ ассортимента Dreame. X60 Ultra Complete — 98 500 ₽. L60 Pro Ultra — 83 500 ₽. Порядок: X60 Master > X60 UC > X50 Master > X50 UC."
    },
    {
      id: "d-q12", topic: "catalog", difficulty: "medium",
      prompt: "Клиент хочет войти в Ultra-уровень (полная станция) по минимальной цене. Лучший вариант?",
      options: ["D30 Ultra (38 000 ₽)", "L50 Ultra CE White или Black (49 000 ₽)", "L40S Ultra (55 000 ₽)", "X40 Ultra Complete (66 000 ₽)"],
      answer: 1,
      explain: "L50 Ultra CE (White или Black) — 49 000 ₽. Это самый доступный Ultra-уровень с полноценной L-серийной станцией в каталоге. D30 Ultra (38 000) дешевле, но это D-серия — станция попроще."
    },
    {
      id: "d-q13", topic: "catalog", difficulty: "medium",
      prompt: "X50 Master (79 500 ₽) или X50 Ultra Complete (79 000 ₽) — какой выбрать клиенту и почему?",
      options: ["Ultra Complete — комплект с аксессуарами всегда лучше", "Master — выше по комплектации и функциям, разница всего 500 ₽", "Одинаковые — брать дешевле (Ultra Complete)", "Только по цвету корпуса"],
      answer: 1,
      explain: "Master > Ultra Complete в иерархии X-серии. При разнице в 500 ₽ Master даёт более высокий уровень комплектации и функций. Выбор очевиден."
    },
    {
      id: "d-q14", topic: "catalog", difficulty: "easy",
      prompt: "Цена 0 рублей в прайсе означает:",
      options: ["Товар бесплатный — акция", "Товар снят с производства навсегда", "Временно нет в наличии / под заказ", "Ошибка в прайсе"],
      answer: 2,
      explain: "0 руб = временно нет в наличии или под заказ. Не значит 'снято с продажи'. Пример: Aqua10 Ultra Roller Complete — 0 руб, но реально существующая модель."
    },
    {
      id: "d-q15", topic: "mistakes", difficulty: "medium",
      prompt: "Менеджер пишет в карточке товара «Dreame L60 Ultra NEW». Что здесь неверно?",
      options: ["Всё правильно — NEW помогает покупателям", "NEW — маркировка поставщика, не часть официального названия модели", "Нужно писать «L60 Ultra 2026» вместо NEW", "Ничего — это коммерческое название"],
      answer: 1,
      explain: "NEW — пометка в прайсе о новом поступлении. Официальное название: «Dreame L60 Ultra». Добавлять NEW в карточку товара — ошибка, это вводит покупателя в заблуждение."
    },
    {
      id: "d-q16", topic: "mistakes", difficulty: "hard",
      prompt: "Поставщик предлагает «Dreame L50 Ultra» за 51 000 ₽. Менеджер сверяет с нашим прайсом и видит L50 Ultra CE по 49 000 ₽ и L50 Ultra по 68 000 ₽. Что делать?",
      options: ["Брать — цена между двумя вариантами, всё логично", "Уточнить партномер: 49 000 — это CE (RLL53SE), 68 000 — основная (RLL94CE). 51 000 — возможно CE", "Это подделка — цена не совпадает", "Брать за 51 000 — выгодная цена"],
      answer: 1,
      explain: "Без партномера невозможно понять какую именно версию предлагает поставщик. 51 000 за CE-версию — переплата (у нас 49 000). Всегда запрашивай полный партномер с шильдика."
    },
    {
      id: "d-q17", topic: "series", difficulty: "medium",
      prompt: "Правильная иерархия D-серии Dreame от доступной к топовой:",
      options: ["D20 Ultra → D20 Pro → D20 Plus → D20", "D20 → D20 Plus → D20 Pro → D20 Ultra → D30 Ultra", "D20 Pro → D20 Ultra → D30 Ultra → D20 Plus", "D30 Ultra → D20 Ultra → D20 → D20 Pro"],
      answer: 1,
      explain: "D20 (18 000) < D20 Plus < D20 Pro (20 000) < D20 Ultra (34 000) < D30 Ultra (38 000). Цифра поколения и суффикс определяют уровень. D30 — новее и лучше D20."
    },
    {
      id: "d-q18", topic: "suffixes", difficulty: "medium",
      prompt: "Dreame L50 Ultra CE White и Dreame L50 Ultra CE Black — это:",
      options: ["Две разные модели с разными характеристиками", "Одна модель (RLL53SE) в двух цветах, характеристики идентичны", "CE White — улучшенная, CE Black — базовая", "Разные поколения L50"],
      answer: 1,
      explain: "Обе модели — L50 Ultra CE с партномером RLL53SE. Отличие только в цвете корпуса. Цена (49 000 ₽), характеристики и запчасти — одинаковые."
    },
    {
      id: "d-q19", topic: "catalog", difficulty: "hard",
      prompt: "Клиент смотрит X60 Ultra Complete (98 500 ₽). Хочет сэкономить, но остаться в флагманском сегменте. Что предложить?",
      options: ["X50 Master (79 500 ₽) — флагман X50-поколения, экономия ~19 000 ₽", "L60 Pro Ultra (83 500 ₽) — L-серия, дешевле X", "D30 Ultra (38 000 ₽) — экономия максимальная", "Нет альтернатив — X60 UC это X60 UC"],
      answer: 0,
      explain: "X50 Master (79 500) — флагман предыдущего поколения X. Экономия 19 000 ₽ при сохранении флагманского уровня. L60 Pro Ultra (83 500) — альтернатива, но это другая серия."
    },
    {
      id: "d-q20", topic: "mistakes", difficulty: "hard",
      prompt: "Клиент говорит: «Я видел в интернете Dreame L50 Ultra за 42 000 ₽, у вас 49 000 и 68 000 — почему так?». Объяснение менеджера:",
      options: ["«Мы дороже — у нас качество»", "«42 000 — скорее всего серая CE-версия без гарантии или другой регион. Наши 49 000 — это официальная CE с гарантией, 68 000 — основная версия с другим партномером»", "«В интернете подделки — не берите»", "«Такая цена невозможна, покажите ссылку»"],
      answer: 1,
      explain: "L50 Ultra существует в нескольких версиях с разными ценами: CE (49 000), AE, основная (68 000). 42 000 вероятно серая поставка CE-версии без официальной гарантии или другой регион. Менеджер объясняет разницу, а не обесценивает конкурента."
    }
  ]
};
