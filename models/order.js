const cotizar = document.getElementById("btnCotizar");

cotizar.addEventListener("click", async (e) => {
  const form = document.getElementById("miForm");
  if (miForm.checkValidity() !== true) {
    return;
  }
  e.preventDefault();

  const inputName = document.getElementById("inputName");
  const inputRut = document.getElementById("inputRut");
  const inputAddress = document.getElementById("inputAddress");
  const inputPhoneNumber = document.getElementById("inputPhoneNumber");
  const inputProductName = document.getElementById("inputProductName");
  const inputValue = document.getElementById("inputValue");
  const inputProductDescription = document.getElementById(
    "inputProductDescription"
  );

  const rawResponse = await fetch(
    "/fastfood/data/createOrder.php",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputName.value,
        rut: inputRut.value,
        address: inputAddress.value,
        phone_number: inputPhoneNumber.value,
        product_name: inputProductName.value,
        price: inputValue.value,
        product_description: inputProductDescription.value,
      }),
    }
  );

  //redirect

  if (!rawResponse.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await rawResponse.json();
  
  const orderDetailViewURL = `/fastfood/view/orderDetailView.html?orderNumber=${json.id}`;

  window.location.replace(orderDetailViewURL);
});
