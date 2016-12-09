lang = {};
lang['rus'] = {
    '.slogan': 'Мы ищем опытного и талантливого ',
    '.strong': 'JavaScript разработчика ',
    '.bold': 'Ждем от вас:  ',
    '.req': ' - Отличное знание HTML, CSS, JS<br> - Опыт работы с Angular и React будет преимуществом<br> - Уделять внимание мелочам, делать свою работу изящно и красиво<br>',
    '.browse ': ' <i class="glyphicon glyphicon-upload"></i> Загрузить',
    '#subscribe_submit ': 'Отправить'
};
lang['eng'] = {
    '.slogan': 'We are seeking an experienced and talented ',
    '.strong': 'JavaScript developer ',
    '.bold': 'We expect from you:  ',
    '.req': '- Excellent knowledge of HTML, CSS, JS <br> - Experience with Angular and React will be an advantage<br> - Pay attention to details and do your job gracefully and beautifully ',
    '.browse ': ' <i class="glyphicon glyphicon-upload"></i> Upload',
    '#subscribe_submit ': 'Send'
};

lang['arm'] = {
    '.slogan': 'Մենք փնտրում ենք փորձառու և տաղանդավոր ',
    '.strong': 'JavaScript ծրագրավորող ',
    '.bold': 'Մենք ակնկալում ենք ձեզանից:  ',
    '.req': '- HTML, CSS, JS գերազանց իմացություն  <br> - Աշխատանքային փորձը Angular-ի և React-ի հետ  կդիտվի որպես մեծ առավելություն <br> - Ուշադրություն մանրուքների հանդեպ, կատարել աշխատանքը մաքուր ու գեղեցիկ',
    '.browse ': ' <i class="glyphicon glyphicon-upload"></i> Կցել',
    '#subscribe_submit ': 'Ուղարկել'
};

$(document).ready(function () {
    if(window.location.href.indexOf("eng") > -1) {
        jQuery.each(lang['eng'], function (selector, val) {
            $(selector).html(val);
        });
        $("#name").attr("placeholder", "Name *");
        $("#email").attr("placeholder", "Email *");
        $("#phone").attr("placeholder", "Phone *");
        $("#cv").attr("placeholder", "CV *");
        $("#message").attr("placeholder", "Portfolio URL");
        $(document).prop('title', '>'+'Vacancy ։ Creanima Studio');
        $(document).attr("title", "Vacancy ։ Creanima Studio");
    }
    if(window.location.href.indexOf("arm") > -1) {
        jQuery.each(lang['arm'], function (selector, val) {
            $(selector).html(val);
        });
        $("#name").attr("placeholder", "Անուն *");
        $("#email").attr("placeholder", "Էլ․ հասցե *");
        $("#phone").attr("placeholder", "Հեռախոս *");
        $("#cv").attr("placeholder", "CV *");
        $("#message").attr("placeholder", "Կատարած աշխատանքների URL");
        $(document).attr("title", "Աշխատանք ։ Creanima Studio")
    }
    if(window.location.href.indexOf("rus") > -1) {
        $("#name").attr("placeholder", "Имя *");
        $("#email").attr("placeholder", "Эл. адрес *");
        $("#phone").attr("placeholder", "Телефон *");
        $("#cv").attr("placeholder", "CV *");
        $("#message").attr("placeholder", "Портфолио URL");
        $(document).attr("title", "Вакансии : Creanima Студио")
    }
});

$('.languages').click(function () {
    var language = $(this).attr('value');
    jQuery.each(lang[language], function (selector, val) {
        $(selector).html(val);
    });
    if (language == "rus") {
        $("#name").attr("placeholder", "Имя *");
        $("#email").attr("placeholder", "Эл. адрес *");
        $("#phone").attr("placeholder", "Телефон *");
        $("#cv").attr("placeholder", "CV *");
        $("#message").attr("placeholder", "Портфолио URL");
        $(document).attr("title", "Вакансии : Creanima Студио")

    } else {
        if (language == "eng") {
            $("#name").attr("placeholder", "Name *");
            $("#email").attr("placeholder", "Email *");
            $("#phone").attr("placeholder", "Phone *");
            $("#cv").attr("placeholder", "CV *");
            $("#message").attr("placeholder", "Portfolio URL");
            $(document).attr("title", "Vacancy ։ Creanima Studio");
        } else {
            if (language == "arm") {
                $("#name").attr("placeholder", "Անուն *");
                $("#email").attr("placeholder", "Էլ․ հասցե *");
                $("#phone").attr("placeholder", "Հեռախոս *");
                $("#cv").attr("placeholder", "CV *");
                $("#message").attr("placeholder", "Կատարած աշխատանքների URL");
                $(document).attr("title", "Աշխատանք ։ Creanima Studio")
            }
        }
    }
});