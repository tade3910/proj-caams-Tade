import { Navbar as MantineNavbar, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import useStore from "../services/store";

function Navbar() {
  const { openSidebar, toggleOpenSidebar } = useStore();
  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!openSidebar}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Application navbar</Text>
      <Text
        component={Link}
        variant="link"
        to="/"
        onClick={() => toggleOpenSidebar(false)}
      >
        Home
      </Text>
      <Text
        component={Link}
        variant="link"
        to="/about"
        onClick={() => toggleOpenSidebar(false)}
      >
        About
      </Text>
      <Text
        component={Link}
        variant="link"
        to="/react-query"
        onClick={() => toggleOpenSidebar(false)}
      >
        React Query Demo
      </Text>
      <Text
        component={Link}
        variant="link"
        to="/ag-grid"
        onClick={() => toggleOpenSidebar(false)}
      >
        AgGrid Demo
      </Text>
    </MantineNavbar>
  );
}

export default Navbar;