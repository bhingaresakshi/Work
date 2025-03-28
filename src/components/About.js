import React from 'react'

export default function About() {
  return (
   <>
   <section id="about">
  <h1 className="text-center about-heading">About Us</h1>
  <div className="row justify-content-center">
    <div className="col-md-10 text-center">
      <p className="about-text">
        Welcome to <strong>Aari By Dipa</strong>, We specialize in Aari work and
        fabric painting on blouse pieces, adding a unique and elegant touch to
        your blouses. Our skilled artisans create intricate Aari embroidery and
        beautiful fabric-painted designs, making each blouse a masterpiece.
        Whether you want a traditional or modern design, we customize it to suit
        your style and preferences. If you are looking to enhance your blouse
        with Aari work or fabric painting, feel free to contact us on our
        Instagram pageand youcan call us. We ensure that high-quality blouse to
        detail in every piece we create. Reach out to us for more details and
        orders!!!
      </p>
    </div>
  </div>
  <h2 className="heading text-center">What We Offer</h2>
  <div className="row justify-content-center mt-4">
    <div className="col-md-5 col-12 mb-3 p-0">
      <div className="card offer-card">
        <img
          alt="Aari Work"
          className="card-img-top"
          src="images/design8.png"
        />
        <div className="card-body text-center">
          <h3 className="card-title text-danger fw-bold">Aari Work Classes</h3>
          <p className="card-text">
            {" "}
            We are offering you Aari Work Classes in that you will learn the
            basics of Aari embroidery, how to handle the specialized needle,
            different stitching techniques, and how to embellish fabrics with
            beads, sequins, and threads.
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-5 col-12 mb-3 p-0">
      <div className="card offer-card">
        <img
          alt="Fabric Painting"
          className="card-img-top"
          src="images/fabric8.jpg"
        />
        <div className="card-body text-center">
          <h3 className="card-title text-danger fw-bold">
            Fabric Painting Classes
          </h3>
          <p className="card-text">
            {" "}
            We are offering you Fabric Painting Classes ,where you can explore
            your creativity and bring your artistic ideas to life on fabric.
            Whether you’re a beginner or someone looking to refine your skills,
            our classes cover everything from basic techniques to advanced
            designs.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
   </>
  )
}
