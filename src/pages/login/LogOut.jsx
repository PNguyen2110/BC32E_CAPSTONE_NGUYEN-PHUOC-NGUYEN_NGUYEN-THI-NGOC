import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import React from "react";
import { useState } from "react";
const items = [
  {
    label: (
      <a
        // onClick={() => {
        //   localStorage.removeItem("USER_LOGIN");
        // }}
        href="https://www.antgroup.com"
      >
        Log Out
      </a>
    ),
    key: "0",
  },
];
const LogOut = () => {
  const [state, setState] = useState(0);

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <a
        // href="/"
        onClick={(e) => {
          e.preventDefault();
          //   setState(1);
        }}
      >
        <Space>
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default LogOut;
