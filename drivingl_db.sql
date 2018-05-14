-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 14, 2018 at 02:27 AM
-- Server version: 5.6.39
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `drivingl_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `AdminEmail` varchar(99) NOT NULL,
  `AdminPassword` varchar(99) NOT NULL,
  `AdminName` varchar(99) NOT NULL,
  `AdminPhone` varchar(30) NOT NULL,
  `AdminLevel` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`AdminEmail`, `AdminPassword`, `AdminName`, `AdminPhone`, `AdminLevel`) VALUES
('admin@jaa.com', 'admin', 'Admin', '547-0790', 'System'),
('clintguthrie@jaa.com', 'Jaadriving@1', 'Clint Guthrie', '', 'Driver'),
('coneilanderson@jaa.com', 'Jaadriving@1', 'Coneil Anderson', '', 'Principal'),
('diego@jaa.com', 'pwd2018', 'Diego Jordan', '', 'Principal'),
('duanebrown@jaa.com', 'modern2017', 'Duane Brown', '', 'System'),
('howardlewis@jaa.com', 'Jaadriving@1', 'Howard Lewis', '', 'Driver'),
('jordanbennett@jaa.com', 'modern2017', 'Jordan Bennett', '', 'System'),
('kamilahanderson@jaa.com', 'Jaadriving@1', 'Kamilah Anderson', '', 'Principal'),
('kevin@jaa.com', 'pwd2018', 'Kevin Thompson', '', 'Principal'),
('kimberly@jaa.com', 'pwd2018', 'Kimberly Martin', '', 'Principal'),
('lundie@jaa.com', 'pwd2018', 'Lundie-Rae Martin', '', 'Principal'),
('Patricia@jaa.com', 'pwd2018', 'Patricia Lawrence', '', 'Principal'),
('suan@jaa.com', 'pwd2018', 'Suan Mendez', '', 'Principal'),
('sydneywedderburn@jaa.com', 'Jaadriving@1', 'Sydney Wedderburn', '', 'Driver'),
('Trifina@jaa.com', 'pwd2018', 'Trifina Ellis', '', 'Principal');

-- --------------------------------------------------------

--
-- Table structure for table `admins_licenses`
--

CREATE TABLE `admins_licenses` (
  `AdminEmail` varchar(99) NOT NULL,
  `LicenseId` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins_licenses`
--

INSERT INTO `admins_licenses` (`AdminEmail`, `LicenseId`) VALUES
('duanebrown@jaa.com', 'na'),
('jordanbennett@jaa.com', 'na'),
('howardlewis@jaa.com', 'ga'),
('clintguthrie@jaa.com', 'gm_pa'),
('sydneywedderburn@jaa.com', 'gm_pa'),
('kamilahanderson@jaa.com', 'na'),
('coneilanderson@jaa.com', 'na'),
('lundie@jaa.com', 'na'),
('Patricia@jaa.com', 'na'),
('kevin@jaa.com', 'na'),
('Trifina@jaa.com', 'na'),
('kimberly@jaa.com', 'na'),
('suan@jaa.com', 'na'),
('diego@jaa.com', 'na'),
('patricia@jaa.com', 'na');

-- --------------------------------------------------------

--
-- Table structure for table `dropoffs`
--

