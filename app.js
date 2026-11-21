let projects = [];

const grid=document.querySelector('#projects'),pd=document.querySelector('#project-dialog'),lb=document.querySelector('#lightbox');
let selected=null,index=0;
function render(filter='all'){
 const visible=projects.filter(p=>!p.video&&(filter==='all'||p.category===filter));
 grid.replaceChildren(...visible.map(p=>{
  const b=document.createElement('button');b.className='project-card';b.setAttribute('aria-label','عرض مشروع '+p.title+'، '+p.images.length+' تصميم');
  const count=p.images.length;
  b.innerHTML=`<div class="project-visual">${count>1?`<img class="project-back" src="${p.images[1]}" alt="" loading="lazy">`:''}<img class="project-cover" src="${p.images[0]}" alt="تصميم من أعمال ${p.title}" loading="lazy">${count>2?`<img class="project-side" src="${p.images[2]}" alt="" loading="lazy">`:''}<span class="project-count">${count} ${count===1?'تصميم':'تصميمات'}</span><span class="project-arrow" aria-hidden="true">↗</span></div><div class="project-meta"><div><h3>${p.title}</h3><p>${p.tag} / SOCIAL MEDIA</p></div><span class="project-number">[ ${p.number} ]</span></div>`;
  b.addEventListener('click',()=>openProject(p));return b;
 }));
 requestAnimationFrame(observeCards);
 document.querySelector('#filter-status').textContent='عدد المشاريع المعروضة: '+visible.length;
}
function openProject(p){selected=p;document.querySelector('#project-name').textContent=p.title;document.querySelector('#project-tag').textContent=p.tag+' / '+p.images.length+' DESIGNS';
 const g=document.querySelector('#gallery-grid');g.replaceChildren(...p.images.map((src,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','تكبير تصميم '+(i+1)+' من '+p.title);const img=document.createElement('img');img.src=src;img.alt='تصميم '+(i+1)+' من أعمال '+p.title;img.loading='lazy';b.append(img);b.addEventListener('click',()=>{index=i;showImage();lb.showModal()});return b}));
 if(motionOK())g.querySelectorAll('button').forEach((btn,i)=>{btn.classList.add('g-item');btn.style.setProperty('--gd',Math.min(i*40,480)+'ms')});
 addComparison(p,g);
 pd.showModal();pd.scrollTop=0;document.body.classList.add('modal-open');
}
function showImage(){const img=document.querySelector('#lightbox-image');if(motionOK()){img.classList.remove('swap');void img.offsetWidth;img.classList.add('swap')}img.src=selected.images[index];img.alt='تصميم '+(index+1)+' من أعمال '+selected.title;document.querySelector('#image-count').textContent=(index+1)+' / '+selected.images.length}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render(b.dataset.filter)}));
document.querySelector('.close-dialog').onclick=()=>pd.close();pd.addEventListener('close',()=>document.body.classList.remove('modal-open'));document.querySelector('.close-lightbox').onclick=()=>lb.close();
document.querySelector('.image-prev').onclick=()=>{index=(index-1+selected.images.length)%selected.images.length;showImage()};document.querySelector('.image-next').onclick=()=>{index=(index+1)%selected.images.length;showImage()};
lb.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){index=(index-1+selected.images.length)%selected.images.length;showImage();e.preventDefault()}if(e.key==='ArrowLeft'){index=(index+1)%selected.images.length;showImage();e.preventDefault()}});
for(const d of [pd,lb])d.addEventListener('click',e=>{const r=d.getBoundingClientRect();if(e.target===d&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))d.close()});
document.querySelector('#year').textContent=new Date().getFullYear();
fetch("projects.json?v=motion-2",{cache:"no-cache"}).then(r=>{if(!r.ok)throw new Error("projects.json "+r.status);return r.json()}).then(data=>{
 projects=data;
 const statics=projects.filter(p=>!p.video);
 statics.forEach((p,i)=>{if(!p.number)p.number=String(i+1).padStart(2,"0")});
 const allCount=document.querySelector("[data-filter=\"all\"] small");if(allCount)allCount.textContent=statics.length;
 render();
 renderMotion();
}).catch(err=>console.error("Could not load projects.json",err));

