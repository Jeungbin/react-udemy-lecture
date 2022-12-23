import { createContext } from "react";

const NavigationContect = createContext();

function NavigationProvider({ Children }) {
  return (
    <NavigationContect.Provider value={{}}>
      {Children}
    </NavigationContect.Provider>
  );
}

export { NavigationProvider };
export default NavigationContect;
