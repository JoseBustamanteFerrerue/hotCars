-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-05-2023 a las 05:06:01
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.1.17

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
  `carroceria` varchar(255) NOT NULL,
  `num_plazas` int(11) NOT NULL,
  `bastidor` varchar(40) NOT NULL,
  `matricula` varchar(40) NOT NULL,
  `extras` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cars`
--

INSERT INTO `cars` (`id`, `carName`, `anyo`, `km`, `stateCar`, `price`, `combustible`, `caja_de_cambios`, `distintivo_ambiental`, `carroceria`, `num_plazas`, `bastidor`, `matricula`, `extras`, `img`) VALUES
(66, 111, 2010, 100000, 'Buen estado', 6000, 'Gasolina', 'Manual', 'Etiqueta B', 'Compacto', 5, 'VSSZZZ6JZ8R115426', '3456JHD', 'Climatizador, control de velocidad', ''),
(67, 112, 2015, 80000, 'Muy buen estado', 10000, 'Diésel', 'Manual', 'Etiqueta C', 'Berlina', 5, 'WVWZZZ1KZDW135096', '2345RTD', 'Asientos de cuero, navegador', './assets/imgs/imgsCars/volkswagen-polo.jpg'),
(68, 113, 2012, 120000, 'Buen estado', 7500, 'Gasolina', 'Manual', 'Etiqueta A', 'SUV', 5, 'WVWZZZ1KZCM512468', '8765TGF', 'Techo solar, control de crucero', ''),
(69, 114, 2018, 50000, 'Perfecto estado', 15000, 'Diésel', 'Automática', 'Etiqueta C', 'Berlina', 5, 'JTNBZ29J005055978', '6457JMN', 'Navegador, asientos calefactables', ''),
(70, 115, 2015, 90000, 'Buen estado', 9000, 'Gasolina', 'Manual', 'Etiqueta B', 'Compacto', 5, 'WVWZZZ1KZDM587992', '9654GHJ', 'Sensores de aparcamiento, climatizador bizona', ''),
(71, 116, 2016, 70000, 'Muy buen estado', 11000, 'Diésel', 'Manual', 'Etiqueta C', 'Familiar', 7, 'VNKJTUD23FA182125', '5432HTR', 'Techo panorámico, control de velocidad', ''),
(72, 117, 2014, 100000, 'Buen estado', 7000, 'Gasolina', 'Manual', 'Sin etiqueta', 'Compacto', 5, 'VF3YBRFSC9J511644', '2457MKL', 'Aire acondicionado, elevalunas eléctricos', ''),
(73, 118, 2017, 60000, 'Perfecto estado', 12000, 'Diésel', 'Automática', 'Etiqueta C', 'SUV', 5, 'WDDGF8AB1EA981365', '3456NGB', 'Asientos de cuero, navegador, techo solar', ''),
(74, 119, 2013, 110000, 'Buen estado', 6500, 'Gasolina', 'Manual', 'Etiqueta B', 'Compacto', 5, 'VF3WA8FS0DS113748', '5632TYH', 'Climatizador, control de velocidad', ''),
(75, 121, 2017, 50000, 'Buen estado', 13500, 'Gasolina', 'Manual', 'C', 'Berlina', 5, 'WDD1760431J510259', '2058 HMD', 'Asientos de cuero', ''),
(76, 122, 2018, 40000, 'Perfecto estado', 20000, 'Gasolina', 'Automático', 'C', 'Cabrio', 4, 'WDDPK3JA1GF119106', '2589 JNR', 'Asientos calefactables', ''),
(77, 123, 2016, 80000, 'Buen estado', 9500, 'Diésel', 'Manual', 'B', 'Berlina', 5, 'VF1BZRJ0F28428460', '1812 DTP', 'Navegador GPS', ''),
(78, 124, 2018, 30000, 'Perfecto estado', 22000, 'Gasolina', 'Automático', 'C', 'Berlina', 5, 'WBA2J310X0J367162', '5432 JKM', 'Asientos deportivos', ''),
(79, 125, 2017, 60000, 'Buen estado', 12500, 'Diésel', 'Manual', 'B', 'Berlina', 5, 'WBA1F31090VX51276', '1890 FKH', 'Techo solar', ''),
(80, 126, 2019, 20000, 'Perfecto estado', 25000, 'Gasolina', 'Automático', 'C', 'SUV', 5, 'SALVA2AN4EH900562', '2564 JMF', 'Sistema de sonido BOSE', ''),
(81, 127, 2016, 80000, 'Buen estado', 9500, 'Diésel', 'Manual', 'B', 'Familiar', 5, 'VF1GJEJ0A53305194', '2995 FHT', 'Control de crucero', ''),
(82, 128, 2018, 45000, 'Perfecto estado', 21000, 'Gasolina', 'Automático', 'C', 'Berlina', 5, 'WBA2G51040V259997', '8745 KJR', 'Asientos eléctricos', ''),
(83, 129, 2017, 55000, 'Buen estado', 13000, 'Diésel', 'Manual', 'B', 'SUV', 5, 'WDC1569121J323219', '4219 HLP', 'Techo panorámico', ''),
(84, 130, 2018, 35000, 'Perfecto estado', 22000, 'Gasolina', 'Automático', 'C', 'Coupe', 4, 'WDD2053751F585090', '3658 HDM', 'Faros LED', ''),
(85, 131, 2016, 50000, 'Buen estado', 15000, 'Diésel', 'Manual', 'Etiqueta B', 'Compacto', 5, '1HGBH41JXMN109186', '3412-BCF', 'Asientos de cuero, techo solar', ''),
(86, 132, 2015, 55000, 'Buen estado', 15500, 'Gasolina', 'Manual', 'Etiqueta B', 'Berlina', 5, '3D7JB1EK9AG139938', '5392-DKR', 'Navegador, asientos calefactables', ''),
(87, 133, 2013, 70000, 'Buen estado', 12500, 'Diésel', 'Manual', 'Etiqueta C', 'Familiar', 5, '1HGCM56768A149843', '4625-JVN', 'Faros de xenón, climatizador bizona', ''),
(88, 134, 2017, 45000, 'Perfecto estado', 20500, 'Gasolina', 'Manual', 'Etiqueta B', 'Coupé', 4, '3D7KS29C68G238740', '6957-FGB', 'Sistema de sonido Bose, cámara de visión trasera', ''),
(89, 135, 2018, 40000, 'Buen estado', 17000, 'Diésel', 'Automático', 'Etiqueta C', 'SUV', 5, '3D7JB1EP9BG162834', '2712-HDF', 'Navegador, asientos calefactables', ''),
(90, 136, 2017, 50000, 'Buen estado', 16000, 'Gasolina', 'Automático', 'Etiqueta C', 'Monovolumen', 7, '2FMDK3GC4EB221759', '8234-FVB', 'Sistema de sonido Harman Kardon, techo panorámico', ''),
(91, 137, 2015, 60000, 'Buen estado', 12000, 'Diésel', 'Manual', 'Etiqueta C', 'Berlina', 5, '1GCHK29U14E104467', '9834-JNR', 'Climatizador bizona, sensor de lluvia', ''),
(92, 138, 2016, 55000, 'Buen estado', 16500, 'Gasolina', 'Manual', 'Etiqueta B', 'Cabrio', 4, '3D7KS28D05G852311', '7649-JKN', 'Asientos de cuero, sistema de sonido Bose', ''),
(93, 139, 2017, 40000, 'Perfecto estado', 22000, 'Gasolina', 'Automático', 'Etiqueta B', 'Coupé', 4, '1C6RD7KT9CS257112', '9435-HNB', 'Navegador, sistema de sonido Burmester', ''),
(94, 141, 2018, 40000, 'Buen estado', 13900, 'Gasolina', 'Manual', 'C', 'Compacto', 5, '1M8GDM9AXKP042788', '8374 AEM', 'Cámara trasera, Navegador, Sensor de aparcamiento', ''),
(95, 142, 2017, 60000, 'Buen estado', 12900, 'Gasolina', 'Manual', 'C', 'Berlina', 5, '1GYS3HEF7BR256971', '4192 ZVJ', 'Asientos calefactables, Sensores de luz y lluvia', ''),
(96, 143, 2019, 35000, 'Perfecto estado', 18900, 'Gasolina', 'Automática', 'B', 'SUV', 5, '1GNKVGKD9GJ109862', '1490 MZM', 'Techo panorámico, Asientos de cuero, Cámara trasera', ''),
(97, 144, 2018, 50000, 'Buen estado', 13500, 'Diésel', 'Manual', 'C', 'Berlina', 5, '1GNKVGKDXEJ305210', '8454 YZR', 'Navegador, Bluetooth, Sensores de aparcamiento', ''),
(98, 145, 2020, 25000, 'Perfecto estado', 24900, 'Gasolina', 'Automática', 'C', 'Coupe', 4, '1FMJU1JTXFEF21684', '3225 YXJ', 'Asientos deportivos, Luces LED, Control de crucero adaptativo', ''),
(99, 146, 2016, 80000, 'Buen estado', 10900, 'Diésel', 'Manual', 'C', 'Compacto', 5, '1GNKVGKDXFJ179347', '1169 JFN', 'Sensor de aparcamiento, Cámara trasera, Bluetooth', ''),
(100, 147, 2017, 55000, 'Buen estado', 12900, 'Gasolina', 'Manual', 'C', 'Cabrio', 2, '1G1FB3DS8H0106525', '3265 VTV', 'Asientos deportivos, Navegador, Luces LED', ''),
(101, 148, 2018, 42000, 'Buen estado', 13900, 'Gasolina', 'Manual', 'C', 'Compacto', 5, '1GNEK13R4XJ431785', '2714 FHN', 'Asientos calefactables, Sensores de aparcamiento, Techo solar', ''),
(102, 149, 2019, 30000, 'Perfecto estado', 19900, 'Gasolina', 'Automática', 'C', 'Berlina', 5, '1G1PC5SB6F7272447', '9049 GWP', 'Asientos de cuero, Cámara trasera, Navegador', ''),
(103, 151, 2018, 35000, 'buen estado', 17500, 'Diésel', 'manual', 'C', 'familiar', 5, 'JTHBW1GG202045505', '4444 BCB', 'Asientos de cuero', ''),
(104, 152, 2020, 20000, 'perfecto estado', 24500, 'Gasolina', 'automatica', 'C', 'compacto', 5, 'WVWZZZ1KZAP139745', '3333 DDE', 'Navegador GPS', ''),
(105, 153, 2016, 80000, 'buen estado', 11500, 'Diésel', 'manual', 'B', 'monovolumen', 7, 'WVWZZZ1KZAP139741', '5555 EEF', 'Asientos calefactables', ''),
(106, 154, 2017, 50000, 'buen estado', 15500, 'Gasolina', 'manual', 'B', 'compacto', 5, 'WVWZZZ1KZAP139756', '6666 FFG', 'Camara trasera', ''),
(107, 155, 2019, 35000, 'buen estado', 18500, 'Diésel', 'manual', 'C', 'familiar', 5, 'WAUZBZ1KZAP139756', '7777 GGH', 'Climatizador', ''),
(108, 156, 2018, 45000, 'buen estado', 15900, 'Diésel', 'manual', 'C', 'familiar', 5, 'WAUZZZ3XZAP139756', '8888 HHI', 'Asientos deportivos', ''),
(109, 157, 2016, 85000, 'buen estado', 11500, 'Diésel', 'manual', 'B', 'monovolumen', 7, 'VF7XZV1KZAP139726', '9999 III', 'Techo panoramico', ''),
(110, 158, 2017, 65000, 'buen estado', 15500, 'Gasolina', 'manual', 'B', 'compacto', 5, 'VSKLÑZZZ1KZAP1397', '1010 JJK', 'Bluetooth', ''),
(111, 159, 2019, 38000, 'buen estado', 18500, 'Diésel', 'manual', 'C', 'familiar', 5, 'WAUZZZ1KZAP135421', '1111 KKL', 'Llantas de aleacion', ''),
(112, 160, 2018, 55000, 'buen estado', 15900, 'Diésel', 'manual', 'C', 'familiar', 5, 'WAUZ7Z1XZCP139756', '1212 LLM', 'Faros de xenon', ''),
(113, 161, 2016, 90000, 'buen estado', 11500, 'Diésel', 'manual', 'B', 'monovolumen', 7, 'VF7ZLZ1KZAP1297X6', '1313 MMM', 'Sensores de aparcamiento', ''),
(114, 162, 2017, 70000, 'buen estado', 15500, 'Gasolina', 'manual', 'B', 'compacto', 5, 'VSKZZZ1KZAB139758', '1414 NNN', 'Volante multifuncion', ''),
(115, 164, 2013, 90000, 'Buen estado', 12000, 'Gasolina', 'Manual', 'C', 'SUV', 5, '1HGCM56347A123456', '7596 QFG', 'Asientos de cuero', ''),
(116, 165, 2016, 60000, 'Buen estado', 14500, 'Diésel', 'Manual', 'B', 'Berlina', 5, '1HGCM56347A123457', '5408 WBB', 'Cámara de aparcamiento', ''),
(117, 166, 2017, 45000, 'Buen estado', 17000, 'Gasolina', 'Manual', 'C', 'Compacto', 5, '1HGCM56347A123458', '7812 KLB', 'Asientos calefactables', ''),
(118, 167, 2015, 80000, 'Buen estado', 13500, 'Diésel', 'Manual', 'B', 'SUV', 5, '1HGCM56347A123459', '3169 SMM', 'Climatizador bizona', ''),
(119, 168, 2018, 35000, 'Perfecto estado', 23000, 'Gasolina', 'Manual', 'C', 'Berlina', 5, '1HGCM56347A123460', '8923 PTH', 'Tapicería de piel', ''),
(120, 169, 2016, 70000, 'Buen estado', 13500, 'Diésel', 'Manual', 'B', 'Compacto', 5, '1HGCM56347A123461', '3045 JPS', 'Volante multifunción', ''),
(121, 170, 2015, 90000, 'Buen estado', 12500, 'Gasolina', 'Manual', 'C', 'Berlina', 5, '1HGCM56347A123462', '1382 YMR', 'Bluetooth', ''),
(122, 171, 2016, 75000, 'Buen estado', 14500, 'Diésel', 'Manual', 'B', 'SUV', 5, '1HGCM56347A123463', '1462 KLS', 'Llantas de aleación', ''),
(123, 172, 2014, 95000, 'Buen estado', 9900, 'Gasolina', 'Manual', 'C', 'Compacto', 5, '1HGCM56347A123464', '6810 TGL', 'Pintura metalizada', ''),
(124, 173, 2017, 55000, 'Buen estado', 15500, 'Diésel', 'Manual', 'B', 'Berlina', 5, '1HGCM56347A123465', '9087 BVT', 'Sistema de sonido de alta fidelidad', ''),
(125, 174, 2016, 65000, 'Buen estado', 14900, 'Gasolina', 'Manual', 'C', 'SUV', 5, '1HGCM56347A123466', '3689 BKS', 'Faros de xenón', ''),
(126, 176, 2016, 63000, 'Buen estado', 20500, 'Gasolina', 'Manual', 'B', 'SUV', 5, 'YS3E4BJ44A0123456', '1111-BBB', 'Climatizador, Elevalunas eléctricos, Sensor de lluvia, Control de velo', ''),
(127, 177, 2015, 59000, 'Buen estado', 18900, 'Diésel', 'Manual', 'B', 'Familiar', 5, 'YS3E4BJ44A0223456', '2222-CCC', 'Climatizador, Asientos calefactables, Llantas de aleación, Control de ', ''),
(128, 178, 2015, 62000, 'Buen estado', 18800, 'Gasolina', 'Manual', 'C', 'Compacto', 5, 'YS3E4BJ44A0323456', '3333-DDD', 'Climatizador, Dirección asistida, Elevalunas eléctricos, Sensor de llu', ''),
(129, 179, 2017, 55000, 'Buen estado', 21900, 'Gasolina', 'Automática', 'C', 'Cabrio', 4, 'YS3E4BJ44A0423456', '4444-EEE', 'Tapicería de cuero, Navegador GPS, Sensor de aparcamiento, Bluetooth', ''),
(130, 180, 2015, 67000, 'Buen estado', 18700, 'Gasolina', 'Manual', 'B', 'Berlina', 5, 'YS3E4BJ44A0523456', '5555-FFF', 'Climatizador, Elevalunas eléctricos, Control de estabilidad, Volante m', ''),
(131, 181, 2018, 45000, 'Buen estado', 24700, 'Gasolina', 'Automática', 'C', 'SUV', 5, 'YS3E4BJ44A0623456', '6666-GGG', 'Asientos calefactables, Cámara trasera, Faros LED, Control de crucero ', ''),
(132, 182, 2017, 58000, 'Buen estado', 21100, 'Diésel', 'Manual', 'B', 'Familiar', 5, 'YS3E4BJ44A0723456', '7777-HHH', 'Climatizador, Bluetooth, Llantas de aleación, Sensor de lluvia', ''),
(133, 183, 2015, 72000, 'Buen estado', 16900, 'Diésel', 'Manual', 'B', 'Monovolumen', 7, 'YS3E4BJ44A0823456', '8888-III', 'Asientos calefactables, Sensor de aparcamiento, Control de tracción, C', ''),
(134, 184, 2016, 65000, 'Buen estado', 19700, 'Gasolina', 'Manual', 'B', 'Compacto', 5, 'YS3E4BJ44A0923456', '9999-JJJ', 'Climatizador, Llantas de aleación, Volante multifunción, Control de es', ''),
(135, 185, 2016, 93000, 'buen estado', 10500, 'Diésel', 'Manual', 'B', 'Compacto', 5, 'JMZKE2D84H0356154', '7349 GZZ', 'Cierre centralizado, Elevalunas eléctrico', ''),
(136, 186, 2015, 74000, 'perfecto estado', 14900, 'Gasolina', 'Manual', 'C', 'Berlina', 5, 'VF3XUHFXFJ3453686', '1286 DKB', 'Climatizador bizona, Llantas de aleación', ''),
(137, 187, 2014, 86000, 'buen estado', 8990, 'Diésel', 'Manual', 'B', 'SUV', 5, 'WVWZZZ1KZAM693281', '3818 HBL', 'Control de crucero, Bluetooth', ''),
(138, 188, 2016, 69000, 'muy buen estado', 17900, 'Gasolina', 'Manual', 'C', 'Cabrio', 2, 'W0L0AHL0886010971', '9688 KNS', 'Asientos calefactados, Navegador', ''),
(139, 189, 2013, 98000, 'buen estado', 11900, 'Gasolina', 'Manual', 'B', 'Monovolumen', 7, 'WAUZZZ4LZBD100269', '8277 JNN', 'Techo panorámico, Sensores de aparcamiento', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cita`
--

