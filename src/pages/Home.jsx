import { useContext } from "react"
import { Context } from "../contexts/Contexts"
import HomeStart from "../ui/components/HomeStart"

/*import styles from '../ui/styles/Home.module.css'*/

export default function Home() {
    const { sectionHomeRef } = useContext(Context)

    return (
        <>
            <HomeStart ref={sectionHomeRef} />
        </>

    )
}