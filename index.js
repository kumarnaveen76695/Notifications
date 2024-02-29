const Notification = props => {
  return (
    <li className={`${props.className}`}>
      <img src={`${props.image}`} alt='image' />
      <p>{props.message}</p>
    </li>
  )
  //  Write your code here.
}

const element = (
  //  Write your code here.

  <div>
    <h1>Notifications</h1>
    <ul>
      <Notification
        className='box1'
        image='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        meassage='information meassage'
      />

      <Notification
        className='box2'
        image='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        meassage='success meassage'
      />

      <Notification
        className='box3'
        image='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        meassage='warning meassage'
      />

      <Notification
        className='box4'
        image='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        meassage='danger meassage'
      />
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
