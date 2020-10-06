
$(function(){
    $('.create__form-categories').on('click', function() {
        $('.category__drop').slideToggle();
    });
    $('.arrow').on('click', function() {
        $('.category__drop').slideToggle();
    });

    $('.arrow').on('click', function() {
        $('.arrow').toggleClass('active');
    });
    $('.create__form-categories').on('click', function() {
        $('.arrow').toggleClass('active');
    });
});

