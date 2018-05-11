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
				//END SQL CONNECTION PROCESSS
				////////////////////////////////////////////////////////////////////////////////////////////////	
				
				
				////////////////////////////////////////////////////////////////////////////////////////////////
				//BEGIN ADD NEW ADMIN TEXT BASED DETAILS PROCESSS - COMPONENT.0
				////////////////////////////////////////////////////////////////////////////////////////////////				
				//establish user input html element variables
				$newAdminName = $_GET['NEW_ADMIN_NAME'];
				$newAdminEmail = $_GET['NEW_ADMIN_EMAIL'];
				$newAdminPassword = $_GET['NEW_ADMIN_PASSWORD'];
				$newAdminLevel = $_GET['NEW_ADMIN_LEVEL'];
				$newAdminLicenseId = $_GET['NEW_ADMIN_LICENSE_ID'];
				
		
				////////////////////////////////////////////////////////////////////////////////////////////////
				//BEGIN ADD NEW ADMIN TEXT BASED DETAILS PROCESSS - COMPONENT.1
				////////////////////////////////////////////////////////////////////////////////////////////////		
				//create new user
					//generate user
					$sql1 = "insert into admins(AdminEmail, AdminPassword, AdminName, AdminPhone, AdminLevel) values ('$newAdminEmail','$newAdminPassword','$newAdminName','', '$newAdminLevel')";
					//generate user license
					$sql2 = "insert into admins_licenses(AdminEmail, LicenseId) values ('$newAdminEmail','$newAdminLicenseId')";
					
					$sql3 = "";
					$sql4 = "";
					$sql5 = "";
					
					//generate initial day of week restriction
					if ( $newAdminLevel == 'Driver' )
					{
						$sql3 = "insert into restrictions_day_of_week(AdminEmail,IsSundayRestricted,IsMondayRestricted,IsTuesdayRestricted,IsWednesdayRestricted,IsThursdayRestricted,IsFridayRestricted,IsSaturdayRestricted) values ('$newAdminEmail','no','no','no','no','no','no','no')";
					
						$sql4 = "insert into restrictions_lunch_time(AdminEmail,IsLunchAt_7_30am,IsLunchAt_8_40am,IsLunchAt_9_50am,IsLunchAt_11_00am,IsLunchAt_12_10pm,IsLunchAt_1_20pm,IsLunchAt_2_30pm,IsLunchAt_3_40pm,IsLunchAt_4_50pm,IsLunchAt_5_00pm,IsLunchAt_6_10pm) values ('$newAdminEmail','no','no','no','no','no','no','no','no','no','no','no')";
						
						$sql5 = "insert into restrictions_day_of_month(AdminEmail,DayOfMonthAtRestriction) values ('$newAdminEmail','none')";
					}
					
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