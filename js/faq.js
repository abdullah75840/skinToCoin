$(document).ready(function () {
$('.dropdown-section').click(function () {
    $(this).next('.dropdown-itm').fadeToggle();
    $(this).parent().find("i").toggleClass('rotate');
    
});

// myAccount page
$(".img").click(function () {
  
  $('.img .overlay').css('display','none');
  $('.img .check-img').css('display','none');
  $(this).children('.overlay').css('display','block');
  $(this).children('.check-img').css('display','block');
  
});


})
