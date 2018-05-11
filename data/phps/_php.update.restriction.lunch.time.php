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
		$updateTime = $_GET['UPDATE_TIME'];
		$updateAnswer = $_GET['UPDATE_ANSWER'];

		
		//insert last mood into database
		$sql = "";
		
		if ( $updateTime == '7_30am' )
			$sql = "update restrictions_lunch_time set IsLunchAt_7_30am = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateTime == '8_40am' )
			$sql = "update restrictions_lunch_time set IsLunchAt_8_40am = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateTime == '9_50am' )
			$sql = "update restrictions_lunch_time set IsLunchAt_9_50am = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateTime == '11_00am' )
			$sql = "update restrictions_lunch_time set IsLunchAt_11_00am = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateTime == '12_10pm' )
			$sql = "update restrictions_lunch_time set IsLunchAt_12_10pm = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateTime == '1_20pm' )
			$sql = "update restrictions_lunch_time set IsLunchAt_1_20pm = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateTime == '2_30pm' )
			$sql = "update restrictions_lunch_time set IsLunchAt_2_30pm = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateTime == '3_40pm' )
			$sql = "update restrictions_lunch_time set IsLunchAt_3_40pm = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateTime == '4_50pm' )
			$sql = "update restrictions_lunch_time set IsLunchAt_4_50pm = '$updateAnswer' where AdminEmail = '$adminEmail'";
			
		if ( $updateTime == '5_00pm' )
			$sql = "update restrictions_lunch_time set IsLunchAt_5_00pm = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		if ( $updateTime == '6_10pm' )
			$sql = "update restrictions_lunch_time set IsLunchAt_6_10pm = '$updateAnswer' where AdminEmail = '$adminEmail'";
			
			
		$query = $connection->prepare($sql);
		
		$query->execute();				
?>

