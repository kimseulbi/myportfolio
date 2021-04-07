import { NextPage } from "next";
import Layout from "../../components/Layout";
import HomeButton from "../../components/HomeButton";

const Dongnepro: NextPage = (props: any) => {
  const { pathname } = props;
  return (
    <Layout path={pathname}>
      <div className="sub" id="dongnepro">
        <HomeButton />
        <div className="visual__bg dnp__img" />
        <h2 className="sub__tit">
          <span>우리동네프로들 홈페이지</span>
        </h2>
        <article className="article">
          <div className="site__info">
            <ul className="info__list">
              <li className="info__item">
                <h6>프로젝트명</h6>
                <p>우리동네프로들 반응형 홈페이지</p>
              </li>
              <li className="info__item">
                <h6>기간</h6>
                <p>2020.05</p>
              </li>
              <li className="info__item">
                <h6>내용</h6>
                <ol>
                  <li>우리동네프로들 반응형 홈페이지 개편</li>
                  <li>React.js TypeScript로 개발</li>
                  <li>Next.js를 사용한 서버사이드 랜더링</li>
                  <li>
                    <em className="highlight">
                      담당: 퍼블리싱 및 프론트엔드 화면개발
                    </em>
                  </li>
                  <li>
                    <em className="highlight">
                      동네프로 Desk 페이지 추가 개발, 우리동네프로들 소개,
                      서비스 문의 변경요청사항 적용{" "}
                    </em>
                  </li>
                  <li>
                    TypeScript도입으로 인해 학습후 구현 및 크로스브라우징작업 및
                    반응형 작업에 보강{" "}
                  </li>
                  <li>Git을 활용으로 프로젝트 코드 형상관리</li>
                  <li>
                    스프린트 단위로 나누어 프로젝트를 진행하였으며, 하나의
                    스프린트가 끝날 때마다 기능을 하나씩 추가하고 개선
                  </li>
                </ol>
                <span className="tag">React</span>{" "}
                <span className="tag">React+style</span>{" "}
                <span className="tag">HTML5</span>
                <span className="tag">CSS3</span>{" "}
                <span className="tag">Next</span>{" "}
                <span className="tag">graphQL</span>{" "}
                <span className="tag">Apollo</span>{" "}
                <span className="tag">GitHub</span>
              </li>
              <li className="info__icon">
                <a href="https://www.dongnepro.com/" target="_blank">
                  <i className="fab fa-chrome"></i>
                </a>
              </li>
            </ul>
          </div>
        </article>
        <div className="detail-img-box">
          <img
            src="/images/dnpapp.gif"
            alt="비주얼 마크업"
            style={{ width: "40%" }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Dongnepro;
