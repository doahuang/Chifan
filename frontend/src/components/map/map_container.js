import { connect } from 'react-redux';

import Map from './map';

const msp = ({ ui: { center }}, { list }) => {
  const shops = {};
  list.forEach(el => {
    const { shop } = el.props; 
    shops[shop.id] = shop;
  })

  return {
    shops,
    center
  }
};

export default connect(msp)(Map);
