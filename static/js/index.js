$(function(){
  // $("#userdetail").popover({
  //   trigger:'manual',
  //   placement : 'bottom',
  //   html: 'true',
  //   content : '<div style="width:300px;height:300px;">' +
  //     '{{uu.id}}' +
  //     '</div>',
  //   animation: false
  // }).on("mouseenter", function () {
  //   var _this = this;
  //   $(this).popover("show");
  //   $(this).siblings(".popover").on("mouseleave", function () {
  //     $(_this).popover('hide');
  //   });
  // }).on("mouseleave", function () {
  //   var _this = this;
  //   setTimeout(function () {
  //     if (!$(".popover:hover").length) {
  //       $(_this).popover("hide")
  //     }
  //   }, 0);
  // });
  //课程分类展示
  $(".category").popover({
    trigger:'manual',
    placement : 'right',
    html: 'true',
    content : '',
    animation: false
  }).on("mouseenter", function () {
    var cid = $(this).attr('c-id');
    $('#' + cid).show();
    $('#' + cid).hover(function(){
      $('#' + cid).show();
    },function(){
      $('#' + cid).hide();
    });
  }).on("mouseleave", function () {
    var cid = $(this).attr('c-id');
    $('#' + cid).hide();
  });
});
