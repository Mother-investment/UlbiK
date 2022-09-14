import { useState } from 'react'
import './Counter.scss'

type CounterProps = {}

const Counter: React.FC<CounterProps> = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}
export default Counter