CREATE TABLE `cita` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idCar` int(11) NOT NULL,
  `idConcesionario` int(11) NOT NULL,
  `fecha_cita` datetime NOT NULL,
  `motivo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cita`
--

INSERT INTO `cita` (`id`, `idUser`, `idCar`, `idConcesionario`, `fecha_cita`, `motivo`) VALUES
(1, 1, 99, 1, '2023-05-30 16:07:11', 'Compra de coche');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `concesionarios`
--

CREATE TABLE `concesionarios` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `localizacion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `concesionarios`
--

INSERT INTO `concesionarios` (`id`, `name`, `localizacion`) VALUES
(1, 'Manises', 'https://goo.gl/maps/TMEG5HJgM9VWBj2k6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultas`
--

CREATE TABLE `consultas` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `motivo` varchar(255) NOT NULL,
  `fecha_consulta` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `consultas`
--

INSERT INTO `consultas` (`id`, `idUser`, `motivo`, `fecha_consulta`) VALUES
(45, 15, 'El motivo es que quisiera vender un coche, y quiero que me lo tase un experto. Gracias.', '2023-05-25 04:09:55'),
(46, 16, 'Mi motivo es el siguiente, no sé', '2023-05-25 04:51:57'),
(47, 16, 'Mi otro motivo, era el otro.', '2023-05-25 04:52:10');

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
(3, 1, 121);

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
  `cilindrada` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mark`
--

INSERT INTO `mark` (`id`, `nameMark`, `nameModel`, `nameVersion`, `cv`, `cilindrada`) VALUES
(111, 'Toyota', 'Corolla', '1.8 Hybrid', 122, 2),
(112, 'Volkswagen', 'Polo', '1.0 TSI', 95, 1),
(113, 'Nissan', 'Qashqai', '1.3 DIG-T', 160, 1),
(114, 'Ford', 'Focus', '1.0 EcoBoost', 125, 1),
(115, 'Renault', 'Clio', '1.0 TCe', 100, 1),
(116, 'Peugeot', '208', '1.2 PureTech', 100, 1),
(117, 'Seat', 'Ibiza', '1.0 TSI', 95, 1),
(118, 'Kia', 'Sportage', '1.6 CRDi', 115, 2),
(119, 'Opel', 'Corsa', '1.2 Turbo', 100, 1),
(120, 'Hyundai', 'i30', '1.4 T-GDI', 140, 1),
(121, 'Ford', 'Fiesta', '1.0 EcoBoost', 125, 1),
(122, 'Volkswagen', 'Golf', '1.5 TSI', 130, 2),
(123, 'Renault', 'Megane', '1.5 Blue dCi', 115, 2),
(124, 'Toyota', 'Yaris', '1.5 Hybrid', 116, 2),
(125, 'Hyundai', 'Kona', '1.0 T-GDI', 120, 1),
(126, 'Peugeot', '3008', '1.5 BlueHDi', 130, 2),
(127, 'Opel', 'Astra', '1.5 Turbo D', 122, 2),
(128, 'Seat', 'Arona', '1.0 TSI', 115, 1),
(129, 'Nissan', 'Micra', '1.0 DIG-T', 100, 1),
(130, 'Kia', 'Rio', '1.0 T-GDI', 100, 1),
(131, 'Volkswagen', 'T-Cross', '1.0 TSI', 95, 1),
(132, 'Renault', 'Captur', '1.0 TCe', 100, 1),
(133, 'Seat', 'Ateca', '1.0 TSI', 115, 1),
(134, 'Nissan', 'Juke', '1.0 DIG-T', 117, 1),
(135, 'Peugeot', '2008', '1.2 PureTech', 130, 1),
(136, 'Toyota', 'C-HR', '1.8 Hybrid', 122, 2),
(137, 'Hyundai', 'Tucson', '1.6 GDI', 132, 2),
(138, 'Kia', 'Ceed', '1.0 T-GDI', 120, 1),
(139, 'Ford', 'Puma', '1.0 EcoBoost', 125, 1),
(140, 'Opel', 'Crossland', '1.2 Turbo', 110, 1),
(141, 'Volkswagen', 'T-Roc', '1.5 TSI', 150, 2),
(142, 'Renault', 'Kadjar', '1.3 TCe', 140, 1),
(143, 'Seat', 'Leon', '1.0 TSI', 110, 1),
(144, 'Nissan', 'X-Trail', '1.7 dCi', 150, 2),
(145, 'Peugeot', '308', '1.2 PureTech', 130, 1),
(146, 'Toyota', 'RAV4', '2.5 Hybrid', 218, 3),
(147, 'Hyundai', 'Santa Fe', '2.2 CRDi', 200, 2),
(148, 'Kia', 'Sportage', '1.6 T-GDI', 177, 2),
(149, 'Ford', 'Kuga', '1.5 EcoBoost', 120, 2),
(150, 'Opel', 'Grandland', '1.2 Turbo', 130, 1),
(151, 'Volkswagen', 'Passat', '1.5 TSI', 150, 2),
(152, 'Renault', 'Talisman', '1.6 dCi', 130, 2),
(153, 'Seat', 'Tarraco', '1.5 TSI', 150, 2),
(154, 'Nissan', 'Qashqai', '1.5 dCi', 115, 2),
(155, 'Peugeot', '508', '1.5 BlueHDi', 130, 2),
(156, 'Toyota', 'Camry', '2.5 Hybrid', 218, 3),
(157, 'Hyundai', 'Ioniq', '1.6 GDI', 105, 2),
(158, 'Kia', 'Niro', '1.6 GDI', 105, 2),
(159, 'Ford', 'Mondeo', '1.5 EcoBoost', 160, 2),
(160, 'Opel', 'Insignia', '1.5 TDI', 120, 2),
(161, 'Ford', 'Focus', '1.0 Ecoboost', 125, 1),
(162, 'Skoda', 'Karoq', '1.0 TSI', 115, 1),
(163, 'Mazda', 'CX-30', '2.0 Skyactiv-G', 122, 2),
(164, 'Kia', 'Stonic', '1.0 T-GDI', 120, 1),
(165, 'Opel', 'Crossland', '1.2 Turbo', 130, 1),
(166, 'Citroen', 'C3 Aircross', '1.2 PureTech', 110, 1),
(167, 'Dacia', 'Duster', '1.5 dCi', 115, 2),
(168, 'Honda', 'HR-V', '1.5 i-VTEC', 130, 2),
(169, 'Jeep', 'Renegade', '1.0 T3', 120, 1),
(170, 'Fiat', '500X', '1.0 FireFly', 120, 1),
(171, 'Mitsubishi', 'ASX', '1.6 MIVEC', 117, 2),
(172, 'Suzuki', 'Vitara', '1.4 Boosterjet', 140, 1),
(173, 'Subaru', 'XV', '1.6i', 114, 2),
(174, 'Volvo', 'XC40', 'T3', 156, 2),
(175, 'Mini', 'Countryman', 'Cooper', 136, 2),
(176, 'Audi', 'Q2', '30 TFSI', 116, 1),
(177, 'BMW', 'X1', 'sDrive18i', 140, 2),
(178, 'Mercedes-Benz', 'GLA', 'GLA 200', 163, 1),
(179, 'Porsche', 'Macan', '2.0', 245, 2),
(180, 'Land Rover', 'Discovery Sport', 'P200', 200, 2),
(181, 'Lexus', 'UX', '250h', 181, 2),
(182, 'Infiniti', 'QX30', '2.0t', 211, 2),
(183, 'Jaguar', 'E-Pace', 'P200', 200, 2),
(184, 'Alfa Romeo', 'Stelvio', '2.0 Turbo', 200, 2),
(185, 'Maserati', 'Levante', '2.0', 350, 2),
(186, 'Bentley', 'Bentayga', 'V6', 340, 3),
(187, 'Rolls-Royce', 'Cullinan', 'V12', 571, 7),
(188, 'Lamborghini', 'Urus', '4.0 V8', 650, 4),
(189, 'Ferrari', 'Portofino', '3.9 V8', 600, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `primerApellido` varchar(80) NOT NULL,
  `segundoApellido` varchar(80) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rol` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `primerApellido`, `segundoApellido`, `fecha_nacimiento`, `email`, `password`, `rol`) VALUES
