import React from 'react';
import axios from "axios";
  // const getHeroes = () => {
  //   fetch("http://127.0.0.1:8000/heroes/?format=json")
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res.data.content)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // } 

const api = axios.create({
  baseUrl: 'http://127.0.0.1:8000/heroes/'
})


const Home = () => {

  state -{
    courses: []
  }

  constructor(){
    super();
    this.getCourse();
  }

  getCourse = async () =>{
    let data = await api.get('/').then(({data}) =>
    data);
      this.setState({courses: data})
    }
  
  
  createCourse = async () => {
   let res = await api.post('/', {title: "name", description: "alias"})
   console.log(res)
   this.getCourse();
  }
  return (
    <body>
      {this.state.courses.map(course => <h2 key={courses.id}>{courses.title} </h2> )}
    <div class="bg">
      <div className="Table">
        <table align ="center">
          <tr>
            <th>No. </th>
            <th>Name </th>
            <th>Alias </th>
          </tr>
          <tr>
            <td>1. </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>2. </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>3. </td>
            <td> </td>
            <td> </td>
          </tr>
          
        </table>
      </div>

    </div>
    <button onClick={}>get Heroes</button>
    </body>
  );
}

export default Home;







{/* this is for fetching the data but still don't know how to do it :V  */}
      {/* function Datafetching(){
        const [data, setData] = useState([])

        useEffect(() => {
          axios.get('http://localhost:8080/heroes')
            .then(res => {
              console.log(res)
            })
            .catch(err => {
              console.log(err)
            })
        })
        return (
          <div>
            post.map(post => <li key={post.id}>{post.title}</li>)
          </div>
        )
      } */}