'use client'
import React from 'react'

interface Props{
  getInputData : (num:number)=> void
}

const InputValue : React.FC<Props> = (props) => {

    const [inputValue, setInputValue] : string = React.useState('')
    const [warningValidation, setWarningValidation] = React.useState(false)
    const sendData = () => {
       
      if (inputValue === ''|| Number(inputValue)<=0){
            console.log('ingresa valor')
            setWarningValidation(true)
        }

        else{
          props.getInputData(Number(inputValue))
          setWarningValidation(false)
        }
        
    }

  return (
    <form onSubmit={(e)=>{
        sendData()
        e.preventDefault()
    }

        }>
  <fieldset >
    <legend>BBVA</legend>
    <label  className="form-label">sad input</label>
    <div className="input-group mb-3">
        <input type="number" 
        id="disabledTextInput" 
        className="form-control" 
        placeholder="Ingresa factor n"
        onChange={(e)=>{
            setInputValue(e.target.value)
        }}
      />
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    {
      warningValidation ? <label  className="text-danger">Número Necesario</label>:null
      }
  </fieldset>
</form>

  )
}

export default InputValue