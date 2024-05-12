const Box = props => {
  //  Write your code here.
  const {className, boxText} = props
  return <div className={className}>{boxText}</div>
}

const element = (
  //  Write your code here.
  <div className='boxes-app-container'>
    <h1 className='title'>Boxes</h1>
    <div className='boxes-container'>
      <Box className='small-box' boxText='Small' />
      <Box className='medium-box' boxText='Medium' />
      <Box className='large-box' boxText='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
