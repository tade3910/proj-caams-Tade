import {
  Header as MantineHeader,
  Text,
  MediaQuery,
  Burger,
  Group,
  useMantineTheme,
} from "@mantine/core";
import ToggleTheme from "./ToggleTheme";
import useStore from "../services/store";

function Header() {
  const theme = useMantineTheme();
  const { openSidebar, toggleOpenSidebar } = useStore();

  return (
    <MantineHeader height={70} p="md">
      <Group position="apart" style={{ height: "100%" }} spacing="xs">
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={openSidebar}
              onClick={() => toggleOpenSidebar()}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
          <Text>Application header</Text>
        </div>
        <ToggleTheme />
      </Group>
    </MantineHeader>
  );
}

export default Header;