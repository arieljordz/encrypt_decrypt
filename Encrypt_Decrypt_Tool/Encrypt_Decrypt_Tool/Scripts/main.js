// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.


function Encrypt() {
    $("#Input").val();
    $.ajax({
        url: "../HomeController/Encrypt",
        type: 'POST',
        data: { toEncrypt: $("#Input").val(), useHashing: true},
        success: function (res) {
            if (res.success == true) {
                $("#Output").val("sdasdaEncrypt");
            } else {
                $("#Input").val("werwer");
            }
        }
    });
}
function Decrypt() {
    $("#Input").val();
    $.ajax({
        url: "../HomeController/Decrypt",
        type: 'POST',
        data: { cipherString: $("#Input").val(), useHashing: true },
        success: function (res) {
            if (res.success == true) {
                $("#Output").val("sdasdaDecrypt");
            } else {
                $("#Input").val("werwer");
            }
        }
    });
}