import parse from 'html-react-parser';

export default function Parser(props) {
  return (
    props.content && parse(props.content)
  )
}