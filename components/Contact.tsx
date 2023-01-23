import React from 'react'

function Contact() {
    return (
        <div>
            <div className="dropdown dropdown-top dropdown-end">
                <label tabIndex={0} className="btn btn-primary m-1 ">REACH OUT!</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52 text-primary">
                    <li><a href='https://github.com/alexGalvan0' target='_blank'>Github</a></li>
                    <li><a href='mailto:galvan.alex121@gmail.com'>Email</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact