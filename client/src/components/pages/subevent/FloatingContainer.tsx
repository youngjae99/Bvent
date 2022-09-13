import React from 'react'

type Props = {
    children: React.ReactNode;
}

const FloatingContainer = (props: Props) => {
  return (
    <div className="fixed bottom-4 right-4">{props.children}</div>
  )
}

export default FloatingContainer