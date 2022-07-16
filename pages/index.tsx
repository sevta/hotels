/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Banner2 from "components/elements/Banner2";
import DestinationCard from "components/elements/DestinationCard";
import ExploreNearbyCard from "components/elements/ExploreNearbyCard";
import { PopularPlace } from "components/elements/PopularPlace";
import SectionTitle from "components/elements/SectionTitle";
import Layout from "components/layout/layout";
import { AiTwotoneStar } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Homepage() {
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);

  return (
    <Layout>
      <Banner2 />
      <Container mt={100}>
        <SectionTitle
          caption="our recomendations"
          title="Our best recomendation"
          mb="lg"
        />
        <Swiper slidesPerView={5} spaceBetween={15}>
          {Array(5)
            .fill("")
            .map((_, index) => (
              <SwiperSlide
                key={index}
                style={{
                  paddingBlock: 20,
                }}
              >
                <DestinationCard />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
      <Container mt={100}>
        <PopularPlace />
      </Container>
      <Container mt={60}>
        <Group position="apart" align="center">
          <Title>Explore nearby</Title>
          <Button variant="white" compact>
            See All
          </Button>
        </Group>

        <SimpleGrid cols={matches ? 1 : 4} mt="xl">
          {Array(20)
            .fill("")
            .map((_, index) => (
              <ExploreNearbyCard key={index} />
            ))}
        </SimpleGrid>
      </Container>

      <Container mt={100}>
        <SectionTitle
          caption="our recomendations"
          title="Our best recomendation"
          mb="lg"
        />
        <SimpleGrid cols={matches ? 1 : 5}>
          {Array(10)
            .fill("")
            .map((_, index) => (
              <DestinationCard key={index} />
            ))}
        </SimpleGrid>
      </Container>

      <Container mt={100}>
        <Grid>
          <Grid.Col xs={4}>
            <Image
              height={400}
              fit="cover"
              src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </Grid.Col>
          <Grid.Col xs={8} p="xl">
            <Text weight="bold" size="xl">
              Khala dara
            </Text>
            <Text color="dimmed">Profesional</Text>
            <Group align="center" spacing={4} mt="xl">
              {Array(5)
                .fill("")
                .map((_, index) => (
                  <AiTwotoneStar
                    key={index}
                    style={{ color: theme.colors.yellow[5] }}
                  />
                ))}
            </Group>
            <Text mt="lg" weight="bold">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              aliquam fugit porro ad animi. Quod, laboriosam temporibus
              asperiores recusandae molestiae minus excepturi quisquam culpa
              porro quis, quibusdam impedit laudantium aut."
            </Text>
            <Group align="center" mt="lg" spacing="sm">
              <ActionIcon color="dark" variant="light" radius="xl" size="xl">
                <BsChevronLeft />
              </ActionIcon>
              <ActionIcon color="dark" variant="filled" radius="xl" size="xl">
                <BsChevronRight />
              </ActionIcon>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>

      <Container mt={100}>
        <Card
          radius={20}
          py={50}
          px={30}
          sx={{
            backgroundColor:
              theme.colorScheme === "light"
                ? theme.fn.rgba(theme.colors[theme.primaryColor][3], 0.2)
                : theme.colors.dark[8],
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Title>Subscribe & Get special discount</Title>
            <TextInput
              mt="md"
              placeholder="Email"
              radius="xl"
              size="xl"
              variant="filled"
              color="white"
              rightSection={<Button size="xl">Subscribe</Button>}
              rightSectionWidth={120}
              styles={{
                root: {
                  width: matches ? "100%" : 600,
                },
                input: {
                  backgroundColor: "white",
                },
              }}
            />
          </Box>
        </Card>
      </Container>
    </Layout>
  );
}
