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
		$dayOfMonth = $_GET['DAY_OF_MONTH'];
		$month = $_GET['MONTH'];
		$dayOfWeek = $_GET['DAY_OF_WEEK'];
		$hour = $_GET['HOUR'];
		$studentEmail = $_GET['STUDENT_EMAIL'];
		$pickupLocation = $_GET['PICKUP_LOCATION'];
		$pickupTime = $_GET['PICKUP_TIME'];
		
		//insert last mood into database
		$sql = "delete from slots where AdminEmail ='".$adminEmail."' and DayOfMonth = '".$dayOfMonth."' and Month = '".$month."' and DayOfWeek = '".$dayOfWeek."' and Hour = '".$hour."' and StudentEmail = '".$studentEmail."'";
		
		$query = $connection->prepare($sql);
		
		$query->execute();				
?>

