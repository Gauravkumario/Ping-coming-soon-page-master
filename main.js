var inputt = document.getElementById("mail");
inputt.style.border = "hsl(223, 100%, 88%) solid thin";

function validation() {
    var form = document.getElementById('form');
    var email = document.getElementById('mail').value;
    var text = document.getElementById("mail-error");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern))
    {
        text.textContent = "Your mail has been submitted.";
        text.style.color = "green";
        text.style.display = "block";
        document.getElementById("btn").style.marginBottom = "1.3rem";
    }

    else
    {
        inputt.style.border = "hsl(223, 100%, 88%) solid thin !important";
        document.getElementById("btn").style.marginBottom = "1.3rem";
        text.textContent = "Please provide a valid email address";
        text.style.display = "block";
    }
}