//Ссылки на основные блоки перед строкой поиска

export function MainBlockLinks({url="#", text}) {
    const mainBlocks = [
        {
            text: "Видео",
            url: "#"
        },
        {
            text: "Картинки",
            url: "#"
        },
        {
            text: "Новости",
            url: "#"
        },
        {
            text: "Карты",
            url: "#"
        },
        {
            text: "Маркет",
            url: "#"
        },
        {
            text: "Переводчик",
            url: "#"
        },
        {
            text: "Эфир",
            url: "#"
        },
        {
            text: "ещё",
            url: "#"
        }
    ];
    return (<>
            {
                mainBlocks.map((x) => {return <Link url={x.url} text={x.text}/>})
            }
        </>);
}

export function Link({url="#", text}) {

    return (<><a className="main-block-link" href={url}>{text}</a></>)
}