import { useState, useRef, useEffect, useCallback, useContext } from 'react'
import { Context } from '../../contexts/Contexts'

const COMMANDS = {
    help: () => [
        'Comandos disponíveis:',
        '',
        '  help        Lista todos os comandos',
        '  whoami      Quem sou eu',
        '  skills      Tecnologias que domino',
        '  projects    Meus projetos',
        '  experience  Experiência profissional',
        '  education   Formação acadêmica',
        '  contact     Como me encontrar',
        '  social      Redes sociais',
        '  clear       Limpa o terminal',
    ],
    whoami: () => [
        'Thiago Oliveira',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        'Desenvolvedor Full Stack & entusiasta de UI/UX.',
        'Graduando em Ciência da Computação pela UERJ.',
        'Técnico em Petróleo e Gás pelo IFF.',
        '',
        'Transformo ideias em soluções digitais modernas,',
        'focando em performance, acessibilidade e design premium.',
    ],
    skills: () => [
        '┌─ Front-end ─────────────────────────────┐',
        '│  HTML5 · CSS3 · JavaScript · React.js   │',
        '│  Vue.js · Tailwind CSS · Next.js        │',
        '└─────────────────────────────────────────┘',
        '',
        '┌─ Back-end ──────────────────────────────┐',
        '│  Python · C# (.NET) · Node.js           │',
        '│  SQL Server · Supabase                  │',
        '└─────────────────────────────────────────┘',
        '',
        '┌─ Ferramentas ───────────────────────────┐',
        '│  Git & GitHub · APIs REST · Figma       │',
        '│  Docker · Vercel · Power Platform       │',
        '└─────────────────────────────────────────┘',
    ],
    projects: () => [
        '┌─ Kscalho ───────────────────────────────┐',
        '│  App de finanças com assistente de IA    │',
        '│  Vue 3 · Supabase · Gemini AI           │',
        '│  → kascalho.vercel.app                  │',
        '└─────────────────────────────────────────┘',
        '',
        '┌─ Tarotly ───────────────────────────────┐',
        '│  Leitura de tarot com IA                │',
        '│  Vue 3 · Astro · Groq AI                │',
        '│  → tarotly.site                         │',
        '└─────────────────────────────────────────┘',
        '',
        '┌─ Pont Uau ──────────────────────────────┐',
        '│  Sistema de agendamentos mobile-first    │',
        '│  Nuxt 3 · Supabase · Tailwind           │',
        '│  → pont-uau.vercel.app                  │',
        '└─────────────────────────────────────────┘',
        '',
        '┌─ Pokédex ───────────────────────────────┐',
        '│  Pokédex interativa com PokeAPI         │',
        '│  Next.js · PokeAPI                      │',
        '│  → pokedex-pi-sable.vercel.app          │',
        '└─────────────────────────────────────────┘',
        '',
        'Use "clear" para limpar e ver os outros.',
    ],
    experience: () => [
        '2025 ┃ Estagiário de Inteligência de Mercado',
        '     ┃ WEB Nordeste LTDA · Híbrido',
        '     ┃ Análise de dados, Python, Web',
        '',
        '2024 ┃ Assistente de Análise de Dados',
        '     ┃ ANP · Presencial',
        '     ┃ Power BI, Power Apps, SQL, ETL',
        '',
        '2024 ┃ Estagiário de TI',
        '     ┃ Fundação José Bonifácio · Presencial',
        '     ┃ Vue.js, .NET, SQL Server',
        '',
        '2023 ┃ Estagiário de TI',
        '     ┃ ANP · Remoto',
        '     ┃ Power BI, Power Automate, Python',
        '',
        '2022 ┃ Estagiário de TI - Machine Learning',
        '     ┃ UERJ · Híbrido',
        '     ┃ Python, Pandas, Scikit-Learn',
    ],
    education: () => [
        '2022 - Presente',
        '  Ciência da Computação — UERJ Maracanã',
        '  Foco em Engenharia de Software e IA',
        '',
        '2022 - 2023',
        '  Programadores Cariocas — Senac / Resilia',
        '  Desenvolvimento Full Stack Intensivo',
        '',
        '2018 - 2021',
        '  Técnico em Petróleo e Gás — IFF Cabo Frio',
        '  Formação Técnica de Nível Médio',
    ],
    contact: () => [
        '📧  thiagooliveira745@gmail.com',
        '📱  +55 22 99105-5011 (WhatsApp)',
        '',
        'Ou use o formulário na seção de contato!',
    ],
    social: () => [
        '🔗  LinkedIn  → linkedin.com/in/thiago-oliveira-49952823a',
        '🐙  GitHub   → github.com/ThiagoS1lva',
        '📸  Instagram → instagram.com/diskthi',
        '💬  WhatsApp → wa.me/5522991055011',
    ],
    clear: () => null,
}

const MOTD = [
    '████████╗██╗  ██╗██╗ █████╗  ██████╗  ██████╗',
    '╚══██╔══╝██║  ██║██║██╔══██╗██╔════╝ ██╔═══██╗',
    '   ██║   ███████║██║███████║██║  ███╗██║   ██║',
    '   ██║   ██╔══██║██║██╔══██║██║   ██║██║   ██║',
    '   ██║   ██║  ██║██║██║  ██║╚██████╔╝╚██████╔╝',
    '   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝',
    '',
    'Bem-vindo ao meu portfólio interativo!',
    'Digite "help" para ver os comandos disponíveis.',
]

