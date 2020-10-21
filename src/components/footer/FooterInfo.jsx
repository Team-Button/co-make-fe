import React from 'react'
import SocialMediaLinks from "./SocialMedia/SocialMediaLinks"

function FooterInfo() {
    return (
        <div className="footer-info bg-secondary text-white p-3 ">
            <div className="container-sm d-flex justify-content-around">
                <section className="about-team">
                    <h5><strong>About Co-Unity</strong></h5>
                    <p>Meet the Team</p>
                </section>
                <section className="connect">
                    <h5><strong>Stay Connected</strong></h5>
                    <SocialMediaLinks />
                </section>
            </div>
        </div>
    )
}

export default FooterInfo
