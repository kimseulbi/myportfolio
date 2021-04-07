import { NextPage } from "next";
import Layout from "../../components/Layout";
import HomeButton from "../../components/HomeButton";

const Dongnepro: NextPage = (props: any) => {
  const { pathname } = props;
  return (
    <Layout path={pathname}>
      <div className="sub" id="smart">
        <HomeButton />
        <div className="visual__bg smart__img" />
        <h2 className="sub__tit">
          <span>방문객 스마트폰 통제시스템 서비스</span>
        </h2>
        <article className="article">
          <div className="site__info">
            <ul className="info__list">
              <li className="info__item">
                <h6>프로젝트명</h6>
                <p>방문객 스마트폰 통제시스템 서비스</p>
              </li>
              <li className="info__item">
                <h6>기간</h6>
                <p>2014.10 ~ 2015</p>
              </li>
              <li className="info__item">
                <h6>내용</h6>
                <ol>
                  <li>스마트폰 통제시스템 관리자 화면 웹 디자인</li>
                  <li>방문객 통제시스템 ios, Android 앱 디자인</li>
                  <li>ios, Android 앱 GUI 가이드문서 제작</li>
                  <li>기여도: 디자인 단독진행 100%</li>
                </ol>
                <span className="tag">Redmine</span>
                <span className="tag">SVN</span>
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
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554413983/bg_smart.png"
                alt="비주얼 마크업"
              />
            </li>
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554413981/smart_dashboard.png"
                alt="대시보드화면"
              />
            </li>
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554413981/smart_sub01.png"
                alt="서브화면_01"
              />
            </li>
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554413981/smart_sub02.png"
                alt="서브화면_02"
              />
            </li>
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554413981/smart_sub03.png"
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
