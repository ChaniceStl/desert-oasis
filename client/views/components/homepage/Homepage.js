//IMPORT MODULES
import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

//IMPORT COMPONENTS 
import SnapBudgetChart from './SnapBudgetChart';
import CashBudgetChart from './CashBudgetChart';
import MarketInfo from './MarketInfo';

//IMPORT CSS
import '../../../styles/homepage/homepage.css';

//BUILD COMPONENT
const Homepage = React.createClass({
	getInitialState(){
		return(
			{
				lat:'', 
				lng:'',
				marketName:'',
				markets:[], 
				data:null
			}
		)
	},
	componentDidMount(){
		var that=this
		$.ajax({
			url:`/api/user/username/${that.props.params.username}`
		})
		.done(data => {
			return (
				that.setState({data:data, lat:data, markets: data.Markets})
			)
		})
	},
	generateMarkets() {
		if (this.state.markets) {
			return(
				<div>
			{this.state.markets.map( function (market, index) {
				return(
					<div key={market.id}>
						<MarketInfo 
							info={market}/>
					</div>
				)
			})}
			</div>
			)
		} else {
			return(
				<div>
					<button>Search For Markets</button>
				</div>
			)
		}
	},
	render() {
		return(
			    	<div className="homepage-container">

			    		<div className="card card-1">
			    			
			    			<div className="budget">
			    				<div className="budget-left">
			    					<img src="https://s25.postimg.org/43knj2xgf/shopping_cart.png"
			    						alt="SNAP BALANCE" />
			    				</div>
			    				<div className="budget-right">
			    					<div className="budget-amount">
			    						$536.96
			    					</div>
			    					<div className="budget-title">
			    						SNAP BUDGET
			    					</div>
			    				</div>
			    			</div>

			    			<div className="cash">
			    				<div className="cash-left">
			    					<img src="https://s25.postimg.org/rvtyulzhb/credit_card.png"
			    						alt="CASH BALANCE" />
			    				</div>
			    				<div className="cash-right">
			    					<div className="cash-amount">
			    						$200.00
			    					</div>
			    					<div className="cash-title">
			    						CASH BUDGET
			    					</div>
			    				</div>
			    			</div>

			    		</div>

			    		<div className="card card-1">
			    			<div className="markets">

			    				{this.generateMarkets()}

			    			</div>
			    		</div>

			    	</div>
		)
	}
})

export default Homepage;