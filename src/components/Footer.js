import Form from '../index.css';
function Footer () {
  const style = {
    display:'none' 
  }
    return(
        <div className="container" id = 'footer' style={style}>
        <h2>Contact Me</h2>
        <p>Phone No. (813) 505-8531</p> 
        <p>Email Address agracenotary@gmail.com</p>
        {/* <Form/> */}
      </div>
    )
}
export default Footer;