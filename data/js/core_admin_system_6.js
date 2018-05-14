//////////////////////////////////////////////
//Author: Jordan Micah Bennett, BookJaa V2 2017
var RESTRICTION_DRIVER_ID = "";

$(document).ready
(
	function ( ) 
	{
		
		$('.calendar_day').html(currentDay);
		$('.calendar_month').html(currentMonth);
		
		toggleContent ( 'StudentContent', 'hidden' ); //hide 
		toggleContent ( 'PickupContent', 'hidden' ); //hide 
		toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide 
		toggleContent ( 'AdminListContent', 'hidden' ); //hide 
		toggleContent ( 'AdminAdderContent', 'hidden' ); //hide 
		toggleContent ( 'StudentAdderContent', 'hidden' ); //hide 
		toggleContent ( 'DropOffContent', 'hidden' ); //hide 
		toggleContent ( 'PickupAdderContent', 'hidden' ); //hide 
		toggleContent ( 'DropOffAdderContent', 'hidden' ); //hide 
		
		renderStudentCount ( );
		renderPickupCount ( );
		renderAdminCount ( );
		renderLevelList ( );
		renderLicenseList ( );
		renderAdminList ( );
		renderStudentList_ ( );
		renderPickupList ( );
		renderFrontend_Update ( );
		renderStudentAdditionPickupList ();
		renderStudentAdditionDropOffsList ();
		renderDropOffCount ( );
		renderDropOffList ( );
		
		renderFrontEndUi_CurrentDayOfWeek_Overline ( );
		
		$( '#AdminAdditionBtn' ).click
		(
			function ( )
			{
				var newAdminName = document.getElementById ( 'UserName' ).value;
				var newAdminEmail = document.getElementById ( 'UserEmail' ).value;
				var newAdminPassword = document.getElementById ( 'UserPassword' ).value;
				var newAdminLevel = document.getElementById ( 'UserLevel' ).value;
				var newAdminLicense = document.getElementById ( 'License' ).value;
				
				$('#AdminAdditionNameLabel').html (newAdminName);
				
				enableNewAdminEntry ( newAdminName, newAdminEmail, newAdminPassword, newAdminLevel, newAdminLicense );
			}
		);
		
		$( '#StudentAdditionBtn' ).click
		(
			function ( )
			{
				var newStudentName = document.getElementById ( 'StudentName' ).value;
				var newStudentEmail = document.getElementById ( 'StudentEmail' ).value;
				var newStudentEmail2 = document.getElementById ( 'StudentEmail2' ).value;
				var newStudentAdminEmail = document.getElementById ( 'StudentInstructor' ).value;
				var newStudentPhone = document.getElementById ( 'StudentPhone' ).value;
				var newStudentPhone2 = document.getElementById ( 'StudentPhone2' ).value;
				var newStudentTrn = document.getElementById ( 'StudentTrn' ).value;
				var newStudentPickup = document.getElementById ( 'StudentPickup' ).value;
				var newStudentPickup_Comment = document.getElementById ( 'StudentPickup_Comment' ).value;
				var newStudentDropOff = document.getElementById ( 'StudentDropOff' ).value;
				var newStudentDropOff_Comment = document.getElementById ( 'StudentDropOff_Comment' ).value;
				
				$('#StudentAdditionNameLabel').html (newStudentName);
		
				enableNewStudentEntry_ ( newStudentName, newStudentEmail, newStudentEmail2, newStudentAdminEmail, newStudentPhone, newStudentPhone2, newStudentTrn, newStudentPickup, newStudentPickup_Comment, newStudentDropOff, newStudentDropOff_Comment );
			}
		);
		
		$( '#PickupAdditionBtn' ).click
		(
			function ( )
			{
				var newItemName = document.getElementById ( 'ItemName' ).value;
				
				$('#PickupAdditionNameLabel').html (newItemName);
		
				enablePickupEntry ( newItemName );
			}
		);
		
		$( '#DropOffAdditionBtn' ).click
		(
			function ( )
			{
				var newItemName = document.getElementById ( 'ItemName_DropOff' ).value;
				
				$('#DropOffAdditionNameLabel').html (newItemName);
		
				enableDropOffEntry ( newItemName );
			}
		);
		
		$( '#AdminsContentToggler' ).click
		(
			function ( )
			{
				toggleContent ( 'ScheduleContentPage1', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide 
				toggleContent ( 'PickupContent', 'hidden' ); //hide 
				toggleContent ( 'StudentContent', 'hidden' ); //hide 
				toggleContent ( 'AdminListContent', 'visible' ); //hide 
				toggleContent ( 'AdminAdderContent', 'hidden' ); //hide 
				toggleContent ( 'StudentAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffContent', 'hidden' ); //hide 
				toggleContent ( 'PickupAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffAdderContent', 'hidden' ); //hide 
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
				toggleContent ( 'AdminListContent', 'hidden' ); //hide 
				toggleContent ( 'AdminAdderContent', 'visible' ); //hide 
				toggleContent ( 'StudentAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffContent', 'hidden' ); //hide 
				toggleContent ( 'PickupAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffAdderContent', 'hidden' ); //hide 
			}
		);
		
		$( '#StudentAdditionContentToggler' ).click
		(
			function ( )
			{
				toggleContent ( 'ScheduleContentPage1', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide  	
				toggleContent ( 'PickupContent', 'hidden' ); //hide 
				toggleContent ( 'StudentContent', 'hidden' ); //hide 
				toggleContent ( 'AdminListContent', 'hidden' ); //hide 
				toggleContent ( 'AdminAdderContent', 'hidden' ); //hide
				toggleContent ( 'StudentAdderContent', 'visible' ); //hide 
				toggleContent ( 'DropOffContent', 'hidden' ); //hide 
				toggleContent ( 'PickupAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffAdderContent', 'hidden' ); //hide 
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
				toggleContent ( 'AdminListContent', 'hidden' ); //hide 
				toggleContent ( 'AdminAdderContent', 'hidden' ); //hide 
				toggleContent ( 'StudentAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffContent', 'hidden' ); //hide 
				toggleContent ( 'PickupAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffAdderContent', 'hidden' ); //hide 
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
				toggleContent ( 'AdminListContent', 'hidden' ); //hide 
				toggleContent ( 'AdminAdderContent', 'hidden' ); //hide 
				toggleContent ( 'StudentAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffContent', 'hidden' ); //hide
				toggleContent ( 'PickupAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffAdderContent', 'hidden' ); //hide 
			}
		);
		
		
		$( '#PickupAdditionContentToggler' ).click
		(
			function ( )
			{
				toggleContent ( 'ScheduleContentPage1', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide 
				toggleContent ( 'PickupContent', 'hidden' ); //hide 
				toggleContent ( 'StudentContent', 'hidden' ); //hide 
				toggleContent ( 'AdminListContent', 'hidden' ); //hide 
				toggleContent ( 'AdminAdderContent', 'hidden' ); //hide 
				toggleContent ( 'StudentAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffContent', 'hidden' ); //hide 
				toggleContent ( 'PickupAdderContent', 'visible' ); //hide 
				toggleContent ( 'DropOffAdderContent', 'hidden' ); //hide 
			}
		);
		
		$( '#DropOffContentToggler' ).click
		(
			function ( )
			{
				toggleContent ( 'StudentContent', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage1', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide 
				toggleContent ( 'PickupContent', 'hidden' ); //hide 
				toggleContent ( 'AdminListContent', 'hidden' ); //hide 
				toggleContent ( 'AdminAdderContent', 'hidden' ); //hide
				toggleContent ( 'StudentAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffContent', 'visible' ); //hide 
				toggleContent ( 'PickupAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffAdderContent', 'hidden' ); //hide 
			}
		);
		$( '#DropOffAdditionContentToggler' ).click
		(
			function ( )
			{
				toggleContent ( 'StudentContent', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage1', 'hidden' ); //hide 
				toggleContent ( 'ScheduleContentPage2', 'hidden' ); //hide 
				toggleContent ( 'PickupContent', 'hidden' ); //hide 
				toggleContent ( 'AdminListContent', 'hidden' ); //hide 
				toggleContent ( 'AdminAdderContent', 'hidden' ); //hide
				toggleContent ( 'StudentAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffContent', 'hidden' ); //hide 
				toggleContent ( 'PickupAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffAdderContent', 'visible' ); //hide 
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
				toggleContent ( 'AdminListContent', 'hidden' ); //hide 
				toggleContent ( 'AdminAdderContent', 'hidden' ); //hide
				toggleContent ( 'StudentAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffContent', 'hidden' ); //hide 
				toggleContent ( 'PickupAdderContent', 'hidden' ); //hide 
				toggleContent ( 'DropOffAdderContent', 'hidden' ); //hide 
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

function renderDropOffCount ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.dropoffs.php',

			dataType: 'json',

			success: function ( response ) 
			{
				$('#DropOffCounterLabel').html(response.length);
			},
			error: function (data) 
			{
			}
		}
	);
}

function renderStudentCount ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.student.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				$('#StudentCounterLabel').html(response.length);
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

function renderAdminCount ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.admin.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				$('#AdminCounterLabel').html(response.length);
			},
			error: function (data) 
			{
			}
		}
	);
}

function renderLevelList ()
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.level.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var options = $("#UserLevel");
				
				$.each(response, function() {
					options.append($("<option />").val(this.itemName).text(this.itemName));
				});	
			},
			error: function (data) 
			{
			}
		}
	);
}



