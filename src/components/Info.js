import React from 'react'
import Logomize from './Logomize'

const Info = () => {
    const text = [
        'Pidä haavateippiä 1-4 päivää. Jos haavateipin alle ilmestyy verta tai kudosnestettä runsaasti, ota haavateippi pois. Jos tatuoinnin päälle laitetaan kelmu, sitä voi pitää pari tuntia.',
        'Poista haavateippi hitaasti lämpimän veden alla.',
        'Käsittele tatuointia aina puhtain käsin.',
        'Haavateipin poiston jälkeen pese tatuointi vedellä tai miedolla, hajustamattomalla, saippualla.',
        'Rasvaa tatuointia useita kertoja päivässä ohuehkolla kerroksella niin, että tatuointi saa hengitettyä (Bepanthen tai Easytattoo).',
        'Älä pidä hankaavia vaatteita, koruja tms. tatuoinnin päällä paranemisvaiheen aikana, ne saattavat kuluttaa väriä pois.',
        'Vältä runsasta hikoilua, uimista ja saunomista ensimmäiset kaksi viikkoa. Suojaa tatuointisi auringolta.',
        'Käytä myös jatkossa rasvaa.',
        'Älä nypi tai raavi tatuointia, pieni taputtelu lievittää kutinaa.',
        'Tatuoinnin paranemiseen menee koosta ja sijainnista riippuen 2-4 viikkoa.',
        'Jos sinulle tulee kysyttävää tatuoinnista tai sen hoidosta, älä epäröi ottaa yhteyttä tatuoijaasi.'
    ]
    return (
        <div className='info'>
            {text.map((content, index) =>
                <Logomize width={1.2} height={1.5} text={content} key={index} />
            )}
            <p style={{ fontSize: '40px' }}>TODO English</p>
        </div>
    )
}

export default Info