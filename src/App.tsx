import { useState } from 'react'
import './App.css'
import Login from './pages/login';
// Voi import khong default thi co the as
import { USER_LOGIN as LOGIN_USER } from './pages/login';
import TableCustom from './pages/table';

function App() {
  const headCells = [
    {
      label: 'Ten',
      key: 'name'
    },
    {
      label: 'Tuoi',
      key: 'age'
    },
    {
      label: 'Dia chi',
      key: 'address'
    },
    {
      label: 'SDT',
      key: 'phone'
    },
  ];
  type Student = {
    name: string;
    age: number;
    address: string;
    phone: string;
  }
  type Students = Student[];
  const [count, setCount] = useState<number>(0)
  const [name, setName] = useState<string>('')
  const [isShowObject, setIsShowObject] = useState<boolean>(true)
  const [nameU, setNameU] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [address, setAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [students, setStudent] = useState<Students>([{
    name: 'tuannda3',
    age: 10,
    address: 'HN',
    phone: '123123123'
  }])
  const submitHandle = () => {
    console.log(12312312)
    setStudent([...students, {
      name: "herro",
      age: 10,
      address: 'HN',
      phone: '123123123'
    }])
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <button type="button" onClick={() => setName("Ahihi")}>Set name to Ahihi</button>
        <p>{name}</p>
        <button onClick={() => setIsShowObject(!isShowObject)}>{isShowObject === true ? "Hide" : "Show"} object</button>
        {
          isShowObject === true ? <div>This is an Object</div>
            : ""
        }
      </header> */}
      <TableCustom rows={students} headCells={headCells} />
      {/* <Login
        viewName={'Login view from APP'}
        username='tuannda3' // voi gia tri la string thi co the k can ngoac
        password='123123123'
      /> */}
      <form action="">
        <input type="text" placeholder='Enter Name' autoComplete="off" onChange={(e) => setNameU(e.target.value)} />
        <input type="number" placeholder='Enter Age' onChange={(e) => setAge(parseInt(e.target.value))} />
        <input type="text" placeholder='Enter address' autoComplete="off" onChange={(e) => setAddress(e.target.value)} />
        <input type="text" placeholder='Enter phone' onChange={(e) => setPhone(e.target.value)} />
        <button type='button' onClick={() => submitHandle()}>Add Student</button>
      </form>
    </div>
  )
}

export default App