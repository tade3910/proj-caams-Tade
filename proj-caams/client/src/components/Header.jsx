import {
    Header as MantineHeader,
    Text,
    MediaQuery,
    Burger,
    Group,
  } from "@mantine/core";
  import ToggleTheme from "./ToggleTheme";
  
  function Header({ opened, setOpened, theme }) {
    return (
      <MantineHeader height={70} p="md">
        <Group position="apart" style={{ height: "100%" }} spacing="xs">
          <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
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