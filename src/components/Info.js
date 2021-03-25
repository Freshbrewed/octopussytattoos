import React from 'react'
import Logomize from './Logomize'

const Info = () => {
    const text = [
        'Poista kelmu 3-12 tunnin kuluttua.',
        'Pese käsitelty alue vedellä, voit käyttää mietoa hajustamatonta saippuaa. Kuivaa painelemalla, älä hankaa.',
        'Rasvaa tatuointia useita kertoja vuorokaudessa ohuesti Punaisella Bepanthen tai muulla antiseptisella voiteella.',
        'Käytä sidettä (tai peittävää kelmua) ainoastaan likaisessa olosuhteissa,tai kun tatuointi on hankaavalla paikalla. Tatuointi paranee parhaiten ilmavissa olosuhteissa peittämättömänä.',
        'Huolehdi, että tatuointikohta pysyy puhtaana. Käytä ilmavia vaatteita - vältä ihoa ärsyttäviä materiaaleja (sukkahousut, villa yms).',
        'Älä liota tai sauno 2 viikkoon. Suojaa tatuoitu ihon kohta auringolta ja solariumilta vähintään kuukauden ajan.',
        'Älä raavi tai revi rupea.'
    ]

    return (
        <div className='info'>
            {text.map((content, index) =>
                <Logomize width={1.2} height={1.5} text={content} key={index} />
            )}
        </div>
    )
}

export default Info