import React from 'react'
import { connect } from 'react-redux'

import { getImage } from "../redux/actions/image"

function ImageSet(props: any) {
  const getDate = (add: number) => {
    const oldDate = new Date(props.image.date);
    const newDate = oldDate.setDate(oldDate.getDate() + add)

    props.getImage(newDate)
  }
  return(
    <div id="images">

      <div className="previous">
        <img onClick={() => getDate(-1)} src={props.image.previousImage} alt="first"/>
        <p onClick={() => getDate(-1)}>PREVIOUS DAY</p>
      </div>

      <div className="current">
      <img src={props.image.mainImage} alt="first"/>
      </div>

      <div className="next mt-2">
        {props.image.nextImage === '' ? null :
          <>
            <img onClick={() => getDate(1)} src={props.image.nextImage} alt="first"/>
            <p onClick={() => getDate(1)}>NEXT DAY</p>
          </>
        }
      </div>

    </div>
    )
}


const mapStateToProps = (state: any) => ({
  image: state.image
})

const mapDispatchToProps = {
  getImage
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageSet)