import CheckBox from "./CheckBox";

export default function PasswordRules() {
  return (
    <div className="self-start flex gap-4 md:gap-5 flex-col body">
      <CheckBox value={"upperCase"}>Include Uppercase Letters</CheckBox>
      <CheckBox value={"lowerCase"}>Include Lowercase Letters</CheckBox>
      <CheckBox value={"Numbers"}>Include Numbers </CheckBox>
      <CheckBox value={"Symbols"}>Include Symbols</CheckBox>
    </div>
  );
}
