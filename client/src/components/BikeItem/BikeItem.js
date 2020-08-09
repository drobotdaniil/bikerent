import React from 'react';

import { connect } from 'react-redux';
import { ItemWrapper, ActionsWrapper } from './BikeItem.style';
import { Text } from '../Typography';
import { Button } from '../Button';
import { deleteBikeFromList, patchBike } from '../../store/actions/bikeList';

const BikeItemComponent = (props) => {
  const {
    bike: { name, type, price, available, id },
  } = props;

  const onDelete = () => {
    const { deleteBikeFromList } = props;
    deleteBikeFromList({ id });
  };

  const onEdit = () => {
    const { patchBike } = props;
    patchBike({ id });
  };

  return (
    <ItemWrapper>
      <Text>
        {name} / {type} / ${price}
      </Text>
      <ActionsWrapper>
        {!available ? (
          <Button text={`Cancel rent`} onClick={onEdit} />
        ) : (
          <>
            <Button text={`Rent`} onClick={onEdit} />
            <Button text={`Delete`} onClick={onDelete} />
          </>
        )}
      </ActionsWrapper>
    </ItemWrapper>
  );
};

const mapDispatchToProps = {
  deleteBikeFromList,
  patchBike,
};

export const BikeItem = connect(null, mapDispatchToProps)(BikeItemComponent);