function renderLicenseList ()
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.license.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var options = $("#License");
				
				$.each(response, function() {
					options.append($("<option />").val(this.itemName).text(this.itemName));
				});	
			},
			error: function (data) 
			{
			}
		}
	);
}

function renderAdminList ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.admin.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var tableBody = $("#AdminList");
				
				$.each(response, function() {
					tableBody.append('<tr>');
					tableBody.append($("<td class = 'label'/>").val(this.adminName).text(this.adminName));
					tableBody.append($("<td/>").val(this.adminEmail).text(this.adminEmail));
					tableBody.append($("<td/>").val(this.adminLevel).text(this.adminLevel));
					
					var adminSelectionEmail = this.adminEmail;
					var adminSelectionName = this.adminName;
					
					
					//generate extra info btn
					var extraInfoBtn = $('<span />').addClass('mif-eye icon').html('')
								 .click(function() {
									 $('#ExtraInfoLabel').html ( "| Admin : " + adminSelectionEmail);
									 enableExtraDriverInfoToggler_ ( adminSelectionEmail );
								  });
								  
					tableBody.append($("<td/>").val('').html(extraInfoBtn));
					
					//generate restriction btn
					var restrictionBtn = $('<span />').addClass('mif-warning icon').html('')
								 .click(function() {
									 $('#RestrictionInfoLabel').html ( "| Admin : " + adminSelectionEmail);
									 enableRestrictionDriverInfoToggler ( adminSelectionEmail );
									 RESTRICTION_DRIVER_ID = adminSelectionEmail;
								  });
								  
					tableBody.append($("<td/>").val('').html(restrictionBtn));

					
					var deletionBtn = $('<span />').addClass('mif-cancel icon').attr('id', this.adminEmail).html('')
								 .click(function() {
									 $('#AdminDeletionName').html (adminSelectionName); //prepare to tell user which admin shall be deleted.
									 enableAdminDeletion ( adminSelectionEmail );
								  });
								  
					tableBody.append($("<td/>").val('').html(deletionBtn));
					tableBody.append('</tr>');
				});	
			},
			error: function (data) 
			{
			}
		}
	);
}	

