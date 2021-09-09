$(document).ready(function(){
    $(".validar").hover(function(){$(this).css("background", "Linear-gradient(#f8bfbf,#FFF5F5)")}, 
    function(){$(this).css("background", "Linear-gradient(#f8bfbf,#ee8c8c)")})
    $(".erro").hide();
    $(".imgerro").hide();
    $('input, email').on("invalid", function(e) {
        e.preventDefault();
    });
    $(".validar").click(function(){
        var sEmail	= $("#email").val()
        var emailFilter=/^.+@.+\..{2,}$/
		var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/
        if(!(emailFilter.test(sEmail)) ||sEmail.match(illegalChars)) {
            $(".erro").show();
             $(".imgerro").show(function(){
                 $(".email").css("border-color", "hsl(0, 93%, 68%)")
            })
         }
    })
})



    
     
  
       