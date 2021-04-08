import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h3> Get to know Us</h3>
                <ul className="footer-nav">
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>About Amazon</li>
                    <li>Amazon tours</li>
                </ul>
            </div>
            <div>
                <h3> Make money with Us</h3>
                <ul className="footer-nav">
                    <li>Sell apps on Amazon</li>
                    <li>Become an Affiliate</li>
                    <li>Advertise Your Products</li>
                    <li> Host an Amazon Hub</li>
                </ul>
            </div>
            <div>
                <h3>Amazon Payment Product</h3>
                <ul className="footer-nav">
                    <li>Amazon Rewards Visa</li>
                    <li>Shop with Points</li>
                    <li>Credit Card Marketplace</li>
                    <li>Reload Your balance</li>
                </ul>
            </div>
            <div>
                <h3>Let Us Help You</h3>
                <ul className="footer-nav">
                    <li>YOur orders</li>
                    <li>Amazon Prime</li>
                    <li>Return & Replacement</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
