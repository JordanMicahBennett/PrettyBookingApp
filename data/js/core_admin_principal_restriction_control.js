//////////////////////////////////////////////
//Author: Jordan Micah Bennett, BookJaa V2 2017

var DAY_OF_MONTH_RESTRICTER_TOGGLED = false;

$(document).ready
(
	function ( ) 
	{
		enableRestriction_DriverDayOfWeek ( );
		enableRestriction_LunchTime ( );
		enableRestriction_DriverDayOfMonth ( );
		enableUnrestriction_DriverDayOfMonth ( );
	}
);

function enableRestriction_DriverDayOfMonth ( )
{
	$('#_day_of_month_restricter_btn').click(function() 
	{
		if (!DAY_OF_MONTH_RESTRICTER_TOGGLED)
			DAY_OF_MONTH_RESTRICTER_TOGGLED = true;
		else
			DAY_OF_MONTH_RESTRICTER_TOGGLED = false;
	});
}

function enableUnrestriction_DriverDayOfMonth ( )
{
	$('#_day_of_month_unrestricter_btn').click(function() 
	{
		____enableUnrestriction_DayOfMonth_DbUpdate ( );
		
		metroDialog.toggle('#admin_unrestriction_day_of_month_success_dialog');
	});
}



function enableRestriction_DriverDayOfWeek ( )
{
	$('#day_of_week_restrictor_mon').click(function() {
		if($('#day_of_week_restrictor_mon').is(":checked"))
			___enableRestriction_DriverDayOfWeek ( RESTRICTION_DRIVER_ID, 'mon', 'yes' );
		else 
			___enableRestriction_DriverDayOfWeek ( RESTRICTION_DRIVER_ID, 'mon', 'no' );
	});
	$('#day_of_week_restrictor_tue').click(function() {
		if($('#day_of_week_restrictor_tue').is(":checked"))
			___enableRestriction_DriverDayOfWeek ( RESTRICTION_DRIVER_ID, 'tue', 'yes' );
		else 
			___enableRestriction_DriverDayOfWeek ( RESTRICTION_DRIVER_ID, 'tue', 'no' );
	});
	$('#day_of_week_restrictor_wed').click(function() {
		if($('#day_of_week_restrictor_wed').is(":checked"))
			___enableRestriction_DriverDayOfWeek ( RESTRICTION_DRIVER_ID, 'wed', 'yes' );
		else 
			___enableRestriction_DriverDayOfWeek ( RESTRICTION_DRIVER_ID, 'wed', 'no' );
	});
	$('#day_of_week_restrictor_thu').click(function() {
		if($('#day_of_week_restrictor_thu').is(":checked"))
			___enableRestriction_DriverDayOfWeek ( RESTRICTION_DRIVER_ID, 'thu', 'yes' );
		else 
			___enableRestriction_DriverDayOfWeek ( RESTRICTION_DRIVER_ID, 'thu', 'no' );
	});
	$('#day_of_week_restrictor_fri').click(function() {
		if($('#day_of_week_restrictor_fri').is(":checked"))
			___enableRestriction_DriverDayOfWeek ( RESTRICTION_DRIVER_ID, 'fri', 'yes' );
		else 
			___enableRestriction_DriverDayOfWeek ( RESTRICTION_DRIVER_ID, 'fri', 'no' );
	});
	$('#day_of_week_restrictor_sat').click(function() {
		if($('#day_of_week_restrictor_sat').is(":checked"))
			___enableRestriction_DriverDayOfWeek ( RESTRICTION_DRIVER_ID, 'sat', 'yes' );
		else 
			___enableRestriction_DriverDayOfWeek ( RESTRICTION_DRIVER_ID, 'sat', 'no' );
	});
	$('#day_of_week_restrictor_sun').click(function() {
		if($('#day_of_week_restrictor_sun').is(":checked"))
			___enableRestriction_DriverDayOfWeek ( RESTRICTION_DRIVER_ID, 'sun', 'yes' );
		else 
			___enableRestriction_DriverDayOfWeek ( RESTRICTION_DRIVER_ID, 'sun', 'no' );
	});
}


function ___enableRestriction_DriverDayOfWeek ( adminEmail, updateDay, updateAnswer )
{
	$.ajax
	(
		{
			type: 'POST',
							
			url: 'data/phps/_php.update.restriction.day.of.week.php?DRIVER_ID=' + adminEmail + '&UPDATE_DAY=' + updateDay + '&UPDATE_ANSWER=' + updateAnswer, 

			data : null,
			
			processData : false,
			
			processData: false,  // tell jQuery not to process the data
			
			contentType: false,  // tell jQuery not to set contentType
			
			success: function ( data ) 
			{
			},
			error: function(failure_data)
			{
			}
		}
	);

}


