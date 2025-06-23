import {
  Portal,
  Select,
  createListCollection,
  ListItem,
} from "@chakra-ui/react";

type SelectItem = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  items: SelectItem[];
  value: string;
  onChange: (val: string) => void;
  label?: string;
  placeholder?: string;
};

const CustomSelect = ({
  items,
  value,
  onChange,
  label = "Select",
  placeholder = "Choose an option",
}: CustomSelectProps) => {
  const collection = createListCollection({ items });

  return (
    <Select.Root
      collection={collection}
      value={value}
      onValueChange={(e) => onChange(e.value)}
      width="320px"
    >
      <Select.HiddenSelect />
      <Select.Label>{label}</Select.Label>

      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>

      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item: ListItem) => (
              <Select.Item item={item} key={item.value}>
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default CustomSelect;
