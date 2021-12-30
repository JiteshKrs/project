
import homeStyles from '../styles/Home.module.scss';

const Home = () => {
    return (
        <header id="home"  className={homeStyles.container}>
            <h1>Hi, I’m <span>Jitesh <span className={homeStyles.noVisible}>Kumar</span></span></h1>
            <h2>Web Developer</h2>
            <button className={homeStyles.btn}><a href="#contact">Contact Me</a></button>
        </header>
    )
}

export default Home;
