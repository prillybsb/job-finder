$(document).ready(function () {
    var btnmenumobile = $('.btn-menumobile');
    $(btnmenumobile).on('click', function () {
        $('.nav-container ul').toggleClass('open');
    });
});