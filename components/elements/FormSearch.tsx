import { Box, Button, Input, Select, useMantineTheme } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { BsPersonFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Calendar } from "tabler-icons-react";

interface FormSearchProps {
  onSubmit?: () => void;
  type?: 1 | 2;
}

export default function FormSearch({ onSubmit, type = 1 }: FormSearchProps) {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        background:
          theme.colorScheme === "light" ? "transparent" : "transparent",
        borderRadius: type === 1 ? 40 : theme.radius.sm,
        display: "inline-flex",
        alignItems: "center",
        width: 900,
        padding: 10,
        paddingLeft: 30,
        border: `1px solid ${
          theme.colors.gray[theme.colorScheme === "light" ? 3 : 7]
        }`,
        // boxShadow: theme.shadows.sm,
      }}
    >
      <Input
        variant="unstyled"
        size="md"
        placeholder="Place"
        icon={
          <FiMapPin style={{ color: theme.colors[theme.primaryColor][5] }} />
        }
      />
      <DatePicker
        variant="unstyled"
        size="md"
        icon={
          <Calendar
            size={18}
            style={{ color: theme.colors[theme.primaryColor][5] }}
          />
        }
        placeholder="Check in"
      />
      <DatePicker
        variant="unstyled"
        size="md"
        icon={
          <Calendar
            size={18}
            style={{ color: theme.colors[theme.primaryColor][5] }}
          />
        }
        placeholder="Check out"
      />
      <Select
        variant="unstyled"
        size="md"
        placeholder="Person"
        icon={
          <BsPersonFill
            style={{ color: theme.colors[theme.primaryColor][5] }}
          />
        }
        data={[
          {
            label: "asd",
            value: "asd",
          },
          {
            label: "asd",
            value: "asd",
          },
        ]}
      />
      <Button
        sx={{ height: 60, marginLeft: 10 }}
        radius={type === 1 ? "xl" : "sm"}
        onClick={onSubmit && onSubmit}
      >
        Search
      </Button>
    </Box>
  );
}
