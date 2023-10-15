import copy from "../assets/images/icon-copy.svg";
import { useState } from "react";
export default function Password({ password }) {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="bg-darkGray w-full px-4 md:px-8 py-[19px] flex mb-6 justify-between gap-8">
      <input
        disabled
        placeholder="P4$5W0rD!"
        value={password}
        className="text-custom-md md:text-custom-lg font-bold placeholder:font-bold text-offWhite bg-inherit placeholder:text-placeHolder placeholder:text-custom-md md:placeholder:text-custom-lg md:placeholder:text-3xl  max-w-[50%] md:max-w-[70%] outline-none"
      />
      <div className="flex">
        {isCopied && (
          <p className="self-center text-neonGreen text-custom-sm font-bold ">
            COPIED
          </p>
        )}
        <button
          onClick={
            password
              ? () => {
                  navigator.clipboard.writeText(password);
                  setIsCopied(true);
                }
              : ""
          }
          className="w-[17.5px] h-5 md:w-[21px] md:h-6 object-contain inline-block self-center ml-8"
        >
          <img src={copy} alt="copy icon" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
}
