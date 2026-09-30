import "./app.css";
import "./style.css";

function App() {
  return (
    <>
      {/** ------- Aufgabe 1 ----- */}
      <button className="button">Button 1</button>
      <button className="button" style={{fontSize: "20px", backgroundColor: "red"}}>Button 2</button>

      {/** ------- Aufgabe 2 ----- */}
      <div id="Elternelement" style={{
        display: "flex", 
        flexDirection: "row",
        justifyContent: "space-around", 
        width: "500px", 
        border: "2px dashed grey"}}>
        <div></div>
        <div></div>
        <div></div>
        <span>Span</span>



      </div>

    </>
  );
}

export default App;
