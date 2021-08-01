import React,{Component} from 'react';
import './stylesheet.css'
class Users extends Component {
  state = {
    greeting : 'Our Users', 
    listUsers:[
      
        {
        name: 'Lerato',
        surname: 'Khumalo',
        location: 'Jane Furse',
        age:13
        },
        {
         name: 'Thandie',
         surname: 'Fenyane',
         location: 'Polokwane',
         age:14
        },
        {
          name: 'Maria',
          surname: 'Fenyane',
          location: 'Lebowakgomo',
          age:22
        },
        {
        name: 'Ashley',
        surname: 'Khwinana',
        location: 'Moletjie',
        age:23
       },
       {
        name: 'Mind',
        surname: 'Malebana',
        location: 'Seshego',
        age:24
       }
       
      
    ]
   }
  render() { 
    return ( 
      <div className='user-container'>
        
        <div className='flex-wrapper'>
          <div className='flex-left'>
          <h1>{this.state.greeting}</h1>
            <ul>
              {this.state.listUsers.map(el=><li>{el.name + ' | ' + el.surname +  ' | ' + el.location + ' | ' + el.age}</li>)}
          
           </ul>
          </div>
          <div className='flex-right'>
            <img src='boring-office-work-cartoon-vector-10571941.jpg' alt = 'worker' />
          </div>
        </div>
      </div>
     );
  }
 
}
 
export default Users ;
