/*jslint node: true */
'use strict';

$(document).ready(function(){
  // $("#sendCall").click(function() {
        // var lb = $("#phone");
        // console.log(lb);
        // var name = $("#name").get(0).value;
        // var phone = $("#phone").get(0).value;
        // if (phone.length != 0 && name.length != 0) {
                // $.post('/callBack',
                              // {'name': name,
                                            // 'phone': phone},
                              // function (answer) {
                                              // $('#answer').html(answer);
                                              // $('#modal1').modal('close');
                                            // });
              // }else {
                // $("#name").css('background', 'red');
                // $("#phone").css('background', 'red');
              // };
      // });
  $("#sendCall").click(function() {
    var lb = $("#phone");
    console.log(lb);
    var name = $("#name").get(0).value;
    var phone = $("#phone").get(0).value;
    var tour = $("#tour").get(0).value;
    var email = $("#email").get(0).value;
    console.log(name, phone, tour, email);
    if (phone.length != 0 && name.length != 0) {
      $.post('/callBack',
            {'name': name,
              'phone': phone,
              'tour': tour,
              'email': email},
            function (answer) {
              $('#answer').html(answer);
              $('#modal').modal('close');
            });
    }else {
      $("#name").css('background', 'red');
      $("#phone").css('background', 'red');
    };
  });
  $("#sendTour").click(function() {
    var lb = $("#phone");
    console.log(lb);
    var name = $("#nameTour").get(0).value;
    var phone = $("#phoneTour").get(0).value;
    var tour = $("#tourAnswer").get(0).value;
    var email = $("#emailTour").get(0).value;
    console.log(name);
    if (phone.length != 0 && name.length != 0) {
      $.post('/callBack',
            {'name': name,
              'phone': phone,
              'tour': tour,
            'email': email},
            function (answer) {
              // $('#answer').html(answer);
              $('#modal1').modal('close');
            });
    }else {
      $("#nameTour").css('background', 'red');
      $("#phoneTour").css('background', 'red');
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
  $("#getTour").click(function() {
    var tour = $("#tourName").get(0).innerHTML;
    if (tour) {
      $.post('/getTour',
            {'tour': tour},
            function (answer) {
              console.log(answer);
              $('#tourAnswer').get(0).value = answer;
              $('#tourAnswer').get(0).disabled = true;
            });
      };
    });
});

