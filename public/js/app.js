/* Router: shows the page that matches the #hash, or the home page. Runs last. */
var home=$('home'),pg=$('page');
function route(){var h=decodeURIComponent(location.hash.slice(1));
if(P[h]){var puppet=$('puppet-transition');if(puppet){puppet.classList.remove('playing');void puppet.offsetWidth;puppet.classList.add('playing');setTimeout(function(){puppet.classList.remove('playing')},1050)}home.hidden=true;pg.hidden=false;pg.innerHTML=P[h]();window.scrollTo(0,0);document.title=h.charAt(0).toUpperCase()+h.slice(1).replace('-',' ')+' · Explore Rajasthan';
[].forEach.call(pg.querySelectorAll('[data-pick]'),function(a){a.onclick=function(){var s=$('g'),v=a.dataset.pick;[].forEach.call(s.options,function(o){if(o.text.indexOf(v)===0)s.value=o.value});$('q').value='Interested in: '+v}})}
else{home.hidden=false;pg.hidden=true;pg.innerHTML='';document.title='Explore Rajasthan';var e=h&&$(h);if(e)setTimeout(function(){e.scrollIntoView({behavior:'smooth',block:'start'})},0);else window.scrollTo(0,0)}}

window.addEventListener('hashchange',route);

route();
