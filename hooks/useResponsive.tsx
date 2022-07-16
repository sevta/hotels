import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function useResponsive() {
  const theme = useMantineTheme();

  const smallerThanSm = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const smallerThanMd = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const smallerThanXl = useMediaQuery(`(max-width: ${theme.breakpoints.xl}px)`);

  return {
    smallerThanMd,
    smallerThanSm,
    smallerThanXl,
  };
}
