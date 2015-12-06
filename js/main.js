function askQuestions() {

	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?');
	var fullName = firstName + ' ' + lastName;
		console.log('User\'s name is: ' + fullName);

	var age = prompt('how old are you');
		age= parseInt(age);

	$('h4').text('Hello ' + fullName + '. You are ' + age);

	/*if(age>=18) {
		
			console.log('User is adult');
			alert('Welcome, adult!');

		} else if (age >=13) {
			console.log('User is a teenager');
			alert('come back in a few years!');

		} else {
			console.log('User is a child');
				alert('Go away, child!');

	/*if(firstName =='Renny' || age ==38) {
			console.log('you are old Renny');
		}
	*/

	/*if(firstName==='General' && lastName!=='Assembly') {
			console.log('User is right general');
			alert('Welcome'+' '+firstName+' '+lastName);	


		}
	*/
	if(firstName.toLowerCase()==='general' && lastName.toLowerCase()!=='assembly') {
			console.log('User is right general');
				alert('Welcome'+' '+firstName+' '+lastName);	


		}

	var faveColour =prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'orange') {

		$('h1').css('color',faveColour);

		}
	
	}	
	


/*alert($);*/
//JS line comment when the page has loaded
$(function() {
	
	$('img').on('click',askQuestions);
	//Hide all the things
	//$('h3').next().hide();

	//hide all but the first thing
	$('h3').not(':first-of-type').next().hide();

	// when the user clicks on an H3
	$('H3').on('click', function() {
	//$('H3').on('mouseenter', function() {
		//Hide the next element
		//camelCase
		//learn.jquery.com
		// close all sections
		$('h3').not(this).next().slideUp(100);

		
		//api.jquery.com

		//Toggle the next element
		$(this).next().slideToggle(100);
	
	}); 


});
