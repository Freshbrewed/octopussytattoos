import React from 'react'
import Image from './Image'
import loader from '../assets/loader311px.gif'
import InfiniteScroll from 'react-infinite-scroll-component'


const ImageList = ({ media, loaded, fetch }) => {
    if (media === null) return <div>Loading...</div>
    return (
        <div id="scrollableDiv" style={{ height: 800, overflow: 'auto' }}>
            <InfiniteScroll
                dataLength={media.length}
                next={() => fetch()}
                hasMore={false}
                loader={
                    <img src={loader} alt="Loading"
                    />}
                scrollableTarget="scrollableDiv"
            >
                <div className="image-grid" style={{ marginTop: '30px' }}>
                    {loaded ?
                        media.map((image, index) => (
                            <div className='image' key={index}>
                                <Image data={image} />
                            </div>
                        )) : ''}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default ImageList