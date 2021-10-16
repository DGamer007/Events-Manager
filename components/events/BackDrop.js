import classes from '../../styles/components/backdrop.module.css'

const BackDrop = ({ closeModal }) => {

    return (
        <div className={classes.backdrop} onClick={closeModal}></div>
    )
}

export default BackDrop