//блок с поисковой строкой

import { Button } from 'react-bootstrap';


export function SearchString({exampleSearchText}) {
    
    return (<>
                <input className="search-string" type="text"/> <Button as="a" variant="primary">Найти</Button>
                <br/>
                <span>Найдется всё. Например, {exampleSearchText}</span>
        </>);
}
