import { useState } from 'react'
import './Insight.css'
import {Table } from 'react-bootstrap'

function Insight() {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

   
    return (
        <div>
             <Table>
                    <img src="airpollute.jpg" alt="airpollution" height="400" className="col-12" />
                </Table>
        <div className='wrapper' >
             
            <div className='accordion' col='12'>
                {info.map((item, i) =>
                (<div className='item'>
                    <div className='title' onClick={() => toggle(i)}>
                        <h2>{item.question}</h2>
                        <span>{selected === i ? '˅' : '^'}</span>
                    </div>
                    <div className={selected === i ? 'content.show' : 'content'}>{item.answer}</div>
                </div>
                ))}
            </div>



        </div>
        </div>


    )
}

const info = [
    {
        question: 'What is Air Pollution?',
        answer: ' Air pollution refers to any physical, chemical or biological change in the air. It is the contamination of air by harmful gases, dust and smoke which affects plants, animals and humans drastically. There is a certain percentage of gases present in the atmosphere. An increase or decrease in the composition of these gases is harmful for survival. The gaseous composition has resulted in an increase in earth’s temperature, which is known as global warming.',
    },
    {
        question: 'Types of Air Pollutants?',
        answer: 'Primary Pollutants: The pollutants that directly cause air pollution are known as primary pollutants. For example, Sulphur-dioxide emitted from factories is a primary pollutant. Secondary Pollutants: The pollutants formed by the intermingling and reaction of primary pollutants are known as secondary pollutants. For example, Smog formed by the intermingling of smoke and fog is a secondary pollutant.',
    },
    {
        question: 'There are Six Different Causes for Air Pollutions-Cause #1',
        answer: 'Burning of Fossil Fuels The combustion of fossil fuels emits a large amount of sulphur dioxide. Carbon monoxide released by incomplete combustion of fossil fuels also results in air pollution.'

    },
    {
        question: 'Cause #2',
        answer: 'Automobiles-The gases emitted from vehicles such as jeeps, trucks, cars, buses, etc. pollute the environment. These are the major sources of greenhouse gases and also result in diseases among individuals.'

    },
    {
        question: 'Cause #3',
        answer: 'Agricultural Activities-hazardous gases emitted during agricultural activities. The insecticides, pesticides and fertilizers emit harmful chemicals in the atmosphere and contaminate it.'

    },
    {
        question: 'Cause #4',
        answer: 'Factories and Industries-Factories and industries are the main source of carbon monoxide, organic compounds, hydrocarbons and chemicals. These are released into the air, degrading its quality.'

    },
    {
        question: 'Cause #5',
        answer: 'Mining Activities-In the mining process, the minerals below the earth are extracted using large pieces of equipment. The dust and chemicals released during the process not only pollute the air, but also deteriorate the health of the workers and people living in the nearby areas.'

    },
    {
        question: 'Cause #6',
        answer: 'Domestic Sources-The household cleaning products and paints contain toxic chemicals that are released in the air. The smell from the newly painted walls is the smell of the chemicals present in the paints. It not only pollutes the air but also affects breathing.'

    },

]
export default Insight;