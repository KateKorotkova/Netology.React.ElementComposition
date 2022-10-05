//собстревенная реклама Яндекса справа от поисковой строки
import logo from '../images/logo.svg';

export function OwnAdvertising() {
    return (<>
                <img className='advertising' src={logo}/>
                <h4>Работа над ошибками</h4>
                <span>Смотрите на Яндексе и запоминайте</span>
        </>);
}