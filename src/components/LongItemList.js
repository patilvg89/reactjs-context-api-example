import React from 'react';
import { useContext } from "react";
import DataContext from "../utils/DataContext";
import ItemGroup from './ItemGroup';

export default function LongItemList({ items }) {
  const [data, setData, selectItem] = useContext(DataContext);
  return (
    <div className="item-list">
      {Object.keys(data).map(key => {
        return (
          <React.Fragment key={`ig-${key}`}>
            <h1>{key}</h1>
            <ItemGroup
              items={data[key]}
              group={key}
              updatedAt={data[key].updatedAt}
              selectItem={selectItem}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}
