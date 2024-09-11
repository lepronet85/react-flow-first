import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useReactFlow } from "@xyflow/react";
import React from "react";
import { ChevronBarDown } from "react-bootstrap-icons";

const PAYMENT_PROVIDERS = [
  { code: "St", name: "Stripe" },
  { code: "Gp", name: "Google Pay" },
  { code: "Ap", name: "Apple Pay" },
  { code: "Pp", name: "Paypal" },
  { code: "Am", name: "Amazon Pay" },
];

export default function PayementProviderSelect() {
  const { setNodes } = useReactFlow();

  const onProviderClick = ({ name, code }: { name: string; code: string }) => {
    const location = Math.random() * 500;
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { name, code },
        type: "paymentProvider",
        position: { x: location, y: location },
      },
    ]);
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronBarDown />}>
        Add Payment Provider
      </MenuButton>
      <MenuList>
        {PAYMENT_PROVIDERS.map((provider) => (
          <MenuItem onClick={() => onProviderClick(provider)}>
            {provider.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
