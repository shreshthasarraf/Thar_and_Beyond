/* Slide-in menu drawer */
/* menu */
function menu(o){$('drawer').classList.toggle('open',o);$('veil').classList.toggle('on',o);$('burger').setAttribute('aria-expanded',o)}
$('burger').onclick=function(){menu(true)};$('x').onclick=$('veil').onclick=function(){menu(false)};
document.addEventListener('keydown',function(e){if(e.key==='Escape')menu(false)});
[].forEach.call($('drawer').querySelectorAll('a'),function(a){a.addEventListener('click',function(){menu(false)})});
