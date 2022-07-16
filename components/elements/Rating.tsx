import { Group, useMantineTheme } from "@mantine/core";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

interface RatingProps {
  rating: number;
  size?: number;
}

export default function Rating({ rating = 0, size }: RatingProps) {
  const theme = useMantineTheme();
  const SIZE_RATING = 5;

  return (
    <Group spacing={3} align="center">
      {Array(rating)
        .fill("")
        .map((_, index) => (
          <AiTwotoneStar
            key={index}
            style={{ color: theme.colors.yellow[5], fontSize: size }}
          />
        ))}
      {Array(SIZE_RATING - rating)
        .fill("")
        .map((_, index) => (
          <AiOutlineStar
            key={index}
            style={{ color: theme.colors.yellow[5], fontSize: size }}
          />
        ))}
    </Group>
  );
}
