import { useState } from "react";
export default function PasswordSlider() {
  const [value, setValue] = useState(10);
  function handleSliderChange(e) {
    setValue(e.target.value);
  }
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between pb-4">
        <p className="body-sm md:heading-lg text-offWhite font-bold">
          Character Length
        </p>
        <h2 className="text-custom-md md:text-custom-lg text-neonGreen font-bold">
          {value}
        </h2>
      </div>
      <input
        type="range"
        min="0"
        max="20"
        value={value}
        className="slider"
        onChange={handleSliderChange}
      />
    </div>
  );
}
