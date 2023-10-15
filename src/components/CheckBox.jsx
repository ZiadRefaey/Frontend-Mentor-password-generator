import { FaCheck } from "react-icons/fa";
export default function CheckBox({ value, type, dispatch, children }) {
  return (
    <div className="flex gap-6">
      <div className="relative">
        <input
          className="bg-neonGreen text-custom-xs md:text-custom-sm"
          type="checkbox"
          id={type}
          name="rules"
          checked={value}
          onChange={(e) =>
            dispatch({
              type: `checkbox${type}Change`,
              payload: e.target.checked,
            })
          }
        />
        <div className="bg-neonGreen w-full h-[18px] absolute top-0 left-0 flex items-center justify-center cursor-pointer checked-box">
          <FaCheck className="text-Black font-extrabold scale-75" />
        </div>
      </div>
      <label
        className="hover:cursor-pointer text-custom-xs md:text-custom-sm font-bold"
        htmlFor={type}
      >
        {children}
      </label>
    </div>
  );
}
