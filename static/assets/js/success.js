$(document).ready(function () {
    $(".close-btn").click(function () {
        $(".success-overlay").fadeOut();
        $(".success-overlay").fadeOut(1000);
    });

    $(document).click(function (e) {
        if ($(e.target).is('.success-overlay')) {
            $(".success-overlay").fadeOut();
            $(".asuccesspply-overlay").fadeOut(1000);
        }
    });
});