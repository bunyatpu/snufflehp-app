-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Sep 23, 2018 at 03:24 PM
-- Server version: 5.6.40
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `snufflehp`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `author` varchar(200) NOT NULL,
  `description` varchar(255) NOT NULL,
  `cover_path` varchar(250) NOT NULL,
  `price` float(11,4) NOT NULL,
  `amount` float(11,4) NOT NULL,
  `status_sale` varchar(50) NOT NULL,
  `status` tinyint(2) NOT NULL,
  `create_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `name`, `author`, `description`, `cover_path`, `price`, `amount`, `status_sale`, `status`, `create_date`) VALUES
(1, 1, 'แด่...รัก', 'snufflehp', '\'น้ำตานี้ แด่...รัก \'ที่จากไป\' แต่ \'รอยยิ้มนี้ แด่...หัวใจที่ได้คืนกลับมา\'', 'sd1.jpg', 400.0000, 5.0000, 'preorder', 1, '2018-09-22 00:00:00'),
(2, 1, 'มาโปรด', 'snufflehp', 'ชีวิตคู่สำหรับผม คือการที่ \'เรา\' สองคนได้ก้าวเดินไปพร้อม ๆ กัน ได้ร่วมทุกข์ ร่วมสุข เป็นคู่คิด..และคู่ชีวิตของกันและกัน', 'sd1.jpg', 500.0000, 6.0000, 'sale', 1, '2018-09-22 00:00:00'),
(3, 1, 'มาโปรด2', 'snufflehp', 'ชีวิตคู่สำหรับผม คือการที่ \'เรา\' สองคนได้ก้าวเดินไปพร้อม ๆ กัน ได้ร่วมทุกข์ ร่วมสุข เป็นคู่คิด..และคู่ชีวิตของกันและกัน', 'sd1.jpg', 500.0000, 6.0000, 'sale', 1, '2018-09-22 00:00:00'),
(4, 1, 'มาโปรด 3', 'snufflehp', 'ชีวิตคู่สำหรับผม คือการที่ \'เรา\' สองคนได้ก้าวเดินไปพร้อม ๆ กัน ได้ร่วมทุกข์ ร่วมสุข เป็นคู่คิด..และคู่ชีวิตของกันและกัน', 'sd1.jpg', 500.0000, 6.0000, 'sale', 1, '2018-09-22 00:00:00'),
(5, 1, 'มาโปรด 4', 'snufflehp', 'ชีวิตคู่สำหรับผม คือการที่ \'เรา\' สองคนได้ก้าวเดินไปพร้อม ๆ กัน ได้ร่วมทุกข์ ร่วมสุข เป็นคู่คิด..และคู่ชีวิตของกันและกัน', 'sd1.jpg', 500.0000, 6.0000, 'sale', 1, '2018-09-22 00:00:00'),
(6, 1, 'มาโปรด 5', 'snufflehp', 'ชีวิตคู่สำหรับผม คือการที่ \'เรา\' สองคนได้ก้าวเดินไปพร้อม ๆ กัน ได้ร่วมทุกข์ ร่วมสุข เป็นคู่คิด..และคู่ชีวิตของกันและกัน', 'sd1.jpg', 500.0000, 6.0000, 'sale', 1, '2018-09-22 00:00:00'),
(7, 2, 'ถุงผ้า มาโปรด', 'snufflehp', 'หลายสี', 'sd1.jpg', 30.0000, 6.0000, 'sale', 1, '2018-09-22 00:00:00'),
(8, 2, 'สแตนดี้', 'snufflehp', 'ชีวิตคู่สำหรับผม คือการที่ \'เรา\' สองคนได้ก้าวเดินไปพร้อม ๆ กัน ได้ร่วมทุกข์ ร่วมสุข เป็นคู่คิด..และคู่ชีวิตของกันและกัน', 'sd1.jpg', 500.0000, 6.0000, 'sale', 1, '2018-09-22 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `product_detail`
--

CREATE TABLE `product_detail` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `detail` text NOT NULL,
  `status` tinyint(2) NOT NULL,
  `create_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_detail`
--

INSERT INTO `product_detail` (`id`, `product_id`, `detail`, `status`, `create_date`) VALUES
(1, 2, 'ชีวิตคู่สำหรับผม คือการที่ \'เรา\' สองคนได้ก้าวเดินไปพร้อม ๆ กัน ได้ร่วมทุกข์ ร่วมสุข เป็นคู่คิด..และคู่ชีวิตของกันและกัน', 1, '0000-00-00 00:00:00'),
(2, 1, 'ชีวิตคู่สำหรับผม คือการที่ \'เรา\' สองคนได้ก้าวเดินไปพร้อม ๆ กัน ได้ร่วมทุกข์ ร่วมสุข เป็นคู่คิด..และคู่ชีวิตของกันและกัน', 1, '0000-00-00 00:00:00'),
(3, 3, 'ชีวิตคู่สำหรับผม คือการที่ \'เรา\' สองคนได้ก้าวเดินไปพร้อม ๆ กัน ได้ร่วมทุกข์ ร่วมสุข เป็นคู่คิด..และคู่ชีวิตของกันและกัน', 1, '0000-00-00 00:00:00'),
(4, 4, 'ชีวิตคู่สำหรับผม คือการที่ \'เรา\' สองคนได้ก้าวเดินไปพร้อม ๆ กัน ได้ร่วมทุกข์ ร่วมสุข เป็นคู่คิด..และคู่ชีวิตของกันและกัน', 1, '0000-00-00 00:00:00'),
(5, 5, 'ชีวิตคู่สำหรับผม คือการที่ \'เรา\' สองคนได้ก้าวเดินไปพร้อม ๆ กัน ได้ร่วมทุกข์ ร่วมสุข เป็นคู่คิด..และคู่ชีวิตของกันและกัน', 1, '0000-00-00 00:00:00'),
(6, 6, 'ชีวิตคู่สำหรับผม คือการที่ \'เรา\' สองคนได้ก้าวเดินไปพร้อม ๆ กัน ได้ร่วมทุกข์ ร่วมสุข เป็นคู่คิด..และคู่ชีวิตของกันและกัน', 1, '0000-00-00 00:00:00'),
(7, 7, 'ชีวิตคู่สำหรับผม คือการที่ \'เรา\' สองคนได้ก้าวเดินไปพร้อม ๆ กัน ได้ร่วมทุกข์ ร่วมสุข เป็นคู่คิด..และคู่ชีวิตของกันและกัน', 1, '0000-00-00 00:00:00'),
(8, 8, 'ชีวิตคู่สำหรับผม คือการที่ \'เรา\' สองคนได้ก้าวเดินไปพร้อม ๆ กัน ได้ร่วมทุกข์ ร่วมสุข เป็นคู่คิด..และคู่ชีวิตของกันและกัน', 1, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(200) NOT NULL,
  `regis_date` datetime NOT NULL,
  `status` tinyint(2) NOT NULL,
  `verify_email` tinyint(4) NOT NULL,
  `tel` varchar(50) NOT NULL,
  `avatar_path` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `regis_date`, `status`, `verify_email`, `tel`, `avatar_path`) VALUES
(13, 'Golf2', '$2a$08$Ov0/l6i2ZopqWmbuG.MfcOpTJDVj8FlwTX2XiNGPB8Xq6ndFUGG8G', 'bunyut2.p@gmail.com', '2018-08-13 03:54:31', 0, 0, '', ''),
(14, 'Golf2', '$2a$08$WRDu.exRpobmAOdF7IcF/.qspGQXGPAQD.EovuQZhv1YOVbCrixvq', 'bunyut.p2@gmail.com', '2018-08-13 05:56:41', 0, 0, '', ''),
(15, 'Golf2', '$2a$08$J1yop4woXbtUx9VDP3XzAe4wz9w90A5CqIZg.lazjM2X7R.rVlam6', 'bunyut.p3@gmail.com', '2018-08-13 05:57:38', 0, 0, '', ''),
(16, 'Golf4', '$2a$08$al5HmTBkG0PVni.n6srk9eNJ1gKeeA8.RSM282ZhC1JdrJSMledz.', 'bunyut.p7@gmail.com', '2018-08-13 06:08:07', 0, 0, '', ''),
(17, 'Golf5', '$2a$08$Ek13yNq0FP7iVwTp0Vm4S.u93FSci042F0jufBFrUuUiug6Q3PIHy', 'bunyut.p8@gmail.com', '2018-08-13 06:20:09', 0, 0, '', ''),
(18, 'Golf22', '$2a$08$5VG1H/ailLts0XdPC4z5UO9742dtuL/vPSteSRbtXod6gd6FcCEeG', 'bunyut.p22@gmail.com', '2018-08-13 06:54:19', 0, 0, '', ''),
(19, 'Golf44', '$2a$08$/Jn27OgBCzH/zOz9qokA9er0E99Vm9KB6V0xjBZxF8MH/J2wYSNCu', 'bunyut.p44@gmail.com', '2018-08-13 06:57:58', 0, 0, '', ''),
(20, 'Golf23', '$2a$08$mV0Cm3Nb7l/eEp8q7vJ5sOjiF7vb4I7TWufGaTmbiyRt9gxcgyPyq', 'bunyut.p23@gmail.com', '2018-08-13 07:00:06', 0, 0, '', ''),
(21, 'Golf66', '$2a$08$JdU3oxobRTxmdir424BTTe6OgXr2tB4nRDEPNXn0vIJjQWNxHhc.u', 'bunyut.p66@gmail.com', '2018-08-13 07:02:53', 0, 0, '', ''),
(22, 'Golf8656667', '$2a$08$vo036jA868yckEniiW3NWut8Api5z2/8nfuTo.g9I8BHIgDQrM8ua', 'bunyut.p@gmail.com', '2018-09-14 22:18:31', 0, 0, '0984445783', 'avatar-1537551017359-22.jpg'),
(23, 'ggg', '$2a$08$gHCjoKfGI6onVp2Af0SoKeLeuvD3wFxsT94ZTJn4MOzh1lF5Lpb/K', 'bunyut.p5@gmail.com', '2018-09-14 22:21:16', 0, 0, '', ''),
(24, 'ggg2', '$2a$08$ZS9emoeHn1vCzWdO/IGxCuh8nJOi25Bs34YtEOdoFZDzM100Ux7Wy', 'bunyut.p6@gmail.com', '2018-09-15 00:31:41', 0, 0, '', ''),
(25, 'ggg22', '$2a$08$Wl1gu1ppMHNRcH0WIjl16e/2ZuNl6kuT4WchJZDXyTHYKwvmQBwzG', 'bunyut.p82@gmail.com', '2018-09-15 00:38:03', 0, 0, '', ''),
(26, 'gg2', '$2a$08$JjxLMSfQ31zMWWRrGReoqek5RC9pXtRNdKFKkAGVw3rJNpuZ.FmVe', 'bunyut.p12@gmail.com', '2018-09-15 01:39:53', 0, 0, '', ''),
(27, 'ggg45', '$2a$08$HXaUSP/ausuE2dD8OuIynehYJZpRgwQa3D33XnGwwK8bhOJbmV7LC', 'bunyut.p45@gmail.com', '2018-09-15 01:48:17', 0, 0, '', ''),
(28, 'Golf aa', '$2a$08$oiTfS8srkQhf4tCtQWuB5eCzaSSfRhNUjWsnmGtN5ulnZM0UjvTYy', 'bunyut.p13@gmail.com', '2018-09-16 10:24:09', 0, 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user_address`
--

