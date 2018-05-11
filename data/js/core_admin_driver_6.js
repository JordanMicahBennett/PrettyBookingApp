//////////////////////////////////////////////
//Author: Jordan Micah Bennett, BookJaa V2 2017
$(document).ready
(
	function ( ) 
	{
		$('.calendar_day').html(currentDay);
		$('.calendar_month').html(currentMonth);		
		
		toggleContent ( 'StudentContent', 'hidden' ); //hide 
		toggleContent ( 'PickupContent', 'hidden' ); //hide 
		toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide 
		renderStudentCount ( );
		renderPickupCount ( );
		renderFrontend_Update ( );
		renderStudentList ( );
		renderPickupList ( );
		enableRestrictionDayOfWeek_FrontEndLoad ( );
		enableRestrictionLunchTime_FrontEndLoad ( );
		enableRestrictionDayOfMonth_FrontEndLoad ( );
		renderFrontEndUi_CurrentDayOfWeek_Overline ( );
		
		$( '#AdminsContentToggler' ).click
		(
			function ( )
			{
				toggleContent ( 'ScheduleContentPage1', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide 	
				toggleContent ( 'PickupContent', 'hidden' ); //hide 
				toggleContent ( 'StudentContent', 'hidden' ); //hide 
			}
		);
		
		$( '#AdditionContentToggler' ).click
		(
			function ( )
			{
				toggleContent ( 'ScheduleContentPage1', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide 
				toggleContent ( 'PickupContent', 'hidden' ); //hide 
				toggleContent ( 'StudentContent', 'hidden' ); //hide 
			}
		);
		
		
		$( '#ScheduleContentToggler' ).click
		(
			function ( )
			{
				toggleContent ( 'ScheduleContentPage1', 'visible' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide 
				toggleContent ( 'PickupContent', 'hidden' ); //hide 
				toggleContent ( 'StudentContent', 'hidden' ); //hide 
			}
		);
		
		$( '#PickupContentToggler' ).click
		(
			function ( )
			{
				toggleContent ( 'PickupContent', 'visible' ); //hide 
				toggleContent ( 'ScheduleContentPage1', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide 	
				toggleContent ( 'StudentContent', 'hidden' ); //hide 
			}
		);
		$( '#StudentContentToggler' ).click
		(
			function ( )
			{
				toggleContent ( 'StudentContent', 'visible' ); //hide 
				toggleContent ( 'ScheduleContentPage1', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide 	
				toggleContent ( 'PickupContent', 'hidden' ); //hide 
			}
		);
		$( '.ScheduleContentPage1Toggler' ).click
		(
			function ( )
			{
				toggleContent ( 'ScheduleContentPage1', 'visible' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide 
			}
		);
		$( '.ScheduleContentPage2Toggler' ).click
		(
			function ( )
			{
				toggleContent ( 'ScheduleContentPage1', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'visible' ); //hide 
			}
		);
		
	}
);

function enableRestrictionDayOfWeek_FrontEndLoad ( )
{
	//load the states from db
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.restriction.day.of.week.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				$.each(response, function() {
					if ( this.adminEmail == getUrlParameter('ADMIN_ID') )
					{
						if ( this.isSundayRestricted == 'yes' )
							$('.sun').css({ opacity: .2 });
						if ( this.isMondayRestricted == 'yes' )
							$('.mon').css({ opacity: .2 });
						if ( this.isTuesdayRestricted == 'yes' )
							$('.tue').css({ opacity: .2 });
						if ( this.isWednesdayRestricted == 'yes' )
							$('.wed').css({ opacity: .2 });
						if ( this.isThursdayRestricted == 'yes' )
							$('.thu').css({ opacity: .2 });
						if ( this.isFridayRestricted == 'yes' )
							$('.fri').css({ opacity: .2 });
						if ( this.isSaturdayRestricted == 'yes' )
							$('.sat').css({ opacity: .2 });
					}
				});	
			},
			error: function (data) 
			{
			}
		}
	);	
}

function enableRestrictionDayOfMonth_FrontEndLoad ( )
{
	//load the states from db
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.restriction.day.of.month.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				$.each(response, function() {
					if ( this.adminEmail == getUrlParameter('ADMIN_ID') )
					{
						if ( this.dayOfMonthAtRestriction != 'none' )
						{
							var date_ = new Date ( );
							
							date_.setDate (this.dayOfMonthAtRestriction);
							
							var dateAtRestriction = date_;
							
							var dayAtRestriction = dateAtRestriction.getDay ( );
							
							if ( dayAtRestriction == 0 )
								$('.sun').css({ opacity: .2 });
							if ( dayAtRestriction == 1 )
								$('.mon').css({ opacity: .2 });
							if ( dayAtRestriction == 2 )
								$('.tue').css({ opacity: .2 });
							if ( dayAtRestriction == 4 )
								$('.wed').css({ opacity: .2 });
							if ( dayAtRestriction == 4 )
								$('.thu').css({ opacity: .2 });
							if ( dayAtRestriction == 5 )
								$('.fri').css({ opacity: .2 });
							if ( dayAtRestriction == 6 )
								$('.sat').css({ opacity: .2 });
						}
					}
				});	
			},
			error: function (data) 
			{
			}
		}
	);	
}

