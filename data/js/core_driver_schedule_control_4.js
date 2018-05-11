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
		renderFrontend_Update ( );
		enableGuideToggler ();
		enableDatePicking ( );
	}
);

function enableDatePicking ( )
{
    $(function(){
        var dateData = $(".datepicker").datepicker();
    });
}

function enableGuideToggler ()
{
	$( '.GuideToggler' ).click
	(
		function ( )
		{
			$('.AdminNameLabel').html (getUrlParameter('ADMIN_NAME'));
			metroDialog.toggle('#admin_guide');
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
					if (this.adminEmail == getUrlParameter('ADMIN_ID')) //driver can only see bookings related to him/her
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
					if ( this.dayOfMonth == dayOfMonth && this.month == monthString && this.adminEmail == getUrlParameter('ADMIN_ID') ) //driver can only see bookings related to him/her )
						$('#'+this.dayOfWeek + '_' + this.hour).addClass('isOccupied');
				});		
			},
			error: function (data) 
			{
			}
		}
	);
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

