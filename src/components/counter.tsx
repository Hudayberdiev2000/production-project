import { useState } from "react"
import styles from "./counter.module.scss"

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)

  return (
    <div>
      <h1 className={styles.heading}>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