CREATE TABLE `dropoffs` (
  `Item` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dropoffs`
--

INSERT INTO `dropoffs` (`Item`) VALUES
('Portland'),
('Half Way Tree'),
('77 Smiles Avenue'),
('Holy Trinity High School- 18 George Headly Drive, Kgn 4'),
('34A Beverly Drive, Kingston 6'),
('University of the West Indies'),
('No Dropoff');

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `ItemName` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`ItemName`) VALUES
('System'),
('Principal'),
('Driver');

-- --------------------------------------------------------

--
-- Table structure for table `licenses`
--

CREATE TABLE `licenses` (
  `LicenseId` varchar(99) NOT NULL,
  `ItemName` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `licenses`
--

INSERT INTO `licenses` (`LicenseId`, `ItemName`) VALUES
('ga', 'General, Automatic'),
('gm', 'General, Manual'),
('pa', 'Private, Automatic'),
('pm', 'Private, Manual'),
('na', 'Not Applicable'),
('gm_pm', 'General, Manual & Private, Manual'),
('gm_pa', 'General, Manual & Private Automatic'),
('ga_pa', 'General, Automatic & Private, Automatic'),
('ga_pm', 'General, Automatic & Private, Manual');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `AdminEmail` varchar(99) NOT NULL,
  `DayOfWeek` varchar(99) NOT NULL,
  `DayOfMonth` varchar(99) NOT NULL,
  `Month` varchar(99) NOT NULL,
  `StudentEmail` varchar(99) NOT NULL,
  `Hour` varchar(99) NOT NULL,
  `IsMarkedRead` varchar(99) NOT NULL,
  `PickupLocation` varchar(400) NOT NULL,
  `DropOffLocation` varchar(200) NOT NULL,
  `StudentName` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`AdminEmail`, `DayOfWeek`, `DayOfMonth`, `Month`, `StudentEmail`, `Hour`, `IsMarkedRead`, `PickupLocation`, `DropOffLocation`, `StudentName`) VALUES
('clintguthrie@jaa.com', 'wed', '2', 'May', 'sheneil1876@gmail.com', '7_30am', '', 'Half Way Tree ', 'Portland', 'Sheneil Johnson'),
('howardlewis@jaa.com', 'tue', '2', 'January', 'smithdior4@gmail.com', '8_40am', '', 'Half Way Tree ', '77 Smiles Avenue', 'Imani Palmer'),
('clintguthrie@jaa.com', 'wed', '18', 'July', 'olyveabrady52@gmail.com ', '11_00am', '', 'Papine', 'Holy Trinity High School- 18 George Headly Drive, Kgn 4', 'Olivia Brady'),
('clintguthrie@jaa.com', 'mon', '5', 'February', 'lyssaunh@yahoo.com', '11_00am', '', 'Half Way Tree ', '77 Smiles Avenue', 'Lyssaun Howell'),
('clintguthrie@jaa.com', 'fri', '2', 'February', 'm.celservice.ja@gmail.com', '8_40am', '', 'Downtown ', 'University of the West Indies', 'Antoine McIntosh'),
('sydneywedderburn@jaa.com', 'thu', '1', 'February', 'kelwaugh7@gmail.com', '8_40am', '', 'Cross Roads ', '34A Beverly Drive, Kingston 6', 'Kellisa Waugh'),
('howardlewis@jaa.com', 'tue', '11', 'December', 'sheneil1876@gmail.com', '7_30am', '', 'Downtown ', '34A Beverly Drive, Kingston 6', 'Sheneil Johnson');

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `Item` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`Item`) VALUES
('Executive'),
('Non-Executive');

-- --------------------------------------------------------

--
-- Table structure for table `pickups`
--

CREATE TABLE `pickups` (
  `Item` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pickups`
--

INSERT INTO `pickups` (`Item`) VALUES
('Half Way Tree \r\n'),
('Cross Roads \r\n'),
('Downtown \r\n'),
('Constant Spring'),
('Papine'),
('No Pickup'),
('Holy Trinity High School- 18 George Headly Drive, Kgn 4'),
('34A Beverly Drive, Kingston 6'),
('University of the West Indies'),
('Bank of Jamaica');

-- --------------------------------------------------------

--
-- Table structure for table `restrictions_day_of_month`
--

CREATE TABLE `restrictions_day_of_month` (
  `AdminEmail` varchar(200) NOT NULL,
  `DayOfMonthAtRestriction` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restrictions_day_of_month`
--

INSERT INTO `restrictions_day_of_month` (`AdminEmail`, `DayOfMonthAtRestriction`) VALUES
('clintguthrie@jaa.com', 'none'),
('howardlewis@jaa.com', 'none'),
('sydneywedderburn@jaa.com', 'none');

-- --------------------------------------------------------

--
-- Table structure for table `restrictions_day_of_week`
--

CREATE TABLE `restrictions_day_of_week` (
  `AdminEmail` varchar(400) NOT NULL,
  `IsSundayRestricted` varchar(400) NOT NULL,
  `IsMondayRestricted` varchar(400) NOT NULL,
  `IsTuesdayRestricted` varchar(400) NOT NULL,
  `IsWednesdayRestricted` varchar(400) NOT NULL,
  `IsThursdayRestricted` varchar(400) NOT NULL,
  `IsFridayRestricted` varchar(400) NOT NULL,
  `IsSaturdayRestricted` varchar(400) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restrictions_day_of_week`
--

INSERT INTO `restrictions_day_of_week` (`AdminEmail`, `IsSundayRestricted`, `IsMondayRestricted`, `IsTuesdayRestricted`, `IsWednesdayRestricted`, `IsThursdayRestricted`, `IsFridayRestricted`, `IsSaturdayRestricted`) VALUES
('clintguthrie@jaa.com', 'yes', 'no', 'no', 'no', 'no', 'no', 'no'),
('howardlewis@jaa.com', 'no', 'yes', 'no', 'no', 'no', 'no', 'no'),
('sydneywedderburn@jaa.com', 'no', 'no', 'no', 'no', 'no', 'no', 'no');

-- --------------------------------------------------------

--
-- Table structure for table `restrictions_lunch_time`
--

CREATE TABLE `restrictions_lunch_time` (
  `AdminEmail` varchar(100) NOT NULL,
  `IsLunchAt_7_30am` varchar(100) NOT NULL,
  `IsLunchAt_8_40am` varchar(100) NOT NULL,
  `IsLunchAt_9_50am` varchar(100) NOT NULL,
  `IsLunchAt_11_00am` varchar(100) NOT NULL,
  `IsLunchAt_12_10pm` varchar(100) NOT NULL,
  `IsLunchAt_1_20pm` varchar(100) NOT NULL,
  `IsLunchAt_2_30pm` varchar(100) NOT NULL,
  `IsLunchAt_3_40pm` varchar(100) NOT NULL,
  `IsLunchAt_4_50pm` varchar(100) NOT NULL,
  `IsLunchAt_5_00pm` varchar(40) NOT NULL,
  `IsLunchAt_6_10pm` varchar(40) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restrictions_lunch_time`
--

INSERT INTO `restrictions_lunch_time` (`AdminEmail`, `IsLunchAt_7_30am`, `IsLunchAt_8_40am`, `IsLunchAt_9_50am`, `IsLunchAt_11_00am`, `IsLunchAt_12_10pm`, `IsLunchAt_1_20pm`, `IsLunchAt_2_30pm`, `IsLunchAt_3_40pm`, `IsLunchAt_4_50pm`, `IsLunchAt_5_00pm`, `IsLunchAt_6_10pm`) VALUES
('clintguthrie@jaa.com', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'yes'),
('sydneywedderburn@jaa.com\r\n', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'),
('howardlewis@jaa.com', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no');

-- --------------------------------------------------------

--
-- Table structure for table `slots`
--

CREATE TABLE `slots` (
  `AdminEmail` varchar(99) NOT NULL,
  `DayOfMonth` varchar(20) NOT NULL,
  `Month` varchar(20) NOT NULL,
  `DayOfWeek` varchar(99) NOT NULL,
  `Hour` varchar(20) NOT NULL,
  `StudentEmail` varchar(400) NOT NULL,
  `PickupLocation` varchar(999) NOT NULL,
  `PickupTime` varchar(200) NOT NULL,
  `DropOffLocation` varchar(200) NOT NULL,
  `StudentName` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `slots`
--

INSERT INTO `slots` (`AdminEmail`, `DayOfMonth`, `Month`, `DayOfWeek`, `Hour`, `StudentEmail`, `PickupLocation`, `PickupTime`, `DropOffLocation`, `StudentName`) VALUES
('clintguthrie@jaa.com', '2', 'May', 'wed', '7_30am', 'sheneil1876@gmail.com', 'Half Way Tree ', '', 'Portland', 'Sheneil Johnson'),
('howardlewis@jaa.com', '2', 'January', 'tue', '8_40am', 'smithdior4@gmail.com', 'Half Way Tree ', '8 : 10 am', '77 Smiles Avenue', 'Imani Palmer'),
('clintguthrie@jaa.com', '18', 'July', 'wed', '11_00am', 'olyveabrady52@gmail.com ', 'Papine', '10 : 30 am', 'Holy Trinity High School- 18 George Headly Drive, Kgn 4', 'Olivia Brady'),
('clintguthrie@jaa.com', '5', 'February', 'mon', '11_00am', 'lyssaunh@yahoo.com', 'Half Way Tree ', '', '77 Smiles Avenue', 'Lyssaun Howell'),
('clintguthrie@jaa.com', '2', 'February', 'fri', '8_40am', 'm.celservice.ja@gmail.com', 'Downtown ', '8 : 10 am', 'University of the West Indies', 'Antoine McIntosh'),
('sydneywedderburn@jaa.com', '1', 'February', 'thu', '8_40am', 'kelwaugh7@gmail.com', 'Cross Roads ', '', '34A Beverly Drive, Kingston 6', 'Kellisa Waugh'),
('howardlewis@jaa.com', '11', 'December', 'tue', '7_30am', 'sheneil1876@gmail.com', 'Downtown ', '', '34A Beverly Drive, Kingston 6', 'Sheneil Johnson');

-- --------------------------------------------------------

--
-- Table structure for table `slots_formats_day_labels`
--

CREATE TABLE `slots_formats_day_labels` (
  `Item` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `slots_formats_day_labels`
--

INSERT INTO `slots_formats_day_labels` (`Item`) VALUES
('fri'),
('mon'),
('sat'),
('sun'),
('thu'),
('tue'),
('wed');

-- --------------------------------------------------------

--
-- Table structure for table `slots_formats_hour_labels`
--

CREATE TABLE `slots_formats_hour_labels` (
  `Item` varchar(20) NOT NULL,
  `OrderId` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `slots_formats_hour_labels`
--

INSERT INTO `slots_formats_hour_labels` (`Item`, `OrderId`) VALUES
('11_00am', 3),
('12_10pm', 4),
('1_20pm', 5),
('2_30pm', 6),
('3_40pm', 7),
('4_50pm', 8),
('7_30am', 0),
('8_40am', 1),
('9_50am', 2);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `StudentEmail` varchar(99) NOT NULL,
  `StudentEmail2` varchar(200) NOT NULL,
  `AdminEmail` varchar(99) NOT NULL,
  `StudentPassword` varchar(99) NOT NULL,
  `StudentName` varchar(99) NOT NULL,
  `StudentAge` varchar(99) NOT NULL,
  `StudentPhone` varchar(99) NOT NULL,
  `StudentPhone2` varchar(200) NOT NULL,
  `StudentTargetLicense` varchar(99) NOT NULL,
  `StudentPickupLocation` varchar(99) NOT NULL,
  `StudentPickupLocation_Comment` varchar(999) NOT NULL,
  `StudentDropOffLocation` varchar(99) NOT NULL,
  `StudentDropOffLocation_Comment` varchar(200) NOT NULL,
  `Trn` varchar(999) NOT NULL,
  `IsFirstLogin` varchar(99) NOT NULL,
  `StudentProfilePictureStream` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`StudentEmail`, `StudentEmail2`, `AdminEmail`, `StudentPassword`, `StudentName`, `StudentAge`, `StudentPhone`, `StudentPhone2`, `StudentTargetLicense`, `StudentPickupLocation`, `StudentPickupLocation_Comment`, `StudentDropOffLocation`, `StudentDropOffLocation_Comment`, `Trn`, `IsFirstLogin`, `StudentProfilePictureStream`) VALUES
('altheatownsend10@gmail.com', '', '', '', 'Althea Townsend', '', '3857120', '9776489', '', 'No Pickup', '', 'No Dropoff', '', '108450201', '', ''),
('domoniquebarnett7@gmail.com', '', '', '', 'Domonique Barnett', '', '4196734', '', '', 'Bank of Jamaica', '', 'Half Way Tree', '', '125441045', '', ''),
('ethelcarpenter25@gmail.com', '', '', '', 'Ethel Carpenter-Johnson', '', '2799015', '', '', 'Holy Trinity High School- 18 George Headly Drive, Kgn 4', '', 'Holy Trinity High School- 18 George Headly Drive, Kgn 4', '', '104415746', '', ''),
('hall.santina@yahoo.com', '', '', '', 'Santina Hall', '', '5412512', '', '', 'No Pickup', '', 'NO DROP OFF', '', '122978150', '', ''),
('jason_colesmith@hotmail.com', '', '', '', 'Jason-Cole Smith', '', '4916672', '', '', 'No Pickup', '', '77 Smiles Avenue', 'No Drop Off', '124922775', '', ''),
('jermaine.matheson11@gmail.com', '', '', '', 'Jermaine Matheson', '', '3916624', '', '', 'No Pickup', '', 'NO DROP OFF', '', '115694315', '', ''),
('kelwaugh7@gmail.com', '', '', '', 'Kellisa Waugh', '', '4302843', '', '', 'University of the West Indies', '', 'University of the West Indies', '', '129374334', '', ''),
('lyssaunh@yahoo.com', '', '', '', 'Lyssaun Howell', '', '3569262', '', '', 'No Pickup', '', 'No Dropoff', '', '129727440', '', ''),
('m.celservice.ja@gmail.com', '', '', '', 'Antoine McIntosh', '', '8315840', '', '', 'No Pickup', '', 'NO DROP OFF', '', '125398867', '', ''),
('mish.rhoomes@gmail.com', '', '', '', 'Mishka Rhoomes', '', '3708026', '', '', 'No Pickup', '', 'NO DROP OFF', '', '125322224', '', ''),
('misspinnock@hotmail.com', '', '', '', 'Kimoy Pinnock', '', '4681410', '', '', 'No Pickup', '', 'NO DROP OFF', '', '120523752', '', ''),
('nchristie451@gmail.com', '', '', '', 'Nicardo Christie', '', '5787101', '3053300', '', 'No Pickup', '', 'NO DROP OFF', '', '117103144', '', ''),
('neesadoc@gmail.com', 'simdoc@hotmail.com', '', '', 'Neesa Dacosta', '', '2900070', '3513407', '', 'No Pickup', '', 'NO DROP OFF', '', '130674451', '', ''),
('nikki_williams@live.com', '', '', '', 'Nikki Williams', '', '3639556', '', '', 'No Pickup', '', 'NO DROP OFF', '', '119120544', '', ''),
('olyveabrady52@gmail.com ', '', '', '', 'Olivia Brady', '', '7905647', '9069311', '', 'No Pickup', '', 'NO DROP OFF', '', '122178335', '', ''),
('shavfab@yahoo.com', '', '', '', 'Shavina Lennon', '', '4727295', '', '', 'No Pickup', '', 'NO DROP OFF', '', '121900436', '', ''),
('sheneil1876@gmail.com', '', '', '', 'Sheneil Johnson', '', '3912624', '', '', 'No Pickup', '', 'NO DROP OFF', '', '122047869', '', ''),
('smithdior4@gmail.com', '', '', '', 'Imani Palmer', '', '7733722', '', '', 'No Pickup', '', 'NO DROP OFF', '', '126432465', '', ''),
('smithroslyn15@gmail.com', '', '', '', 'Roslyn Smith', '', '4591546', '', '', '34A Beverly Drive, Kingston 6', '', '34A Beverly Drive, Kingston 6', '', '119402785', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`AdminEmail`);

--
-- Indexes for table `restrictions_day_of_week`
--
ALTER TABLE `restrictions_day_of_week`
  ADD PRIMARY KEY (`AdminEmail`);

--
-- Indexes for table `restrictions_lunch_time`
--
ALTER TABLE `restrictions_lunch_time`
  ADD PRIMARY KEY (`AdminEmail`);

--
-- Indexes for table `slots_formats_day_labels`
--
ALTER TABLE `slots_formats_day_labels`
  ADD PRIMARY KEY (`Item`);

--
-- Indexes for table `slots_formats_hour_labels`
--
ALTER TABLE `slots_formats_hour_labels`
  ADD PRIMARY KEY (`Item`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`StudentEmail`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
