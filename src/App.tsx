import { useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { levels, calculateImc } from './helpers/imc';
import { GridItem } from './components/GridItem';

const App = () => {

  //valor e estado do input 
  const [heightField, setHeighField] = useState<number>(0);
  const [weighttField, setweighttFieldField] = useState<number>(0);

  const handleChangeButton = () => {
    if (heightField && weighttField) {

    } else {
      alert('Preencha todos os campos para realizar o cálculo!');
    }
  }

  return (
    <div className="">
      <header className='max-w-4xl my-10 mx-auto flex flex-row items-center'>
        <div>
          <div className='p-2 w-20 flex align-center  justify-center text-4xl font-bold bg-pink-500 text-white'>IMC</div>
          
        </div>
        <div className='ml-2 text-white text-sm'>Criado por Camilo de Assis. Créditos para B7Web</div>
      </header>
      <div className='max-w-4xl flex m-auto '>
        <div className='flex-1 mr-10 ' >

          <h1 className='font-bold text-4xl margin-0 text-white	mb-3'>Calcule o seu IMC.</h1>

          <p
            className='text-base text-white mb-10'>O IMC (Índice de Massa Corporal) é um padrão internacional de cálculo da obesidade de um indivíduo adotado pela OMS (Organização Mundial da Saúde).</p>

          <Input
            placeholder="Digite sua altura. Ex: 1.5 (em métros)"
            field={heightField}
            setField={setHeighField} />

          <Input
            placeholder="Digite seu peso. Ex: 75.5 (em kilos)"
            field={weighttField}
            setField={setweighttFieldField} />

          <button
            className='bg-pink-500 text-white rounded-xl py-4 font-bold text-base w-full cursor-pointer mt-10 hover:opacity-80 transition-all ease delay-100'
            onClick={handleChangeButton}
          >Calcular</button>

        </div>
        <div className='flex flex-1 ml-10 '>
          <div className='flex-1 grid grid-cols-2 gap-5'>
            {levels.map((item, key) => (
              <GridItem key={key} item={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
