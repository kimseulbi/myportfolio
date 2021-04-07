import { NextPage } from "next";
import Layout from "../../components/Layout";
import HomeButton from "../../components/HomeButton";

const Dongnepro: NextPage = (props: any) => {
  const { pathname } = props;
  return (
    <Layout path={pathname}>
      <div className="sub" id="focs">
        <HomeButton />
        <div className="visual__bg focs__img" />
        <h2 className="sub__tit">
          <span>FOCS 방화벽정책통합관리</span>
        </h2>
        <article className="article">
          <div className="site__info">
            <ul className="info__list">
              <li className="info__item">
                <h6>프로젝트명</h6>
                <p>FOCS 방화벽정책통합관리 솔루션</p>
              </li>
              <li className="info__item">
                <h6>기간</h6>
                <p>2017.03 ~ 2018.08</p>
              </li>
              <li className="info__item">
                <h6>내용</h6>
                <ol>
                  <li>방화벽 신청 부터 운영, 감사까지 지원하는 운영 시스템</li>
                  <li>사용자의 편의성을 고려한 UI/UX 설계</li>
                  <li>HTML5 &amp; SASS 이용하여 화면 퍼블리싱</li>
                  <li>브라우저별 크로스브라우징작업</li>
                  <li>Axure RP로 화면 스토리보드 작성</li>
                  <li>
                    협업과정에서 GitLab, Google Drive, Slack 등을 활용하여 협업
                  </li>
                  <li>
                    React기반 AntDesign 라이브러리 사용하여 JSX 마크업 사용
                  </li>
                  <li>기여도: UI설계위주의 디자인, 퍼블리싱 단독진행</li>
                </ol>
                <span className="tag">HTML5</span>
                <span className="tag">SASS</span>
                <span className="tag">Git</span>
                <span className="tag">Gitlab</span>
                <span className="tag">yarn</span>
                <span className="tag">AntDesign</span>
                <span className="tag">UX/UI</span>
                <span className="tag">Axure RP</span>
              </li>
            </ul>
          </div>
        </article>
        <div className="img__thumbArea">
          <ul className="img__thumb-sm">
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554392604/focs_dashboard.png"
                alt="대시보드화면"
                className="shot"
              />
            </li>
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554393434/focs_sub02.png"
                alt="서브화면_02"
                className="shot"
              />
            </li>
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554392603/focs_sub01.png"
                alt="서브화면_01"
                className="shot"
              />
            </li>
            <li className="active">
              <img
                src="https://res.cloudinary.com/https-seulbikim-netlify-com/image/upload/q_auto:best/v1554397068/focs_sub03.png"
                alt="서브화면_03"
                className="shot"
              />
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Dongnepro;
