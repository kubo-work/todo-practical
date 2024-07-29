import { Button } from "@chakra-ui/react";
import React, { FC } from "react";

type Props = {
  onClick: () => void;
};

export const SubmitButton: FC<Props> = React.memo((props) => {
  const { onClick } = props;
  return (
    <Button bg="teal.400" color="white" onClick={onClick}>
      更新
    </Button>
  );
});
