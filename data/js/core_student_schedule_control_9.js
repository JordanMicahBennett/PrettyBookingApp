//////////////////////////////////////////////
//Author: Jordan Micah Bennett, BookJaa V2 2017

var CURRENT_SELECTION_STUDENT = "";
var CURRENT_SELECTION_DAY_OF_WEEK = "";
var CURRENT_SELECTION_DAY_OF_MONTH = "";
var CURRENT_SELECTION_MONTH = ""; 
var CURRENT_SELECTION_HOUR = "";
var CURRENT_SELECTION_PICKUP_LOCATION = "";
var CURRENT_SELECTION_PICKUP_TIME = "";
var CURRENT_SELECTION_INSTRUCTOR = "";


$(document).ready
(
	function ( ) 
	{
		enableScheduleItemToggle ( );
		renderFrontend_Update ( );
		enableDatePicking ( );
		enableDriverChooserPicker ( );
		enableGuideToggler ( );
	}
);


function enableDatePicking ( )
{
    $(function(){
        var dateData = $(".datepicker").datepicker();
    });
}

function enableScheduleItemToggle ( )
{
	
	////////////////////
	//outer ajax to get day labels
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.slots.formats.day.labels.php',

			dataType: 'json',

			success: function ( outer_response ) 
			{
				////////////////////
				//inner ajax to get hour labels
				$.ajax
				(
					{
						type: 'GET',

						url: 'data/phps/_php.slots.formats.hour.labels.php',

						dataType: 'json',

						success: function ( inner_response ) 
						{
							////////////////////
							//inner ajax to get hour labels
							for ( o = 0; o < outer_response.length; o ++ )
							{
								$.each(inner_response, function() {
									var _0 = outer_response[o].item;
									var _1 = this.item;
									
									$( '#' + outer_response[o].item + "_" + this.item ).click
									(
										function ( )
										{
											CURRENT_SELECTION_DAY_OF_WEEK = _0;
											CURRENT_SELECTION_HOUR = _1;
											
											enableBookerControlDialog ( );
										}
									);
								});
							}
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

function enableBookerControlDialog ( )
{
	//driverEmail 
	//+
	//dayRowData=day:hour,student,pickup,availability
	metroDialog.create({
		title: "Jaa booker",
		content: '	<label for="BookerControl_Month">Month</label>\
					<select class="js-select full-size" value = "" id = "BookerControl_Month">\
					</select>  <br></br>\
					<label for="BookerControl_DayOfMonth">Day</label>\
					<select class="js-select full-size" value = "" id = "BookerControl_DayOfMonth">\
					</select> <br></br>\
					<label for="BookerControl_PickupLocation">Pickup Location</label>\
					<select class="js-select full-size" value = "" id = "BookerControl_PickupLocation">\
					</select> <br></br>\
					<label for="BookerControl_PackageChooser">Package</label>\
					<select class="js-select full-size" id = "BookerControl_PackageChooser">\
					</select> <br></br>\
					<label for="BookerControl_DriverChooser">Driver</label>\
					<select class="js-select full-size" id = "BookerControl_DriverChooser">\
					</select> <br></br>\
					',
		actions: [
			{
				title: "Go",
				onclick: function(el){
					CURRENT_SELECTION_STUDENT = getUrlParameter('STUDENT_ID');
					CURRENT_SELECTION_PICKUP_LOCATION = $('#BookerControl_PickupLocation option:selected').val();
					CURRENT_SELECTION_MONTH = $('#BookerControl_Month option:selected').text();
					CURRENT_SELECTION_DAY_OF_MONTH = $('#BookerControl_DayOfMonth option:selected').text();
					CURRENT_SELECTION_INSTRUCTOR = $('#BookerControl_DriverChooser option:selected').attr("id");
					
					//If pickup time  is non-empty, this means package type is executive
					enableDatabaseUpdate ( );
					
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
	
	
	
    ____enableBookerControl_renderPackageList ( );
	____enableBookerControl_renderPickupLocationList ( );
	____enableBookerControl_renderMonthList ( );
	____enableBookerControl_renderDayList ( );
	____enableBookerControl_DriverChooserListRendering ( );
	____enableBookerControl_generateDynamicPickupTimeCapability ( );
}

function enableDriverChooserPicker ( )
{
	$( '.DriverPicker' ).click
	(
		function ( )
		{
			_enableDriverChooserPicker ( );
			____enableBookerControl_DriverChooser2ListRendering ( );
		}
	);
}


function enableGuideToggler ()
{
	$( '.GuideToggler' ).click
	(
		function ( )
		{
			$('.StudentNameLabel').html (getUrlParameter('STUDENT_NAME'));
			metroDialog.toggle('#student_guide');
		}
	);
}
function _enableDriverChooserPicker ( )
{
	//driverEmail 
	//+
	//dayRowData=day:hour,student,pickup,availability
	metroDialog.create({
		title: "Jaa booker | Driver Schedule Switcher:",
		content: '	<label for="UserLevel">Driver</label>\
					<select class="js-select full-size" id = "BookerControl_DriverChooser2">\
					</select>\
					',
		actions: [
			{
				title: "Go",
				onclick: function(el){
					renderFrontend_FilteredUpdate_Driver ( $('#BookerControl_DriverChooser2 option:selected').attr("id") );
					
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

function ____enableBookerControl_DriverChooser2ListRendering ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.admin.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var options = $("#BookerControl_DriverChooser2");
				
				$.each(response, function() {
						var ___discoveredAdminLevel = this.adminLevel;
						var ___discoveredAdminName = this.adminName;
						var ___discoveredAdminEmail = this.adminEmail;
						//////////////////
						//INNER AJAX FOR LEVEL DATA
						//level data is used to check if admin is driver
						$.ajax
						(
							{
								type: 'GET',

								url: 'data/phps/_php.level.list.php',

								dataType: 'json',

								success: function ( inner_response ) 
								{
									if ( ___discoveredAdminLevel == inner_response [2].itemName )  //where ir[2] = Driver
										options.append($("<option />").val(___discoveredAdminName).attr("id",___discoveredAdminEmail).text(___discoveredAdminName));
								},
								error: function (data) 
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

function ____enableBookerControl_DriverChooserListRendering ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.admin.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var options = $("#BookerControl_DriverChooser");
				
				$.each(response, function() {
						var ___discoveredAdminLevel = this.adminLevel;
						var ___discoveredAdminName = this.adminName;
						var ___discoveredAdminEmail = this.adminEmail;
						//////////////////
						//INNER AJAX FOR LEVEL DATA
						//level data is used to check if admin is driver
						$.ajax
						(
							{
								type: 'GET',

								url: 'data/phps/_php.level.list.php',

								dataType: 'json',

								success: function ( inner_response ) 
								{
									if ( ___discoveredAdminLevel == inner_response [2].itemName )  //where ir[2] = Driver
										options.append($("<option />").val(___discoveredAdminName).attr("id",___discoveredAdminEmail).text(___discoveredAdminName));
								},
								error: function (data) 
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
				

function enableDatabaseUpdate ( )
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
				if ( response.length > 0 )
				{
					var discovered = false;
					
					$.each(response, function() {
						if ( this.dayOfWeek == CURRENT_SELECTION_DAY_OF_WEEK && this.hour == CURRENT_SELECTION_HOUR && this.dayOfMonth == CURRENT_SELECTION_DAY_OF_MONTH && this.adminEmail == CURRENT_SELECTION_INSTRUCTOR )
							discovered = true;
					});	
					
					if ( !discovered )
						___enableDatabaseUpdate ( );
					else
					{	
						$('.StudentNameLabel').html(getUrlParameter('STUDENT_NAME'));
						
						metroDialog.toggle('#student_book_error_dialog');
					}
				}
				else
					___enableDatabaseUpdate ( );
			},
			error: function (failure_outer_data) 
			{
				console.log(failure_outer_data);
			}
		}
	);
}


function ___enableDatabaseUpdate ( )
{
	//update slots
	$.ajax
	(
		{
			type: 'POST',
							
			url: 'data/phps/_php.new.slots.entry.php?DRIVER_ID=' + CURRENT_SELECTION_INSTRUCTOR + '&DAY_OF_MONTH=' + CURRENT_SELECTION_DAY_OF_MONTH + '&MONTH=' + CURRENT_SELECTION_MONTH + '&DAY_OF_WEEK=' + CURRENT_SELECTION_DAY_OF_WEEK + '&HOUR=' + CURRENT_SELECTION_HOUR + '&STUDENT_EMAIL=' + CURRENT_SELECTION_STUDENT + '&PICKUP_LOCATION=' + CURRENT_SELECTION_PICKUP_LOCATION + '&PICKUP_TIME=' + CURRENT_SELECTION_PICKUP_TIME, 

			data : null,
			
			processData : false,
			
			processData: false,  // tell jQuery not to process the data
			
			contentType: false,  // tell jQuery not to set contentType
			
			success: function ( inner_data ) 
			{
				$('.StudentNameLabel').html(getUrlParameter('STUDENT_NAME'));
				
				renderFrontend_Update ( );
				
				metroDialog.toggle('#student_book_success_dialog');	
			},
			error: function (failure_inner_data)
			{
				console.log(failure_inner_data);
			}
		}
	);
	
				
	//update notifications
	$.ajax
	(
		{
			type: 'POST',
							
			url: 'data/phps/_php.new.notifications.entry.php?DRIVER_ID=' + CURRENT_SELECTION_INSTRUCTOR + '&DAY_OF_WEEK=' + CURRENT_SELECTION_DAY_OF_WEEK + '&DAY_OF_MONTH=' + CURRENT_SELECTION_DAY_OF_MONTH + '&MONTH=' + CURRENT_SELECTION_MONTH + '&STUDENT_EMAIL=' + CURRENT_SELECTION_STUDENT + '&HOUR=' + CURRENT_SELECTION_HOUR + '&PICKUP_LOCATION=' + CURRENT_SELECTION_PICKUP_LOCATION, 

			data : null,
			
			processData : false,
			
			processData: false,  // tell jQuery not to process the data
			
			contentType: false,  // tell jQuery not to set contentType
			
			success: function ( inner_data ) 
			{
			},
			error: function (failure_data)
			{
				console.log(failure_data);
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
				$.each(response, function() {
					if ( this.studentEmail == getUrlParameter('STUDENT_ID')) //student filtering (Student sees only his/her times)
						$('#'+this.dayOfWeek + '_' + this.hour).addClass('isOccupied');
					
				});	
			},
			error: function (data) 
			{
			}
		}
	);
}


////enables filtered front end update (BY DRIVER)
function renderFrontend_FilteredUpdate_Driver ( driver )
{ 
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.slots.php',

			dataType: 'json',

			success: function ( response ) 
			{
				//delete all prior occupied states
				$.each(response, function() {
					$('#'+this.dayOfWeek + '_' + this.hour).removeClass('isOccupied');
				});	
				
				//refresh frontend with new states by driver
				$.each(response, function() {
					if ( this.adminEmail == driver && this.studentEmail == getUrlParameter('STUDENT_ID') )
						$('#'+this.dayOfWeek + '_' + this.hour).addClass('isOccupied');
				});		
			},
			error: function (data) 
			{
			}
		}
	);
}

////enables filtered front end update (BY DAY/MONTH SELECTION)
function renderFrontend_FilteredUpdate_Date ( dayOfMonth, monthString ) //eg: 21, August
{ 
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.slots.php',

			dataType: 'json',

			success: function ( response ) 
			{
				//delete all prior occupied states
				$.each(response, function() {
					$('#'+this.dayOfWeek + '_' + this.hour).removeClass('isOccupied');
				});	
				
				//refresh frontend with new states by driver
				$.each(response, function() {
					if ( this.dayOfMonth == dayOfMonth && this.month == monthString && this.studentEmail == getUrlParameter('STUDENT_ID') )
						$('#'+this.dayOfWeek + '_' + this.hour).addClass('isOccupied');
				});		
			},
			error: function (data) 
			{
			}
		}
	);
}


function ____enableBookerControl_renderDriverList ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.admin.list.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var options = $("#BookerControl_Drivers");
				
				$.each(response, function() {
						var ___discoveredAdminLevel = this.adminLevel;
						var ___discoveredAdminName = this.adminName;
						var ___discoveredAdminEmail = this.adminEmail;
						//////////////////
						//INNER AJAX FOR LEVEL DATA
						//level data is used to check if admin is driver
						$.ajax
						(
							{
								type: 'GET',

								url: 'data/phps/_php.level.list.php',

								dataType: 'json',

								success: function ( inner_response ) 
								{
									if ( ___discoveredAdminLevel == inner_response [2].itemName )  //where ir[2] = Driver
										options.append($("<option />").val(___discoveredAdminName).attr("id",___discoveredAdminEmail).text(___discoveredAdminName));
								},
								error: function (data) 
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

function ____enableBookerControl_renderPackageList ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.packages.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var options = $("#BookerControl_PackageChooser");
				
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

function ____enableBookerControl_generateDynamicPickupTimeCapability ( )
{
	$(document).ready(function() {  
		$('#BookerControl_PackageChooser').change(function(){
			if($('#BookerControl_PackageChooser option:selected').text() == 'Executive' )
			{
				
				var in_hour = CURRENT_SELECTION_HOUR.split('_')[0];
				var in_min_am_pm = CURRENT_SELECTION_HOUR.split('_')[1];
				var in_min = in_min_am_pm.replace( /\D+/g, '');
				var in_am_pm = in_min_am_pm.replace( /[0-9]/g, '');
				
				
				var duration = moment.duration({hours: 0, minutes: 30})
				var out_hour = moment(in_hour+":"+in_min, 'HH:mm').subtract(duration).hours();
				var out_min = moment(in_hour+":"+in_min, 'HH:mm').subtract(duration).minutes();
				var out_time = (parseInt(out_hour) == 0 ? 12 : out_hour) + " : " + out_min + ( parseInt(out_hour) >= 11 && parseInt(out_hour) < 12 && in_am_pm == 'pm' ? ' am' : ( parseInt(out_hour) < 12 && in_am_pm == 'am' ? " am" : " pm" ) );
			
				CURRENT_SELECTION_PICKUP_TIME = out_time;
				
				$.Notify({
					caption: 'Executive Info',
					content: '\n\nPick up time at ' + out_time + ' 30 minutes before selected hour at ' + in_hour+ " : " + in_min + " " + in_am_pm,
					type: 'info'
				});
			}
			if($('#BookerControl_PackageChooser option:selected').text() == 'Non-Executive' )
			{
				CURRENT_SELECTION_PICKUP_TIME = '';
			}
		});
	});
}

function ____enableBookerControl_renderPickupLocationList ( )
{
	$.ajax
	(
		{
			type: 'GET',

			url: 'data/phps/_php.pickups.php',

			dataType: 'json',

			success: function ( response ) 
			{
				var options = $("#BookerControl_PickupLocation");
				
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



function ____enableBookerControl_renderDayList ( )
{
	var indexOfStringMonth = months.indexOf(months[new Date().getMonth()]); //Startup DayList render by default today's month
	
	var discoveredDayNumbers_AtDayOfWeek = getDaysBetweenDates(new Date(new Date().getFullYear(),indexOfStringMonth,1), new Date(new Date().getFullYear(),indexOfStringMonth,daysInMonth(indexOfStringMonth)),CURRENT_SELECTION_DAY_OF_WEEK);

	var options = $("#BookerControl_DayOfMonth");
	
	$.each(discoveredDayNumbers_AtDayOfWeek, function() {
		options.append($("<option />").val(this).text(this));
	});	
	
	____enableBookerControl_renderDayList_dynamic ( );
}

function ____enableBookerControl_renderDayList_dynamic ( )
{
	$(document).ready(function() {  
		$('#BookerControl_Month').change(function(){
			//clean day of month list
			$('#BookerControl_DayOfMonth')
				.find('option')
				.remove()
				.end();
			
			//regenerate based on new month value
			var indexOfStringMonth = months.indexOf($('#BookerControl_Month option:selected').text()); //Startup DayList render by default today's month
			
			var discoveredDayNumbers_AtDayOfWeek = getDaysBetweenDates(new Date(new Date().getFullYear(),indexOfStringMonth,1), new Date(new Date().getFullYear(),indexOfStringMonth,daysInMonth(indexOfStringMonth)),CURRENT_SELECTION_DAY_OF_WEEK);

			var options = $("#BookerControl_DayOfMonth");
			
			$.each(discoveredDayNumbers_AtDayOfWeek, function() {
				options.append($("<option />").val(this).text(this));
			});	
		});
	});
}

function ____enableBookerControl_renderMonthList ( )
{
	var options = $("#BookerControl_Month");
	
	$.each(months, function() {
		options.append($("<option />").val(this).text(this));
	});	
	
	//initialize month at default today's month
	$('#BookerControl_Month').val(months[new Date().getMonth()]);
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

/* Given a start date, end date and day name, return
** an array of dates between the two dates for the
** given day inclusive
** @param {Date} start - date to start from
** @param {Date} end - date to end on
** @param {string} dayName - name of day
** @returns {Array} array of Dates
*/
function getDaysBetweenDates(start, end, dayName) {
	//TAKES MONTH PARAM IN START/END DATES FROM 0-11!!!!!!!!
  var result = [];
  var days = {sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};
  var day = days[dayName.toLowerCase().substr(0,3)];
  // Copy start date
  var current = new Date(start);
  // Shift to next of required days
  current.setDate(current.getDate() + (day - current.getDay() + 7) % 7);
  // While less than end date, add dates to result array
  while (current < end) {
	  var discoveredDate = new Date(+current);
    result.push(parseInt(discoveredDate.toString().split( " " ) [ 2 ])); //push the third component of the date to the result list
    current.setDate(current.getDate() + 7);
  }
  return result;  
}


function daysInMonth(month) {
    return new Date(new Date().getFullYear(), month, 0).getDate();
}

var months = ["January","February","March","April","May","June", "July","August","September","October","November","December"];
//EXAMPLE:
//console.log(getDaysBetweenDates(new Date(new Date().getFullYear(),6,1), new Date(new Date().getFullYear(),6,daysInMonth(6)),'thu'));
//EXAMPLE_NOTES: Get all thursdays from first day in month 6, to the last day=daysInMonth(6) in month 6
