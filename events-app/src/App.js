import {useState} from 'react'

function App() {
  const [userInput,setUserInput] = useState(null)
  const [eventsInfo,setEventsInfo] = useState([])

  async function getData(){
    let message = await fetch('https://jsonplaceholder.typicode.com/photos')
    let jsonMessage = await message.json()

    let eventsInfo = jsonMessage.filter(event => event.title.includes(userInput));

    setEventsInfo(eventsInfo)
    
    console.log(eventsInfo)
  }

  function showEvents(){
    return eventsInfo.map((item) => {
      return <div>
        <img src={item.thumbnailUrl} alt="Event cover"/>
        <h3>Id: {item.id}</h3>
        <h3>Title: {item.title}</h3>
        <a href={item.url}>Click here to visit the event's URL</a>
        <hr/>
      </div>
    })
  }

  return (
    <div className="App">
      <h1>Welcome!</h1>
      <h2>Type the name, city or category of the event:</h2>
      <input type="text" onChange={(e) => {setUserInput(e.target.value)}}/>
      <button onClick={getData}>Find</button>
      <h2>Here's what we found for: {userInput}</h2>
      {showEvents()}
    </div>
  );
}

export default App;