function enableExtraDriverInfoToggler_ ( selectedDriverEmail )
{
	//clear table before population (avoid duplicate entry)
	$("#AdminList_ExtraDataList").html("");
	
	metroDialog.toggle('#admin_extra_data_dialog');
	
	renderDriverAppointmentList ( selectedDriverEmail );
}

function enableRestrictionDriverInfoToggler ( selectedDriverEmail )
{
	//clear table before population (avoid duplicate entry)
	$("#AdminList_RestrictionDataList").html("");
	
	//load up restrictions wrt to blocked days in check boxes based on database data
	enableRestrictionDayOfWeek_FrontEndLoad_OnRestrictionViewAndEdit_Toggle ( selectedDriverEmail );
	
	
	//load up restrictions wrt to lunch time in select options based on database data
	enableRestrictionLunchTime_FrontEndLoad_OnRestrictionViewAndEdit_Toggle ( selectedDriverEmail );
	
	
	metroDialog.toggle('#admin_restriction_data_dialog');
}


function enableRestrictionDayOfWeek_FrontEndLoad_OnRestrictionViewAndEdit_Toggle ( adminEmail )
{
	//remove all states, since these are ids for all users.
	//this clears the check boxes of priorly activated states for any priorly toggled user that affected the check state
	$('#day_of_week_restrictor_sun').removeAttr('checked');
	$('#day_of_week_restrictor_mon').removeAttr('checked');
	$('#day_of_week_restrictor_tue').removeAttr('checked');
	$('#day_of_week_restrictor_wed').removeAttr('checked');
	$('#day_of_week_restrictor_thu').removeAttr('checked');
	$('#day_of_week_restrictor_fri').removeAttr('checked');
	$('#day_of_week_restrictor_sat').removeAttr('checked');	
	
	
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
					if ( this.adminEmail == adminEmail )
					{
						if ( this.isSundayRestricted == 'yes' )
							$('#day_of_week_restrictor_sun').attr('checked', 'checked');
						if ( this.isMondayRestricted == 'yes' )
							$('#day_of_week_restrictor_mon').attr('checked', 'checked');
						if ( this.isTuesdayRestricted == 'yes' )
							$('#day_of_week_restrictor_tue').attr('checked', 'checked');
						if ( this.isWednesdayRestricted == 'yes' )
							$('#day_of_week_restrictor_wed').attr('checked', 'checked');
						if ( this.isThursdayRestricted == 'yes' )
							$('#day_of_week_restrictor_thu').attr('checked', 'checked');
						if ( this.isFridayRestricted == 'yes' )
							$('#day_of_week_restrictor_fri').attr('checked', 'checked');
						if ( this.isSaturdayRestricted == 'yes' )
							$('#day_of_week_restrictor_sat').attr('checked', 'checked');
					}
				});	
			},
			error: function (data) 
			{
			}
		}
	);	
}

