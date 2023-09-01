import { useState } from 'react';
import mystyle from './Profile.module.css'
function Profile(){

    const[name,setName]=useState('');
    const[image,setImage]=useState('');
    const[desc,setDesc]=useState('');
    const[gender,setGender]=useState('');

    function handleClick(){
        fetch('https://randomuser.me/api/')    
        .then(response=>response.json())
        .then(data => {
            let fullname = data.results[0].name.first + data.results[0].name.last
            setName(fullname)
            setDesc(data.results[0].email)
            setImage(data.results[0].picture.large)
            if(data.results[0].gender === "female"){
                setGender(mystyle.female)
             }
             else{
                 setGender(mystyle.male)
             }
             console.log(data.results[0])        
    });
 
    }

    return(
    <>
        <div className={mystyle.profilemain}>
        
            <img className={`${mystyle.profileimage} ${gender}`}  src={image} />
            <h1>{name}</h1>
            <p>{desc}</p>

            <input type='button' value="Show Next" onClick={handleClick}/>
            </div>    
    </>
)


}
export default Profile