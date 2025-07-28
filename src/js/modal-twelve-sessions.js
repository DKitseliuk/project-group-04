(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-backdrop-twelve-sessions-open]"),
      closeModalBtn: document.querySelector("[data-backdrop-twelve-sessions-close]"),
      modal: document.querySelector("[data-backdrop-twelve-sessions]"),
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