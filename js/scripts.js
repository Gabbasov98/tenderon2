//  Ivan Eremeev - 2020
//  Skype: ivan.eremeev_1
//  Telegram: IvanMessage
//  Email: ivan.frontcoder@gmail.com

$(document).ready(function() {
    $("  .main__footer-mob-btn.user-drop-open").click(function() {
        $(".footer .user__drop").css("display", "block");
    })
    $(".content").click(function() {
        $(".footer .user__drop").css("display", "none");
    })
    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active");
        $(".header__bottom").slideToggle()
    })

    $(".sort__file-filter").click(function() {
        $(".main").hide();
        $(".search").hide();
        $(".sidebar").show();
        $("header").hide();
        $(".sidebar__close").show();
        $(".select-filters").show();
        $(".main__footer-mob").hide();
    })

    $(".filters .save__filter").click(function() {
        $(".main").show();
        $(".search").show();
        $(".sidebar").hide();
        $("header").show();
        $(".sidebar__close").hide();
        $(".select-filters").hide();
        $(".main__footer-mob").show();
    })
    $(".sidebar__close button").click(function() {
        $(".main").show();
        $(".search").show();
        $(".sidebar").hide();
        $("header").show();
        $(".sidebar__close").hide();
        $(".select-filters").hide();
        $(".main__footer-mob").show();
    })

    if (($(window).width()) < 992) {
        $("#search").attr("placeholder", "Поиск по наименованию закупки, реестровому номеру, наименованию...");
    }
    if (($(window).width()) < 768) {
        $("#search").attr("placeholder", "Поиск по критериям");
    }

    $(".card__mob-detail").click(function() {
        let card__body = $(this).parents(".card__body");
        let card__head = card__body.children(".card__head");
        let card__col__2 = card__head.children(".card__col--2");
        let card__text = card__body.children(".card__text");
        let card__text__p = card__text.children("p");
        let card__col__3 = card__head.children(".card__col--3");
        card__col__2.children(".card__desc").slideToggle()
        card__col__3.children(".card__desc").slideToggle()
        card__head.toggleClass("card__head--active");
        $(this).children(".card__journal-arrow").toggleClass("card__journal-arrow--active")
        card__text__p.toggleClass("active");
    })


    // Клик на карточку календаря + модальное окно
    $(".calendar__card").click(function() {
        if ($(window).width() > 767) {
            $(".calendar__card").removeClass("calendar__card--active")
            $(this).addClass("calendar__card--active");
            $(".calendar__drop").show(300);
            $(".modal-bg").show();
        } else {
            $(".calendar__drop--mob").show(300);
            $(".modal-bg").show();
        }

    })


    // Брэйкпоинты js
    var breakXl = 1400,
        breakLg = 1200,
        breakMd = 1025,
        breakSm = 769,
        breakXs = 500;

    // Подключение настроек плагинов. Использовать "//=" перед строкой пути
    // libs-settings/fancybox_settings.js
    // libs-settings/slick_settings.js
    // libs-settings/fullpage_settings.js
    // libs-settings/tinyscrollbar-settings.js
    // libs-settings/tooltipster-settings.js
    // libs-settings/yandex-map-settings.js
    // libs-settings/google-map-settings.js
    // mailto-ajax.js

    // Запрет перехода по ссылкам с хэшем
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });

    // Мобильное меню
    function myMenu(menu) {
        if (menu.length) {
            menu.each(function() {
                var $this = $(this),
                    menuBtn = $this.find('#menu-btn'),
                    over = $this.find('#menu-over'),
                    close = $this.find('#menu-close'),
                    body = $('body'),
                    scrollbarWidth;
                menuBtn.on('click', toggleOpenMenu);
                over.on('click', menuClose);
                close.on('click', menuClose);

                function menuOpen() { // Открывание меню
                    body.addClass('lock').css('padding-right', scrollbarWidth);
                    $this.addClass('open');
                    menuBtn.addClass('is-active');
                }

                function menuClose() { // Закрывание меню
                    body.removeClass('lock').css('padding-right', 0);
                    $this.removeClass('open');
                    menuBtn.removeClass('is-active');
                }

                function scrollbarWidthCalc() { // Вычисление ширины скролла
                    var documentWidth = parseInt(document.documentElement.clientWidth),
                        windowsWidth = parseInt(window.innerWidth);
                    scrollbarWidth = windowsWidth - documentWidth;
                }

                function toggleOpenMenu() { // Открывание/закрывание меню
                    if ($this.hasClass('open')) {
                        menuClose();
                    } else {
                        menuOpen();
                    }
                }
                scrollbarWidthCalc();
                $(window).resize(scrollbarWidthCalc);
            })
        };
    };
    myMenu($('.js-menu'));

    // Выпадайка при клике со сменой класса
    function dropClick(btn) {
        if (btn.length) {
            btn.each(function() {
                var $this = $(this),
                    id = $this.data('id'),
                    hide = $this.data('hide'),
                    dropBlock = $(id);
                $this.on('click', function() {
                    $this.toggleClass('active');
                    dropBlock.toggleClass('open');
                });
                if (hide == 'no') {
                    return false;
                } else {
                    $(document).mouseup(function(e) {
                        if (!dropBlock.is(e.target) && dropBlock.has(e.target).length === 0 && !$this.is(e.target) && $this.has(e.target).length === 0) {
                            $this.removeClass('active');
                            dropBlock.removeClass('open');
                        }
                    });
                }
            });
        }
    }
    dropClick($('.js-drop-click'));

    // Выпадайка при клике в карточке
    function dropDown() {
        if ($('.card').length) {
            $('.card').each(function() {
                var $this = $(this),
                    btn = $this.find('.card__journal'),
                    drop = $this.find('.card__drop');
                btn.on('click', function() {
                    drop.stop().slideToggle();
                    btn.toggleClass('active');
                })
            })
        }
    }

    function dropDown2() {
        if ($('.card').length) {
            $('.card').each(function() {
                var $this = $(this),
                    btn = $this.find('.card__drop > button'),
                    drop = $this.find('.card__drop');
                btn.on('click', function() {
                    drop.stop().slideToggle();
                    btn.toggleClass('active');
                })
            })
        }
    }
    dropDown();
    dropDown2()

    $(".card__drop--calendar > button").click(function() {
        $(this).parents(".card__drop").slideToggle()
    })

    $(".card__journal--calendar").click(function() {
        $(this).toggleClass("active");
        $(this).siblings(".card__drop--calendar").slideToggle();
        if ($(window).width() < 768) {
            $(this).parents(".calendar-card__footer").siblings(".card__drop--calendar").slideToggle();
            $(".modal-bg").show();
        }
    })



    // Появление модального окна ответа
    $(".day-chart__item").click(function() {
        $(".calendar-cards__answer").slideToggle(200);
        $(".modal-bg").slideToggle();
    })
    $(".modal-bg").click(function() {
            $(".calendar-cards__answer").hide(200);
            $(".modal-bg").hide();
            $(".card__drop--calendar").hide(200);
            $(".calendar__drop").hide(200);
            $(".calendar__drop--mob").hide(200);
            $(".calendar__card").removeClass("calendar__card--active");
        })
        // 
    $(".calendar-card__detail").click(function() {
        if ($(window).width() >= 768) {
            $(this).parents(".calendar-card__footer").siblings(".card__drop--calendar2").slideToggle()
            $(this).toggleClass("calendar-card__detail--active")
        } else {
            $(".card__drop-text2").slideToggle()
            $(".calendar-card__detail").toggleClass("calendar-card__detail--active")
        }

    })
    $(".calendar__drop-close").click(function() {
        $(".calendar__drop").hide(200);
        $(".modal-bg").hide();
    })






    // JQueryScrollbar
    $('.scrollbar-inner').scrollbar();

    // Ползунок выбора фильтров
    function switchFilters() {
        var block = $('.filters__switcblock'),
            inputMain = block.find('#filtersSwitch'),
            circle = block.find('.filters__switch-circle'),
            inputsGroup = block.find('.filters__location input');
        inputMain.on('change', function() {
            if (inputMain.prop('checked')) {
                circle.addClass('checked');
                inputsGroup.prop('checked', true);
            } else {
                circle.removeClass('checked');
                inputsGroup.prop('checked', false);
            }
        })
    }
    switchFilters();


    // // Вставляет svg в html, позволяет управлять svg через css 
    $('img[src$=".svg"]').each(function() {
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });

    // Загорание лампочки при включении переключателя
    function switchLamp() {
        $('.sort__switch').each(function() {
            var checkbox = $(this).find('input'),
                lamp = $(this).find('.sort__indicator');
            checkbox.on('change', function() {
                if ($(this).prop('checked')) {
                    lamp.addClass('active');
                } else {
                    lamp.removeClass('active');
                }
            })
        })
    }
    switchLamp();

    // JQueryUI Datepicker | Выбор даты
    $.datepicker.setDefaults($.datepicker.regional["ru"]);
    $(".js-datepicker").datepicker();

    // JQueryUI Slider | Ползунок
    $("#slider").slider({
        range: true,
        min: 0,
        max: 5000000,
        values: [0, 1999999],
        slide: function(event, ui) {
            $("#amount1").val(ui.values[0] + ' ₽');
            $("#amount2").val(ui.values[1] + ' ₽');
        }
    });
    $("#amount1").val($("#slider").slider("values", 0) + ' ₽');
    $("#amount2").val($("#slider").slider("values", 1) + ' ₽');



});