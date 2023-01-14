import logo from './logo.svg';
import './App.css';
import Table from './component/table/table';
import { useRef, useState } from 'react';

function App() {

  const [data , setData] = useState([])
  const [dataForCurrentPage , setDataForCurrentPage] = useState([])
  const [currentPage , setCurrentPage] = useState(0)
  const [lastPage , setLastPage] = useState('')


  async function getData (){
      const data = await fetch('https://jsonplaceholder.typicode.com/posts/')
      const responseData = await data.json() || []
      setData(responseData)
      setDataForCurrentPage(responseData.slice(0,5))
      setLastPage(Math.ceil(responseData.length/5))
  }

  function changeDataPerPage (pageToDirect) {

    let dataReqForPageNo = currentPage + 1 

    if(pageToDirect === 'backPage'){
      if(currentPage === 0){
        alert('Please click Next to see more data !!')
        return
      }
      dataReqForPageNo = currentPage - 1 

    }
    if(dataReqForPageNo === lastPage){
      alert('No more data to show !!')
      return
    }
    setCurrentPage(dataReqForPageNo)
    const startIndex = dataReqForPageNo*5
    const dataToSetNext = data.slice(startIndex ,startIndex+5 )
    setDataForCurrentPage(dataToSetNext)
  }
  return (
    <div className="App">
      <button 
        className='buttonStyle'
        onClick={getData}>
          Fetch Data
      </button>
      <Table
        tabledata = {
          dataForCurrentPage
        }
        handleClickButton = {
          changeDataPerPage
        }/>
    </div>
  );
}

export default App;
