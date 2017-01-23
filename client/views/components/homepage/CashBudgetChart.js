import React from 'react';
import { Chart } from 'react-google-charts';

//IMPORT CSS
import '../../../styles/homepage/budgetchart.css';

const CashBudgetChart = React.createClass({
	
	render() {
		return(
			<div>
				<div className={"my-pretty-chart-container"}>
      <Chart
        chartType="PieChart" 
        data={[
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]}
        options={{ pieHole: 0.4 }}
        graph_id="ScatterChart"
        width="50%"
        height="400px"
        legend_toggle
       />
    </div>
			</div>
		)
	}
});

export default CashBudgetChart;