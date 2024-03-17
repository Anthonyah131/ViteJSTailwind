import HeroSection from "./components/HeroSection";
import TeamsName from "./components/TeamsName";
import Animals from "./components/Animals";
import ShowHideElem from "./components/ShowHideElem";
import DataBinding from "./components/DataBinding";
import ParentState from "./components/ParentState";
import FetchDataAPI from "./components/FetchDataAPI";
import "./App.css";

function App() {
  return (
    <>
      <TeamsName />
      <Animals/>
      <ShowHideElem />
      <DataBinding />
      <ParentState />
      <FetchDataAPI />
      <HeroSection />
    </>
  );
}

export default App;