function renderMotion(){
 const list=document.querySelector("#motion-list");if(!list)return;
 const vids=projects.filter(p=>p.video);
 list.replaceChildren(...vids.map(p=>{
  const shell=document.createElement("div");shell.className="video-shell";
  const v=document.createElement("video");v.controls=true;v.playsInline=true;v.preload="metadata";
  if(p.poster)v.poster=p.poster;
  v.setAttribute("aria-label","فيديو موشن جرافيك لـ"+p.title);
  const s=document.createElement("source");s.src=p.video;s.type="video/mp4";
  v.append(s,"متصفحك لا يدعم الفيديو.");
  const cap=document.createElement("div");cap.className="video-caption";
  const c1=document.createElement("span");c1.textContent="MOTION GRAPHICS";
  const c2=document.createElement("span");c2.textContent=p.title+" ";
  const arrow=document.createElement("i");arrow.textContent="↗";c2.append(arrow);
  cap.append(c1,c2);shell.append(v,cap);return shell;
 }));
 if(motionOK()&&"IntersectionObserver"in window){
  const shells=[...list.querySelectorAll(".video-shell")];
  shells.forEach((el,i)=>{el.classList.add("rv");el.style.setProperty("--rvd",(i%3)*70+"ms")});
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("rv-in");io.unobserve(e.target)}}),{threshold:.1,rootMargin:"0px 0px 30px 0px"});
  shells.forEach(el=>io.observe(el));
 }
}

function addComparison(p,g){
 if(!p.comparison)return;
 const wrap=document.createElement('section');wrap.className='comparison-block';
 const title=document.createElement('p');title.textContent='قبل وبعد التصميم، اسحب المؤشر للمقارنة';
 const stage=document.createElement('div');stage.className='comparison-stage';stage.dir='ltr';
 const before=document.createElement('img');before.src=p.comparison.before;before.alt='قبل الدمج';
 const after=document.createElement('img');after.src=p.comparison.after;after.alt='بعد الدمج';after.className='comparison-after';
 const line=document.createElement('span');line.className='comparison-line';line.textContent='↔';
 stage.append(before,after,line);
 const input=document.createElement('input');input.type='range';input.min=0;input.max=100;input.value=50;input.dir='ltr';input.setAttribute('aria-label','مقارنة قبل وبعد التصميم');
 input.addEventListener('input',()=>stage.style.setProperty('--split',input.value+'%'));
 wrap.append(title,stage,input);g.prepend(wrap);
 if(motionOK()&&'IntersectionObserver'in window){
  const hint=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;hint.disconnect();
   let userTouched=false;input.addEventListener('pointerdown',()=>userTouched=true,{once:true});input.addEventListener('input',()=>userTouched=true,{once:true});
   const t0=performance.now();
   (function tween(t){if(userTouched)return;const p=Math.min((t-t0)/1300,1);
    const v=50+Math.sin(p*Math.PI)*16;stage.style.setProperty('--split',v+'%');input.value=v;
    if(p<1)requestAnimationFrame(tween);else{stage.style.setProperty('--split','50%');input.value=50}})(t0);
  }),{threshold:.5});
  hint.observe(stage);
 }
}
function observeCards(){
 const cards=[...grid.querySelectorAll('.project-card')];
 if(!('IntersectionObserver'in window)||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 if(window.cardObserver)window.cardObserver.disconnect();
 window.cardObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');window.cardObserver.unobserve(e.target)}}),{threshold:.07,rootMargin:'0px 0px 40px 0px'});
 cards.forEach((c,i)=>{c.style.setProperty('--delay',(i%3)*65+'ms');c.classList.add('reveal-card');window.cardObserver.observe(c)});
}
const progress=document.createElement('div');progress.className='reading-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
let scrollQueued=false;
addEventListener('scroll',()=>{if(scrollQueued)return;scrollQueued=true;requestAnimationFrame(()=>{const range=document.documentElement.scrollHeight-innerHeight;progress.style.transform='scaleX('+(range>0?scrollY/range:0)+')';document.querySelector('.topbar').classList.toggle('scrolled',scrollY>30);scrollQueued=false})},{passive:true});

/* ===== Motion v2: preloader, counters, parallax, tilt, magnetic, reveals ===== */
function motionOK(){return !matchMedia('(prefers-reduced-motion: reduce)').matches}
const finePointer=matchMedia('(hover:hover) and (pointer:fine)').matches;

/* Preloader: quick brand flash tied to real load, capped so it never hangs */
(function(){
 const pre=document.querySelector('#preloader');if(!pre)return;
 if(!motionOK()){pre.remove();return}
 const bar=pre.querySelector('.pre-bar span'),num=pre.querySelector('.pre-num');
 let shown=0,target=90,done=false;const t0=performance.now();
 (function tick(){
  if(done)return;
  shown+= (target-shown)*.08;
  bar.style.transform='scaleX('+(shown/100)+')';num.textContent=Math.round(shown)+'%';
  if(shown<99.5||performance.now()-t0<2500)requestAnimationFrame(tick);
 })();
 function finish(){
  if(done)return;done=true;target=100;
  bar.style.transform='scaleX(1)';num.textContent='100%';
  setTimeout(()=>{pre.classList.add('done');setTimeout(()=>pre.remove(),650)},200);
 }
 addEventListener('load',()=>setTimeout(finish,Math.max(0,650-(performance.now()-t0))));
 setTimeout(finish,2200);
})();

/* Animated "07" experience counter */
(function(){
 const el=document.querySelector('.hero-bottom strong');if(!el)return;
 const final=parseInt(el.textContent,10);if(isNaN(final))return;
 if(!motionOK()){el.textContent=String(final).padStart(2,'0');return}
 const t0=performance.now()+700,dur=1200;
 (function tick(){const now=performance.now();const p=Math.min(Math.max((now-t0)/dur,0),1);
  const eased=1-Math.pow(1-p,3);
  el.textContent=String(Math.round(final*eased)).padStart(2,'0');
  if(p<1)requestAnimationFrame(tick)})();
})();

/* Section reveals on scroll */
(function(){
 if(!motionOK()||!('IntersectionObserver'in window))return;
 const targets=document.querySelectorAll('.section-heading,.filters,.portrait-wrap,.about-copy,.video-shell,.contact-title,.contact-bottom,.ticker,footer');
 targets.forEach((el,i)=>{el.classList.add('rv');el.style.setProperty('--rvd',(i%3)*70+'ms')});
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('rv-in');io.unobserve(e.target)}}),{threshold:.1,rootMargin:'0px 0px 30px 0px'});
 targets.forEach(el=>io.observe(el));
})();

