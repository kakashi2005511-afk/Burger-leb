/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.querySelector(".nav-menu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

    });

});


/* =========================
   MENU FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");

const foodCards = document.querySelectorAll(".food-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;


        /* Active button */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        /* Filter cards */

        foodCards.forEach(card => {

            const category = card.dataset.category;


            if (filter === "all" || category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================
   CART
========================= */

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");

const addButtons = document.querySelectorAll(".add-cart");


addButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.textContent = cartCount;


        /* Button feedback */

        const oldText = button.textContent;

        button.textContent = "✓ Added";

        button.style.background = "#d7aa55";

        button.style.color = "#111";


        setTimeout(() => {

            button.textContent = oldText;

            button.style.background = "";

            button.style.color = "";

        }, 1000);

    });

});


/* =========================
   RESERVATION
========================= */

const reservationForm =
    document.getElementById("reservationForm");


reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    const phone =
        document.getElementById("phone").value;


    const date =
        document.getElementById("date").value;


    const guests =
        document.getElementById("guests").value;


    alert(
        "Thank you, " + name +
        "!\n\n" +
        "Your reservation request has been received." +
        "\n\n" +
        "Date: " + date +
        "\nGuests: " + guests +
        "\nPhone: " + phone
    );


    reservationForm.reset();

});


/* =========================
   SET MINIMUM DATE
========================= */

const dateInput =
    document.getElementById("date");


const today =
    new Date().toISOString().split("T")[0];


dateInput.min = today;


/* =========================
   SCROLL ANIMATION
========================= */

const cards =
    document.querySelectorAll(".food-card");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform = "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(card);

});