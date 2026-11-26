/* Page registry (P) and shared page helpers: link list, banner and card */
var P={};
/* Link list: turns city ids into links */
function lk(a){return a.map(function(s){var d=D.filter(function(x){return x[0]===s})[0];return'<a href="#'+s+'">'+d[1]+'</a>'}).join('')}

function bannerPhoto(t){var n=String(t).split(':')[0],d=D.filter(function(x){return x[1]===n})[0],g=S.filter(function(x){return x[1]===n})[0],e=EXP.filter(function(x){return x[1]===n})[0],u=(d&&CITY_PHOTOS[d[0]])||(g&&GROUP_PHOTOS[g[0]])||(e&&EXP_PHOTOS[e[0]])||'';return u?u.replace(/"/g,'%22').replace(/'/g,'%27'):''}
function ban(c,t,s,k){var u=bannerPhoto(t),bg=u?"background-image:url('"+u+"'),"+art(k)+";background-size:cover;background-position:center;background-color:"+c:bgs(k,c);return'<div class=\"banner\" style=\"'+bg+'\"><div class="wrap"><a href="#">Home</a> &nbsp; <a href="#places">Destinations</a> &nbsp; <a href="#experiences">Activities</a><h1>'+t+'</h1><p>'+s+'</p></div></div>'};
function card(h,t,s,k,c){return'<a class="dest" href="'+h+'" style="'+bgs(k,c)+'"><h3>'+t+'</h3><span>'+s+'</span></a>'}
