import React from 'react'

type project = {
    imagePath: string
    title: string
    description: string
    liveDemo: string
    repoLink?: string
}


const Card: React.FC<project> = (props) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='h-20'><img src={props.imagePath} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><a href={props.liveDemo}>Demo</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card