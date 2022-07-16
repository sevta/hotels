/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/alt-text */
import {
  ActionIcon,
  Badge,
  Card,
  CardSection,
  Group,
  Image,
  Menu,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useHover } from "@mantine/hooks";
import { NextLink } from "@mantine/next";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

interface DestinationCardProps {
  imageHeight?: number;
}

export default function DestinationCard({
  imageHeight = 180,
}: DestinationCardProps) {
  const { hovered, ref } = useHover();
  const [showMenu, handlers] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Card
      ref={ref}
      p={0}
      sx={{
        transform: `translateY(${hovered ? "-10" : "0"}px)`,
        transition: "all .2s ease",
        backgroundColor: "transparent",
        borderColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[3],
      }}
    >
      <CardSection>
        <Image
          height={imageHeight}
          src="https://images.unsplash.com/photo-1564419320415-7f119406236e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
      </CardSection>
      <Group direction="column" spacing={1} mt="sm">
        <Group
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
          }}
          spacing="sm"
        >
          <Badge variant="filled" color="dark">
            9.3
          </Badge>
        </Group>
        <Group
          align="flex-start"
          position="apart"
          sx={{ width: "100%" }}
          noWrap
        >
          <Text
            size="lg"
            component={NextLink}
            href="/destination-details"
            sx={{
              lineHeight: 1.2,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            weight="bold"
          >
            Swimming on the beach
          </Text>

          <Menu
            onOpen={handlers.open}
            opened={showMenu}
            onClose={handlers.close}
            control={
              <ActionIcon>
                <BsThreeDotsVertical />
              </ActionIcon>
            }
          >
            <Menu.Item>Favorite</Menu.Item>
            <Menu.Item>Share</Menu.Item>
          </Menu>
        </Group>
        <Text
          size="sm"
          color="dimmed"
          sx={{ display: "flex", alignItems: "center" }}
        >
          Jakarta, Indonesia
          <AiFillCheckCircle
            style={{ marginLeft: 5, color: theme.colors.blue[5] }}
          />
        </Text>
        <Text size="sm" color="dimmed">
          Start from
        </Text>
        <Text size="xl" weight="bold">
          $99
        </Text>
      </Group>
    </Card>
  );
}
