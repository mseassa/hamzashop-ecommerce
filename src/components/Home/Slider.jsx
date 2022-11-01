import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import images from "../../constants/images";

const Slider = () => {
  return (
    <>
      {/* <!-- Carousel Start --> */}

      <Container fluid className="mb-3">
        <Row className="px-xl-5">
          <Col lg={8}>
            <Carousel fade controls={false} className="mb-30 mb-lg-0">
              <Carousel.Item style={{ height: "430px" }}>
                <img
                  className="position-absolute w-100 h-100"
                  src={images.carousel1}
                  style={{ objectFit: "cover" }}
                alt='' />
                <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{ maxWidth: "700px" }}>
                      <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        Men Fashion
                      </h1>
                      <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                        Lorem rebum magna amet lorem magna erat diam stet.
                        Sadips duo stet amet amet ndiam elitr ipsum diam
                      </p>
                      <a
                        class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "430px" }}>
                <img
                  className="position-absolute w-100 h-100"
                  src={images.carousel2}
                  style={{ objectFit: "cover" }}
                alt='' />

                <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{ maxWidth: "700px" }}>
                      <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        Women Fashion
                      </h1>
                      <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                        Lorem rebum magna amet lorem magna erat diam stet.
                        Sadips duo stet amet amet ndiam elitr ipsum diam
                      </p>
                      <a
                        class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "430px" }}>
                <img
                  className="position-absolute w-100 h-100"
                  src={images.carousel3}
                  style={{ objectFit: "cover" }}
                alt='' />

                <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{ maxWidth: "700px" }}>
                      <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        Kids Fashion
                      </h1>
                      <p class="mx-md-5 px-5 animate__animated animate__bounceIn">
                        Lorem rebum magna amet lorem magna erat diam stet.
                        Sadips duo stet amet amet ndiam elitr ipsum diam
                      </p>
                      <a
                        class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href="#"
                      >
                        Shop Now
                      </a>
                    </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col lg={4}>
          <div class="product-offer mb-30" style={{ height: "200px" }}>
              <img class="img-fluid" src={images.offer1} alt="" />
              <div class="offer-text">
                <h6 class="text-white text-uppercase">Save 20%</h6>
                <h3 class="text-white mb-3">Special Offer</h3>
                <a href="" class="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
            <div class="product-offer mb-30" style={{ height: "200px" }}>
              <img class="img-fluid" src={images.offer2} alt="" />
              <div class="offer-text">
                <h6 class="text-white text-uppercase">Save 20%</h6>
                <h3 class="text-white mb-3">Special Offer</h3>
                <a href="" class="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <!-- Carousel End --> */}
    </>
  );
};

export default Slider;