function enableRestrictionLunchTime_FrontEndLoad_OnRestrictionViewAndEdit_Toggle ( adminEmail )
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
					if ( this.adminEmail == adminEmail )
					{
						if ( this.isLunchAt_7_30am == 'yes' )
							$("#7_30am").val("7:30am");
						
						if ( this.isLunchAt_8_40am == 'yes' )
							$("#8_40am").val("8:40am");
						
						if ( this.isLunchAt_9_50am == 'yes' )
							$("#9_50am").val("9:50am");
						
						if ( this.isLunchAt_11_00am == 'yes' )
							$("#11_00am").val("11:00am");
						
						if ( this.isLunchAt_12_10pm == 'yes' )
							$("#12_10pm").val("12:10pm");
						
						if ( this.isLunchAt_1_20pm == 'yes' )
							$("#1_20pm").val("1:20pm");
						
						if ( this.isLunchAt_2_30pm == 'yes' )
							$("#2_30pm").val("2:30pm");
						
						if ( this.isLunchAt_3_40pm == 'yes' )
							$("#3_40pm").val("3:40pm");
						
						if ( this.isLunchAt_4_50pm == 'yes' )
							$("#4_50pm").val("4:50pm");
						
						if ( this.isLunchAt_5_00pm == 'yes' )
							$("#5_00pm").val("5:00pm");
						
						if ( this.isLunchAt_6_10pm == 'yes' )
							$("#6_10pm").val("6:10pm");
					}
				});	
			},
			error: function (data) 
			{
			}
		}
	);	
}

