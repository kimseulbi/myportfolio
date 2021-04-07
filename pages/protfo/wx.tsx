import { NextPage } from "next";
import Layout from "../../components/Layout";
import HomeButton from "../../components/HomeButton";

const Dongnepro: NextPage = (props: any) => {
  const { pathname } = props;
  return (
    <Layout path={pathname}>
      <div className="sub" id="wx">
        <HomeButton />
        <div className="visual__bg wx__img" />
        <h2 className="sub__tit">
          <span>웹사이트점검시스템 서비스</span>
        </h2>
        <article className="article">
          <div className="site__info">
            <ul className="info__list">
              <li className="info__item">
                <h6>프로젝트명</h6>
                <p>웹사이트점검시스템 서비스</p>
              </li>
              <li className="info__item">
                <h6>기간</h6>
                <p>2015.02 ~ 2017</p>
              </li>
              <li className="info__item">
                <h6>내용</h6>
                <ol>
                  <li>
                    자동검색 모듈을 통한 접속가능한 모든 웹페이지의 악성코드
                    검사하는 웹사이트 점검 시스템
                  </li>
                  <li>웹 디자인 및 화면 설계</li>
                  <li>웹디자인 가이드라인 작성.</li>
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
        <div className="detail-img-box">
          <small>* 실제 서비스화면과 다를수 있습니다.</small>
          <small>
            * 이미지에 있는 데이터 및 정보는 맞지 않은 정보 및 데이터 입니다.
          </small>
          <img
            src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554408173/img_wx.png"
            alt="wx 비주얼이미지"
          />
        </div>
        <div className="img__thumbArea">
          <ul className="img__thumb-sm">
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554410155/wx_dashboard.png"
                alt="대시보드화면"
              />
            </li>
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554410154/wx_sub01.png"
                alt="서브화면_01"
              />
            </li>
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554410154/wx_sub02.png"
                alt="서브화면_02"
              />
            </li>
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554410154/wx_sub03.png"
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
