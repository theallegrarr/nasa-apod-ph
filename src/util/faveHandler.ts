export const addToFaves = (title: string, desc: string, mainImage: string) => {
  const newFave = { 
    title: title,
    description: desc,
    link: mainImage
  };

  const existingFaves = JSON.parse(localStorage.getItem('faves') || '{}')

  if(existingFaves[0]){
    existingFaves.push(newFave)
    localStorage.setItem("faves", JSON.stringify(existingFaves))
  } else {
    localStorage.setItem("faves", JSON.stringify([newFave]))
  }
}

export const removeFromFaves = (title: string) => {
  let existingFaves = JSON.parse(localStorage.getItem('faves') || '{}')

  existingFaves = existingFaves.filter((fave: any) => fave.title !== title)
  localStorage.setItem("faves", JSON.stringify(existingFaves))
}


export function faveExists(title: string) {
  const existingFaves = JSON.parse(localStorage.getItem('faves') || '{}')

  if(existingFaves[0]){
    const found = existingFaves.find((fave: any) => fave.title === title)
    if(found)return true
  }else{
    return false
  }
  return false
}

export function getFaves() {
  const existingFaves = JSON.parse(localStorage.getItem('faves') || '{}')

  if(existingFaves[0]){
    return existingFaves
  }else{
    return []
  }
}

export function clearFaves() {
  localStorage.setItem('faves', JSON.stringify([]))
}