/* Hero artwork scroll parallax (transform-only, rAF-throttled) */
(function(){
 if(!motionOK())return;
 const art=document.querySelector('.hero-art');if(!art)return;
 const imgs={back:art.querySelector('.art-back'),front:art.querySelector('.art-front'),side:art.querySelector('.art-side')};
 const rates={back:.05,front:.1,side:.14};let queued=false;
 addEventListener('scroll',()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;
  const y=scrollY;if(y>900)return;
  for(const k in imgs)if(imgs[k])imgs[k].style.setProperty('--py',(y*rates[k])+'px');
 })},{passive:true});
})();

/* Project card tilt + cursor spotlight (desktop pointers only) */
if(finePointer&&motionOK()){
 const grid=document.querySelector('#projects');
 let raf=null,lastEvent=null;
 grid.addEventListener('pointermove',e=>{
  if(!e.target.closest('.project-card'))return;
  lastEvent=e;
  if(raf)return;raf=requestAnimationFrame(()=>{raf=null;
   const ev=lastEvent;const card=ev.target.closest('.project-card');if(!card)return;
   const v=card.querySelector('.project-visual');if(!v)return;
   v.style.transition='none';
   const r=v.getBoundingClientRect();
   const px=Math.min(Math.max((ev.clientX-r.left)/r.width,0),1);
   const py=Math.min(Math.max((ev.clientY-r.top)/r.height,0),1);
   v.style.setProperty('--mx',px*100+'%');v.style.setProperty('--my',py*100+'%');
   const rx=(0.5-py)*5,ry=(px-0.5)*6;
   v.style.transform='perspective(800px) rotateX('+rx+'deg) rotateY('+ry+'deg)';
   const cover=v.querySelector('.project-cover'),back=v.querySelector('.project-back'),side=v.querySelector('.project-side');
   if(cover)cover.style.transform='translate('+(px-0.5)*-10+'px,'+(py-0.5)*-10+'px) scale(1.06)';
   if(back)back.style.transform='rotate(-13deg) translate('+(px-0.5)*6+'px,'+(py-0.5)*6+'px)';
   if(side)side.style.transform='rotate(13deg) translate('+(px-0.5)*9+'px,'+(py-0.5)*9+'px)';
  });
 });
 grid.addEventListener('pointerout',e=>{
  const c=e.target.closest('.project-card');if(!c||c.contains(e.relatedTarget))return;
  const v=c.querySelector('.project-visual');if(!v)return;
  v.style.transition='';v.style.transform='';
  ['.project-cover','.project-back','.project-side'].forEach(s=>{const el=v.querySelector(s);if(el)el.style.transform=''});
 });
}

