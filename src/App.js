import {useState, useEffect} from 'react';
import './App.css';
//import Card from './Components/Card/Card';

function App() {
  let temperatura = 30;
  const [stateTemperatura, setStateTemperatura] = useState(30);
  const [descricao, setDescricao] = useState ('');
  const [cidade, setCidade ] = useState('São Paulo');

  const callAPi= () =>{
    console.log('vai chamar a API temperatura')
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=6abd7c3e3ac46c56ac0947c2c1816606&units=metric`)
      .then((resposta)=>{
        return resposta.json();
      })
        .then ((dadoTemperatura)=> {
          //temperatura = dadoTemperatura.main.weather[0].description;
          //console.log(temperatura);
          setDescricao(dadoTemperatura.weather[0].description);
          setStateTemperatura(dadoTemperatura.main.temp)
        })
          .catch(() =>{
            alert('Cidade não encontrada')
          });
  }

  const dadoEntrada = (evento) =>{
    setCidade(evento.target.value) //consigo pegar o evento das teclas
  }
  return (
    <div className="App">
      <input type='text' onChange={dadoEntrada}></input>
      <button onClick={callAPi}>buscar</button>
      <p>{cidade}</p>
      <p>{temperatura}</p>
      <p>{stateTemperatura}</p>
      <p>{descricao}</p>
    </div>
  );
}

export default App;
