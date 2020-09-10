import * as types from '../types'

const initialState = {
  requesting: false,
  success: false,
  error: null,
  favorites: []
}

export function faves(state = initialState, action: any) {
  switch (action.type) {
    case types.ADD_FAVORITE:
      return {
        ...state,
        requesting: action.payload.requesting,
        success: action.payload.success,
        favorites: action.payload.favorites,
        error: action.payload.error,
      }
    default:
      return {
        ...state
      }
  }
}

