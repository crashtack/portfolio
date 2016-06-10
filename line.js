
var productView = {};

productView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var val = $(this).find('address a').text();
    var optionTag = '<option value"' + val + '">' + val + '</option>';
    $('#projects').append(optionTag);

    val = $(this).attr('data-category');
    optionTag = '<option value="' + val + '">' + val + '</option>';
    if ($('#interest option[value="' + val + '"]').length === 0) {
      $('#interest').append(optionTag);
    }

  });
};

productView.handleProjectsFilter = function() {
  $('#projects').on('change', function() {
    if($(this).val ()) {
      $('article').hide();
      $('[data-attribute="' + this.value + '"]').fadeIn('fast');

    } else {
      $('article').not('.template').show();
    }
    $('#interest').val('');
  });
};

productView.handleInterestFilter = function() {
  $('#interest').on('change', function() {
    if ($(this).val()){
      $('article').hide();
      $('article[data-category="' + this.value + '"]').fadeIn('fast');
    }
    else {
      $('article').not('.template').show();
    }
  });
  $('#projects').val('');
};

productView.setTeasers = function() {
  $('.product-text *:nth-of-type(n+2)').hide();
  $('#products').on('click', '.read-on', function() {
    event.preventDefault();
    $(this).parent().find('*').fadeIn('fast');
    $(this).text('Show less');
    $(this).attr('class', 'show-less');
    $(this).removeClass('.read-on');
  });

  $('#products').on('click', '.show-less', function() {
    event.preventDefault();
    $('.product-text *:nth-of-type(n+2)').hide();
    $(this).text('Read on');
    $(this).attr('class', 'read-on');
    $(this).removeClass('.show-less');
  });
};

$(document).ready(function() {
  productView.populateFilters();
  productView.handleProjectsFilter();
  productView.handleInterestFilter();
  // productView.handleMainNav();
  productView.setTeasers();
});
