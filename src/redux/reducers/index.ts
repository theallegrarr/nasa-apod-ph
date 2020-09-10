import { combineReducers } from 'redux'

import { image } from './image'
import { faves } from './favorites'

export default combineReducers({
  image,
  faves
})