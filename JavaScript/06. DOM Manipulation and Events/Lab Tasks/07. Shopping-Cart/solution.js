function solve() {
   const addButtons = Array.from(document.querySelectorAll("button.add-product"));
   const checkoutBtn = document.querySelector("button.checkout");
   const textarea = document.querySelector("textarea");
   let boughtProducts = [];
   let totalPrice = 0;


   addButtons.forEach((btn) => {
      btn.addEventListener("click", addElementInTheCart);
   });

   function addElementInTheCart(e) {
      const currentProduct = e.currentTarget.parentNode.parentNode;
      const productTitle = currentProduct.querySelector(".product-title").textContent;
      const productPrice = currentProduct.querySelector(".product-line-price").textContent;

      if (!boughtProducts.includes(productTitle)) {
         boughtProducts.push(productTitle);
      }
      totalPrice += Number(productPrice);

      textarea.value += `Added ${productTitle} for ${productPrice} to the cart.\n`;
   }
   checkoutBtn.addEventListener('click', checkout);

   function checkout(e) {
      textarea.value += `You bought ${boughtProducts.join(", ")} for
      ${totalPrice.toFixed(2)}.`;

      addButtons.forEach((btn) => {
         btn.removeEventListener('click', addElementInTheCart);
         // btn.disabled = true;
      });
   }
}