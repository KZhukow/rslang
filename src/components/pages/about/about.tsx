import './about.css';
import { useContext, useEffect } from 'react';
import KZhukow from '../../../assets/images/KZhukow.png';
import Lissa from '../../../assets/images/Lissa.png';
import Yamarauder from '../../../assets/images/yamarauder.png';
import { AuthorizedCtx } from '../../app/App';
import { viewButtonLogin } from '../../global-components/authorization/utils/utils';

export default function About() {
  const [authrize] = useContext(AuthorizedCtx);
  useEffect(() => {
    viewButtonLogin(authrize);
  }, []);
  return (
    <div id="aboutPage">
      <main className="about">
        <div className="about_list">
          <article className="about_list_item">
            <div id="article" className="about_item_img_border">
              <img className="about_item_img" src={KZhukow} alt="KZhukow" />
            </div>
            <div className="about_item_description">
              <div className="about_item_name">
                <h2 className="about_description_title">Zhukov Konstantin</h2>
                <h5 className="about_description_subtitle">Team leader | developer</h5>
              </div>
              <div className="about_description_text">
                <h5>About me:</h5>
                <p>
                  I am 25 years old. I want to find an occupation that will allow not only to
                  develop as a professional, but also to grow as a person and enjoy it. My goal
                  is to gain theoretical knowledge and practical skills in front-end development.
                  In my free time I like to ride a bike, listen to music, play table tennis.
                </p>
                <ul className="work_list">
                  <h5 className="work_list_title">In project:</h5>
                  <li className="work_list_item">- Did basic project settings</li>
                  <li className="work_list_item">- Initial layout</li>
                  <li className="work_list_item">- Router setup</li>
                  <li className="work_list_item">- Glossary page</li>
                  <li className="work_list_item">- Sprint game</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="about_list_item right">
            <div className="about_item_img_border">
              <img className="about_item_img" src={Lissa} alt="Lissa" />
            </div>
            <div className="about_item_description">
              <div className="about_item_name">
                <h2 className="about_description_title">Sokolovskaya Lissa</h2>
                <h5 className="about_description_subtitle">Developer | junior-designer.</h5>
              </div>
              <div className="about_description_text">
                <h5>About me:</h5>
                <p>
                  I`m 23 years old, I work as equipment repair master. My work is interesting, but
                  monotonous. After working in my company for two years, I quit and tried myself in
                  other areas, but I didn`t stay anywhere because it got boring. Then I stumbled
                  upon and start delved into the profession of a front end developer.. and it got
                  me very interested! Now my main goal is to get as much knowledge in this area
                  as possible and become a front-end developer.
                </p>
                <ul className="work_list">
                  <h5 className="work_list_title">In project:</h5>
                  <li className="work_list_item">- Part of the login and registration form</li>
                  <li className="work_list_item">- Application layout and design</li>
                </ul>
              </div>
            </div>
          </article>
          <article className="about_list_item">
            <div className="about_item_img_border">
              <img className="about_item_img" src={Yamarauder} alt="Yamarauder" />
            </div>
            <div className="about_item_description">
              <div className="about_item_name">
                <h2 className="about_description_title">Hurkov Valera</h2>
                <h5 className="about_description_subtitle">Developer</h5>
              </div>
              <div className="about_description_text">
                <h5>About me:</h5>
                <p>
                  24 years old. I don`t have a wife and  children. If you beautiful girl, write me
                  (https://t.me/yamarauder). I want to become a professional frontend developer. I
                  want to learn new technologies to become a competitive software engineers. I like
                  to solve a logic tasks. I like programming because it allows me to work anywhere
                  and make good money at the same time.
                </p>
                <ul className="work_list">
                  <h5 className="work_list_title">In project:</h5>
                  <li className="work_list_item">- Part of the login and registration form</li>
                  <li className="work_list_item">- Statistics page</li>
                  <li className="work_list_item">- Audio call game</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