CREATE TABLE `user_address` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `addr` varchar(200) NOT NULL,
  `sub_district` varchar(200) NOT NULL,
  `district` varchar(200) NOT NULL,
  `province` varchar(200) NOT NULL,
  `postcode` varchar(50) NOT NULL,
  `status` tinyint(2) NOT NULL,
  `create_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_address`
--

INSERT INTO `user_address` (`id`, `user_id`, `addr`, `sub_district`, `district`, `province`, `postcode`, `status`, `create_date`) VALUES
(1, 223, '5/4 ถนน พุทธมณฑล สาย 2', 'แม่อิง', 'ภูกามยาว', 'พะเยา', '56000', 0, '0000-00-00 00:00:00'),
(2, 0, '5/4 ถนน พุทธมณฑล สาย 2', 'ดอยลาน', 'เมืองเชียงราย', 'เชียงราย', '57000', 0, '0000-00-00 00:00:00'),
(3, 22, '5/4 ถนน พุทธมณฑล สาย 5', 'ห้วยชมภู', 'เมืองเชียงราย', 'เชียงราย', '57000', 0, '2018-09-20 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `product_detail`
--
ALTER TABLE `product_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_id` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_address`
--
ALTER TABLE `user_address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `product_detail`
--
ALTER TABLE `product_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `user_address`
--
ALTER TABLE `user_address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
