import React, {SyntheticEvent, useState} from 'react'

const Contact = () => {

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [topic, setTopic] = useState<"mango" | 'kiwi' | 'stawberry' | "melon" | "watermelon" | string>('mango');
  const [agreement, setAgreement] = useState<boolean>(false)
  const [agreementError, setAgreementError] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messageError, setMessageError] = useState<string>('');
  const [isSended, setIsSended] = useState<boolean>(false)

  function handleSubmit(event: SyntheticEvent) {
    setEmailError('')
    setAgreementError('')
    setMessageError('')

    let flag = true

    if(!email || email.length <= 0) {
      setEmailError('Nie podano email')
      flag = false
      event.preventDefault()
    }

    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      setEmailError('zły email')
      flag = false
      event.preventDefault()
    }

    if(!agreement) {
      setAgreementError('zaakceptuj regulamin')
      flag = false
      event.preventDefault()
    }

    if(!message || message.length < 20) {
      setMessageError('Nie podano wiadomości')
      flag = false
      event.preventDefault()
    }

    if(flag) {
      setIsSended(true)
      console.log(email, topic, agreement, message)
    } 
  }

  return (
    <div>
      <h1>Contact</h1>
      {!isSended ? (
         <form onSubmit={handleSubmit}>
            <label>
              Email: <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            {emailError && <p>{emailError}</p>}
            <label>
              Topic: 
              <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                <option value="mango">Mango</option>
                <option value="kiwi">Kiwi</option>
                <option value="stawberry">Strawberry</option>
                <option value="melon">Melon</option>
                <option value="watermelon">Watermelon</option>
              </select>
            </label>
            <label>
            I ageree to process my personal data <input type='checkbox' checked={agreement} onChange={() => setAgreement(!agreement)}/>
            </label>
            {agreementError && <p>{agreementError}</p>}
            <label>
              Message: <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>
            </label>
            {messageError && <p>{messageError}</p>}
            <input type="submit" value="Send" />
          </form>
      ): (
        <div>Your message has been sent</div>
      )}
     
    </div>
  )
}

export default Contact