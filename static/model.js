/*jslint node: true */
'use strict';

$(document).ready(function(){
  $("#sendCall").click(function() {
    var lb = $("#phone");
    console.log(lb);
    var name = $("#name").get(0).value;
    var phone = $("#phone").get(0).value;
    if (phone.length != 0 && name.length != 0) {
      $.post('/callBack',
            {'name': name,
            'phone': phone},
            function (answer) {
              $('#answer').html(answer);
              $('#modal1').modal('close');
            });
    }else {
      $("#name").css('background', 'red');
      $("#phone").css('background', 'red');
    };
  });
});

