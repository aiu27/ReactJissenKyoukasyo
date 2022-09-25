import React from "react";
import type { FC } from "react";
import { User } from "../types/user";
import { css } from "@emotion/react";

export const ListItem: FC<User> = (props) => {
  const { id, name, age, personalColor } = props;
  return (
    <p style={{ color: personalColor }}>
      {id}:{name}({age})
    </p>
  );
};

ListItem.defaultProps = {
  personalColor: "gray",
};
