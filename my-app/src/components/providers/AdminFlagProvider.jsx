import React, { useState, createContext } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = React.memo((props) => {
  const { children } = props;

  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  );
});