function enableRestrictionLunchTime_FrontEndLoad ( )
{
	//load the states from db
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.restriction.lunch.time.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				$.each(response, function() {
					if ( this.adminEmail == getUrlParameter('ADMIN_ID') )
					{
						if ( this.isLunchAt_7_30am == 'yes' )
							$('.7_30am').css({ opacity: .2 });
						
						if ( this.isLunchAt_8_40am == 'yes' )
							$('.8_40am').css({ opacity: .2 });
						
						if ( this.isLunchAt_9_50am == 'yes' )
							$('.9_50am').css({ opacity: .2 });
						
						if ( this.isLunchAt_11_00am == 'yes' )
							$('.11_00am').css({ opacity: .2 });
						
						if ( this.isLunchAt_12_10pm == 'yes' )
							$('.12_10pm').css({ opacity: .2 });
						
						if ( this.isLunchAt_1_20pm == 'yes' )
							$('.1_20pm').css({ opacity: .2 });
						
						if ( this.isLunchAt_2_30pm == 'yes' )
							$('.2_30pm').css({ opacity: .2 });
						
						if ( this.isLunchAt_3_40pm == 'yes' )
							$('.3_40pm').css({ opacity: .2 });
						
						if ( this.isLunchAt_4_50pm == 'yes' )
							$('.4_50pm').css({ opacity: .2 });
						
						if ( this.isLunchAt_5_00pm == 'yes' )
							$('.5_00pm').css({ opacity: .2 });
						
						if ( this.isLunchAt_6_10pm == 'yes' )
							$('.6_10pm').css({ opacity: .2 });
					}
				});	
			},
			error: function (data) 
			{
			}
		}
	);	
}

function renderStudentList ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.slots.php',

			dataType: 'json',

			success: function ( response ) 
			{
				//console.log(response);
				$.each(response, function() {
					var discoveredDriverEmail = this.adminEmail;
					var discoveredStudentEmail = this.studentEmail;
					var discoveredHour = this.hour;
					var discoveredDayOfWeek = this.dayOfWeek;
					var discoveredDayOfMonth = this.dayOfMonth;
					var discoveredMonth = this.month;
							$.ajax
							(
								{
									type: 'GET',

									url: 'data/phps/_php.student.list.php',

									dataType: 'json',

									success: function ( inner_response ) 
									{
										var tableBody = $("#StudentList");
										
										$.each(inner_response, function() {
											if ( discoveredDriverEmail == getUrlParameter('ADMIN_ID') && discoveredStudentEmail == this.studentEmail ) //drivers can only see their students
											{
												tableBody.append('<tr>');
												tableBody.append($("<td class = 'label'/>").val(this.studentName).text(this.studentName));
														//format hour
														var in_min_am_pm = discoveredHour.split('_')[1];
														var in_min = in_min_am_pm.replace( /\D+/g, '');
														var in_am_pm = in_min_am_pm.replace( /[0-9]/g, '');
												
												tableBody.append($("<td/>").val(discoveredHour).text(discoveredHour.split('_')[0]  + ":" + in_min + " " + in_am_pm ));
												tableBody.append($("<td/>").val(discoveredDayOfWeek).text(discoveredDayOfWeek));
												tableBody.append($("<td/>").val(discoveredDayOfMonth).text(discoveredDayOfMonth));
												tableBody.append($("<td/>").val(discoveredMonth).text(discoveredMonth));
												tableBody.append($("<td class = 'label'/>").val(this.studentEmail).text(this.studentEmail));
												tableBody.append('</tr>');
											}
										});	
									},
									error: function (inner_failure_data) 
									{
									}
								}
							);
				});	
			},
			error: function (data) 
			{
			}
		}
	);
}	

////enables update of time table frontend, to reflect any changes in availability
function renderFrontend_Update ( )
{ 

	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.slots.php',

			dataType: 'json',

			success: function ( response ) 
			{
				console.log(response);
				$.each(response, function() {
					$('#'+this.dayOfWeek + '_' + this.hour).addClass('isOccupied');
					console.log('#'+this.dayOfWeek + '_' + this.hour);
				});	
			},
			error: function (data) 
			{
			}
		}
	);
}


function renderStudentCount ( )
{
	var driverStudentCount = 0;
	
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.slots.php',

			dataType: 'json',

			success: function ( response ) 
			{
				//console.log(response);
				$.each(response, function() {
					var discoveredDriverEmail = this.adminEmail;
					var discoveredStudentEmail = this.studentEmail;
							$.ajax
							(
								{
									type: 'GET',

									url: 'data/phps/_php.student.list.php',

									dataType: 'json',

									success: function ( inner_response ) 
									{
										var tableBody = $("#StudentList");
										
										$.each(inner_response, function() {
											if ( discoveredDriverEmail == getUrlParameter('ADMIN_ID') && discoveredStudentEmail == this.studentEmail ) //drivers can only see their students
											{
												driverStudentCount ++;
												$('#StudentCounterLabel').html(driverStudentCount);
											}
										});	
									},
									error: function (inner_failure_data) 
									{
									}
								}
							);
				});	
			},
			error: function (data) 
			{
			}
		}
	);
	
	
}	

function renderPickupCount ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.pickups.php',

			dataType: 'json',

			success: function ( response ) 
			{
				$('#PickupCounterLabel').html(response.length);
			},
			error: function (data) 
			{
			}
		}
	);
}


function renderPickupList ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.pickups.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var tableBody = $("#PickupList");
				
				$.each(response, function() {
					tableBody.append('<tr>');
					tableBody.append($("<td/ style = 'text-align:left;'>").val(this.item).text(this.item));
					tableBody.append('</tr>');
				});	
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

//////////////////////////////////////////////////////////
//UTILITIES

//DATE
function toggleContent ( activeContentId, status )
{
	document.getElementById ( activeContentId ).style.visibility = status; //show entity
}	

