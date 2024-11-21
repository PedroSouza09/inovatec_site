AOS.init();

// Tabbed Menu
function openMenu(evt, menuName) {
    var i, x, tablinks
    x = document.getElementsByClassName('menu')
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }
    tablinks = document.getElementsByClassName('tablink')
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' w3-dark-grey', '')
    }
    document.getElementById(menuName).style.display = 'block'
    evt.currentTarget.firstElementChild.className += ' w3-dark-grey'
  }
  document.getElementById('myLink').click()
  
  // Script to open and close sidebar
  function w3_open() {
    document.getElementById('mySidebar').style.display = 'block'
    document.getElementById('myOverlay').style.display = 'block'
  }
  
  function w3_close() {
    document.getElementById('mySidebar').style.display = 'none'
    document.getElementById('myOverlay').style.display = 'none'
  }

  // mensagem 
const checkoutBtn = document.getElementById('checkout-btn')

checkoutBtn.addEventListener('click', function () {
    Toastify({
      text: 'Agradecemos pela sua sugestão!',
      duration: 3000,
      close: true,
      gravity: 'top',
      position: 'right',
      stopOnFocus: true,
      style: {
        background: '#54c67a'
      }
    }).showToast()

    return
  })

function enviarFormulario() {
  // Lógica de envio do formulário (exemplo de mensagem no console)
  console.log("Formulário enviado!");

  // Limpa o campo de entrada
  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
}

const openModalButton1 = document.querySelector("#open-modal1");
const openModalButton2 = document.querySelector("#open-modal2");
const openModalButton3 = document.querySelector("#open-modal3");
const closeModalButton1 = document.querySelector("#close-modal1");
const closeModalButton2 = document.querySelector("#close-modal2");
const closeModalButton3 = document.querySelector("#close-modal3");
const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2");
const modal3 = document.querySelector("#modal3");
const fade = document.querySelector("#fade");

// Funções para abrir e fechar modais
const openModal = (modal) => {
  modal.classList.remove("hide");
  fade.classList.remove("hide");
};

const closeModal = (modal) => {
  modal.classList.add("hide");
  fade.classList.add("hide");
};

// Evento para fechar ao clicar no fade
fade.addEventListener("click", () => {
  [modal1, modal2, modal3].forEach((modal) => {
    if (!modal.classList.contains("hide")) closeModal(modal);
  });
});

// Eventos para abrir e fechar modais específicos
openModalButton1.addEventListener("click", () => openModal(modal1));
closeModalButton1.addEventListener("click", () => closeModal(modal1));

openModalButton2.addEventListener("click", () => openModal(modal2));
closeModalButton2.addEventListener("click", () => closeModal(modal2));

openModalButton3.addEventListener("click", () => openModal(modal3));
closeModalButton3.addEventListener("click", () => closeModal(modal3));
