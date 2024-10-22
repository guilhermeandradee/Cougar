const Section = () => {
    return(
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
    )
}

export default Section