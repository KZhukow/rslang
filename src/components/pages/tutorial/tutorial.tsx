import React, { useContext } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import './tutorial.css';
import { ReactComponent as OnePageArrow } from './image/one-page-arrow.svg';
import { ReactComponent as AllPageArrow } from './image/all-page-arrow.svg';
import listening from '../../../assets/images/headphone.png';
import sprint from '../../../assets/images/сhronometer.png';
import CustomBtnLink from './custom-btn-link';

import { AuthorizedCtx, ThemeCtx } from '../../app/App';

interface ITutorialParams {
  group: string,
  page: string,
}
export default function TutorialContent() {
  const [themeType] = useContext(ThemeCtx);
  const backGround = themeType
    ? ['group_first', 'group_second', 'group_third', 'group_fourth', 'group_fifth', 'group_sixth']
    : ['dark_group_first', 'dark_group_second', 'dark_group_third', 'dark_group_fourth', 'dark_group_fifth', 'dark_group_sixth'];
  const backGroundBtn = themeType
    ? ['group_btn_first', 'group_btn_second', 'group_btn_third', 'group_btn_fourth', 'group_btn_fifth', 'group_btn_sixth']
    : ['dark_btn_first', 'dark_btn_second', 'dark_btn_third', 'dark_btn_fourth', 'dark_btn_fifth', 'dark_btn_sixth'];

  const { group, page } = useParams() as unknown as ITutorialParams;
  const curGroup = +group - 1;
  const curPage = +page;
  const nextPage = curPage >= 30 ? 30 : curPage + 1;
  const prevPage = curPage <= 1 ? 1 : curPage - 1;

  const navigate = useNavigate();

  const [authorized] = useContext(AuthorizedCtx);

  function switchPageInput(e: React.FocusEvent<HTMLInputElement, Element>) {
    e.preventDefault();
    let value = parseInt(e.target.value, 10);
    if (value <= 1) {
      value = 1;
    } else if (value > 30) {
      value = 30;
    } else if (Number.isNaN(value)) {
      value = curPage;
    }
    e.target.value = '';
    navigate(`../glossary/${group}/${value}`);
  }

  return (
    <div className={`tutorialContent ${backGround[curGroup]}`}>
      <div className="cards_content">
        <h2 className="cards_title">
          {+group === 7 ? 'Difficult words' : `Group: ${group}`}
        </h2>
        {+group !== 7 && (
          <h4 className="cards_subtitle">
            Page:
            {page}
          </h4>
        )}
        <Outlet />
      </div>
      <div className="controllers">
        {+group !== 7 && (
          <div className="pagination">
            <Link to={`../glossary/${group}/1`} className="pagination-btn first-page-arr">
              <AllPageArrow />
            </Link>
            <Link to={`../glossary/${group}/${prevPage}`} className="pagination-btn">
              <OnePageArrow />
            </Link>
            <input type="number" placeholder={`${page}/30`} className="num-page" onBlur={switchPageInput} />
            <Link to={`../glossary/${group}/${nextPage}`} className="pagination-btn next-page-arr">
              <OnePageArrow />
            </Link>
            <Link to={`../glossary/${group}/30`} className="pagination-btn last-page-arr">
              <AllPageArrow />
            </Link>
          </div>
        )}
        {+group !== 7 && (
          <div className="links-to-games">
            <Link to="../games/audio-call" className="game_btn" style={{ marginRight: '20px' }}>
              <img className="game-link-img-glossary" src={listening} alt="Listening" />
            </Link>
            <Link to="../games/sprint" className="game_btn">
              <img className="game-link-img-glossary" src={sprint} alt="Sprint" />
            </Link>
          </div>
        )}
        <div className="group-btns">
          <CustomBtnLink to={`../glossary/1/${+group === 1 ? curPage : 1}`} className={`group-btn ${backGroundBtn[0]}`}>1</CustomBtnLink>
          <CustomBtnLink to={`../glossary/2/${+group === 2 ? curPage : 1}`} className={`group-btn ${backGroundBtn[1]}`}>2</CustomBtnLink>
          <CustomBtnLink to={`../glossary/3/${+group === 3 ? curPage : 1}`} className={`group-btn ${backGroundBtn[2]}`}>3</CustomBtnLink>
          <CustomBtnLink to={`../glossary/4/${+group === 4 ? curPage : 1}`} className={`group-btn ${backGroundBtn[3]}`}>4</CustomBtnLink>
          <CustomBtnLink to={`../glossary/5/${+group === 5 ? curPage : 1}`} className={`group-btn ${backGroundBtn[4]}`}>5</CustomBtnLink>
          <CustomBtnLink to={`../glossary/6/${+group === 6 ? curPage : 1}`} className={`group-btn ${backGroundBtn[5]}`}>6</CustomBtnLink>
        </div>
        {authorized && <CustomBtnLink to="../glossary/7/1" className="btn difficult_btn">Difficult words</CustomBtnLink>}
      </div>
    </div>
  );
}
