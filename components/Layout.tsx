import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { MAX_NAV_HEIGHT, Colors, getScrolls, scrollToNext } from "./Global";
type Props = {
  title?: string;
  path: string;
};
const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "SEUL PORTFO",
  path,
}) => {
  const [state, setState] = useState({
    viewWidth: 0,
    viewHeight: 2 * MAX_NAV_HEIGHT,
    winScroll: 0,
    totalHeight: 0,
    percent: 0,
  });
  const handleScroll = (_event?: Event) => setState(getScrolls());
  const handleWheel = (event: WheelEvent) => {
    const { winScroll } = getScrolls();
    if (winScroll === 0 && event.deltaY > 0) {
      scrollToNext();
    }
  };
  useEffect(() => {
    // Dom이 장착되고 초기세팅
    handleScroll();
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const hasNavToChange =
    state.winScroll - state.viewHeight + MAX_NAV_HEIGHT >= 0;

  return (
    <div className="wrap">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no, width=device-width"
        />
        <link rel="canonical" href="/" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
        />
      </Head>
      <header className="header">
        <div
          style={{
            width: `${state.percent * 100}%`,
            backgroundColor: hasNavToChange
              ? Colors.teal
              : path === "/"
              ? Colors.teal
              : Colors.white,
          }}
          className="loadingBar"
        />
        <div className="header__area">
          <Link href="/">
            <h1 className="logo flipOutX">
              <span className="readable-hidden">main</span>
            </h1>
          </Link>
          <nav className="navigation">
            <ul className={`menu ${path === "/" ? "" : "none"}`}>
              <li className="menu__item">
                <a href="#portfolio" title="PORTFOLIO 바로가기">
                  PORTFOLIO
                </a>
              </li>
              <li className="menu__item">
                <a href="#about" title="ABOUT 바로가기">
                  ABOUT
                </a>
              </li>
              <li className="menu__item">
                <a
                  href="/kimseulbi_ resume.pdf"
                  target="_blank"
                  title="RESUME 새창"
                >
                  RESUME
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container">
        <main className="main">{children}</main>
        <footer className="footer" id="contact">
          <div className="footer__area">
            <h2 className="footer__heading">CONTACT ME</h2>
            <div className="contact">
              <div className="social-icons">
                <a
                  href="mailto:ksb5166@gmail.com"
                  target="_blank"
                  title="mail 새창"
                >
                  <i className="far fa-envelope"></i>
                  <span className="readable-hidden">maill</span>
                </a>
                <a href="tel:01033762823" target="_blank" title="tel 새창">
                  <i className="fas fa-mobile-alt"></i>
                  <span className="readable-hidden">tel</span>
                </a>
              </div>
            </div>
          </div>
          <small className="copyright">
            Copyright since &copy; 2021 by Seulbi Kim.
          </small>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
