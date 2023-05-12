class App extends React.Component{
  render(){
    return <>
    <h1>Formulario</h1>
    <form>
      <input type="text" placeholder="Nombre"/>
      <input type="text" placeholder="Apellido"/>
      <input type="text" placeholder="DNI"/>
      <button type="submit">Enviar</button>
    </form>
    </>
  }
}

ReactDOM.render(<App/>,document.getElementById("root"))