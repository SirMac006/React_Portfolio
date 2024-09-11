import React from 'react';

const Project = ({ title, imgSrc, link }) => {
  return (
    <div className="card">
      <header>{title}</header>
      {link ? (
        <a href={link}><img src={imgSrc} alt={title} /></a>
      ) : (
        <img src={imgSrc} alt={title} />
      )}
    </div>
  );
};

export default Project;
