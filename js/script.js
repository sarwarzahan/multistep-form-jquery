
$(document).ready(function() {
    var currentContainer = 0;
    //Display first container
    //$('.question-container:first-child').addClass('active_panel');
    $('.question-container:first-child').fadeIn();

    $( "#raq_back" ).click(function() {
        nextPrev(-1);
    });
    $( "#raq_next" ).click(function() {
        nextPrev(1);
    });

    /**
     * Show current
     * @param n
     */
    function showTab(n) {
        $(".question-container").eq(n).addClass('active_panel');
        if (n == 0) {
            $("#raq_back").css('display','none');
        } else {
            $("#raq_back").css('display','inline');
        }
        if (n == ($(".question-container").length - 1)) {
            $("#raq_next").prop('value', 'Submit');
        } else {
            $("#raq_next").prop('value', 'Next');
        }
    }

    /**
     * Click prev next functionality
     * @param n
     * @returns {boolean}
     */
    function nextPrev(n) {
        if (n == 1 && !validateForm()) return false;
        $(".question-container").eq(currentContainer).fadeOut();
        currentContainer = currentContainer + n;
        if (currentContainer >= $(".question-container").length) {
            $("#raq_questions").submit();
            return false;
        }
        showTab(currentContainer);
    }

    /**
     * Form Validation
     * @returns {boolean}
     */
    function validateForm() {
        var valid = true;
        var input = $(".question-container").eq(currentContainer).find('input');
        if (input.val() == '') {
            input.addClass('invalid');
            valid = false;
        }

        return valid;
    }
});
