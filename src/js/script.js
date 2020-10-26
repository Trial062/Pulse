
  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    responsive: {
        1200:{
            nav: false
        },
        992: {
            nav: false
        },
        767: {
            nav: true
        },
        575: {
            nav: true
        },
        320: {
            nav: true
        }
      
      }
  });

  document.querySelector('.prev').addEventListener('click',() => {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click',() => {
    slider.goTo('next');
  });