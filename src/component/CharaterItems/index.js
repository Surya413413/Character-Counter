const CharaterItems = props => {
  const {details} = props
  const {name, id} = details
  return (
    <li className="listContainer">
      <p className="listContainer">
        {name}: {name.length}
      </p>
    </li>
  )
}
export default CharaterItems
