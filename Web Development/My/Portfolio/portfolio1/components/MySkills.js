import MyProjects from "./MyProjects";
import Image from "next/image";

import myskillStyle from "../styles/MySkills.module.scss";

const MySkills = () => {
  return (
    <main id="skills" className={myskillStyle.container}>
      <h1>My Skills</h1>
      <div className={myskillStyle.skillContainer}>
        <section className={myskillStyle.item1 + " " + myskillStyle.pad}>
          <h2>Technical Skills</h2>
          <span className={myskillStyle.flexIcons}>
            <span className={myskillStyle.iconContainer}>
              <Image
                src="/../public/images/technical-skills/HTML.svg"
                alt="HTML svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Image
                src="/../public/images/technical-skills/CSS.svg"
                alt="CSS svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Image
                src="/../public/images/technical-skills/JavaScript.svg"
                alt="JavaScript svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Image
                src="/../public/images/technical-skills/React.svg"
                alt="React svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Image
                src="/../public/images/technical-skills/NextJS.svg"
                alt="NextJS svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Image
                src="/../public/images/technical-skills/Sass.svg"
                alt="Sass svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Image
                src="/../public/images/technical-skills/NodeJS.svg"
                alt="NodeJS svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Image
                src="/../public/images/technical-skills/MongoDb.svg"
                alt="MongoDB svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>
          </span>
        </section>

        <section className={myskillStyle.item1}>
          <h2>Other Skills</h2>
          <span className={myskillStyle.flexIcons}>
            <span className={myskillStyle.iconContainer}>
              <Image
                src="/../public/images/other-skills/ResponsiveDesign.svg"
                alt="ResponsiveDesign svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span
              className={
                myskillStyle.iconContainer + " " + myskillStyle.bootStr
              }
            >
              <Image
                src="/../public/images/other-skills/Bootstrap.svg"
                alt="Bootstrap svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Image
                src="/../public/images/other-skills/Express.svg"
                alt="Express svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>
            <span className={myskillStyle.iconContainer}>
              <Image
                src="/../public/images/other-skills/sql.svg"
                alt="ResponsiveDesign svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>
          </span>
        </section>

        <section className={myskillStyle.item1}>
          <h2>Tools </h2>
          <span className={myskillStyle.flexIcons}>
            <span className={myskillStyle.iconContainer}>
              <Image
                src="/../public/images/tools/VSCode.svg"
                alt="VSCode svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>
            <span className={myskillStyle.iconContainer}>
              <Image
                src="/../public/images/tools/Figma.svg"
                alt="Figma svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>
            <span className={myskillStyle.iconContainer}>
              <Image
                src="/../public/images/tools/Git.svg"
                alt="Git svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>
          </span>
        </section>
      </div>
      <MyProjects />
    </main>
  );
};

export default MySkills;
