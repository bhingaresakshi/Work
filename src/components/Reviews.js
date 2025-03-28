import React from 'react'

export default function Reviews() {
  return (
    <>
    <section
  className="container text-center"
  id="reviews"
  style={{
    marginTop: "auto",
  }}>
  <h2>What customers say about us?</h2>
  <div
    className="carousel slide"
    data-bs-interval="3000"
    data-bs-ride="carousel"
    id="reviewCarousel">
    <div className="carousel-indicators">
      <button
        className="active"
        data-bs-slide-to="0"
        data-bs-target="#reviewCarousel"
        type="button"
      />
      <button
        data-bs-slide-to="1"
        data-bs-target="#reviewCarousel"
        type="button"
      />
      <button
        data-bs-slide-to="2"
        data-bs-target="#reviewCarousel"
        type="button"
      />
      <button
        data-bs-slide-to="3"
        data-bs-target="#reviewCarousel"
        type="button"
      />
      <button
        data-bs-slide-to="4"
        data-bs-target="#reviewCarousel"
        type="button"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div
          className="card mx-auto border-0 shadow-lg p-4 review-card"
          style={{
            maxWidth: "700px",
          }}>
          <div className="card-body">
            <h5 className="rewname">Kavita Kalvandekar</h5>
            <p className="card-text text-muted fst-italic">
              "I am a regular client, they provide best designs of blouse."
            </p>
            <span className="rating">★★★★★</span>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div
          className="card mx-auto border-0 shadow-lg p-4 review-card"
          style={{
            maxWidth: "700px",
          }}>
          <div className="card-body">
            <h5 className="rewname">Ruchita Beuty Parlour</h5>
            <p className="card-text text-muted fst-italic">
              "They usually deliver fast and provide unique designs!"
            </p>
            <span className="rating">★★★★★</span>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div
          className="card mx-auto border-0 shadow-lg p-4 review-card"
          style={{
            maxWidth: "700px",
          }}>
          <div className="card-body">
            <h5 className="rewname">Priyanka Thombare</h5>
            <p className="card-text text-muted fst-italic">
              "Whenever I order from this website, the mam talks to me in a very
              polite manner!"
            </p>
            <span className="rating">★★★★★</span>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div
          className="card mx-auto border-0 shadow-lg p-4 review-card"
          style={{
            maxWidth: "700px",
          }}>
          <div className="card-body">
            <h5 className="rewname">Vaishanavi Kadam</h5>
            <p className="card-text text-muted fst-italic">
              "The fabric painting was beautifully done, exactly as I imagined.
              The colors and design look so elegant!"
            </p>
            <span className="rating">★★★★★</span>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div
          className="card mx-auto border-0 shadow-lg p-4 review-card"
          style={{
            maxWidth: "700px",
          }}>
          <div className="card-body">
            <h5 className="rewname">Leena Yeole</h5>
            <p className="card-text text-muted fst-italic">
              "Such amazing work! My blouse looks so unique and stylish. Thank
              you for the beautiful embroidery!"
            </p>
            <span className="rating">★★★★★</span>
          </div>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      data-bs-slide="prev"
      data-bs-target="#reviewCarousel"
      type="button">
      <span aria-hidden="true" className="carousel-control-prev-icon" />
    </button>
    <button
      className="carousel-control-next"
      data-bs-slide="next"
      data-bs-target="#reviewCarousel"
      type="button">
      <span aria-hidden="true" className="carousel-control-next-icon" />
    </button>
  </div>
</section>
    </>
  )
}
