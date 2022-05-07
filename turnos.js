const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
}); 

const Clickbutton = document.querySelectorAll(".button")
Clickbutton.forEach(btn => {
      btn.addEventListener("click", () => {
        Swal.fire({
          title: "Añadido",
          text: "Se añadió al carrito",
          icon: "success",
          confirmButtonText: "Cool",
        }) 
  
        
      }) ;
   
  })