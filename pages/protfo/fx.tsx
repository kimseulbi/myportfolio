import { NextPage } from "next";
import Layout from "../../components/Layout";
import HomeButton from "../../components/HomeButton";

const Dongnepro: NextPage = (props: any) => {
  const { pathname } = props;
  return (
    <Layout path={pathname}>
      <div className="sub" id="fx">
        <HomeButton />
        <div className="visual__bg fx__img" />
        <h2 className="sub__tit">
          <span>악성 파일 분석 시스템 서비스</span>
        </h2>
        <article className="article">
          <div className="site__info">
            <ul className="info__list">
              <li className="info__item">
                <h6>프로젝트명</h6>
                <p>악성 파일 분석 시스템 서비스</p>
              </li>
              <li className="info__item">
                <h6>기간</h6>
                <p>2015.11 ~ 2017</p>
              </li>
              <li className="info__item">
                <h6>내용</h6>
                <ol>
                  <li>
                    네트워크에 흐르는 모든 파일 수집 및 악성파일 분석하는 파일
                    전수검사 시스템
                  </li>
                  <li>대시보드화면 퍼블리싱 참여</li>
                  <li>악성파일 분석하는 시스템 웹 디자인 및 화면 설계</li>
                  <li>웹디자인 가이드라인 작성.</li>
                  <li>
                    협업과정에서 Google Drive, Slack, Redmine 등을 활용하여 협업
                  </li>
                  <li>기여도: 디자인 단독진행 100%, 퍼블리싱 기여 20%</li>
                </ol>
                <span className="tag">HTML5</span>
                <span className="tag">CSS3</span>
                <span className="tag">Bootstrap</span>
                <span className="tag">Redmine</span>
                <span className="tag">SVN</span>
                <span className="tag">Slack</span>
                <span className="tag">UX/UI</span>
                <span className="tag">Photoshop</span>
                <span className="tag">Illustrator</span>
              </li>
            </ul>
          </div>
        </article>
        <div className="img__thumbArea">
          <small>
            * 이미지에 있는 데이터 및 정보는 맞지 않은 정보 및 데이터 입니다.
          </small>
          <ul className="img__thumb-sm">
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554402959/bg_fx.png"
                alt="비주얼 마크업"
              />
            </li>
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554402958/fx_dashboard.png"
                alt="대시보드화면"
              />
            </li>
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554402958/fx_sub01.png"
                alt="서브화면_01"
              />
            </li>
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554402957/fx_sub02.png"
                alt="서브화면_02"
              />
            </li>
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554402957/fx_sub03.png"
                alt="서브화면_03"
              />
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Dongnepro;
