import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  //use state hook reponsável  por guardar um estado internamente na nossa aplicação e que atualização esse preenchimento de dado
  const [repos, setRepos] = useState([])
  const baseUrl = 'https://api.github.com/'

  //primeira etapa apenas chamada nativa, sem o Axios
  useEffect(() => {
    fetch(`${baseUrl}users/raissamariab/repos`)
      .then(response => response.json())
      .then(data => {
        console.log('',data);
        setRepos(data);
        return data;
    })
    .catch(e => {
      return  console.log(e);
    })
  }, [])

    //Segunda etapa com o Axios
    // useEffect(() => {
    //   axios.get(`${baseUrl}users/raissamariab/repos`)
    //     .then(reponse => {
    //       console.log(reponse.data);
    //       setRepos(reponse.data);
    //   })
    //     .catch(e => {
    //       return  console.log(e);
    //   })
    // }, [])

  return (
        <ul>
          {repos.map((cadaRepo) => {
            return (<li>
              {cadaRepo?.name}
            </li>)
          })
        }
        </ul>
  );
}

export default App;
