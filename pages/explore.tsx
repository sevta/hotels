import {
  Box,
  Checkbox,
  Container,
  Grid,
  ScrollArea,
  SimpleGrid,
  Slider,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import DestinationCard from "components/elements/DestinationCard";
import Layout from "components/layout/layout";

export default function ExplorePage() {
  const theme = useMantineTheme();

  return (
    <Layout>
      <Container>
        <Grid gutter={20}>
          <Grid.Col xs={3}>
            <Box
              sx={{
                position: "sticky",
                top: 100,
                width: "100%",
              }}
            >
              <ScrollArea
                sx={{ height: "calc(100vh - 120px)", paddingRight: 20 }}
                offsetScrollbars
                scrollbarSize={7}
                styles={{
                  root: {
                    overflowX: "hidden",
                  },
                }}
              >
                <Box>
                  <Box>
                    <Text size="lg" weight="bold">
                      City
                    </Text>
                    <TextInput
                      variant="filled"
                      mt="sm"
                      size="md"
                      placeholder="Search city"
                    />
                  </Box>
                  <Box mt={40}>
                    <Text size="lg" weight="bold">
                      Distance
                    </Text>
                    <Slider
                      mt="sm"
                      max={200}
                      marks={[
                        { value: 0, label: "0km" },
                        { value: 200, label: "200km" },
                      ]}
                    />
                  </Box>

                  <Box mt={70}>
                    <Text size="lg" weight="bold">
                      Price Per Night
                    </Text>
                    <Slider
                      mt="sm"
                      marks={[
                        { value: 0, label: "$0" },
                        { value: 100, label: "$100" },
                      ]}
                    />
                  </Box>
                  <Box mt={70}>
                    <Text size="lg" weight="bold">
                      Filter by label
                    </Text>
                    <Stack mt="lg">
                      {Array(200)
                        .fill("")
                        .map((_, index) => (
                          <Checkbox label="Air" key={index} />
                        ))}
                    </Stack>
                  </Box>
                </Box>
              </ScrollArea>
            </Box>
          </Grid.Col>
          <Grid.Col xs={9}>
            <SimpleGrid cols={4}>
              {Array(20)
                .fill("")
                .map((_, index) => (
                  <DestinationCard key={index} />
                ))}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    </Layout>
  );
}
