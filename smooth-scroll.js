(function(){
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let smoother=null;

  if(!reduceMotion&&window.gsap&&window.ScrollTrigger&&window.ScrollSmoother){
    gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
    smoother=ScrollSmoother.create({
      wrapper:'#smooth-wrapper',
      content:'#smooth-content',
      smooth:0.8,
      effects:false,
      smoothTouch:0.1
    });
  }

  window.bay18ScrollTo=function(target){
    if(!target)return;
    if(smoother){
      smoother.scrollTo(target,true,'top top');
    }else{
      target.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'start'});
    }
  };
})();
