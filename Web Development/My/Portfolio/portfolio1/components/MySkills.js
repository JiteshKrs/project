import MyProjects from "./MyProjects";
import Img from "next/image";
import htmlsvg from ".//../public/images/technical-skills/HTML.svg";
import csssvg from ".//../public/images/technical-skills/CSS.svg"
import jssvg from ".//../public/images/technical-skills/JavaScript.svg"
import reactsvg from ".//../public/images/technical-skills/React.svg"
import nextjssvg from ".//../public/images/technical-skills/NextJS.svg"
import sasssvg from ".//../public/images/technical-skills/Sass.svg"
import nodejssvg from ".//../public/images/technical-skills/NodeJS.svg"
import mongodbsvg from ".//../public/images/technical-skills/MongoDb.svg"
import responsivesvg from ".//../public/images/other-skills/ResponsiveDesign.svg"
import bootstrapsvg from ".//../public/images/other-skills/Bootstrap.svg"
import expresssvg from ".//../public/images/other-skills/Express.svg"
import sqlsvg from ".//../public/images/other-skills/sql.svg"
import vscodesvg from ".//../public/images/tools/VSCode.svg"
import figmasvg from ".//../public/images/tools/Figma.svg"
import gitsvg from ".//../public/images/tools/Git.svg"

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
              <Img
                src{...htmlsvg}
                alt="HTML svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Img
                src{...csssvg}
                alt="CSS svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Img
                src{...jssvg}
                alt="JavaScript svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Img
                src{...reactsvg}
                alt="React svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Img
                src{...nextjssvg}
                alt="NextJS svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Img
                src{...sasssvg}
                alt="Sass svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Img
                src{...nodejssvg}
                alt="NodeJS svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Img
                src{...mongodbsvg}
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
              <Img
                src{...responsivesvg}
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
              <Img
                src{...bootstrapsvg}
                alt="Bootstrap svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>

            <span className={myskillStyle.iconContainer}>
              <Img
                src{...expresssvg}
                alt="Express svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>
            <span className={myskillStyle.iconContainer}>
              <Img
                src{...sqlsvg}
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
              <Img
                src{...vscodesvg}
                alt="VSCode svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>
            <span className={myskillStyle.iconContainer}>
              <Img
                src{...figmasvg}
                alt="Figma svg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </span>
            <span className={myskillStyle.iconContainer}>
              <Img
                src{...gitsvg}
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
