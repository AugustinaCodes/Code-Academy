import Body from "./components/Body/Body";
import SettingsContextProvider from "./components/Context/SettingsContextProvider";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <SettingsContextProvider>
        <Header />
        <Body />
        <Footer />
      </SettingsContextProvider>
    </div>
  );
}

export default App;
