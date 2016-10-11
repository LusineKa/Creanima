<?php include 'header.php'; ?>

<section class="banner-sec">
    <div class="inner-banner"
         style=" background:url(img/banner-bg.jpg) no-repeat top center fixed; background-size:cover;">
        <div class="overlay-mask">
            <div class="container"><h2>СВЯЗЬ С НАМИ</h2></div>
        </div>
    </div>
</section>
<section class="content-area-sec">
    <div class="content-area-with-bg contact-area">
        <div class="container">
            <div class="contact-sec-contents">
                <div class="col-md-12 row">
                    <div class="col-md-4">
                        <div class="features-box">
                            <div class="features-icon"><img src="img/contact-icon-1.png" alt=""></div>
                            <div class="features-text"><h6>Phone Number</h6>
                                <p>We are happy to answer any time</p>
                                <p><b>OFF: 123 - 456 - 7890</b></p>
                                <p><b>MOB: 098 - 765 - 4321</b></p></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="features-box">
                            <div class="features-icon"><img src="img/contact-icon-2.png" alt=""></div>
                            <div class="features-text"><h6>Office Address</h6>
                                <p>You can directly visit our office</p>
                                <p><b>Door No. 123, New york NY</b></p>
                                <p><b>United State</b></p></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="features-box">
                            <div class="features-icon"><img src="img/contact-icon-3.png" alt=""></div>
                            <div class="features-text"><h6>Email Address</h6>
                                <p>We are happy to answer any questions</p>
                                <p><b>info@yourdomain.com</b></p>
                                <p><b>support@yourdomain.com</b></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contact-form-sec">
            <div class="container">
                <div class="main-title"><h3>Quick Contact</h3></div>
                <div class="form-sec">
                    <form name="contact" method="post">
                        <div class="col-md-4"><input type="text" id="contact-name" placeholder="Your Name"
                                                     class="text-field-box"></div>
                        <div class="col-md-4"><input type="text" id="contact-email" placeholder="Your Email"
                                                     class="text-field-box"></div>
                        <div class="col-md-4"><input type="text" id="contact-number" placeholder="Your Phone"
                                                     class="text-field-box"></div>
                        <div class="col-md-12"><textarea id="contact-msg" class="text-field-box"
                                                         placeholder="Your Message"></textarea>
                            <button name="contact" type="submit" id="contact-submit" class="button-medium">Submit Now
                            </button>
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