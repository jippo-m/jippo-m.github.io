// Simple TOC (Table of Contents) generator:
// collects h2 and h3 inside .main-content and builds links into #toc
(function(){
  function slugify(text){
    return text.toString().toLowerCase().trim()
      .replace(/[^a-z0-9\u3040-\u30ff\u4e00-\u9faf\s-]/g,'')
      .replace(/\s+/g,'-');
  }
  function buildTOC(){
    var container = document.getElementById('toc');
    if(!container) return;
    var content = document.querySelector('.main-content');
    if(!content) return;
    var headings = content.querySelectorAll('h2, h3');
    if(headings.length === 0){
      return;
    }
    var ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.padding = '0';
    ul.style.margin = '0';
    headings.forEach(function(h){
      var text = h.textContent.trim();
      var id = h.id || slugify(text);
      h.id = id;
      var li = document.createElement('li');
      li.style.marginBottom = '6px';
      if(h.tagName.toLowerCase() === 'h3'){
        li.style.paddingLeft = '12px';
      }
      var a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = text;
      a.addEventListener('click', function(){
        // highlight active link
        var prev = container.querySelectorAll('a');
        prev.forEach(function(x){ x.classList.remove('toc-active'); });
        a.classList.add('toc-active');
      });
      li.appendChild(a);
      ul.appendChild(li);
    });
    container.innerHTML = '';
    container.appendChild(ul);
  }
  // build on DOMContentLoaded
  function positionSidebars(){
    var header = document.querySelector('.site-header');
    if(!header) return;
    var rect = header.getBoundingClientRect();
    var top = rect.bottom + window.scrollY;
    var leftbar = document.querySelector('.leftbar');
    var rightbar = document.querySelector('.rightbar');
    var offset = 16; // small gap below header border
    if(leftbar) leftbar.style.top = (top + offset) + 'px';
    if(rightbar) rightbar.style.top = (top + offset) + 'px';
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ buildTOC(); positionSidebars(); });
  } else {
    buildTOC(); positionSidebars();
  }
  window.addEventListener('resize', positionSidebars);
})();
