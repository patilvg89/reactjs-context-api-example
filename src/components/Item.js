import React from "react";

function Item({ item, selectItem, group, subgroup }) {
  return (
    <div
      className={`item${item.selected ? " item--selected" : ""}`}
      onClick={() => selectItem(group, subgroup, item.id)}
    >
      <div className="item-img">
        <img src="https://via.placeholder.com/64.png" />
      </div>
      <span>{item.name}</span>
    </div>
  );
}
const ItemMemo = React.memo(Item, (prevProps, nextProps) => {
    if (prevProps.item.selected === nextProps.item.selected) {
        return true;
    }
    return false;
})
export default ItemMemo;