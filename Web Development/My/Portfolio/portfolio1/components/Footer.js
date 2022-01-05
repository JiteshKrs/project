import Img from "next/image";
import footerStyles from "../styles/Footer.module.scss";
import emailsvg from ".//../public/images/footer/email.svg"
import githubsvg from ".//../public/images/footer/github.svg"
import linkedInsvg from ".//../public/images/footer/linkedin.svg"

const Footer = () => {
  return (
    <div className={footerStyles.container}>
      <div>
        <span>
        <span className={footerStyles.icon}>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jiteshkrs97@gmail.com" target="_blank" rel="noopener noreferrer">
          <Img
            src{...emailsvg}
            width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain" alt="email"
          /></a>
          </span>
          <span className={footerStyles.icon}>
          <a href="https://github.com/JiteshKrs" target="_blank" rel="noopener noreferrer">
          <Img
            src{...githubsvg}
            width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain" alt="github"
          /></a>
          </span>
          <span className={footerStyles.icon}>
          <a href="https://www.linkedin.com/in/jitesh-kumar-80a478128/" target="_blank" rel="noopener noreferrer">
          <Img
            src{...linkedInsvg}
            width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain" alt="linkedin"
          /></a>
          </span>
        </span>
      </div>
      <p>Desinged & Coded by Jitesh Kumar</p>
      <p><span className={footerStyles.mail}>email: </span> <u>{`jiteshkrs97@gmail.com`}</u></p>
    </div>
  );
};

export default Footer;
