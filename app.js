/* にほんご 75 — interactive Japanese quiz */
/* ───────────── storage ───────────── */
const store = {
  get(k){ try{ const v = localStorage.getItem("nh75_"+k); return v==null?null:JSON.parse(v);}catch(e){return null;} },
  set(k,v){ try{ localStorage.setItem("nh75_"+k, JSON.stringify(v)); }catch(e){} }
};
/* ───────────── Firebase ───────────── */
const firebaseConfig = {
  apiKey: "AIzaSyDf_b40lEuHvI9NUvCNtx6et1TcWXQ644I",
  authDomain: "srt-people.firebaseapp.com",
  databaseURL: "https://srt-people-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "srt-people",
  storageBucket: "srt-people.firebasestorage.app",
  messagingSenderId: "246383141664",
  appId: "1:246383141664:web:57b87898c477771ff3ad45"
};
const ROOT = "nihongo75";
let db = null;
try { firebase.initializeApp(firebaseConfig); db = firebase.database(); } catch (e) { console.warn("Firebase unavailable, local mode", e); }
const inc = n => db ? firebase.database.ServerValue.increment(n) : n;

/* ───────────── i18n ───────────── */
const T = {
  ko:{tagline:"일상회화 75단어·75문장",tabHome:"퀴즈",tabStudy:"학습",tabStats:"오답통계",tabRank:"랭킹",
    heroA:"75개 문장을", heroB:"입으로 말할 수 있을 때까지", heroP:"15개 생활회화 그룹 · 핵심 단어 75개 · 암기 문장 75개. 문제를 풀수록 내 약점이 기록됩니다.",
    kAnswered:"푼 문항",kAcc:"정답률",kWeak:"약점 문항",
    modeT:"문제 유형",modeS:"골라서 섞어 풀어도 좋아요",
    m_mix:"모두 섞기",m_mixS:"여섯 유형을 랜덤으로",m_w2m:"단어 → 뜻",m_w2mS:"일본어 단어의 뜻 고르기",m_m2w:"뜻 → 단어",m_m2wS:"뜻을 보고 일본어 고르기",
    m_s2m:"문장 → 뜻",m_s2mS:"예문 해석하기",m_m2s:"뜻 → 문장",m_m2sS:"말하고 싶은 문장 고르기",m_blank:"빈칸 채우기",m_blankS:"예문 속 핵심어 넣기",m_listen:"듣고 고르기",m_listenS:"발음을 듣고 뜻 고르기",
    grpT:"학습 범위",grpS:"그룹을 하나 이상 선택",selAll:"전체 선택",selNone:"선택 해제",stage:"단계",day:"일차",
    start:"퀴즈 시작",startWeak:"오답 복습",
    qOf:"문제",combo:"콤보",
    q_w2m:"이 단어의 뜻은?",q_m2w:"이 뜻의 일본어는?",q_s2m:"이 문장의 뜻은?",q_m2s:"이 말을 일본어로 하면?",q_blank:"빈칸에 들어갈 말은?",q_listen:"들리는 문장의 뜻은?",
    listen:"🔊 듣기",listenAgain:"🔊 다시 듣기",right:"정답!",wrong:"아쉬워요",answer:"정답",
    myRec:"내 기록",allRec:"전체 학습자",tries:"시도",wrongs:"틀림",errRate:"오답률",
    next:"다음 문제",finish:"결과 보기",
    resT:"라운드 완료",resWrong:"이번에 틀린 문항",resNoWrong:"모두 맞혔어요! 完璧!",again:"한 번 더",home:"처음으로",
    stamps:["もう少し","いいね","すごい","完璧"],
    studyT:"그룹별 학습",studyP:"단어와 문장을 소리 내어 읽어 보세요. 카드를 누르면 뒤집힙니다.",list:"목록",cards:"카드",tapFlip:"눌러서 뒤집기",prev:"이전",nextC:"다음",quizThis:"이 그룹 퀴즈",
    statsT:"문항별 오답 통계",statsP:"시도 횟수 대비 틀린 횟수입니다. 오답률이 높은 문항부터 다시 풀어 보세요.",mine:"내 통계",everyone:"전체 학습자",
    thItem:"문항",thTries:"시도",thWrong:"틀림",thRate:"오답률",noData:"아직 기록이 없어요. 퀴즈를 풀어 보세요!",resetMine:"내 기록 초기화",resetQ:"정말 내 기록을 모두 지울까요?",
    rankT:"친구들과 함께",rankP:"정답 1개 = 10 XP. 꾸준히 풀면 순위가 올라가요.",rankOff:"랭킹은 온라인 연결이 필요해요.",me:"나",
    nickTitle:"닉네임을 정해 주세요",nickDesc:"같은 닉네임으로 접속하면 어느 기기에서든 기록이 이어집니다.",nickSave:"시작하기",nickPh:"예: 김교수",
    weakNone:"아직 틀린 문항이 없어요. 먼저 퀴즈를 풀어 보세요.",pickGroup:"그룹을 하나 이상 선택해 주세요.",synced:"온라인 저장 중",local:"이 기기에만 저장 중",
    footer:"출처: 일본국제교류기금 교재 이로도리·마루고토 생활회화 상황 참고 · 발음 표기는 학습용 근사치"},
  en:{tagline:"75 everyday words & sentences",tabHome:"Quiz",tabStudy:"Study",tabStats:"Mistakes",tabRank:"Ranking",
    heroA:"Learn 75 sentences", heroB:"until they come out naturally", heroP:"15 everyday topics · 75 key words · 75 example sentences. Every answer is recorded so you can see your weak spots.",
    kAnswered:"Answered",kAcc:"Accuracy",kWeak:"Weak items",
    modeT:"Question types",modeS:"Pick one or mix them",
    m_mix:"Mix all",m_mixS:"All six types at random",m_w2m:"Word → Meaning",m_w2mS:"Choose the meaning",m_m2w:"Meaning → Word",m_m2wS:"Choose the Japanese word",
    m_s2m:"Sentence → Meaning",m_s2mS:"Translate the sentence",m_m2s:"Meaning → Sentence",m_m2sS:"Pick what you'd say",m_blank:"Fill the blank",m_blankS:"Complete the sentence",m_listen:"Listening",m_listenS:"Hear it, choose the meaning",
    grpT:"Topics",grpS:"Select one or more",selAll:"Select all",selNone:"Clear",stage:"Stage",day:"Day",
    start:"Start quiz",startWeak:"Review mistakes",
    qOf:"Q",combo:"combo",
    q_w2m:"What does this word mean?",q_m2w:"Which Japanese word means this?",q_s2m:"What does this sentence mean?",q_m2s:"How do you say this in Japanese?",q_blank:"What goes in the blank?",q_listen:"What does the sentence you hear mean?",
    listen:"🔊 Listen",listenAgain:"🔊 Play again",right:"Correct!",wrong:"Not quite",answer:"Answer",
    myRec:"You",allRec:"All learners",tries:"tries",wrongs:"wrong",errRate:"error rate",
    next:"Next",finish:"See results",
    resT:"Round complete",resWrong:"Missed this round",resNoWrong:"Perfect round! 完璧!",again:"Play again",home:"Home",
    stamps:["もう少し","いいね","すごい","完璧"],
    studyT:"Study by topic",studyP:"Read each word and sentence out loud. Tap a card to flip it.",list:"List",cards:"Cards",tapFlip:"Tap to flip",prev:"Prev",nextC:"Next",quizThis:"Quiz this topic",
    statsT:"Mistakes by item",statsP:"Wrong answers out of total tries. Start reviewing from the highest error rate.",mine:"Mine",everyone:"All learners",
    thItem:"Item",thTries:"Tries",thWrong:"Wrong",thRate:"Error",noData:"No records yet. Try a quiz!",resetMine:"Reset my records",resetQ:"Delete all your records?",
    rankT:"Learn with friends",rankP:"1 correct answer = 10 XP. Keep going to climb the board.",rankOff:"Ranking needs an online connection.",me:"me",
    nickTitle:"Choose a nickname",nickDesc:"Use the same nickname on any device to continue your progress.",nickSave:"Let's go",nickPh:"e.g. Hana",
    weakNone:"No mistakes yet. Try a quiz first.",pickGroup:"Please select at least one topic.",synced:"Saving online",local:"Saving on this device only",
    footer:"Based on everyday situations from the Japan Foundation's IRODORI and MARUGOTO courses · Pronunciation guides are approximate"}
};
let LANG = (new URLSearchParams(location.search).get("lang")) || store.get("lang") || ((navigator.language||"").startsWith("ko") ? "ko" : "en");
if (LANG !== "ko" && LANG !== "en") LANG = "ko";
function t(k){ return (T[LANG] && T[LANG][k]) ?? T.ko[k] ?? k; }
function mean(it){ return LANG === "en" ? it.en : it.ko; }
function smean(it){ return LANG === "en" ? it.sen : it.sko; }
function pron(it){ return LANG === "en" ? it.rm : it.kp; }
function spron(it){ return LANG === "en" ? it.srm : it.skp; }
function gname(g){ return LANG === "en" ? GROUPS[g].en : GROUPS[g].ko; }
function gsub(g){ return LANG === "en" ? GROUPS[g].subEn : GROUPS[g].subKo; }


