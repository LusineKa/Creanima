<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Pling - Multi-purpose Bootstrap Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="" content=""/>
    <meta name="description" content="">
    <meta name="keywords" content="">

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
        <div class="col-md-4 left-side">
            <div class="logo"><a href="index.php"> <img src="img/top-logo.png" alt=""></a></div>
        </div>
        <div class="mob-icon"><i class="fa fa-bars"></i></div>
        <div class="col-md-8 right-side">
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
                        <li class="<?php echo ($page_name=='about.php')?'active':'';?>"><a href="about.php">Про нас</a></li>
                        <li class="<?php echo ($page_name=='services.php')?'active':'';?>"><a href="services.php">Услуги</a></li>
                        <li class="<?php echo ($page_name=='catalog.php')?'active':'';?>"><a href="catalog.php">Дизайн из каталога</a> <img class="coming-soon" src="img/coming-soon.png"></li>
                        <li class="<?php echo ($page_name=='portfolio.php')?'active':'';?>"><a href="portfolio.php">Наши работы</a></li>
                        <li class="<?php echo ($page_name=='contact.php')?'active':'';?>"><a href="contact.php">Связь с нами</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>