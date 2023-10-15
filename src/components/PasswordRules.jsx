import CheckBox from "./CheckBox";

export default function PasswordRules({ passwordRules, dispatch }) {
  return (
    <div className="self-start flex gap-4 md:gap-5 flex-col body">
      <CheckBox
        dispatch={dispatch}
        value={passwordRules.hasUpper}
        type={"UpperCase"}
      >
        Include Uppercase Letters
      </CheckBox>
      <CheckBox
        dispatch={dispatch}
        value={passwordRules.hasLower}
        type={"LowerCase"}
      >
        Include Lowercase Letters
      </CheckBox>
      <CheckBox
        dispatch={dispatch}
        value={passwordRules.hasNumber}
        type={"Numbers"}
      >
        Include Numbers
      </CheckBox>
      <CheckBox
        dispatch={dispatch}
        value={passwordRules.hasSymbol}
        type={"Symbols"}
      >
        Include Symbols
      </CheckBox>
    </div>
  );
}
