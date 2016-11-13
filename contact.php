<?php include 'header.php'; ?>

<section class="banner-sec">
    <div class="inner-banner"
         style=" background:url(img/banner-bg.jpg) no-repeat top center fixed; background-size:cover;">
        <div class="overlay-mask">
        </div>
    </div>
</section>
<section class="content-area-sec">
    <div class="content-area-with-bg contact-area">
        <div class="container">
            <div class="contact-sec-contents">
                <div class="col-md-12 row">
                    <div class="col-md-6">
                        <div class="features-box">
                            <div class="features-icon"><img src="img/contact-icon-1.png" alt=""></div>
                            <div class="features-text"><h6>Номер телефона</h6>
                                <p>Мы будем рады ответить на Ваши звонки</p>
                                <p><b>8 906 587 78 18</b></p>
                        </div>
                            </div>
                    </div>

                    <div class="col-md-6">
                        <div class="features-box">
                            <div class="features-icon"><img src="img/contact-icon-3.png" alt=""></div>
                            <div class="features-text"><h6>Email-адрес</h6>
                                <p>Мы будем рады ответить на ваши вопросы</p>
                                <p><b>hello@creanima.ru</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-form-sec">
            <div class="container">
                <div class="main-title"><h3>Быстрая связь</h3></div>
                <div class="form-sec">
                    <form name="contact" method="post" action="" id="ajaxform">
                        <div class="col-md-4">
                            <input type="text" id="contact-name" placeholder="Ваше имя" class="text-field-box" name="name"></div>
                        <div class="col-md-4">
                            <input type="text" id="contact-email" placeholder="Email" class="text-field-box" name="email"></div>
                        <div class="col-md-4">
                            <input type="text" id="contact-number" placeholder="Номер телефона" class="text-field-box" name="subject"></div>
                        <div class="col-md-12">
                            <textarea id="contact-msg" class="text-field-box" placeholder="Ваше сообщение" name="message"></textarea>
                            <button name="contact" type="submit" id="contact-submit" class="button-medium">Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include 'footer.php'; ?>