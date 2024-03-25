import React from 'react';
import "./Home.css";
import I18n from './../../utils/I18n';

function Home() {
    const usersCount=100;

   
  return (
    <div>
        
        <h1>{I18n("welcomeMessage")}</h1>
        <p>{I18n("normalMessage")}</p>
        <h1>{I18n("greetMessage")} </h1>
        <h2>{I18n("endMessage")} </h2>

        <select
        defaultValue={localStorage.getItem("lang")}
        onChange={(e)=>{
            localStorage.setItem("lang",e.target.value);
            window.location.reload();
        }}>
            <option value="mr">marathi</option>
            <option value="en">english</option>
            <option value="hi">hindi</option>
        </select>


        <p>
          {I18n ("usersStatMessage","<studentCount>" , usersCount)} 
        </p>
    </div>
  )
}

export default Home