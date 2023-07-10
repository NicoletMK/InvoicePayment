import React, { useState } from "react";
import { Menu as AntMenu, Dropdown as AntDropdown, Button as AntButton } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { MenuClickEventHandler } from "rc-menu/lib/interface";

type DropdownMenuProps = {
  onSelectCurrency: (currency: string) => void;
};

function DropdownMenu({ onSelectCurrency }: DropdownMenuProps) {
  const [selectedOption, setSelectedOption] = useState("USD");

  const handleMenuClick: MenuClickEventHandler = (e) => {
    const selectedValue = e.key as string;
    setSelectedOption(selectedValue);
    onSelectCurrency(selectedValue); // Pass the selected currency to the parent component
  };

  return (
    <AntDropdown
      overlay={
        <AntMenu onClick={handleMenuClick}>
          {[
            { value: "USD" },
            { value: "EUR" },
            { value: "RMB" },
            { value: "INR" },
          ].map((option, index) => (
            <AntMenu.Item key={option.value}>
              <a onClick={(e) => e.preventDefault()}>{option.value || ""}</a>
            </AntMenu.Item>
          ))}
        </AntMenu>
      }
      placement="bottomLeft"
      trigger={["hover"]}
      arrow={true}
    >
      <AntButton onClick={(e) => e.preventDefault()}>
        {selectedOption ? `${selectedOption} ` : "USD"}
        <DownOutlined />
      </AntButton>
    </AntDropdown>
  );
}

export default DropdownMenu;
