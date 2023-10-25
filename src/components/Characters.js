import React from 'react'

const Characters = ({characters =[]}) => {
  return (
    <div className='row'>
       

            {
                characters.map((item, index) => (

                    <div key= {index} className='col'> 
                    
                    <div className='Dark card'  style={{minWidth:200}} >
                      <img src={item.image} alt='Card image cap'/>
                    </div>
                    <div className='card-body '>
                    <h5 class="card-title">{item.name}</h5>
                    <hr></hr>
                 

                    <p class="card-text">{item.status}</p>
                   <p class="card-text">{item.species}</p>
                   <p class="card-text">{item.type}</p>
                   <p class="card-text">{item.gender}</p>

                   <a href="https://rickandmortyapi.com/" class="btn btn-dark"> Informacion</a>
    
                     
                  
                   
                    </div>

                     </div>
                    
                ))
            }

       
    </div>
  )
}

export default Characters