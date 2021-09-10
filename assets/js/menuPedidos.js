const divOfProducts = document.getElementById("pedidosList");

const divPizzas = document.getElementById("pizzasMenu");
const divPollos = document.getElementById("polloMenu");
const divSandwich = document.getElementById("sandwichMenu");

var ajax_url = "index.php?c=menu&a=getProducts";
var ajax_request = new XMLHttpRequest();
// Definimos una función a ejecutar cuándo la solicitud Ajax tiene alguna información
ajax_request.onreadystatechange = function () {
  // readyState es 4
  if (ajax_request.readyState == 4) {
    // Analizaos el responseText que contendrá el JSON enviado desde el servidor
    var jsonObj = JSON.parse(ajax_request.responseText);
    createProductsElements(jsonObj);
    // La variable jsonObj ahora contiene un objeto con los datos recibidos
  }
};

// Definimos como queremos realizar la comunicación
ajax_request.open("GET", ajax_url, true);

//Enviamos la solicitud
ajax_request.send();

function createProductsElements(jsonObj) {
  jsonObj.forEach((element) => {
    if (element.type === "pizza") {
      divPizzas.appendChild(createElement(element));
    } else if (element.type === "pollo") {
      divPollos.appendChild(createElement(element));
    } else if (element.type === "sdw") {
      divSandwich.appendChild(createElement(element));
    }
  });
}

function createElement(element) {
  const div = document.createElement("div");
  div.setAttribute("class", " col-md-4 forms");

  const img = document.createElement("img");
  img.setAttribute("src", element.urlImage);
  img.setAttribute("alt", element.name);
  img.setAttribute("class", "p-2");
  img.setAttribute("style", "width: 150px");

  const divImage = document.createElement("div");
  divImage.setAttribute("class", "d-flex justify-content-center");
  divImage.appendChild(img);

  const pPrice = document.createElement("p");
  pPrice.innerHTML = "$" + element.price;
  pPrice.setAttribute("class", "d-flex justify-content-center text-success");
  pPrice.setAttribute("value", element.price);

  const p = document.createElement("p");
  p.setAttribute("class", "d-flex justify-content-center");
  p.innerHTML = element.name;

  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("onClick", "agregarPedido()");
  //button.setAttribute("onClick","addProductOfList()");
  button.setAttribute(
    "class",
    "btn btn-primary btn-lg btn-block center-block button"
  );
  button.innerHTML = "PEDIR AHORA";

  const divButton = document.createElement("div");
  divButton.setAttribute("class", "d-flex justify-content-center");

  divButton.appendChild(button);

  div.appendChild(divImage);
  div.appendChild(pPrice);
  div.appendChild(p);
  div.appendChild(divButton);
  return div;
}

function addProductOfList() {
  const divPadre = event.target.parentNode.parentNode;
  const divprecio = divPadre.firstChild.nextSibling;
  const priceProduct = divprecio.getAttribute("value");
  const divNameProduct = divprecio.nextSibling;
  const nameProduct = divNameProduct.innerHTML;
  let existe = false;
  listOfProducts.forEach((element) => {
    if (element.producto === nameProduct) {
      element.cantidad = +element.cantidad + 1;
      repaintElements();
      existe = true;
    }
  });
  if (!existe) {
    listOfProducts.push({ producto: nameProduct, precio_unitario: priceProduct, cantidad: 1 });
    repaintElements();
  }
}

function buildProductItem(cant, name) {
  const divPrincipal = document.createElement("div");
  divPrincipal.setAttribute(
    "class",
    "mb-2 row w-100 shadow bg-white rounded item"
  );

  const pname = document.createElement("p");
  pname.setAttribute("class", "col-md-7");
  pname.innerHTML = name;

  const inputCant = document.createElement("input");
  inputCant.setAttribute("value", cant);
  inputCant.setAttribute("type", "number");
  inputCant.setAttribute("class", "col-md-3");
  inputCant.setAttribute("id", name);
  inputCant.setAttribute("onChange", "updateValue()");

  const buttonQuitar = document.createElement("button");
  buttonQuitar.setAttribute("class", "btn btn-light col-md-2 ");
  buttonQuitar.setAttribute("type", "button");
  buttonQuitar.setAttribute("onClick", "removeItem()");
  buttonQuitar.innerHTML = "X";

  divPrincipal.appendChild(buttonQuitar);
  divPrincipal.appendChild(pname);
  divPrincipal.appendChild(inputCant);

  divOfProducts.appendChild(divPrincipal);
}
function updateValue() {
  const nameProduct = event.target.id;
  console.log(nameProduct)
  listOfProducts.forEach((element) => {
    if (element.producto === nameProduct) {
      element.cantidad = +event.target.value;
    }
  });
  repaintElements();
}

function removeChilds() {
  const elements = document.querySelectorAll(".item");
  elements.forEach((element) => {
    element.remove();
  });
}

function removeItem() {
  const nameProduct = event.target.nextElementSibling.innerHTML;
  listOfProducts = listOfProducts.filter(
    (element) => element.producto !== nameProduct
  );
  repaintElements();
}

function repaintElements() {
    removeChilds();
    cleanAlertsError();
    sendDataToServer();
    let total = +0;
    listOfProducts.forEach((element) => {
      total += +element.precio_unitario * +element.cantidad;
      
      buildProductItem(element.cantidad, element.producto);
    }
  );
  const spanPrice = document.getElementById("totalPriceOfProducts");
  spanPrice.innerHTML = "$" + total;
}
