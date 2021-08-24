import SelectLocation from "./components/SelectLocation";
import YourLocation from "./components/YourLocation";
import OtherLocations from "./components/OtherLocations";
import { DateTimeProvider } from "./DateTimeContext";
import Header from "./components/Header";

function App() {
  return (
    <DateTimeProvider>
      <div className="App">
          <Header/>
          <SelectLocation/>
          <YourLocation/>
          <OtherLocations/>
      </div>
    </DateTimeProvider>
  );
}

export default App;
