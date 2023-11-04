import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const Modal = forwardRef(({ children, buttonCap }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button>{buttonCap}</button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
