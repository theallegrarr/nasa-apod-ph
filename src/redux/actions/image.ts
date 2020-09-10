import axios from 'axios';

import * as types from '../types'
import { formatDate } from '../../util/dateHandler'

export const getImage = (date: any) => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: types.GET_IMAGE,
      payload: {
        requesting: true,
        error: null,
        success: false,
        mainImage: getState().mainImage,
        nextImage: getState().nextImage,
        previousImage: getState().previousImage,
        description: getState().description,
        date,
        title: getState().title
      }
    })
    const checkDate = new Date(date)
    const yday = checkDate.setDate(checkDate.getDate() - 1)
    const tomorrow = checkDate.setDate(checkDate.getDate() + 2)

    const shotLink = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_KEY}&date=${formatDate(date)}`;
    const shotLinkP = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_KEY}&date=${formatDate(yday)}`;
    const shotLinkT = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_APOD_KEY}&date=${formatDate(tomorrow)}`;
    
    const shotsToday = axios.get(shotLink)
    const shotsPrevious = axios.get(shotLinkP)
    const shotsTomorrow = new Date(tomorrow).getTime() > (new Date()).getTime() ? axios.get(shotLink) : axios.get(shotLinkT)

    const apiResponse = new Date(tomorrow).getTime() > (new Date()).getTime() ? await Promise.all([shotsToday, shotsPrevious]) : await Promise.all([shotsToday, shotsPrevious, shotsTomorrow])

    dispatch({
      type: types.GET_IMAGE,
      payload: {
        requesting: false,
        error: null,
        success: true,
        mainImage: apiResponse[0].data.url,
        nextImage: apiResponse[2] ? apiResponse[2].data.url : '',
        previousImage: apiResponse[1].data.url,
        description: apiResponse[0].data.explanation,
        date,
        title: apiResponse[0].data.title
      }
    })
  } catch(error) {
    console.log(error)
    dispatch({
      type: types.GET_IMAGE,
      payload: {
        requesting: false,
        error: error.response ? error.response.data.msg : error.message,
        success: false,
        mainImage: getState().mainImage,
        nextImage: getState().nextImage,
        previousImage: getState().previousImage,
        description: getState().description,
        date,
        title: getState().title
      }
    })
  }
}

