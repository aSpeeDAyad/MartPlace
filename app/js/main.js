
$(function(){


    for ( let i of document.querySelectorAll(".count") ) {

        let numberTop = i.getBoundingClientRect().top,
            start = +i.innerHTML,
            end = +i.dataset.max;
      
        window.addEventListener('scroll', function onScroll() {
          if(window.pageYOffset > 0.6*numberTop - window.innerHeight) {
            this.removeEventListener('scroll', onScroll);
            let interval = this.setInterval(function() {
              i.innerHTML = ++start;
              if(start == end) {
                clearInterval(interval);
              }
          }, 20);
          }
        });
      }
      
 
    $('.weekly_product-item').slick({});  // подключаем slick-slider
    $('.followers_items').slick({
        slidesToShow: 3,
        slidesToScroll: 1
    });  // подключаем slick-slider

    $('.slick-prev').html('<'); // меняем контент по дефолту с кнопкм слайдера
    $('.slick-next').html('>'); // 

    $('.create_categories-list').on('click', function() {
        $('.category_drop-list').fadeToggle("slow");
    });

    $('.create_categories-list').on('click', function() {
        
        $('.arrow').toggleClass('active') ;
    });

   // Скрыть блок с категориями, по клику вне блока и стилизовать положение стрелочки в category-list
    
    let btnCategories = $(".create_categories-list"); // указываем кнопку
    let categories = $(".category_drop-list");
    let arrow = $(".arrow");

  $(document).on('click',function (e) { // событие клика по веб-документу
    if ( ! btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 &&
         // если клик был не по нашему блоку
         ! categories.is(e.target) && categories.has(e.target).length === 0
         // и не по его дочерним элементам
           )
            { 
               
           arrow.removeClass('active'), // удаляем класс active
           
           categories.fadeOut();// скрываем категории
            
        }

    });
    
    


    var mixer = mixitup('.newest_items');
    

    
    
    


});

