import { useState } from "react";

// If we'll pass more than 3 arguments in a hook it's recommended to use an object/interface instead
interface Options {
    initialValue?: number
}
export const useCounter = ({initialValue = 0}: Options) => {

    const [count, setCount] = useState<number>(initialValue);
    const increaseBy = (value: number) => {
        const newValue = count + value;
        if (newValue < 0) return;
        setCount( count + value);
    }

    return {
        // Properties
        count,
        // Methods
        increaseBy
    }
}
