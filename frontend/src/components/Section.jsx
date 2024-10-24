import { useState } from "react"

const Section = ({ presentTopic }) => {

    // const [presentTopic, setPresentTopic] = useState(1)

    const returnBorder = (num) => {
        return num === presentTopic ? 'border-start border-2' : ''
    }


    return(
        <section className='col-12 col-sm-3 bg-secondaryy h-100-vh px-3'>
                <div className="section-class">
                    <div className="w-100 d-flex align-items-center justify-content-center mt-5">
                        <img src="\images\360_F_442860899_3HkhrB2RIfx0bOtPH1aseqk50yhm1uYj-removebg-preview(2).png" style={{width: '50%',}} alt="" />
                    </div>

                    <div className='d-flex w-100 mt-3 flex-column font-anybody '>              
                        <div className='w-70 text-light mt-5'>

                            <div className={`d-flex align-items-center mt-4 ps-2 ${returnBorder(1)}`}>
                                <a href="/sistema-de-fluxo" className='m-0 fw-bold text-decoration-none text-light' style={{fontSize: "100%"}}>Perguntar ao Cougar</a>
                            </div>

                            <hr />

                            <div className={` d-flex align-items-center mb-3 ps-2 ${returnBorder(2)}`}>
                                <a className='m-0 fw-bold text-decoration-none text-light' style={{fontSize: "100%"}} href="/base-de-conhecimento">Base de conhecimento</a>
                            </div>

                            <hr className='w-100' />

                            <div className={`d-flex align-items-center mt-4 ps-2 ${returnBorder(3)}`}>
                                <a className='fw-bold m-0 text-decoration-none text-light' style={{fontSize: "100%"}} href="/sobre-o-projeto">Sobre</a>
                            </div>

                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Section