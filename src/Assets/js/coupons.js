$(document).ready(function(){
    $('input').attr('disabled', 'disabled');

    $('#deleteCouponForm').submit(function(e){
        e.preventDefault();
        $('#deleteCouponDialog').modal('show');
    });

    $('#deleteCouponBtn').click(function(e){
        $('#deleteCouponForm')[0].submit();
        $('#deleteCouponDialog').modal('hide');
    });
});