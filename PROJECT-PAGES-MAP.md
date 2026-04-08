# Карта страниц проекта «كازينو عربي أونلاين»

Документ для нейросетей и редакторов: по **URL** и **названию страницы** можно найти **файл исходника** и **состав блоков**. Язык контента на сайте — **арабский** (RTL), кроме технических имён файлов.

**Канонические URL (латиница)** заданы в `lib/routes.ts` и в основном дублируются в `app/sitemap.ts`. Часть путей на арабице — **редиректы** на латинские эквиваленты.

---

## Глобальная оболочка (все страницы)

| Что | Файл | Содержание |
|-----|------|------------|
| Корневой layout | `app/layout.tsx` | Шрифт Cairo, RTL, `dynamic = "force-dynamic"`, metadata по умолчанию, обёртка: `Header` → `main` → `Footer` |
| Шапка | `components/layout/Header.tsx` | Логотип + название сайта, навигация из `lib/nav-links.ts`, мобильное меню |
| Подвал | `components/layout/Footer.tsx` | Три колонки ссылок, дублируют часть навигации |

---

## Главная

| Поле | Значение |
|------|----------|
| **URL** | `/` |
| **Meta title** | أفضل كازينوهات الإنترنت المصرية لعام 2026 \| كازينو عربي أونلاين |
| **Файл** | `app/page.tsx` |
| **Metadata источник** | задана явно в `app/page.tsx` (`export const metadata`) |
| **Статус** | implemented |

**Блоки (сверху вниз):**

1. JSON-LD: `ItemList` (рейтинг казино) + `FAQPage` (из `mainFaq`, `lib/data/faq.ts`)
2. `HeroSection` — главный баннер
3. `TrustBar` — полоса доверия
4. `CasinoListSection` — карточки казино (`lib/data/casinos.ts`)
5. `TopTableSection` — таблица топа
6. `FreeGamesSection` — сетка игр (`lib/data/games.ts`)
7. `HowWeRateSection` — как оцениваем
8. `GameTypesSection` — типы игр
9. `MobileGamingSection` — мобильная игра
10. `TraditionalCasinosSection` — наземные казино Египта (картинки placeholder)
11. `BlacklistSection` — чёрный список (`blacklistedCasinos`)
12. `ResponsibleGamblingSection` — ответственная игра
13. `FaqSection` — FAQ главной

---

## Казино: деньги, новые, приложения, игры

### Реальные деньги

| Поле | Значение |
|------|----------|
| **URL** | `/real-money` |
| **Meta / H1** | см. `lib/data/pages/real-money.ts` → `realMoneyPageBundle` (title + hero.h1) |
| **Файл** | `app/real-money/page.tsx` |
| **Metadata источник** | bundle + helper: `pageMetadata(realMoneyPageBundle)` через `lib/seo/metadata.ts` |
| **Статус** | implemented |

**Блоки:** JSON-LD (`FAQPage` + `BreadcrumbList`); `PageHero`; `TopCasinosGrid` (рекомендуемые); `CasinoTable` (полная сравнительная таблица); сетка «ما الذي يميز تجربة المال الحقيقي؟»; `ContentSection` (Депозит/вывод, безопасность, популярные игры); список «كيفية البدء»; `MethodologySection`; `FaqAccordion`; CTA на `/new`; ссылки на slots/payment/games; `ResponsibleGamblingSection`.

---

### Новые казино

| Поле | Значение |
|------|----------|
| **URL** | `/new` |
| **Meta / H1** | `lib/data/pages/new-casinos.ts` → `newCasinosBundle` |
| **Файл** | `app/new/page.tsx` |
| **Metadata источник** | bundle + helper: `pageMetadata(newCasinosBundle)` |
| **Статус** | implemented |

**Блоки:** JSON-LD (`FAQPage` + `BreadcrumbList`); `PageHero`; сетка «كازينو جديد بارز» (4 карточки + бейдж «جديد 2026»); `TopCasinosGrid`; `CasinoTable`; сетка «لماذا يجرب اللاعبون…»; тексты про welcome bonus и чеклист; `MethodologySection`; FAQ; CTA на `/real-money`; ссылка на fastest withdrawals; `ResponsibleGamblingSection`.

---

### Приложения казино

| Поле | Значение |
|------|----------|
| **URL** | `/apps` |
| **Meta / H1** | `lib/data/pages/apps.ts` → `appsPageBundle` |
| **Файл** | `app/apps/page.tsx` |
| **Metadata источник** | bundle + helper: `pageMetadata(appsPageBundle)` |
| **Статус** | implemented |

**Блоки:** JSON-LD (`FAQPage` + `BreadcrumbList`); `PageHero`; сетка карточек казино; `CasinoTable`; блоки iOS / Android с кнопками «تنزيل»; `ContentSection` (установка); сравнение приложение vs браузер; критерии обзора; `MethodologySection`; FAQ; CTA на `/slots/mobile`; ссылка на `/payment`; `ResponsibleGamblingSection`.

---

### Центр игр (хаб)

