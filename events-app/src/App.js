import {useState} from 'react'

function App() {
  const [userInput,setUserInput] = useState(null)
  const [eventInfo,setEventInfo] = useState([])

  async function getData(){
    let message = await fetch('https://jsonplaceholder.typicode.com/photos')
    let jsonMessage = await message.json()

    let eventInfo = []

    for(let i = 0; i < 5000; i++){
      if(jsonMessage[i].title === userInput){
        eventInfo.push(jsonMessage[i].id)
        eventInfo.push(jsonMessage[i].title)
        eventInfo.push(jsonMessage[i].url)
        eventInfo.push(jsonMessage[i].thumbnailUrl)
        break
      }
    }

    setEventInfo(eventInfo)
  
    console.log(eventInfo)
  }

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <h2>Type the name of the event:</h2>
      <input type="text" onChange={(e) => {setUserInput(e.target.value)}}/>
      <button onClick={getData}>Find</button>
      <h2>Here's what we found for: {userInput}</h2>
      <img src={eventInfo[3]} alt="Event cover"/>
      <h3>Id: {eventInfo[0]}</h3>
      <h3>Title: {eventInfo[1]}</h3>
      <h3>Url: {eventInfo[2]}</h3>
      <a href={eventInfo[2]}>Click here to visit the event's URL</a>
    </div>
  );
}

export default App;
