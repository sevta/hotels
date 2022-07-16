import {
  Box,
  Button,
  Container,
  Group,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { NextLink } from "@mantine/next";

export default function Navbar() {
  const theme = useMantineTheme();
  const smallerScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text size="xl" weight={900} sx={{ letterSpacing: "-0.05em" }}>
        HOTELS.
      </Text>
      <Box sx={{ display: smallerScreen ? "none" : "block" }}>
        <Group align="center">
          <TextInput
            size="md"
            styles={{
              root: {
                display: "none",
                width: 300,
              },
              input: {
                fontSize: 14,
              },
            }}
            radius={0}
            placeholder="Search nike, puma"
            rightSection={
              <Button size="md" radius={0} color={theme.primaryColor}>
                Search
              </Button>
            }
            rightSectionWidth={30}
          />
        </Group>
        <Group spacing={50}>
          {Array(6)
            .fill("")
            .map((_, index) => (
              <Text
                key={index}
                variant="link"
                color={theme.colorScheme === "dark" ? "gray" : "dark"}
                component={NextLink}
                weight="bold"
                href="/"
              >
                Homepage
              </Text>
            ))}
        </Group>
      </Box>
    </Container>
  );
}
