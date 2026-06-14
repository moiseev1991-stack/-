#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const src = path.join(root, 'text');
const dest = path.join(root, 'lib', 'data', 'articles');

const ARTICLE_TO_KEY = {
  '1xbet': '1xbet',
  '888starz': '888starz',
  'bet365': 'bet365',
  'jackpot-city-casino': 'jackpot-city',
  'ruby-fortune-casino': 'ruby-fortune',
  'spin-casino': 'spin-casino',
  'اسرع-كازينو-سحب': 'fastest-withdrawal',
  'العاب-قمار': 'gambling-games',
  'العاب-قمار-بمال-حقيقي-فودافون-كاش': 'vodafone-cash',
  'العاب-كازينو': 'games',
  'العاب-كازينو-لربح-المال-الحقيقي': 'real-money',
  'برنامج-مراهنات': 'betting-apps',
  'بلاك-جاك-اون-لاين': 'blackjack',
  'بونص-ترحيبي': 'bonuses',
  'تطبيقات-الكازينو': 'apps',
  'روليت-اون-لاين': 'roulette',
  'سلوتس-اون-لاين': 'slots',
  'سلوتس-موبايل': 'slots-mobile',
  'طرق-الدفع-كازينو': 'payment',
  'كازينو-اون-لاين': 'home',
  'كازينو-بدون-توثيق': 'no-verification',
  'كازينو-جديد': 'new',
  'كازينو-مباشر': 'live-casino',
  'كازينو-مصر': 'casino-egypt',
  'لعبة-الطيارة': 'aviator',
  'مراهنات': 'betting',
  'ميلبيت': 'melbet',
};

if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

const files = fs.readdirSync(src).filter(f => f.startsWith('статья '));
const used = new Set();
const result = [];
for (const f of files) {
  const stripped = f.replace(/^статья +/, '').replace(/_eg_ar_cairo.*$/, '');
  const key = ARTICLE_TO_KEY[stripped];
  if (!key) {
    console.error(`No mapping for "${stripped}" (file ${f})`);
    continue;
  }
  used.add(key);
  const content = fs.readFileSync(path.join(src, f), 'utf8');
  const out = path.join(dest, `${key}.md`);
  fs.writeFileSync(out, content);
  result.push({ key, srcSlug: stripped, file: out });
}

for (const k of Object.values(ARTICLE_TO_KEY)) {
  if (!used.has(k)) console.error(`Mapping target ${k} has no source file`);
}

console.log(JSON.stringify(result, null, 2));
