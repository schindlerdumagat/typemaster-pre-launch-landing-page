import Button from "components/buttons/Button"
import H1 from "components/typography/H1"
import H2 from "components/typography/H2"
import H3 from "components/typography/H3"
import P from "components/typography/P"

function App() {

  return (
    <div className="w-1/5">
      <H1>Typemaster
      Keyboard</H1>
      <H2>Hello World</H2>
      <H3>Hello World</H3>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore illum dolore id fugit minus odio nesciunt, perspiciatis fuga iure libero necessitatibus temporibus ullam excepturi repudiandae reiciendis in facere velit!</P>
      <Button className="bg-darkorange text-white hover:bg-lightorange">PRE-ORDER NOW</Button>
      <Button className="bg-verylightblue text-darkblue hover:bg-darkblue hover:text-white">PRE-ORDER NOW</Button>
      <Button className="bg-transparent text-lightgray hover:text-darkblue">PRE-ORDER NOW</Button>
    </div>
  )
}

export default App
