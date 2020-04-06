import * as React from "react";
import clsx from "clsx";
import CloseIcon from "app-icons/close-icon.svg";

interface Props {
  children: React.ReactNode;
  className: string;
  title: string;
  onClose: (event: React.MouseEvent) => void;
}

export const Modal = (props: Props) => {
  const [open, setOpen] = React.useState(true);
  const closeModal = (event: React.MouseEvent) => {
    event.preventDefault;
    if (props.onClose) props.onClose(event);
    setOpen(false);
  };
  return (
    <div className={clsx("modal", { "modal--open": open })}>
      <div className="modal__content">
        <header className="modal__header">
          <p className="modal__title">{props.title}</p>
          <CloseIcon className="modal__close" onClick={closeModal} />
        </header>
        <section className={clsx("modal__body", props.className)}>
          {props.children}
        </section>
        <footer className="modal__footer"></footer>
      </div>
      <div className="modal__backdrop" onClick={closeModal}></div>
    </div>
  );
};
