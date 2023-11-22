import axios from "axios";
import { useState, useEffect } from "react";


//Aqui estamos criando uma hook customizado, uma função genérica utilizando(nesse caso) mais de um hook do react em um só lugar de forma dinâmica na nossa aplicação, para qualquer chamada API
//o método get é bem simples  espera apenas um parâmetro na sua função que é a URL

export function useGet(url) {
    //troco de nome para um nome genérico que aceitaria qualquer dado e qualquer URL
    const [data, setData] = useState([])

    // nessa segunda etapa eu Crio um outro estado para otimizar meu hook fazendo o controle por exemplo de um loading na minha aplicação 
    const [isFetching, setIsFetching] = useState(true)

    //utilizo um use effect para realizar minha chamada logo no início do carregamento da minha aplicação
    useEffect(() => {    
        axios.get(url)
        .then(response => {
            console.log("Setting data value", data)
            setData(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setIsFetching(false)
        })        
    }, [])

   //desistruturando o retorno da chamada eu consigo acessar cada elemento, retornando mais coisas de forma independente
    return { data, isFetching }
}