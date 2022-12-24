import React, { useState } from 'react'
import LoginModal from './components/loginModal'
export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleLoginModal = () => {
    setIsModalOpen(true)
  }
  const modalClose = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <a href="#" onClick={handleLoginModal}>
        登录
      </a>
      {isModalOpen ? <LoginModal isModalOpen={isModalOpen} modalClose={modalClose} /> : null}
    </>
  )
}
