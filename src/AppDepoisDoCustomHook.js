import './App.css';
import { useGet } from './hooks/useGet';

function App() {
const url = 'https://api.github.com/users/raissamariab/repos'

const { data, isFetching  } = useGet(url)
  //utilizamos o hook customizado que faz o controle da nossa requisição e o nosso código fica bem limpo e dinâmico
  return(
        <ul>
          {isFetching && <p>Carregando...</p> }
          {data?.map((cadaRepo) => {
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
