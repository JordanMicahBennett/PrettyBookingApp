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
		$result = $connection->query ( "select * from students" );
		
		if (!$result) {
			echo "\nPDO::errorInfo():\n";
			print_r($dbh->errorInfo());
		}


		
		while($row = $result->fetch(PDO::FETCH_ASSOC))
		{
			$output[] = array(
			"studentEmail" => $row['StudentEmail'],
			"studentEmail2" => $row['StudentEmail2'],
			"studentName" => $row['StudentName'],
			"studentPhone" => $row['StudentPhone'],
			"studentPhone2" => $row['StudentPhone2'],
			"isFirstLogin" => $row['IsFirstLogin'],
			"adminEmail" => $row['AdminEmail']
			);
		}
		header('Content-Type: application/json');
		echo json_encode($output);
?>

