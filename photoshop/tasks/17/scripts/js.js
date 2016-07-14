$(document).ready(function() {


// drop-down-menu
    function dropDown(menu, drop) {
        menu.mouseover(function() {
                drop.css("display", "block");
            })
            .mouseout(function() {
                drop.css("display", "none");
            })
    };

    dropDown($('#clothing'), $('#clothing .drop-down-categories'));
    dropDown($('#brands'), $('#brands .drop-down-categories'));
    dropDown($('#journal'), $('#journal .drop-down-categories'));
    dropDown($('#search'), $('.drop-down-search'));
 
 // end drop-down-menu

// carousel

    $('.glyphicon-chevron-left').mouseover(function() {
            $(this).css('background', 'url(images/arrow-rollover-click.png)')
        })
        .mouseout(function() {
            $(this).css('background', 'url(images/arrow-rollover.png)')
        })


    $('.glyphicon-chevron-right').mouseover(function() {
            $(this).css('background', 'url(images/arrow-rollover-click.png)')
        })
        .mouseout(function() {
            $(this).css('background', 'url(images/arrow-rollover.png)')
        })

// end carousel


// banner

    $('#banner-close').click(function() {
            $('#banner').css("display", "none");
        })
    
// end banner


})
