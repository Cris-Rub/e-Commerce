import { useState, useEffect } from 'react'

const useForm = (callback, defaultValues) => {
  const [input, setInput] = useState(defaultValues)

  useEffect(() => {
    setInput({ ...defaultValues })
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    callback(input)
  }
  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
