const menu = document.querySelector('.menu-toggle');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));document.querySelector('nav').classList.toggle('open',open)});
const config=window.MAGE_SITE||{};
if(config.studioUrl){const a=document.querySelector('.studio-link');a.href=config.studioUrl;a.removeAttribute('aria-disabled');a.removeAttribute('title')}
if(config.downloadUrl){const a=document.querySelector('.download-link');if(a){a.href=config.downloadUrl;a.textContent='게임 다운로드 ↗';a.removeAttribute('aria-disabled')}}
document.querySelectorAll('a[aria-disabled="true"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.getElementById('status-note').textContent=a.classList.contains('studio-link')?'스튜디오 홈페이지 주소를 준비하고 있어요.':'다운로드 링크를 준비하고 있어요.'}));
document.querySelectorAll('[data-element]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-element]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-selected',String(x===b))});document.querySelectorAll('[data-panel]').forEach(p=>p.hidden=p.dataset.panel!==b.dataset.element)}));
