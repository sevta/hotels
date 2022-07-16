/* eslint-disable jsx-a11y/alt-text */
import {
  Accordion,
  Box,
  Button,
  Card,
  Center,
  Container,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import DestinationCard from "components/elements/DestinationCard";
import Rating from "components/elements/Rating";
import SectionTitle from "components/elements/SectionTitle";
import UserComments from "components/elements/UserComments";
import Layout from "components/layout/layout";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function DestiantionDetails() {
  const theme = useMantineTheme();

  return (
    <>
      <Image
        height={500}
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <Layout paddingTop={0}>
        <Container pb={30}>
          <Grid>
            <Grid.Col xs={9}>
              <Box sx={{ position: "sticky", top: 100 }}>
                <Tabs
                  styles={{
                    tabLabel: {
                      fontSize: theme.fontSizes.md,
                    },
                  }}
                >
                  <Tabs.Tab label="Overview">
                    <Box>
                      <Title mt="lg">The Baverly Hills London</Title>
                      <Text size="sm" color="dimmed">
                        Jakarta, Indonesia
                      </Text>
                      <Group align="center" spacing={4} mt="md">
                        <Rating rating={3} />
                      </Group>
                      <Text color="dimmed" mt="md">
                        A hotel is an institution that gives paid lodging on a
                        short-term basis. Facilities provided may range from a
                        modest-quality mattress during a small room to large
                        suites with bigger, higher-quality beds, a dresser, a
                        refrigerator and other kitchen facilities, upholstered
                        chairs, a flat screen television, and en-suite
                        bathrooms. Small, lower-priced hotels may offer only the
                        foremost basic guest services and facilities. Larger,
                        higher-priced hotels may provide additional guest
                        facilities like a swimming bath , business centre (with
                        computers, printers, and other office equipment),
                        childcare, conference and event facilities, tennis or
                        basketball courts, gymnasium, restaurants, day spa, and
                        affair services. Hotel rooms are usually numbered (or
                        named in some smaller hotels and B&Bs) to permit guests
                        to spot their room. Some boutique, high-end hotels have
                        custom decorated rooms. Some hotels offer meals as a
                        part of an area and board arrangement. within the uk , a
                        hotel is required by law to serve food and drinks to all
                        or any guests within certain stated hours.[citation
                        needed] In Japan, capsule hotels provide a small room
                        suitable just for sleeping and shared bathroom
                        facilities.
                      </Text>
                    </Box>
                  </Tabs.Tab>

                  <Tabs.Tab label="Amenities">
                    <Title mt="md">Amenities</Title>
                    <SimpleGrid cols={3} mt="lg">
                      {Array(6)
                        .fill("")
                        .map((_, index) => (
                          <Group align="center" spacing={8} key={index}>
                            <AiOutlineCheckCircle
                              style={{
                                color: theme.colors[theme.primaryColor][5],
                              }}
                            />
                            <Text>Air Conditioner</Text>
                          </Group>
                        ))}
                    </SimpleGrid>
                  </Tabs.Tab>

                  <Tabs.Tab label="Gallery">
                    <Title mt="md">Gallery</Title>
                  </Tabs.Tab>

                  <Tabs.Tab label="FAQ">
                    <Title mt="md">FAQ</Title>
                    <Accordion mt="lg">
                      <Accordion.Item label="Customization">
                        Colors, fonts, shadows and many other parts are
                        customizable to fit your design needs
                      </Accordion.Item>

                      <Accordion.Item label="Flexibility">
                        Configure components appearance and behavior with vast
                        amount of settings or overwrite any part of component
                        styles
                      </Accordion.Item>

                      <Accordion.Item label="No annoying focus ring">
                        With new :focus-visible pseudo-class focus ring appears
                        only when user navigates with keyboard
                      </Accordion.Item>
                    </Accordion>
                  </Tabs.Tab>
                </Tabs>
                <Box mt={60}>
                  <SectionTitle caption="Related" title="Our related hotels" />
                  <SimpleGrid cols={4} mt="xl">
                    {Array(4)
                      .fill("")
                      .map((_, index) => (
                        <DestinationCard key={index} />
                      ))}
                  </SimpleGrid>
                </Box>

                <Box mt={40}>
                  <Title>4 Reviews</Title>
                  <Stack mt="xl" spacing={20}>
                    {Array(4)
                      .fill("")
                      .map((_, index) => (
                        <UserComments key={index} />
                      ))}
                  </Stack>
                  <Center mt="xl">
                    <Button>Load more</Button>
                  </Center>
                </Box>
              </Box>
            </Grid.Col>
            <Grid.Col xs={3}>
              <Card withBorder radius="sm">
                <Group align="center" spacing="sm">
                  <Text weight="bold" sx={{ fontSize: 30 }}>
                    $99
                  </Text>
                  <Text>/ Night</Text>
                </Group>
                <Stack>
                  <DatePicker
                    size="md"
                    variant="filled"
                    radius="lg"
                    placeholder="Pick dates"
                  />
                  <TextInput
                    size="md"
                    variant="filled"
                    radius="lg"
                    placeholder="guest"
                  />
                </Stack>

                <Button mt="xl">Booking</Button>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}
