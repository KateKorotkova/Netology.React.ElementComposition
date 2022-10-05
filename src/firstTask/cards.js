import cardLogo from '../images/logo.svg';


function FirstCard() {
    return (<>
                <CardTemplate title={"Card title"} text={"Some quick example text to build on the card title and make up the bulk of the card's content"}>
                     <FirstHeader/>
                </CardTemplate>
        </>);
}


function SecondCard() {
    return (<>
                <CardTemplate title={"Special title treatment"} text={"With supporting text below as a natural lead-in to additional content"}>
                     <SecondHeader/>
                </CardTemplate>
        </>);
}


function CardTemplate({title, text, children}) {
    return (<>
                <div className="card" style={{width: "18rem"}}>
                    {children}
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        </>);
}


function FirstHeader() {
    return (<>
                <img src={cardLogo} className="card-img-top" alt="..."/>
        </>);
}


function SecondHeader() {
    return (<>
                <div className="card-header">
                    Featured
                </div>
        </>);
}


export {FirstCard, SecondCard};