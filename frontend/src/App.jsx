import './App.css'
import './index.css'
import './Home.css'

import axios from 'axios'

import { useEffect, useState } from 'react';
/* componentes */
import Header from './components/Header'
import Solutions from './components/Solutions';
import Section from './components/Section';

export const APIurl = 'https://cougar.andrededev.com.br'

function App() {
    const [downloadResponse, setDownloadResponse] = useState(null)

    const [solutions, setSolutions] = useState(null)


    useEffect(() => {
        setIsAnimating(true)
        setTimeout(() => {
        
            setIsAnimating(false)
        }, 300)
    }, [])  

    const [isAnimating, setIsAnimating] = useState(true);
    const transitionPage = () => {
        setIsAnimating(true)
        setTimeout(() => {
            setIsAnimating(false)
        }, 1500)
    }

    const [inputGetSolution, setInputGetSolution] = useState(null)
    const getSolutionOfProblem = async () => {
        const data = {
            "descricao": inputGetSolution
        }

        try {
            const response = await axios.post(`${APIurl}/get-solution`, data)
            setIsAnimating(true)

            setSolutions(response.data)

            console.log(response)

            setTimeout(() => {
                setRetornarInputOuSolucao('solucao')
                setIsAnimating(false)
            }, 1000)
        } catch (error) {
            console.log(error.message)
        }

    }

    const [retornarInputOuSolucao, setRetornarInputOuSolucao] = useState('input')

    const backToInput = () => {
        setRetornarInputOuSolucao('input')
    }

  return (
    <>

        <div className='container-fluid bg-warning h-100-vh' >

            <div className=' h-100-vh bg-primaryy row'>

                <Section presentTopic={1} />

                <main className={`
                  col p-0 bg-primaryy w-100 h-100-vh`} >
                    <Header />

                    { retornarInputOuSolucao === 'input' ? (
                        <div className={`page ${isAnimating ? 'page-hidden' : ''}   container-fluid`} style={{height: "60%"}}>
                            <div className='row justify-content-around  px-3 h-100 position-relative'>

                                { downloadResponse && (
                                    <p style={{top: '90%', left: '10%', width: '80%'}} className='text-light text-center p-3 bg-success rounded-lg position-absolute' >{downloadResponse}</p>
                                )}

                                <div className='col-md-8 col-sm-10 d-flex align-items-center flex-column mt-5'>
                                    <p className='row text-low text-center mt-3 fs-5' style={{fontFamily: 'anybody', fontWeight: 'bold'}} >Como posso ajudá-lo?</p>

                                    <div className='row-12 w-100 mt-5'>
                                        <textarea name="resolucao" placeholder="Trocar permissões de acesso de um usuário" className="text-light mt-4 form-control bg-secondaryy border-0 px-3 py-3 pb-5 rounded-lg gray-placeholder" id="" maxLength={300} onChange={(e) => setInputGetSolution(e.target.value)}>

                                        </textarea>
                                    </div>

                                    
                                    <button onClick={() => getSolutionOfProblem()} className="row-12 btn text-light bg-secondaryy rounded-lg w-100 mb-5 mt-4 p-2" >Buscar solução</button>


                                    

                                </div>
                
                            </div>
                        </div>
                    ) : (
                        <Solutions transitionPage={transitionPage} backToInput={backToInput} solutions={solutions} />
                    ) }
                    
                </main>
                
            </div>
        </div>
    </>
  )
}


export default App
