import React, { useEffect } from 'react'

export default function Browse({setName}) {
  useEffect(() => {
    setName('Browse');
  },[])
  return (
    <div>Browse</div>
  )
}
