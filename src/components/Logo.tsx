import logo from "../assets/enta-afrika.png";
export const Logo = () => {
  return (
    <div className="h-[56px] w-[120px] ">
      <img src={logo} className="w-full h-full" alt="EntaAfrika" />
    </div>

    // <div>
    //   <h1 className="text-2xl !leading-6 bg-clip-text text-transparent bg-[linear-gradient(66deg,_#7F55DA_30.75%,_#1F0656_120.32%)] font-semibold">
    //     EntaAfrica
    //   </h1>
    // </div>
  );
};
