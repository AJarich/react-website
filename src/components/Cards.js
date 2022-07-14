import React from 'react'
import CardItem from './CardItem.js';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
          <h1>Check out these BEAUTIFUL photos!</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                  src='images/castle.JPG'
                  text="Dazzling Orlando during December of 2021"
                  label="Orlando, FL"
                  path="/orlando"
                />
                <CardItem
                  src='images/doorcounty.jpg'
                  text="Beautiful Door County during the Summertime"
                  label="Door County WI"
                  path=""
                />
              </ul>
              <ul className="cards__items">
                <CardItem
                   src='images/forest.jpg.jpg'
                   text='Life at home in my hometown of Burlington'
                   label='Burlington, WI'
                   path=''
                 />
                 <CardItem
                   src='images/mackinac.jpg'
                   text='Experiencing a lovely summer in Mackinac Island'
                   label='Mackinac Island, MI'
                   path=''
                 />
              </ul>
            </div>
          </div>
        </div>
    )
}

export default Cards;
