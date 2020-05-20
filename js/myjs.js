var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].style.display = "flex";
}



$(document).ready(function(){
	$('.header_menu_burger').click(function(e){
		$('.header_menu').toggleClass('active');
		e.preventDefault();
	});
});

$(".menu_list_men").click(function() {
  $('.menu_lvl_men').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".menu_list_men").length) {
    $('.menu_lvl_men').hide();
  }
  e.stopPropagation();
});

$(".menu_list_woman").click(function() {
  $('.menu_lvl_woman').toggle();
});
$(document).on('click', function(e) {
  if (!$(e.target).closest(".menu_list_woman").length) {
    $('.menu_lvl_woman').hide();
  }
  e.stopPropagation();
});



