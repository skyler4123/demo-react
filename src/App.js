import { Route, Routes } from "react-router-dom"
import Todo from "./components/Todo.js"

export default function App() {
  const name = "Skyler"
  const age = 18
  const isMale = true
  const student = {
    name: "Easy FE"
  }
  const colorList = ['red', 'yellow', 'pink']
  return (
    <>
      <Routes>
        <Route path="/todo" component={Todo} />
      </Routes>
    </>
  )
}