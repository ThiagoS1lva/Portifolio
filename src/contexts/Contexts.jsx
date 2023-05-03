import  { createContext, useRef } from 'react';
const Context = createContext();

// eslint-disable-next-line react/prop-types
function Contexts ({ children  }) {
    const sectionHomeRef = useRef(null);
    const sectionSobreRef = useRef(null);
    const sectionProjetoRef = useRef(null);
    const sectionCarreiraRef = useRef(null);
    const sectionContatoRef = useRef(null);
    const buttonHome = () => {
        sectionHomeRef.current.scrollIntoView({behavior: 'smooth'})
    }
    const buttonSobre = () => {   
        sectionSobreRef.current.scrollIntoView({behavior: 'smooth'})
    }
    const buttonProjeto = () => {
        sectionProjetoRef.current.scrollIntoView({behavior: 'smooth'})
    }
    const buttonCarreira = () => {
        sectionCarreiraRef.current.scrollIntoView({behavior: 'smooth'})
    }
    const buttonContato = () => {
        sectionContatoRef.current.scrollIntoView({behavior: 'smooth'})
    }


    return (
        <Context.Provider value={{
            buttonHome, sectionHomeRef, 
            buttonSobre, sectionSobreRef,
            buttonProjeto, sectionProjetoRef,
            buttonCarreira, sectionCarreiraRef,
            buttonContato, sectionContatoRef
            }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Contexts };