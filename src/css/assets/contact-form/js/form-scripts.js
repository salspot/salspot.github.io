// $("#contactform").validator().on("submit", function (event) {
//     if (event.isDefaultPrevented()) {
//         // handle the invalid form...
//         formError();
//         submitMSG(false, "Please check the fields and try again.");
//     } else {
//     }
// });
//



function formSuccess(){
    $("#contactform")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactform").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 tada animated text-success";
    } else {
        var msgClasses = "h3 text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
