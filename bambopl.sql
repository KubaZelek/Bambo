-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 15, 2023 at 03:39 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bambopl`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `auctions`
--

CREATE TABLE `auctions` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `photo` varchar(150) NOT NULL,
  `price` double(5,2) NOT NULL,
  `description` text DEFAULT NULL,
  `sold_by` varchar(120) NOT NULL,
  `users_id` int(11) NOT NULL,
  `promotion` enum('0','1') NOT NULL,
  `au_created` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11),
  `username` varchar(120) NULL,
  `password` varchar(255) NULL,
  `email` varchar(150) NULL,
  `age` INT NULL,
  `ac_created` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `company_name` varchar(120) DEFAULT NULL,
  `NIP` int(10) DEFAULT NULL,
  `company_account` tinyint(1) NOT NULL
  `company_name` varchar(120) DEFAULT NULL,
  `NIP` int(10) DEFAULT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `auctions`
--
ALTER TABLE `auctions`
  ADD PRIMARY KEY (`id`),

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auctions`
--
ALTER TABLE `auctions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
