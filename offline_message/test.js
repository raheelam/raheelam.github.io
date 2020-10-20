$(document).ready(function(){
    //id for the user or phone
    //<div><p id=\"friend\">santana</>
    $("#test1").html("<p>Santana's phone</p><div id=\"Santana\" class= \"messages\" ><p class=\"firstP\">Joe</p></div><br><textarea></textarea><button>goodt</button><button>text them</button><button>send</button><button>clear</button>");
    $("#test2").html("<p>Joe's phone</p></div><div id=\"Joe\" class= \"messages\" ><p class=\"firstP\">Santana</p></div><br><textarea></textarea><button>goodt</button><button>text them</button><button>send</button><button>clear</button>");
  //  $("#test2").html("<div id= \"text1\" ><p id=\"sender\"></p></div><div id= \"text2\" ><p id=\"receiver\"> </p></div><br><button>goodt</button><button>text them</button><button>send</button><button>clear</button>");
    $(".messages").css({"overflowY":"scroll","width" : "300px", "height": "100px", "border": "2px solid black" });
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
          var msg = $("<p></p>").text($(this).siblings(".messages").children().last().text());
               msg.css({
                   "background": "green",
                  
               });
              // var e = "\"#" + $(this).siblings("div").attr("id") + "\"";
              // $("\"#"+ $(this).siblings("div").attr("id") + "\"").children().last().after(msg);
           //   $(e).children().last().after(msg);
           var receiver = "#" + $(this).siblings(".messages").children(".firstP").text() ;
           alert(receiver);
           $(receiver).children().last().after(msg);
              alert( $(this).siblings(".messages").children(".firstP").text());
              alert($(this).siblings("div").attr("id"));
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
