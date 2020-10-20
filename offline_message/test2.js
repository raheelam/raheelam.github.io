$(document).ready(function(){
    //id for the user or phone
    //<div><p id=\"friend\">santana</>
    $("#test1").html("<p>Santana's phone</p><div id=\"Santana\" class= \"messages\" ><p class=\"firstP\">Joe</p></div><br><input type=\"text\" /><button>goodt</button><button>text them</button><button>send</button><button>clear</button>");
    $("#test2").html("<p>Joe's phone</p></div><div id=\"Joe\" class= \"messages\" ><p class=\"firstP\">Santana</p></div><br><input type=\"text\" /><button>goodt</button><button>text them</button><button>send</button><button>clear</button>");
  //  $("#test2").html("<div id= \"text1\" ><p id=\"sender\"></p></div><div id= \"text2\" ><p id=\"receiver\"> </p></div><br><button>goodt</button><button>text them</button><button>send</button><button>clear</button>");
    $(".messages").css({"width" : "250px", "height": "350px", "border": "2px solid black" });
    $("#test1, #test2").css({
         "display":"inline-block"
    });

    $("button").click(function(){
        if(($(this).text()) === "clear"){
            if($(this).siblings(".messages").children().last().hasClass("firstP") != true){
                $(this).siblings(".messages").children().last().remove();
            }
           
            //$("#sender").text(" ");
        }else if(($(this).text()) === "send"){

           // $("#receiver").append($("#sender").text() + "<br>");
          // $(this).siblings("p").value("p").text(" ");
        if($(this).siblings("input").val() != ""){ 
       // var msgS = $("<p></p>").text($(this).siblings("input").val());
      //  var msgR = $("<p></p>").text($(this).siblings("input").val());
      var date = new Date();
      var timestamp = date.getHours() +":"+ date.getMinutes();

      var msgS = $("<div></div>").html($("<p class=\"left\"></p>").text($(this).siblings("input").val() ));
      msgS.children().last().after($("<p class=\"right timestamp\"></p>").text(timestamp));
      //alert(msgS.children().last().text());
     
      
      var msgR = $("<div></div>").html($("<p class=\"left\"></p>").text($(this).siblings("input").val() ));
      msgR.children().last().after($("<p class=\"right timestamp\"></p>").text(timestamp));   
      /*  msg.css({
                   "background": "green",
                  
               }); */
              // var e = "\"#" + $(this).siblings("div").attr("id") + "\"";
              // $("\"#"+ $(this).siblings("div").attr("id") + "\"").children().last().after(msg);
           //   $(e).children().last().after(msg);
         
            $(this).siblings(".messages").children().last().after(msgS);
            $(this).siblings(".messages").children().last().addClass("sentM");
         // alert($(this).siblings(".messages").children().last().attr("class"));
            /*var sender = $(this).siblings(".messages").attr("id");
           alert(sender);
            $("#" + sender).children().last().after(msg); */
          //  $("#" + sender).children().last().addClass("sentM");
          var receiver = "#" + $(this).siblings(".messages").children(".firstP").text() ;
         // alert(receiver);
          $(receiver).children().last().after(msgR);
          $(receiver).children().last().addClass("receivedM");
          //alert($(receiver).children().last().attr("class"));

             ///alert( $(this).siblings(".messages").children(".firstP").text());
             //alert($(this).siblings("div").attr("id"));
             $(this).siblings("input").val("");
           
            }
          
        }
        else{
                //$("#sender").text($(this).text());
                var msg = $("<p></p>").text($(this).text());
               msg.addClass($(this).parent().attr("id"));
               msg.css({
                   "background": "red"
               })
                $(this).siblings(".messages").children().last().after(msg);
               alert(msg.attr("class"));
               // $(this).siblings("div").children().last().text($(this).text());
                
            }
            
       
        
    
    });
});
