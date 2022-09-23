/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { memo } from "react";
import { EditButton } from "./EditButton";

const style = css`
  width: 300px;
  height: 200px;
  margin: 8px;
  border-radius: 8px;
  background-color: #e9bbdbb0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = memo(() => {
  console.log("Card");

  return (
    <div css={style}>
      <p>Ai Ueda</p>
      <EditButton />
    </div>
  );
});
