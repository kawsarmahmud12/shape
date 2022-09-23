$(function(){
    var typed = new Typed('.effect', {
        // Waits 1000ms after typing "First"
         strings: ['web designer', 'graphic designer','web developer','kawsar mahmud'],
         smartBackspace: true,
         typeSpeed: 300,
         backSpeed: 100,
         loop: true,
      });

      $('.portfolio-menu ul li').click(function(){
          $(this).addClass('active').siblings().removeClass('active');
      });

      var mixer = mixitup('.portfolio-img');

      new VenoBox({
        selector: '.venobox',
        spinner: 'wander',
        spinColor: 'yellow',
        overlayColor: 'rgba(64,115,158,0.7)',
      });

       $('.test-slider').slick({
            arrows:false,
            autoplay:true,
            slidesToShow:1,
            slidesToScroll:1,
       });

       $('.partner-slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow:4,
        slidesToScroll:1,
   });
     
});