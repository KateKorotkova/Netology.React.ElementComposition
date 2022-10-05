//блок с программой передач
import { Button } from 'react-bootstrap';


export function TVProgram({topPrograms}) {
    
    return (<>
                <h1>Телепрограмма <Button as="a" variant="primary">Эфир</Button></h1> 
                {
                    topPrograms.map(x => {
                        return (<><span>{x.name}</span> <span className="program-channel-name">{x.channel}</span> <br/></>);
                    })
                }
        </>);
}
