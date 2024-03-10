
import './App.css'
import Counter from './Countari'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clidked')
  }



  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>

      <h3>React Core Consepts 2</h3>

      <Friends></Friends>
<Users></Users>

<Team></Team>
      
<Counter></Counter>

   <button onClick={handleClick}>Click Me</button>

   <button onClick={handleClick2}>Click2</button>
   
   <button onClick={() =>{alert('third clicked')}}>third</button>
{/* vajillla */}
   <button onClick={() => addToFive(3)}>Four</button>
    
    
    </>
  )
}

export default App
