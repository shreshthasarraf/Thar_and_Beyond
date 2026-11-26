/* Renders the theme chips if the page has a #chips element */
var chipsEl=$('chips');if(chipsEl)chipsEl.innerHTML=C.map(function(c){return'<div class="chip"><b>'+c[0]+'</b><span>'+c[1]+'</span></div>'}).join('');
