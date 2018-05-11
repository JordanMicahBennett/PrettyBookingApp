//////////////////////////////////////////////
//Author: Jordan Micah Bennett, BookJaa V2 2017
$(document).ready
(
	function ( ) 
	{
		
		$('.calendar_day').html(currentDay);
		$('.calendar_month').html(currentMonth);
		
		
		toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide 
		toggleContent ( 'DriversContent', 'hidden' ); //hide 
		renderDriverCount ( );
		renderDriverList ( );
		renderFrontEndUi_CurrentDayOfWeek_Overline ( );
		
		setTimeout(function(){ renderStudentFirstTimeLogin_Hint0 ( );; }, 2000);
		
		
		$( '#ScheduleContentToggler' ).click
		(
			function ( )
			{
				toggleContent ( 'DriversContent', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage1', 'visible' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide \
			}
		);
		
		$( '#DriversContentToggler' ).click
		(
			function ( )
			{
				toggleContent ( 'DriversContent', 'hidden' ); //hide 
				toggleContent ( 'DriversContent', 'visible' ); //hide 
				toggleContent ( 'ScheduleContentPage1', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide 
			}
		);
		
		$( '.ScheduleContentPage1Toggler' ).click
		(
			function ( )
			{
				toggleContent ( 'DriversContent', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage1', 'visible' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide \
			}
		);
		$( '.ScheduleContentPage2Toggler' ).click
		(
			function ( )
			{
				toggleContent ( 'DriversContent', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage1', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'visible' ); //hide 
			}
		);
	}
);

//////////////////////////////////////////////////////////
//UTILITIES

//DATE
function toggleContent ( activeContentId, status )
{
	document.getElementById ( activeContentId ).style.visibility = status; //show entity
}	

//
function renderStudentFirstTimeLogin_Hint0 ( )
{
	$('.StudentNameLabel').html (getUrlParameter('STUDENT_NAME'));
	
	
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.student.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				$.each(response, function() {
					if ( this.studentEmail == getUrlParameter('STUDENT_ID') ) 
					{
						if ( this.isFirstLogin == '' )
						{
							$('.StudentNameLabel').html (getUrlParameter('STUDENT_NAME'));
							metroDialog.toggle('#student_first_login_reminder_hint_0');
						}
						
						if ( this.isFirstLogin == '' )
						{
							//update toggle field, to kill first time login hint 0
							$.ajax
							(
								{
									type: 'POST',

									url: 'data/phps/_php.student.first.login.status.updater.php?STUDENT_ID=' + this.studentEmail,

									dataType: 'json',

									success: function ( innerResponse ) 
									{
										//...........
									}
								}
							);
							//.............
						}
					}
				});	
				//.............
			},
			error: function (data) 
			{
			}
		}
	);
}


function renderDriverList ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.admin.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				$.ajax
				(
					{
						type: 'GET',

						url: 'data/phps/_php.level.list.php',

						dataType: 'json',

						success: function ( inner_response ) 
						{
							var tableBody = $("#DriverList");
							
							$.each(response, function() {
								if ( this.adminLevel == inner_response [2].itemName ) //where ir[2] = Driver
								{
									tableBody.append('<tr>');
									tableBody.append($("<td class = 'label'/>").val(this.adminName).text(this.adminName));
									
									var generatedStudent_InstructorId = "StudentInstructorList_"+this.adminEmail;
									tableBody.append($("<td />").val('').attr("id", generatedStudent_InstructorId.replace(".",'_').replace("@",'_')).text('fucks'));
									tableBody.append('</tr>');
									
									//Notes
									//Example of resulting span button format: 'StudentInstructorList_DriverName_jaa_com'
								}
							});	
							
							//resets table license column cells with driver license data
							//this is done outside of the loop above that generates table body content, or otherwise table body order collapses
							//as many license cells would be added in one row, instead of row by row.
							//the solution is to first generate empty table license column cells data in 'renderDriverList()', then
							//reset table cells accordingly with loop in '____renderDriverList_EstablishDriverLicenseData()'.
							____renderDriverList_EstablishDriverLicenseData ( );
						},
						error: function (data) 
						{
						}
					}
				);
				//...........
				//I shall later place code here to refresh schedule based on driver selection
			},
			error: function (data) 
			{
			}
		}
	);
}	

