<?php
	//////////////////////////////////////////////
	//Author: Jordan Micah Bennett, BookJaa 2017
	session_start();
	//establish database connection requirements
		//establish database connection requirements
		$_SESSION [ 'dbHost' ] = 'sql307.epizy.com';
		$_SESSION [ 'dbUsername' ] = 'rfgd_20344046';
		$_SESSION [ 'dbPassword' ] = 'HurFsB9Y';
		$_SESSION [ 'dbName' ] = 'rfgd_20344046_db';
		
		
	//establish processes
		//establish database connection
		//connection to the database
		$connection = new PDO('mysql:host=sql307.epizy.com;dbname=rfgd_20344046_db', $_SESSION [ 'dbUsername' ], $_SESSION [ 'dbPassword' ]);
		
	
		$adminEmail = $_GET['DRIVER_ID'];
		$updateDayOfWeek = $_GET['UPDATE_DAY'];
		$updateAnswer = $_GET['UPDATE_ANSWER'];
		
		
		//insert last mood into database
		$sql = "";
		
		if ( $updateDayOfWeek == 'sun' )
			$sql = "update restrictions_day_of_week set IsSundayRestricted = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateDayOfWeek == 'mon' )
			$sql = "update restrictions_day_of_week set IsMondayRestricted = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateDayOfWeek == 'tue' )
			$sql = "update restrictions_day_of_week set IsTuesdayRestricted = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateDayOfWeek == 'wed' )
			$sql = "update restrictions_day_of_week set IsWednesdayRestricted = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateDayOfWeek == 'thu' )
			$sql = "update restrictions_day_of_week set IsThursdayRestricted = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateDayOfWeek == 'fri' )
			$sql = "update restrictions_day_of_week set IsFridayRestricted = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateDayOfWeek == 'sat' )
			$sql = "update restrictions_day_of_week set IsSaturdayRestricted = '$updateAnswer' where AdminEmail = '$adminEmail'";
			
		$query = $connection->prepare($sql);
		
		$query->execute();				
?>

