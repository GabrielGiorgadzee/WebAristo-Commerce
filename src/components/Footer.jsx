const Footer = () => {
  return (
    <div>
      <footer
        className="text-center text-lg-start bg-body-tertiary text-muted"
        data-bs-theme="dark"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/profile.php?id=61577327277364"
              target="_blank"
              className="me-4 text-reset"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://x.com/GabrielGiorgadz"
              target="_blank"
              className="me-4 text-reset"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://g.co/kgs/ipy22Qw"
              target="_blank"
              className="me-4 text-reset"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              href="https://www.instagram.com/web.aristo/"
              target="_blank"
              className="me-4 text-reset"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielgiorgadze"
              target="_blank"
              className="me-4 text-reset"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/GabrielGiorgadzee"
              target="_blank"
              className="me-4 text-reset"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>WebAristo
                </h6>
                <p>
                  Looking for a Professional Web Agency in Tbilisi? We build
                  custom websites that grow your online Presence and attract
                  more clients.
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#section" className="text-reset">
                    MacBook
                  </a>
                </p>
                <p>
                  <a
                    href="https://webaristo.com"
                    className="text-reset"
                    target="_blank"
                  >
                    Official Website
                  </a>
                </p>
                <p>
                  <a
                    href="https://webaristo.com/privacy-policy"
                    className="text-reset"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-globe me-3"></i>{" "}
                  <a
                    className="text-reset fw-bold"
                    target="_blank"
                    href="https://webaristo.com"
                  >
                    {" "}
                    WebAristo.Com{" "}
                  </a>
                </p>
                <p>
                  <i className="fas fa-home me-3"></i>{" "}
                  <a
                    className="text-reset fw-bold"
                    target="_blank"
                    href="https://www.google.com/maps/place/36+%E1%83%95%E1%83%90%E1%83%A1%E1%83%9D+%E1%83%92%E1%83%9D%E1%83%AB%E1%83%98%E1%83%90%E1%83%A8%E1%83%95%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1+%E1%83%A5%E1%83%A3%E1%83%A9%E1%83%90,+%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98/@41.7548845,44.7591168,661m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40447264525adcb7:0x71a6e577907f3aa1!8m2!3d41.7548805!4d44.7616917!16s%2Fg%2F11kq2f8yt0?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
                  >
                    {" "}
                    Vaso Godziashvili St. 36, Tbilisi{" "}
                  </a>
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i> Info@webaristo.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +995-591-97-20-06
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2025 All Copyrights Reserved: Powered By
          <a
            className="text-reset fw-bold"
            href="https://webaristo.com/"
            target="_blank"
          >
            {" "}
            WebAristo
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
