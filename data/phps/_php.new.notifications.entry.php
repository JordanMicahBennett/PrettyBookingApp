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
				//AdminEmail	DayOfWeek	DayOfMonth	Month	StudentEmail	Hour	IsRead
				//establish user input html element variables
				$adminEmail = $_GET['DRIVER_ID'];
				$dayOfWeek = $_GET['DAY_OF_WEEK'];
				$dayOfMonth = $_GET['DAY_OF_MONTH'];
				$month = $_GET['MONTH'];
				$studentEmail = $_GET['STUDENT_EMAIL'];
				$hour = $_GET['HOUR'];
				$pickupLocation = $_GET['PICKUP_LOCATION'];
				
				
				////////////////////////////////////////////////////////////////////////////////////////////////
				//BEGIN ADD NEW ADMIN TEXT BASED DETAILS PROCESSS - COMPONENT.1
				////////////////////////////////////////////////////////////////////////////////////////////////		
				//create new user
					//generate user
					$sql = "insert into notifications(AdminEmail, DayOfWeek, DayOfMonth, Month, StudentEmail, Hour, IsMarkedRead, PickupLocation) values ('$adminEmail', '$dayOfWeek', '$dayOfMonth', '$month', '$studentEmail', '$hour', '', '$pickupLocation')";
						
					$query = $connection->prepare($sql);
					
					$query->execute();
		?>