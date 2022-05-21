import React from "react";
import Item from "./Item";

function ItemGroup({ items, selectItem, group }) {
  return (
    <div className="item-group">
      <div className="item-group--a">
        {items.SUB_GROUPA.items.map(item => (
          <Item
            group={group}
            subgroup={"SUB_GROUPA"}
            key={`item-${item.id}`}
            item={item}
            selectItem={selectItem}
          />
        ))}
      </div>
      <div className="item-group--b">
        {items.SUB_GROUPB.items.map(item => (
          <Item
            group={group}
            subgroup={"SUB_GROUPB"}
            key={`item-${item.id}`}
            item={item}
            selectItem={selectItem}
          />
        ))}
      </div>
    </div>
  );
}

const ItemGroupMemo = React.memo(ItemGroup, (prevProps, nextProps) => {
    if (prevProps.updateAt === nextProps.updateAt) {
        return true;
    }
    return false;
})
export default ItemGroupMemo;