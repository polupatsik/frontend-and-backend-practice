
const projects = [
  {id:1,title:'Личный сайт',desc:'Статический сайт-портфолио, HTML/CSS',images:['../images/avatar.png'],live:'#',code:'#'},
  {id:2,title:'Todo-приложение',desc:'Приложение на чистом JS',images:['../images/1.png'],live:'#',code:'#'},
  {id:3,title:'Интернет-магазин (демо)',desc:'Макет магазина на CSS и JS',images:['../images/product1.png'],live:'#',code:'#'}
];
const grid=document.getElementById('projectsGrid');
projects.forEach(p=>{
  const c=document.createElement('div');c.className='card';
  c.innerHTML = `<img src="${p.images[0]}" alt=""><h4>${p.title}</h4><p>${p.desc}</p><p><button data-id="${p.id}" class="open-btn">Подробнее</button></p>`;
  grid.appendChild(c);
});
document.addEventListener('click', e=>{
  if(e.target.matches('.open-btn')){
    const id=Number(e.target.dataset.id);
    const p = projects.find(x=>x.id===id);
    if(!p) return;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalDesc').textContent = p.desc;
    document.getElementById('modalImages').innerHTML = p.images.map(i=>`<img src="${i}" style="max-width:120px;margin-right:8px">`).join('');
    document.getElementById('modalLive').href = p.live;
    document.getElementById('modalCode').href = p.code;
    const modal=document.getElementById('projectModal');
    modal.style.display='flex';
    modal.setAttribute('aria-hidden','false');
  }
  if(e.target.id==='closeModal' || e.target.id==='projectModal'){
    const modal=document.getElementById('projectModal'); modal.style.display='none'; modal.setAttribute('aria-hidden','true');
  }
});
