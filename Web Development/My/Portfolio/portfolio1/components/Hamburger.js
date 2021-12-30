import navStyles from '../styles/Nav.module.scss';
export default function Hamburger({ isOpen }) {
  return (
    <>
      <div className={navStyles.hamburger}>
        <span className={navStyles.bar + " " + navStyles.bar1}></span>
        <span className={navStyles.bar + " " + navStyles.bar2}></span>
        <span className={navStyles.bar + " " + navStyles.bar3}></span>
      </div>
      <style jsx>
        {`
          .hamburger {
            width: 2rem;
            heigth: 2rem;
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;
            z-index: 10;
          }
          .bar {
            width: 2rem;
            heigth: 0.25rem;
            border-radius: 10px;
            background-color: black;
            transform-origin: 1px;
            transition: all 0.3s linear;
          }
          .bar1 {
            transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
          }
          .bar2 {
            transform: ${isOpen ? "translateX(100%)" : "translateX(0)"};
            opacity: ${isOpen ? 0 : 1};
          }
          .bar3 {
            transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
          }
        `}
      </style>
    </>
  );
}
