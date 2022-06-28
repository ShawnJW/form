function submitform()
{

    // (A) GET FORM DATA
    var form = document.getElementById("testForm");
    var data = new FormData(form);

    // (B) AJAX REQUEST
    // (B1) POST DATA TO SERVER, RETURN RESPONSE AS TEXT
    fetch("our-server.html", { method:"POST", body:data })
        .then(res=>res.text())

        // (B2) SHOW MESSAGE ON SERVER RESPONSE
        .then((response) => {
            console.log(response);
            if (response == "OK") { alert("SUCCESSFUL!"); }
            else { alert("FAILURE!"); }
        })

        // (B3) OPTIONAL - HANDLE FETCH ERROR
        .catch((err) => { console.error(err); });

    // (C) PREVENT FORM SUBMIT
    return false;
    // document.getElementsByClassName('form-container').style.display = "none";
    // document.getElementById('thank-you').style.display = "block";
    // document.testForm.submit();
}

function ajaxpost () {

}