import style from './Details.module.css'
import content from '../content/content.json'

export default function Details1() {
    
    const detailsArray = content['details-1'];
    const dataDetails = content['details-1'].map((detailsArray) => {
      return (
        <>
            <label className={style.label}>{detailsArray.title}</label>
            <hr className={style.line}></hr>
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
             <br></br><label className={style.subheading}>{detailsList1Array.subheading}</label>
                <br></br><br></br><ul className={style['info-text']}>
                    <li>{detailsList1Array.b1}</li>
                    <li>{detailsList1Array.b2}</li>
                    <li>{detailsList1Array.b3}</li>
                    <li>{detailsList1Array.b4}</li>
                    <li>{detailsList1Array.b5}</li>
                    <li>{detailsList1Array.b6}</li>
                    <li>{detailsList1Array.b7}</li>
                </ul>
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
        <div className={style['grid-layout']}>
            <div className={style['grid-box']}>
                <div className={style['grid-item']}>
                    {dataDetails}
                    {dataDetails1Videos}
                    {dataDetailsList1}
                </div>
            </div>
        </div>
      </>
    )
    
}