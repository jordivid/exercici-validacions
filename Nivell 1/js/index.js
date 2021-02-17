var formValid;
var errorMessage = new Map;
errorMessage.set("err_obligatori", "Aquest camp és obligatori");
errorMessage.set("err_provincia", "Seleccioni una provincia");
errorMessage.set("err_email", "Adreça e-mail no vàlida");
errorMessage.set("err_confirmacio", "Les contrasenyes no coincideixen");

$(document).ready(function() {
    $("#frmRegistre").submit(function(e) {
        neteja();
        if (validacioFormulari() == false) {
            e.preventDefault();
        }
    });

    $("#cancel").click(function() {
        neteja();
    });
});

function validacioFormulari() {
    let nom = $("#nom").val().trim();
    let cognoms = $("#cognoms").val().trim();
    let provincia = $("#provincia").val();
    let email = $("#email").val().trim();
    let pass= $("#pass").val();
    let passc= $("#passc").val();
    formValid = true;

    if (nom == "") {
        notificaError("nom", "errNom", errorMessage.get("err_obligatori"));
    }

    if (cognoms == "") {
        notificaError("cognoms", "errCognoms", errorMessage.get("err_obligatori"));
    }

    if (provincia == "") {
        notificaError("provincia", "errProvincia", errorMessage.get("err_provincia"));
    }

    if(email == "") {;
        notificaError("email", "errEmail", errorMessage.get("err_obligatori"));
    } else if(validaEmail(email) == false) {
        notificaError("email", "errEmail", errorMessage.get("err_email"));
    }

    if (pass == "") {
        notificaError("pass", "errPass", errorMessage.get("err_obligatori"));
    } else if (pass != passc) {
        $("#pass").addClass("is-invalid");
        notificaError("passc", "errPassc", errorMessage.get("err_confirmacio"));
    }

    return formValid;
}

function validaEmail(email) {
    let pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(email.match(pattern) == null) {
        return false;
    } else {
        return true;
    }
}

function notificaError(idInput, idError, missatge) {
    $("#" + idInput).addClass("is-invalid");
    $("#" + idError).text(missatge);
    formValid = false;
}

function neteja() {
    $("#errNom").text("");
    $("#errCognoms").text("");
    $("#errProvincia").text("");
    $("#errEmail").text("");
    $("#errPass").text("");
    $("#errPassc").text("");
    $("#nom").removeClass("is-invalid");
    $("#cognoms").removeClass("is-invalid");
    $("#provincia").removeClass("is-invalid");
    $("#email").removeClass("is-invalid");
    $("#pass").removeClass("is-invalid");
    $("#passc").removeClass("is-invalid");
}