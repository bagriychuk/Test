$(document).ready(function () {
    $(".registration_2").hide();
    $(".log_entry_page").hide();

    $("#back").click(function () {
        $(".registration").slideUp(500);
        $(".sign").slideDown(500);
    })

    $("#GOUP_logIN").click(function () {
        $(".registration_2").slideDown(800);
        $(".sign").slideUp(500);
    });

    $("#GONEXT").click(function () {
        $(".log_entry_page").slideDown(800);
        $(".sign_entry_page").slideUp(500);
    });
    
    var registr = $("#registration");
    registr.click(function () {
        var number_sign = $("#number_sign").val();
        var name_sign = $("#name_sign").val();
        var password_sign = $("#password_sign").val();
        var password_repeat_sign = $("#password_repeat_sign").val();

        if (password_sign === password_repeat_sign) {
            $("#number_sign").val('');
            $("#name_sign").val('');
            $("#password_sign").val('');
            $("#password_repeat_sign").val('');
            $.ajax({
                url: "registr.php",
                type: "POST",
                data: {
                    number_sign: number_sign,
                    name_sign: name_sign,
                    password_sign: password_sign
                },
                beforeSend: function () {
                    $(".head").hide()
                },
                success: function () {
                    $("#number_sign").val('');
                    $("#name_sign").val('');
                    $("#password_sign").val('');
                    $("#password_repeat_sign").val('');
                }
            });
        } else {
            alert("Пароли не совпадают");
            $("#password_sign").val('');
            $("#password_repeat_sign").val('');
        }
    });
})
