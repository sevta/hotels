/* eslint-disable jsx-a11y/alt-text */
import { Group, Image, Stack, Text, useMantineTheme } from "@mantine/core";

export default function ExploreNearbyCard() {
  const theme = useMantineTheme();

  return (
    <Group
      sx={(theme) => ({
        cursor: "pointer",
        transition: "all .3s ease",
        "&:hover": {
          background:
            theme.colorScheme === "light"
              ? theme.colors.gray[1]
              : theme.colors.gray[9],
          borderRadius: theme.radius.lg,
          padding: 10,
        },
        "&:active": {
          transform: "scale(.9)",
        },
      })}
    >
      <Image
        fit="cover"
        width={70}
        height={70}
        radius="md"
        src="https://images.unsplash.com/photo-1564419379075-584260fc947b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <Stack spacing={0}>
        <Text weight="bold">Location is here</Text>
        <Text color="dimmed">400m on you</Text>
      </Stack>
    </Group>
  );
}
