import * as React from "react";
import clsx from "clsx";
import CloseIcon from "app-icons/close-icon.svg";

interface Props {
  children: React.ReactChildren;
  title: string;
  onClose: (event: React.MouseEvent) => void;
}

export const Modal = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const closeModal = (e: React.MouseEvent) => {
    e.preventDefault;
    if (props.onClose) onClose();
    setOpen(false);
  };
  return (
    <div className={clsx("modal", { "modal-opened": open })}>
      <header className="modal__header">
        {props.title}
        <CloseIcon onClick={closeModal} />
      </header>
      <section className="modal__body">{props.children}</section>
    </div>
  );
};
