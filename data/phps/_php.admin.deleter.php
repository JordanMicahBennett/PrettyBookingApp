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
		
	
		$adminEmail = $_GET['ADMIN_EMAIL'];
		
		//insert last mood into database
		$sql1 = "delete from admins where AdminEmail ='".$adminEmail."'";
		$sql2 = "delete from admins_licenses where AdminEmail ='".$adminEmail."'";
		$sql3 = "delete from restrictions_day_of_week where AdminEmail ='".$adminEmail."'";
		$sql4 = "delete from restrictions_lunch_time where AdminEmail ='".$adminEmail."'";
		$sql5 = "delete from restrictions_day_of_month where AdminEmail ='".$adminEmail."'";
		
		$query1 = $connection->prepare($sql1);
		$query1->execute();		

		$query2 = $connection->prepare($sql2);
		$query2->execute();		

		$query3 = $connection->prepare($sql3);
		$query3->execute();			
		
		$query4 = $connection->prepare($sql4);
		$query4->execute();		
		
		$query5 = $connection->prepare($sql5);
		$query5->execute();		
?>

