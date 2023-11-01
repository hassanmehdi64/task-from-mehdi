import React from 'react'

const Container = ({children,className}) => {
  return (
    <div style={{maxWidth:'1440px',margin:'0 auto',padding:'0 50px'}} className={className}>
      {children}
    </div>
  )
}

export default Container
