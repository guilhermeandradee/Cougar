import React from "react";

import Header from "../components/Header";

const SobreOProjeto = () => {

    const goToLinkedin = (url) => {
        window.location.href = url;
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

                                <div className="d-flex align-items-center mt-4 ps-2">
                                    <a href="/" className='m-0 fw-bold text-decoration-none text-light' style={{fontSize: "100%"}}>Links</a>
                                </div>

                                <hr />

                                <div className="d-flex align-items-center mb-4 ps-2">
                                    <a href="/sistema-de-fluxo" className='m-0 fw-bold text-decoration-none text-light' style={{fontSize: "100%"}}>Sistema de fluxo</a>
                                </div>

                                <hr />

                                <div className="d-flex align-items-center mb-4 ps-2">
                                    <a className='m-0 fw-bold text-decoration-none text-light' style={{fontSize: "100%"}} href="/base-de-conhecimento">Base de conhecimento</a>
                                </div>

                                <hr className='w-100' />

                                <div className="border-start border-2 ps-2 d-flex align-items-center mt-4">
                                    <a className='fw-bold m-0 text-decoration-none text-light' style={{fontSize: "100%"}} href="/sobre-o-projeto">Sobre o projeto</a>
                                </div>

                            </div>
                        </div>
                    </section>

                    <main className='col p-0 bg-primaryy w-100 h-100-vh' >
                        <Header />

                        <div  className='container-fluid px-sm-5 px-3' style={{marginTop: "6rem"}}>
                            <div className="row align-items-center justify-content-center mt-5 px-sm-5">
                                <div 
                                onClick={() => goToLinkedin('https://www.linkedin.com/in/guilherme-andrade-600842288/')}
                                className=" col-8 mb-5 mt-5 mb-sm-5 col-sm-4 text-light">
                                        <div className="cursor-pointer rounded-lg p-3 bg-secondaryy position-relative">
                                            <h2 className="fs-5 mt-4">Guilherme</h2>
                                            <hr />
                                            <p>Construção do frontend do projeto.</p>

                                            <div className="position-absolute fotodocard-gui" style={{backgroundColor: "#fff",borderRadius:"50%", width: "70px", height: "70px", top: -40, left: "50%", transform: "translateX(-50%)"}}></div>
                                        </div>
                                </div>
                                

                                <div className=" col-8 mb-5 mb-sm-5 col-sm-4  text-light mt-5">
                                        <div className="rounded-lg p-3 bg-secondaryy position-relative">
                                            <h2 className="fs-5 mt-4">João</h2>
                                            <hr />
                                            <p>Planejamento e criação video pitch.</p>

                                            <div className="position-absolute fotodocard-joao" style={{backgroundColor: "#fff",borderRadius:"50%", width: "70px", height: "70px", top: -40, left: "50%", transform: "translateX(-50%)"}}></div>
                                        </div>
                                </div>

                                <div className=" col-8 mb-5 mb-sm-5 col-sm-4  text-light mt-5">
                                        <div className="rounded-lg p-3 bg-secondaryy position-relative">
                                            <h2 className="fs-5 mt-4">Pedro</h2>
                                            <hr />
                                            <p>Criação do fluxo de escolhas do usuário.</p>

                                            <div className="position-absolute fotodocard-junqueira" style={{backgroundColor: "#fff",borderRadius:"50%", width: "70px", height: "70px", top: -40, left: "50%", transform: "translateX(-50%)"}}></div>
                                        </div>
                                        
                                </div>

                                <div className=" col-8 mb-5 mb-sm-5 col-sm-4  text-light mt-5">
                                        <div className="rounded-lg p-3 bg-secondaryy position-relative">
                                            <h2 className="fs-5 mt-4">Rafael</h2>
                                            <hr />
                                            <p>Criação dos textos apresentados no site.</p>

                                            <div className="position-absolute fotodocard-rafael" style={{backgroundColor: "#fff",borderRadius:"50%", width: "70px", height: "70px", top: -40, left: "50%", transform: "translateX(-50%)"}}></div>
                                        </div>
                                </div>

                                <div className=" col-8 mb-5 mb-sm-5 col-sm-4  text-light mt-5">
                                    <div className="rounded-lg p-3 bg-secondaryy position-relative">
                                        <h2 className="fs-5 mt-4">Gustavo</h2>
                                        <hr />
                                        <p>Criação dos textos apresentados no site.</p>

                                        <div className="position-absolute fotodocard-gustavo" style={{backgroundColor: "#fff",borderRadius:"50%", width: "70px", height: "70px", top: -40, left: "50%", transform: "translateX(-50%)"}}></div>
                                        </div>
                                </div>

                            </div>
                        </div>

                        <div className="mt-5 px-5 w-100 d-flex flex-column align-items-center">
                            <div className="bg-secondaryy rounded-lg w-80 p-5">
                                <h1 className="text-light fs-2">Tecnologias utilizadas</h1>
                                <hr className="text-light" />
                                <p className="text-light m-0">O site da Cougar foi construído utilizando html, css (para construção da página), Javacript (Sistema de fluxo) , bootstrap (estilo) e React (renderização de componentes, popups entre outros). <br /> <br />
                                O website contém 5 páginas sendo 4 acessíveis através do menu, e uma através do botão "+" na base de conhecimento.
                                </p>
                            </div>
                        </div>
                    
                    </main>

                </div>
            </div>
        </>
    )
}

export default SobreOProjeto