import { Navbar as MantineNavbar, Text } from "@mantine/core";
import { Link } from "react-router-dom";

function Navbar({ opened, setOpened }) {
  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Application navbar</Text>
      <Text
        component={Link}
        variant="link"
        to="/"
        onClick={() => setOpened((o) => !o)}
      >
        Home
      </Text>
      <Text
        component={Link}
        variant="link"
        to="/about"
        onClick={() => setOpened((o) => !o)}
      >
        About
      </Text>
    </MantineNavbar>
  );
}

export default Navbar;