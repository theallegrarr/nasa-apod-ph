import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { addFave, loadFaves, removeFave, deleteAllFaves } from "../redux/actions/favorites"


function Favorites(props: any){
  const [ selected, setSelected ] = useState({ link: '', title: '', description: '' })

  useEffect(() => {
    props.loadFaves()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
  <div className='fave-page'>
    <div>
      <Button 
        variant="danger" 
        className='ml-3 mt-4 mb-2' 
        onClick={() => {
          props.deleteAllFaves()
          setSelected({ link: '', title: '', description: '' })
        }}>
          Clear Favorites
      </Button>
    </div>
    <div>
      {selected.link !== '' ?
        <div className='d-flex flex-row flex-wrap ml-3'>
          <img src={selected.link} alt='selected' className='preview ml-2 mt-2' />
          <div className='d-flex flex-column ml-2 mt-2' style={{ width: '50%' }}>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
          </div>
        </div>
        : 
        null
      }
    </div>
    <div className='d-flex flex-row flex-wrap p-2' style={{ width: '98vw' }} >
      {props.faves.favorites.length > 0 ?
        props.faves.favorites.map((fave: any) => (
          <Card key={fave.title} style={{ width: '18rem' }} className='ml-2 mt-2'>
            <Card.Img variant="top" src={fave.link}  style={{ maxHeight: '250px' }} />
            <Card.Body>
            <Card.Title>{fave.title}</Card.Title>
              <Button variant="primary" onClick={() => setSelected(fave)}>View</Button>
              <Button 
                variant="danger" 
                className='ml-2' 
                onClick={() => {
                  props.removeFave(fave.title)
                }}>
                  Remove
              </Button>
            </Card.Body>
          </Card>
        ))
        :
        <h3 className='ml-2 mt-2'>No Favorites Found</h3>
      }
    </div>
  </div>
  )
}

const mapStateToProps = (state: any) => ({
  image: state.image,
  faves: state.faves
})

const mapDispatchToProps = {
  addFave, loadFaves, removeFave, deleteAllFaves
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)