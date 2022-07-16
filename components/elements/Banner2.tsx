/* eslint-disable jsx-a11y/alt-text */
import {
  Box,
  Center,
  Container,
  Image,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import useResponsive from "hooks/useResponsive";
import { useRouter } from "next/router";
import FormSearch from "./FormSearch";

export default function Banner2() {
  const theme = useMantineTheme();
  const { smallerThanMd } = useResponsive();
  const router = useRouter();

  return (
    <Container>
      <SimpleGrid cols={2} sx={{ paddingTop: 100 }}>
        <div>
          {/* <Box
            sx={{
              width: 400,
              height: 400,
              borderRadius: 400,
              position: "absolute",
              top: -30,
              right: 0,
              backgroundColor: theme.fn.rgba(
                theme.colors[theme.primaryColor][6],
                0.3
              ),
              filter: "blur(140px)",
            }}
          /> */}

          {/* <Box
            sx={{
              width: 200,
              height: 200,
              borderRadius: 400,
              position: "absolute",
              top: 180,
              right: 0,
              backgroundColor: theme.fn.rgba(
                // theme.colors[theme.primaryColor][6],
                theme.colors.pink[5],
                0.4
              ),
              filter: "blur(120px)",
            }}
          /> */}
          <Box sx={{ zIndex: 30, position: "relative" }}>
            <Text
              sx={{
                fontSize: smallerThanMd ? 60 : 105,
                lineHeight: 1,
                letterSpacing: "-0.08em",
                fontFamily: theme.other.fontPoppins,
              }}
              variant="gradient"
              gradient={{
                from: theme.colors[theme.primaryColor][6],
                to: "cyan",
                deg: 115,
              }}
              weight="bolder"
            >
              The hotels make easy
            </Text>
            <Center mt={50}>
              <FormSearch onSubmit={() => router.push("/explore")} />
            </Center>
          </Box>
        </div>
        <Image
          sx={{ maxWidth: 500, margin: "0 auto 40px" }}
          src="/images/banner-image.svg"
        />
      </SimpleGrid>
    </Container>
  );
}
