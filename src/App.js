import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import HomeComponet from "./components/dashboard/HomeComponet";
import PromoComponent from "./components/dashboard/PromoComponent";
import ContactsComponent from "./components/dashboard/ContacsComponent";
import FooterComponent from "./components/FooterComponent";
function App() {
  return (
    <div>
      {/* <HeaderComponent /> */}
      <HomeComponet />
      <PromoComponent />
      <ContactsComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
