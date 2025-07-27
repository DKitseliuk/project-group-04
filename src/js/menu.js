(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-backdrop-menu-open]"),
      closeModalBtn: document.querySelector("[data-backdrop-menu-close]"),
      modal: document.querySelector("[data-backdrop-menu]"),
  };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.modal.addEventListener("click", (event) => {
                                                        if (event.target === refs.modal) {
                                                            toggleModal();
                                                        }
                                                    }
                                );
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();