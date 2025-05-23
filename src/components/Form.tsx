import type { WeatherWrapperProps } from "../types/types";

export const Form: React.FC<WeatherWrapperProps> = ({
  isWrapperExtended,
  setIsWrapperExtended,
}) => {
  return (
    <div>
      <form className="flex flex-col items-center gap-y-6 w-full">
        <input
          type="text"
          placeholder="Enter your city.."
          className="bg-baseTextColor text-black w-full h-14 rounded-lg px-4 placeholder:text-xl placeholder:text-neutral-lighterNavy uppercase text-2xl placeholder:normal-case "
        />
        <button
          type="submit"
          className="bg-baseTextColor text-black px-12 py-2 rounded-full text-lg cursor-pointer hover:shadow-lg  font-medium"
          onClick={(e) => {
            e.preventDefault();
            setIsWrapperExtended(!isWrapperExtended);
          }}>
          Get Weather!
        </button>
      </form>
    </div>
  );
};
