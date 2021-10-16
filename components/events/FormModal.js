import Modal from 'react-modal'
import EventForm from './EventForm'

const FormModal = ({ isOpen, closeModal }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
        >
            <EventForm />
        </Modal>
    )
}

export default FormModal