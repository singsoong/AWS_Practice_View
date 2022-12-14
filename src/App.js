import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const list = data.map((item) => <p key={item.id}>{item.name}</p>);
  useEffect(() => {
    axios
      .get("15.164.218.250:3000/select")
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>{list}</h1>
    </div>
  );
}

export default App;
