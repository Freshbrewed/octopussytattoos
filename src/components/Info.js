import React from 'react'

const Info = () => {
    const style = {
        color: 'white',
        marginLeft: '2%',
        padding: '1%',
        fontSize: '20px'
    }

    return (
        <div>
            <ul style={{ marginTop: '5%' }}>
                <li style={style}>
                Pidä haavateippiä 1-4 päivää. Jos haavateipin alle ilmestyy verta tai kudosnestettä runsaasti,
                ota haavateippi pois. Jos tatuoinnin päälle laitetaan kelmu, sitä voi pitää pari tuntia.
                </li>
                <li style={style}>
                Poista haavateippi hitaasti lämpimän veden alla.
                </li>
                <li style={style}>
                Käsittele tatuointia aina puhtain käsin.
                </li>
                <li style={style}>
                Haavateipin poiston jälkeen pese tatuointi vedellä tai miedolla, hajustamattomalla, saippualla.
                </li>
                <li style={style}>
                Rasvaa tatuointia useita kertoja päivässä ohuehkolla kerroksella niin, että tatuointi saa hengitettyä (Bepanthen tai Easytattoo).
                </li>
                <li style={style}>
                Älä pidä hankaavia vaatteita, koruja tms. tatuoinnin päällä paranemisvaiheen aikana, ne saattavat kuluttaa väriä pois.
                </li>
                <li style={style}>
                Vältä runsasta hikoilua, uimista ja saunomista ensimmäiset kaksi viikkoa. Suojaa tatuointisi auringolta.
                </li>
                <li style={style}>
                Käytä myös jatkossa aurinkorasvaa.
                </li>
                <li style={style}>
                Älä nypi tai raavi tatuointia, pieni taputtelu lievittää kutinaa.
                </li>
                <li style={style}>
                Tatuoinnin paranemiseen menee koosta ja sijainnista riippuen 2-4 viikkoa.
                </li>
                <li style={style}>
                Jos sinulle tulee kysyttävää tatuoinnista tai sen hoidosta, älä epäröi ottaa yhteyttä tatuoijaasi.
                </li>
            </ul>
            <p style={{ fontSize: '40px' }}>TODO English</p>
        </div>
    )
}

export default Info