import React, { useReducer } from 'react';

const initialState = {
  isSidebarOpen: true,
};

const reducer = (state) => ({ 
  isSidebarOpen: !state.isSidebarOpen 
});

const SidebarContext = React.createContext();

function SidebarProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch(); 
  };

  return (
    <SidebarContext.Provider value={{ state, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export { SidebarProvider, SidebarContext };