'use strict';
const wishes = [
 'Пусть каждый день приносит хотя бы одну причину улыбнуться.',
 'Пусть здоровье и хорошее самочувствие всегда будут рядом.',
 'Пусть впереди будет много красивых дорог и новых открытий.',
 'Пусть любимые люди чаще собираются за одним столом.',
 'Пусть для прогулок всегда находится время.',
 'Пусть море дарит спокойствие, а солнце — тепло.',
 'Пусть утро начинается с хорошего настроения.',
 'Пусть в жизни будет больше приятных сюрпризов.',
 'Пусть каждый новый год открывает что-то прекрасное.',
 'Пусть хватает сил на всё, что хочется попробовать.',
 'Пусть рядом будут люди, с которыми легко и тепло.',
 'Пусть маленькие мечты исполняются так же часто, как большие.',
 'Пусть поездки оставляют самые добрые воспоминания.',
 'Пусть в доме всегда будет уютно.',
 'Пусть любимые блюда будут ещё вкуснее в хорошей компании.',
 'Пусть у каждого дня будет свой маленький праздник.',
 'Пусть красота природы радует в любое время года.',
 'Пусть будет больше вечеров, которые не хочется заканчивать.',
 'Пусть всё важное получается спокойно и легко.',
 'Пусть жизнь чаще даёт повод сказать: «Как же хорошо!»',
 'Пусть солнечных дней будет больше — и за окном, и в душе.',
 'Пусть для себя всегда остаётся время.',
 'Пусть самые тёплые объятия находят тебя каждый день.',
 'Пусть случайные прогулки приводят в удивительные места.',
 'Пусть будет меньше спешки и больше удовольствия от жизни.',
 'Пусть смех звучит чаще любых тревог.',
 'Пусть хорошие новости приходят неожиданно.',
 'Пусть самые красивые закаты ещё ждут впереди.',
 'Пусть близкие радуют вниманием и заботой.',
 'Пусть мечты не откладываются на потом.',
 'Пусть каждый отдых дарит лёгкость и новые силы.',
 'Пусть встречи с любимыми людьми случаются чаще.',
 'Пусть новые места становятся любимыми.',
 'Пусть сердце будет спокойно, а настроение — светлым.',
 'Пусть хватает смелости выбирать то, что радует именно тебя.',
 'Пусть прекрасные мгновения превращаются в долгие воспоминания.',
 'Пусть даже обычный день иногда становится особенным.',
 'Пусть прогулки дарят вдохновение и тихую радость.',
 'Пусть поводов для благодарности будет всё больше.',
 'Пусть в жизни находится место для приятного безделья.',
 'Пусть впереди будет много ужинов с видом на что-нибудь прекрасное.',
 'Пусть любое путешествие заканчивается желанием отправиться в следующее.',
 'Пусть тепло любимых людей согревает в любую погоду.',
 'Пусть планы сбываются, а неожиданности бывают добрыми.',
 'Пусть каждый день напоминает, как сильно тебя любят.',
 'Пусть можно будет чаще просто остановиться и насладиться моментом.',
 'Пусть жизнь дарит больше возможностей, чем поводов сомневаться.',
 'Пусть этот год станет началом множества счастливых историй.',
 'Пусть рядом всегда будет тот, с кем хочется делиться счастьем.',
 'Пусть следующие 50 будут полны любви, радости и красивых приключений.'
];
let index = 0;
const wishText = document.getElementById('wish-text');
const wishIndex = document.getElementById('wish-index');
function showWish(next) { index = (next + wishes.length) % wishes.length; wishText.textContent = wishes[index]; wishIndex.textContent = String(index + 1).padStart(2, '0'); }
document.getElementById('next-wish').addEventListener('click', () => showWish(index + 1));
document.getElementById('previous-wish').addEventListener('click', () => showWish(index - 1));
document.getElementById('random-wish').addEventListener('click', () => showWish(index + 1 + Math.floor(Math.random() * (wishes.length - 1))));
const dialog = document.getElementById('surprise-dialog');
const celebrationLayer = document.getElementById('confetti');
const celebrationMessage = document.getElementById('celebration-message');
const celebrationWishes = [
 'Пусть счастья будет столько же, сколько звёзд на небе! ✧',
 'Ещё больше улыбок, объятий и прекрасных мгновений! ♡',
 'Пусть каждый новый день будет маленьким праздником! ✧',
 'Пусть впереди ждут самые красивые путешествия! ♡',
 'Пусть любовь и радость всегда будут рядом! ✧'
];
let celebrationIndex = 0;
let cleanupTimer;
function celebrate() {
 celebrationMessage.textContent = celebrationWishes[celebrationIndex];
 celebrationIndex = (celebrationIndex + 1) % celebrationWishes.length;
 celebrationLayer.replaceChildren(); clearTimeout(cleanupTimer);
 if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
 celebrationLayer.style.setProperty('--fall-distance', (dialog.clientHeight + 60) + 'px');
 const colors = ['#c89574', '#87946c', '#dfbd86', '#f6e8c8', '#ae7259'];
 for (let i = 0; i < 65; i++) {
  const piece = document.createElement('span'); piece.className = 'confetti-piece'; piece.textContent = i % 4 === 0 ? '♡' : '✧';
  piece.style.left = Math.random() * 100 + '%'; piece.style.color = colors[i % colors.length];
  piece.style.setProperty('--duration', 3 + Math.random() * 3 + 's'); piece.style.setProperty('--drift', (Math.random() - .5) * 220 + 'px'); piece.style.setProperty('--rotation', (Math.random() - .5) * 720 + 'deg');
  piece.style.animationDelay = Math.random() * .6 + 's'; celebrationLayer.append(piece);
 }
 cleanupTimer = setTimeout(() => celebrationLayer.replaceChildren(), 7000);
}
document.getElementById('open-surprise').addEventListener('click', () => { dialog.showModal(); document.body.style.overflow = 'hidden'; celebrate(); });
document.getElementById('close-surprise').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { document.body.style.overflow = ''; celebrationLayer.replaceChildren(); clearTimeout(cleanupTimer); });
dialog.addEventListener('click', e => { if (e.target === dialog) { const rect = dialog.getBoundingClientRect(); if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) dialog.close(); } });
document.getElementById('celebrate').addEventListener('click', celebrate);
