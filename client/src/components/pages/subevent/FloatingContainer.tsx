import React from 'react'

type Props = {
    children: React.ReactNode;
}

const FloatingContainer = (props: Props) => {
  return (
    <div className="max-w-mobile mx-auto w-full bottom-0 fixed -ml-5 p-8 flex justify-end">{props.children}</div>
  )
}

export default FloatingContainer