/* ───────────── state ───────────── */
const $app = document.getElementById("app");
const H = s => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const byId = Object.fromEntries(ITEMS.map(it => [it.id, it]));
const MODES = ["w2m", "m2w", "s2m", "m2s", "blank", "listen"];

let nick = store.get("nick") || "";
let nickKey = "";
let myStats = store.get("stats") || {};         // {id:{a,w}}
let profile = store.get("profile") || { xp: 0, answered: 0, correct: 0 };
let globalStats = {};
let online = false;
let sel = { groups: store.get("groups") || [0], mode: store.get("mode") || "mix" };
let quiz = null;
let tab = "home";
let studyState = { g: 0, view: "list", idx: 0, flipped: false };
let statsView = "mine", statsSort = "rate";

const keyOf = n => n.trim().replace(/[.#$\[\]\/]/g, "_").slice(0, 40) || "guest";

/* ───────────── TTS (모바일 대응) ─────────────
   1순위: 브라우저 내장 음성(speechSynthesis) + 일본어 음성이 있을 때
   2순위: 온라인 음성 파일(Google 번역 TTS)을 <audio>로 재생
          → 카카오톡·네이버·인스타 등 인앱 브라우저, 일본어 음성이 없는 안드로이드폰 대응 */
// 구글 음성은 Referer가 붙으면 404 → 이 페이지의 리퍼러 전송 끄기
try { if (!document.querySelector('meta[name="referrer"]')) { const m = document.createElement("meta"); m.name = "referrer"; m.content = "no-referrer"; document.head.appendChild(m); } } catch(e){}
let jaVoice = null, voicesLoaded = false;
const hasSynth = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
function pickVoice(){ if (!hasSynth) return; const vs = speechSynthesis.getVoices(); if (vs.length) voicesLoaded = true; jaVoice = vs.find(v => /ja[-_]JP/i.test(v.lang)) || vs.find(v => /^ja/i.test(v.lang)) || null; }
if (hasSynth) { pickVoice(); try { speechSynthesis.addEventListener("voiceschanged", pickVoice); } catch(e) { speechSynthesis.onvoiceschanged = pickVoice; } }
const canSpeak = () => true; // 내장 음성이 없어도 온라인 음성으로 재생 가능
const ttsAudio = new Audio(); ttsAudio.preload = "auto";
// iOS/안드로이드 자동재생 제한 해제: 첫 터치 때 오디오 잠금 해제
document.addEventListener("touchstart", function unlock(){
  try { ttsAudio.muted = true; ttsAudio.play().catch(()=>{}).finally(()=>{ ttsAudio.pause(); ttsAudio.muted = false; }); } catch(e){}
  if (hasSynth) { try { speechSynthesis.speak(new SpeechSynthesisUtterance("")); } catch(e){} }
  document.removeEventListener("touchstart", unlock);
}, { once: true, passive: true });
const isInApp = () => /KAKAOTALK|NAVER|Instagram|FBAN|FBAV|Line\/|DaumApps|wv\)/i.test(navigator.userAgent);
function openExternal(){
  const url = location.href;
  if (/KAKAOTALK/i.test(navigator.userAgent)) { location.href = "kakaotalk://web/openExternal?url=" + encodeURIComponent(url); return; }
  if (/Android/i.test(navigator.userAgent)) { location.href = "intent://" + url.replace(/^https?:\/\//, "") + "#Intent;scheme=https;package=com.android.chrome;end"; return; }
  toast("Safari/Chrome에서 열어 주세요");
}
// 미리 만들어 둔 음성 파일(audio/w0.mp3 = 0번 단어, audio/s0.mp3 = 0번 예문)
const AUDIO_MAP = {};
try { (window.ITEMS_RAW || []).forEach((r, i) => { AUDIO_MAP[String(r[2]).split("・")[0]] = "audio/w" + i + ".mp3"; AUDIO_MAP[r[7]] = "audio/s" + i + ".mp3"; }); } catch(e){}
let sayToken = 0;
function playUrl(url, rate, onFail){
  const my = ++sayToken;
  if (hasSynth) { try { speechSynthesis.cancel(); } catch(e){} }
  ttsAudio.onerror = () => { if (my === sayToken && onFail) onFail(); };   // 파일이 없거나 네트워크 오류
  ttsAudio.pause();
  ttsAudio.src = url;
  ttsAudio.playbackRate = (rate && rate < 0.9) ? 0.9 : 1;
  const pr = ttsAudio.play();
  if (pr && pr.catch) pr.catch(err => {
    if (my !== sayToken) return;                       // 다음 소리로 넘어가서 끊긴 것 → 정상
    if (err && err.name === "AbortError") return;
    if (err && err.name === "NotAllowedError") { toast("🔊 버튼을 눌러 들어 보세요"); return; }  // 자동재생 제한
    if (onFail) onFail();
  });
}
function sayGoogle(text, rate){
  playUrl("https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&client=tw-ob&q=" + encodeURIComponent(String(text).slice(0, 190)), rate,
    () => toast("🔇 음성을 불러오지 못했어요. 잠시 후 다시 눌러 주세요"));
}
function saySynth(text, rate){
  const useSynth = hasSynth && (jaVoice || (!voicesLoaded && /iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)));
  if (!useSynth) { sayGoogle(text, rate); return; }
  try {
    ++sayToken; ttsAudio.pause(); speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang = "ja-JP"; u.rate = rate || 0.9; if (jaVoice) u.voice = jaVoice;
    let started = false; u.onstart = () => { started = true; };
    u.onerror = () => { if (!started) sayGoogle(text, rate); };
    speechSynthesis.speak(u);
    setTimeout(() => { if (!started && !speechSynthesis.speaking) sayGoogle(text, rate); }, 1500);
  } catch(e) { sayGoogle(text, rate); }
}
function say(text, rate){
  if (!text) return;
  const f = AUDIO_MAP[text];
  if (f) playUrl(f, rate, () => saySynth(text, rate));   // 1순위: 사이트에 올려둔 음성 파일 (어느 폰·앱에서나 동작)
  else saySynth(text, rate);
}

function toast(msg){ const el = document.getElementById("toast"); el.textContent = msg; el.classList.add("show"); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove("show"), 1800); }
function applyStatic(){
  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-i]").forEach(el => el.textContent = t(el.dataset.i));
  document.getElementById("langKo").classList.toggle("on", LANG === "ko");
  document.getElementById("langEn").classList.toggle("on", LANG === "en");
  document.getElementById("nickInput").placeholder = t("nickPh");
  document.querySelectorAll("nav.tabs button").forEach(b => b.classList.toggle("on", b.dataset.tab === tab));
  document.getElementById("userName").textContent = nick || "-";
  document.getElementById("userXp").textContent = (profile.xp || 0) + " XP";
  const dot = document.getElementById("syncDot"); dot.className = "sync-dot " + (online ? "ok" : "err");
  document.getElementById("userPill").title = online ? t("synced") : t("local");
}
function setLang(l){
  LANG = l; store.set("lang", l);
  const u = new URL(location.href); u.searchParams.set("lang", l); history.replaceState(null, "", u);
  applyStatic(); render();
}
function go(name){ if (quiz && name !== "quiz") quiz = null; tab = name; applyStatic(); render(); window.scrollTo(0, 0); }
function render(){
  if (quiz) return renderQuiz();
  ({ home: renderHome, study: renderStudy, stats: renderStats, rank: renderRank })[tab]();
}
function rec(id){ const s = myStats[id] || {}; return { a: s.a || 0, w: s.w || 0 }; }
function grec(id){ const s = globalStats[id] || {}; return { a: s.a || 0, w: s.w || 0 }; }
const pct = (w, a) => a ? Math.round(w / a * 100) : 0;