function renderStudentList_ ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.student.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var tableBody = $("#StudentList");
				
				$.each(response, function() {
					tableBody.append('<tr>');
					tableBody.append($("<td class = 'label'/>").val(this.studentName).text(this.studentName));
					tableBody.append($("<td/>").val(this.studentEmail2.length > 1 ? this.studentEmail + " or " + this.studentEmail2 : this.studentEmail).text(this.studentEmail2.length > 1 ? this.studentEmail + " or " + this.studentEmail2 : this.studentEmail));
					tableBody.append($("<td/>").val(this.studentPhone2 > 1 ? this.studentPhone + " or " + this.studentPhone2 : this.studentPhone).text(this.studentPhone2 > 1 ? this.studentPhone + " or " + this.studentPhone2 : this.studentPhone));
					
					tableBody.append($("<td/>").val(this.adminEmail).text(this.adminEmail));
					
					var studentDeletionEmail = this.studentEmail;
					$('#StudentDeletionName').html (this.studentName); //prepare to tell user which student shall be deleted.
					
					var deletionBtn = $('<span />').addClass('mif-cancel icon').attr('id', this.studentEmail).html('')
								 .click(function() {
									 enableStudentDeletion ( studentDeletionEmail);
								  });
									
					tableBody.append($("<td/>").val('').html(deletionBtn));
					tableBody.append('</tr>');
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

			url: 'data/phps/_php.student.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var tableBody = $("#StudentList");
				
				$.each(response, function() {
					tableBody.append('<tr>');
					tableBody.append($("<td class = 'label'/>").val(this.studentName).text(this.studentName));
					tableBody.append($("<td/>").val(this.studentEmail).text(this.studentEmail));
					tableBody.append($("<td/>").val(this.studentPhone).text(this.studentPhone));
					
					tableBody.append($("<td/>").val(this.adminEmail).text(this.adminEmail));
					
					var studentDeletionEmail = this.studentEmail;
					$('#StudentDeletionName').html (this.studentName); //prepare to tell user which student shall be deleted.
					
					var deletionBtn = $('<span />').addClass('mif-cancel icon').attr('id', this.studentEmail).html('')
								 .click(function() {
									 enableStudentDeletion ( studentDeletionEmail);
								  });
									
					tableBody.append($("<td/>").val('').html(deletionBtn));
					tableBody.append('</tr>');
				});	
			},
			error: function (data) 
			{
			}
		}
	);
}	

function renderDriverAppointmentList ( selectedDriverEmail )
{

	//enable population
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.notifications.php',

			dataType: 'json',

			success: function ( response ) 
			{
				//var slotViewerContainer = $(".slot-viewer_container");
				var tableBody = $("#AdminList_ExtraDataList");
				
				var infoRecordCount = 0;

				
				$.each(response, function() {
					if ( this.adminEmail == selectedDriverEmail )
					{
						console.log('renderDriverAppointmentList__');
						console.log('discoveredLine --> '+this.hour + ", " + this.dayOfWeek + ", " + this.dayOfMonth + ", " + this.month + ", " + this.studentEmail + ", " + this.adminEmail );
						
						infoRecordCount ++;
						var discoveredHour = this.hour;
						var discoveredDayOfWeek = this.dayOfWeek;
						var discoveredDayOfMonth = this.dayOfMonth;
						var discoveredMonth = this.month;
						var discoveredStudentEmail = this.studentEmail;
						var discoveredAdminEmail = this.adminEmail;
						
						tableBody.append('<tr>');
						tableBody.append($("<td class = 'slot-viewer-table-data'/>").text(infoRecordCount + ".) " + this.studentName));
						tableBody.append($("<td class = 'slot-viewer-table-data'/>").text(this.adminEmail));
						tableBody.append($("<td class = 'slot-viewer-table-data'/>").text(this.studentEmail));		  
						tableBody.append($("<td class = 'slot-viewer-table-data'/>").text(this.dayOfWeek));
						tableBody.append($("<td class = 'slot-viewer-table-data'/>").text(this.dayOfMonth));
						tableBody.append($("<td class = 'slot-viewer-table-data'/>").text(this.month));
					
						var in_min_am_pm = this.hour.split('_')[1];
						var in_min = in_min_am_pm.replace( /\D+/g, '');
						var in_am_pm = in_min_am_pm.replace( /[0-9]/g, '');
							
						tableBody.append($("<td class = 'slot-viewer-table-data'/>").text(this.hour.split('_')[0]  + ":" + in_min + " " + in_am_pm));
						
						tableBody.append($("<td class = 'slot-viewer-table-data'/>").text(this.pickupLocation));
						
						tableBody.append($("<td class = 'slot-viewer-table-data'/>").text(this.dropOffLocation));
						
						tableBody.append( $('<span class = "mif-cross slot-viewer-table-data clickable" />')
								 .click(function() {
									 enableNotificationDeletion ( discoveredHour+":"+ discoveredDayOfWeek +':'+ discoveredStudentEmail +':'+ discoveredAdminEmail +':'+discoveredMonth + ':'+ discoveredDayOfMonth );
								  }));
						tableBody.append( $('<span class = "mif-eye slot-viewer-table-data clickable" />')
								 .click(function() {
									 enableNotification_MarkAsRead ( discoveredHour+":"+ discoveredDayOfWeek +':'+ discoveredStudentEmail +':'+ discoveredAdminEmail +':'+discoveredMonth + ':'+ discoveredDayOfMonth );
								  }));
								  
						tableBody.append('</tr>');
					}
				});	
			},
			error: function (data) 
			{
				console.log(data);
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
					
					var pickupDeletionName = this.item;
					var deletionBtn = $('<span />').addClass('mif-cancel icon').attr('id', this.item).html('')
								 .click(function() {
									 enablePickupDeletion ( pickupDeletionName);
								  });
									
					tableBody.append($("<td/>").val('').html(deletionBtn));
					
					tableBody.append('</tr>');
				});	
			},
			error: function (data) 
			{
			}
		}
	);
}	
function renderDropOffList ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.dropoffs.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var tableBody = $("#DropOffList");
				
				$.each(response, function() {
					tableBody.append('<tr>');
					tableBody.append($("<td/ style = 'text-align:left;'>").val(this.item).text(this.item));
					
					var dropoffDeletionName = this.item;
					var deletionBtn = $('<span />').addClass('mif-cancel icon').attr('id', this.item).html('')
								 .click(function() {
									 enableDropOffDeletion ( dropoffDeletionName);
								  });
					tableBody.append($("<td/>").val('').html(deletionBtn));
								  
					tableBody.append('</tr>');
				});	
			},
			error: function (data) 
			{
			}
		}
	);
}	

