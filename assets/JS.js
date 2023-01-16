const btn__menu_nav = $('#bar')
const nav = $('#navbar');
if(btn__menu_nav)
{
    btn__menu_nav.on("click",function(){
        nav.addClass('active');
    })
    console.log(nav);
}
const btn__close_nav = $('#close i')
if(btn__close_nav){
    btn__close_nav.on("click",function(){
        nav.removeClass('active');
    })
}