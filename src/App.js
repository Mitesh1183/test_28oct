import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      sss
      <iframe
      
        src="http://localhost:3000/d-solo/UDdpyzz7z/prometheus-2-0-stats?orgId=2&from=1635408203306&to=1635411803306&panelId=32"
        width="450"
        height="200"
        frameBorder="0"
      ></iframe>
      <iframe 
        src="https://mitesh1.grafana.net/d-solo/XU8HAD5Gk/usage-insights-cloud?orgId=1&refresh=30s&from=1634790419251&to=1635395219251&panelId=18"
        width="450"
        height="200"
        frameBorder="0"
      ></iframe>
       <iframe X-Frame-Options="http://localhost:3000/" src="http://localhost:3000/d-solo/nOyWtEO7z/test?orgId=1&from=1635392418326&to=1635414018326&panelId=2&output=embed"
              width="450" height="200" frameBorder="0"></iframe>
       <iframe X-Frame-Options=" http://mitesh1.grafana.net/"
          src="https://mitesh1.grafana.net/d-solo/XU8HAD5Gk/usage-insights-cloud?orgId=1&refresh=30s&from=1634790419251&to=1635395219251&panelId=18&output=embed"
          width="450" height="200" frameBorder="0"></iframe>
      {/*<iframe
      {/*    src="http://localhost:3000/d-solo/UDdpyzz7z/prometheus-2-0-stats?orgId=2&from=1635391558066&to=1635395158066&panelId=32"*/}
      {/*    width="450" height="200" frameBorder="0"></iframe>*/}
      <iframe  
        src="http://localhost:3000/embed/d-solo/rpfmFFz7z/prometheus-stats?orgId=1&from=1635224530070&to=1635224830070&panelId=2&output=embed"
        width="450" height="200" frameBorder="0" ></iframe> 
    </div>
  );
}

export default App;