/* ───────────── nickname ───────────── */
function openNick(){ const m = document.getElementById("nickModal"); m.classList.remove("hidden"); const i = document.getElementById("nickInput"); i.value = nick; setTimeout(() => i.focus(), 50); }
document.getElementById("nickInput").addEventListener("keydown", e => { if (e.key === "Enter") saveNick(); });
async function saveNick(){
  const v = document.getElementById("nickInput").value.trim();
  if (!v) return;
  const changed = v !== nick;
  nick = v; store.set("nick", v);
  document.getElementById("nickModal").classList.add("hidden");
  if (changed) { myStats = {}; profile = { xp: 0, answered: 0, correct: 0 }; }
  await connectUser();
  applyStatic(); render();
}

/* ───────────── Firebase sync ───────────── */
function withTimeout(p, ms){ return Promise.race([p, new Promise((_, r) => setTimeout(() => r(new Error("timeout")), ms))]); }
async function connectUser(){
  nickKey = keyOf(nick);
  if (!db) { online = false; return; }
  try {
    const snap = await withTimeout(db.ref(`${ROOT}/users/${nickKey}`).get(), 7000);
    const v = snap.val();
    if (v && v.stats) {
      myStats = v.stats; profile = Object.assign({ xp: 0, answered: 0, correct: 0 }, v.profile || {});
    } else if (Object.keys(myStats).length) {
      await db.ref(`${ROOT}/users/${nickKey}`).set({ stats: myStats, profile: Object.assign({}, profile, { name: nick }) });
      await db.ref(`${ROOT}/board/${nickKey}`).set({ name: nick, xp: profile.xp || 0, answered: profile.answered || 0, correct: profile.correct || 0 });
    } else {
      await db.ref(`${ROOT}/users/${nickKey}/profile`).update({ name: nick, created: firebase.database.ServerValue.TIMESTAMP });
    }
    store.set("stats", myStats); store.set("profile", profile);
    online = true;
    db.ref(`${ROOT}/global`).on("value", s => { globalStats = s.val() || {}; if (tab === "stats" && !quiz) renderStats(); });
  } catch (e) {
    console.warn("Firebase sync failed — local mode", e);
    online = false;
  }
}
function record(id, ok){
  const s = myStats[id] || { a: 0, w: 0 }; s.a = (s.a || 0) + 1; if (!ok) s.w = (s.w || 0) + 1; myStats[id] = s;
  profile.answered = (profile.answered || 0) + 1; if (ok) { profile.correct = (profile.correct || 0) + 1; profile.xp = (profile.xp || 0) + 10; }
  store.set("stats", myStats); store.set("profile", profile);
  // optimistic global
  const g = globalStats[id] || { a: 0, w: 0 }; g.a = (g.a || 0) + 1; if (!ok) g.w = (g.w || 0) + 1; globalStats[id] = g;
  if (db && online) {
    const u = {};
    u[`users/${nickKey}/stats/${id}/a`] = inc(1);
    u[`users/${nickKey}/stats/${id}/w`] = inc(ok ? 0 : 1);
    u[`users/${nickKey}/profile/answered`] = inc(1);
    u[`users/${nickKey}/profile/correct`] = inc(ok ? 1 : 0);
    u[`users/${nickKey}/profile/xp`] = inc(ok ? 10 : 0);
    u[`users/${nickKey}/profile/name`] = nick;
    u[`board/${nickKey}/name`] = nick;
    u[`board/${nickKey}/xp`] = inc(ok ? 10 : 0);
    u[`board/${nickKey}/answered`] = inc(1);
    u[`board/${nickKey}/correct`] = inc(ok ? 1 : 0);
    u[`global/${id}/a`] = inc(1);
    u[`global/${id}/w`] = inc(ok ? 0 : 1);
    db.ref(ROOT).update(u).catch(e => { console.warn(e); online = false; applyStatic(); });
  }
  applyStatic();
}

