import style from './Details.module.css'
import content from '../content/content.json'

export default function About() {
  const aboutArray = content.about;
  const dataAbout = content.about.map((aboutArray) => {
    return (
      <>
          <label className={style['details-label']}>{aboutArray.title}</label>
          <hr className={style.line}></hr>
          <p className={style['info-text']}>
              <br></br>{aboutArray.a1}
          </p>
      </>
    )
  })

  const aboutListArray = content['about-lists'];
  const dataAboutList = content['about-lists'].map((aboutListArray) => {
      return (
          <>
            <br></br><label className={style.subheading}>{aboutListArray.subheading}</label>
            <br></br><br></br><ul className={style['info-text']}>
                <li>{aboutListArray.b1}</li>
                <li>{aboutListArray.b2}</li>
                <li>{aboutListArray.b3}</li>
                <li>{aboutListArray.b4}</li>
                <li>{aboutListArray.b5}</li>
            </ul>
          </>
      )
  })
    
    return (
      <>
        <div className={style['grid-layout']}>
            <div className={style['grid-box']}>
                <div className={style['grid-item']}>
                    {dataAbout}
                    {dataAboutList}
                </div>
            </div>
        </div>
      </>
    )
}