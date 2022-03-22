$(function(){
    $('.cover').hide();


    $('.m_menu').click(function(){
        $('.aside').animate({'left':0});
        $('.cover').fadeIn();
    });
    $('.aside>.logIn>button').click(function(){
        $('.aside').animate({'left': -274});
        $('.cover').fadeOut();
    });
});

