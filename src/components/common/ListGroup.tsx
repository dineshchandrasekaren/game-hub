import { useState } from "react";

interface ListGroup<T> {
  title: string;
  items: T[];
  onSelectItem: (item: T) => void;
}
type Entity = { id: number; name: string; image?: string };

function ListGroup<T extends Entity>({
  title,
  items = [],
  onSelectItem,
}: ListGroup<T>) {
  const [selectedValue, setSelectedValue] = useState(-1);
  return (
    <>
      <h1
        style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px" }}
      >
        {title}
      </h1>
      <ul>
        {items.map((item) => (
          <li
            className={selectedValue === item.id ? "active" : ""}
            key={item.name || null}
            onClick={() => {
              setSelectedValue(() => {
                onSelectItem(item);
                return item.id;
              });
            }}
          >
            {item?.image && <img src={item.image} />}
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
