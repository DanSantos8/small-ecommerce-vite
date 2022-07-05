import { useParams } from "react-router-dom"
import { Template } from "../components/Template"

export default function Details() {
  let { slug } = useParams()

  return (
    <Template>
      <span>{slug}</span>
    </Template>
  )
}
