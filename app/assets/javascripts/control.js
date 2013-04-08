$(function()
{
    setDimension();
});

$(window).resize(function() { setDimension(); });


function setDimension()
{
    var winWidth = $(window).width();
     
    $('#myCarousel .bottomLine').width(winWidth);
}