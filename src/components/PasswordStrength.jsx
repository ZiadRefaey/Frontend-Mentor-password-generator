import PasswordStrengthBars from "./PasswordStrengthBars";
export default function PasswordStrength({ difficulty }) {
  return (
    <div className="w-full p-4 md:px-8 md:py-5 bg-Black flex items-center justify-between">
      <h3 className="text-custom-xs md:text-custom-sm text-Gray font-bold">
        STRENGTH
      </h3>
      <div className="flex items-center justify-center gap-4">
        <p className="text-custom-sm md:text-custom-md text-offWhite font-bold">
          {difficulty}
        </p>
        <PasswordStrengthBars difficulty={difficulty} />
      </div>
    </div>
  );
}
