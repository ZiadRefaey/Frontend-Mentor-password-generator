export default function PasswordStrength() {
  return (
    <div className="w-full p-4 md:px-8 md:py-5 bg-Black flex items-center justify-between">
      <h3 className="text-custom-xs md:text-custom-sm text-Gray font-bold">
        STRENGTH
      </h3>
      <div className="flex items-center justify-center gap-4">
        <p className="text-custom-sm md:text-custom-md text-offWhite font-bold">
          MEDIUM
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="w-[10px] h-7 border-solid border-2 border-Yellow bg-Yellow"></div>
          <div className="w-[10px] h-7 border-solid border-2 border-Yellow bg-Yellow"></div>
          <div className="w-[10px] h-7 border-solid border-2 border-Yellow bg-Yellow"></div>
          <div className="w-[10px] h-7 border-solid border-2 border-offWhite"></div>
        </div>
      </div>
    </div>
  );
}
