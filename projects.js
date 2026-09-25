document.addEventListener("DOMContentLoaded", () => {


    /* =========================
       MOBILE MENU
    ========================== */

    const menuBtn =
        document.getElementById("menuBtn");

    const menu =
        document.getElementById("menu");


    if (menuBtn && menu) {

        menuBtn.addEventListener("click", () => {

            const isOpen =
                menu.classList.toggle("active");


            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* بستن منو بعد از کلیک */

        document
            .querySelectorAll("#menu a")
            .forEach((link) => {

                link.addEventListener("click", () => {

                    menu.classList.remove("active");

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });

    }



    /* =========================
       PROJECT FILTERS
    ========================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        document.querySelectorAll(".project-card");


    filterButtons.forEach((button) => {

        button.addEventListener("click", () => {


            /* فیلتر انتخاب‌شده */

            const filter =
                button.dataset.filter;


            /* حذف active از همه */

            filterButtons.forEach((btn) => {

                btn.classList.remove("active");

            });


            /* فعال کردن دکمه فعلی */

            button.classList.add("active");


            /* نمایش کارت‌های مربوط */

            projectCards.forEach((card) => {

                const category =
                    card.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });



    /* =========================
       FOOTER YEAR
    ========================== */

    const yearElement =
        document.getElementById("year");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});