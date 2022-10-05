//блок с несколькими новостями

import newsLogo1 from '../images/news_icon_1.png';
import newsLogo2 from '../images/news_icon_2.jpg';
import {SingleNews} from "./singleNews";

export function News() {
    return (<>
                <SingleNews icon={newsLogo1} text="Первая новость" url="#"/> <br/> 
                <SingleNews icon={newsLogo2} text="Вторая новость" url="#"/> <br/>             
                <SingleNews icon={newsLogo1} text="Третья новость" url="#"/> <br/>             
                <SingleNews icon={newsLogo1} text="Четвертая новость" url="#"/> <br/>             
                <SingleNews icon={newsLogo1} text="Пятая новость" url="#"/> <br/>             
            </>);
}