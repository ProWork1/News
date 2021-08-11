import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Country } from './Country'
import './Countries.scss'

const Countries = () => {
    let location = useLocation()
    return (
        <div id='countries' className='my-2'>
            <div className='d-flex'>
                <div className='xududlar me-1'>Xududlar</div>
                <div className='align-items-center active2 d-flex'>
                    {Country.map((country, index) => (
                        <div className='d-flex'>
                            |
                            <div
                                className={`mx-2 ${
                                    location.pathname === country.url ? `active1` : null
                                }`}
                            >
                                <Link to={country.url} key={index} className={`text-decoration-none text-dark ${location.pathname === country.url ? `text-white` : null}`}>
                                    {country.text}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Countries
