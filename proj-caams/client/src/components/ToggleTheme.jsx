import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { TbSun, TbMoonStars } from "react-icons/tb";

function ToggleTheme() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
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