import React from "react";
import '../Home.css'
import Header from "../components/Header";
import Section from "../components/Section";

const SobreOProjeto = () => {

    const goToLinkedin = (url) => {
        window.location.href = url;
    }

    return(
        <>
            <div className='container-fluid bg-warning h-100-vh' >

                <div className=' h-100-vh bg-success row'>

                    <Section presentTopic={3} />

                    <main className='col p-0 bg-primaryy w-100 h-100-vh' >
                        <Header />

                        {/* <div  className='container-fluid px-sm-5 px-3' style={{marginTop: "6rem"}}>
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
                        </div> */}

                        <div className="mt-5 px-5 w-100 d-flex flex-column align-items-center">
                            <div className="bg-secondaryy rounded-lg w-80 p-5">
                                <h1 className="text-light fs-2">Tecnologias utilizadas</h1>
                                <hr className="text-light" />
                                <p className="text-light m-0">Frontend: ReactJS, Bootstrap<br /> <br />
                                Backend: NodeJS, Express, Algoritmo TD-IDF, IAOpenAI, 
                                <br /> <br />
                                Banco de dadso: MongoDB
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