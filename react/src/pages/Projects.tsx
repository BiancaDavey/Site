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

  //  Content from Details 2.
  const detailsArray = content['details-2'];
  const dataDetails = content['details-2'].map((detailsArray) => {
    return (
      <>
          <label className={style['details-label']}>{detailsArray.title}</label>
          <hr className={style.line}></hr>
          <img className={style['grid-item-image']} src={detailsArray.img1} alt={detailsArray.alt1}></img>
          <p className={style['info-text']}>
              <br></br>{detailsArray.d1}
              <br></br><br></br>{detailsArray.d2}
              <br></br><br></br>{detailsArray['link1-text']}
              <a className={style.link} href={detailsArray.link1} target={detailsArray['link1-target']} rel="noreferrer"> {detailsArray['link1-word']}</a>
            </p>
      </>
    )
  })

  const detailsListArray = content['details-2-lists'];
  const dataDetailsList = content['details-2-lists'].map((detailsListArray) => {
      return (
          <>
           <br></br><label className={style.subheading}>{detailsListArray.subheading}</label>
              <br></br><br></br><ul className={style['info-text']}>
                  <li>{detailsListArray.b1}</li>
                  <li>{detailsListArray.b2}</li>
                  <li>{detailsListArray.b3}</li>
                  <li>{detailsListArray.b4}</li>
                  <li>{detailsListArray.b5}</li>
                  <li>{detailsListArray.b6}</li>
                  <li>{detailsListArray.b7}</li>
                  <li>{detailsListArray.b8}</li>
                  <li>{detailsListArray.b9}</li>
                  <li>{detailsListArray.b10}</li>
                  <li>{detailsListArray.b11}</li>
              </ul>
          </>
      )
  })

  const detailsImgArray = content['details-2'];
  const dataDetailsImg = content['details-2'].map((detailsArray) => {
    return (
      <>
          <br></br><br></br>
          <img className={style['grid-item-image']} src={detailsArray.img2} alt={detailsArray.alt2}></img>
      </>
    )
  })
  
  return (
    <>
      <div className={style['grid-layout']} id="overview">{data}</div>
      <div className={style['grid-layout-details']} id="details">
                <div className={style['grid-box-details']}>
                    <div className={style['grid-item']}>
                        {dataDetails}
                        {dataDetailsList}
                        {dataDetailsImg}
                    </div>
                </div>
            </div>
    </>
  )
  
}