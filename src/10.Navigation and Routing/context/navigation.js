import { createContext, useEffect, useState } from "react";

const NavigationContect = createContext();

function NavigationProvider({ Children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // this is only for User clicks forward or back
  // make do not refresh all the variables
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    // to === '/dropdown'
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContect.Provider value={{ currentPath, navigate }}>
      {Children}
    </NavigationContect.Provider>
  );
}

export { NavigationProvider };
export default NavigationContect;
