import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { APIurl } from "../App"
import Section from "../components/Section"
import Header from "../components/Header"
import { FaRegEdit } from "react-icons/fa";
import { HiDocumentRemove } from "react-icons/hi";



const ProblemaDaBase = () => {

    const navigate = useNavigate()

    const [isAnimating, setIsAnimating] = useState(true);
    const transitionPage = () => {
        setIsAnimating(true)
        setTimeout(() => {
            setIsAnimating(false)
        }, 1500)
    }

    const { id } = useParams()

    const [data, setData] = useState(null)

    async function getData(){
        try {
            const response = await axios.get(`${APIurl}/problem/${id}`)

            setData(response.data.data)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getData()
        setTimeout(() => setIsAnimating(false), 500)
    }, [])

    const handleDeleteProblem = async (id) => {
        try {
            const response = await axios.delete(`${APIurl}/problem/${id}/delete`)

            navigate('/base-de-conhecimento')
        } catch (error) {
            console.log(error)
        }
    }
 
    return(
        <>
            <div className={`container-fluid bg-warning h-100-vh`} >
                <div className=' h-100-vh bg-primaryy row'>
                    <Section />
                    <main className="col p-0 bg-primaryy w-100 h-100-vh align-items-center  d-flex flex-column">
                        <Header />

                        <div className={`page ${isAnimating ? 'page-hidden' : ''}   mt-5 bg-secondaryy text-light container w-80 justify-content-center d-flex flex-column p-4 rounded-lg`} >
                            {/* <div className="d-flex flex-column align-items-center w-80 bg-success">
                                
                            </div> */}
                            <div className="row d-flex justify-content-between align-items-center">
                                <h2 className="col fs-4">{data && data.categoria}</h2>

                                <div className="col col-sm-5 d-flex cursor-pointer align-items-center justify-content-end ">
                                    {/* <FaRegEdit  /> */}
                                    <HiDocumentRemove onClick={() => handleDeleteProblem(data.id)} className="mx-4" />
                                </div>
                                
                            </div>
                            <hr />

                            <p className="ms-2 mb-3">{data && data.descricao}</p>

                            <p className="ms-2 mb-3">{data && data.resolucao}</p>

                        </div>

                        <button onClick={() => navigate('/base-de-conhecimento')} className={`page ${isAnimating ? 'page-hidden' : ''}   w-80 mt-5 mb-4 option-back-btn bg-secondaryy rounded text-light p-3 border-0`}>Voltar</button>
                    </main>
                </div>
            </div>
            
        </>
    )
}

export default ProblemaDaBase