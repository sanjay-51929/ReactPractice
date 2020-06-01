import React, {Component} from 'react';

const _coworkers = [
    {first_name: 'Max', last_name: 'Mustermann', is_in_office: true},
    {first_name: 'Vladmimir', last_name: 'Leles', is_in_office: true},
    {first_name: 'Tobias', last_name: 'Anhalt', is_in_office: true},
  ];
  
export default class CoworkerList extends React.Component {
        state = {
            coworkers : _coworkers
        };
    
      handleStateChange = (index) => {
          var co = this.state.coworkers;
          co[index].is_in_office = !co[index].is_in_office; 
          this.setState({ coworkers : co });
      }
  
      render() {
          return (
          <ul>
              { 
              this.state.coworkers.map((coworker, index) => (
                <li key={index} > {coworker.first_name}  {'  '} 
                     {coworker.last_name} {'                '}                    
                    <button onClick={() => this.handleStateChange(index)}>
                        {coworker.is_in_office ? 'In Office' : 'Out of Office'}
                    </button>
                </li>
              ))
              }
          </ul>
          );
      }
  };