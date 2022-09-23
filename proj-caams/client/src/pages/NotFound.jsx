import { Alert, Title, Text } from "@mantine/core";
import { TbAlertCircle } from "react-icons/tb";

function NotFound() {
  return (
    <Alert icon={<TbAlertCircle size={16} />} title="Bummer!" color="red">
      <Title order={1}>404</Title>
      <Text transform="uppercase">Page not found</Text>
    </Alert>
  );
}

export default NotFound;