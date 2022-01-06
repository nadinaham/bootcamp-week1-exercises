import React, { useState } from "react"
import { CountingBox } from "./styles"

const ShyBox = () => {
  const [clickCount, setClickCount] = useState(0)

  return (
    <CountingBox onClick={() => setClickCount(clickCount + 1)}>
      {clickCount}
    </CountingBox>
  )
}

export default ShyBox