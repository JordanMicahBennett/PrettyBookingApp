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
		$result = $connection->query ( "select * from restrictions_lunch_time" );
		
		if (!$result) {
			echo "\nPDO::errorInfo():\n";
			print_r($dbh->errorInfo());
		}




		while($row = $result->fetch(PDO::FETCH_ASSOC))
		{
			$output[] = array(
			"adminEmail" => $row['AdminEmail'],
			"isLunchAt_7_30am" => $row['IsLunchAt_7_30am'],
			"isLunchAt_8_40am" => $row['IsLunchAt_8_40am'],
			"isLunchAt_9_50am" => $row['IsLunchAt_9_50am'],
			"isLunchAt_11_00am" => $row['IsLunchAt_11_00am'],
			"isLunchAt_12_10pm" => $row['IsLunchAt_12_10pm'],
			"isLunchAt_1_20pm" => $row['IsLunchAt_1_20pm'],
			"isLunchAt_2_30pm" => $row['IsLunchAt_2_30pm'],
			"isLunchAt_3_40pm" => $row['IsLunchAt_3_40pm'],
			"isLunchAt_4_50pm" => $row['IsLunchAt_4_50pm'],
			"isLunchAt_5_00pm" => $row['IsLunchAt_5_00pm'],
			"isLunchAt_6_10pm" => $row['IsLunchAt_6_10pm']
			);
		}
		header('Content-Type: application/json');
		echo json_encode($output);
?>