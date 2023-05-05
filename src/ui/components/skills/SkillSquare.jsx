import styles from './Skill.module.css'
import PropTypes from 'prop-types';

export default function Skill(props) {
    return (
        <div style={{ backgroundColor: props.color }} className={styles.square}>
            &nbsp;
        </div>
    )
}
//Validação do prop
Skill.propTypes = {
    color: PropTypes.string.isRequired
};