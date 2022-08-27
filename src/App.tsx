import { useState } from 'react';
import './App.css';
import leftArrowImage from './assets/images/leftarrow.png';
import { Input } from './components/Input';
import { levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';

const App = () => {

  //valor e estado do input 
  const [heightField, setHeighField] = useState<number>(0);
  const [weighttField, setWeighttField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleChangeButton = () => {
    if (heightField && weighttField) {
      setToShow(calculateImc(heightField,weighttField));

    } else {
      alert('Preencha todos os campos para realizar o cálculo!');
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeighField(0);
    setWeighttField(0)
  }

  return (
    <div className="">
      <header className='max-w-4xl my-10 mx-auto flex flex-row items-center sm:px-5 desktop:px-0 '>
        <div>
          <div className='p-2 w-20 flex align-center  justify-center text-4xl font-bold bg-pink-500 text-white'>IMC</div>

        </div>
        <div className='ml-2 text-white text-sm'>Criado por Camilo de Assis.</div>
      </header>
      <div className='max-w-4xl flex m-auto sm:px-5 sm:flex-col desktop:px-0 desktop:flex-row'>
        <div className='flex-1 sm:mr-0 desktop:mr-10 ' >

          <h1 className='font-bold text-4xl margin-0 text-white	mb-3'>Calcule o seu IMC.</h1>

          <p
            className='text-base text-white mb-10'>O IMC (Índice de Massa Corporal) é um padrão internacional de cálculo da obesidade de um indivíduo adotado pela OMS (Organização Mundial da Saúde).</p>

          <Input
            toShow={toShow}
            placeholder="Digite sua altura. Ex: 1.5 (em métros)"
            field={heightField}
            setField={setHeighField} />

          <Input
            toShow={toShow}
            placeholder="Digite seu peso. Ex: 75.5 (em kilos)"
            field={weighttField}
            setField={setWeighttField} />

          <button
            disabled={toShow ? true : false}
            className='bg-pink-500 text-white rounded-xl py-4 font-bold text-xl w-full cursor-pointer mt-10 hover:opacity-25 transition-all ease delay-100 disabled:opacity-25'
            onClick={handleChangeButton}
          >Calcular</button>

        </div>
        <div className='flex flex-1 sm:ml-0 sm:mt-12 desktop:ml-10 '>
          {!toShow &&
          <div className='flex-1 grid grid-cols-2 gap-5'>
            {levels.map((item, key) => (
              <GridItem key={key} item={item} />
            ))}
          </div>
          }
          {toShow &&
            <div className='flex-1 flex'>
              <div onClick={handleBackButton} className='absolute bg-pink-500 w-16 h-16 rounded-full flex justify-center items-center cursor-pointer sm:ml-0 m:mr-0  sm:rounded desktop:-ml-8 desktop:mt-40 hover:opacity-80 transition-all ease delay-100 '>
                <img src={leftArrowImage} alt="" width={26} />
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
