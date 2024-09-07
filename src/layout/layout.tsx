import { FC, useContext } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ConsultationForm } from "../components/ConsultationForm";
import StoreContext from "../store";
import { Toast } from "../components/Toast";
export const Layout: FC = () => {
  const storeCtx = useContext(StoreContext);

  return (
    <div>
      <Header />
      {storeCtx.showModal && (
        <ConsultationForm
          closeModal={storeCtx.closeModal}
          services={storeCtx.services}
        />
      )}

      {storeCtx.toast.show && <Toast />}
      <div className="relative  w-full overflow-hidden top-[109.33px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
