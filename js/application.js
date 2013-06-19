jQuery(document).ready(function($) {

	$('#subscribe').click(function(event) {
		if( $('#subscribe:checked').val() ) {
			$('#subscribe-email').slideDown('slow');

		}else{
			$('#subscribe-email').slideUp('slow');
	}
	});


	alert($('#subscribe:checked').val());
	$('#submit').click(function(event) {
		console.log("submit button was clicked");
	});
		$("#form").validate({
			errorClass : "inputError",

			// errorPlacement : function(error, element){
				// console.log(error);
				// console.log(element);

			// },

			rules : {
				username : {
					required: true,
					email : true
			},

			password : {
				required : true,
				minlength : 6,
				maxlength : 10
			}
		},

		messages : {
			username : {
				required : "Come on now, don't be shy",
				email : "We need real email"
			},

			password : {
				required : "We need a password!",
				minlength : jQuery.format("Pasword must be at least {0} characters!"),
				maxlength : jQuery.format("Pasword must be less than {0} characters, G!")
			}
		}

	});
});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

