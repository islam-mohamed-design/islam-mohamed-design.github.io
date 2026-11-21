const projects = [{"id": "energy-drink", "title": "مشروب الطاقة | دمج إعلاني", "tag": "دمج وتصميم إعلاني", "category": "food", "images": ["assets/energy-drink-01-09305567.jpg"], "number": "01", "comparison": {"before": "assets/energy-drink-90-bc835cb1.jpg", "after": "assets/energy-drink-91-13dead72.jpg"}}, {"id": "mango-composite", "title": "عصير مانجو | دمج إعلاني", "tag": "دمج وتصميم إعلاني", "category": "food", "images": ["assets/mango-composite-01-e48891dc.jpg"], "number": "02", "comparison": {"before": "assets/mango-composite-90-a1510514.jpg", "after": "assets/mango-composite-01-e48891dc.jpg"}}, {"id": "perfume", "title": "Perfume | عطور", "tag": "دمج وتصميم إعلاني", "category": "beauty", "images": ["assets/perfume-01-e41d2c5e.jpg"], "number": "03"}, {"id": "tropicana", "title": "Tropicana", "tag": "دمج وتصميم إعلاني", "category": "food", "images": ["assets/tropicana-01-2a904cd1.jpg"], "number": "04", "comparison": {"before": "assets/tropicana-90-fc9f11ca.jpg", "after": "assets/tropicana-01-2a904cd1.jpg"}}, {"id": "first-cosmo", "title": "First Cosmo Store", "tag": "تجميل وعناية", "category": "beauty", "images": ["assets/first-cosmo-01-1187ae40.jpg", "assets/first-cosmo-02-51bc7a6f.jpg", "assets/first-cosmo-03-21478927.jpg", "assets/first-cosmo-04-9bc5df73.jpg", "assets/first-cosmo-05-4b760efd.jpg", "assets/first-cosmo-06-4e0de29d.jpg", "assets/first-cosmo-07-7e60cd53.jpg", "assets/first-cosmo-08-8632d725.jpg", "assets/first-cosmo-09-c42919dc.jpg", "assets/first-cosmo-10-cfaad548.jpg", "assets/first-cosmo-11-ea8ba679.jpg", "assets/first-cosmo-12-e07ad961.jpg", "assets/first-cosmo-13-89753f5f.jpg"], "number": "05"}, {"id": "dr-mohamed-sayed", "title": "صيدلية د. محمد سيد", "tag": "صحة وعناية", "category": "health", "images": ["assets/dr-mohamed-sayed-01-017529e3.jpg", "assets/dr-mohamed-sayed-01-2672cb97.jpg", "assets/dr-mohamed-sayed-01-63c75b42.jpg", "assets/dr-mohamed-sayed-02-78327817.jpg", "assets/dr-mohamed-sayed-03-7195249c.jpg", "assets/dr-mohamed-sayed-04-bf686140.jpg", "assets/dr-mohamed-sayed-05-c29b2062.jpg", "assets/dr-mohamed-sayed-06-c401f6c2.jpg", "assets/dr-mohamed-sayed-07-d5e5e9ac.jpg", "assets/dr-mohamed-sayed-08-dbbd5753.jpg", "assets/dr-mohamed-sayed-09-f015cdfd.jpg", "assets/dr-mohamed-sayed-10-9d2bbbe4.jpg"], "number": "06"}, {"id": "mixcool", "title": "MixCool", "tag": "تكييف وتبريد", "category": "business", "images": ["assets/mixcool-01-2939e763.jpg", "assets/mixcool-02-89179a11.jpg", "assets/mixcool-03-7ec242eb.jpg", "assets/mixcool-04-0d112516.jpg", "assets/mixcool-05-bd2141b9.jpg"], "number": "07"}, {"id": "zain-el-demashqy", "title": "زين الدمشقي", "tag": "مطاعم وأكل", "category": "food", "images": ["assets/zain-el-demashqy-01-1b3766be.jpg", "assets/zain-el-demashqy-02-77d48449.jpg", "assets/zain-el-demashqy-03-e5bdcb23.jpg", "assets/zain-el-demashqy-04-aea7f971.jpg", "assets/zain-el-demashqy-05-11059436.jpg", "assets/zain-el-demashqy-06-473191f6.jpg"], "number": "08"}, {"id": "mshaltat-se-sayed", "title": "سي السيد", "tag": "مطاعم وفطير", "category": "food", "images": ["assets/mshaltat-se-sayed-01-5c47a96a.jpg", "assets/mshaltat-se-sayed-02-725d55b4.jpg", "assets/mshaltat-se-sayed-03-4ac51ba5.jpg", "assets/mshaltat-se-sayed-04-e7a9c97c.jpg"], "number": "09"}, {"id": "fish-and-more", "title": "Fish & More", "tag": "بيتزا ومعجنات", "category": "food", "images": ["assets/fish-and-more-01-03dcb8e4.jpg", "assets/fish-and-more-01-56037a37.jpg", "assets/fish-and-more-02-b90019ca.jpg", "assets/fish-and-more-02-dab698c0.jpg", "assets/fish-and-more-03-d735efc0.jpg", "assets/fish-and-more-04-d1fcc169.jpg"], "number": "10"}, {"id": "banoon", "title": "بنون كلينك", "tag": "عيادات طبية", "category": "health", "images": ["assets/banoon-01-f936cc37.jpg", "assets/banoon-02-4e028ec6.jpg", "assets/banoon-01-2f948f1c.jpg"], "number": "11"}, {"id": "fouad", "title": "صيدليات فؤاد", "tag": "صحة وعناية", "category": "health", "images": ["assets/fouad-01-7b1c9bd5.jpg"], "number": "12"}, {"id": "jaguar", "title": "Jaguar", "tag": "سناكس", "category": "food", "images": ["assets/jaguar-01-3ac7bf46.jpg"], "number": "13"}, {"id": "koshary-mangue", "title": "كشري مانجو", "tag": "مطاعم وأكل", "category": "food", "images": ["assets/koshary-mangue-01-a2a93908.jpg"], "number": "14"}, {"id": "asmakoura", "title": "إستاكوزا", "tag": "مأكولات بحرية", "category": "food", "images": ["assets/asmakoura-01-b70c2219.jpg", "assets/asmakoura-02-b98b776f.jpg", "assets/asmakoura-03-f0e4d87a.jpg"], "number": "15"}, {"id": "qashtouta", "title": "قشطوطة", "tag": "حلويات", "category": "food", "images": ["assets/qashtouta-01-23390854.jpg"], "number": "16"}, {"id": "kunafa-sweets", "title": "كنافة وحلويات", "tag": "حلويات", "category": "food", "images": ["assets/kunafa-sweets-01-330d3605.jpg", "assets/kunafa-sweets-02-e8069054.jpg", "assets/kunafa-sweets-03-153cace2.jpg", "assets/kunafa-sweets-04-9125a06d.jpg", "assets/kunafa-sweets-05-b4b83e4a.jpg"], "number": "17"}, {"id": "real-estate", "title": "شركة عقارات | سوشيال ميديا", "tag": "عقارات", "category": "business", "images": ["assets/real-estate-01-cd2b3ba8.jpg", "assets/real-estate-02-5c046626.jpg", "assets/real-estate-03-f43f8060.jpg", "assets/real-estate-04-340d96db.jpg", "assets/real-estate-05-7ae29478.jpg", "assets/real-estate-06-84b57ba5.jpg"], "number": "18"}, {"id": "pizza-posts", "title": "بيتزا | سوشيال ميديا", "tag": "بيتزا ومعجنات", "category": "food", "images": ["assets/pizza-posts-01-8da6794c.jpg", "assets/pizza-posts-02-8bd098f8.jpg", "assets/pizza-posts-03-35fe9f31.jpg", "assets/pizza-posts-04-a8c9b0dd.jpg"], "number": "19"}, {"id": "restaurant-posts", "title": "مطاعم | سوشيال ميديا", "tag": "مطاعم وأكل", "category": "food", "images": ["assets/restaurant-posts-01-48485913.jpg", "assets/restaurant-posts-02-28fd2bf9.jpg", "assets/restaurant-posts-03-cd053063.jpg", "assets/restaurant-posts-04-720f01e0.jpg", "assets/restaurant-posts-05-0f73f83c.jpg", "assets/restaurant-posts-06-56ee69e4.jpg", "assets/restaurant-posts-07-2d4d1dea.jpg", "assets/restaurant-posts-08-812b06e7.jpg"], "number": "20"}, {"id": "restaurant-menu", "title": "منيو مطعم", "tag": "منيوهات", "category": "food", "images": ["assets/restaurant-menu-01-88de4302.jpg", "assets/restaurant-menu-02-2b9dc5d7.jpg", "assets/restaurant-menu-03-267a5abe.jpg"], "number": "21"}, {"id": "fast-food-collage", "title": "Fast Food Designs", "tag": "فاست فود", "category": "food", "images": ["assets/fast-food-collage-01-efd70660.jpg", "assets/fast-food-collage-02-ab6e5bc5.jpg"], "number": "22"}, {"id": "seafood-collage", "title": "Seafood Designs", "tag": "مأكولات بحرية", "category": "food", "images": ["assets/seafood-collage-01-b97c58e8.jpg"], "number": "23"}, {"id": "medical-designs", "title": "تصاميم طبية | سوشيال ميديا", "tag": "صحة وعناية", "category": "health", "images": ["assets/medical-designs-01-160c9ed1.jpg"], "number": "24"}, {"id": "cosmetics-skincare", "title": "مستحضرات تجميل وعناية", "tag": "تجميل وعناية", "category": "beauty", "images": ["assets/cosmetics-skincare-01-4a40e3c1.jpg", "assets/cosmetics-skincare-02-48e8b4ce.jpg", "assets/cosmetics-skincare-03-d4aba1cb.jpg"], "number": "25"}, {"id": "summer-product", "title": "صيفك حلو | دمج إعلاني", "tag": "تصميم جرافيك", "category": "food", "images": ["assets/summer-product-01-e36c674b.jpg"], "number": "26"}, {"id": "car-composite", "title": "إعلان سيارات | دمج إعلاني", "tag": "دمج وتصميم إعلاني", "category": "business", "images": ["assets/car-composite-01-0dc28b9f.jpg"], "number": "27", "comparison": {"before": "assets/car-composite-90-913bbf1f.jpg", "after": "assets/car-composite-01-0dc28b9f.jpg"}}, {"id": "bear-composite", "title": "دمج إبداعي | الغابة", "tag": "دمج وتصميم إعلاني", "category": "business", "images": ["assets/bear-composite-01-bff616dc.jpg"], "number": "28", "comparison": {"before": "assets/bear-composite-90-5ef91f5f.jpg", "after": "assets/bear-composite-01-bff616dc.jpg"}}, {"id": "clothing-brand", "title": "هوية علامة ملابس", "tag": "تصميم جرافيك", "category": "business", "images": ["assets/clothing-brand-01-23f17dbd.jpg", "assets/clothing-brand-02-5ed51e3e.jpg", "assets/clothing-brand-03-ee5f195c.jpg", "assets/clothing-brand-04-b1d98e99.jpg", "assets/clothing-brand-05-e8094651.jpg"], "number": "29"}, {"id": "water-filters", "title": "فلاتر المياه", "tag": "تصميم جرافيك", "category": "business", "images": ["assets/water-filters-01-0e0edf19.jpg", "assets/water-filters-02-cd68cbfa.jpg", "assets/water-filters-03-6043551d.jpg", "assets/water-filters-04-7c7d5c28.jpg", "assets/water-filters-05-d4a3e74d.jpg", "assets/water-filters-06-76d3a98a.jpg"], "number": "30"}, {"id": "english-academy", "title": "أكاديمية اللغة الإنجليزية", "tag": "تصميم جرافيك", "category": "business", "images": ["assets/english-academy-01-a80a6b21.jpg", "assets/english-academy-02-fc562f82.jpg", "assets/english-academy-03-5744f9d1.jpg", "assets/english-academy-04-64a9d624.jpg", "assets/english-academy-05-1625af42.jpg"], "number": "31"}, {"id": "medical-social", "title": "سوشيال ميديا طبية", "tag": "تصميم جرافيك", "category": "health", "images": ["assets/medical-social-01-3e81ccb0.jpg", "assets/medical-social-02-cb9f74ba.jpg", "assets/medical-social-03-6e1a062e.jpg", "assets/medical-social-04-dc2104fc.jpg", "assets/medical-social-05-978143d8.jpg", "assets/medical-social-06-8518f78d.jpg", "assets/medical-social-07-0324bd48.jpg", "assets/medical-social-08-85de413c.jpg", "assets/medical-social-09-35c9eff7.jpg", "assets/medical-social-10-b369d1ca.jpg", "assets/medical-social-11-151baf80.jpg"], "number": "32"}, {"id": "qushtutuh-social", "title": "قشطوطة | سوشيال ميديا", "tag": "تصميم جرافيك", "category": "food", "images": ["assets/qushtutuh-social-01-a18f8ee7.jpg", "assets/qushtutuh-social-02-c756ccbf.jpg", "assets/qushtutuh-social-03-f7e466cf.jpg", "assets/qushtutuh-social-04-a50dec59.jpg", "assets/qushtutuh-social-05-9796e59b.jpg", "assets/qushtutuh-social-06-7d592305.jpg", "assets/qushtutuh-social-07-90aa7eeb.jpg", "assets/qushtutuh-social-08-ad802478.jpg", "assets/qushtutuh-social-09-8a87f06e.jpg", "assets/qushtutuh-social-10-9f834242.jpg", "assets/qushtutuh-social-11-19179089.jpg", "assets/qushtutuh-social-12-b29079e4.jpg", "assets/qushtutuh-social-13-d0ca1125.jpg", "assets/qushtutuh-social-14-640e7ffb.jpg"], "number": "33"}, {"id": "pharmacy-social", "title": "صيدليات | سوشيال ميديا", "tag": "تصميم جرافيك", "category": "health", "images": ["assets/pharmacy-social-01-85e94584.jpg", "assets/pharmacy-social-02-1d2e9804.jpg", "assets/pharmacy-social-03-804f75ca.jpg", "assets/pharmacy-social-04-145522e4.jpg", "assets/pharmacy-social-05-d0e91ae8.jpg", "assets/pharmacy-social-06-0faba18b.jpg", "assets/pharmacy-social-07-05ab1665.jpg", "assets/pharmacy-social-08-8c7f37cb.jpg", "assets/pharmacy-social-10-e6df333c.jpg"], "number": "34"}];

const grid=document.querySelector('#projects'),pd=document.querySelector('#project-dialog'),lb=document.querySelector('#lightbox');
let selected=null,index=0;
function render(filter='all'){
 const visible=projects.filter(p=>filter==='all'||p.category===filter);
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
render();

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
