<?php
	//////////////////////////////////////////////
	//Author: Jordan Micah Bennett, BookJaa v2 2017
	

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
		$result = $connection->query ( "select * from notifications" );
		
		if (!$result) {
			echo "\nPDO::errorInfo():\n";
			print_r($dbh->errorInfo());
		}

		$output = [];
		while($row = $result->fetch(PDO::FETCH_ASSOC))
		{
			$output[] = array(
			"adminEmail" => $row['AdminEmail'],
			"dayOfMonth" => $row['DayOfMonth'],
			"month" => $row['Month'],
			"dayOfWeek" => $row['DayOfWeek'],
			"hour" => $row['Hour'],
			"studentEmail" => $row['StudentEmail'],
			"studentName" => $row['StudentName'],
			"isMarkedRead" => $row['IsMarkedRead'],
			"pickupLocation" => $row['PickupLocation'],
			"dropOffLocation" => $row['DropOffLocation']
			);
		}
		header('Content-Type: application/json');
		echo json_encode($output);
?>

