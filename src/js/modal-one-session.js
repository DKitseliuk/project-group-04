(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-backdrop-one-session-open]"),
      closeModalBtn: document.querySelector("[data-backdrop-one-session-close]"),
      modal: document.querySelector("[data-backdrop-one-session]"),
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