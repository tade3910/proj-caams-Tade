import axios from "axios";
import { useQuery } from "react-query";
import { Text, Loader, Notification, Paper } from "@mantine/core";
import { TbX } from "react-icons/tb";

function ReactQueryDemo() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    axios.get("https://api.github.com/orgs/jhu-collab").then((res) => res.data)
  );

  if (isLoading) return <Loader />;

  if (error) {
    return (
      <Notification icon={<TbX size={18} />} color="red">
        {"An error has occurred: " + error.message}
      </Notification>
    );
  }

  return (
    <Paper shadow="xs" radius="lg" p="xl">
      <Text size="xl" transform="uppercase">
        {data.name}
      </Text>
      <Text>{data.description}</Text>
    </Paper>
  );
}

export default ReactQueryDemo;