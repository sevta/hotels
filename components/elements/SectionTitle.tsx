import { Stack, StackProps, Text } from "@mantine/core";
import useResponsive from "hooks/useResponsive";

interface SectionTitleProps extends StackProps {
  caption?: string;
  title?: string;
}

export default function SectionTitle({
  caption,
  title,
  ...props
}: SectionTitleProps) {
  const { smallerThanSm } = useResponsive();
  return (
    <Stack spacing={0} {...props}>
      <Text
        weight="bold"
        sx={(theme) => ({
          color: theme.colors[theme.primaryColor][5],
          textTransform: "capitalize",
        })}
      >
        {caption}
      </Text>
      <Text
        sx={(theme) => ({
          fontSize: 40,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        })}
        mt={smallerThanSm ? 10 : 0}
        weight="bold"
      >
        {title}
      </Text>
    </Stack>
  );
}
