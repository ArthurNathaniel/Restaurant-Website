emailjs.init("pTaqTZOS5Laa7Bddx");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    changeSubmitButtonText("Please wait, your order is being processed...");
    sendMail();
  });

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    address: document.getElementById("address").value,
    gps: document.getElementById("gps").value,
    additionalmessage: document.getElementById("additionalmessage").value,
    FodOrder: document.getElementById("address-textarea").value,
  };

  const serviceID = "service_zm0ml4s";
  const templateID = "template_1fc7t4q";

  emailjs.send(serviceID, templateID, params).then(
    function (response) {
      console.log("Email sent successfully:", response);
      alert("Your order has been sent! We will get back to you soon.");
      clearForm(); // Optionally, you can call a function to clear the form after successful submission.
      changeSubmitButtonText("Submit"); // Reset the submit button text after successful submission.
    },
    function (error) {
      console.error("Order failed to send:", error);
      alert(
        "Sorry, there was an error sending your order. Please try again later."
      );
      changeSubmitButtonText("Submit"); // Reset the submit button text after unsuccessful submission.
    }
  );
}

function changeSubmitButtonText(text) {
  document.getElementById("submitBtn").value = text;
}

function clearForm() {
  document.getElementById("contact-form").reset();
}
