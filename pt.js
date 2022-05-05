
$(document).ready(function(){
//  alert("j on");
  $(".resert").click(function(){
    window.localStorage.setItem("months", 0);
    window.localStorage.setItem('money', 100);
    location.reload();
  });

  if (window.localStorage.getItem("months") <= 20) {

    $("#cons").removeClass("cons2");
    var daysFromMonths = window.localStorage.getItem("months");
    var totalMoney = window.localStorage.getItem("money");

    var element = document.getElementById("money");
    element.innerHTML = totalMoney;

    for (var days = 0; days <= JSON.parse(daysFromMonths); days++) {
      $("#" + days).addClass("dotTrue");
    }

        if (totalMoney >= 200) {
          $("#btnN").click(function(){
            var plus1Day = JSON.parse(daysFromMonths) + 1;
            var plus5Money = JSON.parse(totalMoney) + 10;
            window.localStorage.setItem("months", plus1Day);
            window.localStorage.setItem("money", plus5Money);
            location.reload();
          });
        }else {
          $("#btnN").click(function(){
            var plus1Day = JSON.parse(daysFromMonths) + 1;
            var plus5Money = JSON.parse(totalMoney) + 5;
            window.localStorage.setItem("months", plus1Day);
            window.localStorage.setItem("money", plus5Money);
            location.reload();
          });
        }

        $("#btnB").click(function(){
          var minus1Day = JSON.parse(daysFromMonths) - 1;
          var minus5Money = JSON.parse(totalMoney) - 5;
          window.localStorage.setItem("months", minus1Day);
          window.localStorage.setItem("money", minus5Money);
          location.reload();
        });

  }else if (window.localStorage.getItem("months") > 20 && window.localStorage.getItem("months") <= 40) {

    $("#cons").removeClass("cons3");
    $("#cons").addClass("cons2");

        var element = document.getElementById("btnN");
        element.innerHTML = "+10";
        var element = document.getElementById("btnB");
        element.innerHTML = "-10";

        for (var i = 0; i <= 20; i++) {
          $("#" + i).removeClass("dotTrue");
        }

        var daysFromMonths = window.localStorage.getItem("months");
        var totalMoney = window.localStorage.getItem("money");
        var daysFromMonthsMinus = JSON.parse(daysFromMonths) - 20;

        var totalMoneydsplay = document.getElementById("money");
        totalMoneydsplay.innerHTML = totalMoney;

        for (var days = 0; days <= daysFromMonthsMinus; days++) {
          $("#" + days).addClass("dotTrue");
        }

                if (totalMoney >= 400) {
                  $("#btnN").click(function(){
                    var plus1Day = JSON.parse(daysFromMonths) + 1;
                    var plus5Money = JSON.parse(totalMoney) + 20;
                    window.localStorage.setItem("months", plus1Day);
                    window.localStorage.setItem("money", plus5Money);
                    location.reload();
                  });
                }else {
                  $("#btnN").click(function(){
                    var plus1Day = JSON.parse(daysFromMonths) + 1;
                    var plus5Money = JSON.parse(totalMoney) + 10;
                    window.localStorage.setItem("months", plus1Day);
                    window.localStorage.setItem("money", plus5Money);
                    location.reload();
                  });
                }

            $("#btnB").click(function(){
              var minus1Day = JSON.parse(daysFromMonths) - 1;
              var minus5Money = JSON.parse(totalMoney) - 10;
              window.localStorage.setItem("months", minus1Day);
              window.localStorage.setItem("money", minus5Money);
              location.reload();
            });

  }else if (window.localStorage.getItem("months") > 40 && window.localStorage.getItem("months") <= 60) {

        $("#cons").removeClass("cons2");
        $("#cons").removeClass("cons4");
        $("#cons").addClass("cons3");

            var element = document.getElementById("btnN");
            element.innerHTML = "+20";
            var element = document.getElementById("btnB");
            element.innerHTML = "-20";

            for (var i = 0; i <= 20; i++) {
              $("#" + i).removeClass("dotTrue");
            }

            var daysFromMonths = window.localStorage.getItem("months");
            var totalMoney = window.localStorage.getItem("money");
            var daysFromMonthsMinus = JSON.parse(daysFromMonths) - 40;

            var totalMoneydsplay = document.getElementById("money");
            totalMoneydsplay.innerHTML = totalMoney;

            for (var days = 0; days <= daysFromMonthsMinus; days++) {
              $("#" + days).addClass("dotTrue");
            }

                            if (totalMoney >= 800) {
                              $("#btnN").click(function(){
                                var plus1Day = JSON.parse(daysFromMonths) + 1;
                                var plus5Money = JSON.parse(totalMoney) + 40;
                                window.localStorage.setItem("months", plus1Day);
                                window.localStorage.setItem("money", plus5Money);
                                location.reload();
                              });
                            }else {
                              $("#btnN").click(function(){
                                var plus1Day = JSON.parse(daysFromMonths) + 1;
                                var plus5Money = JSON.parse(totalMoney) + 20;
                                window.localStorage.setItem("months", plus1Day);
                                window.localStorage.setItem("money", plus5Money);
                                location.reload();
                              });
                            }

                $("#btnB").click(function(){
                  var minus1Day = JSON.parse(daysFromMonths) - 1;
                  var minus5Money = JSON.parse(totalMoney) - 20;
                  window.localStorage.setItem("months", minus1Day);
                  window.localStorage.setItem("money", minus5Money);
                  location.reload();
                });

  }else if (window.localStorage.getItem("months") > 60 && window.localStorage.getItem("months") <= 80) {

        $("#cons").removeClass("cons3");
        $("#cons").removeClass("cons5");
        $("#cons").addClass("cons4");

            var element = document.getElementById("btnN");
            element.innerHTML = "+40";
            var element = document.getElementById("btnB");
            element.innerHTML = "-40";

                for (var i = 0; i <= 20; i++) {
                  $("#" + i).removeClass("dotTrue");
                }

                var daysFromMonths = window.localStorage.getItem("months");
                var totalMoney = window.localStorage.getItem("money");
                var daysFromMonthsMinus = JSON.parse(daysFromMonths) - 60;

                var totalMoneydsplay = document.getElementById("money");
                totalMoneydsplay.innerHTML = totalMoney;

                for (var days = 0; days <= daysFromMonthsMinus; days++) {
                  $("#" + days).addClass("dotTrue");
                }

                                if (totalMoney >= 1600) {
                                  $("#btnN").click(function(){
                                    var plus1Day = JSON.parse(daysFromMonths) + 1;
                                    var plus5Money = JSON.parse(totalMoney) + 80;
                                    window.localStorage.setItem("months", plus1Day);
                                    window.localStorage.setItem("money", plus5Money);
                                    location.reload();
                                  });
                                }else {
                                  $("#btnN").click(function(){
                                    var plus1Day = JSON.parse(daysFromMonths) + 1;
                                    var plus5Money = JSON.parse(totalMoney) + 40;
                                    window.localStorage.setItem("months", plus1Day);
                                    window.localStorage.setItem("money", plus5Money);
                                    location.reload();
                                  });
                                }

                    $("#btnB").click(function(){
                      var minus1Day = JSON.parse(daysFromMonths) - 1;
                      var minus5Money = JSON.parse(totalMoney) - 40;
                      window.localStorage.setItem("months", minus1Day);
                      window.localStorage.setItem("money", minus5Money);
                      location.reload();
                    });

  }else if (window.localStorage.getItem("months") > 80 && window.localStorage.getItem("months") <= 100) {

        $("#cons").removeClass("cons4");
        $("#cons").removeClass("cons6");
        $("#cons").addClass("cons5");

            var element = document.getElementById("btnN");
            element.innerHTML = "+80";
            var element = document.getElementById("btnB");
            element.innerHTML = "-80";

                    for (var i = 0; i <= 20; i++) {
                      $("#" + i).removeClass("dotTrue");
                    }

                    var daysFromMonths = window.localStorage.getItem("months");
                    var totalMoney = window.localStorage.getItem("money");
                    var daysFromMonthsMinus = JSON.parse(daysFromMonths) - 80;

                    var totalMoneydsplay = document.getElementById("money");
                    totalMoneydsplay.innerHTML = totalMoney;

                    for (var days = 0; days <= daysFromMonthsMinus; days++) {
                      $("#" + days).addClass("dotTrue");
                    }

                        if (totalMoney >= 3200) {
                          $("#btnN").click(function(){
                            var plus1Day = JSON.parse(daysFromMonths) + 1;
                            var plus5Money = JSON.parse(totalMoney) + 160;
                            window.localStorage.setItem("months", plus1Day);
                            window.localStorage.setItem("money", plus5Money);
                            location.reload();
                          });
                        }else {
                          $("#btnN").click(function(){
                            var plus1Day = JSON.parse(daysFromMonths) + 1;
                            var plus5Money = JSON.parse(totalMoney) + 80;
                            window.localStorage.setItem("months", plus1Day);
                            window.localStorage.setItem("money", plus5Money);
                            location.reload();
                          });
                        }

                        $("#btnB").click(function(){
                          var minus1Day = JSON.parse(daysFromMonths) - 1;
                          var minus5Money = JSON.parse(totalMoney) - 80;
                          window.localStorage.setItem("months", minus1Day);
                          window.localStorage.setItem("money", minus5Money);
                          location.reload();
                        });

  }else if (window.localStorage.getItem("months") > 100 && window.localStorage.getItem("months") <= 120) {

        $("#cons").removeClass("cons5");
        $("#cons").removeClass("cons7");
        $("#cons").addClass("cons6");

                var element = document.getElementById("btnN");
                element.innerHTML = "+160";
                var element = document.getElementById("btnB");
                element.innerHTML = "-160";

                        for (var i = 0; i <= 20; i++) {
                          $("#" + i).removeClass("dotTrue");
                        }

                        var daysFromMonths = window.localStorage.getItem("months");
                        var totalMoney = window.localStorage.getItem("money");
                        var daysFromMonthsMinus = JSON.parse(daysFromMonths) - 100;

                        var totalMoneydsplay = document.getElementById("money");
                        totalMoneydsplay.innerHTML = totalMoney;

                        for (var days = 0; days <= daysFromMonthsMinus; days++) {
                          $("#" + days).addClass("dotTrue");
                        }

                                                if (totalMoney >= 6400) {
                                                  $("#btnN").click(function(){
                                                    var plus1Day = JSON.parse(daysFromMonths) + 1;
                                                    var plus5Money = JSON.parse(totalMoney) + 320;
                                                    window.localStorage.setItem("months", plus1Day);
                                                    window.localStorage.setItem("money", plus5Money);
                                                    location.reload();
                                                  });
                                                }else {
                                                  $("#btnN").click(function(){
                                                    var plus1Day = JSON.parse(daysFromMonths) + 1;
                                                    var plus5Money = JSON.parse(totalMoney) + 160;
                                                    window.localStorage.setItem("months", plus1Day);
                                                    window.localStorage.setItem("money", plus5Money);
                                                    location.reload();
                                                  });
                                                }

                            $("#btnB").click(function(){
                              var minus1Day = JSON.parse(daysFromMonths) - 1;
                              var minus5Money = JSON.parse(totalMoney) - 160;
                              window.localStorage.setItem("months", minus1Day);
                              window.localStorage.setItem("money", minus5Money);
                              location.reload();
                            });

  }else if (window.localStorage.getItem("months") > 120 && window.localStorage.getItem("months") <= 140) {

        $("#cons").removeClass("cons6");
        $("#cons").removeClass("cons8");
        $("#cons").addClass("cons7");

                var element = document.getElementById("btnN");
                element.innerHTML = "+320";
                var element = document.getElementById("btnB");
                element.innerHTML = "-320";

                            for (var i = 0; i <= 20; i++) {
                              $("#" + i).removeClass("dotTrue");
                            }

                            var daysFromMonths = window.localStorage.getItem("months");
                            var totalMoney = window.localStorage.getItem("money");
                            var daysFromMonthsMinus = JSON.parse(daysFromMonths) - 120;

                            var totalMoneydsplay = document.getElementById("money");
                            totalMoneydsplay.innerHTML = totalMoney;

                            for (var days = 0; days <= daysFromMonthsMinus; days++) {
                              $("#" + days).addClass("dotTrue");
                            }

                                                    if (totalMoney >= 12800) {
                                                      $("#btnN").click(function(){
                                                        var plus1Day = JSON.parse(daysFromMonths) + 1;
                                                        var plus5Money = JSON.parse(totalMoney) + 640;
                                                        window.localStorage.setItem("months", plus1Day);
                                                        window.localStorage.setItem("money", plus5Money);
                                                        location.reload();
                                                      });
                                                    }else {
                                                      $("#btnN").click(function(){
                                                        var plus1Day = JSON.parse(daysFromMonths) + 1;
                                                        var plus5Money = JSON.parse(totalMoney) + 320;
                                                        window.localStorage.setItem("months", plus1Day);
                                                        window.localStorage.setItem("money", plus5Money);
                                                        location.reload();
                                                      });
                                                    }

                                $("#btnB").click(function(){
                                  var minus1Day = JSON.parse(daysFromMonths) - 1;
                                  var minus5Money = JSON.parse(totalMoney) - 320;
                                  window.localStorage.setItem("months", minus1Day);
                                  window.localStorage.setItem("money", minus5Money);
                                  location.reload();
                                });

  }else if (window.localStorage.getItem("months") > 140 && window.localStorage.getItem("months") <= 160) {

            $("#cons").removeClass("cons7");
            $("#cons").removeClass("cons9");
            $("#cons").addClass("cons8");

                var element = document.getElementById("btnN");
                element.innerHTML = "+640";
                var element = document.getElementById("btnB");
                element.innerHTML = "-640";

                                for (var i = 0; i <= 20; i++) {
                                  $("#" + i).removeClass("dotTrue");
                                }

                                var daysFromMonths = window.localStorage.getItem("months");
                                var totalMoney = window.localStorage.getItem("money");
                                var daysFromMonthsMinus = JSON.parse(daysFromMonths) - 140;

                                var totalMoneydsplay = document.getElementById("money");
                                totalMoneydsplay.innerHTML = totalMoney;

                                for (var days = 0; days <= daysFromMonthsMinus; days++) {
                                  $("#" + days).addClass("dotTrue");
                                }

                                if (totalMoney >= 25600) {
                                  $("#btnN").click(function(){
                                    var plus1Day = JSON.parse(daysFromMonths) + 1;
                                    var plus5Money = JSON.parse(totalMoney) + 1280;
                                    window.localStorage.setItem("months", plus1Day);
                                    window.localStorage.setItem("money", plus5Money);
                                    location.reload();
                                  });
                                }else {
                                  $("#btnN").click(function(){
                                    var plus1Day = JSON.parse(daysFromMonths) + 1;
                                    var plus5Money = JSON.parse(totalMoney) + 640;
                                    window.localStorage.setItem("months", plus1Day);
                                    window.localStorage.setItem("money", plus5Money);
                                    location.reload();
                                  });
                                }

                                    $("#btnB").click(function(){
                                      var minus1Day = JSON.parse(daysFromMonths) - 1;
                                      var minus5Money = JSON.parse(totalMoney) - 640;
                                      window.localStorage.setItem("months", minus1Day);
                                      window.localStorage.setItem("money", minus5Money);
                                      location.reload();
                                    });

  }else if (window.localStorage.getItem("months") > 160 && window.localStorage.getItem("months") <= 180) {

            $("#cons").removeClass("cons8");
            $("#cons").removeClass("cons10");
            $("#cons").addClass("cons9");

                var element = document.getElementById("btnN");
                element.innerHTML = "+1 280";
                var element = document.getElementById("btnB");
                element.innerHTML = "-1 280";

                                for (var i = 0; i <= 20; i++) {
                                  $("#" + i).removeClass("dotTrue");
                                }

                                var daysFromMonths = window.localStorage.getItem("months");
                                var totalMoney = window.localStorage.getItem("money");
                                var daysFromMonthsMinus = JSON.parse(daysFromMonths) - 160;

                                var totalMoneydsplay = document.getElementById("money");
                                totalMoneydsplay.innerHTML = totalMoney;

                                for (var days = 0; days <= daysFromMonthsMinus; days++) {
                                  $("#" + days).addClass("dotTrue");
                                }

                                if (totalMoney >= 51200) {
                                  $("#btnN").click(function(){
                                    var plus1Day = JSON.parse(daysFromMonths) + 1;
                                    var plus5Money = JSON.parse(totalMoney) + 2560;
                                    window.localStorage.setItem("months", plus1Day);
                                    window.localStorage.setItem("money", plus5Money);
                                    location.reload();
                                  });
                                }else {
                                  $("#btnN").click(function(){
                                    var plus1Day = JSON.parse(daysFromMonths) + 1;
                                    var plus5Money = JSON.parse(totalMoney) + 1280;
                                    window.localStorage.setItem("months", plus1Day);
                                    window.localStorage.setItem("money", plus5Money);
                                    location.reload();
                                  });
                                }

                                    $("#btnB").click(function(){
                                      var minus1Day = JSON.parse(daysFromMonths) - 1;
                                      var minus5Money = JSON.parse(totalMoney) - 1280;
                                      window.localStorage.setItem("months", minus1Day);
                                      window.localStorage.setItem("money", minus5Money);
                                      location.reload();
                                    });

  }else if (window.localStorage.getItem("months") > 180 && window.localStorage.getItem("months") <= 200) {

            $("#cons").removeClass("cons9");
            $("#cons").removeClass("cons11");
            $("#cons").addClass("cons10");

                var element = document.getElementById("btnN");
                element.innerHTML = "+2 560";
                var element = document.getElementById("btnB");
                element.innerHTML = "-2 560";

                                    for (var i = 0; i <= 20; i++) {
                                      $("#" + i).removeClass("dotTrue");
                                    }

                                    var daysFromMonths = window.localStorage.getItem("months");
                                    var totalMoney = window.localStorage.getItem("money");
                                    var daysFromMonthsMinus = JSON.parse(daysFromMonths) - 180;

                                    var totalMoneydsplay = document.getElementById("money");
                                    totalMoneydsplay.innerHTML = totalMoney;

                                    for (var days = 0; days <= daysFromMonthsMinus; days++) {
                                      $("#" + days).addClass("dotTrue");
                                    }

                                    if (totalMoney >= 102400) {
                                      $("#btnN").click(function(){
                                        var plus1Day = JSON.parse(daysFromMonths) + 1;
                                        var plus5Money = JSON.parse(totalMoney) + 5120;
                                        window.localStorage.setItem("months", plus1Day);
                                        window.localStorage.setItem("money", plus5Money);
                                        location.reload();
                                      });
                                    }else {
                                      $("#btnN").click(function(){
                                        var plus1Day = JSON.parse(daysFromMonths) + 1;
                                        var plus5Money = JSON.parse(totalMoney) + 2560;
                                        window.localStorage.setItem("months", plus1Day);
                                        window.localStorage.setItem("money", plus5Money);
                                        location.reload();
                                      });
                                    }

                                        $("#btnB").click(function(){
                                          var minus1Day = JSON.parse(daysFromMonths) - 1;
                                          var minus5Money = JSON.parse(totalMoney) - 2560;
                                          window.localStorage.setItem("months", minus1Day);
                                          window.localStorage.setItem("money", minus5Money);
                                          location.reload();
                                        });

  }else if (window.localStorage.getItem("months") > 200 && window.localStorage.getItem("months") <= 220) {

            $("#cons").removeClass("cons10");
            $("#cons").removeClass("cons12");
            $("#cons").addClass("cons11");

                var element = document.getElementById("btnN");
                element.innerHTML = "+5 120";
                var element = document.getElementById("btnB");
                element.innerHTML = "-5 120";

                                    for (var i = 0; i <= 20; i++) {
                                      $("#" + i).removeClass("dotTrue");
                                    }

                                    var daysFromMonths = window.localStorage.getItem("months");
                                    var totalMoney = window.localStorage.getItem("money");
                                    var daysFromMonthsMinus = JSON.parse(daysFromMonths) - 200;

                                    var totalMoneydsplay = document.getElementById("money");
                                    totalMoneydsplay.innerHTML = totalMoney;

                                    for (var days = 0; days <= daysFromMonthsMinus; days++) {
                                      $("#" + days).addClass("dotTrue");
                                    }

                                    if (totalMoney >= 204800) {
                                      $("#btnN").click(function(){
                                        var plus1Day = JSON.parse(daysFromMonths) + 1;
                                        var plus5Money = JSON.parse(totalMoney) + 10240;
                                        window.localStorage.setItem("months", plus1Day);
                                        window.localStorage.setItem("money", plus5Money);
                                        location.reload();
                                      });
                                    }else {
                                      $("#btnN").click(function(){
                                        var plus1Day = JSON.parse(daysFromMonths) + 1;
                                        var plus5Money = JSON.parse(totalMoney) + 5120;
                                        window.localStorage.setItem("months", plus1Day);
                                        window.localStorage.setItem("money", plus5Money);
                                        location.reload();
                                      });
                                    }

                                        $("#btnB").click(function(){
                                          var minus1Day = JSON.parse(daysFromMonths) - 1;
                                          var minus5Money = JSON.parse(totalMoney) - 5120;
                                          window.localStorage.setItem("months", minus1Day);
                                          window.localStorage.setItem("money", minus5Money);
                                          location.reload();
                                        });

  }else if (window.localStorage.getItem("months") > 220 && window.localStorage.getItem("months") <= 240) {

            $("#cons").removeClass("cons11");
            $("#cons").removeClass("cons13");
            $("#cons").addClass("cons12");

                    var element = document.getElementById("btnN");
                    element.innerHTML = "+10 240";
                    var element = document.getElementById("btnB");
                    element.innerHTML = "-10 240";

                                    for (var i = 0; i <= 20; i++) {
                                      $("#" + i).removeClass("dotTrue");
                                    }

                                    var daysFromMonths = window.localStorage.getItem("months");
                                    var totalMoney = window.localStorage.getItem("money");
                                    var daysFromMonthsMinus = JSON.parse(daysFromMonths) - 220;

                                    var totalMoneydsplay = document.getElementById("money");
                                    totalMoneydsplay.innerHTML = totalMoney;

                                    for (var days = 0; days <= daysFromMonthsMinus; days++) {
                                      $("#" + days).addClass("dotTrue");
                                    }

                                    if (totalMoney >= 409600) {
                                       alert("@forex_noob For UPDATE");
                                    }else {
                                      $("#btnN").click(function(){
                                        var plus1Day = JSON.parse(daysFromMonths) + 1;
                                        var plus5Money = JSON.parse(totalMoney) + 10240;
                                        window.localStorage.setItem("months", plus1Day);
                                        window.localStorage.setItem("money", plus5Money);
                                        location.reload();
                                      });
                                    }

                                        $("#btnB").click(function(){
                                          var minus1Day = JSON.parse(daysFromMonths) - 1;
                                          var minus5Money = JSON.parse(totalMoney) - 10240;
                                          window.localStorage.setItem("months", minus1Day);
                                          window.localStorage.setItem("money", minus5Money);
                                          location.reload();
                                        });

  }else {
    console.log("error somewhere");
  }


});
