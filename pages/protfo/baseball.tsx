import { NextPage } from "next";
import Layout from "../../components/Layout";
import HomeButton from "../../components/HomeButton";

const Dongnepro: NextPage = (props: any) => {
  const { pathname } = props;
  return (
    <Layout path={pathname}>
      <div className="sub" id="baseball">
        <HomeButton />
        <div className="visual__bg baseball__img" />
        <h2 className="sub__tit">
          <span>Number baseball</span>
        </h2>
        <article className="article">
          <div className="site__info">
            <ul className="info__list">
              <li className="info__item">
                <h6>프로젝트명</h6>
                <p>숫자야구게임 프로젝트</p>
              </li>
              <li className="info__item">
                <h6>기간</h6>
                <p>2018.10.22 ~ 2018.10.26</p>
              </li>
              <li className="info__item">
                <h6>내용</h6>
                <ol>
                  <li>VanillaJS를 사용하여 숫자야구게임 구현</li>
                  <li>2명이 한 팀이 되어 기획부터 디자인, 개발까지 진행</li>
                  <li>화면출력 및 야구게임 알고리즘 개발 </li>
                  <li>
                    협업과정에서 GitHub, Google Drive, Slack, Git 등을 활용하여
                    협업
                  </li>
                  <li>Git을 활용으로 프로젝트 코드 형상관리</li>
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
                  href="https://github.com/kimseulbi/hackathon-baseball-game"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://clever-tesla-02b461.netlify.com"
                  target="_blank"
                >
                  <i className="fab fa-chrome"></i>
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default Dongnepro;
