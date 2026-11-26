/* 3D experiences carousel: slides, arrows, autoplay, swipe and keyboard */
var st=$('stage'),cur=0,timer,paused=false;
U.forEach(function(u,ix){
  var d=document.createElement('button');d.type='button';d.className='slide';
  d.setAttribute('aria-label','Bring '+u[0]+' to the centre');
  d.style.cssText=bgs(u[3],['#9c4f35','#37645d','#a77932','#50677a','#7b6247','#456b56','#7b5941'][ix]);
  d.innerHTML='<h3>'+u[0]+'</h3><p>'+u[1]+'</p><span class="slide-open">Open experience ↗</span>';var xp=EXP_PHOTOS[u[2].replace('exp-','')];if(xp){var xi=document.createElement('img');xi.className='slide-photo';xi.alt=u[0];xi.src=xp;xi.onerror=function(){this.style.display='none'};var xs=document.createElement('span');xs.className='slide-shade';d.insertBefore(xs,d.firstChild);d.insertBefore(xi,d.firstChild)}
  d.onclick=function(){
    if(ix===cur){location.hash='#'+u[2];return;}
    var delta=ix-cur,n=U.length;if(delta>n/2)delta-=n;if(delta<-n/2)delta+=n;go(delta);auto();
  };
  st.appendChild(d);
});
function render(){
  var n=U.length;
  [].forEach.call(st.children,function(s,i){
    var o=i-cur;if(o>n/2)o-=n;if(o<-n/2)o+=n;
    var a=Math.abs(o);s.style.transform='translateX('+o*76+'%) translateZ('+(-a*115)+'px) rotateY('+(-o*12)+'deg)';
    s.style.opacity=a>2?0:(a===0?1:(a===1?.82:.42));s.style.zIndex=10-a;
    s.style.visibility=a>2?'hidden':'visible';s.style.pointerEvents=a>2?'none':'auto';
    s.setAttribute('aria-hidden',a!==0?'true':'false');s.tabIndex=a>2?-1:0;s.classList.toggle('on',a===0);
  });
}
function go(d){cur=(cur+d+U.length)%U.length;render()}
function auto(){clearInterval(timer);if(!paused&&!window.matchMedia('(prefers-reduced-motion:reduce)').matches)timer=setInterval(function(){go(1)},4300)}
$('next').onclick=function(){go(1);auto()};$('prev').onclick=function(){go(-1);auto()};
var pb=$('pause');pb.onclick=function(){paused=!paused;pb.textContent=paused?'▶':'⏸';pb.setAttribute('aria-label',paused?'Play autoplay':'Pause autoplay');auto()};
var x0=null;st.addEventListener('pointerdown',function(e){if(e.pointerType==='mouse'&&e.button!==0)return;x0=e.clientX});
st.addEventListener('pointerup',function(e){if(x0!==null&&Math.abs(e.clientX-x0)>35){go(e.clientX<x0?1:-1);auto()}x0=null});
st.addEventListener('pointercancel',function(){x0=null});
st.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();go(1);auto()}if(e.key==='ArrowLeft'){e.preventDefault();go(-1);auto()}});
render();auto();
