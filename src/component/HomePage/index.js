import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharaterItems from '../CharaterItems'
import {
  CustomHomePage,
  CustomLeftSideContainer,
  CustomParaContainerLeft,
  HeadingCount,
  DisplayItemsContainer,
  CustomRightSideContainer,
  HeadingRight,
  CustomImageLeft,
  CustomInputContainer,
  CustomInput,
  CustomButton,
  CustomList,
} from './styledComponent'

class HomePage extends Component {
  state = {count: '', inputValue: '', leftside: []}

  onClickAdd = event => {
    event.preventDefault()
    const {inputValue} = this.state
    const newList = {
      id: uuidv4(),
      name: inputValue,
    }
    this.setState(prevState => ({
      leftside: [...prevState.leftside, newList],
      inputValue: '',
    }))
  }

  onChnageInput = event => {
    this.setState({inputValue: event.target.value})
  }

  renderLeftSide = () => {
    const {leftside} = this.state
    return (
      <CustomLeftSideContainer>
        <CustomParaContainerLeft>
          <HeadingCount>Count the Characters like a Boss...</HeadingCount>
        </CustomParaContainerLeft>
        <DisplayItemsContainer>
          {leftside.length === 0 ? (
            <CustomImageLeft
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <ul>
              {leftside.map(each => (
                <CharaterItems details={each} key={each.id} />
              ))}
            </ul>
          )}
        </DisplayItemsContainer>
      </CustomLeftSideContainer>
    )
  }

  renderRightSide = () => {
    const {inputValue} = this.state
    return (
      <CustomRightSideContainer>
        <div>
          <HeadingRight>Character Counter</HeadingRight>
        </div>
        <CustomInputContainer onSubmit={this.onClickAdd}>
          <CustomInput
            type="text"
            placeholder="Enter the Characters here"
            value={inputValue}
            onChange={this.onChnageInput}
          />
          <CustomButton type="submit">Add</CustomButton>
        </CustomInputContainer>
      </CustomRightSideContainer>
    )
  }

  render() {
    return (
      <CustomHomePage>
        {this.renderLeftSide()}
        {this.renderRightSide()}
      </CustomHomePage>
    )
  }
}
export default HomePage
