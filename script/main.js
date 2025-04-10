document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.nav_menu a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
 
    const scrollToTopButton = document.getElementById('scrollToTop');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });
 
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
 
 });
 document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("authModal");
  const btnAuth = document.querySelector(".btn_auth");
  const closeBtn = document.querySelector(".close");

  btnAuth.addEventListener("click", () => {
      modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});
