import { FC, FormEvent, useReducer, useContext } from "react";
import image from "../assets/consultation-image.png";
import { Modal } from "./Modal";
import { EntaButton } from "./EntaButton";
import { set, ref } from "firebase/database";
import { database } from "../config/firebase";
import StoreContext from "../store";
type InitialState = {
  name: string;
  companyName: string;
  countries: string;
  services: "businesses" | "registration";
  email: string;
  description: string;
  inputValidate: boolean;
  loading: boolean;
  error: null | string;
};

const createInitialState = (
  services: "businesses" | "registration" = "businesses"
): InitialState => ({
  name: "",
  companyName: "",
  countries: "Nigeria",
  services, // Set initial services value dynamically
  email: "",
  description: "",
  inputValidate: false,
  loading: false,
  error: null,
});

const reducer = (
  state: InitialState,
  action: {
    type:
      | "name"
      | "companyName"
      | "countries"
      | "services"
      | "services"
      | "email"
      | "description"
      | "inputValidate"
      | "loading"
      | "error";
    payload: string | boolean | null;
  }
) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload as string };
    case "companyName":
      return { ...state, companyName: action.payload as string };
    case "countries":
      return { ...state, countries: action.payload as string };
    case "services":
      return {
        ...state,
        services: action.payload as "businesses" | "registration",
      };
    case "email":
      return { ...state, email: action.payload as string };
    case "description":
      return { ...state, description: action.payload as string };
    case "inputValidate":
      return { ...state, inputValidate: action.payload as boolean };
    case "loading":
      return { ...state, loading: action.payload as boolean };
    case "error":
      return { ...state, error: action.payload as string };
    default:
      return state;
  }
};
export const ConsultationForm: FC<{
  closeModal: () => void;
  services?: "businesses" | "registration";
}> = ({ closeModal, services }) => {
  const [state, dispatch] = useReducer(reducer, createInitialState(services));
  const randomId = Math.random().toString(36).substring(7);
  const storeCtx = useContext(StoreContext);
  const slugify = (text: string) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w-]+/g, "") // Remove all non-word characters
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, "") // Trim - from end of text
      .substring(0, 50);
  };
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (
      (state.services === "businesses" && state.description.length < 10) ||
      !state.name ||
      !state.companyName ||
      !state.email ||
      !state.email.includes("@") ||
      !state.email.includes(".")
    ) {
      dispatch({
        type: "inputValidate",
        payload: true,
      });
      return;
    }

    dispatch({ type: "loading", payload: true });
    set(
      ref(
        database,
        "consultations/" + slugify(state.name) + randomId + Date.now()
      ),
      {
        ...state,
        timestamp: Date.now(),
      }
    )
      .then((e) => {
        console.log(e);
        dispatch({ type: "loading", payload: false });

        dispatch({ type: "error", payload: null });
        storeCtx.toastHandler("Consultation sent successfully", "success");
        closeModal();
      })
      .catch((error) => {
        dispatch({ type: "loading", payload: false });
        dispatch({ type: "error", payload: "Failed to send this data!" });
        storeCtx.toastHandler("Failed to send this data!", "error");
        console.log("Data could not be saved." + error);
      });
  };
  return (
    <Modal closeModal={closeModal}>
      <form
        className="flex w-full flex-col gap-[10px] overflow-y-auto overflow-x-hidden no-scrollbar"
        onSubmit={submitHandler}
      >
        <div>
          <h1 className="font-semibold text-[28px] text-[#333] text-center">
            Get a{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(91deg,_#009244_-0.95%,_#004d40_100.32%)] ">
              Free
            </span>{" "}
            Consultation
          </h1>
          <p className="text-sm !leading-6 font-normal text-center">
            Lorem ipsum dolor sit amet consectetur. Turpis erat tellus egestas a
            magna diam mi facilisis mauris quam nulla.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-5">
            <label
              htmlFor="name"
              className="flex flex-col w-full text-sm font-medium"
            >
              <span className=" mb-2 text-[#4f4f4f]">Name</span>
              <input
                required
                type="text"
                className="text-[#828282] py-[10px] px-2 font-normal border border-[#D9DCE0] rounded-lg w-full focus:outline-none focus:border-[#7F55DA]"
                name="name"
                id="name"
                placeholder="Input name"
                value={state.name}
                onChange={(e) =>
                  dispatch({ type: "name", payload: e.target.value })
                }
              />
            </label>
            <label
              htmlFor="company-name"
              className="flex text-sm font-medium flex-col w-full"
            >
              <span className=" mb-2 text-[#4f4f4f]">Company name</span>
              <input
                required
                type="text"
                name="company-name"
                id="company-name"
                placeholder="Input company name"
                value={state.companyName}
                onChange={(e) =>
                  dispatch({ type: "companyName", payload: e.target.value })
                }
                className="text-[#828282] py-[10px] px-2 font-normal border border-[#D9DCE0] rounded-lg w-full focus:outline-none focus:border-[#7F55DA]"
              />
            </label>
          </div>
          <div className="flex gap-5">
            <label
              htmlFor="countries"
              className="flex flex-col w-full text-sm font-medium"
            >
              <span className=" mb-2 text-[#4f4f4f]">Select countries</span>
              <select
                name="countries"
                id="countries"
                value={state.countries}
                required
                onChange={(e) =>
                  dispatch({ type: "countries", payload: e.target.value })
                }
                className="text-[#828282] py-[10px] px-2 font-normal border border-[#D9DCE0] rounded-lg w-full focus:outline-none focus:border-[#7F55DA]"
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Kenya">Kenya</option>
                <option value="South Africa">South Africa</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Uganda">Uganda</option>
              </select>
            </label>
          </div>
          {/* <select name="countries" id="countries"></select> */}
          <div className="flex flex-col sm:flex-row gap-5">
            <label
              htmlFor="services"
              className="flex flex-col w-full text-sm font-medium"
            >
              <span className=" mb-2 text-[#4f4f4f]">Type of services</span>
              <select
                name="services"
                id="services"
                required
                value={state.services}
                onChange={(e) =>
                  dispatch({ type: "services", payload: e.target.value })
                }
                className="text-[#828282] py-[10px] px-2 font-normal border border-[#D9DCE0] rounded-lg w-full focus:outline-none focus:border-[#7F55DA]"
              >
                <option value="businesses">Businesses</option>
                <option value="registration">Registration</option>
                {/* <option value="Kenya">Kenya</option>
                <option value="South Africa">South Africa</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Uganda">Uganda</option> */}
              </select>
            </label>
            <label
              htmlFor="email"
              className="flex text-sm font-medium flex-col w-full"
            >
              <span className=" mb-2 text-[#4f4f4f]">Email</span>
              <input
                required
                type="text"
                name="email"
                id="email"
                placeholder="Input email"
                value={state.email}
                onChange={(e) =>
                  dispatch({ type: "email", payload: e.target.value })
                }
                className="text-[#828282] py-[10px] px-2 font-normal border border-[#D9DCE0] rounded-lg w-full focus:outline-none focus:border-[#7F55DA]"
              />
            </label>
          </div>
          {state.services === "businesses" && (
            <label
              htmlFor="description"
              className="flex text-sm font-medium flex-col w-full"
            >
              <span className=" mb-2 text-[#4f4f4f]">Description</span>
              <textarea
                required
                placeholder="Input description"
                rows={4}
                name="description"
                value={state.description}
                onChange={(e) =>
                  dispatch({ type: "description", payload: e.target.value })
                }
                className="text-[#828282] py-[10px] px-2 font-normal border border-[#D9DCE0] rounded-lg w-full focus:outline-none focus:border-[#7F55DA]"
                id="description"
              ></textarea>
            </label>
          )}
        </div>
        {state.inputValidate && (
          <p className="text-red-500 text-center text-base">
            Check your input again and fill appropriately!
          </p>
        )}
        {state.error && (
          <p className="text-red-500 text-center text-base">{state.error}</p>
        )}
        <EntaButton
          loading={state.loading}
          type="submit"
          value="Register now"
        />
      </form>
      <div className="w-full relative h-[calc(100%_-_14px)] rounded-[15.132px] my-auto hidden sm:block ">
        <img
          src={image}
          alt="Three office workers"
          className=" rounded-[15.132px] !h-full object-cover"
        />
        <div className="absolute left-0 bottom-0 text-lg font-normal  w-full p-2  z-10 bg-[#FFFFFF4D] flex backdrop-blur-[9.078948020935059px] rounded-br-[15.132px] rounded-bl-[15.132px] text-white border-t border-t-[#FFFFFF4D]">
          Lorem ipsum dolor sit amet consectetur. Feugiat ullamcorper facilisis
          nisl quisque ante id. Neque vulputate .
        </div>
      </div>
      <button
        type="button"
        onClick={closeModal}
        className="absolute top-4 right-4 sm:top-12 sm:right-12 z-40 backdrop-blur-[5.599999904632568px] rounded-[100px] h-5 w-5 sm:h-7 sm:w-7 flex justify-center items-center bg-[rgba(0,_0,_0,_0.36)]"
      >
        {""}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M9.69922 20.2969L20.3058 9.69027"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.3058 20.3097L9.69922 9.70312"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </Modal>
  );
};
