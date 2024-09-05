import { useState, createContext, FC, ReactNode } from "react";
const StoreContext = createContext<{
  showModal: boolean;
  closeModal: () => void;
  modalHandler: () => void;
  services: "businesses" | "registration";
  serviceHandler: (service: "businesses" | "registration") => void;
  toast: { value: string; type: "error" | "success"; show: boolean };
  toastHandler: (value: string, type: "success" | "error") => void;
  hideToast: () => void;
}>({
  showModal: false,
  closeModal: () => {},
  modalHandler: () => {},
  services: "businesses",
  serviceHandler: () => {},
  toast: { value: "", type: "success", show: false },
  toastHandler: () => {},
  hideToast: () => {},
});
export default StoreContext;
export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [services, setServices] = useState<"businesses" | "registration">(
    "businesses"
  );
  const [toast, setToast] = useState<{
    value: string;
    type: "error" | "success";
    show: boolean;
  }>({ value: "", type: "success", show: false });

  const closeModal = () => {
    setShowModal(false);
  };
  const modalHandler = () => {
    setShowModal(!showModal);
  };
  const serviceHandler = (service: "businesses" | "registration") => {
    setServices(service);
  };
  const hideToast = () => {
    setToast({ value: "", type: "success", show: false });
  };
  const toastHandler = (value: string, type: "success" | "error") => {
    setToast({ value, type, show: true });
    setTimeout(() => {
      hideToast();
    }, 5000);
  };
  return (
    <StoreContext.Provider
      value={{
        showModal,
        closeModal,
        modalHandler,
        services,
        serviceHandler,
        toast,
        hideToast,
        toastHandler,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
