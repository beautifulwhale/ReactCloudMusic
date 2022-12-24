import React, { PropsWithChildren, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function RootModal({ children }: PropsWithChildren) {
  const divElement = document.createElement('div')
  divElement.setAttribute('id', 'login-root')
  const element = createPortal(children, divElement)

  useEffect(() => {
    console.log('element', element)
    document.body?.appendChild(divElement)
    return () => {
      document.body?.removeChild(divElement)
    }
  },[element])
  return element
}
