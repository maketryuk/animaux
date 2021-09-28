$(function () {
  // Burger =====>
  $(function () {
    $('.burger').click(function () {
      $('.nav').toggleClass('active');
      $('body').toggleClass('lock');
    });
  })

  // Page-Info Show more =====>
  $('.page-info .show-more').click(function () {
    $(this).addClass('active');
    $('.page-info p').addClass('active');
  });

  // Filters Trigger =====>
  $('.filters__trigger').click(function () {
    $('.filters').toggleClass('active');
    $('.overlay').toggleClass('active');
  });

  // Filters Apply =====>
  $('.filters-apply').click(function () {
    $('.filters').removeClass('active');
    $('.overlay').removeClass('active');
  });

  // Overlay =====>
  $('.overlay').click(function () {
    $(this).removeClass('active');
    $('.filters').removeClass('active');
  });

  // Slider in card =====>
  $('.card-slider').slick({
    slidesToShow: 1,
  });

  $('.slick-arrow').append('<i class="icon-next"></i>');
  $('.slick-arrow').click(function (e) {
    e.preventDefault();
  })

  // Checkbox =====>
  $('.filters-item').click(function() {
    var checkbox = $(this).children('input[type="checkbox"]')
    checkbox.prop("checked", !checkbox.prop("checked"));
  });

  // Dropdown's =====>
  $('.dropdown__trigger').click(function() {
    $(this).toggleClass('active');
    $(this).next('.dropdown-list').toggleClass('active');
  });
  $('.dropdown__subtrigger').click(function() {
    $(this).prev('.dropdown-sublist').toggleClass('active');
    if ($(this).prev('.dropdown-sublist').hasClass('active')) {
      $(this).children('span').text('Voir moins');
    } else {
      $(this).children('span').text('Voir plus');
    }
  });

  // Show-more =====>
  $('.more__trigger').click(function () {
    $(this).prev('.show-item').toggleClass('active');
  })

  // Hide Offer =====>
  $('.offer-btn').click(function() {
    $('.offer').hide();
  });

  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 2.49,
      max: 31.90,
      values: [ 2.49, 31.90 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "€" + ui.values[ 0 ] + " - €" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " €" +
      " et " + $( "#slider-range" ).slider( "values", 1 ) + " €" );
  });

  // Show/Hide filter trigger on scroll
  $(window).scroll(function () {
    let offsetItem1 = $('.header').height()
    let offsetItem2 = $('.breadcrumbs').height()
    let offsetItem3 = $('.page-info').height()
    let offsetItem4 = $('.sort').height()

    if ($(this).scrollTop() > offsetItem1 + offsetItem2 + offsetItem3 + offsetItem4 ) {
      $('.filters-fixed').addClass('fixed');
    } else {
      $('.filters-fixed').removeClass('fixed');
    }
  });
})