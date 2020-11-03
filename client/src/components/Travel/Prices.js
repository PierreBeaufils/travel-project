import React from 'react';
import {
  Map, Home, Activity, CornerDownRight, Info, Edit,
} from 'react-feather';
// import PropTypes from 'prop-types';
import './travel.scss';

const Prices = ({prices}) => {
  
 console.log(prices);
  return (
    <div className="card__container prices_card">
    <h2>Coûts prévisionnels</h2>
 <h4><Map color="#2B7AFD" size={15} /> Transports : {prices.transp_total_price} €</h4>
 <h4><Home color="#2B7AFD" size={15} /> Hébergement : {prices.acco_total_price} €</h4>
 <h4><Activity color="#2B7AFD" size={15} /> Activités : {prices.activ_total_price} €</h4>
 <h3><CornerDownRight color="#2B7AFD" size={15} /> Total : {prices.global_price} €</h3>
    </div>
  );
};
// Prices.propTypes = {

// };

// Prices.defaultProps = {

// };

export default Prices;