/* ───────────── HOME ───────────── */
function renderHome(){
  const tot = Object.values(myStats).reduce((s, x) => ({ a: s.a + (x.a || 0), w: s.w + (x.w || 0) }), { a: 0, w: 0 });
  const weak = ITEMS.filter(it => rec(it.id).w > 0).length;
  const acc = tot.a ? Math.round((tot.a - tot.w) / tot.a * 100) + "%" : "–";
  const modeBtns = ["mix", ...MODES].map(m =>
    `<button class="mode ${sel.mode === m ? "on" : ""}" onclick="setMode('${m}')"><b>${t("m_" + m)}</b><span>${t("m_" + m + "S")}</span></button>`).join("");
  let groupsHtml = "";
  [1, 2, 3].forEach(st => {
    groupsHtml += `<div class="stage-label">${LANG === "en" ? t("stage") + " " + st : st + t("stage")}</div><div class="groups">`;
    GROUPS.forEach((G, g) => {
      if (G.stage !== st) return;
      const its = ITEMS.filter(it => it.g === g);
      const a = its.reduce((s, it) => s + rec(it.id).a, 0), w = its.reduce((s, it) => s + rec(it.id).w, 0);
      const accG = a ? (a - w) / a * 100 : 0;
      const on = sel.groups.includes(g);
      groupsHtml += `<button class="grp ${on ? "on" : ""}" onclick="toggleGroup(${g})">
        <span class="chk">${on ? "✓" : ""}</span>
        <span class="day">${LANG === "en" ? t("day") + " " + (g + 1) : (g + 1) + t("day")}</span>
        <b>${H(gname(g))}</b>
        <span class="words jp">${its.map(i => H(i.word)).join(" · ")}</span>
        <span class="meter-row"><span class="meter"><i style="width:${Math.round(accG)}%"></i></span><span class="meter-v">${a ? Math.round(accG) + "%" : "–"}</span></span>
      </button>`;
    });
    groupsHtml += `</div>`;
  });
  $app.innerHTML = `
    <section class="hero">
      <h1>${t("heroA")}<br><span class="accent">${t("heroB")}</span></h1>
      <p>${t("heroP")}</p>
      <div class="kpis">
        <div class="card kpi"><b>${tot.a}</b><span>${t("kAnswered")}</span></div>
        <div class="card kpi"><b>${acc}</b><span>${t("kAcc")}</span></div>
        <div class="card kpi"><b>${weak}</b><span>${t("kWeak")}</span></div>
      </div>
    </section>
    <div class="section-t"><h2>${t("modeT")}</h2><span>${t("modeS")}</span></div>
    <div class="modes">${modeBtns}</div>
    <div class="section-t"><h2>${t("grpT")}</h2><span>${t("grpS")}</span></div>
    <div class="sel-bar"><button class="chipbtn" onclick="selAll(true)">${t("selAll")}</button><button class="chipbtn" onclick="selAll(false)">${t("selNone")}</button></div>
    ${groupsHtml}
    <div class="startbar">
      <button class="btn ghost" style="background:var(--card)" onclick="startQuiz('weak')">${t("startWeak")}</button>
      <button class="btn red" onclick="startQuiz('normal')">${t("start")} →</button>
    </div>
    <footer>${t("footer")}</footer>`;
}
function setMode(m){ sel.mode = m; store.set("mode", m); renderHome(); }
function toggleGroup(g){ const i = sel.groups.indexOf(g); if (i >= 0) sel.groups.splice(i, 1); else sel.groups.push(g); store.set("groups", sel.groups); renderHome(); }
function selAll(on){ sel.groups = on ? GROUPS.map((_, i) => i) : []; store.set("groups", sel.groups); renderHome(); }

