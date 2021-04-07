import { useEffect, useState, ReactNode } from "react";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
import { scrollToNext, getScrolls } from "../components/Global";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";

const IndexPage: NextPage<WithRouterProps> = ({ router }) => {
  const [state, setState] = useState({
    viewWidth: 0,
  });

  const handleResize = (_event?: Event) => setState(getScrolls());

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout path={router.pathname}>
      <main className="main">
        <div className="comp">
          <div className="comp__area">
            <ul className="comp__list">
              <li className="comp__list__item">
                <a
                  href="https://github.com/kimseulbi"
                  target="_blank"
                  title="github 새창"
                >
                  <i className="fab fa-github"></i>
                  <span className="readable-hidden">github</span>
                </a>
              </li>
              <li className="comp__list__item">
                <a
                  href="https://gitlab.com/siots-study/topics/wikis/home"
                  target="_blank"
                  title="gitlab 새창"
                >
                  <i className="fab fa-gitlab"></i>
                  <span className="readable-hidden">gitlab</span>
                </a>
              </li>
              <li className="comp__list__item">
                <a
                  href="https://kimseulbi.github.io/"
                  target="_blank"
                  title="blogger 새창"
                >
                  <i className="fab fa-blogger-b"></i>
                  <span className="readable-hidden">blogger</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <section className="visual">
          <div className="visual__area bounceInDown">
            <h2 className="visual__text">Hi! I'm Seulbi Kim,</h2>
            <h2 className="visual__text">
              a <span>developer</span> passionate
            </h2>
            <h2 className="visual__text">
              about <span>bridging gaps</span> between people and their goals
            </h2>
          </div>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </section>

        <section className="protfo" id="portfolio">
          <Link href="/protfo/dongnepro">
            <figure className="protfo__img">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:good/v1612551383/dnp.png"
                alt="우리동네프로들홈페이지"
                className="protfo__img--dongnepro"
              />
            </figure>
          </Link>
          <figure className="protfo__img">
            <Link href="/protfo/csinnovation">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:good/v1612542695/csi.jpg"
                alt="CS이노베이션홈페이지"
                className="protfo__img--csinnovation"
              />
            </Link>
          </figure>
          <figure className="protfo__img">
            <Link href="/protfo/ucares">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:good/v1612715979/ucares_plash.png"
                alt="유케어스"
                className="protfo__img--ucares"
              />
            </Link>
          </figure>
          <figure className="protfo__img">
            <Link href="/protfo/dnpAdim">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:good/v1612719502/dnp_admin.png"
                alt="동네프로통합관리"
                className="protfo__img--dnpAdmin"
              />
            </Link>
          </figure>
          <figure className="protfo__img">
            <Link href="/protfo/baeminchan">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:good/v1550817572/chan_sub.jpg"
                alt="배민찬카피프로젝트"
                className="protfo__img--baeminchan"
              />
            </Link>
          </figure>
          <figure className="protfo__img">
            <Link href="/protfo/baseball">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:good/v1550817575/baseball.jpg"
                alt="숫자야구게임"
                className="protfo__img--baseball"
              />
            </Link>
          </figure>
          <figure className="protfo__img">
            <Link href="/protfo/colorChallenge">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:good/v1550817553/color.jpg"
                alt="RGB Challenge 카피 게임"
                className="protfo__img--rgb"
              />
            </Link>
          </figure>
          <figure className="protfo__img">
            <Link href="/protfo/focs">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/v1552709410/focs.png"
                alt="focs"
                className="protfo__img--focs"
              />
            </Link>
          </figure>
          <figure className="protfo__img">
            <Link href="/protfo/fx">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/v1552713266/fx.png"
                alt="fireSightFX"
                className="protfo__img--fx"
              />
            </Link>
          </figure>
          <figure className="protfo__img">
            <Link href="/protfo/wx">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:good/v1555053366/wx.png"
                alt="fireSightWX"
                className="protfo__img--wx"
              />
            </Link>
          </figure>
          <figure className="protfo__img">
            <Link href="/protfo/smart">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554413982/smart.png"
                alt="airscanSmart"
                className="protfo__img--smart"
              />
            </Link>
          </figure>
        </section>
        <section className="about__bg" id="about">
          <div className="about">
            <div className="about__heading">
              <h2 className="name">SEULBI KIM</h2>
              <p>Front-End Developer, UI/UX designer</p>
            </div>
            <img
              src="/images/userImg.svg"
              alt="profile"
              className="profile__img"
            />
            <div className="skillset">
              <ul className="skill__list">
                <li className="skill__item">
                  <h6>
                    <i className="fas fa-code"></i>&nbsp;Language
                  </h6>
                  <p>HTML5 / CSS3 / JavaScript ES6 / typescript</p>
                </li>
                <li className="skill__item">
                  <h6>
                    <i className="fas fa-book-open"></i>&nbsp;Library
                  </h6>
                  <p>React / SASS / Bootstrap / AntDesign / Next.js</p>
                </li>
                <li className="skill__item">
                  <h6>
                    <i className="fab fa-adobe"></i>&nbsp;Design
                  </h6>
                  <p>Photoshop / Illustrator</p>
                </li>
                <li className="skill__item">
                  <h6>
                    <i className="fas fa-code-branch"></i>&nbsp;Comunity
                  </h6>
                  <p>Github / Gitlab / Slack / Redmain</p>
                </li>
              </ul>
            </div>
            <div className="award">
              <ul className="award__list">
                <li className="award__item">
                  <h6 className="bage">2019</h6>
                  <p>우리동네프로들 입사</p>
                </li>
                <li className="award__item">
                  <h6 className="bage">2018</h6>
                  <p>패스트캠퍼스 스쿨 11기 프론트엔드과정 수료</p>
                </li>
                <li className="award__item">
                  <h6 className="bage">2017</h6>
                  <p>thebettertech 입사</p>
                </li>
                <li className="award__item">
                  <h6 className="bage">2016</h6>
                  <p>블로터 디자이너를 위한 디자인 및 코딩 과정 수료</p>
                </li>
                <li className="award__item">
                  <h6 className="bage">2015</h6>
                  <p>패스트캠퍼스 모바일 앱디자인 수료</p>
                </li>
                <li className="award__item">
                  <h6 className="bage">2014</h6>
                  <p>
                    삼성SDS 스마트폰 앱 UX/UI 설계 및 디자인 수료
                    <br />
                    삼성SDS HTML5 &amp; CSS3 Fundamental 수료 <br />
                    theboan 입사
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default withRouter(IndexPage);
