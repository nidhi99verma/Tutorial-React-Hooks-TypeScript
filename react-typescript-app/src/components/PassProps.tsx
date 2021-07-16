import React from 'react';

//pass props

//FC : functional component
interface Person{
    firstName: string;
    lastName: string;
}

interface Props{
    text: string;
    ok: boolean;
    i?: number;
    //fn: () => void;
    fn?: (bob: string) => string;
    obj?: {
        f1: string;
    }
    //or
    objPerson : Person
}

// export const TextField: React.FC<{ text: string}> = () => {
    //or
export const PassProps: React.FC<Props> = ({
    text,
    ok,
    objPerson
}) => {
    return (
        <div>
            <input/>
        </div>
    );
};


