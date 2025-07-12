
    const sidebar = document.querySelector(".side-bar");
    const openBtn = document.querySelector(".three");
    const closeBtn = document.querySelector(".x i");

    function showNavbar() {
        sidebar.style.display = "block";
    }

    function hideNavbar() {
        sidebar.style.display = "none";
    }

    openBtn.addEventListener("click", showNavbar);
    closeBtn.addEventListener("click", hideNavbar);


