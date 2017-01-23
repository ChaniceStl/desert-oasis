import React from 'react';
import $ from 'jquery';

//IMPORT COMPONENTS
import MapGoogle from './MapGoogle';

//IMPORT CSS
import '../../../styles/homepage/marketinfo.css';

const MarketInfo = React.createClass({  
  getInitialState: function() {
    return ({
          expanded: false,
          info: null
        })
  },

  componentDidMount: function() {
    var that = this;
    $.ajax({
      url: "https://data.ny.gov/resource/t2q6-3ieq.json?market_name=" + this.props.info.name,
      type: "GET"
    })
    .done(function(data) {
      setTimeout (function(){

          let newData = data.filter(market => {
            return market.operation_hours.indexOf('Dec') === -1 && market.operation_hours.indexOf('Monthly') === -1 && market.operation_hours !== undefined && market.operation_hours.indexOf(',') === -1 && market.operation_hours.indexOf('/') === -1
          }).map(market => {

          let newMarket = Object.assign({}, market, {operation_hours: []})
          let days = market.operation_hours.split(', ');

          for (let i in days) {
            var weekdays = days[i].split(/[ ]+/)
            var hours = weekdays[1].split('-')

            let dayArr = weekdays[0].indexOf('/') ? weekdays[0].split('/') : (weekdays[0].indexOf('-') ? weekdays[0].split('-') : weekdays[0])

            dayArr.forEach(day => {
              let newObject = {};
                newObject['day'] = day;
                newObject['open'] = hours[0];
                newObject['close'] = hours[1];
              newMarket.operation_hours.push(newObject);
            })
          }
            return newMarket
          });
          //
          newData.forEach((cv) => {
            
          })
          that.setState({info: newData})
        }, 1000)
    })
  },

  expand: function () {
    const expanded = this.state.expanded
    this.setState({expanded: !expanded})
  },

  render: function() {
    const expanded = this.state.expanded;
    let info = this.props.info;
    if(this.state.info) {
      let marketInfo = this.state.info[0];
      let lat = parseFloat(marketInfo.latitude)
      let lng = parseFloat(marketInfo.longitude)
      return(
        <div className="market">
          <div className="market-full-container"
            onClick={this.expand}>
            <div className="market-name">
              {marketInfo.market_name}
            </div>
            {expanded && 
            <div>
            <div className="map-container">
              <MapGoogle 
                mapLat={lat}
                mapLng={lng}/>
            </div>

            <div className="details-container">
              <ul className="demo-list-icon mdl-list">
                <li className="mdl-list__item">
                  <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-icon">place</i>
                  {marketInfo.address_line_1}, {marketInfo.city}, {marketInfo.zip}
              </span>
                </li>
                <li className="mdl-list__item">
                  <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-icon">train</i>
                  {marketInfo.location}
                </span>
                </li>
                 <li className="mdl-list__item">
                  <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-icon">schedule</i>
                  {marketInfo.operation_hours[0].day}, {marketInfo.operation_hours[0].open} - {marketInfo.operation_hours[0].close}
              </span>
                </li>
                <li className="mdl-list__item">
                  <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-icon">timelapse</i>
                  {marketInfo.operation_season}
              </span>
                </li>
                <li className="mdl-list__item">
                  <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-icon">call</i>
                  {marketInfo.phone}
              </span>
                </li>
                <li className="mdl-list__item">
                  <span className="mdl-list__item-primary-content">
                  <i className="material-icons mdl-list__item-icon">phonelink</i>
                  <a href={marketInfo.market_link.url}>Visit {marketInfo.market_name}</a>
              </span>
                </li>
              </ul>
            </div>

            </div>
            }
          </div>
        </div>
      )
    }
    else {
      return <h4>Market Info</h4>
    }
    // console.log(this.props.user)
    // console.log(this.state.data)
  }
});

export default MarketInfo;