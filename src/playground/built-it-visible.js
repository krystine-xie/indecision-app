class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      visibility: false
    }
  }

  toggleSwitch() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleSwitch}>
          {this.state.visibility ? 'Hide Detail' : 'Show Detail'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some of the details you can now see!</p>
          </div>
        )
        }
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


// const toggleSwitch = () => {
//     visibility = !visibility;
//     renderToggle();
// }

// let surpriseText = "Hey. Here are the details you should see!";

// let visibility = false;
// const appRoot = document.getElementById('app');

// const renderToggle = () => {
//     const visibilityTemplate = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleSwitch} id="toggle">
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(visibilityTemplate, appRoot); 
// }; 

// renderToggle();