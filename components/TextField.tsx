"use client"
import React, { useRef, useState } from 'react'



type Person = {
    firstName: string;
    lastName: string;
}
type Props = {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string; // return value
    person: Person;
};
type TextNode = {
    text: string
}

export const TextField: React.FC<Props> = () => {
    const [count, setCount] = useState<TextNode>({ text: 'hello' });
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <input ref={inputRef} />


        </div>
    )
}
 