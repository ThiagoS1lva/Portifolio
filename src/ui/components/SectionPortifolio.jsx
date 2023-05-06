import styles from '../styles/SectionPortifolio.module.css'
import { useContext } from "react"
import { Context } from "../../contexts/Contexts"
import { BsGithub } from "react-icons/bs"
import { RiShareBoxLine } from "react-icons/ri"

export default function SectionPortifolio() {
    const { sectionProjetoRef } = useContext(Context)

    return (
        <div ref={sectionProjetoRef} className={styles.dad}>
            <div className={styles.container}>
                <h1>{`<Portifolio />`}</h1>
                <p>Uma pequena galeria dos meus projetos mais recentes.</p>
                <div className={styles.projetos}>
                    <div className={styles.row1}>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <a href='https://github.com/ThiagoS1lva/pokedex' target='blank'><BsGithub size={35} /></a>
                                <a href='https://pokedex-pi-sable.vercel.app/' target='blank'><RiShareBoxLine size={35} /></a>
                            </div>
                            <div className={styles.text}>
                                <h2>Pokedéx</h2>
                                <a href='https://pokedex-pi-sable.vercel.app/' target='blank'><img src='/pokedex.jpeg' alt='imagens de pokemons'/></a>
                                <p>Este é um projeto desenvolvido com Next.js e a PokeAPI, uma API para informações de Pokémon.</p>
                            </div>
                            <div className={styles.language}>
                                <p>Javascript</p>
                                <p>Next.js</p>
                                <p>Node.js</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <a href='' target='blank'><BsGithub size={35}/></a>
                                <a href='https://reclicla-ai.vercel.app/' target='blank'><RiShareBoxLine size={35} /></a>
                            </div>
                            <div className={styles.text}>
                                <h2>Recicla.ai</h2>
                                <a href='https://reclicla-ai.vercel.app/' target='blank'><img src='/recicla.jpeg'/></a>
                                <p>O Recicla.ai, um MVP que cadastra de usuários e empresas, além de fornecer autenticação de login com verificação de banco de dados.</p>
                            </div>
                            <div className={styles.language}>
                                <p>Javascript</p>
                                <p>React.js</p>
                                <p>Express</p>
                                <p>Node.js</p>
                                <p>SQlite</p>
                            </div>
                        </div>
                    </div>


                    <div className={styles.row2}>

                    </div>
                </div>
            </div>
        </div>
    )
}