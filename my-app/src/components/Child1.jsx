/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const style = css`
  height: 200px;
  background-color: blue;
  padding: 8px;
`;

export const Child1 = React.memo((props) => {
  console.log("child1");

  const { onClickReset } = props;

  return (
    <div css={style}>
      <p>Child1</p>
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
});
