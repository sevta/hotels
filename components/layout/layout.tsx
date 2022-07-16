import {
  ActionIcon,
  Affix,
  AppShell,
  AppShellProps,
  Box,
  ColorSwatch,
  Drawer,
  Group,
  Header,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { useStore } from "stores";
import { MoonStars, Settings, Sun } from "tabler-icons-react";
import Navbar from "./Navbar";
interface LayoutProps extends AppShellProps {
  paddingTop?: number;
}

export default function Layout({
  children,
  paddingTop = 70,
  ...props
}: LayoutProps) {
  const [openSettings, handlers] = useDisclosure(false);
  const [color, setColor] = useState<any>();
  const { setPrimaryColor } = useStore();
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <AppShell
      sx={{
        paddingTop,
      }}
      header={
        <Header
          height={80}
          fixed
          sx={{
            borderBottom: 0,
            backdropFilter: `blur(${theme.colorScheme === "dark" ? 20 : 80}px)`,
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.fn.rgba(theme.colors.dark[7], 0.8)
                : theme.fn.rgba(theme.other.white, 0.9),
          }}
        >
          <Navbar />
        </Header>
      }
      {...props}
    >
      <Drawer
        opened={openSettings}
        onClose={handlers.close}
        position="right"
        padding="lg"
        size="xl"
        title={<Title>Settings</Title>}
      >
        <Text>Primary Color</Text>
        <Group mt="sm">
          {Object.keys(theme.colors).map((color, index) => (
            <ColorSwatch
              key={index}
              component="button"
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setPrimaryColor(color);
                handlers.close();
              }}
              color={theme.colors[color][5]}
            />
          ))}
        </Group>

        <Box mt={30}>
          <Text>Dark mode</Text>
          <ActionIcon
            mt="sm"
            variant="outline"
            color={dark ? "yellow" : "blue"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Box>
      </Drawer>
      <Affix
        position={{
          bottom: 100,
          right: 0,
        }}
      >
        <ActionIcon
          radius={0}
          color="teal"
          variant="filled"
          size="xl"
          onClick={handlers.toggle}
        >
          <Settings />
        </ActionIcon>
      </Affix>
      <div style={{ position: "relative" }}>{children}</div>
    </AppShell>
  );
}
