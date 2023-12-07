import ToDoList from "./ToDoList";

function Backg(){
  
  
    return(
        <div className="bckg">
        <main>
            <h1>Daily Tasks</h1>
        <ToDoList title="Sport" backgroundColor="#CBEFB6"/>
      <ToDoList title="Study"  backgroundColor=" #B6D8F2"/>
      <ToDoList title="Work" backgroundColor="#CACACA" />
      <ToDoList title="Health" backgroundColor="#F3E7DA"/>
      <ToDoList title="Personnal" backgroundColor="#F5DF4D"/>
      </main>
        </div>
    )
}
export default Backg