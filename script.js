$(document).ready(function() {
  
// сетка masonry
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 1280 / 3,
    gutter: 30,
    fitWidth: true
  });

// кнопка zoom, модальное окно
  function modalwinds(a, b) {
    $(a).click(function() {
      $(b).fadeIn();
    });
  }

  var c = $("body section").length;
  for (var i = 1; i <= c; i++)
    modalwinds("#btn" + i, "#cont" + i);

  // https://jsfiddle.net/erbx0xq3/4/ картинка-кнопка
  // https://jsfiddle.net/eo5f3nLd/5/ модальное окно для каждой кнопки

// кнопка закрытия модального окна
  $(".close").click(function() {
    $("section").fadeOut();
  });
  
// анимация скроллинга шаблона
  $(".one").hover(
    function(){
     
        $(this).children("img").css({
          '-webkit-transform' : 'translateY(-'+ ($(this).children("img").height() - $(".one").height()) + 'px)',
          '-moz-transform'    : 'translateY(-'+ ($(this).children("img").height() - $(".one").height()) + 'px)',
          '-ms-transform'     : 'translateY(-'+ ($(this).children("img").height() - $(".one").height()) + 'px)',
          '-o-transform'      : 'translateY(-'+ ($(this).children("img").height() - $(".one").height()) + 'px)',
          'transform'         : 'translateY(-'+ ($(this).children("img").height() - $(".one").height()) + 'px)',
          transition:'all 4s linear'
        });
      
    },
    function(){
      $(".one img").css({
        transition:'all 3s linear',
        transform:'translateY(0)'
      });
    }
  );
  
  // $(".article div a ").hover(
  //   function(){
  //     $(".article div a img").hide();
  //     $(".article div a").prepend("<img src='img/w-unlink.svg' width='22px'/>")
  //   },
  //   function(){
  //     $(".article div a img").hide();
  //     $(".article div a").prepend("<img src='img/unlink.svg' width='22px'/>")
  //   }
  // );

});
