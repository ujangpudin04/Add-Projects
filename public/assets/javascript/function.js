// Contact Form Handler
function submitForm() {
  let name = document.getElementById("name").value;
  console.log(name);
  let email = document.getElementById("email").value;
  console.log(email);
  let phone = document.getElementById("phone").value;
  console.log(phone);
  let options = document.getElementById("options").value;
  console.log(options);
  let message = document.getElementById("message").value;
  console.log(message);

  if (name == "") {
    return alert("Name input fields must be not empty");
  } else if (email == "") {
    return alert("Email input fields must be not empty");
  } else if (phone == "") {
    return alert("Phone input fields must be not empty");
  } else if (options == "") {
    return alert("Subject input fields must be not empty");
  } else if (message == "") {
    return alert("Message input fields must be not empty");
  }

  const emailReciver = "ujangpudin04@gmail.com";

  const a = document.createElement("a");

  a.href = `mailto:${emailReciver}?subject=${options}&body=Hello my name ${name}, ${options}, ${message}`;
  a.target = "_blank";
  a.click();
  let dataObject = {
    name,
    email,
    phone,
    options,
    message,
  };
  console.log(dataObject);
}
