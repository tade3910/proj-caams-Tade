import { lazy } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import useStore from "./services/store";
import Loadable from "./components/Loadable";
import Shell from "./layouts/Shell";
const NotFound = Loadable(lazy(() => import("./pages/NotFound")));
const Home = Loadable(lazy(() => import("./pages/Home")));
const About = Loadable(lazy(() => import("./pages/About")));
const ReactQueryDemo = Loadable(lazy(() => import("./pages/ReactQueryDemo")));
const AgGridDemo = Loadable(lazy(() => import("./pages/AgGridDemo")));

function App() {
  const { colorScheme, toggleColorScheme } = useStore();

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
            <Route path="react-query" element={<ReactQueryDemo />} />
            <Route path="ag-grid" element={<AgGridDemo />} />
          </Route>
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;