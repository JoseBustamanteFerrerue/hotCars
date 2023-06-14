-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-06-2023 a las 21:15:03
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hotcars`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `carName` int(11) NOT NULL,
  `anyo` int(11) NOT NULL,
  `km` int(11) NOT NULL,
  `stateCar` varchar(30) NOT NULL,
  `price` double NOT NULL,
  `combustible` varchar(60) NOT NULL,
  `caja_de_cambios` varchar(60) NOT NULL,
  `distintivo_ambiental` varchar(60) NOT NULL,
  `peso` double NOT NULL,
  `deposito` int(11) NOT NULL,
  `maletero` int(11) NOT NULL,
  `medida_ancho` double NOT NULL,
  `medida_altura` double NOT NULL,
  `medida_largo` double NOT NULL,
  `carroceria` varchar(255) NOT NULL,
  `num_plazas` int(11) NOT NULL,
  `bastidor` varchar(40) NOT NULL,
  `matricula` varchar(40) NOT NULL,
  `extras` varchar(255) NOT NULL,
  `estadoReserva` int(11) NOT NULL,
  `idConcesionario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cars`
--

INSERT INTO `cars` (`id`, `carName`, `anyo`, `km`, `stateCar`, `price`, `combustible`, `caja_de_cambios`, `distintivo_ambiental`, `peso`, `deposito`, `maletero`, `medida_ancho`, `medida_altura`, `medida_largo`, `carroceria`, `num_plazas`, `bastidor`, `matricula`, `extras`, `estadoReserva`, `idConcesionario`) VALUES
(66, 111, 2010, 100000, 'Buen estado', 6000, 'Gasolina', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, 'VSSZZZ6JZ8R115426', '3456JHD', 'Climatizador, control de velocidad', 0, 1),
(67, 112, 2015, 80000, 'Muy buen estado', 10000, 'Diésel', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.7, 1.8, 4.5, 'Berlina', 5, 'WVWZZZ1KZDW135096', '2345RTD', 'Asientos de cuero, navegador', 0, 1),
(69, 114, 2018, 50000, 'Perfecto estado', 15000, 'Diésel', 'Automático', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, 'JTNBZ29J005055978', '6457JMN', 'Navegador, asientos calefactables', 0, 1),
(72, 117, 2014, 100000, 'Buen estado', 7000, 'Gasolina', 'Manual', 'Sin etiqueta', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, 'VF3YBRFSC9J511644', '2457MKL', 'Aire acondicionado, elevalunas eléctricos', 0, 1),
(73, 118, 2017, 60000, 'Perfecto estado', 12000, 'Diésel', 'Automático', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'SUV', 5, 'WDDGF8AB1EA981365', '3456NGB', 'Asientos de cuero, navegador, techo solar', 0, 1),
(75, 121, 2017, 50000, 'Buen estado', 13500, 'Gasolina', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, 'WDD1760431J510259', '2058 HMD', 'Asientos de cuero', 0, 1),
(76, 122, 2018, 40000, 'Perfecto estado', 20000, 'Gasolina', 'Automático', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Cabrio', 4, 'WDDPK3JA1GF119106', '2589 JNR', 'Asientos calefactables', 0, 1),
(77, 123, 2016, 80000, 'Buen estado', 9500, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, 'VF1BZRJ0F28428460', '1812 DTP', 'Navegador GPS', 0, 1),
(78, 124, 2018, 30000, 'Perfecto estado', 22000, 'Gasolina', 'Automático', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, 'WBA2J310X0J367162', '5432 JKM', 'Asientos deportivos', 1, 1),
(79, 125, 2017, 60000, 'Buen estado', 12500, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, 'WBA1F31090VX51276', '1890 FKH', 'Techo solar', 0, 1),
(80, 126, 2019, 20000, 'Perfecto estado', 25000, 'Gasolina', 'Automático', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'SUV', 5, 'SALVA2AN4EH900562', '2564 JMF', 'Sistema de sonido BOSE', 0, 1),
(81, 127, 2016, 80000, 'Buen estado', 9500, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Familiar', 5, 'VF1GJEJ0A53305194', '2995 FHT', 'Control de crucero', 0, 1),
(82, 128, 2018, 45000, 'Perfecto estado', 21000, 'Gasolina', 'Automático', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, 'WBA2G51040V259997', '8745 KJR', 'Asientos eléctricos', 0, 1),
(83, 129, 2017, 55000, 'Buen estado', 13000, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'SUV', 5, 'WDC1569121J323219', '4219 HLP', 'Techo panorámico', 0, 1),
(84, 130, 2018, 35000, 'Perfecto estado', 22000, 'Gasolina', 'Automático', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Coupé', 4, 'WDD2053751F585090', '3658 HDM', 'Faros LED', 0, 1),
(85, 131, 2016, 50000, 'Buen estado', 15000, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, '1HGBH41JXMN109186', '3412-BCF', 'Asientos de cuero, techo solar', 0, 1),
(86, 132, 2015, 55000, 'Buen estado', 15500, 'Gasolina', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, '3D7JB1EK9AG139938', '5392-DKR', 'Navegador, asientos calefactables', 0, 1),
(87, 133, 2013, 70000, 'Buen estado', 12500, 'Diésel', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Familiar', 5, '1HGCM56768A149843', '4625-JVN', 'Faros de xenón, climatizador bizona', 0, 1),
(88, 134, 2017, 45000, 'Perfecto estado', 20500, 'Gasolina', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Coupé', 4, '3D7KS29C68G238740', '6957-FGB', 'Sistema de sonido Bose, cámara de visión trasera', 0, 1),
(89, 135, 2018, 40000, 'Buen estado', 17000, 'Diésel', 'Automático', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'SUV', 5, '3D7JB1EP9BG162834', '2712-HDF', 'Navegador, asientos calefactables', 0, 1),
(90, 136, 2017, 50000, 'Buen estado', 16000, 'Gasolina', 'Automático', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Monovolumen', 7, '2FMDK3GC4EB221759', '8234-FVB', 'Sistema de sonido Harman Kardon, techo panorámico', 0, 1),
(91, 137, 2015, 60000, 'Buen estado', 12000, 'Diésel', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, '1GCHK29U14E104467', '9834-JNR', 'Climatizador bizona, sensor de lluvia', 0, 1),
(92, 138, 2016, 55000, 'Buen estado', 16500, 'Gasolina', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Cabrio', 4, '3D7KS28D05G852311', '7649-JKN', 'Asientos de cuero, sistema de sonido Bose', 0, 1),
(93, 139, 2017, 40000, 'Perfecto estado', 22000, 'Gasolina', 'Automático', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Coupé', 4, '1C6RD7KT9CS257112', '9435-HNB', 'Navegador, sistema de sonido Burmester', 0, 1),
(94, 141, 2018, 40000, 'Buen estado', 13900, 'Gasolina', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, '1M8GDM9AXKP042788', '8374 AEM', 'Cámara trasera, Navegador, Sensor de aparcamiento', 0, 1),
(95, 142, 2017, 60000, 'Buen estado', 12900, 'Gasolina', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, '1GYS3HEF7BR256971', '4192 ZVJ', 'Asientos calefactables, Sensores de luz y lluvia', 0, 1),
(96, 143, 2019, 35000, 'Perfecto estado', 18900, 'Gasolina', 'Automático', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'SUV', 5, '1GNKVGKD9GJ109862', '1490 MZM', 'Techo panorámico, Asientos de cuero, Cámara trasera', 0, 1),
(98, 145, 2020, 25000, 'Perfecto estado', 24900, 'Gasolina', 'Automático', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Coupé', 4, '1FMJU1JTXFEF21684', '3225 YXJ', 'Asientos deportivos, Luces LED, Control de crucero adaptativo', 0, 1),
(99, 146, 2016, 80000, 'Buen estado', 10900, 'Diésel', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, '1GNKVGKDXFJ179347', '1169 JFN', 'Sensor de aparcamiento, Cámara trasera, Bluetooth', 0, 1),
(100, 147, 2017, 55000, 'Buen estado', 12900, 'Gasolina', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Cabrio', 2, '1G1FB3DS8H0106525', '3265 VTV', 'Asientos deportivos, Navegador, Luces LED', 0, 1),
(101, 148, 2018, 42000, 'Buen estado', 13900, 'Gasolina', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, '1GNEK13R4XJ431785', '2714 FHN', 'Asientos calefactables, Sensores de aparcamiento, Techo solar', 0, 1),
(102, 149, 2019, 30000, 'Perfecto estado', 19900, 'Gasolina', 'Automático', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, '1G1PC5SB6F7272447', '9049 GWP', 'Asientos de cuero, Cámara trasera, Navegador', 0, 1),
(103, 151, 2018, 35000, 'buen estado', 17500, 'Diésel', 'manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Familiar', 5, 'JTHBW1GG202045505', '4444 BCB', 'Asientos de cuero', 0, 1),
(104, 152, 2020, 20000, 'perfecto estado', 24500, 'Gasolina', 'Automático', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, 'WVWZZZ1KZAP139745', '3333 DDE', 'Navegador GPS', 0, 1),
(105, 153, 2016, 80000, 'buen estado', 11500, 'Diésel', 'manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Monovolumen', 7, 'WVWZZZ1KZAP139741', '5555 EEF', 'Asientos calefactables', 0, 1),
(106, 154, 2017, 50000, 'buen estado', 15500, 'Gasolina', 'manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, 'WVWZZZ1KZAP139756', '6666 FFG', 'Camara trasera', 0, 1),
(107, 155, 2019, 35000, 'buen estado', 18500, 'Diésel', 'manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Familiar', 5, 'WAUZBZ1KZAP139756', '7777 GGH', 'Climatizador', 0, 1),
(108, 156, 2018, 45000, 'buen estado', 15900, 'Diésel', 'manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Familiar', 5, 'WAUZZZ3XZAP139756', '8888 HHI', 'Asientos deportivos', 0, 1),
(109, 157, 2016, 85000, 'buen estado', 11500, 'Diésel', 'manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Monovolumen', 7, 'VF7XZV1KZAP139726', '9999 III', 'Techo panoramico', 0, 1),
(110, 158, 2017, 65000, 'buen estado', 15500, 'Gasolina', 'manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, 'VSKLÑZZZ1KZAP1397', '1010 JJK', 'Bluetooth', 0, 1),
(111, 159, 2019, 38000, 'buen estado', 18500, 'Diésel', 'manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Familiar', 5, 'WAUZZZ1KZAP135421', '1111 KKL', 'Llantas de aleacion', 0, 1),
(112, 160, 2018, 55000, 'buen estado', 15900, 'Diésel', 'manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Familiar', 5, 'WAUZ7Z1XZCP139756', '1212 LLM', 'Faros de xenon', 0, 1),
(113, 161, 2016, 90000, 'buen estado', 11500, 'Diésel', 'manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Monovolumen', 7, 'VF7ZLZ1KZAP1297X6', '1313 MMM', 'Sensores de aparcamiento', 0, 1),
(114, 162, 2017, 70000, 'buen estado', 15500, 'Gasolina', 'manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, 'VSKZZZ1KZAB139758', '1414 NNN', 'Volante multifuncion', 0, 1),
(115, 164, 2013, 90000, 'Buen estado', 12000, 'Gasolina', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'SUV', 5, '1HGCM56347A123456', '7596 QFG', 'Asientos de cuero', 0, 1),
(116, 165, 2016, 60000, 'Buen estado', 14500, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, '1HGCM56347A123457', '5408 WBB', 'Cámara de aparcamiento', 0, 1),
(117, 166, 2017, 45000, 'Buen estado', 17000, 'Gasolina', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, '1HGCM56347A123458', '7812 KLB', 'Asientos calefactables', 0, 1),
(118, 167, 2015, 80000, 'Buen estado', 13500, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'SUV', 5, '1HGCM56347A123459', '3169 SMM', 'Climatizador bizona', 0, 1),
(119, 168, 2018, 35000, 'Perfecto estado', 23000, 'Gasolina', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, '1HGCM56347A123460', '8923 PTH', 'Tapicería de piel', 0, 1),
(120, 169, 2016, 70000, 'Buen estado', 13500, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, '1HGCM56347A123461', '3045 JPS', 'Volante multifunción', 0, 1),
(121, 170, 2015, 90000, 'Buen estado', 12500, 'Gasolina', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, '1HGCM56347A123462', '1382 YMR', 'Bluetooth', 0, 1),
(122, 171, 2016, 75000, 'Buen estado', 14500, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'SUV', 5, '1HGCM56347A123463', '1462 KLS', 'Llantas de aleación', 0, 1),
(123, 172, 2014, 95000, 'Buen estado', 9900, 'Gasolina', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, '1HGCM56347A123464', '6810 TGL', 'Pintura metalizada', 0, 1),
(124, 173, 2017, 55000, 'Buen estado', 15500, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, '1HGCM56347A123465', '9087 BVT', 'Sistema de sonido de alta fidelidad', 0, 1),
(125, 174, 2016, 65000, 'Buen estado', 14900, 'Gasolina', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'SUV', 5, '1HGCM56347A123466', '3689 BKS', 'Faros de xenón', 0, 1),
(126, 176, 2016, 63000, 'Buen estado', 20500, 'Gasolina', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'SUV', 5, 'YS3E4BJ44A0123456', '1111-BBB', 'Climatizador, Elevalunas eléctricos, Sensor de lluvia, Control de velo', 0, 1),
(127, 177, 2015, 59000, 'Buen estado', 18900, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Familiar', 5, 'YS3E4BJ44A0223456', '2222-CCC', 'Climatizador, Asientos calefactables, Llantas de aleación, Control de ', 0, 1),
(128, 178, 2015, 62000, 'Buen estado', 18800, 'Gasolina', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, 'YS3E4BJ44A0323456', '3333-DDD', 'Climatizador, Dirección asistida, Elevalunas eléctricos, Sensor de llu', 0, 1),
(129, 179, 2017, 55000, 'Buen estado', 21900, 'Gasolina', 'Automático', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Cabrio', 4, 'YS3E4BJ44A0423456', '4444-EEE', 'Tapicería de cuero, Navegador GPS, Sensor de aparcamiento, Bluetooth', 0, 1),
(130, 180, 2015, 67000, 'Buen estado', 18700, 'Gasolina', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, 'YS3E4BJ44A0523456', '5555-FFF', 'Climatizador, Elevalunas eléctricos, Control de estabilidad, Volante m', 0, 1),
(131, 181, 2018, 45000, 'Buen estado', 24700, 'Gasolina', 'Automático', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'SUV', 5, 'YS3E4BJ44A0623456', '6666-GGG', 'Asientos calefactables, Cámara trasera, Faros LED, Control de crucero ', 0, 1),
(132, 182, 2017, 58000, 'Buen estado', 21100, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Familiar', 5, 'YS3E4BJ44A0723456', '7777-HHH', 'Climatizador, Bluetooth, Llantas de aleación, Sensor de lluvia', 0, 1),
(133, 183, 2015, 72000, 'Buen estado', 16900, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Monovolumen', 7, 'YS3E4BJ44A0823456', '8888-III', 'Asientos calefactables, Sensor de aparcamiento, Control de tracción, C', 0, 1),
(134, 184, 2016, 65000, 'Buen estado', 19700, 'Gasolina', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, 'YS3E4BJ44A0923456', '9999-JJJ', 'Climatizador, Llantas de aleación, Volante multifunción, Control de es', 0, 1),
(135, 185, 2016, 93000, 'buen estado', 10500, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Compacto', 5, 'JMZKE2D84H0356154', '7349 GZZ', 'Cierre centralizado, Elevalunas eléctrico', 0, 1),
(136, 186, 2015, 74000, 'perfecto estado', 14900, 'Gasolina', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Berlina', 5, 'VF3XUHFXFJ3453686', '1286 DKB', 'Climatizador bizona, Llantas de aleación', 0, 1),
(137, 187, 2014, 86000, 'buen estado', 8990, 'Diésel', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'SUV', 5, 'WVWZZZ1KZAM693281', '3818 HBL', 'Control de crucero, Bluetooth', 0, 1),
(138, 188, 2016, 69000, 'muy buen estado', 17900, 'Gasolina', 'Manual', 'Etiqueta C', 1500, 50, 500, 1.8, 1.8, 4.5, 'Cabrio', 2, 'W0L0AHL0886010971', '9688 KNS', 'Asientos calefactados, Navegador', 0, 1),
(139, 189, 2013, 98000, 'buen estado', 11900, 'Gasolina', 'Manual', 'Etiqueta B', 1500, 50, 500, 1.8, 1.8, 4.5, 'Monovolumen', 7, 'WAUZZZ4LZBD100269', '8277 JNN', 'Techo panorámico, Sensores de aparcamiento', 0, 1),
(144, 144, 2009, 42344, 'Buen estado', 7800, 'Gasolina', 'Manual', 'Etiqueta B', 1300, 50, 500, 1.9, 2, 4.6, 'Compacto', 5, 'FASAFADSFATRVVVGH', '0295HLX', 'fsdfsdfsdf', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coches_tasados`
--

