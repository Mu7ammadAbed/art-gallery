import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaBehance,
  FaInstagram,
  FaMapMarker,
  FaPhone,
  FaEnvelope,
  FaSkype,
} from 'react-icons/fa';
import navLogo from '../../../assets/images/logo.png';
import './style.css';

const Footer = () => {
  return (
    <div className="main-container-footer">
      <div className="footer-container">
        <div className="logo-container">
          <img src={navLogo} alt="logo" />
          <span className="logo__title">برواز</span>
          <p>
            برواز هي منصة عربية تساعد الرسامين على بيع لوحاتهم الفنية بأفضل سعر
            و وبأفضل وسيلة للتسويق الالكتروني نسعى لان نكون الأفضل والاعلى جودة
          </p>
        </div>
        <div className="contact-container">
          <h3 className="contact-title">تواصل معنا</h3>
          <div className="contact-icons">
            <div className="iconDev">
              <FaMapMarker className="icons" size="1.2em" />
              <span>غزة - فلسطين</span>
            </div>
            <div className="iconDev">
              <FaPhone className="icons" size="1.2em" />
              <span>+972-000000</span>
            </div>
            <div className="iconDev">
              <a
                href="mailto:berwaz.g@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="icons" size="1.2em" />
              </a>
              <span>berwaz.g@gmail.com</span>
            </div>
            <div className="iconDev">
              <a
                href="https://skype.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSkype className="icons" size="1.2em" />
              </a>
              <span>berwaz</span>
            </div>
          </div>
        </div>
        <div className="follow-container">
          <h3>تابعنا على</h3>
          <div className="follow-icons">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icons" size="1.2em" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest className="icons" size="1.2em" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icons" size="1.2em" />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="icons" size="1.2em" />
            </a>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance className="icons" size="1.2em" />
            </a>
          </div>
        </div>
      </div>
      <div className="copy-right-container">
        <div className="copy-right">
          <span>سياسات المتجر</span>
          <span> الأسئلة الشائعة</span>
          <span> فريق العمل</span>
          <span>‫‪2020‬‬ ‫‪All‬‬ ‫‪rights‬‬ ‫‪reserved.BERWAZ‬‬ &copy;</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
