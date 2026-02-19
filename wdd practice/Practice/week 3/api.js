// api.js
const baseUrl = "https://developer.nps.gov/api/v1/";
const outputList = document.getElementById("outputList");

async function getJson(endpoint) {
  // replace this with your actual key
  const apiKey = "UyHzAqWd2J39vVxctJDyaia3AyD2j1xgvrJsC7Gk";
  // construct the url: baseUrl + endpoint + parameters
  const url = baseUrl + endpoint;
  // set the options. The important one here is the X-Api-Key
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": apiKey
      }
  }
  // make the request
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)
  return data;
}
function listTemplate(item) {
  return `<li><a href="${item.url}">${item.fullName}</a> ${item.states}</li>`
}

() {
  const endpoint = "activities/parks?q=climbing"
  const listElement = document.getElementById("outputList")
  const data = await getJson(endpoint)
  const parks = data.data[0].parks
  const listHtml = parks.map(listTemplate).join("")
  listElement.innerHTML = listHtml;
}
renderClimbingList()
// getJson('activities/parks?q=climbing');