| Поле | Значение |
|------|----------|
| **URL** | `/games` |
| **Meta / H1** | `lib/data/pages/games.ts` → `gamesPageBundle` |
| **Файл** | `app/games/page.tsx` |
| **Metadata источник** | bundle + helper: `pageMetadata(gamesPageBundle)` |
| **Статус** | implemented |

**Блоки:** JSON-LD (`FAQPage` + `BreadcrumbList`); `PageHero`; сетка категорий игр (ссылки на slots/roulette и т.д.); сетка `CasinoCard`; `CasinoTable`; две колонки free vs real; `ContentSection` (как выбрать игру); `MethodologySection`; FAQ; CTA на slots; ссылки roulette / real-money; `ResponsibleGamblingSection`.

---

## Слоты и мобильные слоты

### Слоты

| Поле | Значение |
|------|----------|
| **URL** | `/slots` |
| **Meta / H1** | `lib/data/pages/slots.ts` → `slotsPageBundle` |
| **Файл** | `app/slots/page.tsx` |
| **Metadata источник** | bundle + helper: `pageMetadata(slotsPageBundle)` |
| **Статус** | implemented |

**Блоки:** JSON-LD (`FAQPage` + `BreadcrumbList`); `PageHero`; `TopCasinosGrid` (сортировка по числу игр); `InfoCardsSection` (типы слотов); текст free vs real; сетка провайдеров; список про бонусы; советы как играть; таблица RTP (примеры); `CasinoTable`; FAQ; CTA на `/slots/mobile`; ссылки games/roulette; `ResponsibleGamblingSection`.

---

### Слоты на мобильном

| Поле | Значение |
|------|----------|
| **URL** | `/slots/mobile` |
| **Meta / H1** | `lib/data/pages/slots-mobile.ts` → `slotsMobileBundle` |
| **Файл** | `app/slots/mobile/page.tsx` |
| **Metadata источник** | bundle + helper: `pageMetadata(slotsMobileBundle)` |
| **Статус** | implemented |

**Блоки:** JSON-LD (`FAQPage` + `BreadcrumbList`); `PageHero`; тёмный инфо-блок про стабильность; `TopCasinosGrid`; `CasinoTable`; плюсы телефона; три колонки iOS/Android/браузер; списки игр и советов; FAQ; CTA на `/apps`; ссылка на `/slots`; `ResponsibleGamblingSection`.

---

## Рулетка

| Поле | Значение |
|------|----------|
| **URL** | `/roulette` |
| **Meta / H1** | `lib/data/pages/roulette.ts` → `roulettePageBundle` |
| **Файл** | `app/roulette/page.tsx` |
| **Metadata источник** | bundle + helper: `pageMetadata(roulettePageBundle)` |
| **Статус** | implemented |

**Блоки:** JSON-LD (`FAQPage` + `BreadcrumbList`); `PageHero`; сетка `CasinoCard`; карточки типов рулетки; сравнительная таблица типов; несколько `ContentSection` (демо, советы, real vs free); `MethodologySection`; FAQ; CTA на `/games`; ссылки slots/real-money; `ResponsibleGamblingSection`.

---

## Оплата и быстрый вывод

### Способы оплаты

| Поле | Значение |
|------|----------|
| **URL** | `/payment` |
| **Meta / H1** | `lib/data/pages/payment.ts` → `paymentPageBundle` |
| **Файл** | `app/payment/page.tsx` |
| **Metadata источник** | bundle + helper: `pageMetadata(paymentPageBundle)` |
| **Статус** | implemented |

**Блоки:** JSON-LD (`FAQPage` + `BreadcrumbList`); `PageHero`; `TopCasinosGrid`; HTML-таблица методов (`lib/data/payment-methods.ts`); `PaymentMethodsGrid`; `InfoCardsSection`; `ContentSection` (безопасность + список); `CasinoTable`; `MethodologySection`; FAQ; CTA на `/payment/fastest-withdrawals`; `ResponsibleGamblingSection`.

---

### Самый быстрый вывод

| Поле | Значение |
|------|----------|
| **URL** | `/payment/fastest-withdrawals` |
| **Meta / H1** | `lib/data/pages/fastest-withdrawals.ts` → `fastestWithdrawalsBundle` |
| **Файл страницы** | `app/payment/fastest-withdrawals/page.tsx` |
| **Основной контент** | `components/internal/FastWithdrawalsPageContent.tsx` |
| **Metadata источник** | bundle + helper: `pageMetadata(fastestWithdrawalsBundle)` |
| **Статус** | implemented |

**Блоки:** JSON-LD (`FAQPage` + `BreadcrumbList`); `PageHero`; сетка казино с бейджами скорости; сетка «أسرع طرق السحب»; `CasinoTable` (отсортированная); факторы задержек; советы; секция чёрного списка (`BlacklistCard`); `MethodologySection`; FAQ; CTA на `/payment`; `ResponsibleGamblingSection`.

---

## Блэкджек (отдельный путь на арабице)

