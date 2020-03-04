$(document).ready(function () {
    $(".apply-btn").click(function () {
        $(".apply-overlay").fadeIn().css("display", "flex");
        $(".apply-overlay").fadeIn(1000);
    });

    $(".send-btn").click(function () {
        $(".apply-overlay").fadeOut();
        $(".apply-overlay").fadeOut(1000);
    });

    $(".close-btn").click(function () {
        $(".apply-overlay").fadeOut();
        $(".apply-overlay").fadeOut(1000);
    });

    $(document).click(function (e) {
        if ($(e.target).is('.apply-overlay')) {
            $(".apply-overlay").fadeOut();
            $(".apply-overlay").fadeOut(1000);
        }
    });
});