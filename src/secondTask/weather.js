export function Weather({generalTemperature, morningTemperature, afternoonTemperature}) {
    
    return (<>
                <h1>Погода</h1>
                <span>{generalTemperature}</span> 
                <span> Утром {morningTemperature},</span> <br/>
                <span> днем {afternoonTemperature}</span> 
        </>);
}
