import React from 'react'

const Notification = ({ notification, error }) => {
    if (notification) {
        return (
            <div id='succcess' className={'success'}>{notification}</div>
        )
    }
    if (error) {
        return (
            <div id='error' className={'error'}>{error}</div>
        )
    }
    return null
}

export default Notification