/* ───────────── QUIZ ───────────── */
const ROUND = 10;
function startQuiz(kind, groupsOverride){
  let pool;
  if (kind === "weak") {
    const weak = ITEMS.filter(it => rec(it.id).w > 0).sort((a, b) => (rec(b.id).w / rec(b.id).a) - (rec(a.id).w / rec(a.id).a) || rec(b.id).w - rec(a.id).w);
    if (!weak.length) { toast(t("weakNone")); return; }
    pool = weak.slice(0, ROUND);
  } else {
    const gs = groupsOverride || sel.groups;
    if (!gs.length) { toast(t("pickGroup")); return; }
    pool = ITEMS.filter(it => gs.includes(it.g));
  }
  let seq = [];
  while (seq.length < ROUND) seq = seq.concat(shuffle(pool));
  seq = seq.slice(0, ROUND);
  // avoid back-to-back duplicates
  for (let i = 1; i < seq.length; i++) if (seq[i].id === seq[i - 1].id) { const j = seq.findIndex((x, k) => k > i && x.id !== seq[i].id); if (j > 0) [seq[i], seq[j]] = [seq[j], seq[i]]; }
  const modes = sel.mode === "mix" ? MODES.filter(m => m !== "listen" || canSpeak()) : [sel.mode];
  quiz = { kind, groups: groupsOverride || sel.groups.slice(), qs: seq.map(it => buildQ(it, modes[Math.floor(Math.random() * modes.length)])), i: 0, score: 0, combo: 0, best: 0, answered: false, wrongs: [] };
  tab = "home"; applyStatic(); renderQuiz(); window.scrollTo(0, 0);
}
function pickDistractors(it, n, keyFn, sameGroup){
  const seen = new Set([keyFn(it)]); const out = [];
  const cands = shuffle(sameGroup ? ITEMS.filter(x => x.g === it.g && x.id !== it.id) : ITEMS.filter(x => x.id !== it.id));
  if (!sameGroup) cands.sort((a, b) => (b.g === it.g) - (a.g === it.g) + (Math.random() - .5) * 1.2);
  for (const c of cands) { const k = keyFn(c); if (!seen.has(k)) { seen.add(k); out.push(c); } if (out.length >= n) break; }
  return out;
}
function buildQ(it, mode){
  let keyFn, sameGroup = false;
  switch (mode) {
    case "w2m": keyFn = x => x.ko; break;
    case "m2w": keyFn = x => x.word; break;
    case "s2m": case "listen": keyFn = x => x.sko; break;
    case "m2s": keyFn = x => x.s; break;
    case "blank": keyFn = x => x.blank; sameGroup = true; break;
  }
  const opts = shuffle([it, ...pickDistractors(it, 3, keyFn, sameGroup)]);
  return { it, mode, opts, pick: null };
}
function optLabel(q, o){
  switch (q.mode) {
    case "w2m": return `<span>${H(mean(o))}</span>`;
    case "m2w": return `<span class="jp" style="font-size:max(var(--min),calc(19px*var(--fs)))">${H(o.word)}<span class="sub">${H(o.reading !== o.word ? o.reading : "")}</span></span>`;
    case "s2m": case "listen": return `<span>${H(smean(o))}</span>`;
    case "m2s": return `<span class="jp" style="font-size:max(var(--min),calc(17px*var(--fs)))">${H(o.s)}</span>`;
    case "blank": return `<span class="jp" style="font-size:max(var(--min),calc(19px*var(--fs)))">${H(o.blank)}</span>`;
  }
}
function qPrompt(q){
  const it = q.it;
  switch (q.mode) {
    case "w2m": return `<div class="qbig jp">${H(it.word)}</div>${it.reading !== it.word ? `<div class="qread jp">${H(it.reading)}</div>` : ""}<button class="speak" onclick="say('${it.reading.split("・")[0]}')">${t("listen")}</button>`;
    case "m2w": return `<div class="qmid">${H(mean(it))}</div>`;
    case "s2m": return `<div class="qmid jp">${H(it.s)}</div><button class="speak" onclick="say(quiz.qs[quiz.i].it.s)">${t("listen")}</button>`;
    case "m2s": return `<div class="qmid">${H(smean(it))}</div>`;
    case "blank": {
      const i = it.s.indexOf(it.blank);
      const s = H(it.s.slice(0, i)) + `<span class="blank">　</span>` + H(it.s.slice(i + it.blank.length));
      return `<div class="qmid jp">${s}</div><div class="qhint">${H(smean(it))}</div>`;
    }
    case "listen": return `<button class="speak big" onclick="say(quiz.qs[quiz.i].it.s, .85)">${t("listenAgain")}</button>`;
  }
}
function renderQuiz(){
  const q = quiz.qs[quiz.i], it = q.it;
  const done = quiz.answered;
  const ok = done && q.pick === it.id;
  const r = rec(it.id), g = grec(it.id);
  $app.innerHTML = `
    <div class="qhead">
      <button class="qclose" onclick="go('home')" aria-label="close">✕</button>
      <div class="prog"><i style="width:${(quiz.i + (done ? 1 : 0)) / quiz.qs.length * 100}%"></i></div>
      <div class="combo">${quiz.combo >= 2 ? "🔥" + quiz.combo : ""}</div>
    </div>
    <div class="qtype">${t("qOf")} ${quiz.i + 1}/${quiz.qs.length} · ${H(gname(it.g))}</div>
    <div class="card qcard">${qPrompt(q)}</div>
    <div class="qtype" style="margin-top:14px;color:var(--ink2)">${t("q_" + q.mode)}</div>
    <div class="opts">${q.opts.map((o, k) => {
      let cls = "";
      if (done) { if (o.id === it.id) cls = "right"; else if (o.id === q.pick) cls = "wrong"; }
      return `<button class="opt ${cls}" ${done ? "disabled" : ""} onclick="answer('${o.id}')"><span class="k">${k + 1}</span>${optLabel(q, o)}</button>`;
    }).join("")}</div>
    ${done ? `
    <div class="feedback ${ok ? "ok" : "no"}">
      <div class="verdict ${ok ? "ok" : "no"}">${ok ? "○ " + t("right") : "✕ " + t("wrong")}</div>
      <div class="fb-s jp">${H(it.s)} <button class="mini" onclick="say(quiz.qs[quiz.i].it.s)">🔊</button></div>
      <div class="fb-p">${H(spron(it))}</div>
      <div class="fb-t">${H(smean(it))}</div>
      <div class="fb-w"><span class="jp"><b>${H(it.word)}</b>${it.reading !== it.word ? "（" + H(it.reading) + "）" : ""}</span> ${H(pron(it))} · ${H(mean(it))}</div>
      <div class="tally">
        <span>${t("myRec")}: ${t("tries")} <b>${r.a}</b> · ${t("wrongs")} <b>${r.w}</b> · ${t("errRate")} <b>${pct(r.w, r.a)}%</b></span>
        ${online ? `<span>${t("allRec")}: ${t("tries")} <b>${g.a}</b> · ${t("wrongs")} <b>${g.w}</b> · <b>${pct(g.w, g.a)}%</b></span>` : ""}
      </div>
    </div>
    <div class="nextbar"><button class="btn" id="nextBtn" onclick="nextQ()">${quiz.i + 1 < quiz.qs.length ? t("next") + " →" : t("finish")}</button></div>` : ""}
  `;
  if (!done && q.mode === "listen") setTimeout(() => say(it.s, .85), 250);
}
function answer(id){
  if (!quiz || quiz.answered) return;
  const q = quiz.qs[quiz.i]; q.pick = id; quiz.answered = true;
  const ok = id === q.it.id;
  if (ok) { quiz.score++; quiz.combo++; quiz.best = Math.max(quiz.best, quiz.combo); }
  else { quiz.combo = 0; quiz.wrongs.push(q.it); }
  record(q.it.id, ok);
  renderQuiz();
  if (ok) say(q.it.s);
  const fb = document.querySelector(".feedback"), nb = document.getElementById("nextBtn");
  if (fb && nb) { const r = nb.getBoundingClientRect(), navH = 96;
    if (r.bottom > window.innerHeight - navH) window.scrollBy({ top: Math.min(r.bottom - (window.innerHeight - navH), fb.getBoundingClientRect().top - 72), behavior: "smooth" }); }
}
function nextQ(){
  if (quiz.i + 1 < quiz.qs.length) { quiz.i++; quiz.answered = false; renderQuiz(); window.scrollTo(0, 0); }
  else renderResult();
}
function renderResult(){
  const s = quiz.score, n = quiz.qs.length, ratio = s / n;
  const stamp = t("stamps")[ratio === 1 ? 3 : ratio >= .8 ? 2 : ratio >= .5 ? 1 : 0];
  const uniq = [...new Map(quiz.wrongs.map(x => [x.id, x])).values()];
  const kind = quiz.kind, groups = quiz.groups;
  $app.innerHTML = `
    <div class="card result" style="margin-top:20px">
      <div class="muted" style="font-weight:700">${t("resT")}</div>
      <div class="stamp">${stamp}</div>
      <div class="score">${s}<small>/${n}</small></div>
      <div class="muted" style="margin-top:6px">+${s * 10} XP · ${t("combo")} ${quiz.best}</div>
    </div>
    <div class="section-t"><h2>${t("resWrong")}</h2></div>
    <div class="card">${uniq.length ? uniq.map(it => {
      const r = rec(it.id);
      return `<div class="witem"><div style="flex:1"><div class="jp" style="font-weight:700">${H(it.s)}</div><div class="muted" style="font-size:max(var(--min),calc(13px*var(--fs)))">${H(smean(it))}</div></div>
      <div class="num" style="font-size:max(var(--min),calc(12px*var(--fs)));text-align:right">${r.w}/${r.a}<br><span class="rate-hi">${pct(r.w, r.a)}%</span></div>
      <button class="mini" style="margin:0" onclick="say(byId['${it.id}'].s)">🔊</button></div>`;
    }).join("") : `<div class="empty">${t("resNoWrong")}</div>`}</div>
    <div class="startbar">
      <button class="btn ghost" style="background:var(--card)" onclick="go('home')">${t("home")}</button>
      <button class="btn red" id="againBtn">${t("again")} ↻</button>
    </div>`;
  document.getElementById("againBtn").onclick = () => startQuiz(kind, kind === "weak" ? null : groups);
  quiz = null;
}
document.addEventListener("keydown", e => {
  if (!quiz || document.activeElement.tagName === "INPUT") return;
  if (!quiz.answered && /^[1-4]$/.test(e.key)) { const q = quiz.qs[quiz.i]; const o = q.opts[+e.key - 1]; if (o) answer(o.id); }
  else if (quiz.answered && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); nextQ(); }
});

