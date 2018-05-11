//////////////////////////////////////////////
//Author: Jordan Micah Bennett, BookJaa V2 2017
$(document).ready
(
	function ( ) 
	{
		////////////////
		//ALL 
		$('.day').html(currentDay);
		$('.month').html(currentMonth); //THESE ARE ALSO UPDATED VIA MODIFIED DATE PICKER, in student.metro_.js, in dayClick routine.
		$('#ProfileNameTag').html(getUrlParameter('STUDENT_NAME') != null ? getUrlParameter('STUDENT_NAME') : getUrlParameter('ADMIN_NAME'));
	}
);

//////////////////////////////////////////////////////////
//UTILITIES

//DATE
function toggleContent ( activeContentId, status )
{
	document.getElementById ( activeContentId ).style.visibility = status; //show entity
}	

var currentDate = new Date();
var months = ["January","February","March","April","May","June", "July","August","September","October","November","December"];

var currentMonth = months[currentDate.getMonth()];
var currentDay = currentDate.getDate()

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