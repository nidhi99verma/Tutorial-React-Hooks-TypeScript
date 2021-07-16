import React, {useState} from 'react';

interface Props {
    children: (
        count: number,
        setCount: React.Dispatch<React.SetStateAction<number>>
    ) => JSX.Element | null;
}

export const TsInTypeProps: React.FC<Props> = ({children}) => {
    const [count, setCount] = useState(0);
    return <div>{children(count, setCount)}</div>;
}
