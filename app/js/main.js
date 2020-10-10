
$(function(){

    
    $('.weekly__product-item').slick({});  // подключаем slick-slider

    $('.slick-prev').html('<'); // меняем контент по дефолту с кнопкм слайдера
    $('.slick-next').html('>'); // 

    $('.create__categories-list').on('click', function() {
        $('.category__drop-list').fadeToggle("slow");
    });

    $('.create__categories-list').on('click', function() {
        
        $('.arrow').toggleClass('active') ;
    });

   // Скрыть блок с категориями, по клику вне блока и стилизовать положение стрелочки в category-list
    
    let btnCategories = $(".create__categories-list"); // указываем кнопку
    let categories = $(".category__drop-list");
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
    
    
    
          
   

        
        
    


    
    
    
    


});

