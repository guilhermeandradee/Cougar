import './App.css'
import './index.css'

import axios from 'axios'

import { useState } from 'react';
/* componentes */
import Header from './components/Header'
import Solutions from './components/Solutions';

const APIurl = 'http://localhost:8080'

function App() {
    const [downloadResponse, setDownloadResponse] = useState(null)

    const [solutions, setSolutions] = useState(null)

    const [inputGetSolution, setInputGetSolution] = useState(null)
    const getSolutionOfProblem = async () => {
        const data = {
            "descricao": inputGetSolution
        }

        try {
            const response = await axios.post(`${APIurl}/get-solution`, data)

            setSolutions(response.data)

            console.log(response)

            setTimeout(() => {
                setRetornarInputOuSolucao('solucao')
            }, 3000)
        } catch (error) {
            console.log(error.message)
        }

    }

    const [retornarInputOuSolucao, setRetornarInputOuSolucao] = useState('input')

  return (
    <>

        <div className='container-fluid bg-warning h-100-vh' >

            <div className=' h-100-vh bg-success row'>

                <section className='col-12 col-sm-3 bg-secondaryy h-100-vh px-3'>
                    <div className="w-100 d-flex align-items-center justify-content-center mt-5">
                        <img src="\images\imagem_2024-03-27_171656305-removebgcopia-preview.png" style={{width: '50%', filter: 'invert(100%)'}} alt="" />
                    </div>

                    <div className='d-flex w-100 mt-5 flex-column font-anybody '>              
                        <div className='w-70 text-light mt-5'>

                            <div className=" d-flex align-items-center mt-4 ps-2">
                                <a href="/" className='m-0 fw-bold text-decoration-none text-light' style={{fontSize: "100%"}}>Links</a>
                            </div>

                            <hr />

                            <div className="border-start border-2 d-flex align-items-center mt-4 ps-2">
                                <a href="/sistema-de-fluxo" className='m-0 fw-bold text-decoration-none text-light' style={{fontSize: "100%"}}>Peruntar ao Cougar</a>
                            </div>

                            <hr />

                            <div className=" d-flex align-items-center mb-4 ps-2">
                                <a className='m-0 fw-bold text-decoration-none text-light' style={{fontSize: "100%"}} href="/base-de-conhecimento">Base de conhecimento</a>
                            </div>

                            <hr className='w-100' />

                            <div className="d-flex align-items-center mt-4 ps-2">
                                <a className='fw-bold m-0 text-decoration-none text-light' style={{fontSize: "100%"}} href="/sobre-o-projeto">Sobre o projeto</a>
                            </div>

                        </div>
                    </div>
                </section>

                <main className='col p-0 bg-primaryy w-100 h-100-vh' >
                    <Header />

                    { retornarInputOuSolucao === 'input' ? (
                        <div className='container-fluid' style={{height: "60%"}}>
                            <div className='row justify-content-around  px-3 h-100 position-relative'>

                                { downloadResponse && (
                                    <p style={{top: '90%', left: '10%', width: '80%'}} className='text-light text-center p-3 bg-success rounded-lg position-absolute' >{downloadResponse}</p>
                                )}

                                <div className='col-md-8 col-sm-10 d-flex align-items-center flex-column mt-5'>
                                    <p className='row text-low text-center mt-3 fs-5'>Digite uma breve descrição abaixo e descubra a melhor solução personalizada para o seu suporte</p>

                                    <div className='row-12 w-100 mt-5'>
                                        <textarea name="resolucao" placeholder="Trocar permissões de acesso de um usuário" className="text-light mt-4 form-control bg-secondaryy border-0 px-3 py-3 pb-5 rounded-lg gray-placeholder" id="" maxLength={300} onChange={(e) => setInputGetSolution(e.target.value)}>

                                        </textarea>
                                    </div>

                                    
                                    <button onClick={() => getSolutionOfProblem()} className="row-12 btn text-light bg-secondaryy rounded-lg w-100 mb-5 mt-4 p-2" >Adicionar</button>


                                    

                                </div>
                
                            </div>
                        </div>
                    ) : (
                        <Solutions solutions={solutions} />
                    ) }
                    
                </main>
                
            </div>
        </div>
    </>
  )
}

export default App
