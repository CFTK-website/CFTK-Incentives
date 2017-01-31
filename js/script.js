function slideIncentive(incentive) {
    var amountArray = [150, 200, 500, 750, 1000, 1500, 2000];
    var counter = 0;
    if (incentive >= 150) {
        $('#error-text').slideUp(400, function() {
            for (i = 0; i < amountArray.length; i++) {
                if (incentive >= amountArray[i]) {
                    var id = '#' + amountArray[i];
                    $(id).slideDown('slow');
                    counter++;
                }
            }

            for (i = counter; i < amountArray.length; i++) {
                var id = '#' + amountArray[i];
                $(id).slideUp('slow');
            }
        });
    } else {
        for (i = counter; i < amountArray.length; i++) {
            var id = '#' + amountArray[i];
            $(id).slideUp('slow');
        }
        $('#error-text').slideDown('slow');
    }
}

$(document).ready(function() {
    $('#submit').click(function() {
        var amount = $('input[name=amount]').val();
        if (amount.charAt(0) == '$') {
            amount = amount.substring(1, amount.length);
        }
        slideIncentive(amount);
    });
});