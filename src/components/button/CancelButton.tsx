import { Button } from "@chakra-ui/react";
import React, { FC } from "react";

type Props = {
  onClick: () => void;
};

export const RemoveButton: FC<Props> = React.memo((props) => {
  const { onClick } = props;
  return (
    <Button bg="red.400" color="white" onClick={onClick}>
      キャンセル
    </Button>
  );
});
