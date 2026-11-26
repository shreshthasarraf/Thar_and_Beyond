/* One page for each experience */
EXP.forEach(function(e){
  P['exp-'+e[0]]=function(){
    return ban('#8c5038',e[1],e[2],'palace')+
    '<section><div class="wrap"><p class="eyebrow">A closer look</p><h2>What this can include</h2><p class="lead">'+e[4]+'</p>'+
    '<div class="box"><b>Where to explore:</b><p>'+e[3]+'</p></div>'+
    '<p class="lead" style="margin-top:22px">We shape the experience around the group, age profile, time available, accessibility needs and budget. Exact inclusions, hosts, permissions and availability are confirmed before booking.</p>'+
    '<p style="margin-top:24px"><a class="btn" href="#contact" data-pick="'+e[1]+'">Plan this experience</a> <a class="btn ghost" href="#experiences">Back to experiences</a></p>'+
    '<h3 style="margin-top:38px">Explore destinations</h3><div class="links">'+lk(["jaipur","jodhpur","jaisalmer","udaipur","chittorgarh","bikaner"])+'</div></div></section>';
  };
});
