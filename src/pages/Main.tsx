import React from 'react';
import { connect } from 'react-redux'
import  { Spinner } from 'react-bootstrap'

import Images from '../components/ImageSet'
import Description from '../components/Description'
import { getImage } from "../redux/actions/image"

function Main(props: any){

  return(<>
    {props.image.requesting ? 
      <Spinner animation="border" role="status" className="ml-5 mt-5">
        <span className="sr-only">Loading...</span>
      </Spinner>
      :
      <>
        <Images />
        <Description />
      </>
    }
  </>)
}

const mapStateToProps = (state: any) => ({
  image: state.image
})

const mapDispatchToProps = {
  getImage
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)