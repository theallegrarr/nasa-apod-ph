import * as types from '../types'
import { addToFaves, getFaves, removeFromFaves, clearFaves } from '../../util/faveHandler'

export const addFave = (title: string, desc: string, mainImage: string) => async (dispatch: any, getState: any) => {
  try {
    await addToFaves(title, desc, mainImage);
    const allFaves = await getFaves()

    dispatch({
      type: types.ADD_FAVORITE,
      payload: {
        requesting: false,
        error: null,
        success: true,
        favorites: allFaves
      }
    })
  } catch (error) {
    dispatch({
      type: types.ADD_FAVORITE,
      payload: {
        requesting: false,
        error: error.message,
        success: true,
        favorites: getState().favorites
      }
    })
  }
}

export const removeFave = (title: string) => async (dispatch: any, getState: any) => {
  try {
    await removeFromFaves(title);
    const allFaves = await getFaves()

    dispatch({
      type: types.ADD_FAVORITE,
      payload: {
        requesting: false,
        error: null,
        success: true,
        favorites: allFaves
      }
    })
  } catch (error) {
    dispatch({
      type: types.ADD_FAVORITE,
      payload: {
        requesting: false,
        error: error.message,
        success: true,
        favorites: getState().favorites
      }
    })
  }
}

export const loadFaves = () => async (dispatch: any) => {
  try {
    const allFaves = await getFaves()

    dispatch({
      type: types.ADD_FAVORITE,
      payload: {
        requesting: false,
        error: null,
        success: true,
        favorites: allFaves
      }
    })
  } catch (error) {
    return
  }
}

export const deleteAllFaves = () => async (dispatch: any) => {
  try {
    await clearFaves()
    const allFaves = await getFaves()

    dispatch({
      type: types.ADD_FAVORITE,
      payload: {
        requesting: false,
        error: null,
        success: true,
        favorites: allFaves
      }
    })
  } catch (error) {
    return
  }
}