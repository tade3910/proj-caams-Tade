import { z } from "zod";
import { useForm, zodResolver } from "@mantine/form";
import { TextInput, Button, Box, Group } from "@mantine/core";

const schema = z.object({
  name: z.string().min(2, { message: "Name should have at least 2 letters" }),
  email: z.string().email({ message: "Invalid email" }),
});

function MantineFormDemo() {
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      name: "",
      email: "",
    },
  });

  return (
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Email"
          placeholder="example@mail.com"
          {...form.getInputProps("email")}
        />
        <TextInput
          required
          label="Name"
          placeholder="John Doe"
          mt="sm"
          {...form.getInputProps("name")}
        />
        <Group position="right" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default MantineFormDemo;