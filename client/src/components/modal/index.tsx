import { FC, PropsWithChildren } from 'react'
import ReactModal from 'react-modal'

interface ModalProps extends PropsWithChildren {
  isOpen: boolean
  closeModal: () => void
}

const BaseModal: FC<ModalProps> = ({ closeModal, isOpen, children }) => (
  <ReactModal
    isOpen={isOpen}
    overlayClassName="h-screen w-screen fixed grid place-items-center top-0 left-0 bg-black/70 z-50"
    className="relative mx-auto w-[700px] max-w-full rounded-md bg-surface-mixed-200 px-10 py-16 text-white"
    shouldCloseOnOverlayClick={true}
    onRequestClose={closeModal}
    closeTimeoutMS={200}
    ariaHideApp={false}
  >
    <button onClick={closeModal} className="absolute right-6 top-6 hover:cursor-pointer">
      X
    </button>
    {children}
  </ReactModal>
)

export default BaseModal
