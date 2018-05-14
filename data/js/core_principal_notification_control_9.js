//////////////////////////////////////////////
//Author: Jordan Micah Bennett, BookJaa V2 2017
$(document).ready
(
	function ( ) 
	{
		enableNotificationToggler ( );
		enableNotificationRendering ( );
		renderNotificationNumber ( );
	}
);


function enableNotificationToggler ( )
{
	$( '#NotificationBtn' ).click
	(
		function ( )
		{
			metroDialog.toggle('#admin_notification_dialog');
		}
	);
}


function renderNotificationNumber ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.notifications.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var notificationCount = 0;
				
				$.each(response, function() {
					if ( this.isMarkedRead == '' ) //if not "read", then push notification
						notificationCount ++;
				});	
					
				if ( response.length > 0 && notificationCount > 0 )
					$("#NotificationNumber").html(notificationCount); //don't show anything if there are notifications
			},
			error: function (data) 
			{
			}
		}
	);
}

function enableNotificationRendering ( )
{
	
	//clear table before population (avoid duplicate entry)
	$("#NotificationList").html("");

	
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
				var tableBody = $("#NotificationList");
				
				var notificationCount = 0;
				
				$.each(response, function() {
					notificationCount ++;
					var discoveredHour = this.hour;
					var discoveredDayOfWeek = this.dayOfWeek;
					var discoveredDayOfMonth = this.dayOfMonth;
					var discoveredMonth = this.month;
					var discoveredStudentEmail = this.studentEmail;
					var discoveredAdminEmail = this.adminEmail;
					
					tableBody.append('<tr>');
					tableBody.append($("<td class = 'slot-viewer-table-data'/>").text(notificationCount + ".) " + this.adminEmail));
					tableBody.append($("<td class = 'slot-viewer-table-data'/>").text(this.studentName));
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
				});	
			},
			error: function (data) 
			{
			}
		}
	);
}

function enableNotification_MarkAsRead ( updateRowData )
{
	metroDialog.create({
		title: "Jaa booker | Notification Marker:",
		content: '<p> Marked notifications no longer show up in count beside notification bell. Mark? </p> ',
		actions: [
			{
				title: "Go",
				onclick: function(el){
						console.log(updateRowData);
											//Based on enableNotificationRendering's .val span construction.
											var updateRowData_Cells = updateRowData.split ( ":");
											
											var UPDATE_DRIVER_ID = updateRowData_Cells [3];
											var UPDATE_STUDENT = updateRowData_Cells [2];
											var UPDATE_DAY_OF_MONTH = updateRowData_Cells [5];
											var UPDATE_MONTH = updateRowData_Cells [4];
											var UPDATE_DAY_OF_WEEK = updateRowData_Cells [1];
											var UPDATE_HOUR = updateRowData_Cells [0];
											
											
												$.ajax
												(
													{
														type: 'POST',
																		
														url: 'data/phps/_php.notification.updater.php?DRIVER_ID=' + UPDATE_DRIVER_ID + '&DAY_OF_MONTH=' + UPDATE_DAY_OF_MONTH + '&MONTH=' + UPDATE_MONTH + '&DAY_OF_WEEK=' + UPDATE_DAY_OF_WEEK + '&HOUR=' + UPDATE_HOUR + '&STUDENT_EMAIL=' + UPDATE_STUDENT, 

														data : null,
														
														processData : false,
														
														processData: false,  // tell jQuery not to process the data
														
														contentType: false,  // tell jQuery not to set contentType
														
														success: function ( inner_data ) 
														{
															metroDialog.toggle('#admin_notification_marked_success_dialog');
															
															renderNotificationNumber ( );
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

function enableNotificationDeletion ( deletionRowData )
{
	metroDialog.create({
		title: "Jaa booker | Notification Deleter:",
		content: '<p> Are you sure you wish to delete? </p> ',
		actions: [
			{
				title: "Go",
				onclick: function(el){
						console.log(deletionRowData);
											//Based on enableNotificationRendering's .val span construction.
											var deletionRowData_Cells = deletionRowData.split ( ":");
											
											var DELETION_DRIVER_ID = deletionRowData_Cells [3];
											var DELETION_STUDENT = deletionRowData_Cells [2];
											var DELETION_DAY_OF_MONTH = deletionRowData_Cells [5];
											var DELETION_MONTH = deletionRowData_Cells [4];
											var DELETION_DAY_OF_WEEK = deletionRowData_Cells [1];
											var DELETION_HOUR = deletionRowData_Cells [0];
											
											
												$.ajax
												(
													{
														type: 'POST',
																		
														url: 'data/phps/_php.notification.deleter.php?DRIVER_ID=' + DELETION_DRIVER_ID + '&DAY_OF_MONTH=' + DELETION_DAY_OF_MONTH + '&MONTH=' + DELETION_MONTH + '&DAY_OF_WEEK=' + DELETION_DAY_OF_WEEK + '&HOUR=' + DELETION_HOUR + '&STUDENT_EMAIL=' + DELETION_STUDENT, 

														data : null,
														
														processData : false,
														
														processData: false,  // tell jQuery not to process the data
														
														contentType: false,  // tell jQuery not to set contentType
														
														success: function ( inner_data ) 
														{
															enableNotificationRendering ( );
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