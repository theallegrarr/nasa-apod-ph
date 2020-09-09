import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'

import { getImage } from '../redux/actions/image'
import { faveExists, addToFaves, removeFromFaves } from '../util/faveHandler'

function Description(props: any) {
  const { title, mainImage, description } = props.image
  const [exists, setExists] = useState(faveExists(title))

  return(
    <div className="desc">
      <Card>
        <Card.Header>
          <div className="flex-row d-flex">
            <Card.Title className="mt-2 mb-2">{title}</Card.Title>
            <Button 
              variant={faveExists(title) ? "warning" : "secondary"}
              className="ml-5"
              onClick={() => {
                if(faveExists(title)){
                  removeFromFaves(title)
                  setExists(false)
                } else {
                  addToFaves(title, description, mainImage)
                  setExists(true)
                }
              }}
            >
              <span role='img' aria-label='heart'>❤️</span> 
              {exists ? 'Remove from Favorites' : 'Add To Favorites'}
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {description}
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