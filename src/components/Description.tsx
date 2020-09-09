import React from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'

import { getImage } from "../redux/actions/image"

function Description(props: any) {

  return(
    <div className="desc">
      <Card>
        <Card.Header>
          <div className="flex-row d-flex">
            <Card.Title className="mt-2 mb-2">{props.image.title}</Card.Title>
            <Button variant="secondary" className="ml-5">
              <span role='img' aria-label='heart'>❤️</span> Add To Favorites</Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {props.image.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    )
}


const mapStateToProps = (state: any) => ({
  image: state.image
})

const mapDispatchToProps = {
  getImage
}

export default connect(mapStateToProps, mapDispatchToProps)(Description)