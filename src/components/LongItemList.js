import { useContext } from "react";
import DataContext from "../utils/DataContext";

export default function LongItemList({ items }) {
  const [data] = useContext(DataContext);
  return (
    <div>
      {data.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}
