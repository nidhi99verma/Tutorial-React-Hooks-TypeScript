import React, {useState, useRef} from 'react';

//hooks 
interface Props{
    // (JSX attribute) React.InputHTMLAttributes<HTMLInputElement>.onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface DataDefine{
    goods: string;
}

export const TsInUseRef: React.FC<Props> = ({handleChange}) => {

    const [dataObj, setDataObj] = useState<DataDefine>({goods: 'phone'});
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    {/* (JSX attribute) React.ClassAttributes<HTMLInputElement>.ref?: React.LegacyRef<HTMLInputElement> | undefined */}

    setDataObj({goods: 'laptop'});

    return (
        <div ref={divRef}>
            {/* hover over element it wil suggest u what u have to pass */}
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    );
};


