import { FC, Fragment } from "react";
import ReactDOM from "react-dom";
import "../App.css";
export const Backdrop: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-[#00000040] z-[1000]"
      onClick={closeModal}
    ></div>
  );
};
export const Overlay: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <dialog
      open
      className="fixed bg-white z-[2000] custom-container modal sm:w-[calc(100%_-_100px)] w-[calc(100%_-_70px)] flex gap-16 p-6 rounded-[18px]  md:w-[calc(100vw_-_20%)] max-h-[calc(100vh_-_50px)]  h-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {children}
    </dialog>
  );
};
export const Modal: FC<{
  closeModal: () => void;
  children: React.ReactNode;
}> = ({ closeModal, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <Overlay>{children}</Overlay>,
        document.getElementById("overlay-root")!
      )}
    </Fragment>
  );
};