//resets table license column cells with driver license data
//this is done outside of the loop above that generates table body content, or otherwise table body order collapses
//as many license cells would be added in one row, instead of row by row.
//the solution is to first generate empty table license column cells data in 'renderDriverList()' above, then
//reset table cells accordingly with loop in '____renderDriverList_EstablishDriverLicenseData()' below
function ____renderDriverList_EstablishDriverLicenseData ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.admin.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				$.ajax
				(
					{
						type: 'GET',

						url: 'data/phps/_php.level.list.php',

						dataType: 'json',

						success: function ( inner_response ) 
						{
										//LOOP THROUGH ADMINS 
										$.each(response, function() {
											//CHECK IF ADMIN IS A DRIVER
											if ( this.adminLevel == inner_response [2].itemName ) //where ir[2] = Driver
											{
													var ___discoveredAdminEmail = this.adminEmail;
															//////////
															//GET DRIVER LICENSE DATA
															//A. Go through licenses table
															$.ajax
															(
																{
																	type: 'GET',

																	url: 'data/phps/_php.licenses.php',

																	dataType: 'json',

																	success: function ( inner_a_response ) 
																	{
																		//B. Go through admin_licenses table
																		$.ajax
																		(
																			{
																				type: 'GET',

																				url: 'data/phps/_php.admins.licenses.php',

																				dataType: 'json',

																				success: function ( inner_b_response ) 
																				{
																					
																					for ( a = 0; a < inner_a_response.length; a ++ )
																						for ( b = 0; b < inner_b_response.length; b ++ )
																						{
																							if ( inner_a_response[a].licenseId == inner_b_response[b].licenseId )
																							{
																								if ( ___discoveredAdminEmail == inner_b_response[b].adminEmail )
																								{
																									var comparison_GeneratedStudent_InstructorId = "StudentInstructorList_"+___discoveredAdminEmail;
																									
																									var tableCell = $('#'+comparison_GeneratedStudent_InstructorId.replace(".",'_').replace("@",'_'));
																									
																									tableCell.html(inner_a_response[a].itemName);
																								}
																							}
																						}	
																				},
																				error: function (data) 
																				{
																					console.log('admins.licenses_failure : ' +data);
																				}
																			}
																		);
																	},
																	error: function (data) 
																	{
																		console.log('licenses_failure : ' +data);
																	}
																}
															);
											}
										});	
						},
						error: function (data) 
						{
						}
					}
				);
			},
			error: function (data) 
			{
			}
		}
	);	
}

function renderDriverCount ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.admin.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				$.ajax
				(
					{
						type: 'GET',

						url: 'data/phps/_php.level.list.php',

						dataType: 'json',

						success: function ( inner_response ) 
						{
							var driverCount = 0;
							
							//loop through admins, to get drivers only
							$.each(response, function() {
								if ( this.adminLevel == inner_response [2].itemName ) //where ir[2] = Driver
									driverCount ++;
							});	
							
							$('#DriverCounterLabel').html(driverCount);
						},
						error: function (data) 
						{
						}
					}
				);
			},
			error: function (data) 
			{
			}
		}
	);
}


function renderFrontEndUi_CurrentDayOfWeek_Overline ( )
{
	var currentDate = new Date ( );
	var currentDay = currentDate.getDay ( );
	
	

	switch ( currentDay )
	{
		case 0:
		{
			$('.sun.day_header').css({ textDecoration: 'overline', fontSize: '1em', color: '#3a3737' }); 
		}
		break;
		
		case 1:
		{
			$('.mon.day_header').css({ textDecoration: 'overline', fontSize: '1em', color: '#3a3737' }); 
		}
		break;
		
		case 2:
		{
			$('.tue.day_header').css({ textDecoration: 'overline', fontSize: '1em', color: '#3a3737' }); 
		}
		break;
		
		case 3:
		{
			$('.wed.day_header').css({ textDecoration: 'overline', fontSize: '1em', color: '#3a3737' }); 
		}
		break;
		
		case 4:
		{
			$('.thu.day_header').css({ textDecoration: 'overline', fontSize: '1em', color: '#3a3737' }); 
		}
		break;
		
		case 5:
		{
			$('.fri.day_header').css({ textDecoration: 'overline', fontSize: '1em', color: '#3a3737' }); 
		}
		break;
		
		case 6:
		{
			$('.sat.day_header').css({ textDecoration: 'overline', fontSize: '1em', color: '#3a3737' }); 
		}
		break;
		
		default:
		{
			
		}
	}	
}

///////////////
//UTILITIES

//URL
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

