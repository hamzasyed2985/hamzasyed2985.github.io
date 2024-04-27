//we have used jquery because it is in bootstrap library and we are using this
//which is "collapse".
$(function(){
    $("#navbar-toggle").blur(function(event){
        var screenWidth = window.innerWidth;
        if (screenWidth < 768){
            $("#navbarSupportedContent").collapse('hide');
        }
    });
});
