import './App.css'
import Card from './Components/Card'
function App() {
  const nameArr = ['Coding', 'Work From Home', 'Hiring', 'Design']
  return (
    <>
      <div className='heading bg-white text-black mb-4'>Props Project</div>

      <h2 className='text-center m-auto text-lg mb=2'>First type of iteration</h2>
      <div className='justify-between flex max-[600px]:flex-col'>
        <Card image='https://images.pexels.com/photos/7775636/pexels-photo-7775636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' name='Coding' />
        <Card image='https://images.pexels.com/photos/7775635/pexels-photo-7775635.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' name='Work From Home' />
        <Card image='https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' name='Hiring' />
        <Card image='https://images.pexels.com/photos/5054776/pexels-photo-5054776.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' name='Design' />
      </div>

      <h2 className='text-center text-lg mb-2'>Second type of iteration</h2>
      <div className='justify-between max-[600px]:flex-col flex'>
        {nameArr.map((names, i) => (
          <Card image='https://images.pexels.com/photos/7775636/pexels-photo-7775636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' name={names} key={i} />
        ))}
      </div>

    </>

  )
}

export default App
