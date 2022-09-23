/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useCallback, useContext } from "react";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";
import { Card } from "./components/Card";

export const App = React.memo(() => {
  console.log("App");

  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  const onClickSwitch = useCallback(() => {
    setIsAdmin((isAdmin) => !isAdmin);
  }, []);

  return (
    <div>
      {isAdmin ? (
        <span>You're an admin</span>
      ) : (
        <span>You're not an admin </span>
      )}
      <button onClick={onClickSwitch}>Switch</button>
      <Card />
    </div>
  );
});
