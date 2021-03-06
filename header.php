<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Creanima Студио</title>
    <meta name="description" content="Creanima Студио | Создание и продвижение сайтов, +7 (906) 587-78-18">
    <meta name="keywords" content="Создание и продвижение сайтов, создание сайтов в Москве, продвижение сайтов в Москве">
    <meta property="og:type" content="website">
    <meta property="og:url" content="http://creanima.ru/">
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:image" content="">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">

    <link rel="shortcut icon" href="img/favico.png">
    <link type="text/css" rel="stylesheet" href="css/bootstrap.css">
    <link type="text/css" rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
    <link type="text/css" rel="stylesheet" href="css/animate.min.css">
    <link type="text/css" rel="stylesheet" href="css/flexslider.css">
    <link type="text/css" rel="stylesheet" href="css/style.css">
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Lato:400,100italic,300,100,300italic,400italic,700,700italic,900,900italic'
          rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,800italic,800,700italic,700,600italic,600,400italic,300italic,300'
          rel='stylesheet' type='text/css'>
</head>
<body>
<div id="mask">
    <div id="loader"></div>
</div>
<header class="header-area">
    <div class="container">
        <div class="col-md-2 left-side">
            <div class="logo"><a href="index.php"> <img src="img/top-logo.png" alt=""></a></div>
        </div>
        <div class="mob-icon"><i class="fa fa-bars"></i></div>
        <div class="col-md-10 right-side">
            <div class="menu-bar">
                <nav>
                    <ul class="menu">
                        <?php
                        $full_name = $_SERVER['PHP_SELF'];
                        $name_array = explode('/',$full_name);
                        $count = count($name_array);
                        $page_name = $name_array[$count-1];
                        ?>
                        <li class="<?php echo ($page_name=='index.php')?'active':'';?>"><a href="index.php">Главное</a></li>
                        <li class="<?php echo ($page_name=='about.php')?'active':'';?>"><a href="about.php">О нас</a></li>
                        <li class="<?php echo ($page_name=='catalog.php')?'active':'';?>"><a href="catalog.php">Дизайн из каталога</a> <img class="coming-soon" src="img/coming-soon.png"></li>
                        <li class="<?php echo ($page_name=='portfolio.php')?'active':'';?>"><a href="portfolio.php">Наши работы</a></li>
                        <li class="<?php echo ($page_name=='contact.php')?'active':'';?>"><a href="contact.php">Связь с нами</a></li>
                    </ul>
                </nav>
                <div class="tel-header" data-order-call="">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span>+7 (906) 587 78 18 <br>Заказать звонок</span>
                </div>
            </div>
            <div class="langs">
                <a href="#" class="languages" title="Русский"><img alt="rus" src="img/flag/Russia.png"></a>
                <a href="arm" class="languages" title="Հայերեն"><img alt="rus" src="img/flag/Armenia.png"></a>
            </div>
        </div>
    </div>
</header>