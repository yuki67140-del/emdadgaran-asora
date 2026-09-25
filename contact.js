const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {

        const isOpen = menu.classList.toggle("active");

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });

    document.querySelectorAll("#menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");

        });

    });
}


const toast = document.getElementById("toast");

function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 1800);
}


document.querySelectorAll("[data-copy]").forEach(button => {

    button.addEventListener("click", async () => {

        const value = button.dataset.copy;

        try {

            await navigator.clipboard.writeText(value);

            showToast("با موفقیت کپی شد ✓");

        } catch {

            showToast(
                "کپی انجام نشد؛ متن را دستی انتخاب کنید."
            );

        }

    });

});


const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}