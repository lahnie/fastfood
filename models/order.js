const cotizar = document.getElementById("btnCotizar");
const inputRut = document.getElementById("inputRut");

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

  const rawResponse = await fetch("../data/createOrder.php", {
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
  });

  //redirect

  if (!rawResponse.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await rawResponse.json();

  const orderDetailViewURL = `../view/orderDetailView.html?orderNumber=${json.id}`;

  window.location.replace(orderDetailViewURL);
});

//validación de letras

inputRut.addEventListener("keypress", function (e) {
  const charCode = e.which ? e.which : e.keyCode;
  const charStr = String.fromCharCode(charCode).toUpperCase();

  if (!/^[0-9K]$/.test(charStr) && charCode !== 8 && charCode !== 9) {
    e.preventDefault();
  }
});

//validación de rut

function validarRut(rut) {
  var valor = rut.value.replace(".", "");

  valor = valor.replace("-", "");

  cuerpo = valor.slice(0, -1);
  dv = valor.slice(-1).toUpperCase();

  rut.value = cuerpo + "-" + dv;

  if (cuerpo.length < 7) {
    rut.setCustomValidity("RUT Incompleto");
    return false;
  }

  suma = 0;
  multiplo = 2;

  for (i = 1; i <= cuerpo.length; i++) {
    index = multiplo * valor.charAt(cuerpo.length - i);
    suma = suma + index;

    if (multiplo < 7) {
      multiplo = multiplo + 1;
    } else {
      multiplo = 2;
    }
  }

  dvEsperado = 11 - (suma % 11);

  dv = dv == "K" ? 10 : dv;
  dv = dv == 0 ? 11 : dv;

  if (dvEsperado != dv) {
    rut.setCustomValidity("RUT Inválido");
    return false;
  }

  rut.setCustomValidity("");
}
