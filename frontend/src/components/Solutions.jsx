import { useState } from "react"

const Solutions = ({ solutions, backToInput, transitionPage }) => {

    console.log(solutions.data)
    const top3Solutions = solutions.data

    const handleClickButton = () => {
        transitionPage()
        setTimeout(() => {
            backToInput()
        }, 1500)
    }

    return (
        <>
            <div className='container justify-content-center d-flex' style={{height: "60%"}}>

                <div className="d-flex flex-column align-items-center mt-5 w-80">
                        <h2 className="fs-4 text-light mt-3">Soluções retornadas</h2>

                        <div className="row mt-5 w-100">
                            {
                                top3Solutions !== null && (top3Solutions.map(solution => (
                                    <div className="mt-4 col-12 justify-content-center d-flex bg-secondaryy rounded text-light p-3">
                                        <p className="w-100 mb-0 " >{solution.problema.resolucao}</p>
                                    </div>
                                )))
                            }

                            {/* <div className="mt-4 col-12 justify-content-center d-flex bg-secondaryy rounded text-light p-3" >Solução 2</div>

                            <div className="mt-4 col-12 justify-content-center d-flex bg-secondaryy rounded text-light p-3" >Solução 3</div> */}
                        </div>

                        <button onClick={handleClickButton} className="mt-5 mb-4 option-back-btn bg-secondaryy rounded text-light p-3 border-0 w-100">Voltar</button>
                </div>
            </div>
        </>
    )
}

export default Solutions