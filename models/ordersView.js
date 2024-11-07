async function getOrders() {
  const dateFilter = document.getElementById("dateFilter");
  const url = `../data/orders.php?dateFilter=${dateFilter.value}`;


  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

async function drawOrders() {
  const orders = await getOrders();
  let ordersHTML = "";

  for (let index = 0; index < orders.length; index++) {
    const order = orders[index];

    const orderTemplate = `<a class="resultAnchor" href="../view/orderDetailView.html?orderNumber=${order.id}">
                <div class="result">
                    <div class="numeropedido">pedido #${order.id}</div>
                    <div class="fecha">${order.created_date}</div>
                </div>
                </a>`;

    ordersHTML += orderTemplate;
  }

  const resultBox = document.getElementById("results");
  resultBox.innerHTML = ordersHTML;
}

drawOrders();

const dateFilter = document.getElementById("dateFilter");
dateFilter.addEventListener("change", () => {
  drawOrders();
});
