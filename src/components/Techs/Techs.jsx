import React from 'react';
import { motion } from 'framer-motion';

import htmlLogo from '../../images/html.png';
import cssLogo from '../../images/css.png';
import gitLogo from '../../images/git.png';
import reactLogo from '../../images/react.png';
import nodeLogo from '../../images/node.svg';
import nextLogo from '../../images/next.png';
import jsLogo from '../../images/js.png';
import mongodbLogo from '../../images/mongodb.png';
import mongooseLogo from '../../images/mongoose.png';

export default function Techs() {
  return (
    <section className="techs">
      <p className="techs__text">Technologies that I use:</p>
      <div className="techs__container">
        <div className="techs__element">
          <img alt="html logo" src={htmlLogo} className="techs__pic" />
          <p className="techs__text">HTML</p>
        </div>
        <div className="techs__element">
          <img alt="css logo" src={cssLogo} className="techs__pic" />
          <p className="techs__text">CSS</p>
        </div>
        <div className="techs__element">
          <img alt="js logo" src={jsLogo} className="techs__pic" />
          <p className="techs__text">Javascript</p>
        </div>
        <div className="techs__element">
          <img alt="react logo" src={reactLogo} className="techs__pic" />
          <p className="techs__text">React</p>
        </div>
        <div className="techs__element">
          <img alt="next logo" src={nextLogo} className="techs__pic" />
          <p className="techs__text">NextJS</p>
        </div>
        <div className="techs__element">
          <img alt="node logo" src={nodeLogo} className="techs__pic" />
          <p className="techs__text">NodeJS</p>
        </div>
        <div className="techs__element">
          <img alt="mongoose logo" src={mongooseLogo} className="techs__pic" />
          <p className="techs__text">Mongoose</p>
        </div>
        <div className="techs__element">
          <img alt="mongodb logo" src={mongodbLogo} className="techs__pic" />
          <p className="techs__text">MongoDB</p>
        </div>
        <div className="techs__element">
          <img alt="git logo" src={gitLogo} className="techs__pic" />
          <p className="techs__text">Git</p>
        </div>
      </div>
    </section>
  );
}
