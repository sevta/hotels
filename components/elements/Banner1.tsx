/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Center,
  Container,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import FormSearch from "components/elements/FormSearch";
import { useRouter } from "next/router";
import "swiper/css";

export default function Banner1() {
  const theme = useMantineTheme();
  const router = useRouter();

  return (
    <Container>
      <Box
        sx={{
          background:
            theme.colorScheme === "light"
              ? theme.fn.rgba(theme.colors[theme.primaryColor][0], 0.5)
              : theme.colors.dark[8],
          height: 500,
          borderRadius: 30,
          padding: 40,
        }}
      >
        <SimpleGrid cols={2}>
          <Box>
            <Text
              sx={{ fontSize: 50, textAlign: "left", lineHeight: 1.1 }}
              weight={700}
            >
              The Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dolorum natus nihil.
            </Text>
            <Text color="dimmed" mt="lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium tenetur quod ex odio, dolore minus possimus nisi quia
              praesentium voluptates quasi aut molestias.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Center mt={-30}>
        <FormSearch type={1} onSubmit={() => router.push("/explore")} />
      </Center>
    </Container>
  );
}
