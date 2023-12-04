$(function () {
  $('#subscribe-options').selectpicker({
    selectAllText: 'Hamısını seç',
    deselectAllText: 'Hamısını sil',
  });
  if (window.matchMedia("(min-width: 1200px)").matches) {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 80) {
        $('.header-top').addClass('fixed-header');
      }
      else {
        $('.header-top').removeClass('fixed-header');
      }
    });
  }
  $('.mobile-search').click(function () {
    $(this).toggleClass('active');
    $('.header-search-box').toggleClass('active');
    $('.mobile-menu').removeClass('active');
    $('.header-bottom').removeClass('active');
  })
  $('body').click(function () {
    $('.mobile-search').removeClass('active');
    $('.header-search-box').removeClass('active');
  })
  $('.header').click(function (e) {
    e.stopPropagation();
  })

  //mobile-menu
  $('.mobile-menu').click(function () {
    $(this).toggleClass('active');
    $('.header-bottom').toggleClass('active');
    $('.mobile-search').removeClass('active');
    $('.header-search-box').removeClass('active');
  })

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
  $('.filter-open').click(function () {
    $('.filter-reset,.filter-items').show();
    $(this).hide();
  })
  $('.filter-reset').click(function () {
    $(this).hide();
    $('.filter-items').hide();
    $('.filter-open').show();
  })

  $(".date-times").daterangepicker();

  /* starts contact map */
  const getId = 'map';
  if ($('.map').length > 0) {
    let a = parseFloat(document.getElementById(getId).getAttribute("lat"));
    let b = parseFloat(document.getElementById(getId).getAttribute("lng"));
    const c = document.getElementById('map_details');
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: a, lng: b },
      zoom: 12,
    });
    var infowindow = new google.maps.InfoWindow();
    var latLng = new google.maps.LatLng(a, b);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: c
    });
    infowindow.setContent(c);
  }

  $('.compt-carousel').owlCarousel({
    margin: 32,
    nav: false,
    dots: true,
    loop: true,
    slideBy: 4,
    responsive: {
      0: {
        autoWidth: true,
      },
      1000: {
        items: 4
      },
    }
  })
  $('.arrow-left-slider').click(function () {
    $('.compt-carousel .owl-prev').click();
  })
  $('.arrow-right-slider').click(function () {
    $('.compt-carousel .owl-next').click();
  })

  $('.home-slider').owlCarousel({
    nav: false,
    dots: true,
    items: 1,
    loop: true,
    smartSpeed: 1000
  })
  $('.home-slider-prev').click(function () {
    $('.home-slider .owl-prev').click();
  })
  $('.home-slider-next').click(function () {
    $('.home-slider .owl-next').click();
  })
  $('.user-eye').click(function () {
    $(this).toggleClass('active');
    let input = $(this).parent().find('input');
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  })

  $('.forget-password-btn').click(function () {
    $('.login-part').hide();
    $('.forget-password').show();
  })
  $('.screen-back').click(function () {
    $('.login-part').show();
    $('.forget-password').hide();
  })

  $('.login-btn').click(function () {
    $('.layer-screen,.layer-content,.layer-bg').addClass('active');
  })
  $('.screen-close,.layer-bg').click(function () {
    $('.layer-screen,.layer-content,.layer-bg').removeClass('active');
  })

  $('.change-password-btn').click(function(){
    $('.password-layer-screen,.password-layer-content,.password-layer-bg').addClass('active');
  })
  $('.password-screen-close,.password-layer-bg').click(function () {
    $('.password-layer-screen,.password-layer-content,.password-layer-bg').removeClass('active');
  })
  //copy function

  $(".copy-contact").click(function () {
    var textToCopy = $(this).parents('li').find('span').text();
    copyToClipboard(textToCopy);
  });

  $(".copy-contact").click(function () {
    var textToCopy = $(this).parents('li').find('span').text();
    copyToClipboard(textToCopy);
  });

  $(".pass-copy").click(function () {
    var textToCopy = $(this).parent('.forget-pass-cover').find('a').text();
    copyToClipboard(textToCopy);
  })

  function copyToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  $('#event-start-date,#event-end-date').datepicker();

  $('.yes-button').click(function(){
    if($('#yes').is(':checked')) { 
      $('.com-price,.com-link').show();
     }else{
      $('.com-price,.com-link').hide();
     }
  })
  $('.no-button').click(function(){
    if($('#no').is(':checked')) { 
      $('.com-price,.com-link').hide();
     }else{
      $('.com-price,.com-link').show();
     }
  })
  

  //drag&drop image
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('highlight');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('highlight');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('highlight');
    const file = e.dataTransfer.files[0];
    handleFile(file);
  });

  dropZone.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    handleFile(file);
  });

  function handleFile(file) {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function () {
        const img = document.createElement('img');
        img.src = reader.result;
        img.style.maxWidth = '100%';
        dropZone.innerHTML = '';
        dropZone.appendChild(img);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload an image file.');
    }
  }

});
