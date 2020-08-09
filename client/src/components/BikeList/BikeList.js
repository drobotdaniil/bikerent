import React from 'react';
import { ListWrapper } from './BikeList.style';
import { BikeItem } from '../BikeItem/BikeItem';

export const BikeList = (props) => {
  const { listData } = props;
  return (
    <ListWrapper>
      {listData.length ? (
        listData.map((item) => <BikeItem bike={item} key={item.id} />)
      ) : (
        <div>No bikes</div>
      )}
    </ListWrapper>
  );
};
