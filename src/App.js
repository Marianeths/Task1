import CloudShowBlock from "./components/CloudShowBlock/CloudShowBlock";
import DigitalSignageWrapper from "./components/DigitalSignage/DigitalSignageWrapper";
import FirstBlock from "./components/FirstBlock/FirstBlock";
import LogosBlock from "./components/LogosBlock/LogosBlock";

import style from './app.module.scss'
import Sysops from "./components/Sysops/Sysops";
import GrowYourBusinnes from "./components/GrowYourBusiness/GrowYourBusinnes";
import TryCloudShow from "./components/TryCloudShow/TryCloudShow";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div >
      <FirstBlock/>
      <DigitalSignageWrapper/>
      <LogosBlock/>
      <main className={style.mainContent}>
        <CloudShowBlock/>
        <Sysops/>
        <GrowYourBusinnes/>
      </main>
      <TryCloudShow/>
      <Footer/>
    </div>
  );
}

export default App;
