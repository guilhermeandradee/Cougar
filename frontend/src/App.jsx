import './App.css'
import './index.css'

import { useState } from 'react';
/* componentes */
import Header from './components/Header'

function App() {
    const [downloadResponse, setDownloadResponse] = useState(null)

    const [history, setHistory] = useState([]);
    const handleBack = () => {
        if (history.length > 0) {
            const lastQuestionId = history[history.length - 1];
            setHistory(prevHistory => prevHistory.slice(0, -1)); // Remove o último id do histórico
            setCurrentQuestionId(lastQuestionId);
            setCountQuestions(countQuestions - 1);
        }
    };

    const [currentQuestionId, setCurrentQuestionId] = useState(1);
    
    const questions = {
        1: { 
          text: "Gestão Acessos", 
          options: [
            { text: "Criação de acesso", nextId: 2 }, 
            { text: "Remoção de acesso", nextId: 3 }, 
            { text: "Alteração de acesso", nextId: 4 }, 
            { text: "Atribuição de perfil", nextId: 5 }
          ] 
        },
        6: { 
          text: "Cancelamento de acessos", 
          options: [
            { text: "Inativar conta", nextId: 7 }, 
            { text: "Inativar acesso", nextId: 8 }, 
            { text: "Inativar e transferir licença", nextId: 9 }, 
            { text: "Ativar, inativar e transferir licenças", nextId: 10 }
          ] 
        },
        11: { 
          text: "Gestão Perfil", 
          options: [
            { text: "Criação de perfil", nextId: 12 }, 
            { text: "Troca de perfil", nextId: 13 }, 
            { text: "Manutenção de perfil", nextId: 14 }, 
            { text: "Alteração de perfl", nextId: 15 }
          ] 
        },
        16: { 
          text: "SAP", 
          options: [
            { text: "Criação de conta", nextId: 17 }, 
            { text: "Revogação de acesso terceiro", nextId: 18 }, 
            { text: "Atualização dos dados", nextId: 19 }, 
            { text: "Desbloqueio", nextId: 20 }
          ] 
        }, //Camada final do fluxo (entrega do arquivo)

        // Gestão acessos
        
        2: { 
            text: "Criação de acesso", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'gestaoDeAcessos/KB0010603ITSistemaYCriaçãodeacessos.docx' }, 
            ] 
        },
        3: { 
            text: "Remoção de acessos", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'gestaoDeAcessos/KB0059193SYSTEMAYRemoçãodeAcesso.docx' }, 
            ] 
          },

        4: { 
            text: "Alteração de acesso", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'gestaoDeAcessos/KB0010536SYSTEMAYAlteraçãodeAcessos.docx' }, 
            ] 
          },

        5: { 
            text: "Atribuição de perfil", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'gestaoDeAcessos/KB0059116SYSTEMAYAtribuiçãodePerfil.docx' }, 
            ] 
        },

        // Cancelamento de aceessos 

        7: { 
            text: "Inativar conta", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'cancelamentoDeAcessoEPerfil/KB0012483InativaçãodeAcessodeUsuárionoSYSTEMAY.docx' }, 
            ] 
        },
        8: { 
            text: "Inativar conta", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'cancelamentoDeAcessoEPerfil/KB0053251SYSTEMAYAtivarInativarAcessoetransferirlicenças.docx' }, 
            ] 
          },

        9: { 
            text: "Inativar acesso", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'cancelamentoDeAcessoEPerfil/KB0012483InativaçãodeAcessodeUsuárionoSYSTEMAY.docx' }, 
            ] 
          },

        10: { 
            text: "Transferir licenças", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'cancelamentoDeAcessoEPerfil/KB0053251SYSTEMAYAtivarInativarAcessoetransferirlicenças.docx' }, 
            ] 
        },

        // Gestão Perfil

        12: { 
            text: "Criação de perfil", 
            options: [
              { text: "Baixar documento", nextId: 12, file: '/gestaoPerfil/KB0012187CriaçãodePerfilnoSYSTEMAYVoluntários.docx' }, 
            ] 
        },
        13: { 
            text: "Troca de perfil", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'gestaoPerfil/KB005910TrocadeperfildeUsuárionoSYSTEMAY.docx' }, 
            ] 
          },

        14: { 
            text: "Manutenção de perfil", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'gestaoPerfil/KB0010641ManutençãodePerfilnoSYSTEMAY.docx' }, 
            ] 
          },

        15: { 
            text: "Alteração de perfl", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'gestaoPerfil/KB005910TrocadeperfildeUsuárionoSYSTEMAY.docx' }, 
            ] 
        },

        // SAP

        17: { 
            text: "Criação de conta", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'sap/KB0059210CSSAPCRIARCONTADEUSUÁRIONAZBO104.docx' }, 
            ] 
        },
        18: { 
            text: "Revogação de acesso terceiro", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'sap/KB0010903CSSAPPRORROGACAOEREVOGAÇÃODEACESSODETERCEIRO.docx' }, 
            ] 
        },
        19: { 
            text: "Atualização dos dados", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'sap/KB0054515CSSAPZBO103ATUALIZARDADOSDABU.docx' }, 
            ] 
        },
        20: { 
            text: "Desbloqueio", 
            options: [
              { text: "Baixar documento", nextId: 12, file: 'sap/KB0011219CSSAPPORTALDESBLOQUEIODEUSUARIO.docx' }, 
            ] 
        },
          
    };  

    const initialQuestions = {
        1: { text: "Escolha um tópico", options: [
            { text: "Gestão Acessos", nextId: 1 },
            { text: "Cancelamento Acessos", nextId: 6 },
            { text: "Gestão Perfil", nextId: 11 },
            { text: "SAP", nextId: 16 }
        ]}
    };


    const [countQuestions, setCountQuestions] = useState(0)

    const handleOptionClick = (nextId, file) => {
        if (nextId) {
            setHistory(prevHistory => [...prevHistory, currentQuestionId]);
            setCurrentQuestionId(nextId);
            setCountQuestions(countQuestions + 1);
            console.log(`Opção escolhida com id: ${nextId}`);
            if (file) {
                const link = document.createElement('a');
                link.href = `/${file}`;
                link.setAttribute('download', file.split('/').pop());
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                setDownloadResponse('Download do arquivo iniciado!')
                setTimeout(() => {
                    setDownloadResponse(null)
                }, 3000)

            }
        } else {
            alert('Fim do fluxo.');
        }
    };

    const currentQuestion = countQuestions === 0 ? initialQuestions[currentQuestionId] : questions[currentQuestionId];
  

    const currentQuestionOptions = currentQuestion?.options || [];

      
    console.log(currentQuestion)
    console.log(currentQuestionOptions)

  return (
    <>

        <div className='container-fluid bg-warning h-100-vh' >

            <div className=' h-100-vh bg-success row'>

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

                <main className='col p-0 bg-primaryy w-100 h-100-vh' >
                    <Header />

                    <div className='container-fluid' style={{height: "60%"}}>
                        <div className='row justify-content-around  px-3 h-100 position-relative'>

                            { downloadResponse && (
                                <p style={{top: '90%', left: '10%', width: '80%'}} className='text-light text-center p-3 bg-success rounded-lg position-absolute' >{downloadResponse}</p>
                            )}

                            <div className='col-md-8 col-sm-10 d-flex align-items-center flex-column mt-5'>
                                    <p className='row text-low text-center mt-3 fs-5'>Digite uma breve descrição abaixo e descubra a melhor solução personalizada para o seu suporte</p>

                                    <div className='row-12 w-100 mt-5'>
                                        <textarea name="resolucao" placeholder="Trocar permissões de acesso de um usuário" className="text-light mt-4 form-control bg-secondaryy border-0 px-3 py-3 pb-5 rounded-lg gray-placeholder" id="" maxlength="300">

                                        </textarea>
                                    </div>

                                    
                                    <button className="row-12 btn text-light bg-secondaryy rounded-lg w-100 mb-5 mt-4 p-2" >Adicionar</button>
                                    

                            </div>
                
                        </div>

                        { history.length > 0 && (
                            <button onClick={handleBack} style={{width: '16%'}} className='option-back-btn ms-5 rounded bg-secondaryy text-light p-2 border-0 mt-5'>Voltar</button>
                        )}
                        
                    </div>
                </main>
                
            </div>
        </div>
    </>
  )
}

export default App
