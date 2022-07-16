import {
  BackgroundImage,
  Container,
  Grid,
  SimpleGrid,
  useMantineTheme,
} from "@mantine/core";

const PRIMARY_COL_HEIGHT = 600;

export function PopularPlace() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container my="md">
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <BackgroundImage
          sx={{
            height: PRIMARY_COL_HEIGHT,
          }}
          radius="md"
          // src="https://images.pexels.com/photos/5905361/pexels-photo-5905361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          src="https://images.unsplash.com/photo-1553530979-7ee52a2670c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
        />
        <Grid gutter="md">
          <Grid.Col>
            <BackgroundImage
              radius="md"
              sx={{ height: SECONDARY_COL_HEIGHT }}
              src="https://images.pexels.com/photos/11943277/pexels-photo-11943277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <BackgroundImage
              src="https://images.pexels.com/photos/8660918/pexels-photo-8660918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              radius="md"
              sx={{ height: SECONDARY_COL_HEIGHT }}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <BackgroundImage
              src="https://images.pexels.com/photos/4838744/pexels-photo-4838744.jpeg?cs=srgb&dl=pexels-calbert-warner-4838744.jpg&fm=jpg"
              radius="md"
              sx={{ height: SECONDARY_COL_HEIGHT }}
            />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