| Поле | Значение |
|------|----------|
| **URL** | `/بلاك-جاك` |
| **Meta title** | أفضل كازينوهات البلاك جاك 2026 \| كازينو عربي أونلاين |
| **Файл** | `app/بلاك-جاك/page.tsx` |
| **Metadata источник** | задана явно в `app/بلاك-جاك/page.tsx` (`export const metadata`) |
| **Статус** | implemented |

**Блоки:** JSON-LD FAQ; `InnerLayout` (h1, описание, хлебные крошки); секция «الاستراتيجية الأساسية» (3 карточки Stand/Hit/Double); `FreeGamesSection` (фильтр blackjack/live из `gamesList`); `CasinoListSection`; `FaqSection`.

---

## Бесплатные игры

| Поле | Значение |
|------|----------|
| **URL** | `/العاب-مجانية` |
| **Meta title** | наследуется из `app/layout.tsx` (отдельного `metadata` в странице нет — компонент `"use client"`) |
| **Файл** | `app/العاب-مجانية/page.tsx` |
| **Metadata статус** | inherited metadata; missing dedicated metadata |
| **Статус** | implemented |

**Блоки:** тёмный hero «العب مجانًا بدون تسجيل»; липкие фильтры по категориям; сетка карточек игр из `gamesList` (эмодзи вместо картинок в превью).

Примечание: желательно вынести metadata в server wrapper или `generateMetadata` позже.

---

## Редиректы (без собственного контента)

Эти URL не имеют собственного контента и используются как redirects/aliases на канонические латинские маршруты. Их не следует рассматривать как отдельные индексируемые страницы; в основной `app/sitemap.ts` они не добавляются.

| URL | Куда | Файл |
|-----|------|------|
| `/كازينو-حقيقي` | `/real-money` | `app/كازينو-حقيقي/page.tsx` |
| `/سلوتس` | `/slots` | `app/سلوتس/page.tsx` |
| `/سلوتس/موبايل` | `/slots/mobile` | `app/سلوتس/موبايل/page.tsx` |
| `/كازينو-جديد` | `/new` | `app/كازينو-جديد/page.tsx` |
| `/العاب-كازينو` | `/games` | `app/العاب-كازينو/page.tsx` |
| `/تطبيقات` | `/apps` | `app/تطبيقات/page.tsx` |
| `/روليت` | `/roulette` | `app/روليت/page.tsx` |
| `/طرق-الدفع` | `/payment` | `app/طرق-الدفع/page.tsx` |
| `/طرق-الدفع/اسرع-سحب` | `/payment/fastest-withdrawals` | `app/طرق-الدفع/اسرع-سحب/page.tsx` |
| `/casino-games` | `/games` | `app/casino-games/page.tsx` |
| `/new-casinos` | `/new` | `app/new-casinos/page.tsx` |
| `/payment/fast-withdrawal` | `/payment/fastest-withdrawals` | `app/payment/fast-withdrawal/page.tsx` |

---

## SEO и служебные файлы

| Файл | Назначение |
|------|------------|
| `app/robots.ts` | Правила для роботов, ссылка на sitemap |
| `app/sitemap.ts` | Список **только латинских** маршрутов; строится по массиву `routes` внутри файла на основе `SITE_URL` |
| `lib/routes.ts` | Централизованный список канонических маршрутов (`ROUTES`) для страниц/ссылок/bundle'ов |
| `lib/seo/metadata.ts` | Хелпер `pageMetadata()` для страниц с bundle + helper для breadcrumb JSON-LD names |
| `lib/data/pages/*.ts` | Тексты SEO, hero, FAQ по разделам |

Страницы, которые используют `lib/seo/metadata.ts` через `pageMetadata(...)`: `/real-money`, `/new`, `/apps`, `/games`, `/slots`, `/slots/mobile`, `/roulette`, `/payment`, `/payment/fastest-withdrawals`.

---

## Данные, которые переиспользуются на многих страницах

| Файл | Что внутри |
|------|------------|
| `lib/data/casinos.ts` | `casinoList`, `blacklistedCasinos` (имена, бонусы, логотипы-URL) |
| `lib/data/games.ts` | `gamesList` (превью игр) |
| `lib/data/faq.ts` | `mainFaq` (FAQ главной) |
| `lib/data/payment-methods.ts` | `paymentMethodsTable` (payment methods data, эмодзи-иконки) |

---

## Как ссылаться на правки в промпте

Примеры:

- «Правка текста hero на странице **/payment**» → `lib/data/pages/payment.ts` (`paymentPageBundle.hero`) или `app/payment/page.tsx`.
- «Таблица казино на **/slots**» → блок с `CasinoTable` в `app/slots/page.tsx`; сами строки — `lib/data/casinos.ts`.
- «FAQ на **/roulette**» → `lib/data/pages/roulette.ts` (`faq` в bundle).
- «Чёрный список на главной» → `BlacklistSection` + `lib/data/casinos.ts` (`blacklistedCasinos`).

Имя файла для копирования в нейросеть: **`PROJECT-PAGES-MAP.md`** (лежит в **корне репозитория** рядом с `package.json`).
