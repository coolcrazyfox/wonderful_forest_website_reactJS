import logo from "./assets/img/logo.svg";

function App() {
  return (
    <div className="swiper slider">
      <div className="slider-ui">
        <div className="container header-wrapper">
          <div className="top-line">
            <div className="row">
              <div className="col col--center">
                <a href="logo" className="logo">
                  <img src={logo} alt="Grow" />
                </a>
              </div>

              <div className="col col--center col--right col--lead">
                <nav className="main-menu">
                  <ul>
                    <li>
                      <a href="main">Main</a>
                    </li>
                    <li className="active">
                      <span>Info</span>
                    </li>
                    <li>
                      <a href="contact">Contact</a>
                    </li>
                  </ul>
                </nav>
                <a href="plant" className="button button--top">
                  Plant now
                </a>
              </div>

              <div className="col col--center">
                <button className="submenu anim-menu-btn">
                  <i className="anim-menu-btn__icon anim-menu-btn__icon--close"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="header-content">
            <div className="header-content__slide active">
              <h1 className="letters">Grow</h1>
              <div className="header-content__info">
                <p>
                  As an environmental charity, we’re on a mission to make it
                  simple for everyone to help the environment by planting each
                  one tree!
                </p>
                <br />
                <button className="button button--main">
                  Plant a tree now
                </button>
              </div>
            </div>

            <div className="header-content__slide">
              <h1 className="letters">Live</h1>
              <div className="header-content__info">
                <p>
                  As an environmental charity, we’re on a mission to make it
                  simple for everyone to help the environment by planting each
                  one tree!
                </p>
                <br />
                <button className="button button--main">
                  Plant a tree now
                </button>
              </div>
            </div>

            <div className="header-content__slide">
              <h1 className="letters">Wood</h1>
              <div className="header-content__info">
                <p>
                  As an environmental charity, we’re on a mission to make it
                  simple for everyone to help the environment by planting each
                  one tree!
                </p>
                <br />
                <button className="button button--main">
                  Plant a tree now
                </button>
              </div>
            </div>
          </div>

          <div class="header-bottom"></div>
        </div>
      </div>

      <div class="swiper-wrapper">
        <div class="swiper-slide slider__item">
          <div
            class="slider__layer"
            data-swiper-parallax="35%"
            // style="background-image: url(img/slides/slide-1-layer-back.jpg);"
          ></div>
          <div
            class="slider__layer"
            data-swiper-parallax="25%"
            // style="background-image: url(img/slides/slide-1-layer-middle.png);"
          ></div>
          <div
            class="slider__layer"
            data-swiper-parallax="14%"
            // style="background-image: url(img/slides/slide-1-layer-front.png);"
          ></div>
        </div>
        <div class="swiper-slide slider__item">
          <div
            class="slider__layer"
            data-swiper-parallax="35%"
            // style="background-image: url(img/slides/slide-2-layer-back.jpg);"
          ></div>
          <div
            class="slider__layer"
            data-swiper-parallax="25%"
            // style="background-image: url(img/slides/slide-2-layer-middle.png);"
          ></div>
          <div
            class="slider__layer"
            data-swiper-parallax="14%"
            // style="background-image: url(img/slides/slide-2-layer-front.png);"
          ></div>
        </div>
        <div class="swiper-slide slider__item">
          <div
            class="slider__layer"
            data-swiper-parallax="35%"
            // style="background-image: url(img/slides/slide-3-layer-back.jpg);"
          ></div>
          <div
            class="slider__layer"
            data-swiper-parallax="25%"
            // style="background-image: url(img/slides/slide-3-layer-middle.png);"
          ></div>
          <div
            class="slider__layer"
            data-swiper-parallax="14%"
            // style="background-image: url(img/slides/slide-3-layer-front.png);"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
