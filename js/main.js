$('html').removeClass('no-js').addClass('js');

$('ul.tab-nav li a').on('click', function () {
  var grandparent = $(this).parent().parent();
  grandparent.find('li').removeClass('active');
  $(this).parent().addClass('active');
  grandparent.siblings('.tab-container').children().removeClass('active');
  $($(this).attr('href')).addClass('active');
  return false;
});