export default function Terminal() {
    const { buttonSobre, buttonProjeto, buttonCarreira, buttonAcademy, buttonContato } = useContext(Context)
    const [lines, setLines] = useState(MOTD.map(text => ({ type: 'output', text })))
    const [input, setInput] = useState('')
    const [history, setHistory] = useState([])
    const [historyIndex, setHistoryIndex] = useState(-1)
    const [isOpen, setIsOpen] = useState(false)
    const inputRef = useRef(null)
    const containerRef = useRef(null)

    const scrollToBottom = useCallback(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }, [])

    useEffect(() => {
        scrollToBottom()
    }, [lines, scrollToBottom])

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isOpen])

    const handleSubmit = (e) => {
        e.preventDefault()
        const trimmed = input.trim().toLowerCase()

        const newLines = [...lines, { type: 'command', text: `$ ${input}` }]

        if (trimmed === '') {
            setLines(newLines)
            setInput('')
            return
        }

        if (trimmed === 'clear') {
            setLines(MOTD.map(text => ({ type: 'output', text })))
            setInput('')
            setHistory(prev => [trimmed, ...prev])
            setHistoryIndex(-1)
            return
        }

        const scrollCommands = {
            whoami: {
                action: buttonSobre,
                text: 'Indo para Sobre...',
            },
            projects: {
                action: buttonProjeto,
                text: 'Indo para Projetos...',
            },
            experience: {
                action: buttonCarreira,
                text: 'Indo para Carreira...',
            },
            education: {
                action: buttonAcademy,
                text: 'Indo para Academica...',
            },
            contact: {
                action: buttonContato,
                text: 'Indo para Contato...',
            },
        }

        const scrollCommand = scrollCommands[trimmed]
        if (scrollCommand) {
            scrollCommand.action()
            newLines.push({ type: 'output', text: scrollCommand.text })
        }

        const command = COMMANDS[trimmed]
        if (command) {
            const output = command()
            if (output) {
                output.forEach(line => {
                    newLines.push({ type: 'output', text: line })
                })
            }
        } else {
            newLines.push({ type: 'error', text: `bash: ${trimmed}: comando não encontrado. Digite "help" para ajuda.` })
        }

        setLines(newLines)
        setInput('')
        setHistory(prev => [trimmed, ...prev])
        setHistoryIndex(-1)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault()
            if (historyIndex < history.length - 1) {
                const newIndex = historyIndex + 1
                setHistoryIndex(newIndex)
                setInput(history[newIndex])
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1
                setHistoryIndex(newIndex)
                setInput(history[newIndex])
            } else {
                setHistoryIndex(-1)
                setInput('')
            }
        }
    }

    const handleContainerClick = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return (
        <>
            {/* Floating Terminal Button */}
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className={`fixed bottom-8 left-8 z-50 p-4 rounded-xl bg-slate-900 dark:bg-slate-100 text-green-400 dark:text-green-600 shadow-2xl shadow-slate-900/30 dark:shadow-slate-300/30 transition-all duration-300 hover:scale-105 ${isOpen ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100'
                    }`}
                aria-label="Abrir terminal"
            >
                <span className="font-mono text-lg font-bold">$_</span>
            </button>

            {/* Terminal Window */}
            <div className={`fixed bottom-8 left-8 z-[60] w-[90vw] max-w-[600px] h-[450px] rounded-xl overflow-hidden shadow-2xl shadow-black/50 dark:shadow-black/80 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                }`}>
                {/* Title Bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 dark:bg-slate-200 border-b border-slate-700 dark:border-slate-300">
                    <div className="flex gap-2">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                        />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <span className="ml-2 text-xs font-mono text-slate-400 dark:text-slate-500">thiago@portfolio ~ bash</span>
                </div>

                {/* Terminal Body */}
                <div
                    ref={containerRef}
                    onClick={handleContainerClick}
                    className="h-[calc(100%-44px)] bg-slate-950 dark:bg-slate-50 p-4 overflow-y-auto font-mono text-sm cursor-text scrollbar-terminal"
                >
                    {lines.map((line, i) => (
                        <div
                            key={i}
                            className={`leading-relaxed whitespace-pre-wrap ${line.type === 'command' ? 'text-slate-300 dark:text-slate-600' :
                                    line.type === 'error' ? 'text-red-400 dark:text-red-500' :
                                        'text-green-400 dark:text-green-700'
                                }`}
                        >
                            {line.text}
                        </div>
                    ))}

                    {/* Input Line */}
                    <form onSubmit={handleSubmit} className="flex items-center mt-1">
                        <span className="text-green-400 dark:text-green-700 mr-2 select-none">$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent text-green-400 dark:text-green-700 outline-none caret-green-400 dark:caret-green-700 placeholder-green-400/30 dark:placeholder-green-700/30"
                            placeholder="Digite um comando..."
                            autoComplete="off"
                            spellCheck={false}
                        />
                    </form>
                </div>
            </div>
        </>
    )
}
