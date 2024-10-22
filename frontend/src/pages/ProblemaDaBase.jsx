import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { APIurl } from "../App"
import Section from "../components/Section"
import Header from "../components/Header"
import { FaRegEdit } from "react-icons/fa";
import { HiDocumentRemove } from "react-icons/hi";



const ProblemaDaBase = () => {

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
        setIsLoading(false)
    }

    useEffect(() => {
        getData()

    }, [])

    return(
        <>
            <div className='container-fluid bg-warning h-100-vh' >
                <div className=' h-100-vh bg-primaryy row'>
                    <Section />
                    <main className="col p-0 bg-primaryy w-100 h-100-vh">
                        <Header />

                        <div className='mt-5 bg-secondaryy text-light container w-80 justify-content-center d-flex flex-column p-4 rounded-lg' >
                            {/* <div className="d-flex flex-column align-items-center w-80 bg-success">
                                
                            </div> */}
                            <div className="row d-flex justify-content-between align-items-center">
                                <h2 className="col fs-4 cursor-pointer">{data && data.categoria}</h2>

                                <div className="col col-sm-5 d-flex  align-items-center justify-content-end ">
                                    <FaRegEdit  />
                                    <HiDocumentRemove className="mx-4" />
                                </div>
                                
                            </div>
                            <hr />

                            <p className="ms-2 mb-3">{data && data.descricao}</p>

                            <p className="ms-2 mb-3">{data && data.resolucao}</p>

                                    {/* <p className="ms-2 mb-3">{problem.resolucao}</p> */}
                        </div>
                    </main>
                </div>
            </div>
            
        </>
    )
}

export default ProblemaDaBase