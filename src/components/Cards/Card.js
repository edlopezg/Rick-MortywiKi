import React from 'react'
import styles from './card.module.scss'


const Card = ({results}) => {
    console.log(results);
    let message  ;
    if (results) {
        message = results.map((x)=> {
            let {id, name, image, location, status} = x
            return (<div key={id} className='col-lg-4 col-md-6 col-12 mb-4 position-relative'>
                <div className={`${styles.card} d-flex flex-column justify-content-center`}>
                    <img src={image} alt='' className={`${styles.img} img-fluid`}/>
                    <div style={{padding: '10px'}} className='content'>
                        <div className='fs-4 fw-bold mb-4'>{name}</div>
                        <div className=''>
                            <div className='fs-6'>Last Location</div>
                            <div className='fs-5'>{location.name}</div>
                        </div>
                    </div>
                </div>
                {(() => {
                    if (status === 'Dead' ) {
                        return (
                            <span className= {`${styles.badge} position-absolute badge bg-danger`}>{status}</span>
                        )
                    }else if( status === 'Alive' ){
                        return (
                            <span className= {`${styles.badge} position-absolute badge bg-success`}>{status}</span>
                        )

                    }else{
                        return (
                            <span className= {`${styles.badge} position-absolute badge bg-secondary`}>{status}</span>
                        )
                    }
                })()}
               
            </div>
            )
        })
    }else{
        message = 'We did not find what you are looking for, please try again'
    }
  return (
    <>{message}</>
  )
}

export default Card