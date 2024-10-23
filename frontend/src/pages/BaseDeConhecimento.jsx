import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import '../Home.css'

import { CiSearch } from "react-icons/ci";
import { MdAddCircleOutline } from "react-icons/md";
import { IoRemoveCircleOutline } from "react-icons/io5";
import Section from "../components/Section";
import axios from "axios";
import { APIurl } from "../App";
import { Link, useNavigate } from "react-router-dom";

import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";

const BaseDeConhecimento = () => {

    const navigate = useNavigate()
    const goToPage = (id) => {
        transitionPage()
        setTimeout(() => navigate(`/base-de-conhecimento/problema/${id}`), 500)
    }

    const [isAnimating, setIsAnimating] = useState(true);
    const transitionPage = () => {
        setIsAnimating(true)
        setTimeout(() => {
            setIsAnimating(false)
        }, 1500)
    }

    const [dataProblems, setDataProblems] = useState(null)

    const [returnInputMessage, setReturnInputMessage] = useState(null)


    const [searchTerm, setSearchTerm] = useState('');

    const [removeProblem, setRemoveProblem] = useState(null)


    const [data, setNewProblem] = useState({
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

    const removeProblemRequest = (index) => {
        console.log('removed', index)
    }

    const [page, setPage] = useState(1)

    const searchSomeProblems = async () => {
        try {
            const response = await axios.get(`${APIurl}/problems-quantity?page=${page}&limit=3`)

            setDataProblems(response.data.problems)
            console.log(response.data)

        } catch (error) {
            console.log(error)
        }
    }
    
    const changePage = (prevOrNext) => {
        if(prevOrNext === 'prev'){
            page > 1 && setPage(page - 1)
        } else if (prevOrNext === 'next'){
            setPage(page + 1)
        }
    }

    useEffect(() => {
        setIsAnimating(true)
        setTimeout(() => searchSomeProblems(), 300);
        setTimeout(() => setIsAnimating(false), 500);
    }, [page])

    const addProblem = async () => {
        try {
            const response = await axios.post(`${APIurl}/save-problem`, data)
            console.log(response)

            setReturnInputMessage('Problema criado!')

        } catch (error) {
            console.log('erro', error.message)
            setReturnInputMessage(error.message)
        }


        setTimeout(() => {
            setReturnInputMessage(null)
        }, 3000)
    }

    const [showInputType, setShowInputType] = useState('initial')

    const showInputInitial = () => {
        return(
            
            <div className={`page ${isAnimating ? 'page-hidden' : ''} container-fluid px-sm-5 px-3`}>
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

                <div className="d-flex justify-content-center flex-column align-items-center mt-5 px-sm-5">
                    <div className="bg-secondaryy rounded-lg py-3 py-sm-5 px-sm-5 px-3" style={{width: "80%"}}>

                        {
                            dataProblems ? dataProblems.map((problem, index) => (
                                <div 
                                key={problem.id} 
                                onClick={() => goToPage(problem.id)}
                                className={`cursor-pointer text-light ${index !== dataProblems.length - 1 ? 'mb-5' : ''}`}>
                                    <div className="d-flex justify-content-between ">
                                        <h2 className="fs-4 cursor-pointer">{problem.categoria}</h2>

                                        {removeProblem === index && (<IoRemoveCircleOutline className="fs-4 text-light cursor-pointer" onClick={() => removeProblemRequest('Insira o ID ou identificador para excluir')}/>)}
                                            {/* Adicionar propriedades de objeto */}
                                    </div>
                                    <hr />

                                    <p className="ms-2 mb-3">{problem.tipo}</p>

                                    <p className="ms-2 mb-3">{problem.descricao}</p>

                                    {/* <p className="ms-2 mb-3">{problem.resolucao}</p> */}

                                    
                                </div>

                            )) : <p className="text-light p-3 text-center">Carregando...</p>
                        }

                    </div> 

                    <div className=" d-flex justify-content-around  text-light  rounded w-80 mb-5 mt-4 p-2" >
                        <div onClick={() => changePage('prev')} className="col-3 bg-secondaryy option-back-btn btn text-light"><IoMdArrowRoundBack/></div>
                        <div onClick={() => changePage('next')} className="col-3 bg-secondaryy option-back-btn btn text-light"><IoMdArrowRoundForward/></div>
                    </div>
                </div>

            </div>
        )
    }

    const showAddInput = () => {
        return (
            <div className='container-fluid px-sm-5 px-3'>
                <div className="d-flex flex-column align-items-center justify-content-center mt-5 px-sm-5">
                    { returnInputMessage === 'Problema criado!' ? (
                        <div className="bg-success rounded-lg d-flex align-items-center justify-content-center p-3" style={{width: "80%"}}>
                        <p className="m-0">Problema criado com sucesso!</p>
                        </div>
                    ) : returnInputMessage && returnInputMessage !== 'Problema criado!' ? (
                        <div className="bg-danger text-light rounded-lg d-flex align-items-center justify-content-center p-3" style={{width: "80%"}}>
                        <p className="m-0">Erro no cadastro do produto</p>
                        </div>
                    ) : null }

                    <div className="position-relative " style={{width: "80%"}}>
                        <input name="categoria" placeholder="Categoria" type="text" className="text-light mt-4 form-control bg-secondaryy border-0 px-3 py-3 rounded-lg gray-placeholder" style={{width: "100%",}} onChange={handleChange} />

                        <IoRemoveCircleOutline onClick={changeShowInput} className="fs-4 text-light position-absolute cursor-pointer" style={{top:10, left: 'calc(100% - 20px)', }}  />


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

                    <Section presentTopic={2} />

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