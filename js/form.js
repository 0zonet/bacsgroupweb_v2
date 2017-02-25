;(function(){
	const url = "https://formspree.io/contacto@bacs.cl";


	$("#contactform").submit(function(e){
		e.preventDefault();
		let email = $("#email").val()
		let name = $("#name").val()
		let message = $("#message").val()
		$.ajax({
		    url: url, 
		    method: "POST",
		    data: {email: email, name: name, message : message },
		    dataType: "json"
		}).done(function(){
			$("#responseform").html("<p class='message top-space'> Gracias por contactarnos, te responderemos lo antes posible.</p>");
		})
	})


})()