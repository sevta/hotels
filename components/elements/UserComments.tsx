/* eslint-disable jsx-a11y/alt-text */
import {
  Avatar,
  Box,
  Group,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Rating from "./Rating";

export default function UserComments() {
  const theme = useMantineTheme();

  return (
    <Box p="md">
      <Group>
        <Avatar color={theme.primaryColor} radius="xl">
          MK
        </Avatar>
        <Stack spacing={0}>
          <Text weight="bold" size="xl">
            Sarah
          </Text>
          <Text mt={-3} size="sm" color="dimmed">
            May 4, 2020
          </Text>
        </Stack>
      </Group>

      <Text mt="sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        harum minima perspiciatis, odio animi ab eum veniam id quo iusto beatae
        deleniti reiciendis, eius ipsam porro sunt repellat voluptatibus! Porro.
      </Text>

      <SimpleGrid cols={4} mt="md" spacing="sm">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <Group align="center" key={index}>
              <Text size="sm" weight="bold">
                Cleanlies
              </Text>
              <Rating rating={4} />
            </Group>
          ))}
      </SimpleGrid>
    </Box>
  );
}
