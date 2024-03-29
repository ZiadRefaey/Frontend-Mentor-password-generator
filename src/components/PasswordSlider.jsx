export default function PasswordSlider({ passwordLength, dispatch }) {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between pb-4">
        <label
          htmlFor="slider"
          className="body-sm md:heading-lg text-offWhite font-bold"
        >
          Character Length
        </label>
        <h2 className="text-custom-md md:text-custom-lg text-neonGreen font-bold">
          {passwordLength}
        </h2>
      </div>
      <input
        id="slider"
        type="range"
        min="1"
        max="20"
        value={passwordLength}
        className="slider"
        onChange={(e) =>
          dispatch({ type: "passwordLengthChange", payload: e.target.value })
        }
      />
    </div>
  );
}
