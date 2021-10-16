import classes from '../../styles/components/modal.module.css'

const Modal = (props) => {
    return (
        <div className={classes.modal}>
            {props.children}
        </div>
    )
}

export default Modal