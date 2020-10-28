
  document.addEventListener('DOMContentLoaded', () => {

    // Slider
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
  //Tabs
  const tabs = document.querySelectorAll('.catalog__tab'),
         tabsContent = document.querySelectorAll('.catalog__content'),
         tabsParent = document.querySelector('.catalog__tabs');

         function hideTabContent(){
           tabsContent.forEach(item =>{
              item.classList.add('catalog__content_hide');
              item.classList.remove('catalog__content_active');
           });
           tabs.forEach(item =>{
              item.classList.remove('catalog__tab_active');
           });
         }

         function showTabContent(i=0){
            tabsContent[i].classList.add('catalog__content_active');
            tabsContent[i].classList.remove('catalog__content_hide');
            tabs[i].classList.add('catalog__tab_active');
         }

         hideTabContent();
         showTabContent();

         tabsParent.addEventListener('click', (event) => {
            const target = event.target;
            if ( target == target && target.closest('li').classList.contains('catalog__tab')){
                tabs.forEach((item, i) => {
                    if (target.closest('li') == item){
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
         });
  const link =document.querySelectorAll('.catalog-item__link'),
        backLink = document.querySelectorAll('.catalog-item__back');

        function toggleDescription (link){
          link.forEach((item, i) => {
            item.addEventListener('click', (event) =>{
              event.preventDefault();
                const catalogItem = document.querySelectorAll('.catalog-item__content'),
                      catalogList = document.querySelectorAll('.catalog-item__list');

                      catalogItem[i].classList.toggle('catalog-item__content_active');
                      catalogList[i].classList.toggle('catalog-item__list_active');
            });
          });
        } 
        toggleDescription(link);
        toggleDescription(backLink);


});









