async function getOrder() {
  let params = new URLSearchParams(document.location.search);
  let orderNumber = params.get("orderNumber");

  try {
    const rawResponse = await fetch(
      `../data/readOrder.php?orderNumber=${orderNumber}`
    );
    if (!rawResponse.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await rawResponse.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function drawOrder() {
  const order = await getOrder();
  let orderHTML = "";

  orderHTML = `<div class="item">
                <div class="cell">
                    <div class="label">
                        Nombre pedido
                    </div>
                    <div class ="data" id="orderName">
                        pedido ${order.id}
                    </div>
                </div>
                <div class="cell">
                    <div class="label">
                        Fecha
                    </div>
                    <div class ="data" id="date">
                        ${order.created_date}
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="cell">
                    <div class="label">
                        valor total
                    </div>
                    <div class ="data" id="value">
                        ${order.price}
                    </div>
                </div>
                <div class="cell">
                    <div class="label">
                        Estado
                    </div>
                    <div class ="data" id="status">
                        ${order.status}
                    </div>
                </div>
            </div>
            <div class="item itemFull">
                <div class="cell">
                    <div class="label">
                        Especificaciones producto
                    </div>
                    <div class ="data" id="description">
                        ${order.product_description}
                    </div>
                </div>
            </div>`;

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = orderHTML;
}

drawOrder();
