import "./App.css";
import AppHeader from "./AppHeader";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Password from "./Password";
import PasswordRules from "./PasswordRules";
import PasswordSlider from "./PasswordSlider";
import PasswordStrength from "./PasswordStrength";

function App() {
  return (
    <>
      <main className="m-auto max-w-[343px] md:max-w-[540px] md:flex items-center justify-center flex-col">
        <AppHeader />
        <Password />
        <MainContent>
          <PasswordSlider />
          <PasswordRules />
          <PasswordStrength />
          <Footer />
        </MainContent>
      </main>
    </>
  );
}

export default App;
