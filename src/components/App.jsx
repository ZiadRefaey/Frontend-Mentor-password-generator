import "./App.css";
import AppHeader from "./AppHeader";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Password from "./Password";
import PasswordRules from "./PasswordRules";
import PasswordSlider from "./PasswordSlider";
import PasswordStrength from "./PasswordStrength";
import { GeneratePassword } from "js-generate-password";
import { useReducer } from "react";
const initialState = {
  password: "",
  passwordLength: 10,
  passwordRules: {
    hasUpper: false,
    hasLower: false,
    hasSymbol: false,
    hasNumber: false,
  },
  strength: 0,
  difficulty: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "newPassword":
      return {
        ...state,
        difficulty:
          state.strength === 1
            ? "TOO WEAK"
            : state.strength === 2
            ? "WEAK"
            : state.strength === 3
            ? "MEDIUM"
            : "STRONG",

        password: GeneratePassword({
          length: state.passwordLength,
          uppercase: state.passwordRules.hasUpper,
          lowercase: state.passwordRules.hasLower,
          symbols: state.passwordRules.hasSymbol,
          numbers: state.passwordRules.hasNumber,
        }),
      };
    case "passwordLengthChange":
      return {
        ...state,
        passwordLength: action.payload,
      };
    case "checkboxUpperCaseChange":
      return {
        ...state,
        passwordRules: {
          ...state.passwordRules,
          hasUpper: action.payload,
          strength: action.payload ? state.strength++ : state.strength--,
        },
      };
    case "checkboxLowerCaseChange":
      return {
        ...state,
        passwordRules: {
          ...state.passwordRules,
          hasLower: action.payload,
          strength: action.payload ? state.strength++ : state.strength--,
        },
      };
    case "checkboxSymbolsChange":
      return {
        ...state,
        passwordRules: {
          ...state.passwordRules,
          hasSymbol: action.payload,
          strength: action.payload ? state.strength++ : state.strength--,
        },
      };
    case "checkboxNumbersChange":
      return {
        ...state,
        passwordRules: {
          ...state.passwordRules,
          hasNumber: action.payload,
          strength: action.payload ? state.strength++ : state.strength--,
        },
      };
  }
}
function App() {
  const [
    { password, passwordLength, passwordRules, strength, difficulty },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <>
      <main className="m-auto max-w-[343px] md:max-w-[540px] md:flex items-center justify-center flex-col">
        <AppHeader />
        <Password password={password} />
        <MainContent>
          <PasswordSlider passwordLength={passwordLength} dispatch={dispatch} />
          <PasswordRules passwordRules={passwordRules} dispatch={dispatch} />
          <PasswordStrength difficulty={difficulty} />
          <Footer dispatch={dispatch} strength={strength} />
        </MainContent>
      </main>
    </>
  );
}

export default App;
