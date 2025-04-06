import TemperatureConverter from "./components/TemperatureConverter"; 
function App() { 
return ( 
<div> 
<TemperatureConverter celsius={23} /> 
<TemperatureConverter fahrenheit={73} /> 
</div> 
); 
} 
export default App;