/* Magnetic buttons on primary CTAs */
if(finePointer&&motionOK()){
 document.querySelectorAll('.primary,.circle-contact').forEach(el=>{
  el.addEventListener('pointermove',e=>{
   const r=el.getBoundingClientRect();
   const dx=(e.clientX-(r.left+r.width/2))/r.width,dy=(e.clientY-(r.top+r.height/2))/r.height;
   el.style.transform='translate('+dx*10+'px,'+dy*10+'px)';
  });
  el.addEventListener('pointerleave',()=>{el.style.transform=''});
 });
}

/* Seamless marquee: duplicate content once so -50% loops perfectly */
(function(){
 const t=document.querySelector('.ticker>div');if(!t||t.dataset.doubled)return;
 t.innerHTML+=t.innerHTML;t.dataset.doubled='1';
 const st=document.createElement('style');st.textContent='@keyframes marquee{to{transform:translateX(-50%)}}';document.head.append(st);
})();

/* Welcome island: independent from the existing motion and project systems. */
(function(){
 const island=document.querySelector('#welcome-island');
 if(!island)return;
 const zone=island.closest('.welcome-zone'),message=island.querySelector('.island-message');
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 let closeTimer,autoTimer,interacted=false;
 function sizeShell(){island.style.setProperty('--island-sx',String(136/Math.min(350,innerWidth-32)))}
 sizeShell();addEventListener('resize',sizeShell,{passive:true});zone.hidden=false;
 function clearClose(){clearTimeout(closeTimer)}
 function queueClose(){clearClose();if(island.classList.contains('is-open'))closeTimer=setTimeout(()=>setOpen(false),5500)}
 function setOpen(open){
  clearClose();island.classList.toggle('is-open',open);
  island.setAttribute('aria-expanded',String(open));
  island.setAttribute('aria-label',open?'أهلاً بيك في موقع اسلام محمد. خد لفة وشوف أعمالي تحت. إخفاء رسالة الترحيب':'عرض رسالة الترحيب');
  message.setAttribute('aria-hidden',String(!open));
  if(open&&!island.matches(':hover,:focus-visible'))queueClose();
 }
 island.addEventListener('click',()=>{interacted=true;clearTimeout(autoTimer);setOpen(!island.classList.contains('is-open'))});
 island.addEventListener('keydown',e=>{if(e.key==='Escape'){interacted=true;clearTimeout(autoTimer);setOpen(false)}});
 island.addEventListener('pointerenter',clearClose);
 island.addEventListener('pointerleave',queueClose);
 island.addEventListener('focus',clearClose);
 island.addEventListener('blur',queueClose);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)setOpen(false)});
 function ready(){
  if(document.querySelector('#preloader'))return;
  observer.disconnect();
  autoTimer=setTimeout(()=>{if(!interacted&&!document.hidden)setOpen(true)},reduce.matches?600:500);
 }
 const observer=new MutationObserver(ready);
 observer.observe(document.body,{childList:true});ready();
})();

/* Release the hero headline reveal once the preloader is gone */
(function(){const root=document.documentElement;function go(){if(document.querySelector('#preloader'))return;root.classList.add('hero-go');mo.disconnect()}
const mo=new MutationObserver(go);mo.observe(document.body,{childList:true});go()})();
