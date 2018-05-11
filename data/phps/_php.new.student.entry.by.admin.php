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
				//BEGIN ADD NEW STUDENT TEXT BASED DETAILS PROCESSS - COMPONENT.0
				////////////////////////////////////////////////////////////////////////////////////////////////				
				//establish user input html element variables
				$newStudentName = $_GET['NEW_STUDENT_NAME'];
				$newStudentEmail = $_GET['NEW_STUDENT_EMAIL'];
				$newStudentAdminEmail = $_GET['NEW_STUDENT_ADMIN_EMAIL'];
				$newStudentPhone = $_GET['NEW_STUDENT_PHONE'];
				$newStudentTrn = $_GET['NEW_STUDENT_TRN'];
				$newStudentPickup = $_GET['NEW_STUDENT_PICKUP'];
				$newStudentPickup_Comment = $_GET['NEW_STUDENT_PICKUP_COMMENT'];
				$newStudentDropOff = $_GET['NEW_STUDENT_DROPOFF'];	
				$newStudentDropOff_Comment = $_GET['NEW_STUDENT_DROPOFF_COMMENT'];	
				
				
				////////////////////////////////////////////////////////////////////////////////////////////////
				//BEGIN ADD NEW STUDENT TEXT BASED DETAILS PROCESSS - COMPONENT.1
				////////////////////////////////////////////////////////////////////////////////////////////////		
				//create new user
					//generate user
					$sql = "insert into students(StudentEmail, AdminEmail, StudentPassword, StudentName, StudentAge, StudentPhone, StudentTargetLicense, StudentPickupLocation, StudentPickupLocation_Comment, StudentDropOffLocation, StudentDropOffLocation_Comment, Trn, IsFirstLogin, StudentProfilePictureStream) values ('$newStudentEmail','','','$newStudentName','','$newStudentPhone','','$newStudentPickup','$newStudentPickup_Comment','$newStudentDropOff','$newStudentDropOff_Comment', '$newStudentTrn', '', '' )";
					
					$query = $connection->prepare($sql);
					
					$query->execute();
		?>