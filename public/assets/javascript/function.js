// Contact Form Handler
function submitForm() {
  let name = document.getElementById("input-name").value;
  console.log(name);
  let email = document.getElementById("input-email").value;
  console.log(email);
  let phone = document.getElementById("input-phone").value;
  console.log(phone);
  let subject = document.getElementById("input-option").value;
  console.log(subject);
  let message = document.getElementById("input-message").value;
  console.log(message);

  if (name == "") {
    return alert("Name input fields must be not empty");
  } else if (email == "") {
    return alert("Email input fields must be not empty");
  } else if (phone == "") {
    return alert("Phone input fields must be not empty");
  } else if (subject == "") {
    return alert("Subject input fields must be not empty");
  } else if (message == "") {
    return alert("Message input fields must be not empty");
  }

  const emailReciver = "ujangpudin04@gmail.com";

  const a = document.createElement("a");

  a.href = `mailto:${emailReciver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}`;
  a.target = "_blank";
  a.click();
  let dataObject = {
    name,
    email,
    phone,
    subject,
    message,
  };
  console.log(dataObject);
}
