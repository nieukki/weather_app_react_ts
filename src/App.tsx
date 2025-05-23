import { BlurEffect } from "./components/BlurEffect";
import WeatherWrapper from "./components/WeatherWrapper";
import { useState } from "react";

function App() {
  const [isWrapperExtended, setIsWrapperExtended] = useState<boolean>(false);

  return (
    <div className="h-screen font-poppins flex flex-col items-center bg-backgroundColor text-baseTextColor">
      <main
        className={`w-1/3 transtion-all duration-700 ${
          isWrapperExtended ? "h-9/10" : "h-1/5"
        }`}>
        <WeatherWrapper
          isWrapperExtended={isWrapperExtended}
          setIsWrapperExtended={setIsWrapperExtended}
        />
      </main>
      <BlurEffect />
    </div>
  );
}

export default App;
