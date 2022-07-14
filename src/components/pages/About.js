import React from 'react';
import '../../App.css';

export default function About() {
  return (
    <>
    <h1 className='about'>ABOUT</h1>
    <div className="about-section">
      <img src="images/photographer.jpg" align="left" className="about-img" alt="Photographer" />
        <p><b>Name:</b> Andrea Jarich</p>
        <p><b>Birthdate:</b> 3/15/1993</p>
        <p><b>Hometown:</b> Burlington, WI, USA</p>
        <p><b>Favorite Places in the U.S.:</b> Door County, Wisconsin. Mackinac Island, Michigan</p>
        <p><b>Favorite Places in the World: </b> Bali, United Kingdom, Japan, Tanzania </p>
        <p><b>Favorite Pieces of Camera Equipment: </b> Canon cameras, iPhone </p>
        <p><b>Favorite Photography Subjects: </b> Natural environments, Unique buildings</p>
        <p><b>Black and White or Color?: </b> Depends on what I'm taking </p>
        <p><b>Tip for New Photographers?: </b> Practice and experiment </p>
    </div>
    </>
  )
}
