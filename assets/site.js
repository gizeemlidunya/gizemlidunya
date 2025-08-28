
(function(){
  const v=document.getElementById('heroVideo'), b=document.getElementById('unmuteBtn');
  if(v && b){ const unmute=()=>{ try{ v.muted=false; v.play(); }catch(e){}; b.style.display='none'; };
    b.addEventListener('click', unmute); v.addEventListener('pointerdown', unmute);
  }
  // Fade-in on scroll
  document.querySelectorAll('.copy, .gallery img, .card').forEach(el=>{
    el.style.opacity=0; el.style.transform='translateY(8px)';
    const io=new IntersectionObserver(([e])=>{ if(e.isIntersecting){ el.style.transition='opacity .6s ease, transform .6s ease'; el.style.opacity=1; el.style.transform='none'; io.disconnect(); } }, {threshold:.2});
    io.observe(el);
  });
})();
