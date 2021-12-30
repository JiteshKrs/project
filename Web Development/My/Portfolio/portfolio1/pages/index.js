import Nav from '../components/Nav';
import Home  from '../components/Home';
import MySkills from '../components/MySkills';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';

 const index = () => {
  return (
    <>
      <Nav/>
      <Home/>
      <MySkills/>
      <AboutMe/>
      <ContactMe/>
      <Footer/>
    </>
  )
}

export default index;
