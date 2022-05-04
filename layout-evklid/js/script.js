window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.work-nav-item-btn').forEach( function(navItemBtn) {
    navItemBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.work-wrapper').forEach( function(workWrapper) {
        workWrapper.classList.remove('work-wrapper-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('work-wrapper-active')
    })
  })

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

    document.querySelector('#menu-btn').addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('header-content-nav-list-burger-active')
    })

    $( function() {
      $( "#accordion" ).accordion({
        active: 5
      });
    } );

    $( function() {
      $( "#accordion" ).accordion({
        active: 5
      });
    } );

      $( function() {
        var icons = {
          header: "questions-list-item-accord",
          activeHeader: "questions-list-item-accord questions-list-item-accord-active"
        };
        $( "#accordion" ).accordion({
          icons: icons
        });
        $( "#toggle" ).button().on( "click", function() {
          if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
            $( "#accordion" ).accordion( "option", "icons", null );
          } else {
            $( "#accordion" ).accordion( "option", "icons", icons );
          }
        });
      } );
})
