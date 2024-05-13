import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Get In Touch</h2>
        <p>My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.</p>
        
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:mohit07.dev@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:mohit07.dev@gmail.com">Mail Me</a>
        </div>
        <div>
        <a href="tel:+917023677703"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+917023677703">(+91) 7023677703</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}