function enablePickupEntry ( newItemName )
{
	$.ajax
	(
		{
			type: 'POST',
							
			url: 'data/phps/_php.new.pickup.entry.php?ITEM_NAME=' + newItemName, 

			data : null,
			
			processData : false,
			
			processData: false,  // tell jQuery not to process the data
			
			contentType: false,  // tell jQuery not to set contentType
			
			success: function ( data ) 
			{
				metroDialog.toggle('#pickup_addition_success_dialog');
				setTimeout(function(){ location.reload(); }, 630);
			}
		}
	);
}
function enablePickupDeletion ( itemName )
{
	
	metroDialog.create({
		title: "Jaa booker | Pickup Location Deleter:",
		content: '<p> Are you sure you wish to delete? </p> ',
		actions: [
			{
				title: "Go",
				onclick: function(el){
												$.ajax
												(
													{
														type: 'POST',
																		
														url: 'data/phps/_php.pickup.deleter.php?ITEM_NAME=' + itemName, 

														data : null,
														
														processData : false,
														
														processData: false,  // tell jQuery not to process the data
														
														contentType: false,  // tell jQuery not to set contentType
														
														success: function ( inner_data ) 
														{
															metroDialog.toggle('#pickup_deletion_success_dialog');
															setTimeout(function(){ location.reload(); }, 630);
														},
														error: function (failure_data)
														{
															console.log(failure_data);
														}
													}
												);
					$(el).data('dialog').close();
				}
			},
			{
				title: "Cancel",
				cls: "js-dialog-close"
			}
		],
		options: { // dialog options
		}
	});
}


