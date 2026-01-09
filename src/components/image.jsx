import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  const isExternalUrl = largeImage && largeImage.startsWith("http");

  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <a 
          href={largeImage} 
          title={title} 
          data-lightbox-gallery="gallery1"
          target={isExternalUrl ? "_blank" : "_self"}
          rel={isExternalUrl ? "noopener noreferrer" : ""}
        >
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />
        </a>
      </div>
    </div>
  );
};
