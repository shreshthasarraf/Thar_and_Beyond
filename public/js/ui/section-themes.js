/* Painted backgrounds for the destinations, activities and groups sections */
function svgDataUri(inner,vb){return 'url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="'+vb+'" preserveAspectRatio="none">'+inner+'</svg>')+'")'}
function fort(){var p='M0 200V138',i,t='';for(i=0;i<50;i++)p+='v-12h12v12h12';p+='V200z';
[[90,3],[330,4],[620,3],[880,4],[1110,3]].forEach(function(a,k){var n=a[1],top=64+k%3*22,q='M'+a[0]+' 200V'+top+'v-12';for(var j=0;j<n;j++)q+='h12v12h12v-12';t+='<path d="'+q+'V200z"/><path d="M'+(a[0]+n*12-8)+' 200v-26a8 8 0 0116 0v26z" fill="#fff" opacity=".12"/>'});
return '<g fill="#06103a" opacity=".8"><path d="'+p+'"/>'+t+'</g>'}
function dunes(){return '<path d="M0 90Q150 30 320 80T640 70T960 60T1200 50V200H0z" fill="#b45309"/><path d="M0 140Q200 90 420 130T820 120T1200 100V200H0z" fill="#7c2d05"/><path d="M180 130l26-30 26 30zM640 122l22-26 22 26zM900 118l20-24 20 24z" fill="#1c0a05"/>'}
function stars(){var c='<circle cx="500" cy="60" r="22" fill="#ffe9a8" opacity=".9"/>';[[40,30],[120,90],[210,40],[300,110],[390,25],[600,100],[680,40],[760,120],[850,60],[940,30],[1000,100],[1120,50],[1160,130]].forEach(function(a){c+='<circle cx="'+a[0]+'" cy="'+a[1]+'" r="2" fill="#fff"/>'});return c}
function chh(x,w,h){var ys=200-h*.6,r=w*.38,c=x+w/2,o='<rect x="'+x+'" y="'+ys+'" width="'+w+'" height="8"/>';for(var i=0;i<4;i++)o+='<rect x="'+(x+w*.1+i*w*.255)+'" y="'+(ys+8)+'" width="'+(w*.07)+'" height="'+(200-ys-8)+'"/>';return o+'<path d="M'+(x+w*.12)+' '+ys+'a'+r+' '+(r*1.1)+' 0 0 1 '+(w*.76)+' 0z"/><rect x="'+(c-1.5)+'" y="'+(ys-r*1.1-16)+'" width="3" height="16"/>'}
function palace(){var o='<g fill="#4a0f05" opacity=".7"><rect x="0" y="186" width="1200" height="14"/>';[[40,110,150],[230,90,120],[400,150,190],[620,100,140],[800,130,170],[1020,110,150]].forEach(function(a){o+=chh(a[0],a[1],a[2])});return o+'</g>'}
function theme(id,img,h,pos,grad){var e=$(id);if(!e)return;e.style.backgroundImage=img.concat([grad]).join(',');e.style.backgroundSize=h;e.style.backgroundPosition=pos;e.style.backgroundRepeat='no-repeat'}
theme('places',[svgDataUri(fort(),'0 0 1200 200')],'100% 190px,100% 100%','bottom,center','linear-gradient(#0a2a73 0%,#2f86d6 62%,#f6c75e 100%)');
theme('actsec',[svgDataUri(dunes(),'0 0 1200 200'),svgDataUri(stars(),'0 0 1200 160')],'100% 190px,100% 38%,100% 100%','bottom,top,center','linear-gradient(#0b0f33 0%,#2b1672 55%,#c2410c 100%)');
theme('groups',[svgDataUri(palace(),'0 0 1200 200')],'100% 200px,100% 100%','bottom,center','linear-gradient(#7c1d0b 0%,#d4491c 58%,#ffb347 100%)');
