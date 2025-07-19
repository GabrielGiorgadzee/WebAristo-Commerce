const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://pimcdn.sharafdg.com/cdn-cgi/image/width=1200,height=630,fit=pad/images/macbook_air_13_in_m3_midnight_1?1744029966?g=0"
              className="d-block w-100"
              alt="Slide 1"
            />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h5>MacBook Air M2</h5>
              <p>13-inch chip 16GB RAM 256GB – Midnight</p>
              <p>
                <del className="text-danger">2699₾</del>{" "}
                <strong className="text-success">2449₾</strong>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://pimcdn.sharafdg.com/cdn-cgi/image/width=1200,height=630,fit=pad/images/macbook_air_13_in_m3_starlight_1?1746430534?g=0"
              className="d-block w-100"
              alt="Slide 2"
            />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h5>MacBook Air M3</h5>
              <p>13-inch chip 16GB RAM 256GB – Starlight</p>
              <p>
                <del className="text-danger">2999₾</del>{" "}
                <strong className="text-success">2749₾</strong>
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://pimcdn.sharafdg.com/cdn-cgi/image/width=1200,height=630,fit=pad/images/macbook_air_15_in_m3_silver_1?1741165618?izoom=0"
              className="d-block w-100"
              alt="Slide 3"
            />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h5>MacBook Air M4</h5>
              <p>13-inch chip 16GB RAM 256GB – Silver</p>
              <p>
                <del className="text-danger">3199₾</del>{" "}
                <strong className="text-success">2999₾</strong>
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
