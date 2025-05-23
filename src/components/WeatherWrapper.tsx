import type { WeatherWrapperProps } from "../types/types";
import { Form } from "./Form";
import { Spacer } from "./Spacer";
// import { WeatherInformations } from "./WeatherInformations";

const WeatherWrapper: React.FC<WeatherWrapperProps> = ({
  isWrapperExtended,
  setIsWrapperExtended,
}) => {
  return (
    <div
      className={`bg-primary-blue w-full h-full rounded-lg mt-10 flex flex-col items-center px-10 gap-y-6 transition-all duration-400 ${
        isWrapperExtended ? "justify-start" : "justify-center"
      }`}>
      <Form
        isWrapperExtended={isWrapperExtended}
        setIsWrapperExtended={setIsWrapperExtended}
      />
      {isWrapperExtended && <Spacer />}
      {/* <WeatherInformations /> */}
    </div>
  );
};
export default WeatherWrapper;
