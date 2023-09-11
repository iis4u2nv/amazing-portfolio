function Footer () {
  const style = {
    display:'none' 
  }
    return (
      <div className="container" id="footer" style={style}>
        <h2>Contact Me</h2>
        <p>Phone No. (813) 505-8531</p>
        <p>Email Address agracenotary@gmail.com</p>

        <form>
          <label>Name:</label>
          <input label="name" id="name" required />
          <br></br>
          <label>Email:</label>
          <input label="email" id="email" required />
          <br></br>
          <label>Message:</label>
          <input label="message" id="message" required />
          <input type="submit"></input>
        </form>
      </div>
    );
}
export default Footer;