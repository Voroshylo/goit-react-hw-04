import css from './ImageModal.module.css'
import Modal from 'react-modal'

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}>
      <p>{image.description || image.alt_description}</p>
    </Modal>
  )
}

export default ImageModal