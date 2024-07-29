import { Button } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const TealButton: FC<Props> = React.memo((props) => {
  const { children, onClick } = props;
  return (
    <Button bg="teal.400" color="white" onClick={onClick}>
      {children}
    </Button>
  );
});
