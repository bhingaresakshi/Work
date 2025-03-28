import React from "react";

export default function Home() {
  return (
    <>
      <section
        className="home-section"
        id="home"
        style={{
          backgroundImage: `url("./images/homeimage.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh", // Ensures full screen height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div className="overlay">
          <div className="container text-center">
            <h1>Welcome to Our World of Aari Work</h1>
            <p className="lead">
              We create beautiful Aari work, embroidery, and thread art, combining
              traditional and elegant designs. Explore our collection of unique and
              intricate patterns.
            </p>
            <a className="btn-learn-more" href="#about">
              See More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
