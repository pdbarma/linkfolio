document.addEventListener("DOMContentLoaded", function () {
    const links = {
        instagram: "https://www.instagram.com/314rsa",
        portfolio: "https://pdbarma.github.io/314RSA/",
        linkedin: "https://www.linkedin.com/in/pirsa-debbarma",
        twitter: "https://x.com/314xrsa"
    };

    document.querySelectorAll(".link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const id = this.id;
            if (id === "portfolio") {
                // Navigate to portfolio in the same tab
                return;
            }
            event.preventDefault();
            if (links[id]) {
                window.open(links[id], "_blank");
            }
        });
    });
});
