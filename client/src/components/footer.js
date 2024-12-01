import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className='footer-distributed'>
      <div className='footer-left'>
        <h3>
          VOICES<span> WITHIN</span>
        </h3>
        <p className='footer-company-name'>
          Copyright &copy; 2024-25 <strong>Voices Within</strong>
          <br></br> All Rights Reserved.
        </p>
        <p className='footer-company-name'>
          <strong>
          </strong>
        </p>
      </div>
      <div className='footer-center'>
        <div>
          <i className='fa-solid fa-location-dot'></i>
          <p>
            <span>BML Munjal University, NH-48</span>
            Gurugram, Haryana, India
          </p>
        </div>
        <div>
          <i className='fa fa-phone'></i>
          <p>+91 XXXXXXXXXX</p>
        </div>
        <div>
          <i className='fa fa-envelope'></i>
          <p>
            <a href='mailto:swati.kapasiya.23cse@bmu.edu.in'>
              voiceswithin@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className='footer-right'>
        <p className='footer-company-about'>
          <span>About Our Initiative</span>
          <span>
            {" "}
            Voices Within is a comprehensive mental health website that aims
            to provide valuable resources, support, and information to
            individuals seeking assistance, understanding, and empowerment on
            their mental well-being journey.
          </span>
        </p>
        <div className='footer-icons'>
          <a href='https://www.linkedin.com/'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a href='https://www.facebook.com/'>
            <i className='fa-brands fa-facebook'></i>
          </a>
          <a href='https://www.youtube.com/'>
            <i className='fa-brands fa-youtube'></i>
          </a>
          <a href='https://www.instagram.com/'>
            <i className='fa-brands fa-instagram'></i>
          </a>
          <a href='https://www.twitter.com/'>
            <i className='fa-brands fa-twitter'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
