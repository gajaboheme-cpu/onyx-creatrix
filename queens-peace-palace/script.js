const navToggle=document.querySelector('.nav-toggle');
const sectionNav=document.querySelector('#section-nav');
navToggle?.addEventListener('click',()=>{const open=navToggle.getAttribute('aria-expanded')==='true';navToggle.setAttribute('aria-expanded',String(!open));sectionNav.classList.toggle('open',!open)});
sectionNav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{sectionNav.classList.remove('open');navToggle?.setAttribute('aria-expanded','false')}));

document.querySelectorAll('.swatch').forEach(button=>button.addEventListener('click',async()=>{const hex=button.dataset.hex;const label=button.querySelector('small');try{await navigator.clipboard.writeText(hex);label.textContent='Copied';setTimeout(()=>label.textContent='Copy hex',1400)}catch{label.textContent=hex}}));

const parsed=new Date(document.lastModified);
const updated=Number.isNaN(parsed.getTime())?new Date():parsed;
const updatedText=new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric'}).format(updated);
document.querySelectorAll('#last-updated,#footer-updated').forEach(node=>{node.textContent=updatedText;node.dateTime=updated.toISOString().slice(0,10)});

const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduced){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -5%'});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}
