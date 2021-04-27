import React, { useState } from 'react';
import TitleTable from  '../title-table/title-table.cont';
import InformationTable from '../information-table/information-table.cont';


import './garden-table.style.css';
import DataTable from '../data-table/data-table.cont';

const GardenTable=(props)=> {
    <GardenTable dataList={props.dataList}/>
   
    const[hostal,setHostal]=useState('G1');
    const[room,setRoom]=useState('');
    const[hours,setHours]=useState(0);
    const[Total,setTotal]=useState(0);

    const agregar=(event)=>{
        event.preventDefault();
        console.log('Hostal ' + hostal);
        console.log('room o name ' + room);
        console.log('hours  o unit ' + hours);
        console.log('total ' + Total);
    }
    
    return(
        <div className="garden-table-container">
            <div>
          {props.dataList.map((garden,index)=>{
              return(
                  <React.Fragment key={garden.id}>
                      <TitleTable titleGarden={garden.title}/>
                    
   
                         {garden.data.map((data,indexdata)=>{
                          return(
                            <DataTable
                             key={data.id}
                             data={data}
                             />
                          );
                   
                         })}
                         
                     
                  </React.Fragment>
                  
                  
                
              );
          })}
          </div>
        
        <div className="garden-form">
        <form >
            <table>
                <tbody>
                <tr>
                    <td>Hostal</td>
                    
                </tr>
                <tr>
                    <td>
                 <select className="caja"
                  value={hostal}
                  onChange={(event)=>{
                      console.log(event.target.value);
                    setHostal(event.target.value);
                        
                }}
                  
                  >
                <option value="G1">GARDEN</option>
                <option value="P1">ARTICLE</option>
                <option value="F1">FOOD</option>
                </select>
                    </td>
                
                </tr>
                <tr>
                    <td >Room o Name</td>  
                </tr>
                <tr>
                <td ><input 
                type="text"className="caja"
                value={room}
                onChange={(event)=>{
                    setRoom(event.target.value);
                        
                }}
                
                />
                </td>
                </tr>
                <tr>
                    <td>Hours o Unit</td>  
                </tr>
                <tr>
                <td><input type="number"  className="caja"
                value={hours}
                onChange={(event)=>{
                  setHours(event.target.value);
                      
              }}
                />
                </td>
                </tr>
                <tr>
                    <td>Total</td>  
                </tr>
                <tr>
                <td><input type="number" className="caja"
                value={Total}
                onChange={(event)=>{
                  setTotal(event.target.value);
                      
              }}
                />
                
                </td>
                </tr>
                <tr>
                   <td> <button className="caja"
                    onClick={agregar}
                   >
                       AGREGAR
                   </button>
                   </td>
                </tr>
                </tbody>
            </table>
           
        </form>

    </div>

    </div>

    );
}

export default GardenTable;


/* {garden.garden.map((garden,indexdato)=>{
                          return(
                            <InformationTable
                             key={garden.id}
                             garden={garden}
                             />
                             
                             
                          );
                          
                          
                         })} */

