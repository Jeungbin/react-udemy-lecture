import { createContext, useEffect, useState } from "react";

const NavigationContect = createContext();

function NavigationProvider({ Children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  return (
    <NavigationContect.Provider value={{}}>
      {currentPath}
      {Children}
    </NavigationContect.Provider>
  );
}

export { NavigationProvider };
export default NavigationContect;
