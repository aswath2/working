import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";
import './hero.style.css'
import { transform } from "lodash";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section id="Home" class="hero-section wf-section">
      <div class="main-container w-container">
        <div class="home-content-wrapper">
          <div id="Navbar" class="top-bar-wrapper">
            <div class="top-bar-contact-wrapper">
              <div class="top-bar-contact-div">
                <div class="top-bar-contact-icon-div">
                  <img
                    src="https://assets.website-files.com/62d564959d641af74838ccc9/62d93468f6774d402b44d2d5_Phone%20icon.svg"
                    loading="lazy"
                    alt=""
                    class="top-bar-icon"
                  />
                </div>
                <a
                  href="tel:18001234567"
                  target="_blank"
                  class="top-bar-contact-link w-inline-block"
                >
                  <div class="paragraph-v-2">250-240-1567</div>
                </a>
              </div>
              <div class="top-bar-contact-div">
                <div class="top-bar-contact-icon-div">
                  <img
                    src="https://assets.website-files.com/62d564959d641af74838ccc9/62d93467f6774d247c44d2d1_Mail%20icon.svg"
                    loading="lazy"
                    alt=""
                    class="top-bar-icon"
                  />
                </div>
                <a
                  href="mailto:example@mail.com"
                  class="top-bar-contact-link w-inline-block"
                >
                  <div class="paragraph-v-2">example@mail.com</div>
                </a>
              </div>
            </div>
            <div class="topbar-social-wrapper">
              <a href="#" class="topbar-social-div fb w-inline-block">
                <div class="header-embed w-embed">
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9506 0H1.99383C0.897222 0 0 0.85 0 1.88889V15.1111C0 16.1509 0.897222 17 1.99383 17H8.97222V10.3889H6.9784V8.05139H8.97222V6.11528C8.97222 4.0715 10.1805 2.63594 12.7266 2.63594L14.524 2.63783V5.09811H13.3307C12.3398 5.09811 11.963 5.80267 11.963 6.45622V8.05233H14.523L13.9568 10.3889H11.963V17H15.9506C17.0472 17 17.9444 16.1509 17.9444 15.1111V1.88889C17.9444 0.85 17.0472 0 15.9506 0Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
              <a href="#" class="topbar-social-div twitter w-inline-block">
                <div class="header-embed w-embed">
                  <svg
                    width="19"
                    height="17"
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.1126 4.99546C18.0977 4.29032 17.9567 3.59267 17.6956 2.9322C17.4703 2.36502 17.1171 1.85123 16.6607 1.42664C16.2125 0.99424 15.6702 0.659657 15.0715 0.446222C14.3743 0.198845 13.6379 0.065255 12.8936 0.0511322C11.9366 0.00980333 11.6311 0 9.19439 0C6.75766 0 6.45215 0.00980333 5.49515 0.0511322C4.75084 0.065255 4.01444 0.198845 3.31727 0.446222C2.71858 0.659657 2.17624 0.99424 1.72807 1.42664C1.27164 1.85123 0.918473 2.36502 0.69318 2.9322C0.43206 3.59267 0.291048 4.29032 0.276141 4.99546C0.232516 5.90209 0.222168 6.19152 0.222168 8.5C0.222168 10.8085 0.232516 11.0979 0.276141 12.0045C0.291048 12.7097 0.43206 13.4073 0.69318 14.0678C0.918473 14.635 1.27164 15.1488 1.72807 15.5734C2.17622 16.0058 2.71857 16.3404 3.31727 16.5538C4.01444 16.8012 4.75084 16.9347 5.49515 16.9489C6.45215 16.9903 6.75766 17 9.19439 17C11.6311 17 11.9366 16.9903 12.8936 16.9489C13.6379 16.9347 14.3743 16.8012 15.0715 16.5538C16.2767 16.1122 17.2295 15.2096 17.6956 14.0678C17.9567 13.4073 18.0977 12.7097 18.1126 12.0045C18.1563 11.0979 18.1666 10.8085 18.1666 8.5C18.1666 6.19152 18.1563 5.90209 18.1126 4.99546ZM16.4977 11.9347C16.491 12.4737 16.3865 13.0076 16.1887 13.513C15.8869 14.2543 15.2684 14.8402 14.4859 15.1262C13.9524 15.3135 13.3889 15.4125 12.8199 15.4189C11.874 15.4597 11.5902 15.4684 9.19438 15.4684C6.79854 15.4684 6.51481 15.4597 5.56883 15.4189C4.9999 15.4125 4.43636 15.3135 3.90285 15.1262C3.51312 14.9899 3.16059 14.7727 2.87119 14.4903C2.57318 14.2162 2.34384 13.8822 2.20004 13.513C2.00231 13.0076 1.89779 12.4737 1.89105 11.9347C1.84793 11.0384 1.8388 10.7696 1.8388 8.49995C1.8388 6.23031 1.84793 5.96152 1.89106 5.06521C1.8978 4.52622 2.00232 3.99234 2.20004 3.48691C2.34384 3.1177 2.57317 2.78372 2.87118 2.50955C3.16059 2.22723 3.51312 2.00995 3.90285 1.87372C4.43636 1.6864 4.9999 1.58739 5.56883 1.581C6.51494 1.54015 6.79866 1.53149 9.19438 1.53149C11.5901 1.53149 11.8738 1.54015 12.8199 1.58101C13.3889 1.5874 13.9524 1.68641 14.4859 1.87373C14.8756 2.00996 15.2282 2.22723 15.5176 2.50955C15.8156 2.78372 16.0449 3.1177 16.1887 3.48691C16.3865 3.99234 16.491 4.52622 16.4977 5.06521C16.5408 5.96149 16.55 6.23037 16.55 8.49995C16.55 10.7695 16.5408 11.0384 16.4977 11.9347ZM4.587 8.50006C4.587 6.0894 6.6498 4.13517 9.19438 4.13517C11.739 4.1352 13.8017 6.08941 13.8018 8.50006C13.8018 10.9107 11.739 12.8649 9.19438 12.8649C6.6498 12.8649 4.587 10.9107 4.587 8.50006ZM9.19438 11.3333C7.54264 11.3333 6.20364 10.0648 6.20364 8.5C6.20364 6.93519 7.54264 5.66667 9.19438 5.66667C10.8461 5.66667 12.1851 6.93519 12.1851 8.5C12.1851 9.25145 11.87 9.97212 11.3092 10.5035C10.7483 11.0348 9.98757 11.3333 9.19438 11.3333ZM13.9838 4.98263C14.5784 4.98263 15.0604 4.52596 15.0604 3.96263C15.0604 3.3993 14.5784 2.94263 13.9838 2.94263C13.3891 2.94263 12.9071 3.3993 12.9071 3.96263C12.9071 4.52596 13.3891 4.98263 13.9838 4.98263Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
              <a href="#" class="topbar-social-div twitter w-inline-block">
                <div class="header-embed w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0429 4.00985C16.0505 4.16285 16.0533 4.31774 16.0533 4.47074C16.0533 9.18352 12.4672 14.616 5.90996 14.616C3.89546 14.616 2.02262 14.0257 0.444458 13.0132C0.724014 13.0463 1.00735 13.0633 1.29446 13.0633C2.96612 13.0633 4.50274 12.4929 5.72201 11.538C4.16274 11.5087 2.84524 10.4793 2.3919 9.06263C2.60912 9.10324 2.83296 9.12496 3.06246 9.12496C3.38829 9.12496 3.70374 9.08246 4.00218 9.00124C2.37112 8.67257 1.1424 7.2323 1.1424 5.50396C1.1424 5.48885 1.1424 5.47468 1.1424 5.45957C1.62312 5.72685 2.17374 5.88741 2.7574 5.9063C1.80068 5.26596 1.17074 4.17607 1.17074 2.93791C1.17074 2.2853 1.3464 1.67235 1.65429 1.14535C3.4119 3.30341 6.04029 4.72196 9.00301 4.87118C8.94257 4.60957 8.9114 4.33852 8.9114 4.05802C8.9114 2.0898 10.5066 0.494629 12.4757 0.494629C13.5014 0.494629 14.4279 0.92624 15.0786 1.61946C15.8899 1.45891 16.653 1.16235 17.3425 0.754351C17.0761 1.58641 16.5104 2.2853 15.7747 2.72635C16.4962 2.63946 17.1819 2.44963 17.8222 2.16535C17.3443 2.88124 16.7399 3.50835 16.0429 4.00985Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div class="navbar-wrapper">
            <div
              data-w-id="2f3c782d-5710-69dc-6e13-17b01a597038"
              data-animation="over-right"
              data-collapse="medium"
              data-duration="400"
              data-easing="ease"
              data-easing2="ease"
              role="banner"
              class="navbar w-nav"
            >
              <div class="menu-open-overlay" style={{ display: 'none' }}></div>
              <div class="navbar-container">
                <a
                  href="/"
                  aria-current="page"
                  class="brand w-nav-brand w--current"
                  aria-label="home"
                >
                  <img
                    src="https://assets.website-files.com/62d564959d641af74838ccc9/62de9a2856c3b5d9cf9b4be5_Logo.svg"
                    loading="lazy"
                    alt="Logo"
                    class="log-image"
                  />
                </a>
                <nav role="navigation" class="nav-menu w-nav-menu">
                  <div class="nav-menu-inner">
                    <a href="#" class="nav-menu-logo w-inline-block">
                      <img
                        src="https://assets.website-files.com/62d564959d641af74838ccc9/62de9a2856c3b5d9cf9b4be5_Logo.svg"
                        loading="lazy"
                        alt="Logo"
                        class="log-image"
                      />
                    </a>
                    <div class="nav-links-wrapper">
                      <a href="#Top" class="nav-link w-nav-link">
                        Home
                      </a>
                      <a href="#why-seo" class="nav-link w-nav-link">
                        Why SEO
                      </a>
                      <a href="#Sevices" class="nav-link w-nav-link">
                        Services
                      </a>
                      <a href="#Team" class="nav-link w-nav-link">
                        Team
                      </a>
                      <a href="#Pricing" class="nav-link w-nav-link">
                        Pricing
                      </a>
                      <a href="/blog-page-seoflow" class="nav-link w-nav-link">
                        Blog
                      </a>
                    </div>
                    <div class="contact-us-button-wrapper">
                      <a href="#" class="primary-btn w-button">
                        Contact us
                      </a>
                    </div>
                  </div>
                </nav>
                <div class="enquire-btn-wrapper">
                  <a
                    href="https://seofy-template.webflow.io/#Contact"
                    class="nav-btn w-button"
                  >
                    Contact us
                  </a>
                </div>
                <div
                  class="menu-button w-nav-button"
                  style={{WebkitUserSelect: Text}}
                  aria-label="menu"
                  role="button"
                  tabindex="0"
                  aria-controls="w-nav-overlay-1"
                  aria-haspopup="menu"
                  aria-expanded="false"
                >
                  <div class="menu-animation">
                    <div
                      class="top-line black-background"
                      // style={{transform: translate3d('0px', '0%', '0px') scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1}}
                    ></div>
                    <div
                      class="middle-line black-background"
                      style={{opacity: 1}}
                    ></div>
                    <div
                      class="middle-line-45 black-background"
                      // style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0;"
                    ></div>
                    <div
                      class="middle-line--45 black-background"
                      // style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 0.02;"
                    ></div>
                    <div
                      class="bottom-line black-background"
                      // style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1;"
                    ></div>
                  </div>
                </div>
              </div>
              <div
                class="w-nav-overlay"
                data-wf-ignore=""
                id="w-nav-overlay-1"
              ></div>
            </div>
          </div>
          <div class="hero-wrapper">
            <div class="hero-flexbox">
              <div class="home-hero-flex-left">
                <div class="hero-header">
                  <div class="h4 _600-bold">
                    Novel SEO AI Optimization for 2022
                  </div>
                </div>
                <div class="hero-heading">
                  <h1 class="h1 _600-bold">We are Seofy Generate More</h1>
                  <div
                    data-w-id="41e7d331-3a5a-cde3-b06b-8da5f7311c93"
                    class="animated-words-wrapper"
                  >
                    <div
                      // style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                      class="word-1"
                    >
                      Revenue.
                    </div>
                    <div
                      // style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                      class="word-2"
                    >
                      Leads.
                    </div>
                    <div
                      // style="transform: translate3d(0px, -72px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                      class="word-3"
                    >
                      Business.
                    </div>
                  </div>
                </div>
                <div class="btn-div">
                  <a
                    href="https://seofy-template.webflow.io/#Contact"
                    class="primary-btn hover-white w-button"
                  >
                    Discover More
                  </a>
                </div>
              </div>
              <div class="hero-flex-right">
                <div class="hero-image-wrapper">
                  <img
                    src="https://assets.website-files.com/62d564959d641af74838ccc9/62d93d7549c01267eac6bb06_hero%20image.svg"
                    loading="lazy"
                    alt="Girl working on Laptop"
                    class="hero-image"
                  />
                  <div class="leads-increase">
                    <div class="leads-increase-text-wrapper">
                      <figure class="leads-increase-icon-wrapper">
                        <img
                          src="https://assets.website-files.com/62d564959d641af74838ccc9/62d946de4fd9dfc7d52039e5_simple-up.svg"
                          loading="lazy"
                          alt="Up arrow"
                          class="leads-increase-icon"
                        />
                      </figure>
                      <div class="leads-increase-text">200%</div>
                      <div>More Leads</div>
                    </div>
                    <div
                      data-w-id="52018bcd-1840-eebc-e5d2-652b2124e6da"
                      // style={{ transform: translate3d('0px, 0px, 0px') }}
                      style={transform: translate3d()}
                      class="leads-increase-circle"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-circles"></div>
      <div class="bg-circles-small"></div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