function enableDropOffEntry ( newItemName )
{
	$.ajax
	(
		{
			type: 'POST',
							
			url: 'data/phps/_php.new.dropoff.entry.php?ITEM_NAME=' + newItemName, 

			data : null,
			
			processData : false,
			
			processData: false,  // tell jQuery not to process the data
			
			contentType: false,  // tell jQuery not to set contentType
			
			success: function ( data ) 
			{
				metroDialog.toggle('#dropoff_addition_success_dialog');
				setTimeout(function(){ location.reload(); }, 630);
			}
		}
	);
}
function enableDropOffDeletion ( itemName )
{
	
	metroDialog.create({
		title: "Jaa booker | Drop-off Location Deleter:",
		content: '<p> Are you sure you wish to delete? </p> ',
		actions: [
			{
				title: "Go",
				onclick: function(el){
												$.ajax
												(
													{
														type: 'POST',
																		
														url: 'data/phps/_php.dropoff.deleter.php?ITEM_NAME=' + itemName, 

														data : null,
														
														processData : false,
														
														processData: false,  // tell jQuery not to process the data
														
														contentType: false,  // tell jQuery not to set contentType
														
														success: function ( inner_data ) 
														{
															metroDialog.toggle('#dropoff_deletion_success_dialog');
															setTimeout(function(){ location.reload(); }, 630);
														},
														error: function (failure_data)
														{
															console.log(failure_data);
														}
													}
												);
					$(el).data('dialog').close();
				}
			},
			{
				title: "Cancel",
				cls: "js-dialog-close"
			}
		],
		options: { // dialog options
		}
	});
}

function enableNewStudentEntry_ ( newStudentName, newStudentEmail, newStudentEmail2, newStudentAdminEmail, newStudentPhone, newStudentPhone2, newStudentTrn, newStudentPickup, newStudentPickup_Comment, newStudentDropOff, newStudentDropOff_Comment )
{
	$.ajax
	(
		{
			type: 'POST',
							
			url: 'data/phps/_php.new.student.entry.by.admin.php?NEW_STUDENT_NAME=' + newStudentName + '&NEW_STUDENT_EMAIL=' + newStudentEmail + '&NEW_STUDENT_EMAIL2=' + newStudentEmail2 + '&NEW_STUDENT_ADMIN_EMAIL=' + newStudentAdminEmail + '&NEW_STUDENT_PHONE=' + newStudentPhone + '&NEW_STUDENT_PHONE2=' + newStudentPhone2 + '&NEW_STUDENT_TRN=' + newStudentTrn + '&NEW_STUDENT_PICKUP=' + newStudentPickup + '&NEW_STUDENT_PICKUP_COMMENT=' + newStudentPickup_Comment + '&NEW_STUDENT_DROPOFF=' + newStudentDropOff + '&NEW_STUDENT_DROPOFF_COMMENT=' + newStudentDropOff_Comment, 

			data : null,
			
			processData : false,
			
			processData: false,  // tell jQuery not to process the data
			
			contentType: false,  // tell jQuery not to set contentType
			
			success: function ( data ) 
			{
				metroDialog.toggle('#student_addition_success_dialog');
				setTimeout(function(){ location.reload(); }, 830);
			}
		}
	);
}

function enableStudentDeletion ( studentEmail )
{
	
	metroDialog.create({
		title: "Jaa booker | Student Deleter:",
		content: '<p> Are you sure you wish to delete? </p> ',
		actions: [
			{
				title: "Go",
				onclick: function(el){
												$.ajax
												(
													{
														type: 'POST',
																		
														url: 'data/phps/_php.student.deleter.php?STUDENT_EMAIL=' + studentEmail, 

														data : null,
														
														processData : false,
														
														processData: false,  // tell jQuery not to process the data
														
														contentType: false,  // tell jQuery not to set contentType
														
														success: function ( inner_data ) 
														{
															metroDialog.toggle('#admin_student_deletion_success_dialog');
															setTimeout(function(){ location.reload(); }, 630);
														},
														error: function (failure_data)
														{
															console.log(failure_data);
														}
													}
												);
					$(el).data('dialog').close();
				}
			},
			{
				title: "Cancel",
				cls: "js-dialog-close"
			}
		],
		options: { // dialog options
		}
	});
}

