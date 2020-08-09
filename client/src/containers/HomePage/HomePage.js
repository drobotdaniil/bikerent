import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getBikeList } from '../../store/actions/bikeList';
import { selectBikeList } from '../../store/selectors/bikeListSelector';
import { MainTitle, Title } from '../../components/Typography';
import { BikeList } from '../../components/BikeList';
// import { Form } from '../../components/Form/Form';
import Form from '../../components/Form/FormClass';
import { Wrapper } from './HomePage.style';

const HomePageComponent = (props) => {
  const { getBikeList, bikeList } = props;

  useEffect(() => {
    getBikeList();
  }, [getBikeList]);

  const renderBikeList = () => {
    const awailableBikes = bikeList.filter((bike) => bike.available);
    const notAwailableBikes = bikeList.filter((bike) => !bike.available);
    const price = notAwailableBikes.reduce((acc, cur) => {
      const rentedTimePlus20h = moment(cur.rentedDate).add(20, 'hours');
      const isDoublePrice = moment(rentedTimePlus20h).isBefore(moment());
      if (isDoublePrice) return acc + cur.price * 2;
      return acc + cur.price;
    }, 0);

    return (
      <>
        <Wrapper>
          <Title>
            <span role='img' aria-label='emoji'>
              &#129321;
            </span>{' '}
            Your rent: (Total: ${price})
          </Title>
          <BikeList listData={notAwailableBikes} />
          <Title>
            <span role='img' aria-label='emoji'>
              &#128690;
            </span>{' '}
            Available bicycles ({awailableBikes.length})
          </Title>
          <BikeList listData={awailableBikes} />
        </Wrapper>
      </>
    );
  };

  return (
    <div>
      <MainTitle>Awesome Bike Rental</MainTitle>
      <Form />
      {bikeList ? renderBikeList() : <Title>Data is fetching</Title>}
    </div>
  );
};

const mapDispatchToProps = {
  getBikeList,
};

const mapStateToProps = (state) => ({
  bikeList: selectBikeList(state),
});

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);
