import React, { useState } from "react";
import Checkbox from "./index";
import "antd/dist/antd.css";

export default { title: "Checkbox" };
const style = { margin: 30 };

export const _default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div style={style}>
      <Checkbox
        value="Hello World"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};
export const alreadyCheckWithText = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div style={style}>
      <Checkbox
        value="Hello World"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};