function enableAdminDeletion ( adminEmail )
{
	
	metroDialog.create({
		title: "Jaa booker | Admin Deleter:",
		content: '<p> Are you sure you wish to delete? </p> ',
		actions: [
			{
				title: "Go",
				onclick: function(el){
												$.ajax
												(
													{
														type: 'POST',
																		
														url: 'data/phps/_php.admin.deleter.php?ADMIN_EMAIL=' + adminEmail, 

														data : null,
														
														processData : false,
														
														processData: false,  // tell jQuery not to process the data
														
														contentType: false,  // tell jQuery not to set contentType
														
														success: function ( inner_data ) 
														{
															metroDialog.toggle('#admin_admin_deletion_success_dialog');
															setTimeout(function(){ location.reload(); }, 630);
														},
														error: function (failure_data)
														{
															console.log(failure_data);
														}
													}
												);
					$(el).data('dialog').close();
				}
			},
			{
				title: "Cancel",
				cls: "js-dialog-close"
			}
		],
		options: { // dialog options
		}
	});
}

function enableNewAdminEntry ( newAdminName, newAdminEmail, newAdminPassword, newAdminLevel, newAdminLicense )
{
	////////////
	//outer ajax to determine license id
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.license.detailed.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				event.preventDefault ( );
				
				var newAdminLicenseId = "";
				
				if ( newAdminLicense != null )
				{
					$.each(response, function() {
						if ( this.itemName == newAdminLicense )
						{
							newAdminLicenseId = this.licenseId;
							
							///////////
							//inner ajax to submit computed license id into license table via _php.new.admin.entry.php
							$.ajax
							(
								{
									type: 'POST',
													
									url: 'data/phps/_php.new.admin.entry.php?NEW_ADMIN_NAME=' + newAdminName + '&NEW_ADMIN_EMAIL=' + newAdminEmail + '&NEW_ADMIN_PASSWORD=' + newAdminPassword + '&NEW_ADMIN_LEVEL=' + newAdminLevel + '&NEW_ADMIN_LICENSE_ID=' + newAdminLicenseId, 

									data : null,
									
									processData : false,
									
									processData: false,  // tell jQuery not to process the data
									
									contentType: false,  // tell jQuery not to set contentType
									
									success: function ( data ) 
									{
										metroDialog.toggle('#addition_success_dialog');
										setTimeout(function(){ location.reload(); }, 630);
									}
								}
							);
						}
					});	
					

					
					//metroDialog.toggle('#addition_success_dialog');
				}
			},
			error: function (data) 
			{
			}
		}
	);
	
	
	///////////
	//another outer ajax to populate slots with admin (driver) data
	
	
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.slots.formats.php',

			dataType: 'json',

			success: function ( response ) 
			{
				$.each(response, function() {
					//_enableNewAdminEntry_Driver ( newAdminLevel, newAdminEmail, this.item, this.item.split (':')[0] );
				});
			},
			error: function (data) 
			{
			}
		}
	);
}

function _enableNewAdminEntry_Driver ( newAdminLevel, newAdminEmail, newAdminDayRowData, newAdminDayRowData_DayLabel )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.level.list.php',

			dataType: 'json',

			success: function ( response ) 
			{			
				if ( newAdminLevel == response [2].itemName ) //where ir[2] = Driver
				{
					//inner ajax to update slot database, wrt new driver data
					$.ajax
					(
						{
							type: 'POST',
											
							url: 'data/phps/_php.new.slots.entry.php?NEW_ADMIN_EMAIL=' + newAdminEmail + '&NEW_ADMIN_DAY_ROW_DATA=' + newAdminDayRowData + '&NEW_ADMIN_DAY_ROW_DATA_DAY_LABEL=' + newAdminDayRowData_DayLabel, 

							data : null,
							
							processData : false,
							
							processData: false,  // tell jQuery not to process the data
							
							contentType: false,  // tell jQuery not to set contentType
							
							success: function ( data ) 
							{
							},
							error: function(slots_entry_failure_data)
							{
							}
						}
					);
				}
			},
			error: function (level_failure_data) 
			{
			}
		}
	);
}

function renderStudentAdditionPickupList ()
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.pickups.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var options = $("#StudentPickup");
				
				$.each(response, function() {
					options.append($("<option />").val(this.item).text(this.item));
				});	
			},
			error: function (data) 
			{
			}
		}
	);
}

function renderStudentAdditionDropOffsList ()
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.dropoffs.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var options = $("#StudentDropOff");
				
				$.each(response, function() {
					options.append($("<option />").val(this.item).text(this.item));
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

