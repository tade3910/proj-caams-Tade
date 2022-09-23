import { useState } from "react";
import { AppShell, Text, useMantineTheme } from "@mantine/core";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Shell() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={<Navbar opened={opened} />}
      aside={<Sidebar />}
      footer={<Footer />}
      header={<Header theme={theme} opened={opened} setOpened={setOpened} />}
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}

export default Shell;