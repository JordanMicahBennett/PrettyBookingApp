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
				$newItemName = $_GET['ITEM_NAME'];	
				
				
				////////////////////////////////////////////////////////////////////////////////////////////////
				//BEGIN ADD NEW STUDENT TEXT BASED DETAILS PROCESSS - COMPONENT.1
				////////////////////////////////////////////////////////////////////////////////////////////////		
				//create new user
					//generate user
					$sql = "insert into pickups(Item) values ('$newItemName')";
					
					$query = $connection->prepare($sql);
					
					$query->execute();
		?>