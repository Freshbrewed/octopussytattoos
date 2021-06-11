import React from 'react'

const SneakPeek = () => {
    const dog = 'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/14583423_1138325126258450_6686115966394302464_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=cJ6ZCC3SEicAX8vQwaO&_nc_ht=scontent-hel3-1.cdninstagram.com&oh=957ad3c533f472dbdf13df49484a4fcf&oe=60C8B264'
    const cactus = 'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/73420483_693495511174074_1447322212532099123_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=aGbd_foYrOAAX9vh4SY&_nc_ht=scontent-hel3-1.cdninstagram.com&oh=33e84dfd0e2e7707f78451b09f3bb191&oe=60C89DB6'
    const woman = 'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/22581894_497248840644536_5292260759420534784_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=1lkrL1_XXGoAX895IeL&_nc_ht=scontent-hel3-1.cdninstagram.com&oh=8ea39d1faa4138be787553f11af8f26c&oe=60C893B1'
    const dragon = 'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/36479780_379701369223079_4540687580504522752_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=yoIf-AD9G0kAX8gH13X&_nc_oc=AQmbbGGmfoCkpoyyMF4MPLbm0mcLj0xgoNISRawk7bK8jlZ7fCKzFVyITJf4iJlqkKQ&_nc_ht=scontent-hel3-1.cdninstagram.com&oh=e4e21ca420a15ce65d5e021c4252aed5&oe=60C88ED1'
    const flower = 'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/27574468_1786810554957144_1384458063343255552_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=QEeZ29v94BEAX8hnBvI&_nc_ht=scontent-hel3-1.cdninstagram.com&oh=bc6fb0dfaff6235a2b53883bbdfcae5b&oe=60C8B290'
    const abstract = 'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/14033444_1776880515888216_1559969857_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=4A-Qy4hJ2V8AX_6xcyP&_nc_ht=scontent-hel3-1.cdninstagram.com&oh=2eb1dc0df37f8a5b31c756c3dbde9264&oe=60C88B84'
    const skull = 'https://scontent-hel3-1.cdninstagram.com/v/t51.2885-15/29716018_632838673714477_2902180728429084672_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=mTCRwpA58mcAX-jBAOj&_nc_ht=scontent-hel3-1.cdninstagram.com&oh=3e01b09c91995fccff6937017850ad60&oe=60C8098B'
    const fly = 'https://scontent-hel3-1.cdninstagram.com/v/t51.29350-15/159116620_936420366897849_9081702413091911885_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=BrgRyP4jBjgAX8H-Sz2&_nc_ht=scontent-hel3-1.cdninstagram.com&oh=9e0f8cbc4c48e4708eedb1e116725037&oe=60C76594'
    return (
        <div>
            <div className='image-grid' style={{ paddingTop: '4rem', paddingLeft: '10rem', paddingRight: '10rem' }}>
                <img className='image' src={dog} />
                <img className='image' src={woman} />
                <img className='image' src={cactus} />
                <img className='image' src={dragon} />
            </div>
            <div className='image-grid' style={{ paddingTop: '10px', paddingLeft: '10rem', paddingRight: '10rem' }}>
                <img className='image' src={abstract} style={{ boxShadow: 'none',width: '80%', height: '80%', paddingLeft: '4.9rem' }} />
                <img className='image' src={skull} />
                <img className='image' src={flower} />
                <img className='image' src={fly} style={{ boxShadow: 'none', width: '80%', height: '80%', paddingRight: '5.9rem' }} />
            </div>
        </div>


    )
}

export default SneakPeek