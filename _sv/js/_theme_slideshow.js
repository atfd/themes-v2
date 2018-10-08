console.log('slideshow');

$(document).ready(function(){

  $('.sv-content-main').isotope({
    itemSelector: '.sv-block',
    percentPosition: true
    // columnWidth: 50
  });

});
