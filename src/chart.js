import React from 'react';
import { Pie } from 'react-chartjs-2';



const PieDemo = (props) => {

    return (
        <div>
            <br />
            <h2>Languages Used </h2>
            <Pie data={props.data} height={80} width={100} options={{
                maintainAspectRatio: false
            }} />
        </div>
    );

}

export default PieDemo;