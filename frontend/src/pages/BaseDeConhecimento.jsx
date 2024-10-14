import React, { useState } from "react";
import Header from "../components/Header";
import '../Home.css'

import { CiSearch } from "react-icons/ci";
import { MdAddCircleOutline } from "react-icons/md";
import { IoRemoveCircleOutline } from "react-icons/io5";




const BaseDeConhecimento = () => {

    const [returnInputMessage, setReturnInputMessage] = useState(null)


    const [searchTerm, setSearchTerm] = useState('');


    const [knowledgeBase, setKnowledgeBase] = useState([
        {
            categoria: 'SAP',
            tipo: 'Inativação de conta',
            descricao: 'Após o desligamento de um usuário temporariamente, o mesmo deve ter sua conta inativa até o retorno',
            resolucao: '1. Obtenha o nome de usuário \n 2. Entre no sistema na aba inativação de contas \n 3.0 Desative a conta do usuário.'
        } ,
        {
            categoria: 'Gestão perfil',
            tipo: 'Criação de perfil',
            descricao: 'Após a entrada de um novo colaborador, o mesmo deve ter uma conta própria com ermissões específicas.',
            resolucao: '1. Entre na aba "Criação de Conta \n 2. Defina um nome de usuário \n 3. Defina uma senha \n 4. Defina as permissões"'
        }
    ])

    const filteredKnowledgeBase = knowledgeBase.filter(problem =>
        searchTerm === '' || problem.categoria.toLowerCase().startsWith(searchTerm.toLowerCase())
      );

    const [newProblem, setNewProblem] = useState({
        categoria: '',
        tipo: '',
        descricao: '',
        resolucao: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProblem(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    console.log(newProblem)

    const addProblem = () => {
        setKnowledgeBase(prevState => [...prevState, newProblem])
        setReturnInputMessage('Problema criado!')

        setTimeout(() => {
            setReturnInputMessage(null)
        }, 3000)
    }

    const [showInputType, setShowInputType] = useState('initial')

    const showInputInitial = () => {
        return(
            <div className='container-fluid px-sm-5 px-3'>
                <div className="d-flex justify-content-center mt-5 px-sm-5">
                    <div className="position-relative " style={{width: "80%"}}>
                        <input 
                        type="text" 
                        className="input-add-solucao text-light mt-4 form-control bg-secondaryy border-0 px-5 py-3 rounded-lg" 
                        style={{width: "100%"}}
                        placeholder="SAP" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}/>

                        <CiSearch className="fs-4 text-light position-absolute" style={{top:40, left: 15, }} />

                        <MdAddCircleOutline onClick={changeShowInput} className="fs-4 text-light position-absolute cursor-pointer" style={{top:10, left: 'calc(100% - 20px)', }}  />

                    </div>
                </div>

                <div className="d-flex justify-content-center mt-5 px-sm-5">
                    <div className="bg-secondaryy rounded-lg py-3 py-sm-5 px-sm-5 px-3" style={{width: "80%"}}>
                        {/* <div className="text-light mb-5">
                            <h2 className="fs-4">Financeiro</h2>
                            <hr />

                            <p className="ms-2 mb-3">Lorem ipsum dolor sit a</p>

                            <p className="ms-2 mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, dolore.</p>

                            <p className="ms-2 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dignissimos eveniet nemo voluptate consectetur doloribus.</p>
                        </div> */}

                        {
                            filteredKnowledgeBase.map((problem, index) => (
                                <div className={`text-light ${index !== knowledgeBase.length - 1 ? 'mb-5' : ''}`}>
                                    <h2 className="fs-4">{problem.categoria}</h2>
                                    <hr />

                                    <p className="ms-2 mb-3">{problem.tipo}</p>

                                    <p className="ms-2 mb-3">{problem.descricao}</p>

                                    <p className="ms-2 mb-3">{problem.resolucao}</p>
                                </div>
                            ))
                        }

                        
                    </div> 
                </div>

            </div>
        )
    }

    const showAddInput = () => {
        return (
            <div className='container-fluid px-sm-5 px-3'>
                <div className="d-flex flex-column align-items-center justify-content-center mt-5 px-sm-5">
                    { returnInputMessage ? (
                        <div className="bg-success rounded-lg d-flex align-items-center justify-content-center p-3" style={{width: "80%"}}>
                        <p className="m-0">Problema criado com sucesso</p>
                        </div>
                    ) : null }

                    <div className="position-relative " style={{width: "80%"}}>
                        <input name="categoria" placeholder="Categoria" type="text" className="text-light mt-4 form-control bg-secondaryy border-0 px-3 py-3 rounded-lg gray-placeholder" style={{width: "100%",}} onChange={handleChange} />

                        <IoRemoveCircleOutline onClick={changeShowInput} className="fs-4 text-light position-absolute cursor-pointer" style={{top:10, left: 'calc(100% - 20px)', }}  />

                        <input name="tipo" placeholder="Tipo" type="text" className="text-light mt-4 form-control bg-secondaryy border-0 px-3 py-3 rounded-lg gray-placeholder" style={{width: "100%"}} onChange={handleChange} />

                        <input name="descricao" placeholder="Descrição" type="text" className="text-light mt-4 form-control bg-secondaryy border-0 px-3 py-3 rounded-lg gray-placeholder" style={{width: "100%"}} onChange={handleChange} />


                        <textarea name="resolucao" placeholder="Resolução" className="text-light mt-4 form-control bg-secondaryy border-0 px-3 py-3 pb-5 rounded-lg gray-placeholder" id="" maxlength="300" onChange={handleChange}>

                        </textarea>

                        <button onClick={addProblem} className="btn text-light bg-secondaryy rounded-lg w-100 mb-5 mt-4 p-2" >Adicionar</button>
                    </div>

                </div>

            </div>
        )
    }

    const changeShowInput = () => {
        showInputType === 'initial' && setShowInputType('add-input')
        showInputType === 'add-input' && setShowInputType('initial')
    }

    return(
        <>
            <div className='container-fluid bg-warning h-100-vh' >

                <div className=' h-100-vh bg-success row'>

                    <section className='col-12 col-sm-3 bg-secondaryy h-100-vh px-3'>

                        <div className="w-100 d-flex align-items-center justify-content-center mt-5">
                            <img src="public\images\imagem_2024-03-27_171656305-removebgcopia-preview.png" style={{width: '50%', filter: 'invert(100%)'}} alt="" />
                        </div>

                        <div className='d-flex w-100 mt-5 flex-column font-anybody'>              
                            <div className='w-70 text-light mt-5'>
                                
                            <div className=" d-flex align-items-center mt-4 ps-2">
                                <a href="/" className='m-0 fw-bold text-decoration-none text-light' style={{fontSize: "100%"}}>Links</a>
                            </div>

                            <hr />

                                <div className="d-flex align-items-center mt-4 ps-2">
                                    <a href="/sistema-de-fluxo" className='m-0 fw-bold text-decoration-none text-light' style={{fontSize: "100%"}}>Sistema de fluxo</a>
                                </div>

                                <hr />

                                <div className="border-start border-2 d-flex align-items-center mt-4 ps-2">
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

                        { showInputType === 'initial' ? showInputInitial() : showInputType && showAddInput() }
                    
                    </main>
    
                </div>
            </div>
        </>
    )
}

export default BaseDeConhecimento