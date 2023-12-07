import styled from "@emotion/styled";

export default function Resultado({resultado}) {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;

    return (
        <div>
            <p>Precio: <span>{PRICE}</span></p>
            <p>Precio mas alto del dia: <span>{HIGHDAY}</span></p>
            <p>Precio mas bajo del dia: <span>{LOWDAY}</span></p>
            <p>Variacion de las ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
            <p>Ultima actualización: <span>{LASTUPDATE}</span></p>
        </div>
    )
}
