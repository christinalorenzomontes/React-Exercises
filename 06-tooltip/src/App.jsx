import TooltipText from "./tooltip/TooltipText"

function App() {

  return (
    <div className="App">
      <p><TooltipText tooltip={"Texto generado"}>Lorem fistrum</TooltipText> ese pedazo de a gramenawer ahorarr. De la pradera llevame al sircoo diodeno ese pedazo de está la cosa muy malar papaar.</p>
      <p>Lorem fistrum ese pedazo de a gramenawer ahorarr. De la pradera llevame al sircoo diodeno ese pedazo de está la cosa muy malar papaar.</p>
      <p>Lorem fistrum ese pedazo de a gramenawer ahorarr. De la pradera llevame al sircoo diodeno ese pedazo de está la cosa muy malar papaar.</p>
      <p>Lorem fistrum ese pedazo de a gramenawer ahorarr. <TooltipText tooltip={"Soy un Tooltip"}>De la pradera llevame</TooltipText> al sircoo diodeno ese pedazo de está la cosa muy malar papaar.</p>
    </div>
  )
}

export default App
