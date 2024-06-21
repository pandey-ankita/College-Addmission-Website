import React from 'react'
import './Help.css'
import msg_icon from '../../assets/message.png'
import mail_icon from '../../assets/message-icon.png'
import phone_icon from '../../assets/call.png'
import location_icon from '../../assets/location.png'

const Help = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8feeb9d8-bde6-4674-8f75-9bae0192d955");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
  <>
   <div className="contact" id='Help'>
<div className="contact-col">
    <h3>Send me message<img src={msg_icon} alt="" /></h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestiae deserunt non rerum, saepe, vitae quos ex dolore praesentium fugit temporibus quo, culpa iure. Molestias, quo. Dolore beatae doloremque magnam?</p>
<ul>
    <li><img src={mail_icon} alt="" />ankitapandey182002@gmail.com</li>
    <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
    <li><img src={location_icon} alt="" />132, My Street, Kingston, New York 12401. <br />united state</li>
</ul>
</div>

<div className="contact-col">
    <form onSubmit={onSubmit}>
        <label>your name</label>
        <input type="text" name='name' placeholder='Enter Your Name' required />
        <label>phone number</label>
        <input type="tel" name='phone' placeholder='Enter Your Number' required />
        <label>write your messages here</label>
        <textarea name="message" rows='6' placeholder='Enter Your Message' required></textarea>
    <button type='submit' className='btn dark-btn'>submit now</button>
    </form>
    <span>{result}</span>
</div>
</div>
    </>
  )
}

export default Help