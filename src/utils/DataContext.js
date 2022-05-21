import React, {useState} from "react"

//create context and export
const DataContext = React.createContext();
export default DataContext;

//get provider of DataContext
const { Provider } = DataContext;

export const DataProvider = ({ children }) => {
    let items = [1, 2, 3, 4, 5];
    const [data, setData] = useState(items);

    //Return required values
    return <Provider value={[data, setData]}>{children}</Provider>
};
