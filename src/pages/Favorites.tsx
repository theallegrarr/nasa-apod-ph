import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import { getFaves, clearFaves, removeFromFaves } from '../util/faveHandler'

function Favorites(){
  const [ faves, setFaves ] = useState([])
  const [ selected, setSelected ] = useState({ link: '', title: '', description: '' })

  useEffect(() => {
    setFaves(getFaves())
  }, [])

  return(
  <div className='fave-page'>
    <div>
      <Button 
        variant="danger" 
        className='ml-3 mt-4 mb-2' 
        onClick={() => {
          clearFaves()
          setFaves(getFaves())
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
      {faves.length > 0 ?
        faves.map((fave: any) => (
          <Card key={fave.title} style={{ width: '18rem' }} className='ml-2 mt-2'>
            <Card.Img variant="top" src={fave.link}  style={{ maxHeight: '250px' }} />
            <Card.Body>
            <Card.Title>{fave.title}</Card.Title>
              <Button variant="primary" onClick={() => setSelected(fave)}>View</Button>
              <Button 
                variant="danger" 
                className='ml-2' 
                onClick={() => {
                  removeFromFaves(fave.title)
                  setFaves(getFaves())
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

export default Favorites