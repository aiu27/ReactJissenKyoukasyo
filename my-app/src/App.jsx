/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useCallback } from "react";
import { Child1 } from "./components/Child1";

const containerStyle = css`
  border: solid 1px #aaa;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const App = React.memo(() => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <div css={containerStyle}>
      <button onClick={onClickButton}>Button</button>
      <h1>hello</h1>
      <p>how are you?</p>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
    </div>
  );
});
