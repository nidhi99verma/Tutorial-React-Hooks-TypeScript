import React, {useState} from 'react';

//hooks

interface DataDefine{
    goods: string;
}

export const TsInUseState: React.FC = ({}) => {

    const [count, setCount] = useState<number | null | undefined | string>(5);
    //pass obj in state
    const [countObj, setCountObj] = useState<{text: string}>({text: 'hello'});
    //or
    const [dataObj, setDataObj] = useState<DataDefine>({goods: 'phone'});

    setCount(null);
    setCount(10);
    setCount(undefined);
    setCount('Nidhi');

    setCountObj({text: 'Verma'});

    setDataObj({goods: 'laptop'});

    return (
        <div>
            <input/>
        </div>
    );
};


