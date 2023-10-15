import arrow from "../assets/images/icon-arrow-right.svg";
export default function Footer({ dispatch, strength }) {
  let buttonContent;
  if (strength) {
    buttonContent = (
      <button
        className="w-full bg-neonGreen py-5 flex items-center justify-center gap-4 md:gap-6"
        onClick={() => dispatch({ type: "newPassword" })}
      >
        <p className="text-Black text-custom-xs md:text-custom-sm font-bold">
          Generate
        </p>
        <img src={arrow} alt="right arrow icon" />
      </button>
    );
  } else {
    buttonContent = (
      <div className="w-full py-5 bg-neonGreen ">
        <p className="text-Black text-custom-xs md:text-custom-sm font-bold w-full text-center">
          Please check atleast one box
        </p>
      </div>
    );
  }
  return <footer className="w-full">{buttonContent}</footer>;
}
