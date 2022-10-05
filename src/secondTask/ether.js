//блок с Эфирами

import { BsFillFilePlayFill } from "react-icons/bs";

export function Ether({ethers}) {
    
        return (<>
                    <h1>Эфир</h1>
                    {
                        ethers.map(x => {
                            return (<>
                            <BsFillFilePlayFill/>
                            <span>{x.name}</span> <span className="program-channel-name">{x.channel}</span> <br/>
                            </>);
                        })
                    }
            </>);
    }
    