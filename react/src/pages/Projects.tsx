import style from './Overview.module.css'
import content from '../content/content.json'

export default function Projects() {
  const contentArray = content.projects;
  const data = content.projects.map((contentArray) => {
    return (
      <>
        <div className={style['grid-box-image']} key={contentArray.id}>
          <img className={style['grid-item-image']} src={contentArray.img1} alt={contentArray.alt1}></img>
        </div>
        <div className={style['grid-box']}>
          <div className={style['grid-item']}>
            <label className={style.label}>{contentArray.title}</label>
            <br></br><br></br>
            <label className={style['label-subtext']}>{contentArray.using}</label>
            <br></br><br></br>
            <hr className={style.line}></hr>
            <p className={style['info-text']}>
              <br></br>{contentArray.s1}
              <br></br><br></br>{contentArray.s2}
              <br></br><br></br>{contentArray['link1-text']}
              <a className={style.link} href={contentArray.link1} target={contentArray['link1-target']} rel="noreferrer"> {contentArray['link1-word']}</a>
              <br></br><br></br>{contentArray['linkd-text']}
              <a className={style.link} href={contentArray['linkd']}>{contentArray['linkd-word']}</a>
            </p>
          </div>
        </div>
      </>
    )
    })
  
  return (
    <>
      <div className={style['grid-layout']}>{data}</div>
    </>
  )
  
}