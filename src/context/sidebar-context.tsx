import * as React from 'react';

export interface ISidebarContext {
    isSidebarOpen: boolean;
    toggleIsSidebarOpen: () => void;
}

export const SidebarContext = React.createContext<ISidebarContext>({
  isSidebarOpen: false,
  toggleIsSidebarOpen: () => {}
});

export const SidebarProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const [isSidebarOpen, toggleIsSidebarOpen] = React.useReducer((isOpen) => !isOpen, false);
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => React.useContext(SidebarContext);
