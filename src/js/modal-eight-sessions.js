(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-backdrop-eight-sessions-open]"),
      closeModalBtn: document.querySelector("[data-backdrop-eight-sessions-close]"),
      modal: document.querySelector("[data-backdrop-eight-sessions]"),
    };
  
    if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) return;

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