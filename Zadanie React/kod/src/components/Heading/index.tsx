import { createElement } from "react"

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6,
  content: string
}

export default function Heading({level = 2, content}: HeadingProps) {
  const headingType = 'h' + level
  return createElement(headingType, {}, content)

}