/* ───────────── STUDY ───────────── */
function renderStudy(){
  const g = studyState.g, its = ITEMS.filter(it => it.g === g);
  const chips = GROUPS.map((_, i) => `<button class="${i === g ? "on" : ""}" onclick="studyGroup(${i})">${i + 1}. ${H(gname(i))}</button>`).join("");
  let body;
  if (studyState.view === "list") {
    body = `<div class="card">${its.map(it => `
      <div class="study-item">
        <div class="si-top"><span class="si-word jp">${H(it.word)}</span>${it.reading !== it.word ? `<span class="si-read jp">${H(it.reading)}</span>` : ""}<span class="si-read">${H(pron(it))}</span><span class="si-mean">${H(mean(it))}</span>
        <button class="mini" onclick="say(byId['${it.id}'].reading.split('・')[0])">🔊</button></div>
        <div class="si-s jp">${H(it.s)} <button class="mini" style="margin-left:4px" onclick="say(byId['${it.id}'].s)">🔊</button></div>
        <div class="si-sp">${H(spron(it))} · ${H(smean(it))}</div>
      </div>`).join("")}</div>`;
  } else {
    const it = its[studyState.idx];
    body = `<div class="card flash" onclick="flip()">
      ${!studyState.flipped
        ? `<div class="qmid">${H(smean(it))}</div><div class="muted" style="font-size:max(var(--min),calc(13px*var(--fs)))">${H(mean(it))}</div><div class="muted" style="font-size:max(var(--min),calc(12px*var(--fs)));margin-top:10px">${t("tapFlip")} ↻</div>`
        : `<div class="qmid jp">${H(it.s)}</div><div class="fb-p">${H(spron(it))}</div><div class="fb-w jp">${H(it.word)}${it.reading !== it.word ? "（" + H(it.reading) + "）" : ""} · ${H(mean(it))}</div>`}
    </div>
    <div class="row" style="margin-top:10px">
      <button class="btn ghost" style="flex:1" onclick="card(-1)">← ${t("prev")}</button>
      <button class="btn ghost" onclick="say(byId['${it.id}'].s)">🔊</button>
      <button class="btn ghost" style="flex:1" onclick="card(1)">${t("nextC")} →</button>
    </div>
    <div class="muted" style="text-align:center;font-size:max(var(--min),calc(12px*var(--fs)));margin-top:8px">${studyState.idx + 1} / ${its.length}</div>`;
  }
  $app.innerHTML = `
    <section class="hero"><h1>${t("studyT")}</h1><p>${t("studyP")}</p></section>
    <div class="groupsel">${chips}</div>
    <div class="row" style="justify-content:space-between;margin-bottom:8px">
      <div><b>${LANG === "en" ? t("day") + " " + (g + 1) : (g + 1) + t("day")}</b> <span class="muted" style="font-size:max(var(--min),calc(13px*var(--fs)))">${H(gsub(g))}</span></div>
      <div class="seg"><button class="${studyState.view === "list" ? "on" : ""}" onclick="studyView('list')">${t("list")}</button><button class="${studyState.view === "cards" ? "on" : ""}" onclick="studyView('cards')">${t("cards")}</button></div>
    </div>
    ${body}
    <div class="startbar"><button class="btn red" onclick="startQuiz('normal',[${g}])">${t("quizThis")} →</button></div>`;
  const on = $app.querySelector(".groupsel .on"); if (on) on.scrollIntoView({ inline: "center", block: "nearest" });
}
function studyGroup(g){ studyState.g = g; studyState.idx = 0; studyState.flipped = false; renderStudy(); }
function studyView(v){ studyState.view = v; studyState.idx = 0; studyState.flipped = false; renderStudy(); }
function flip(){ studyState.flipped = !studyState.flipped; renderStudy(); if (studyState.flipped) say(ITEMS.filter(it => it.g === studyState.g)[studyState.idx].s); }
function card(d){ studyState.idx = (studyState.idx + d + 5) % 5; studyState.flipped = false; renderStudy(); }

