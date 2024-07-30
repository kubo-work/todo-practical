import { Button } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

type Props = {
  bg: string;
  onClick: () => void;
  children: ReactNode;
};

const PrimaryButton: FC<Props> = React.memo((props) => {
  const { bg, onClick, children } = props;
  return (
    <Button bg={bg} color="white" onClick={onClick}>
      {children}
    </Button>
  );
});

export default PrimaryButton;
