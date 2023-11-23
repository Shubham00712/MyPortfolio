import React from "react";
import './skills.css';

class Skills extends React.Component{

    constructor(props){
        super(props);
        this.state={
            languages: ["HTML","CSS","Javascript","Java","SQL","DAX"],
            tools:["Visual Studio Code","Microsoft Visual Studio","DAX Studio","PowerBI"],
            techs:["ReactJS","Github","Redux","SQL Server Management Services"]
        }
    }

    render(){
        return <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="info">
                <p><b>Languages:</b> {this.state.languages.map((lang,idx)=>{return (idx!==this.state.languages.length-1) ? lang+", ": lang})}</p>
                <p><b>Tools:</b> {this.state.tools.map((tool,idx)=>{return (idx!==this.state.tools.length-1) ? tool+", ": tool})}</p>
                <p><b>Frameworks/Technologies:</b> {this.state.techs.map((tech,idx)=>{return (idx!==this.state.techs.length-1) ? tech+", ": tech})}</p>
                <br></br>
                <div>
                    Below are some Front End projects I have worked on:
                <ul className="projects">
                    <li><p><h4>Swiggy Landing Page: </h4>Responsive homepage of Swiggy created using <b>ReactJS</b></p><a href="https://shubham00712.github.io/Swiggy-LandingPage/" target="_blank">Live site here</a></li>
                    <li><p><h4>Movies App: </h4>WebPage to add or mark favourite/unfavourite movies created using <b>ReactJS, Redux</b></p><a href="https://shubham00712.github.io/Movies-app/" target="_blank">Live site here</a></li>
                    <li><p><h4>Sudoku Validation: </h4>Simple webpage for validation of Sudoku game using <b>javascript</b></p><a href="https://shubham00712.github.io/Sudoku/" target="_blank">Live site here</a></li>
                    <li><p><h4>Game: </h4>Simple game created using <b>javascript</b></p><a href="https://shubham00712.github.io/See-the-Sky/" target="_blank">Live site here</a></li>
                </ul>
                </div>
            </div>
        </div>
    }

}

export default Skills;