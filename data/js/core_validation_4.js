//////////////////////////////////////////////
//Author: Jordan Micah Bennett, BookJaa V2 2017
$(document).ready
(
	function ( ) 
	{
		$( '#SignUpReturn' ).click
		(
			function ( )
			{
				window.open ("index.html",'_self',false);
			}
		);
		
		$( '#JoinEntryBtn' ).click
		(
			function ( )
			{
				window.open ("join.html",'_self',false);
			}
		);
		
		$( '#JoinBtn' ).click
		(
			function ( )
			{
				var newStudentName = document.getElementById ( 'StudentName' ).value;
				var newStudentEmail = document.getElementById ( 'StudentEmail' ).value;
				var newStudentPassword = document.getElementById ( 'StudentPassword' ).value;
				var newStudentRepeatPassword = document.getElementById ( 'StudentRepeatPassword' ).value;
				var newStudentPhone = document.getElementById ( 'StudentPhone' ).value;
				
				enableNewStudentEntry ( newStudentName, newStudentEmail, newStudentPassword, newStudentPhone );
			}
		);
		
		$( '#LoginBtn' ).click
		(
			function ( )
			{
				var userSignInEmail = document.getElementById ( 'UserEmail' ).value;
				var userSignInPassword = document.getElementById ( 'UserPassword' ).value;
				
				enableUserLogin ( userSignInEmail, userSignInPassword );
			}
		);
	}
);




function enableUserLogin ( userEmail, userPassword )
{
	_enableUserLogin_adminValidation ( userEmail, userPassword );
}

function _enableUserLogin_adminValidation ( userEmail, userPassword )
{
	var userSignInEmailQuery = '?SIGN_IN_USER_EMAIL_GET_VALUE='+userEmail;
	var userSignInPasswordQuery = '&SIGN_IN_USER_PASSWORD_GET_VALUE='+userPassword;
	
	
	var signInQueryString = userSignInEmailQuery + userSignInPasswordQuery;
	
	event.preventDefault ( );

		$.ajax(
		{
			type: 'GET',

			url: 'data/phps/_php.user.validation.admins.php'+signInQueryString,

			dataType: 'json',

			success: function (data) 
			{
				$.ajax(
				{

					type: 'GET',

					url: 'data/phps/_php.level.list.php',

					dataType: 'json',

					success: function (level_data) 
					{
						if ( data ) //if admin is found by email, trigger admin login trial
						{
							if ( data[0].adminPassword == userPassword )
							{
								///////////////
								//open different ui frontends (ui with different components access), based on different levels
								if ( data[0].adminLevel == level_data[0].itemName ) //where level_data[0] is bottom level, or admin
									window.open ("scheduler_admin_system.html"+ "?ADMIN_NAME=" + data[0].adminName + "&ADMIN_ID=" + userEmail,'_self',false);
									
								if ( data[0].adminLevel == level_data[1].itemName ) //where level_data[1] is second to bottom level, or principal
									window.open ("scheduler_admin_principal.html"+ "?ADMIN_NAME=" + data[0].adminName + "&ADMIN_ID=" + userEmail,'_self',false);
									
								if ( data[0].adminLevel == level_data[2].itemName ) //where level_data[2] is third to bottom level, or driver
									window.open ("scheduler_admin_driver.html"+ "?ADMIN_NAME=" + data[0].adminName + "&ADMIN_ID=" + userEmail,'_self',false);
							}
							else
							{
								//if if level extraction fails, , collapse on student login attempt
								metroDialog.toggle('#login_error_dialog_1');//
							}
						}
						else //else if no admin is found by email, trigger student login trial
						{
							_enableUserLogin_studentValidation ( userEmail, userPassword );
						}
					},
					error: function (data) 
					{   
						
					}
				});	
			},
			error: function (data) 
			{
				//if admin attempt fails, collapse on error dialog, as rendered in index.html
				
			}
		});	
}


function _enableUserLogin_studentValidation ( userEmail, userPassword )
{
	var userSignInEmailQuery = '?SIGN_IN_USER_EMAIL_GET_VALUE='+userEmail;
	var userSignInPasswordQuery = '&SIGN_IN_USER_PASSWORD_GET_VALUE='+userPassword;
	
	
	var signInQueryString = userSignInEmailQuery + userSignInPasswordQuery;
	
	event.preventDefault ( );

		$.ajax(
		{

			type: 'GET',

			url: 'data/phps/_php.user.validation.students.php'+signInQueryString,

			dataType: 'json',

			success: function (data) 
			{
				if ( data[0].studentPassword == userPassword )
					window.open ("scheduler_student.html"+ "?STUDENT_NAME=" + data[0].studentName + "&STUDENT_ID=" + userEmail,'_self',false);
				else
					metroDialog.toggle('#login_error_dialog_0');
			},
			error: function (data) 
			{
			}
		});	
}

function enableNewStudentEntry ( newStudentName, newStudentEmail, newStudentPassword, newStudentPhone )
{
	event.preventDefault ( );
	
	$.ajax
	(
		{
			type: 'POST',
							
			url: 'data/phps/_php.new.student.entry.php?NEW_STUDENT_NAME=' + newStudentName + '&NEW_STUDENT_EMAIL=' + newStudentEmail + '&NEW_STUDENT_PASSWORD=' + newStudentPassword + '&NEW_STUDENT_PHONE=' + newStudentPhone, 

			data : null,
			
			processData : false,
			
			processData: false, 
			
			contentType: false,  
			
			success: function ( data ) 
			{
				console.log(data);
				window.open ("scheduler_student.html"+ "?STUDENT_NAME=" + newStudentName + "&STUDENT_ID=" + newStudentEmail,'_self',false);
			},
			error: function (data)
			{
				console.log(data);
			}
		}
	);
}


////////////////
//UTILITIES
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};