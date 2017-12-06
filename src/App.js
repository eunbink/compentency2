import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import Img from './img.jpg'
import './App.css'


export default function App() {
  return (
    <div>

      <button className="hi" onClick={() => {
        let animal = { name: "monkey", age: 8, info: { food: 'meat' } },
          { name, age, info } = animal;
        alert(name);
      }}>Click me</button>

      <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
      <li><NavLink activeClassName='active' to='/browse'>Browse</NavLink></li>

      <img className="img" src={Img} />

      <div></div>

      <Switch>
        <Route path="/browse/:name" render={(props) => <h1>{`${props.match.params.name}`}</h1>} />
      </Switch>
      <button className="button" disabled>disabled button</button>
      <button type="button" autofocus>autofocus button</button>
    </div>
  );
}


// Explain Database
// // Student can create tables in a database: 
//  below is an example schema!!! 
// create table tablename ( columnname datatype) 
//  CREATE TABLE requests (
//     id SERIAL PRIMARY KEY,
//     user_id INTEGER,
//     start_date varchar(50),
//     end_date varchar(50),
//     reason varchar(50),
//     approval varchar(50)
// )
// 
//  data types affects overall performance as the database especiall in time and space savings.
// datatypes checks to make sure the type of the variable is the same type you are expecting so it helps to debug and preventing from errors.


//doctypes can change how a browser reads a file
//<!DOCTYPE html> is used in html5 and theres alot of doctypes that you can add after !DOCTYPE and based on the doctype, they could restrict you from using some elements, or does not allow framesets. and it
//specifies the rules for the markup language, so that the browsers render the content correctly. 