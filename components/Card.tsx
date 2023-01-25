import React from 'react'

type project = {
    imagePath: string
    title: string
    description: string
    liveDemo: string
    repoLink?: string
}

const Card = (props:project) => {
    return (
        <div className='h-50'>
            <div className="card w-96 bg-base-200 shadow-xl">
                <figure className='h-20'><img src={props.imagePath} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p className='h-20'>{props.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a target="_blank"rel="noreferrer" href={props.liveDemo}>Demo</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card 