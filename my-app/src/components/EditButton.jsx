/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { memo, useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = css`
  width: 100px;
  padding: 6px;
  border-radius: 8px;
`;

export const EditButton = memo((props) => {
  console.log("EditButton");

  const { isAdmin } = useContext(AdminFlagContext);

  return (
    <button css={style} disabled={!isAdmin}>
      Edit
    </button>
  );
});
