// Убавляем кол-во по клику
$('.quantity_inner .bt_minus').click(function() {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
});
// Прибавляем кол-во по клику
$('.quantity_inner .bt_plus').click(function() {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
}); 
// Убираем все лишнее и невозможное при изменении поля
$('.quantity_inner .quantity').bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
        this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'));
    }    
});
$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"
        }, {
            duration: 700,
            easing: 'swing'
            });
            return false;
    });
});

$('.callback-btn').on('click', function() {
    $('.callback').addClass('active');
});
$('.close-modal-btn').on('click', function() {
    $('.modal').removeClass('active');
});
$('.cart-btn').on('click', function() {
    $('.cart').addClass('active');
});
$('.programm-btn').on('click', function() {
    $('.cart-added').addClass('active');
    $('.cart-btn-layer').addClass('active');
    let currentValue = $('.product-count').val();
    console.log(currentValue);
    let newValue = +currentValue + 1;
    console.log(newValue);
    $('.product-count').val(newValue);
});
$('.to-cart').on('click', function() {
    $('.cart-added').removeClass('active');
    $('.cart').addClass('active');
});
