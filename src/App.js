import { useEffect, useState } from 'react';
//import axios from 'axios';
//Instalar o axios com a turma 
import './App.css';


function App() {
  //use state hook reponsável  por guardar um estado internamente na nossa aplicação e que atualização esse preenchimento de dado
  const [repos, setRepos] = useState([])
  const baseUrl = 'https://api.github.com/'

  //primeira etapa apenas chamada nativa, sem o Axios
  useEffect(() => {
  
  }, [])

    //Segunda etapa com o Axios
    useEffect(() => {
     
    }, [])

  return (
        <ul>
          {repos.map((cadaRepo) => {
            return (
              <li>
                {cadaRepo?.name}
              </li>)
            })
          }
        </ul>
  );
}

export default App;
