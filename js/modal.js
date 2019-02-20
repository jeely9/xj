











function liClick(){
    $(".liBox").click(function(event){
        event.stopPropagation();
        $(this).addClass('lishadow');
        $(this).siblings().removeClass("lishadow");
    })
}




$(function(){
    liClick();
});
