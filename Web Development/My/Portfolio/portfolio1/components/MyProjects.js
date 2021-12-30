import Image from "next/image";

import myprojectsStyle from "../styles/MyProjects.module.scss";

const MyProjects = () => {
  return (
    <>
      <div id="projects" ></div>
      <h1 className={myprojectsStyle.transH1}>My Projects</h1>
      <div  className={myprojectsStyle.container}>


        <section className={myprojectsStyle.project}>
          <div className={myprojectsStyle.imgContainer}>
            <Image
              src="/../public/images/my-projects/davidChu.png"
              alt="PR1"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>

          <div className={myprojectsStyle.projectBox}>
            <h2>Project</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet,</li>
              <li>consectetur adipiscing elit. Dolor, </li>
              <li>tempor at tincidunt proin amet.</li>
              <li>Vitae sit id ultrices cras curabitur </li>
            </ul>
            <button className={myprojectsStyle.btn}><a href="https://jiteshkrs.github.io/DavidChuBistro/module/module%205/module5.html" target="_blank" rel="noopener noreferrer">Live Site</a></button>
            <button className={myprojectsStyle.btn}>&lt;/&gt; Code</button>
          </div>
        </section>

        <section className={myprojectsStyle.project}>
          <div className={myprojectsStyle.imgContainer}>
            <Image
              src="/../public/images/my-projects/basicTodoList.png"
              alt="PR2"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>

          <div className={myprojectsStyle.projectBox}>
            <h2>Project</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet,</li>
              <li>consectetur adipiscing elit. Dolor, </li>
              <li>tempor at tincidunt proin amet.</li>
              <li>Vitae sit id ultrices cras curabitur </li>
            </ul>
            <button className={myprojectsStyle.btn}><a href="https://jiteshkrs.github.io/Basic-ToDoList/" target="_blank" rel="noopener noreferrer">Live Site</a></button>
            <button className={myprojectsStyle.btn}>&lt;/&gt; Code</button>
          </div>
        </section>

        <section className={myprojectsStyle.project}>
          <div className={myprojectsStyle.imgContainer}>
            <Image
              src="/../public/images/my-projects/portfolio1.png"
              alt="PR3"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          <div className={myprojectsStyle.projectBox}>
            <h2>Project</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet,</li>
              <li>consectetur adipiscing elit. Dolor, </li>
              <li>tempor at tincidunt proin amet.</li>
              <li>Vitae sit id ultrices cras curabitur </li>
            </ul>
            <button className={myprojectsStyle.btn}><a href="https://jiteshkrs.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Live Site</a></button>
            <button className={myprojectsStyle.btn}>&lt;/&gt; Code</button>
          </div>
        </section>
        
      </div>
    </>
  );
};
export default MyProjects;
