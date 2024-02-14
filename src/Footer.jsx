import React from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineCamera } from 'react-icons/hi';
import { RiPencilRuler2Line } from 'react-icons/ri';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { LanguageSwitcher } from '../common/LanguageSwitcher';

function Footer(){
  const { t } = useTranslation();
  
  return (
    <React.Fragment>
      <section className="drop-shadow dark-background m-0">
        <Row lg={12}>
          <Row className="column-design start-item" lg={12}>
            <Col className="col-design pl-6 pb-3 pt-3" lg={12}>
              <Row className="footer-row">
                <p className="pl-5 pr-5 pt-3 pb-3 white text-3 left-text m-6 left-item">
                  Inspery
                </p>
              </Row>
              <Row className="footer-row">
                <div>
                  <p className="respect-newline pl-5 mb-0 pr-5 pt-3 pb-3 white text-2 left-text m-6 left-item">
                  Lohmühlenstraße 65, 12435 Berlin
                  </p>
                  <p className="respect-newline pl-5 mb-0 pr-5 pt-3 pb-3 white text-2 left-text m-6 left-item">
                  +49 177 7008767
                  </p>
                  <p className="respect-newline pl-5 mb-0 pr-5 pt-3 pb-3 white text-2 left-text m-6 left-item">
                  contact@inspery.com
                  </p>
                </div>
                <div>
                  <p className="pl-5 mb-0 pr-5 pt-3 pb-3 white text-2 left-text m-6 left-item">
                    <HiOutlineCamera size={30} color="white" className="pb-1" />
                    <span className="pl-3 pd-3">Photos from Unsplash</span>
                  </p>
                  <p className="pl-5 mb-0 pr-5 pt-3 pb-3 white text-2 left-text m-6 left-item">
                    <RiPencilRuler2Line size={30} color="white" className="pb-1" />
                    <span className="pl-3 pd-3">Design by Inspery - 2023</span>
                  </p>
                </div>
              </Row>
              {/* <div className="language-switcher-wrapper">
                <LanguageSwitcher theme="dark" />
              </div> */}
            </Col>
          </Row>
        </Row>
      </section>
    </React.Fragment>
  );
}

export default Footer;
