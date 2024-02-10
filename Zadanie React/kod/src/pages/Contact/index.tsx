import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import { useState } from "react";
import './contact.scss'

export default function Contact() {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [topic, setTopic] = useState<string>('')
  const [messageContent, setMessageContent] = useState<string>('')

  const [isSended, setIsSended] = useState<boolean>(false)

  const handleSubmit = () => {
    console.log(`Imie: ${name}, Email: ${email}, Temat: ${topic}, Treść wiadomości: ${messageContent},`)
    setIsSended(true)
  }

  return (
    <Container>
      <Heading level={1} content="Skontaktuj się z nami"/>
      {!isSended ? (
        <form className="form">
          <input className="input" type="text" name="name" placeholder="Imie" value={name} onChange={(e) => setName(e.target.value)}/>
          <input className="input" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input className="input" type="text" name="topic" placeholder="Temat" value={topic} onChange={(e) => setTopic(e.target.value)}/>
          <textarea className="input" name="messageContent" placeholder="Podaj treść swojej wiadomości" value={messageContent} onChange={(e) => setMessageContent(e.target.value)}/>
          <Button text="Wyślij wiadomość" onClick={handleSubmit}></Button>
        </form>
      ): (
        <div className="finalMessage">Dziękujemy za wysłanie wiadomości</div>
      )}
    </Container>
  );
}