$(function(){
  $(".plus").toggle(function(){
    event.preventDefault();
    $(this).addClass("plus-on");
    $(".path").addClass("path-on");
    $(".item:last").bind('animationend oAnimationEnd webkitAnimationEnd', function() {
      $(".path").addClass("path-on-end").removeClass("path-on").removeClass("path-off-end");
    });
  },function(){
    event.preventDefault();
    $(this).removeClass("plus-on");
    $(".path").addClass("path-off");
    $(".item:first").bind('animationend oAnimationEnd webkitAnimationEnd', function() {
      $(".path").addClass("path-off-end").removeClass("path-off").removeClass("path-on-end");
    });
  });
});