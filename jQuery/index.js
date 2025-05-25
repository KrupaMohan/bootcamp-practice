// $("h1").css("color","red");
// alert($("h1").css("font-size"));

// $("button").text("Don't click me!");

$("h1").addClass("big-title margin-50");

// $("h1").removeClass("big-title");

$("h1").hasClass("margin-50");

$("h1").text("Bye");

$("button").keypress(function(event){
    $("h1").text(event.key);
});

// $("button").click("mouseover", function(event){
//     $("h1").css("color","purple");
// });

$("h1").before("<button>Start</button");