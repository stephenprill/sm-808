$(document).ready(function () {

  $("#start").click(function () {

    var a = $("#snare_input").val();
    var array = a.split("|");
    for (var i = 0; i < array.length; i++) {
      if (array[i] === "X") {
        // bpm = 60
        // 1 second = 1000

        // 1 => 4000 0
        // 2 => 4500 500
        // 3 => 5000 1000
        // 4 => 5500 1500
        // 5 => 6000 2000
        // 6 => 6500 2500
        // 7 => 7000 3000
        // 8 => 7500 3500

        var interval = ((i-1)*500)+4000;
        setInterval(function () {
          $(".pad").addClass("kick");
          setTimeout(function () {
            $(".pad").removeClass("kick");
          }, 200);
        }, interval);

        var interval2 = ((i-1)*2000)+4000;
        setInterval(function () {
          $(".pad").addClass("snare");
          setTimeout(function () {
            $(".pad").removeClass("snare");
          }, 200);
        }, interval2);

        var interval3 = ((i-1)*1000)+4000;
        setInterval(function () {
          $(".pad").addClass("hihat");
          setTimeout(function () {
            $(".pad").removeClass("hihat");
          }, 200);
        }, interval3);


      }
    }

  });

});
