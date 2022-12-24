import React, { useState } from 'react'
import { Button, Modal } from 'antd'
type FCProps = { isModalOpen: boolean; modalClose: () => void }
const LoginModal: React.FC<FCProps> = (props: {
  isModalOpen: boolean
  modalClose: () => void
}) => {
  const handleOk = () => {
    props.modalClose()
  }
  const handleCancel = () => {
    props.modalClose()
  }

  return (
    <>
      <Modal
        title="Basic Modal"
        open={props.isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default LoginModal