/* ───────────── STATS ───────────── */
function renderStats(){
  const src = statsView === "mine" ? rec : grec;
  let rows = ITEMS.map(it => ({ it, ...src(it.id) })).filter(r => r.a > 0);
  const sorters = { rate: (a, b) => (b.w / b.a) - (a.w / a.a) || b.w - a.w, wrong: (a, b) => b.w - a.w, tries: (a, b) => b.a - a.a, no: (a, b) => a.it.no - b.it.no };
  rows.sort(sorters[statsSort]);
  const tot = rows.reduce((s, r) => ({ a: s.a + r.a, w: s.w + r.w }), { a: 0, w: 0 });
  const arrow = k => statsSort === k ? " ▾" : "";
  $app.innerHTML = `
    <section class="hero"><h1>${t("statsT")}</h1><p>${t("statsP")}</p></section>
    <div class="row" style="justify-content:space-between;margin:14px 0 10px">
      <div class="seg"><button class="${statsView === "mine" ? "on" : ""}" onclick="statsView='mine';renderStats()">${t("mine")}</button><button class="${statsView === "all" ? "on" : ""}" onclick="statsView='all';renderStats()" ${online ? "" : "disabled"}>${t("everyone")}</button></div>
      <span class="muted" style="font-size:max(var(--min),calc(13px*var(--fs)))">${t("tries")} ${tot.a} · ${t("wrongs")} ${tot.w} · ${pct(tot.w, tot.a)}%</span>
    </div>
    <div class="card tbl-wrap">${rows.length ? `
      <table class="tbl">
        <thead><tr>
          <th onclick="sortStats('no')">#${arrow("no")}</th><th>${t("thItem")}</th>
          <th class="num" onclick="sortStats('tries')">${t("thTries")}${arrow("tries")}</th>
          <th class="num" onclick="sortStats('wrong')">${t("thWrong")}${arrow("wrong")}</th>
          <th class="num" onclick="sortStats('rate')">${t("thRate")}${arrow("rate")}</th><th></th>
        </tr></thead>
        <tbody>${rows.map(r => { const p = pct(r.w, r.a); return `<tr>
          <td class="muted">${r.it.no}</td>
          <td><div class="jp" style="font-weight:700">${H(r.it.word)} <span class="muted" style="font-weight:400;font-size:max(var(--min),calc(12px*var(--fs)))">${H(mean(r.it))}</span></div><div class="jp muted" style="font-size:max(var(--min),calc(12px*var(--fs)))">${H(r.it.s)}</div></td>
          <td class="num">${r.a}</td><td class="num">${r.w}</td>
          <td class="num ${p >= 50 ? "rate-hi" : ""}">${p}%</td>
          <td style="width:70px"><div class="bar"><i style="width:${p}%"></i></div></td></tr>`; }).join("")}</tbody>
      </table>` : `<div class="empty">${t("noData")}</div>`}
    </div>
    ${statsView === "mine" && rows.length ? `<div class="startbar"><button class="btn ghost" style="background:var(--card)" onclick="resetMine()">${t("resetMine")}</button><button class="btn red" onclick="startQuiz('weak')">${t("startWeak")} →</button></div>` : ""}`;
}
function sortStats(k){ statsSort = k; renderStats(); }
async function resetMine(){
  if (!confirm(t("resetQ"))) return;
  myStats = {}; profile = { xp: 0, answered: 0, correct: 0 };
  store.set("stats", myStats); store.set("profile", profile);
  if (db && online) {
    try { await db.ref(`${ROOT}/users/${nickKey}`).set({ profile: { name: nick, xp: 0, answered: 0, correct: 0 } });
      await db.ref(`${ROOT}/board/${nickKey}`).set({ name: nick, xp: 0, answered: 0, correct: 0 }); } catch (e) { console.warn(e); }
  }
  applyStatic(); renderStats();
}

