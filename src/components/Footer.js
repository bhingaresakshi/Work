import React from 'react'

export default function Footer() {
  return (
   <>
   <footer className="footer mt-5">
  <div className="container" id="contact">
    <div className="row">
      <div className="col-md-4">
        <h3 className="text-white">Links</h3>
        <ul>
          <li>
            <a className="text-white" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="text-white" href="#about">
              About Us
            </a>
          </li>
          <li>
            <a className="text-white" href="#gallary">
              Gallary
            </a>
          </li>
          <li>
            <a className="text-white" href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a className="text-white" href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <h3 className="text-white">Follow Us</h3>
        <ul>
          <li>
            <a
              className="text-white"
              href="https://www.instagram.com/ru_dips_ari_work_designer247?igsh=MmF0MjR6cTE0Ynpp">
              <i className="fa-brands fa-instagram me-2" /> Instagram
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <h3 className="text-white">Contact</h3>
        <p
          style={{
            fontSize: "25px",
          }}>
          <i className="fa-solid fa-user" />{" "}
          <strong>Dipali Vaibhav Darandale</strong>
        </p>
        <p>
          <i className="fa-solid fa-phone" /> Call us: +91 8381046868
        </p>
        <p>
          <i className="fa-solid fa-map-marker-alt" /> Address: Kopargaon,
          Dist-Ahilyanagar
        </p>
      </div>
    </div>
    <div className="footer-bottom text-center">
      <h3>Aari By Dipa</h3>
      <p>©ru_dips_ari_work_designer247</p>
      <hr />
      <p>Designed By:Sakshi Web Designer</p>
    </div>
  </div>
</footer>
   </>
  )
}
