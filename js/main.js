document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
    // Function to remove 'active' class if viewport is mobile
    function removeActiveClassOnMobile() {
      if (window.innerWidth < 992) { // Mobile view is less than 992px
        navLinks.forEach((link) => link.classList.remove("active"));
      }
    }
  
    // Add click event listener to each nav link
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        // Remove 'active' class from all nav links
        navLinks.forEach((navLink) => navLink.classList.remove("active"));
        
        // Add 'active' class to the clicked nav link
        this.classList.add("active");
      });
    });
  
    // Remove 'active' class on window resize if in mobile view
    window.addEventListener("resize", removeActiveClassOnMobile);
  
    // Also check on initial load
    removeActiveClassOnMobile();
  });

  document.getElementById("BookTable").addEventListener("click" , function(){
    const contactNav = document.getElementById("contact-nav")
    document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'))
    contactNav.classList.add('active')
  })