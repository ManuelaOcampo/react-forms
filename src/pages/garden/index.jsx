import React from 'react';


import GardenTable from './contents/garden-table/garden-table.cont';


const  GardenPage =() => {

    
    let dataList=[
        {
           /* garden:[
            
                {
                    id:"H1",
                    room:"TypeRoom",
                    hours: "Hours",
                    total:"Total",
                },
    
                {
                    id:"H2",
                    name:"Name",
                    unit: "Unit",
                    total2:"Total",
                },
    
            ]
        },
        { */
               
            id:"G1",
            title:'GARDEN',
           
        
                
                data:[
                    
                    {
                        id:"G1R1",
                        room:"Sencilla-sin-garaje-Hueco",
                        hours:5,
                        total:35.999,
                    },
                    {
                        id:"G1R2",
                        room:"Sencilla-sin-garaje-Balcon",
                        hours:6,
                        total:36.999,
                    },
                    {
                        id:"G1R3",
                        room:"Sencilla-con-garaje-normal",
                        hours:5,
                        total:43.999,
                        
                    },
                    {
                        id:"G1R4",
                        room:"Suite-junior-normal",
                        hours:5,
                        total:52.999,
                        
                    },
                    {
                        id:"G1R5",
                        room:"Suite-junior-vista",
                        hours:5,
                        total:55.999,
                        
                    },
                    {
                        id:"G1R6",
                        room:"Suite-Presidencial-vista",
                        hours:5,
                        total:71.999,
                        
                    },
                    {
                        id:"G1R7",
                        room:"Suite-Presidencial-Completa",
                        hours:6,
                        total:85.999,
                        
                    },
                

                ]
            
            },
            {
                id:"P1",
            title:'ARTICLE',
                data:[

                   
                    {
                        id:"P1N1",
                        name:"Gaseosa",
                        unit:2,
                        total2:7.835,
                    },
                    {
                        id:"P1N2",
                        name:"Cerveza",
                        unit:4,
                        total2:15.678,
                    },
                    {
                        id:"P1N3",
                        name:"PapasMargarita",
                        unit:3,
                        total2:9.211,
                    },
                    {
                        id:"P1N4",
                        name:"Lechera",
                        unit:1,
                        total2:1.522,
                    },
                    {
                        id:"P1N5",
                        name:"Gatorade",
                        unit:6,
                        total2:22.125,
                    },



                ]
            },
            {
                id:"F1",
                title:'FOOD',

                data:[
                    
                    {
                        id:"F1N1",
                        name:"CarneAsada",
                        unit:2,
                        total2:45.999,
                    },
                    {
                        id:"F1N2",
                        name:"CarneCerdo",
                        unit:1,
                        total2:28.999,
                    },
                    {
                        id:"F1N3",
                        name:"Pechuga",
                        unit:4,
                        total2:45.998,
                    },

                ]
            }
        
        ];

    
    return(
        <>
        <GardenTable dataList={dataList}/>
        
            
        </>
       
    );
   
    

}

export default GardenPage;