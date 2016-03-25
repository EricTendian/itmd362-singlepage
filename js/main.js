$('html').removeClass('no-js').addClass('js');

$('ul.tab-nav li a').on('click', function () {
  $(this).parent().parent().find('li').removeClass('active');
  $(this).parent().addClass('active');
  $(this).parent().parent().siblings('.tab-container').children().removeClass('active');
  $($(this).attr('href')).addClass('active');
  return false;
});
