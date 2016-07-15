$(document).ready(function() {


    // drop-down-menu
    function dropDown(menu) {
        menu.mouseover(function() {
                $(this).children(".drop-down-categories").css("display", "block");
                $(this).children(".drop-down-arrow").css("display", "block");

            })
            .mouseout(function() {
                $(this).children(".drop-down-categories").css("display", "none");
                $(this).children(".drop-down-arrow").css("display", "none");
            })
    };

    dropDown($('#clothing'));
    dropDown($('#brands'));
    dropDown($('#journal'));

    //search drop-down
    $('#search').click(function() {
        $('.drop-down-search').css("display", "block");
        $('.drop-down-arrow-search').css("display", "block");

    });

    $('#search-x').click(function() {
        event.stopPropagation();
        $('.drop-down-search').css("display", "none");
        $('.drop-down-arrow-search').css("display", "none");
    });


    // carousel

    $('.glyphicon-chevron-left').mouseover(function() {
            $(this).css('background', 'url(images/arrow-rollover-click.png)')
        })
        .mouseout(function() {
            $(this).css('background', 'url(images/arrow-rollover.png)')
        });

    $('.glyphicon-chevron-right').mouseover(function() {
            $(this).css('background', 'url(images/arrow-rollover-click.png)')
        })
        .mouseout(function() {
            $(this).css('background', 'url(images/arrow-rollover.png)')
        });


    // banner
    $('#banner-close').click(function() {
        $('#banner').css("display", "none");
    });


    //close video
    $('.close-video').click(function() {
        $('.video').css("display", "none");
    });



})
