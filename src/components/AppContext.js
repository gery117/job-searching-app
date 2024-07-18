import { createContext, useState} from 'react';

export const AppContext = createContext("");

// const SearchProvider = ({ children }) => {
//     const [search, setSearch] = useState('');
//     return (
        
//         <AppContext.Provider value={{ search, setSearch }}>
//             {children}
//         </AppContext.Provider>
//     );
// };


// export { AppContext, SearchProvider };