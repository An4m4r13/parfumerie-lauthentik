/* =========================
DESCRIPTION DU PRODUIT
========================= */

function showProduct(name, image, description, price, promo = "") {

    const modal = document.getElementById("productModal");

    document.getElementById("modalName").textContent = name;

    document.getElementById("modalImage").src = image;

    document.getElementById("modalImage").alt = name;

    document.getElementById("modalDescription").textContent = description;


    /* =========================
    OFFRE AUTOMATIQUE
    ========================= */

    const offer = document.getElementById("modalOffer");

    if (price >= 15000) {

        offer.innerHTML =
            "🎁 1 parfum acheté = 2 échantillons de 5 ml offerts<br>" +
            "🚚 Livraison gratuite partout à Lomé";

    } else {

        offer.innerHTML = "";

    }


    /* =========================
    CODE PROMO
    ========================= */

    const promoElement = document.getElementById("modalPromo");

    if (promo !== "") {

        promoElement.textContent =
            "🏷️ Code promo : " + promo;

    } else {

        promoElement.textContent = "";

    }


    /* =========================
    WHATSAPP
    ========================= */

    const message =
        "Bonjour, je souhaite commander le parfum " + name + ".";

    document.getElementById("whatsappOrder").href =
        "https://wa.me/22890119604?text=" +
        encodeURIComponent(message);


    /* OUVRIR LA FENÊTRE */

    modal.classList.add("show");
}


/* =========================
FERMER LA DESCRIPTION
========================= */

function closeProduct() {

    const modal = document.getElementById("productModal");

    modal.classList.remove("show");
}


/* Fermer en cliquant à l'extérieur */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("productModal");

    if (event.target === modal) {

        closeProduct();

    }

});


/* =========================
RECHERCHE PRODUIT
========================= */

function searchProduct() {

    const input =
        document.getElementById("searchProduct");

    const search =
        input.value.toLowerCase().trim();

    const products =
        document.querySelectorAll(".product-card");


    products.forEach(function(product) {

        const name =
            product.querySelector("h2")
            .textContent
            .toLowerCase();


        if (name.includes(search)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}
/* =========================
OFFRE AUTOMATIQUE SUR LES CARTES
========================= */

function addProductOffers() {

    const products = document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const priceElement = product.querySelector(".product-price");

        if (!priceElement) {
            return;
        }

        const priceText = priceElement.textContent;

        const price = Number(priceText.replace(/\D/g, ""));

        if (price >= 15000) {

            const offer = document.createElement("div");

            offer.className = "product-offer";

            offer.innerHTML =
                "🎁 1 parfum acheté = 2 échantillons de 5 ml offerts<br>" +
                "🚚 Livraison gratuite partout à Lomé";

            priceElement.insertAdjacentElement("afterend", offer);
        }

    });
}
document.addEventListener("DOMContentLoaded", function() {
    addProductOffers();
});

// BOUTON RETOUR EN HAUT
document.addEventListener("DOMContentLoaded", function () {
    const bouton = document.getElementById("backToTop");

    if (!bouton) return;

    window.addEventListener("scroll", function () {
        bouton.style.display = window.scrollY > 300 ? "block" : "none";
    });

    bouton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
