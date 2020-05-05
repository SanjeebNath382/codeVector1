import React, { Component } from 'react'
import data from '../../data/data'
import {Line,Bar} from 'react-chartjs-2'

export default class People extends Component {
    state={
        id:[],
        
        area:[],
        sqrt:[],
        x_min:[],
        y_min:[],
        x_max:[],
        y_max:[]
    }
    uniqueElements=()=>{
       const newState={
            id:[],
            area:[],
            sqrt:[],
            x_min:[],
            y_min:[],
            x_max:[],
            y_max:[]
        }
            data.map(record=>{
                if(!newState.id.includes(record['frame_id'])){
                    newState.id.push(record['frame_id']);
                    record['Persons_faces_coordinates'].map(each=>newState.area.push((each['coordinates']['x_max']-each['coordinates']['x_min'])*(each['coordinates']['y_max']-each['coordinates']['y_min'])));
                    record['Persons_faces_coordinates'].map(each=>newState.sqrt.push(Math.sqrt((each['coordinates']['x_max']-each['coordinates']['x_min'])*(each['coordinates']['y_max']-each['coordinates']['y_min']))))
                    record['Persons_faces_coordinates'].map(each=>{
                        newState.x_min.push(each['coordinates']['x_min']);
                        newState.x_max.push(each['coordinates']['x_max']);
                        newState.y_min.push(each['coordinates']['y_min']);
                        newState.y_max.push(each['coordinates']['y_max']);
                    })
                }
            })
            this.setState({
                id:[newState['id']],
                area:[newState['area']],
                sqrt:[newState['sqrt']],
                x_min:[newState['x_min']],
                y_min:[newState['y_min']],
                x_max:[newState['x_max']],
                y_max:[newState['y_max']]
            })
           
    }
    componentDidMount() {
        this.uniqueElements();
         
    }
    render() {
        return (
            <div className="chart">
            

            <Bar
            data={
                {labels: this.state.id[0],
                    datasets:[{
                        label: "area",
                        data:this.state.area[0],
                        backgroundColor:"red",
                        barThickness: 6,
                        //marginRight:"40px"
                         paddingLeft: "10px"
                        
                    },
                    {
                        label: "square root",
                        data: this.state.sqrt[0],
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

          <Line
            data={
                {labels: this.state.id[0],
                    datasets:[{
                        label: "area",
                        data:this.state.area[0],
                        backgroundColor:"red"
                        
                    },
                    {
                        label: "square root",
                        data: this.state.sqrt[0],
                        backgroundColor:"green"
                    }
                    ]
                }
            }
            
            options={{ maintainAspectRatio: true }}
            />
           

            
                
            </div>
        )
    }
}
