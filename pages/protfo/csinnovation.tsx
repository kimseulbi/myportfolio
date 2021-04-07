import { NextPage } from "next";
import Layout from "../../components/Layout";
import HomeButton from "../../components/HomeButton";

const Dongnepro: NextPage = (props: any) => {
  const { pathname } = props;
  return (
    <Layout path={pathname}>
      <div className="sub" id="csinnovation">
        <HomeButton />
        <div className="visual__bg csi__img" />
        <h2 className="sub__tit">
          <span>CS이노베이션 홈페이지</span>
        </h2>
        <article className="article">
          <div className="site__info">
            <ul className="info__list">
              <li className="info__item">
                <h6>프로젝트명</h6>
                <p>[외주] CS이노베이션 반응형 홈페이지</p>
              </li>
              <li className="info__item">
                <h6>기간</h6>
                <p>2020.04 ~ 2020.05</p>
              </li>
              <li className="info__item">
                <h6>내용</h6>
                <ol>
                  <li>CS이노베이션 반응형 홈페이지 개편</li>
                  <li>React.js TypeScript로 개발</li>
                  <li>Next.js를 사용한 서버사이드 랜더링</li>
                  <li>
                    graphQL 스키마를 통해 서버개발자와 협의, graphQL
                    Query/Mutation
                  </li>
                  <li>
                    <em className="highlight">
                      담당: 퍼블리싱 및 프론트엔드 화면개발
                    </em>
                  </li>
                  <li>
                    카카오 지도 api 연결, 게시판 기능, 고객의견 접수 기능,
                    홈페이지 관리기능(로그인, 게시판관리, 관리자계정관리)
                  </li>
                  <li>UI디자인 새로 작업 및 화면 기획 작업 진행</li>
                  <li>Git을 활용으로 프로젝트 코드 형상관리</li>
                  <li>
                    스프린트 단위로 나누어 프로젝트를 진행하였으며, 하나의
                    스프린트가 끝날 때마다 기능을 하나씩 추가하고 개선
                  </li>
                </ol>
                <span className="tag">React</span>
                <span className="tag">React+style</span>
                <span className="tag">HTML5</span>
                <span className="tag">CSS3</span>
                <span className="tag">Next</span>
                <span className="tag">graphQL</span>
                <span className="tag">Apollo</span>
                <span className="tag">GitHub</span>
              </li>
              <li className="info__icon">
                <a href="https://www.csinnovation.co.kr/" target="_blank">
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
