import { Heading, Stack } from "@chakra-ui/react";
import React, { FC } from "react";

const HeaderLayout: FC<Record<string, never>> = React.memo(() => {
  return (
    <Stack>
      <Heading as="h1">TODOアプリ</Heading>
    </Stack>
  );
});
export default HeaderLayout;
