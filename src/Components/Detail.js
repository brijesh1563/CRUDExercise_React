import React, { Component } from 'react'

class Detail extends Component {

constructor(props) {
    super(props)

    this.state = {
         Username: '',
         Password: '',
         detail: [],
        //  data: []
    }
}

handleUsername = (event) => {
    this.setState({
        Username: event.target.value
    })
}

handlePassword = (event) => {
    this.setState({
        Password: event.target.value
    })
}

// getData = () => {
    
// }

handleSubmit = (event) => {
    event.preventDefault();
   
    let data = {
        Username: this.state.Username,
        Password: this.state.Password
    }

    this.state.detail.push(data);

    this.setState({
       detail: this.state.detail
    })
    console.log(this)
}

deteleDetail = (i) => {
    let details = this.state.detail
    details.splice(i, 1)
    this.setState({
        detail: details
    })
}


updateDetail = (i) => {
let details = this.state.detail[i]
   this.input.value = details.Username
    this.input2.value = details.Password

    this.setState({
        Username: this.input.value,
        Password: this.input2.value
    })

    console.log(this.input.value)
}



    render() {       
        return (
            <div>
<form onSubmit={this.handleSubmit}>
            
            <label>Username : </label> 
            <input type="text" className='unm'  onChange={this.handleUsername} ref={input => this.input = input}></input>

            <label>Password : </label> 
            <input type="text"  onChange={this.handlePassword} ref={input2 => this.input2 = input2}></input>
             <br/>
             <button type="submit" >Submit</button>
             {/* <button type="submit" onClick={() => {this.updDetail()}}>Update</button> */}
         </form>
         <pre>
          {this.state.detail.map((d, i) => 
            <tr key={i}>
                {i+1}
                {this.state.detail[i].Username}
                {this.state.detail[i].Password}
                <button onClick={() => this.updateDetail(i)}>Edit</button>
                <button type="submit" onClick={() => this.deteleDetail(i)}>Delete</button>
            </tr>
          )}
         </pre>
         
            </div>           
        )
    }
}

export default Detail