CREATE TABLE `coches_tasados` (
  `id` int(11) NOT NULL,
  `idMark` int(11) NOT NULL,
  `idProvincia` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `primer_apellido` varchar(80) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `anyo` int(11) NOT NULL,
  `km` int(11) NOT NULL,
  `matricula` varchar(10) NOT NULL,
  `estadoCoche` varchar(30) NOT NULL,
  `valor_tasado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `coches_tasados`
--

INSERT INTO `coches_tasados` (`id`, `idMark`, `idProvincia`, `email`, `telefono`, `name`, `primer_apellido`, `fecha_nacimiento`, `anyo`, `km`, `matricula`, `estadoCoche`, `valor_tasado`) VALUES
(4, 112, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-29', 2022, 45345, '0295HLJ', 'Bien', 0),
(7, 134, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-09', 2022, 53453, '0295HLJ', 'Perfecto', 0),
(8, 134, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-09', 2022, 53453, '0295HLJ', 'Perfecto', 0),
(9, 126, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-16', 2022, 4234, '0295HLJ', 'Regular', 0),
(11, 171, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-23', 2022, 5435, '0295HLJ', 'Perfecto', 0),
(12, 172, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-29', 2022, 5435345, '0295HLJ', 'Perfecto', 0),
(13, 170, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-22', 2022, 4234, '0295HLJ', 'Perfecto', 0),
(14, 169, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-22', 2022, 2344, '0295HLJ', 'Perfecto', 0),
(15, 166, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-16', 2022, 160000, '0295HLJ', 'Mal', 0),
(16, 170, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-22', 2022, 3123, '0295HLJ', 'Mal', 0),
(17, 169, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-28', 2022, 42434, '0295HLJ', 'Mal', 0),
(18, 125, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-22', 2022, 4324, '0295HLJ', 'Mal', 0),
(19, 117, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-14', 2022, 2147483647, '0295HLJ', 'Mal', 0),
(20, 123, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-29', 2022, 2147483647, '0295HLJ', 'Mal', 0),
(21, 137, 1, 'bustamantito@busta.com', 0, 'Joselito', 'Bustamante', '2023-06-29', 2022, 564564566, '0295HLJ', 'Mal', 0),
(23, 122, 2, 'unemail@gmail.com', 0, 'Cesar', 'Garcia', '2023-06-14', 2014, 4234234, '1234HBH', 'Perfecto', 5750),
(24, 134, 2, 'asdasd@asda.com3', 678987567, 'dasdads', 'asdasd asdasda', '2023-06-22', 2020, 4234234, '0295HLX', 'Bien', 6850);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `concesionarios`
--

CREATE TABLE `concesionarios` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `localizacion` varchar(255) NOT NULL,
  `localizacionLink` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `concesionarios`
--

INSERT INTO `concesionarios` (`id`, `name`, `localizacion`, `localizacionLink`) VALUES
(1, 'Manises', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12315.296868168307!2d-0.4596732!3d39.4958837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd605aa8bcd5d113%3A0x4a5221dec2c184c9!2sManises!5e0!3m2!1ses!2ses!4v1685554254341!5m2!1ses!2ses', 'https://goo.gl/maps/TMEG5HJgM9VWBj2k6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultas`
--

CREATE TABLE `consultas` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `motivo` varchar(255) NOT NULL,
  `fecha_consulta` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `consultas`
--

INSERT INTO `consultas` (`id`, `idUser`, `motivo`, `fecha_consulta`) VALUES
(46, 16, 'Mi motivo es el siguiente, no sé', '2023-05-25 04:51:57'),
(48, 16, 'holadas', '2023-05-31 19:39:10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos`
--

CREATE TABLE `favoritos` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idCar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `favoritos`
--

INSERT INTO `favoritos` (`id`, `idUser`, `idCar`) VALUES
(1, 1, 118),
(2, 1, 113),
(3, 1, 121),
(19, 16, 66),
(22, 16, 69),
(23, 16, 67);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mark`
--

CREATE TABLE `mark` (
  `id` int(11) NOT NULL,
  `nameMark` varchar(40) NOT NULL,
  `nameModel` varchar(40) NOT NULL,
  `nameVersion` varchar(40) NOT NULL,
  `cv` int(11) NOT NULL,
  `cilindrada` int(11) NOT NULL,
  `valor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mark`
--

INSERT INTO `mark` (`id`, `nameMark`, `nameModel`, `nameVersion`, `cv`, `cilindrada`, `valor`) VALUES
(111, 'Toyota', 'Corolla', '1.8 Hybrid', 122, 2, 9000),
(112, 'Volkswagen', 'Polo', '1.0 TSI', 95, 1, 10500),
(113, 'Nissan', 'Qashqai', '1.3 DIG-T', 160, 1, 9000),
(114, 'Ford', 'Focus', '1.0 EcoBoost', 125, 1, 9000),
(115, 'Renault', 'Clio', '1.0 TCe', 100, 1, 9000),
(116, 'Peugeot', '208', '1.2 PureTech', 100, 1, 9000),
(117, 'Seat', 'Ibiza', '1.0 TSI', 95, 1, 9000),
(118, 'Kia', 'Sportage', '1.6 CRDi', 115, 2, 9000),
(119, 'Opel', 'Corsa', '1.2 Turbo', 100, 1, 9000),
(120, 'Hyundai', 'i30', '1.4 T-GDI', 140, 1, 9000),
(121, 'Ford', 'Fiesta', '1.0 EcoBoost', 125, 1, 9000),
(122, 'Volkswagen', 'Golf', '1.5 TSI', 130, 2, 9000),
(123, 'Renault', 'Megane', '1.5 Blue dCi', 115, 2, 9000),
(124, 'Toyota', 'Yaris', '1.5 Hybrid', 116, 2, 9000),
(125, 'Hyundai', 'Kona', '1.0 T-GDI', 120, 1, 9000),
(126, 'Peugeot', '3008', '1.5 BlueHDi', 130, 2, 9000),
(127, 'Opel', 'Astra', '1.5 Turbo D', 122, 2, 9000),
(128, 'Seat', 'Arona', '1.0 TSI', 115, 1, 9000),
(129, 'Nissan', 'Micra', '1.0 DIG-T', 100, 1, 9000),
(130, 'Kia', 'Rio', '1.0 T-GDI', 100, 1, 9000),
(131, 'Volkswagen', 'T-Cross', '1.0 TSI', 95, 1, 9000),
(132, 'Renault', 'Captur', '1.0 TCe', 100, 1, 9000),
(133, 'Seat', 'Ateca', '1.0 TSI', 115, 1, 9000),
(134, 'Nissan', 'Juke', '1.0 DIG-T', 117, 1, 9000),
(135, 'Peugeot', '2008', '1.2 PureTech', 130, 1, 9000),
(136, 'Toyota', 'C-HR', '1.8 Hybrid', 122, 2, 9000),
(137, 'Hyundai', 'Tucson', '1.6 GDI', 132, 2, 9000),
(138, 'Kia', 'Ceed', '1.0 T-GDI', 120, 1, 9000),
(139, 'Ford', 'Puma', '1.0 EcoBoost', 125, 1, 9000),
(140, 'Opel', 'Crossland', '1.2 Turbo', 110, 1, 9000),
(141, 'Volkswagen', 'T-Roc', '1.5 TSI', 150, 2, 9000),
(142, 'Renault', 'Kadjar', '1.3 TCe', 140, 1, 9000),
(143, 'Seat', 'Leon', '1.0 TSI', 110, 1, 9000),
(144, 'Nissan', 'X-Trail', '1.7 dCi', 150, 2, 9000),
(145, 'Peugeot', '308', '1.2 PureTech', 130, 1, 9000),
(146, 'Toyota', 'RAV4', '2.5 Hybrid', 218, 3, 9000),
(147, 'Hyundai', 'Santa Fe', '2.2 CRDi', 200, 2, 9000),
(148, 'Kia', 'Sportage', '1.6 T-GDI', 177, 2, 9000),
(149, 'Ford', 'Kuga', '1.5 EcoBoost', 120, 2, 9000),
(150, 'Opel', 'Grandland', '1.2 Turbo', 130, 1, 9000),
(151, 'Volkswagen', 'Passat', '1.5 TSI', 150, 2, 9000),
(152, 'Renault', 'Talisman', '1.6 dCi', 130, 2, 9000),
(153, 'Seat', 'Tarraco', '1.5 TSI', 150, 2, 9000),
(154, 'Nissan', 'Qashqai', '1.5 dCi', 115, 2, 9000),
(155, 'Peugeot', '508', '1.5 BlueHDi', 130, 2, 9000),
(156, 'Toyota', 'Camry', '2.5 Hybrid', 218, 3, 9000),
(157, 'Hyundai', 'Ioniq', '1.6 GDI', 105, 2, 9000),
(158, 'Kia', 'Niro', '1.6 GDI', 105, 2, 9000),
(159, 'Ford', 'Mondeo', '1.5 EcoBoost', 160, 2, 9000),
(160, 'Opel', 'Insignia', '1.5 TDI', 120, 2, 9000),
(161, 'Ford', 'Focus', '1.0 Ecoboost', 125, 1, 9000),
(162, 'Skoda', 'Karoq', '1.0 TSI', 115, 1, 9000),
(163, 'Mazda', 'CX-30', '2.0 Skyactiv-G', 122, 2, 9000),
(164, 'Kia', 'Stonic', '1.0 T-GDI', 120, 1, 9000),
(165, 'Opel', 'Crossland', '1.2 Turbo', 130, 1, 9000),
(166, 'Citroen', 'C3 Aircross', '1.2 PureTech', 110, 1, 9000),
(167, 'Dacia', 'Duster', '1.5 dCi', 115, 2, 9000),
(168, 'Honda', 'HR-V', '1.5 i-VTEC', 130, 2, 9000),
(169, 'Jeep', 'Renegade', '1.0 T3', 120, 1, 9000),
(170, 'Fiat', '500X', '1.0 FireFly', 120, 1, 9000),
(171, 'Mitsubishi', 'ASX', '1.6 MIVEC', 117, 2, 9000),
(172, 'Suzuki', 'Vitara', '1.4 Boosterjet', 140, 1, 9000),
(173, 'Subaru', 'XV', '1.6i', 114, 2, 9000),
(174, 'Volvo', 'XC40', 'T3', 156, 2, 9000),
(175, 'Mini', 'Countryman', 'Cooper', 136, 2, 9000),
(176, 'Audi', 'Q2', '30 TFSI', 116, 1, 9000),
(177, 'BMW', 'X1', 'sDrive18i', 140, 2, 9000),
(178, 'Mercedes-Benz', 'GLA', 'GLA 200', 163, 1, 9000),
(179, 'Porsche', 'Macan', '2.0', 245, 2, 9000),
(180, 'Land Rover', 'Discovery Sport', 'P200', 200, 2, 9000),
(181, 'Lexus', 'UX', '250h', 181, 2, 9000),
(182, 'Infiniti', 'QX30', '2.0t', 211, 2, 9000),
(183, 'Jaguar', 'E-Pace', 'P200', 200, 2, 9000),
(184, 'Alfa Romeo', 'Stelvio', '2.0 Turbo', 200, 2, 9000),
(185, 'Maserati', 'Levante', '2.0', 350, 2, 9000),
(186, 'Bentley', 'Bentayga', 'V6', 340, 3, 9000),
(187, 'Rolls-Royce', 'Cullinan', 'V12', 571, 7, 9000),
(188, 'Lamborghini', 'Urus', '4.0 V8', 650, 4, 9000),
(189, 'Ferrari', 'Portofino', '3.9 V8', 600, 4, 9000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `id` int(11) NOT NULL,
  `provincia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`id`, `provincia`) VALUES
(1, 'Valencia'),
(2, 'Alicante'),
(3, 'Castellón');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idCar` int(11) NOT NULL,
  `fecha_reserva` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `idUser`, `idCar`, `fecha_reserva`) VALUES
(6, 16, 78, '2023-06-06 12:08:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutas_imgs`
--

CREATE TABLE `rutas_imgs` (
  `id` int(11) NOT NULL,
  `idCar` int(11) NOT NULL,
  `ruta` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rutas_imgs`
--

INSERT INTO `rutas_imgs` (`id`, `idCar`, `ruta`) VALUES
(2, 66, 'carsImgs/66/647e97b90c9df.jpg'),
(4, 69, 'carsImgs/69/647ea384b705d.jpg'),
(5, 67, 'carsImgs/67/647eac83a8773.jpg'),
(6, 67, 'carsImgs/67/647eb2e9abe3d.jpg'),
(7, 77, 'carsImgs/77/647eb8160a7a0.jpg'),
(8, 72, 'carsImgs/72/647eb8504b64c.jpg'),
(9, 73, 'carsImgs/73/647eb8d3ad984.jpg'),
(10, 75, 'carsImgs/75/647eb91c6f90a.jpeg'),
(11, 76, 'carsImgs/76/647eb9ff3a5c9.jpg'),
(12, 78, 'carsImgs/78/647eba5ed374c.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `primerApellido` varchar(80) NOT NULL,
  `segundoApellido` varchar(80) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `email` varchar(80) NOT NULL,
  `Telefono` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `primerApellido`, `segundoApellido`, `fecha_nacimiento`, `email`, `Telefono`, `password`, `rol`) VALUES
(1, 'Jose', 'Bustamante', 'Ferreruela', '2002-09-04', 'busta@gmail.com', 0, '1234', 'admin'),
(15, 'Joselito', 'Bustamante', '', '2023-05-25', 'bustamantito@busta.com', 0, '$2y$10$D0YKfaFliE6jfpdfsdR/sexE/rstrvnj0309MiIbucc9RL2zrnXUa', 'admin'),
(16, 'Joselito', 'Joselito', 'fasfafas', '2023-05-12', 'bustamantito@busta.co', 679656345, '$2y$10$l/0QDN.kHgbMkFVE8lesdu5cJhb2E71uHhb0mPge3pQlI99L03U4S', 'user'),
(17, 'Cesar', 'Busta', 'fasf', '2023-06-09', 'fasfasfasf@asf.com', 959595959, '$2y$10$F0/Gd.ztFFadTkNAHOe9EO.7DJ/pJ6g8Eyop/d0UosDLPz6QfzR6m', 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_car_mark` (`carName`),
  ADD KEY `fk_users_concesionario` (`idConcesionario`);

--
-- Indices de la tabla `coches_tasados`
--
ALTER TABLE `coches_tasados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tasados_mark` (`idMark`),
  ADD KEY `fk_tasados_provincias` (`idProvincia`);

--
-- Indices de la tabla `concesionarios`
--
ALTER TABLE `concesionarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `consultas`
--
ALTER TABLE `consultas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_consultas_users` (`idUser`);

--
-- Indices de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_users_favoritos` (`idUser`),
  ADD KEY `fk_favoritos_cars` (`idCar`);

--
-- Indices de la tabla `mark`
--
ALTER TABLE `mark`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uk_coche_id` (`idCar`),
  ADD KEY `fk_users_citas` (`idUser`);

--
-- Indices de la tabla `rutas_imgs`
--
ALTER TABLE `rutas_imgs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_rutas_cars` (`idCar`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- AUTO_INCREMENT de la tabla `coches_tasados`
--
ALTER TABLE `coches_tasados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `concesionarios`
--
ALTER TABLE `concesionarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `consultas`
--
ALTER TABLE `consultas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `mark`
--
ALTER TABLE `mark`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=190;

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `rutas_imgs`
--
ALTER TABLE `rutas_imgs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `fk_car_mark` FOREIGN KEY (`carName`) REFERENCES `mark` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_users_concesionario` FOREIGN KEY (`idConcesionario`) REFERENCES `concesionarios` (`id`);

--
-- Filtros para la tabla `coches_tasados`
--
ALTER TABLE `coches_tasados`
  ADD CONSTRAINT `fk_tasados_mark` FOREIGN KEY (`idMark`) REFERENCES `mark` (`id`),
  ADD CONSTRAINT `fk_tasados_provincias` FOREIGN KEY (`idProvincia`) REFERENCES `provincias` (`id`);

--
-- Filtros para la tabla `consultas`
--
ALTER TABLE `consultas`
  ADD CONSTRAINT `fk_consultas_users` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD CONSTRAINT `fk_favoritos_cars` FOREIGN KEY (`idCar`) REFERENCES `cars` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_users_favoritos` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `fk_reservas_car` FOREIGN KEY (`idCar`) REFERENCES `cars` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_users_citas` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `rutas_imgs`
--
ALTER TABLE `rutas_imgs`
  ADD CONSTRAINT `fk_rutas_cars` FOREIGN KEY (`idCar`) REFERENCES `cars` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
