import { NextPage } from "next";
import Layout from "../../components/Layout";
import HomeButton from "../../components/HomeButton";

const Dongnepro: NextPage = (props: any) => {
  const { pathname } = props;
  return (
    <Layout path={pathname}>
      <div className="sub" id="dnpAdim">
        <HomeButton />
        <div className="visual__bg dnpAdmin__img" />
        <h2 className="sub__tit">
          <span>동네프로 : 통합관리 시스템</span>
        </h2>
        <article className="article">
          <div className="site__info">
            <ul className="info__list">
              <li className="info__item">
                <h6>프로젝트명</h6>
                <p>온라인 고객관리 시스템</p>
              </li>
              <li className="info__item">
                <h6>기간</h6>
                <p>2019.08 ~ 2020.05</p>
              </li>
              <li className="info__item">
                <h6>내용</h6>
                <ol>
                  <li>동네프로 고객관리 통합관리 제작 및 유지보수</li>
                  <li>React.js 개발</li>
                  <li>Next.js를 사용한 서버사이드 랜더링</li>
                  <li>
                    graphQL 스키마를 통해 서버개발자와 협의, graphQL
                    Query/Mutation
                  </li>
                  <li>
                    <em className="highlight">
                      React UI component 디자인 시스템 구현
                    </em>
                  </li>
                  <li>
                    <em className="highlight">
                      담당: 퍼블리싱 및 프론트엔드 화면개발
                    </em>
                  </li>
                  <li>고유 UI프레임워크 제작</li>
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
                <a href="https://www.dongnepro.com/" target="_blank">
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
