//основной компонент со всеми блоками
import {News} from "./news";
import {OwnAdvertising} from "./ownAdvertising";
import {SearchString} from "./searchString";
import {MainBlockLinks} from "./mainBlockLinks";
import {Advertising} from "./advertising";
import {Weather} from "./weather";
import {Popular} from "./popular";
import {Map} from "./map";
import {TVProgram} from "./tvProgram";
import {Ether} from "./ether";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export function Yandex() {
    let date = getFormattedDate();
    let topPrograms = [
        {
            name: "02:00 ТНТ.Best",
            channel: "ТНТ International"
        },
        {
            name: "02:15 Джинглики",
            channel: "Карусель INT"
        },
        {
            name: "02:25 Наедине со всеми",
            channel: "Первый"
        }
    ];
    let ethers = [
        {
            name: "Управление как искусство",
            channel: "Успех"
        },
        {
            name: "Ночь. Мир в это время",
            channel: "earthTV"
        },
        {
            name: "Андрей Возн...",
            channel: "Совершенно секретно"
        }
    ];

    return (<>
                <Container>
                    <Row>
                        <Col md="4"> <h1>Сейчас в СМИ</h1> </Col>
                        <Col md="3"> <h1>В Германии</h1> </Col>
                        <Col md="3"> <h1>Рекомендуем</h1> </Col>
                        <Col md="2"> <span>{date}</span> </Col>
                    </Row>
                    <Row>
                        <Col md="9"> <News/> </Col>
                        <Col md="3"> <OwnAdvertising/> </Col>
                    </Row>
                    <Row>
                        <Col> <MainBlockLinks/> </Col>
                    </Row>
                    <Row>
                        <Col> <SearchString exampleSearchText="фаза луны сегодня"/> </Col>
                    </Row>
                    <Row style={{"margin": "10px"}}>
                        <Col> <Advertising /> </Col>
                    </Row>
                    <Row>
                        <Col md="4"> <Weather generalTemperature="+17" morningTemperature="+17" afternoonTemperature="+20"/> </Col>
                        <Col md="4"> <Map/> </Col>
                        <Col md="4"> <Ether ethers={ethers}/> </Col>
                    </Row>
                    <Row>
                        <Col md="4"> <Popular/> </Col>
                        <Col md="4"> <TVProgram topPrograms={topPrograms}/> </Col>
                    </Row>
                </Container>
        </>);
}


function getFormattedDate() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let datePart = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    let timePart = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    return datePart + ", " + timePart;
}