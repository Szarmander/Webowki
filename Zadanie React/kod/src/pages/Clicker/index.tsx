import Button from "@/components/Button";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { useState } from "react";

export default function Clicker() {

  const [counter, setCounter] = useState<number>(0)

  return (
    <Container>
      <Heading level={1} content="Poklikaj mnie"/>
      <Paragraph content={`Kliknięto ${counter} razy`}/>
      <Button onClick={() => setCounter(counter + 1)} text="Kliknij mnie"/>
    </Container>
  );
}