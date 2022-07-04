
$(function(){
	$('.center').slick({
		infinite:true,
		slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
		autoplay: true,
		autoplaySpeed: 4500,
		dots: true,
		centerModel:true,
  
        centerPadding:'60px',
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows:false
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2, 
                arrows:false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2, 
                arrows:false 
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            }
          ]
	});
});