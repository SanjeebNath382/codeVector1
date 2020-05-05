
import {Line,Bar} from 'react-chartjs-2'
import React from 'react'

export default function Corona(props) {
    return (
        <div>
        
        <Bar
            data={
                {labels: ['confirmed','recovered','deaths'],
                    datasets:[{
                        label: "infected",
                        data:props.confirmed[0],
                        backgroundColor:"yelloe",
                        
                        
                    },
                    {
                        label: "recovered",
                        data: props.recovered[0],
                        backgroundColor:"green",
                        barThickness: 6,
                        // paddingRight: "4px"
                        
                    },
                    ]
                }
            }
            options={{
                maintainAspectRatio: true ,


                    
                    
                }}
            
            // options={{ }}
            />
            
        </div>
    )
}



