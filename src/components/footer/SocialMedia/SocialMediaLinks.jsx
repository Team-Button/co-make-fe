import React from 'react'
import SocialMedia from "./SocialMedia.json"
import SocialMediaIcon from "./SocialMediaIcon"

export default function SocialMediaLinks() {
    return (
        <div>
            {
                SocialMedia.map(el => <SocialMediaIcon icon={ el.icon } link={ el.link }/>)
            }
        </div>
    )
}
