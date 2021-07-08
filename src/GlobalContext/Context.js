import { createContext, useContext, useReducer } from "react";
import { initialState } from "./initialState";
import reducer from "./Reducer";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        menuItems: state.menuItems,
        fontValues: state.fontValues,
        isModalOpen: state.isModalOpen,
        themeColors: state.themeColors,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
