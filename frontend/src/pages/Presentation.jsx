import React from "react";

import Header from "../components/Header";

const Presentation = () => {
    return(
        <>
            <div className="container-fluid w-100 bg-primaryy h-100-vh">
                <div className=' h-100-vh row'>
                    <section className='col-12 col-sm-3 bg-secondaryy h-100-vh px-3'>

                        <div className="w-100 d-flex align-items-center justify-content-center mt-5">
                            <img src="public\images\imagem_2024-03-27_171656305-removebgcopia-preview.png" style={{width: '50%', filter: 'invert(100%)'}} alt="" />
                        </div>

                        <div className='d-flex w-100  flex-column mt-5 font-anybody'>              
                            <div className='w-70 text-light mt-5'>

                                <div className="border-start border-2 d-flex align-items-center mt-4 ps-2">
                                    <a href="/" className='m-0 fw-bold text-decoration-none text-light' style={{fontSize: "100%"}}>Links</a>
                                </div>

                                <hr />

                                <div className="d-flex align-items-center mt-4 ps-2">
                                    <a href="/sistema-de-fluxo" className='m-0 fw-bold text-decoration-none text-light' style={{fontSize: "100%"}}>Sistema de fluxo</a>
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

                        <div className="w-100 d-flex flex-column align-items-center px-5 mt-5">
                            <a target="_blank" href="https://youtu.be/ixKl0eC-Fio?si=xAXFjeC9mKjX_L30" className="w-80 bg-secondaryy rounded-lg flex-column align-items-center mt-5 p-3 cursor-pointer video-p-button text-decoration-none">
                                <p className="text-light m-0 w-100">Link - VP1: https://youtu.be/ixKl0eC-Fio?si=xAXFjeC9mKjX_L30</p>
                            </a>
                            <a target="_blank" href="https://youtu.be/_vs0axgEFoU" className="w-80 bg-secondaryy rounded-lg flex-column align-items-center mt-5 p-3 cursor-pointer video-p-button text-decoration-none">
                                <p className="text-light m-0">Link - VP2: https://youtu.be/_vs0axgEFoU</p>
                            </a>
                        </div>
                    </main>

                </div>
            </div>
        </>
    )
}

export default Presentation