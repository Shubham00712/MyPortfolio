import React from 'react';
import './about.css';
import desk from './desk.png';

function About(){
    return(
        <div className='about' id='about'>
            <div><p><b>Hi!</b> My name is <h1>Shubham Sharma</h1> I am Front-End developer, graduated from batch 2023.
            I have recently worked as Software Engineer working on various techs such as Azure Databricks, Azure Synapse, PowerBI, etc.
            Also, I have worked on some web related projects using Js, ReactJS, etc. I have completed my graduation in B.E (CSE) from Chitkara University, Punjab.
            I like to explore new things that enhances my knowledge and skills to work better. Apart from this, my hobbies are listening music, bhangra, role playing.</p>
            </div>
            <div className='deskimg'><img src={desk}/></div>
        </div>
    )
}

export default About;