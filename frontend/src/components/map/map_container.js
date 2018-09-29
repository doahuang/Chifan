import { connect } from 'react-redux';

import Map from './map';

const msp = ({ ui: { center }}) => ({
  center
});

export default connect(msp)(Map);
