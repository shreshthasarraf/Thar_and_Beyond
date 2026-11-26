/* Contact form: sends the enquiry to the business WhatsApp number.
   The number comes from config.js on the server (window.SITE_CONFIG.whatsappNumber). */
(function(){
  var number=(window.SITE_CONFIG&&window.SITE_CONFIG.whatsappNumber)||'';
  var msg=$('msg');

  // show the number in the contact details, as a link
  var shown=$('wa-number');
  if(shown&&number){
    var a=document.createElement('a');
    a.href='https://wa.me/'+number;a.target='_blank';a.rel='noopener';a.textContent='+'+number;
    shown.textContent='';shown.appendChild(a);
  }

  function buildMessage(){
    var lines=[
      'Hello Explore Rajasthan, I would like to enquire about a trip.',
      '',
      'Name: '+$('n').value.trim(),
      'Phone or email: '+$('c').value.trim(),
      'Group type: '+$('g').value
    ];
    var q=$('q').value.trim();
    if(q)lines.push('Details: '+q);
    return lines.join('\n');
  }

  $('f').onsubmit=function(e){
    e.preventDefault();
    if(!number){
      msg.textContent='Sorry, WhatsApp enquiries are not available right now. Please try again later.';
      if(window.console)console.warn('WhatsApp number is not set. Add it in config.js or start the server with WHATSAPP_NUMBER.');
      return;
    }
    var url='https://wa.me/'+number+'?text='+encodeURIComponent(buildMessage());
    var w=window.open(url,'_blank');
    if(w){try{w.opener=null}catch(err){}}
    msg.textContent='';
    var t=document.createTextNode('Thanks, '+$('n').value.trim()+'. Opening WhatsApp with your message. If nothing opens, ');
    var l=document.createElement('a');l.href=url;l.target='_blank';l.rel='noopener';l.textContent='tap here to send it';
    msg.appendChild(t);msg.appendChild(l);msg.appendChild(document.createTextNode('.'));
    if(!w)window.location.href=url;
    e.target.reset();
  };
})();