(1, 'Jose', 'Bustamante', 'Ferreruela', '2002-09-04', 'busta@gmail.com', '1234', 'admin'),
(15, 'Joselito', 'Bustamante', '', '2023-05-25', 'bustamantito@busta.com', '$2y$10$D0YKfaFliE6jfpdfsdR/sexE/rstrvnj0309MiIbucc9RL2zrnXUa', 'admin'),
(16, 'Joselito', 'Joselito', '', '2023-05-12', 'bustamantito@busta.co', '$2y$10$l/0QDN.kHgbMkFVE8lesdu5cJhb2E71uHhb0mPge3pQlI99L03U4S', 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_car_mark` (`carName`);

--
-- Indices de la tabla `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_users_citas` (`idUser`),
  ADD KEY `fk_citas_car` (`idCar`),
  ADD KEY `fk_citas_concesionario` (`idConcesionario`);

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
  ADD KEY `fk_favoritos_car` (`idCar`);

--
-- Indices de la tabla `mark`
--
ALTER TABLE `mark`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- AUTO_INCREMENT de la tabla `cita`
--
ALTER TABLE `cita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `concesionarios`
--
ALTER TABLE `concesionarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `consultas`
--
ALTER TABLE `consultas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `mark`
--
ALTER TABLE `mark`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=190;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `fk_car_mark` FOREIGN KEY (`carName`) REFERENCES `mark` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cita`
--
ALTER TABLE `cita`
  ADD CONSTRAINT `fk_citas_car` FOREIGN KEY (`idCar`) REFERENCES `cars` (`id`),
  ADD CONSTRAINT `fk_citas_concesionario` FOREIGN KEY (`idConcesionario`) REFERENCES `concesionarios` (`id`),
  ADD CONSTRAINT `fk_users_citas` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `consultas`
--
ALTER TABLE `consultas`
  ADD CONSTRAINT `fk_consultas_users` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD CONSTRAINT `fk_favoritos_car` FOREIGN KEY (`idCar`) REFERENCES `cars` (`id`),
  ADD CONSTRAINT `fk_users_favoritos` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
