
// Waiting for the DOM to finish loading
$(document).ready(function(){

	var contacts = []
	var count = 0;

	var addContact = function(newContact){
		var contactString = ["<li id='", newContact.id, "''>",
								"<div>", newContact.name, "</div>",
								"<div>", newContact.email, "</div>",
								"<div>", newContact.number, "</div>",
								"<span class='edit'>Edit</span>",
								"<span class='delete'>Delete</span>",
							"</li>"].join("");
		console.log(contactString);

		$("#contacts").append(contactString);
	};

	$('ul').on('click', '.delete', function(){
  		$(this).parent().fadeOut(500, function(){
    	$(this).remove();
  		});  
	});

	// Now we need to watch for a submit 
	// event on the form 

	$("#new_contact").submit(function(event){
		// Prevent the page from reloading 
		event.preventDefault();

		// console.log(this);

		var name = $("#contact_name").val();
		var email = $("#contact_email").val();
		var number = $("#contact_number").val();
		var imgUrl = $("#contact_image_url").val();

		console.log(name, email,number, imgUrl);

		// Reset the form: 
		this.reset();

		//Keeping track of new contacts: 
		var newContact = { id: count,
							name: name,
							email: email,
							number: number, 
							imgUrl: imgUrl};
		count += 1;

		contacts.push(newContact);

		// Call a function to add our contact to 
		// the page: 
		addContact(newContact);



	});
});



// $(document).ready(function(){
//   $('#addContact').click(function(e){
//       e.preventDefault();
//       var name=$('#name').val(),
//       	phone=$('#phone').val(),
//       	email=$('#email').val(),
//       	image=$('#image').val();
//       	$('.inputField').val("");
//       	addContact(name, phone, email, image);



//       });

//   var addContact = function(name, phone, email, image)
//   {
//   	var newContact = "<li>" + name + "<br>" + phone + "<br>" + email + "<br>" + image + "<span class = 'delete'>Delete</span></li>"
//   	$(newContact).hide().appendTo('ul').fadeIn(500);
//   }

// //   $('ul').on('click', 'li', function(){
// //   var newContact = $(this);
// //   newContact.toggleClass('completed');
 
// // });

// $('ul').on('click', 'span', function(){
//   $(this).parent().fadeOut(500, function(){
//     $(this).remove();
//   });  
// });


// }) 
// var seedTodos = ["Walk Dog", "Buy Milk", "Go Vegan"];

// $(document).ready(function(){
//   $('input').keypress(function(e){
//     if(e.which == 13){
//       e.preventDefault();
//     var text  = $('input').val();
//       if(!text.length) {
//         return;
//       }
//         else {
//     $('input').val("");
//       addTodo(text);
//       }
//     }
//   });
  
//   var addTodo = function(text){
//     var newTodo = "<li>" + text + "<span class = 'delete'>Delete</span></li>" 
//     $(newTodo).hide().appendTo('ul').fadeIn(500);
//   }
  
// });

// $('ul').on('click', 'li', function(){
//   var todo = $(this);
//   todo.toggleClass('completed');
 
// });

// $('ul').on('click', 'span', function(){
//   $(this).parent().fadeOut(500, function(){
//     $(this).remove();
//   });  
// });

// $('#deleteAll').click(function(){
//   $('li.completed').fadeOut(500, function(){
//     $(this).remove();
//   })
  
