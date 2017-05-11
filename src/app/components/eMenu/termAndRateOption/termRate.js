import React from 'react';
import GridView from './GridView';

const TermRate = (props) => {
  let data= {
    optionTypes: [
      { name: 'option 1', position: 1 },
      { name: 'option 2', position: 2 },
      { name: 'option 3', position: 3 },
      { name: 'option 4', position: 4 }
    ],
    optionArr: ['option1']
  }
  let options = data.optionTypes;
  return (
    <div className="row">
      <h4 className="term-rate">Term & Rate Options</h4>
      <div className="App">
        {
          [...options].map((option, i) =>
            <GridView key={i} optType={option} selectedOption={'CASH'} />
          )
        }
        <button className="btn btn-primary pull-right btn-cus" type="button" onClick={props.events}>get rates</button>
      </div>
    </div>
  );
}

export default TermRate;
