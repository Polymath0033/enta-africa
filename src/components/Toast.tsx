import { useContext } from "react";
import StoreContext from "../store";
export const Toast = () => {
  const storeCtx = useContext(StoreContext);

  return (
    <div
      className={`w-[calc(100%-20px)] sm:w-[25rem] rounded-lg py-4 px-4 border border-solid flex justify-between items-start left-1/2 -translate-x-1/2 fixed top-10 z-[100] transition-opacity duration-300 ease-in-out transform ${
        storeCtx.toast?.type === "success"
          ? "text-[#155724] bg-[#d4edda] border-[#c3e6cb]"
          : "bg-[#f8d7da] text-[#721c24] border-[#f8d7da]"
      }   ${storeCtx.toast.show ? "animate-toast-in" : "animate-toast-out"}`}
    >
      <div className="grid">
        {/* <h3 className="text-sm font-medium">{storeCtx.toast?.value}</h3> */}
        <p className="text-sm block font-medium !tracking-[-0.28px]">
          {storeCtx.toast?.value}
        </p>
      </div>

      <button
        type="button"
        className="ml-3 w-5 cursor-pointer"
        onClick={() => storeCtx.hideToast()}
      >
        {""}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path
            fill={storeCtx.toast?.type === "success" ? "#155724" : "#721c24"}
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </button>
    </div>
  );
};
