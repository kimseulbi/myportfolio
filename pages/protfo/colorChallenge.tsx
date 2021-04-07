import { NextPage } from "next";
import Layout from "../../components/Layout";
import HomeButton from "../../components/HomeButton";

const Dongnepro: NextPage = (props: any) => {
  const { pathname } = props;
  return (
    <Layout path={pathname}>
      <div className="sub" id="colorChallenge">
        <HomeButton />
        <div className="visual__bg colorChallenge__img" />
        <h2 className="sub__tit">
          <span>RGB Challenge Copy</span>
        </h2>
        <article className="article">
          <div className="site__info">
            <ul className="info__list">
              <li className="info__item">
                <h6>프로젝트명</h6>
                <p>RGB Challenge 카피 프로젝트</p>
              </li>
              <li className="info__item">
                <h6>기간</h6>
                <p>2018.10.17 ~ 2018.10.19</p>
              </li>
              <li className="info__item">
                <h6>내용</h6>
                <ol>
                  <li>
                    VanillaJS를 사용하여 RGB Challenge 카피 프로젝트를 구현
                  </li>
                  <li>
                    <a href="http://www.rgbchallenge.com" className="link">
                      http://www.rgbchallenge.com
                    </a>
                    카피 프로젝트
                  </li>
                </ol>
                <span className="tag">JavaScript</span>
                <span className="tag">HTML5</span>
                <span className="tag">SASS</span>
                <span className="tag">npm</span>
                <span className="tag">Git</span>
                <span className="tag">GitHub</span>
              </li>
              <li className="info__icon">
                <a
                  href="https://github.com/kimseulbi/fds-rgb-challenge"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://vigilant-hamilton-a02060.netlify.com/"
                  target="_blank"
                >
                  <i className="fab fa-chrome"></i>
                </a>
              </li>
            </ul>
          </div>
        </article>
        {/* <div className="detail-img-box">
        </div> */}
      </div>
    </Layout>
  );
};

export default Dongnepro;
