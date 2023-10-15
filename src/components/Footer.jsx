import arrow from "../assets/images/icon-arrow-right.svg";
export default function Footer() {
  return (
    <footer className="w-full">
      <button className="w-full bg-neonGreen py-5 flex items-center justify-center gap-4 md:gap-6">
        <p className="text-Black text-custom-xs md:text-custom-sm font-bold">
          Generate
        </p>
        <img src={arrow} alt="right arrow icon" />
      </button>
    </footer>
  );
}
