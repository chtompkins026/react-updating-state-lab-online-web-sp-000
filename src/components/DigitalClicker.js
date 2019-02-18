export default class DigitalClicker extends React.Component {
  constructor(){
    super(); 
    
    this.state = {
      timesClicked: 0, 
    }; 
  }
    
  handleClick = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  } 
    
}