import React from 'react';
import Project from '../Project';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <Project title="Semantic Code" imgSrc="./assets/images/skills.jpg" link="https://sirmac006.github.io/Mac_Semantic_Code/" />
      <Project title="Placeholder" imgSrc="./assets/images/placeholder_template.jpg" />
      <Project title="Placeholder" imgSrc="./assets/images/placeholder_template.jpg" />
    </section>
  );
};

export default Portfolio;
