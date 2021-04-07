import { NextPage } from "next";
import Layout from "../../components/Layout";
import HomeButton from "../../components/HomeButton";

const Ucares: NextPage = (props: any) => {
  const { pathname } = props;
  return (
    <Layout path={pathname}>
      <div className="sub" id="ucares">
        <HomeButton />
        <div className="visual__bg ucares__img" />
        <h2 className="sub__tit">
          <span>유케어스 : 유디아 고객센터 유케어스 </span>
        </h2>
        <article className="article">
          <div className="site__info">
            <ul className="info__list">
              <li className="info__item">
                <h6>프로젝트명</h6>
                <p>유디아 고객센터 유케어스</p>
              </li>
              <li className="info__item">
                <h6>기간</h6>
                <p>2019.06 ~ 2020.05</p>
              </li>
              <li className="info__item">
                <h6>내용</h6>
                <ol>
                  <li>이전 버전 유디아 고객센터 유케어스 제작 및 유지보수</li>
                  <li>React.js TypeScript로 개발</li>
                  <li>Next.js를 사용한 서버사이드 렌더링</li>
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
                      담당: 뉴버전 디자인 퍼블리싱 및 프론트엔드 화면개발{" "}
                    </em>
                  </li>
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
                <a href="https://ucares.dongnepro.com/" target="_blank">
                  <i className="fab fa-chrome"></i>
                </a>
              </li>
            </ul>
          </div>
        </article>
        <div className="detail-img-box">
          <small>
            * 이미지에 있는 데이터 및 정보는 맞지 않은 정보 및 데이터 입니다.
          </small>
          <img src="/images/ucares.gif" alt="ucares" style={{ width: "40%" }} />
        </div>
      </div>
    </Layout>
  );
};

export default Ucares;
