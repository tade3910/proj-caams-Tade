import { useState, lazy } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import Loadable from "./components/Loadable";
import Shell from "./layouts/Shell";
const NotFound = Loadable(lazy(() => import("./pages/NotFound")));
const Home = Loadable(lazy(() => import("./pages/Home")));
const About = Loadable(lazy(() => import("./pages/About")));

function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
				<Routes>
          <Route path="*" element={<Shell />}>
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/" element={<Shell />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;