import React from "react";
import { Checkbox as CheckboxAntD } from "antd";
import "antd/dist/antd.css";
import "./css/checkbox.css";

const Checkbox = props => {
  const { value, ...others } = props;
  return (
    <div>
      <CheckboxAntD {...others}>{value}</CheckboxAntD>
    </div>
  );
};

export default Checkbox;
