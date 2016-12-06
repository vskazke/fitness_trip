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
  $("#Details").click(function() {
    var slug = $("#slug").get(0).innerHTML;
    console.log(slug);
    $.post('/tour_details/',
          {'slug': slug},
          function (tour) {
            // $('#answer').load(tour);
            $('.modal1').modal();
              $('#answer').append( '<div id="tour_details" class="modal">');
                                        // // <img id="details_image" src="{{url_for('static', filename = tour.image)}}">
                                        // // <p><strong>Даты: </strong>{{tour.date}} {{tour.nights}}<span id="price">{{tour.price}}</span></p>
                                        // // <p>{{tour.service}}</p>
                                        // // <p><strong>{{tour.service}}</strong></p>
                                        // // <p>{{tour.body|safe }}</p>
          });
    // }else {
      // $("#name").css('background', 'red');
      // $("#phone").css('background', 'red');
    // };
  });
});

