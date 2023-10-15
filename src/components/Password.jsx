import copy from "../assets/images/icon-copy.svg";
export default function Password() {
  return (
    <div className="bg-darkGray w-full px-4 md:px-8 py-[19px] flex mb-6 justify-between gap-8">
      <input
        placeholder="PTx1f5DaFX"
        className="text-custom-md md:text-custom-lg font-bold placeholder:font-bold text-offWhite bg-inherit placeholder:text-Gray placeholder:text-custom-md md:placeholder:text-custom-lg md:placeholder:text-3xl  max-w-[50%] md:max-w-[70%] outline-none"
      />
      <div className="flex">
        <p className="self-center text-neonGreen text-custom-sm font-bold ">
          COPIED
        </p>
        <button className="w-[17.5px] h-5 md:w-[21px] md:h-6 object-contain inline-block self-center ml-8">
          <img src={copy} alt="copy icon" className="w-full h-full" />
        </button>
      </div>
    </div>
  );
}
