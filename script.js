// Small JS to enhance UX: smooth scroll and add subtle reveal on scroll
document.addEventListener('click', function(e){
  if(e.target.matches('a[href^="#"]')){
    const id = e.target.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
    }
  }
}, false);

// On-scroll reveal for elements with .fade-in and .slide-up
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.remove('fade-in','slide-up','fade-in-down');
      entry.target.style.opacity = 1;
    }
  });
},{threshold:0.15});

document.querySelectorAll('.fade-in, .slide-up, .fade-in-down').forEach(el=>{
  observer.observe(el);
});
