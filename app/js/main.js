
$(function(){

    
   
    
    
        
       

       

    $('.create__categories-list').on('click', function() {
        $('.category__drop-list').fadeToggle("slow");
    });
    

    
   

   // Скрыть блок с категориями, по клику вне блока
    
    let a = $('.category__drop-list').css('display');
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
          
               
            arrow.removeClass('active'),
        
           categories.fadeOut();
            // скрываем его
        }
        
     
    });
    
    
    $('.create__categories-list').on('click', function() {
        
        $('.arrow').toggleClass('active') ;
    });
      
          
   

        
        
    



    



});

