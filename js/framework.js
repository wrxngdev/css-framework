var isOpen = false;

$(".mobile").click(function() {
    if(!isOpen) {
        $(".mobile-menu").show();
        isOpen = true;
    } else {
        $(".mobile-menu").hide();
        isOpen = false;
    }
});