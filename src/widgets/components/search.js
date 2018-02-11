import React from 'react'
import './search.css';
// function Search(props) {
//     return(
//         <form action="" className="Search">
//             <input  type="text" 
//                 name="" 
//                 id=""
//                 className="Search-input"
//              />
//          </form>
//     )
// }

const Search = (props) => ( //parentecis para implicar el return
    <form 
        action="" 
        className="Search"
        onSubmit={props.handleSubmit}
    >
        <input  
                ref={props.setRef}//Referencia en React 
                type="text" 
                name="search" 
                id=""
                className="Search-input"
                placeholder= "busca tu musica"
                onChange = {props.handleChange}
                value= {props.value}
        />
    </form>
)
//diferente manera de exporta una funcion sin tener que colocar el return ya que viene implicito
export default Search;