/* ───────────── RANK ───────────── */
async function renderRank(){
  $app.innerHTML = `<section class="hero"><h1>${t("rankT")}</h1><p>${t("rankP")}</p></section><div class="card" id="rankBox"><div class="empty">…</div></div>`;
  const box = document.getElementById("rankBox");
  if (!db || !online) { box.innerHTML = `<div class="empty">${t("rankOff")}</div>`; return; }
  try {
    const snap = await withTimeout(db.ref(`${ROOT}/board`).orderByChild("xp").limitToLast(30).get(), 7000);
    const list = []; snap.forEach(c => { list.push({ key: c.key, ...c.val() }); });
    list.reverse();
    if (tab !== "rank") return;
    box.innerHTML = list.length ? list.map((u, i) => `
      <div class="rank ${u.key === nickKey ? "me" : ""}">
        <div class="n">${["🥇", "🥈", "🥉"][i] || i + 1}</div>
        <div class="nm">${H(u.name || u.key)}${u.key === nickKey ? ` <span class="muted" style="font-size:max(var(--min),calc(12px*var(--fs)))">(${t("me")})</span>` : ""}<div class="acc">${t("kAnswered")} ${u.answered || 0} · ${t("kAcc")} ${u.answered ? Math.round((u.correct || 0) / u.answered * 100) : 0}%</div></div>
        <div class="xp">${u.xp || 0} XP</div>
      </div>`).join("") : `<div class="empty">${t("noData")}</div>`;
  } catch (e) { box.innerHTML = `<div class="empty">${t("rankOff")}</div>`; }
}

/* ───────────── boot ───────────── */
(async function boot(){
  applyStatic(); render();
  if (!nick) openNick();
  else { await connectUser(); applyStatic(); render(); }
})();
