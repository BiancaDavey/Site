import style from './Overview.module.css'
import content from '../content/content.json'

export default function Games() {
  const contentArray = content.games;
  const data = content.games.map((contentArray) => {
    return (
      <>
        <div className={style['grid-box-image']} key={contentArray.id}>
          <img className={style['grid-item-image']} src={contentArray.img1} alt={contentArray.alt1}></img>
        </div>
        <div className={style['grid-box']}>
          <div className={style['grid-item']}>
            <label className={style.label}>{contentArray.title}</label>
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

  //  Content from Details1.
  const detailsArray = content['details-1'];
  const dataDetails = content['details-1'].map((detailsArray) => {
    return (
      <>
          <label className={style['details-label']}>{detailsArray.title}</label>
          <hr className={style['details-line']}></hr>
          <img className={style['grid-item-image']} src={detailsArray.img1} alt={detailsArray.alt1}></img>
          <p className={style['info-text']}>
              <br></br>{detailsArray.d1}
              <br></br><br></br>{detailsArray['link1-text']}
              <a className={style.link} href={detailsArray.link1} target={detailsArray['link1-target']} rel="noreferrer"> {detailsArray['link1-word']}</a>
          </p>
      </>
    )
  })

  const detailsList1Array = content['details-1-lists'];
  const dataDetailsList1 = content['details-1-lists'].map((detailsList1Array) => {
      return (
          <>
          <details open>
            <summary>
              <br></br><label className={style.subheading}>{detailsList1Array.subheading + " >"}</label>
            </summary>
                <br></br><br></br><ul className={style['info-text']}>
                    <li>{detailsList1Array.b1}</li>
                    <li>{detailsList1Array.b2}</li>
                    <li>{detailsList1Array.b3}</li>
                    <li>{detailsList1Array.b4}</li>
                    <li>{detailsList1Array.b5}</li>
                    <li>{detailsList1Array.b6}</li>
                    <li>{detailsList1Array.b7}</li>
                </ul>
            </details>
          </>
      )
  })

  const details1VideoArray = content['details-1-videos'];
  const dataDetails1Videos = content['details-1-videos'].map((details1VideoArray) => {
      return (
          <>
              <br></br><br></br>
              <label className={style['subheading-video']}>{details1VideoArray['video-title']}</label>
              <br></br><p className={style['info-text']}>
                  {details1VideoArray.v1}
              </p>
              <div className={style['grid-item-video']}>
                  <iframe className={style.video} width="560" height="315" src={details1VideoArray['v-link-url']} 
                  title={details1VideoArray['video-title']} allow="accelerometer; autoplay; clipboard-write; 
                  encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </div>
          </>
      )
  })

  return (
    <>
      <div className={style['grid-layout']} id="overview">{data}</div>
      <div className={style['grid-layout-details']} id="details">
            <div className={style['grid-box-details']}>
                <div className={style['grid-items']}>
                    {dataDetails}
                    {dataDetails1Videos}
                    {dataDetailsList1}
                </div>
            </div>
        </div>
    </>
  )
  
}
