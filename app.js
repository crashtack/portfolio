var product = [];

function Assembly(opts) {
  this.project = 'project';
  this.date = opts.date;
  this.category = opts.category;
  this.contribution = opts.contribution;
  this.text = opts.text;
}

Assembly.prototype.toHtml = function() {
  var $newInterest = $('production.template').clone();
  $newInterest.removeClass('template');
  // $newInterest.attr('data-category', this.category);
  $newInterest.find('.infoLine').html(this.date);
  $newInterest.find('.infoLine').html(this.contribution);
  $newInterest.find('.infoLine').html(this.project);
  $newInterest.find('.product-text').html(this.text);
  return $newInterest;

};

localData.forEach(function(ele) {
  product.push(new Assembly(ele));
});

product.forEach(function(a){
  $('#products').append(a.toHtml());
});

$('.dropdown-toggle').click(function(){
  $(this).next('.dropDown').toggle();
});

$(document).click(function(e) {
  var target = e.target;
  if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
    $('.dropDown').hide();
  }
});
