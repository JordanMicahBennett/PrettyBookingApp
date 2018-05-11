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
		$result = $connection->query ( "select * from restrictions_day_of_week" );
		
		if (!$result) {
			echo "\nPDO::errorInfo():\n";
			print_r($dbh->errorInfo());
		}


		
		while($row = $result->fetch(PDO::FETCH_ASSOC))
		{
			$output[] = array(
			"adminEmail" => $row['AdminEmail'],
			"isSundayRestricted" => $row['IsSundayRestricted'],
			"isMondayRestricted" => $row['IsMondayRestricted'],
			"isTuesdayRestricted" => $row['IsTuesdayRestricted'],
			"isWednesdayRestricted" => $row['IsWednesdayRestricted'],
			"isThursdayRestricted" => $row['IsThursdayRestricted'],
			"isFridayRestricted" => $row['IsFridayRestricted'],
			"isSaturdayRestricted" => $row['IsSaturdayRestricted']
			);
		}
		header('Content-Type: application/json');
		echo json_encode($output);
?>