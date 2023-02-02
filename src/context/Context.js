import { useState, createContext } from 'react';

export const Context = createContext();

const ContextProvider = props => {

    const [qr, setQr] = useState("")
    const [visible, setVisible] = useState(true)
    const [visible2, setVisible2] = useState(true)

    const changeQrCode = (value) =>  {
        setQr(value);
    }

    const changeVisibility = (booleen) => {
        setVisible(booleen);
    }

    const changeVisibility2 = (booleen) => {
        setVisible2(booleen);
    }


    return (
        <Context.Provider
            value={{
                qr,
                visible,
                visible2,
                changeQrCode,
                changeVisibility,
                changeVisibility2,
            }}
        >
            {props.children}
        </Context.Provider>
    )

}
export default ContextProvider;
