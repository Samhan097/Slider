import React, { useEffect, useState } from 'react'
import data from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

export default function App() {
  const [index,setIndex] =useState(0)
  const [people,setPeople] = useState(data)

  useEffect(()=>{
    const lastIndex = people.length -1
    if(index<0){
      setIndex(lastIndex)
    } 
    if(index>lastIndex)
    {
      setIndex(0)
    }
  },[index,people])

  useEffect(()=>{
    let slider = setInterval(() => {
      setIndex(index+1)
    }, 5000);
    return()=>{
      clearInterval(slider)
    }
  },[index])
  

  return (
    <section className='section'>
      <div className='title'>
        <h2>Review</h2>
      </div>
      <div className='section-center'>
        {people.map((person,personIndex)=>{
          const {id,name,title,image,quote} = person
          let position = 'nextSlide'
          if(personIndex === index){
            position = 'activeSlide'
          }
          if(personIndex === index -1 || (index === 0 && index === people.length -1)){
            position = 'lastSlide'
          }
          return(
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img'/>
              <h2>{name}</h2>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
        <button className='prev' onClick={()=>setIndex(index-1)}>
          <FaChevronLeft />
        </button>
        <button className='next' onClick={()=>setIndex(index+1)}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  )
}
