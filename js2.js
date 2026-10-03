function showcart(cartId) {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  if (cart.includes(cartId)) {
    cart = cart.filter(function (id) { return id !== cartId; });   // already in cart: remove it
  } else {
    cart.push(cartId);                                             // not in cart: add it
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updatebutton(cartId);
}

function updatebutton(cartId) {
  const btn = document.querySelector("button[onclick=\"showcart('" + cartId + "')\"]");
  if (!btn) return;
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  btn.innerHTML = cart.includes(cartId) ? "<b>Remove from cart</b>" : "<b>Add to cart</b>";
}

function updateallbuttons() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.forEach(updatebutton);
}

function loadcart() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.style.display = "grid";
  });
}