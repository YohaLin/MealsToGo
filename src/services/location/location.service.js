import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((reslove, reject) => {
    const locationMock = locations[searchTerm]

    if(!locationMock){
      reject("not found")
    }
    reslove(locationMock)
  })
}

export const locationTransform = (result) => {
  const formattedResponse = camelize(result)
  // 用解構賦詞的方式就不用取新變數名稱了
  const { geometry = {} } = formattedResponse.results[0]
  const { lat, lng } = geometry.location

  return { lat, lng }
}