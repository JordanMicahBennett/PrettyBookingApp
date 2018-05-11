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
		$updateAnswer = $_GET['UPDATE_ANSWER'];
		
		
		//insert last mood into database
		$sql = "";
		
		$sql = "update restrictions_day_of_month set DayOfMonthAtRestriction = '$updateAnswer' where AdminEmail = '$adminEmail'";
		
		$query = $connection->prepare($sql);
		
		$query->execute();				
?>

