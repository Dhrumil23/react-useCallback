import React, { FC, useEffect, useState } from 'react';

type List = {
  itemList: () => number[];
};

const List: FC<List> = ({ itemList }) => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(itemList());
    console.log('item updted.');
  }, [itemList]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default List;
