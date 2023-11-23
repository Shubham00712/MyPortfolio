import React,{createRef} from 'react';
import './contactme.css';
import github from './github.png';
import linkedin from './linkedin.png';
import insta from './instagram.png';
import emailjs from '@emailjs/browser';

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            msg:""
        }
        this.form=createRef()
    }

    sendEmail = (e) =>{
                e.preventDefault();
                console.log(this.form)
                emailjs.sendForm('service_4479dr5', 'template_2e6q7xg', this.form.current, 'z5E5zuofCRlZQgoh8')
                  .then((result) => {
                      console.log(result.text);
                      this.setState({name:"",email:"",msg:""})
                      alert('Thankyou for contacting!')
                  }, (error) => {
                      console.log(error.text);
                      alert("There might be some server issue! We're looking into it. Thankyou for your patience")
                  });
    }
    render(){
    return(
        <div className="main" id='contact'>
            <h1>Contact Me</h1>
            <form id='contactform' ref={this.form} onSubmit={this.sendEmail}>
                <label for="personname">Name:</label>
                <input type="text" id="personname" name="personname" placeholder="Enter your name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} required/><br></br>
                <label for="personmailid">Email:</label>
                <input type="email" id='personmailid' name="personmailid" placeholder="Enter your email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} required/><br></br>
                <label for="message">Message:</label>
                <textarea type="text" id="message" name="message" rows='5' placeholder="Enter your message..." value={this.state.msg} onChange={(e)=>{this.setState({msg:e.target.value})}} required></textarea><br></br>
                <center><input type="submit" value="Send" id="submitbtn"/></center>
            </form>
            <div className="links">
                <a href="https://github.com/Shubham00712" target='_blank'><img src={github} alt="Github" style={{backgroundColor:"white"}}/></a>
                <a href="https://www.linkedin.com/in/shubham-sharma-34b91a195" target='_blank'><img src={linkedin} alt="LinkedIn"/></a>
                <a href="https://instagram.com/theshubhamsharma_07" target='_blank'><img src={insta} alt="Instagram"/></a>
            </div>
        </div>
    )
}
}

export default Contact;