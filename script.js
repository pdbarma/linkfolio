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
            if (links[id]) {
                window.open(links[id], "_blank");
            }
        });
    });
});
