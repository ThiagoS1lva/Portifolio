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
                <h1>{`<Projetos />`}</h1>
                <p>Uma pequena galeria dos meus projetos mais recentes.</p>
                <div className={styles.projetos}>
                    <div className={styles.row}>
                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <a href='https://github.com/ThiagoS1lva/pokedex' target='blank'><BsGithub size={35} /></a>
                                <a href='https://pokedex-pi-sable.vercel.app/' target='blank'><RiShareBoxLine size={35} /></a>
                            </div>
                            <div className={styles.text}>
                                <h2>Pokedéx</h2>
                                <a href='https://pokedex-pi-sable.vercel.app/' target='blank'><img src='/pokedex.jpeg' alt='imagens de pokemons' /></a>
                                <p>Este é um projeto desenvolvido com Next.js e a PokeAPI, uma API para informações de Pokémon.</p>
                            </div>
                            <div className={styles.language}>
                                <p>Javascript</p>
                                <p>Next.js</p>
                                <p>Poke API</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <a href='' target='blank'><BsGithub size={35} /></a>
                                <a href='https://reclicla-ai.vercel.app/' target='blank'><RiShareBoxLine size={35} /></a>
                            </div>
                            <div className={styles.text}>
                                <h2>Recicla.ai</h2>
                                <a href='https://reclicla-ai.vercel.app/' target='blank'><img src='/recicla.jpeg' /></a>
                                <p>O Recicla.ai, um MVP que cadastra usuários e empresas, além de fornecer autenticação de login com verificação no banco de dados.</p>
                            </div>
                            <div className={styles.language}>
                                <p>React.js</p>
                                <p>Express</p>
                                <p>Node.js</p>
                                <p>SQlite</p>
                            </div>
                        </div>
                    </div>


                    <div className={styles.row}>

                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <a href='https://github.com/ThiagoS1lva/random_game' target='blank'><BsGithub size={35} /></a>
                                <a href='https://random-game-beta.vercel.app/' target='blank'><RiShareBoxLine size={35} /></a>
                            </div>
                            <div className={styles.text}>
                                <h2>Random Game</h2>
                                <a href='https://random-game-beta.vercel.app/' target='blank'><img src='/random.jpeg' alt='imagens do site de randomizador de jogos' /></a>
                                <p>Este é um projeto simples que consiste em uma aplicação web que permite adicionar e remover jogos em uma lista e sortear aleatoriamente um deles.</p>
                            </div>
                            <div className={styles.language}>
                                <p>Javascript</p>
                                <p>React.js</p>
                                <p>CSS Modules</p>
                                <p>React Bootstrap</p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <a href='https://github.com/ThiagoS1lva/wordCloud-TwitterAPI/tree/main' target='blank'><BsGithub size={35} /></a>
                            </div>
                            <div className={styles.text}>
                                <h2>WordCloud Twitter API</h2>
                                <a href='https://github.com/ThiagoS1lva/wordCloud-TwitterAPI/tree/main' target='blank'><img src='/Cloud.png' alt='WordCloud Copa do mundo 2022'/></a>
                                <p>Este código em Python utiliza a biblioteca Pandas para carregar e manipular dados de um arquivo CSV. Ele realiza algumas operações básicas de análise de dados, como exibição de informações estatísticas e gráficos.</p>
                            </div>
                            <div className={styles.language}>
                                <p>Python</p>
                                <p>Tweepy</p>
                                <p>Pandas</p>
                                <p>NumPy</p>
                                <p>Matplotlib</p>
                                <p>WordCloud</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}