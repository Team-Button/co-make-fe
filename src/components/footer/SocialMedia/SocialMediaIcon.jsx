import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialMediaIcon({ id, platform, icon, link }) {
    return (
        <span className="social-media-link m-1">
            <Link to={ link }><i className={ icon }></i></Link>
        </span>
    )
}
