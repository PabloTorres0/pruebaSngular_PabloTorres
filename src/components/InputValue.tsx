'use client'
import React from 'react'

interface Props{
  getInputData : (num:number)=> void
}

const InputValue : React.FC<Props> = (props) => {

    const [inputValue, setInputValue] = React.useState('')
    const [warningValidation, setWarningValidation] = React.useState(false)
    const sendData = () => {
      if (inputValue === ''|| Number(inputValue)<=0){
            setWarningValidation(true)
        }

        else{
          props.getInputData(Number(inputValue))
          setWarningValidation(false)
        } 
    }

    const onChange = (e:any)=>{
      setInputValue(e.target.value)
      props.getInputData(0)
    }

  return (
    <form onSubmit={(e)=>{
        sendData()
        e.preventDefault()
    }

        }>
  <fieldset >
    <legend className='text-bbva-primary'>BBVA</legend>
    <div className="input-group mb-3">
        <input type="number" 
            id="disabledTextInput" 
            className="form-control" 
            placeholder="Ingresa factor n"
            onChange={(e)=>{
                onChange(e)
            }}
      />
      <button type="submit" className="btn btn-primary">Ingresar</button>
    </div>
    {
      warningValidation ? <label  className="text-danger">*** Ingresa Número Válido ***</label>:null
      }
  </fieldset>
</form>

  )
}

export default InputValue