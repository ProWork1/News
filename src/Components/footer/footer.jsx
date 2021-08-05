import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

const menus = [
    {
        id: "#",
        title: "News"
    },
    {
        id: "#",
        title: "World"
    },
    {
        id: "#",
        title: "Features"
    },
    {
        id: "#",
        title: "More"
    },
]
const menu1 = [
    {
        id: "#",
        title: "Home"
    },
    {
        id: "#",
        title: "World"
    },
    {
        id: "#",
        title: "Magazine"
    },
    {
        id: "#",
        title: "Business"
    },
    {
        id: "#",
        title: "Politics"
    },
]
const menu2 = [
    {
        id: "#",
        title: "Sports"
    },
    {
        id: "#",
        title: "Art"
    },
    {
        id: "#",
        title: "Magazine"
    },
    {
        id: "#",
        title: "Real estate"
    },
    {
        id: "#",
        title: "Travel"
    },
    {
        id: "#",
        title: "Author"
    },
]
const menu3 = [
    {
        id: "#",
        title: "Photography"
    },
    {
        id: "#",
        title: "Video"
    },
    {
        id: "#",
        title: "Newsletters"
    },
    {
        id: "#",
        title: "Live Events"
    },
    {
        id: "#",
        title: "Stores"
    },
    {
        id: "#",
        title: "Jobs"
    },
]
const menu4 = [
    {
        id: "#",
        title: "RSS"
    },
    {
        id: "#",
        title: "FAQ"
    },
    {
        id: "#",
        title: "User Agreement"
    },
    {
        id: "#",
        title: "Privacy"
    },
    {
        id: "#",
        title: "About us"
    },
    {
        id: "#",
        title: "Contact"
    },
]

const icon = [
    {
        url: "#",
        name: "fab fa-instagram"
    },
    {
        url: "#",
        name: "fab fa-facebook-f"
    },
    {
        url: "#",
        name: "fab fa-youtube"
    },
    {
        url: "#",
        name: "fab fa-linkedin-in"
    },
    {
        url: "#",
        name: "fab fa-twitter"
    },
]

export default function Footer() {
    return (
        <>
            <div className="container mt-5 " id = "footer">
                <hr />
                <div className="row">
                    {menus.map(({id, title}) => (
                        <div className="col-3" key = {title}>
                            <a href= {id} className = "nav-link">{title}</a>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-3 mt-4" >
                        {menu1.map(({id, title}) => (
                            <a href= {id} className = "nav-link" key = {title}>{title}</a>
                        ))}
                    </div>
                    <div className="col-3 mt-4" >
                        {menu2.map(({id, title}) => (
                            <a href= {id} className = "nav-link" key = {title}>{title}</a>
                        ))}
                    </div>
                    <div className="col-3 mt-4" >
                        {menu3.map(({id, title}) => (
                            <a href= {id} className = "nav-link" key = {title}>{title}</a>
                        ))}
                    </div>
                    <div className="col-3 mt-4" >
                        {menu4.map(({id, title}) => (
                            <a href= {id} className = "nav-link" key = {title}>{title}</a>
                        ))}
                    </div>
                </div>
                <div className="d-lg-flex d-block text-center justify-content-between align-items-center my-5">
                    <div className="footer_logo mb-3">
                        <img className = "w-100" src="./images/logo.svg" alt="" />
                    </div>
                    <div className="d-flex align-items-center ">
                        <div>
                            <p className = "footer_text d-lg-block d-none mt-3">Follow on</p>
                        </div>
                        <div className="mx-auto d-flex">
                            {icon.map(({name,url}) => (
                                <div className="footer_messanger " key = {name}>
                                    <Link to={url}>
                                        <i className = {name}></i>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer_end d-lg-flex d-block justify-content-between">
                    <div className="d-flex flex-wrap">
                        <Link to="#">Terms of Use.</Link>
                        <Link to="#">Privacy Policy.</Link>
                        <Link to="#">Accessibility & CC.</Link>
                        <Link to="#">AdChoices.</Link>
                        <Link to="#">Advertise with us Transcripts.</Link>
                        <Link to="#">License.</Link>
                        <Link to="#">Sitemap</Link>
                    </div>
                    <div className = "d-flex flex-wrap">
                        <p>© 2020 </p>
                        <Link to="#"> @ BootstrapDash, </Link>
                        <p>Inc.All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
