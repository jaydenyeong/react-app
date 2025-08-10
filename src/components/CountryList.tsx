import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function CountryList({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="card shadow-sm">
      <div className="card-header fw-bold">{heading}</div>
      <ul className="list-group list-group-flush">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              "list-group-item list-group-item-action " +
              (selectedIndex === index ? "active" : "")
            }
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
