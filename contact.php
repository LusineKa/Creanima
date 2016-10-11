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
                                <p><b>+7 906 590 44 41</b></p>
                        </div>
                            </div>
                    </div>

                    <div class="col-md-6">
                        <div class="features-box">
                            <div class="features-icon"><img src="img/contact-icon-3.png" alt=""></div>
                            <div class="features-text"><h6>Email-адрес</h6>
                                <p>Мы будем рады ответить на ваши вопросы</p>
                                <p><b>info@yourdomain.com</b></p>
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
                            <input type="text" id="contact-name" placeholder="Ваше имя" class="text-field-box" name="person" val=""></div>
                        <div class="col-md-4">
                            <input type="text" id="contact-email" placeholder="Email" class="text-field-box" name="email" val=""></div>
                        <div class="col-md-4">
                            <input type="text" id="contact-number" placeholder="Номер телефона" class="text-field-box" name="subject" val=""></div>
                        <div class="col-md-12">
                            <textarea id="contact-msg" class="text-field-box" placeholder="Ваше сообщение" name="message" val=""></textarea>
                            <button name="contact" type="submit" id="contact-submit" class="button-medium">Отправить</button>
                        </div>
                        <div class="error-item">
                            <div id="contact-loading" style="display: none;"> Email Sending...</div>
                            <div id="contact-success" style="display: none;"> Your message sent sucessfully to our team
                                and they will be in touch with you asap.
                            </div>
                            <div id="contact-failed" style="display: none;"> Error...!, message sending faild , try
                                after sometime.
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include 'footer.php'; ?>