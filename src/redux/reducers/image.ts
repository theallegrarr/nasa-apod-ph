import * as types from '../types'

const initialState = {
  requesting: false,
  success: false,
  mainImage: null,
  nextImage: null,
  previousImage: null,
  error: null,
  description: '',
  date: new Date(),
  title: ''
}

export function image(state = initialState, action: any) {
  switch (action.type) {
    case types.GET_IMAGE:
      return {
        ...state,
        requesting: action.payload.requesting,
        success: action.payload.success,
        mainImage: action.payload.mainImage,
        previousImage: action.payload.previousImage,
        nextImage: action.payload.nextImage,
        error: action.payload.error,
        description: action.payload.description,
        date: action.payload.date,
        title: action.payload.title
      }
    default:
      return {
        ...state
      }
  }
}

