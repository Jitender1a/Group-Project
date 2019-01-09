import React, { Component } from 'react'

export default function WithScroll(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll, true);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = (e) => {
      let navbar = document.querySelector('#navbar')
      
      if(e.target.scrollTop || e.target.scrollTop === 0) {
          if (e.target.scrollTop <= 75) {
              navbar.className = ''
            } else {
                navbar.className = 'scroll'
            }
        }
        else {
            if (e.target.scrollingElement.scrollTop <= 100) {
                navbar.className = ''
            } else {
                navbar.className = 'scroll'
            }
        }
    }
    
    render() {
      let navbar = document.querySelector('#navbar')

        console.log(navbar)
        return <WrappedComponent {...this.props} />
    }
  }
}
