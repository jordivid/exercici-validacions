var errorMessage = new Map;
errorMessage.set("err_obligatori", "Aquest camp és obligatori");
errorMessage.set("err_provincia", "Seleccioni una provincia");
errorMessage.set("err_email", "Adreça e-mail no vàlida");
errorMessage.set("err_pass", "Hi ha d'haver 1 majúscula, 1 dígit i mínim 8 caràcters en total");
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
    let formValid = true;
    let nom = $("#nom").val().trim();
    let cognoms = $("#cognoms").val().trim();
    let provincia = $("#provincia").val();
    let email = $("#email").val().trim();
    let pass= $("#pass").val();
    let passc= $("#passc").val();

    if (nom == "") {
        $("#nom").addClass("is-invalid");
        $("#errNom").text(errorMessage.get("err_obligatori"));
        formValid = false;
    }

    if (cognoms == "") {
        $("#cognoms").addClass("is-invalid");
        $("#errCognoms").text(errorMessage.get("err_obligatori"));
        formValid = false;
    }

    if (provincia == "") {
        $("#provincia").addClass("is-invalid");
        $("#errProvincia").text(errorMessage.get("err_provincia"));
        formValid = false;
    }

    if(email == "") {
        $("#email").addClass("is-invalid");
        $("#errEmail").text(errorMessage.get("err_obligatori"));
        formValid = false;
    } else if(validaEmail(email) == false) {
        $("#email").addClass("is-invalid");
        $("#errEmail").text(errorMessage.get("err_email"));
        formValid = false;
    }

    if (validaPass(pass) == false) {
        $("#pass").addClass("is-invalid");
        $("#errPass").text(errorMessage.get("err_pass"));
        formValid = false;
    } else if (pass != passc) {
        $("#pass").addClass("is-invalid");
        $("#passc").addClass("is-invalid");
        $("#errPassc").text(errorMessage.get("err_confirmacio"));
        formValid = false;
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

function validaPass(pass) {
    let pattern = /((?=.*\d)(?=.*[A-Z]).{8,})/;
    if(pass.match(pattern) == null) {
        return false;
    } else {
        return true;
    }
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