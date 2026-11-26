/* Small touches: nav shadow on scroll, back-to-top button, fade-in of sections as they scroll into view */
(function(){
  var nav=document.querySelector('nav');
  var top=document.createElement('button');
  top.id='to-top';top.type='button';top.setAttribute('aria-label','Back to top');top.textContent='↑';
  top.onclick=function(){window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'})};
  document.body.appendChild(top);
  function onScroll(){var y=window.pageYOffset||0;if(nav)nav.classList.toggle('scrolled',y>8);top.classList.toggle('show',y>700)}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08,rootMargin:'0px 0px -6% 0px'});
  [].forEach.call(document.querySelectorAll('#about .wrap,.quick-explore .wrap,#whyraj .wrap,#places .wrap,#groups .wrap,#faq .wrap'),function(el){el.classList.add('reveal');io.observe(el)});
})();