function enableRestriction_LunchTime ( )
{
	$(document).ready(function() {  
		$('#LunchTimeActivationToggler').change(function(){
			//clear previous data, to prepare for new entry, where the select box renders only one entry at a time
			____enableRestriction_LunchTime_ClearPriorlySetLunchTimes ( );
			
			//allow new entry 
			if($('#LunchTimeActivationToggler option:selected').text() == '7:30am' )
				____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '7_30am', 'yes'  );
			
			if($('#LunchTimeActivationToggler option:selected').text() == '8:40am' )
				____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '8_40am', 'yes'  );
			
			if($('#LunchTimeActivationToggler option:selected').text() == '9:50am' )
				____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '9_50am', 'yes'  );
			
			if($('#LunchTimeActivationToggler option:selected').text() == '11:00am' )
				____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '11_00am', 'yes'  );
			
			if($('#LunchTimeActivationToggler option:selected').text() == '12:10pm' )
				____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '12_10pm', 'yes'  );
			
			if($('#LunchTimeActivationToggler option:selected').text() == '1:20pm' )
				____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '1_20pm', 'yes'  );
			
			if($('#LunchTimeActivationToggler option:selected').text() == '2:30pm' )
				____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '2_30pm', 'yes'  );
			
			if($('#LunchTimeActivationToggler option:selected').text() == '3:40pm' )
				____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '3_40pm', 'yes'  );
			
			if($('#LunchTimeActivationToggler option:selected').text() == '4:50pm' )
				____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '4_50pm', 'yes'  );
			
			if($('#LunchTimeActivationToggler option:selected').text() == '5:00pm' )
				____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '5_00pm', 'yes'  );
			
			if($('#LunchTimeActivationToggler option:selected').text() == '6:10pm' )
				____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '6_10pm', 'yes'  );
		});
	});
}

function ____enableRestriction_LunchTime_ClearPriorlySetLunchTimes ( )
{
	____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '7_30am', 'no' );
	____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '8_40am', 'no' );
	____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '9_50am', 'no' );
	____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '11_00am', 'no' );
	____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '12_10pm', 'no' );
	____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '1_20pm', 'no' );
	____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '2_30pm', 'no' );
	____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '3_40pm', 'no' );
	____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '4_50pm', 'no' );
	____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '5_00pm', 'no' );
	____enableRestriction_LunchTime_DbUpdate ( RESTRICTION_DRIVER_ID, '6_10pm', 'no' );
}

function ____enableRestriction_LunchTime_DbUpdate ( adminEmail, updateTime, updateAnswer )
{
	$.ajax
	(
		{
			type: 'POST',
							
			url: 'data/phps/_php.update.restriction.lunch.time.php?DRIVER_ID=' + adminEmail + '&UPDATE_TIME=' + updateTime + '&UPDATE_ANSWER=' + updateAnswer, 

			data : null,
			
			processData : false,
			
			processData: false,  // tell jQuery not to process the data
			
			contentType: false,  // tell jQuery not to set contentType
			
			success: function ( data ) 
			{
			},
			error: function(failure_data)
			{
			}
		}
	);
}


function ____enableRestriction_DayOfMonth_DbUpdate ( updateAnswer )
{
	$.ajax
	(
		{
			type: 'POST',
							
			url: 'data/phps/_php.update.restriction.day.of.month.php?DRIVER_ID=' + RESTRICTION_DRIVER_ID + '&UPDATE_ANSWER=' + updateAnswer, 

			data : null,
			
			processData : false,
			
			processData: false,  // tell jQuery not to process the data
			
			contentType: false,  // tell jQuery not to set contentType
			
			success: function ( data ) 
			{
				
			},
			error: function(failure_data)
			{
			}
		}
	);
}

function ____enableUnrestriction_DayOfMonth_DbUpdate ( )
{
	$.ajax
	(
		{
			type: 'POST',
							
			url: 'data/phps/_php.update.restriction.day.of.month.php?DRIVER_ID=' + RESTRICTION_DRIVER_ID + '&UPDATE_ANSWER=none', 

			data : null,
			
			processData : false,
			
			processData: false,  // tell jQuery not to process the data
			
			contentType: false,  // tell jQuery not to set contentType
			
			success: function ( data ) 
			{
				
			},
			error: function(failure_data)
			{
			}
		}
	);
}
