
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.querySelector('form');
  if(!form) return;
  form.addEventListener('submit', e=>{
    const name = form.querySelector('input[name="name"]')?.value?.trim();
    const email = form.querySelector('input[name="email"]')?.value?.trim();
    const msg = form.querySelector('textarea[name="message"]')?.value?.trim();
    let ok = true;
    if(!name){ ok=false; alert('Введите имя'); }
    if(!email || !/^\S+@\S+\.\S+$/.test(email)){ ok=false; alert('Введите корректный email'); }
    if(!msg){ ok=false; alert('Введите сообщение'); }
    if(!ok) e.preventDefault();
    else {
      // Демонстрация: сохраним в localStorage и покажем подтверждение
      const saved = JSON.parse(localStorage.getItem('contacts')||'[]');
      saved.push({name, email, msg, date: new Date().toISOString()});
      localStorage.setItem('contacts', JSON.stringify(saved));
      alert('Сообщение сохранено локально (симуляция отправки)');
      e.preventDefault();
      form.reset();
    }
  });
});
