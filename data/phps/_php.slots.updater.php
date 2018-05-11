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
		$adminDayRowData = $_GET['DAY_ROW_DATA'];
		$adminDayRowData_DayOfMonth = $_GET['DAY_ROW_DATA_DAY_OF_MONTH'];
		$month = $_GET['DAY_ROW_DATA_MONTH'];
		
		
		//insert last mood into database
		$sql = "update slots set DayRowData = '$adminDayRowData' where AdminEmail = '$adminEmail' and DayOfMonth = '$adminDayRowData_DayOfMonth' and Month = '$month'";
			
		$query = $connection->prepare($sql);
		
		$query->execute();				
?>

