import React, { useContext } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import './tutorial.css';

import { ReactComponent as OnePageArrow } from './image/one-page-arrow.svg';
import { ReactComponent as AllPageArrow } from './image/all-page-arrow.svg';
import CustomBtnLink from './custom-btn-link';
import { ThemeCtx } from '../../app/App';

interface ITutorialParams {
  group: string,
  page: string,
}
export default function TutorialContent() {
  const [themeType] = useContext(ThemeCtx);
  const backGround = themeType
    ? ['group-green', 'group-yellow', 'group-orange', 'group-pink', 'group-purpure', 'group-violet']
    : ['dGroup-green', 'dGroup-yellow', 'dGroup-orange', 'dGroup-pink', 'dGroup-purpure', 'dGroup-violet'];

  const { group, page } = useParams() as unknown as ITutorialParams;
  const curGroup = +group - 1;
  const curPage = +page;
  const nextPage = curPage >= 30 ? 30 : curPage + 1;
  const prevPage = curPage <= 1 ? 1 : curPage - 1;

  const navigate = useNavigate();

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
      <Outlet />
      <div className="controllers">
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
        <div className="group-btns">
          <CustomBtnLink to={`../glossary/1/${+group === 1 ? curPage : 1}`} className="group-btn group-btn-green">1</CustomBtnLink>
          <CustomBtnLink to={`../glossary/2/${+group === 2 ? curPage : 1}`} className="group-btn group-btn-yellow">2</CustomBtnLink>
          <CustomBtnLink to={`../glossary/3/${+group === 3 ? curPage : 1}`} className="group-btn group-btn-orange">3</CustomBtnLink>
          <CustomBtnLink to={`../glossary/4/${+group === 4 ? curPage : 1}`} className="group-btn group-btn-pink">4</CustomBtnLink>
          <CustomBtnLink to={`../glossary/5/${+group === 5 ? curPage : 1}`} className="group-btn group-btn-purpure">5</CustomBtnLink>
          <CustomBtnLink to={`../glossary/6/${+group === 6 ? curPage : 1}`} className="group-btn group-btn-violet">6</CustomBtnLink>
          <button type="button" className="group-btn group-btn-black">D</button>
        </div>
      </div>
    </div>
  );
}
