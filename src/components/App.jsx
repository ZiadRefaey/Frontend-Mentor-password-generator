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
      <main className="">
        <AppHeader />
        <Password />
        <MainContent>
          <PasswordSlider />
          <PasswordRules />
          <PasswordStrength />
          <Footer>
            <button>Generate</button>
          </Footer>
        </MainContent>
      </main>
    </>
  );
}

export default App;
