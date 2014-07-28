/*
    Form Validator Plugin
    Created By: Jose Nino N. Garcia

    Description:
    Form Validator is a jQuery plugin that validates the input fields if the user submits the form without
    value. There are also some other things that the form validator can do, it can validates the input like
    decimals, numbers vs. Letter and others.
*/

(function ($) {
    $(document).ready(function () {

        $.fn.formValidator = function (options) {

            var doc = $(document);
            var element = $(this);
            var inputBoxes = element.find("input[type='text']");
            var submitButton = element.find("input[type='button']");

            var settings = $.extend({
                blankError: "Please fill up input box.",
                errorMessageIdentifier: "errorMessage"
            }, options);

            var errorIdentifier = "#" + settings.errorMessageIdentifier;


            inputBoxes.focus(function () {
                styles($(this));
            });

            inputBoxes.focusout(function () {
                focusOutButton($(this));
            });

            submitButton.click(function () {

                //                var num = "";

                //                inputBoxes.each(function () {
                //                    var $this = $(this);
                //                    if ($this.val().length == 0) {
                //                        num = "-1";
                //                    } else {
                //                        num = "1";
                //                    }
                //                });

                //                switch (num) {
                //                    case "-1":
                //                        errorMessage(errorIdentifier, settings.blankError);
                //                        break;

                //                }

                var string = "";

                var emptyInputFields = inputBoxes.filter(function () {
                    return this.value == "";
                });

                emptyInputFields.each(function () {
                    //string += $(inputBoxes).index(this) + 1;
                    string += $(this).attr("elem-name");
                });

                var array1 = [',lue'];

                array1.push(string);

                console.log(array1);

                element.find("input[type='text']:nth-child(2)").val("Hello There");

                for (var i = 0; i < array1.length; i++) {
                    console.log(array1[i]);
                }

            });

            $(element).mousemove(function () {
                $(errorIdentifier).delay(1000).fadeOut();
            });

        };

        function styles(elem) {
            elem.css("border", "2px solid red");
        }

        function focusOutButton(elem) {
            elem.css("border", "1px solid #d2d2d2");
        }

        function errorMessage(element, errorMsg) {
            $(element).html(errorMsg).show();
            errorStyle(element);
        }

        function errorStyle(errorSelector) {

            var pixels = "px";

            $(errorSelector).css("position", "absolute");
            $(errorSelector).css("background-color", "#ffbcbc");
            $(errorSelector).css("padding", "5" + pixels);
            $(errorSelector).css("border-radius", "5" + pixels);
        }

        function hideMessage(selector) {
            setTimeout(function () {
                $(selector).fadeOut('fast');
            }, 1000);
        }

        function optionAction(action) {

        }

    });

} (jQuery));