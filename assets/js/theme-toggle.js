(function(){
  const storageKey = 'theme';
  const btnId = 'theme-toggle';
  function applyTheme(theme){
    if(theme === 'dark') document.body.classList.add('theme-dark');
    else document.body.classList.remove('theme-dark');
    const btn = document.getElementById(btnId);
    if(btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    let theme = localStorage.getItem(storageKey);
    if(!theme){
      theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    }
    applyTheme(theme);
    const btn = document.getElementById(btnId);
    if(btn){
      btn.addEventListener('click', ()=>{
        const isDark = document.body.classList.contains('theme-dark');
        const newTheme = isDark ? 'light' : 'dark';
        localStorage.setItem(storageKey, newTheme);
        applyTheme(newTheme);
      });
    }
  });
})();
