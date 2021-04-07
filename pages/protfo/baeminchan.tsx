import { NextPage } from "next";
import Layout from "../../components/Layout";
import HomeButton from "../../components/HomeButton";

const Dongnepro: NextPage = (props: any) => {
  const { pathname } = props;
  return (
    <Layout path={pathname}>
      <div className="sub" id="baeminchan">
        <HomeButton />
        <div className="visual__bg chan__img" />
        <h2 className="sub__tit">
          <span>Baeminchan Copy</span>
        </h2>
        <article className="article">
          <div className="site__info">
            <ul className="info__list">
              <li className="info__item">
                <h6>프로젝트명</h6>
                <p>배민찬 카피 프로젝트</p>
              </li>
              <li className="info__item">
                <h6>기간</h6>
                <p>2018.12.03 ~ 2018.12.21</p>
              </li>
              <li className="info__item">
                <h6>내용</h6>
                <ol>
                  <li>React.js를 사용하여 배민찬의 카피사이트를 구현</li>
                  <li>
                    6명의 팀원이 기획, 3명의 프론트엔드 개발, 배포까지 진행
                  </li>
                  <li>
                    <em className="highlight">
                      담당: 반찬목록화면, 반찬상세화면, 반찬 검색필터화면,
                      게시판 기능
                    </em>
                  </li>
                  <li>Postman으로 웹 API 테스트</li>
                  <li>
                    협업과정에서 GitHub, Google Drive, Slack, Git 등을 활용하여
                    협업
                  </li>
                  <li>Git을 활용으로 프로젝트 코드 형상관리</li>
                  <li>
                    스프린트 단위로 나누어 프로젝트를 진행하였으며, 하나의
                    스프린트가 끝날 때마다 기능을 하나씩 추가하고 개선
                  </li>
                </ol>
                <span className="tag">React</span>
                <span className="tag">HTML5</span>
                <span className="tag">SASS</span>
                <span className="tag">reactstrap</span>
                <span className="tag">Git</span>
                <span className="tag">GitHub</span>
                <span className="tag">Slack</span>
                <span className="tag">Postman</span>
              </li>
              <small>* 유튜브영상으로 참고 부탁드립니다. 1분04초부터</small>
              <li className="info__icon">
                <a href="https://github.com/ElegantSiblings/FE" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://youtu.be/0xTYpg4B0pw" target="_blank">
                  <i className="fab fa-youtube"></i>
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
