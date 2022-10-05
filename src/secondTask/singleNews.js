//оформление одиночной новости в списке новостей

function SingleNews({icon, text, url}) {
    return (<>
                <img className="news-icon" src={icon}/>
                <a href={url}>{text}</a>
        </>);
}


export {SingleNews};