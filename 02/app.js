jQuery('.dropdown-toggle').click(function(){
  jQuery(this).next('.dropDown').toggle();
});

jQuery(document).click(function(e) {
  var target = e.target;
  if (!jQuery(target).is('.dropdown-toggle') && !jQuery(target).parents().is('.dropdown-toggle')) {
    jQuery('.dropDown').hide();
  }
});
