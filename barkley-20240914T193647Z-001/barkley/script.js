$(document).ready(function() {
$('.anchorlink').on('click', function() {
    $('.anchorlink').removeClass('selected');
    $(this).addClass('selected');
});
});




$(document).ready(function() {
    $('.link-block').on('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        $('html, body').animate({ scrollTop: 0 }, 'slow'); // Smooth scroll to the top
    });
});



