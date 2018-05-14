	<?php
	//////////////////////////////////////////////
	//Author: Jordan Micah Bennett, BookJaa v2 2017
	
		session_start ( );
		
		
		
				////////////////////////////////////////////////////////////////////////////////////////////////
				//BEGIN SQL CONNECTION PROCESSS
				////////////////////////////////////////////////////////////////////////////////////////////////
				//establish database connection requirements
					//estabish database connection requirements
					$_SESSION [ 'dbHost' ] = 'sql307.epizy.com';
					$_SESSION [ 'dbUsername' ] = 'rfgd_20344046';
					$_SESSION [ 'dbPassword' ] = 'HurFsB9Y';
					$_SESSION [ 'dbName' ] = 'rfgd_20344046_db';
					
		
				//establish database connection
					//connection to the database
					$connection = new PDO('mysql:host=sql307.epizy.com;dbname=rfgd_20344046_db', $_SESSION [ 'dbUsername' ], $_SESSION [ 'dbPassword' ]);
					
				
				
				////////////////////////////////////////////////////////////////////////////////////////////////
				//BEGIN ADD NEW ADMIN TEXT BASED DETAILS PROCESSS - COMPONENT.0
				////////////////////////////////////////////////////////////////////////////////////////////////				
				//establish user input html element variables
				$adminEmail = $_GET['DRIVER_ID'];
				$dayOfMonth = $_GET['DAY_OF_MONTH'];
				$month = $_GET['MONTH'];
				$dayOfWeek = $_GET['DAY_OF_WEEK'];
				$hour = $_GET['HOUR'];
				$studentEmail = $_GET['STUDENT_EMAIL'];
				$studentName = $_GET['STUDENT_NAME'];
				$pickupLocation = $_GET['PICKUP_LOCATION'];
				$pickupTime = $_GET['PICKUP_TIME'];
				$dropOffLocation = $_GET['DROPOFF_LOCATION'];
				
				////////////////////////////////////////////////////////////////////////////////////////////////
				//BEGIN ADD NEW ADMIN TEXT BASED DETAILS PROCESSS - COMPONENT.1
				////////////////////////////////////////////////////////////////////////////////////////////////		
				//create new user
					//generate user
					$sql = "insert into slots(AdminEmail, DayOfMonth, Month, DayOfWeek, Hour, StudentEmail, PickupLocation, PickupTime, DropOffLocation, StudentName) values ('$adminEmail', '$dayOfMonth', '$month', '$dayOfWeek', '$hour', '$studentEmail', '$pickupLocation', '$pickupTime', '$dropOffLocation', '$studentName')";
					
					$query = $connection->prepare($sql);
					
					$query->execute();
			
		?>