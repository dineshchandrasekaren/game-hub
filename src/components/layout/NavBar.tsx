import { Input, InputGroup, Flex, Switch } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import Logo from "./Logo";
import { useColorMode } from "../ui/color-mode";

function NavBar({
  handleSearch,
  searchValue,
}: {
  handleSearch: (text: string) => void;
  searchValue: string;
}) {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Flex gap="4">
      <Logo />
      <InputGroup flex="1" startElement={<LuSearch />}>
        <Input
          placeholder="Search games"
          onChange={(e) => handleSearch(e.target.value)}
          rounded="4xl"
          bg={{ base: "gray.100", _dark: "whiteAlpha.100" }}
          css={{
            "--focus-color": "skyblue",
            border: "none",
          }}
          value={searchValue}
        />
      </InputGroup>
      <Switch.Root
        colorPalette="purple"
        checked={colorMode === "dark"}
        onCheckedChange={(e) => setColorMode(e.checked ? "dark" : "light")}
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>Dark Mode</Switch.Label>
      </Switch.Root>
    </Flex>
  );
}

export default NavBar;
