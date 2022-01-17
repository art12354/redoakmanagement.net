// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

function formSubmit(e) {
  e.preventDefault();
  var URL = "https://abc1234.execute-api.us-east-1.amazonaws.com/01/contact";

  var Namere = /[A-Za-z]{1}[A-Za-z]/;
  if (!Namere.test($("#name").val())) {
    alert("Name can not less than 2 char");
    return;
  }
  if ($("#email").val() == "") {
    alert("Please enter your email id");
    return;
  }
  var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  if (!reeamil.test($("#email").val())) {
    alert("Please enter valid email address");
    return;
  }

  var name = $("#name").val();
  var email = $("#email").val();
  var message = $("#message").val();
  var data = {
    name: name,
    email: email,
    message: message
  };

  $.ajax({
    type: "POST",
    url: "https://abc1234.execute-api.us-east-1.amazonaws.com/01/contact",
    dataType: "json",
    crossDomain: "true",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),


    success: function() {
      // clear form and show a success message
      alert("Successfull");
      document.getElementById("contact-form").reset();
      location.reload();
    },
    error: function() {
      // show an error message
      alert("UnSuccessfull");
    }
  });
}
