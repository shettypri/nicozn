import React from 'react'
import '../../Style/Tech.css'
import android from '../../assets/Tech_stack/android-studio.png'
import angular from '../../assets/Tech_stack/angularjs.png'
import css from '../../assets/Tech_stack/css.png'
import dart from '../../assets/Tech_stack/dart.png'
import firebase  from '../../assets/Tech_stack/firebase.png'
import flutter from '../../assets/Tech_stack/flutter.png'
import nodejs from '../../assets/Tech_stack/nodejs.png'
import kotlin from '../../assets/Tech_stack/icons8-kotlin-48.png'
import laravel from '../../assets/Tech_stack/icons8-laravel-96.png'
import php from '../../assets/Tech_stack/icons8-php-logo-480.png'
import react from '../../assets/Tech_stack/icons8-react-480.png'
import sql from '../../assets/Tech_stack/sql.png'
import swift from '../../assets/Tech_stack/swift.png'
import html from '../../assets/Tech_stack/html.png'
import java from '../../assets/Tech_stack/icons8-java-240.png'
import javascript from '../../assets/Tech_stack/icons8-javascript-240.png'
import python from '../../assets/Tech_stack/python.png'

const Tech = () => {
  const techImages =[
    android,angular,css,dart,firebase,flutter,nodejs,kotlin,
    laravel,php,react,sql,swift,html,java,javascript,python
  ]
  return (
    <>
    <div className="main-heading">
      <div className="tech-heading">
        <p> Technologies used</p>
      </div>
      <div className="tech-images">{
         techImages.map((val,index)=>{
          return(
            <img src={val} alt="img" key={index} height={140} width={140} />
          )
         
         })

      } 
     
        

      </div>
    </div>
   
 
   
    </>
  )
}

export default Tech