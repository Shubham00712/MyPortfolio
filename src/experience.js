import React from "react";
import './experience.css';

function Experience(){
    return(
        <div className="expmain" id="experience">
            <h1>Experience</h1>
            <div className="exp">
            <h2>MAQ Software</h2>
            <div>
                <div className="role"><h3>Associate Software Engineer -Intern</h3><p><b>April, 2022-2023</b></p></div>
                <div className="role"><h3>Software Engineer-1</h3><p><b>April-October, 2023</b></p></div>
            </div>
            <div className="workdone"><ul>
                <li>Developed and maintained end-to-end operations of ETL and work with large data sets using Azure Synapse, Azure Databricks and Azure data Lake Storage.</li>
                <li>Developed PowerBI reports and their datasets with DAX measures and appropriate visuals as per business requirements.</li>
                <li>Create SQL queries to pull large amount of data from different sources and applied logic to process data as per requirements.</li>
                <li>Worked on end-to-end project delivery using agile methodology.</li>
                <li>Performed debugging, error handling mechanism and data clean-up analysis within large datasets.</li>
                <li>Performed data analysis of different datasets.</li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Experience;