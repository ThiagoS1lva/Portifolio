import styles from '../styles/SectionSkill.module.css'
import Skill from './skills/SkillSquare'

export default function SectionSkill() {

    return (
        <div className={styles.dad}>
            <div className={styles.container}>
                <h1>{`<Skills />`}</h1>
                <div className={styles.skill}>
                    <div className={styles.hab}>
                        <p>HTML3</p>
                        <div>
                        <Skill color="#cce4ef"/>
                        <Skill color="#99c9df"/>
                        <Skill color="#67aecf"/>
                        <Skill color="#0279B0"/>
                        <Skill color="#ccc"/>
                        </div>
                    </div>
                    <div className={styles.hab}>
                        <p>CSS3</p>
                        <div>
                        <Skill color="#cce4ef"/>
                        <Skill color="#99c9df"/>
                        <Skill color="#67aecf"/>
                        <Skill color="#0279B0"/>
                        <Skill color="#ccc"/>
                        </div>
                    </div>
                    <div className={styles.hab}>
                        <p>JAVASCRIPT</p>
                        <div>
                        <Skill color="#cce4ef"/>
                        <Skill color="#99c9df"/>
                        <Skill color="#67aecf"/>
                        <Skill color="#ccc"/>
                        <Skill color="#ccc"/>
                        </div>
                    </div>
                    <div className={styles.hab}>
                        <p>REACT.JS</p>
                        <div>
                        <Skill color="#cce4ef"/>
                        <Skill color="#99c9df"/>
                        <Skill color="#67aecf"/>
                        <Skill color="#ccc"/>
                        <Skill color="#ccc"/>
                        </div>
                    </div>
                    <div className={styles.hab}>
                        <p>PYTHON</p>
                        <div>
                        <Skill color="#cce4ef"/>
                        <Skill color="#99c9df"/>
                        <Skill color="#67aecf"/>
                        <Skill color="#0279B0"/>
                        <Skill color="#ccc"/>
                        </div>
                    </div>
                    <div className={styles.hab}>
                        <p>C</p>
                        <div>
                        <Skill color="#cce4ef"/>
                        <Skill color="#99c9df"/>
                        <Skill color="#ccc"/>
                        <Skill color="#ccc"/>
                        <Skill color="#ccc"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}