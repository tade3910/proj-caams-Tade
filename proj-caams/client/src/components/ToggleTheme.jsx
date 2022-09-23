import { ActionIcon } from "@mantine/core";
import { TbSun, TbMoonStars } from "react-icons/tb";
import useStore from "../services/store";

function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useStore();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <TbSun size={18} /> : <TbMoonStars size={18} />}
    </ActionIcon>
  );
}

export default ToggleTheme;