import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'

import { getImage } from '../redux/actions/image'
import { addFave, loadFaves, removeFave } from "../redux/actions/favorites"

function Description(props: any) {
  const { title, mainImage, description } = props.image
  const faveExists = props.faves.favorites.find((fave: any) => fave.title === title);

  useEffect(() => {
    props.loadFaves()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <div className="desc">
      <Card>
        <Card.Header>
          <div className="flex-row d-flex">
            <Card.Title className="mt-2 mb-2">{title}</Card.Title>
            <Button 
              variant={faveExists ? "warning" : "secondary"}
              className="ml-5"
              onClick={() => {
                if(faveExists) {
                  props.removeFave(title)
                } else {
                  props.addFave(title, description, mainImage)
                }
              }}
            >
              <span role='img' aria-label='heart'>❤️</span> 
              {faveExists ? 'Remove from Favorites' : 'Add To Favorites'}
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
  image: state.image,
  faves: state.faves
})

const mapDispatchToProps = {
  getImage, addFave, loadFaves, removeFave
}

export default connect(mapStateToProps, mapDispatchToProps)(Description)