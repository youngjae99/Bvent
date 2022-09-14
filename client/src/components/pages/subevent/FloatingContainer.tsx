import React from 'react'

type Props = {
    children: React.ReactNode;
}

const FloatingContainer = (props: Props) => {
  return (
    <div className="fixed bottom-8 right-8">{props.children}</div>
  )
}

export default FloatingContainer