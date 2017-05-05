Stripe.setPublishableKey('pk_test_9doX0SadE8V1iO1zOSuUwpmH');
var $form = $('#checkout-form');

$('#card-number').val('4242424242424242');
$('#card-cvc').val('123');
$('#card-expiry-month').val('12');
$('#card-expiry-year').val('2017');
$('#card-name').val('TESTAalala');
$('#name').val('MINa');
$('#address').val('Alex');

$form.submit(function () {
    $form.find('button').prop('disabled', true);
    Stripe.card.createToken({
        number: $('#card-number').val(),
        cvc: $('#card-cvc').val(),
        exp_month: $('#card-expiry-month').val(),
        exp_year: $('#card-expiry-year').val(),
        name: $('#card-name').val(),
    }, stripeResponseHandler);

    return false;
})

function stripeResponseHandler(status, response) {

    // Grab the form:

    if (response.error) { // Problem!

        // Show the errors on the form
        $('#payment-errors').show();
        $('#payment-errors').text(response.error.message);
        $form.find('button').prop('disabled', false); // Re-enable submission

    } else { // Token was created!
        $('#payment-errors').hide();

        // Get the token ID:
        var token = response.id;

        // Insert the token into the form so it gets submitted to the server:
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));

        // Submit the form:
        $form.get(0).submit();

    }
}
