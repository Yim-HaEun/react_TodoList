import React,{useEffect,useState,useCallback} from 'react';
import './css/App.css';
import xmas from './img/Xmas.jpg';
const App = () =>{
  //위의 const App() =>{ 은 function App() {과 같음  //todos는 할일 목록들을 저장하는 공간 / newTodo는 새로운 할 일을 추가 작성할 수 있는 공간
    const[todos, setTodos] = useState([]); //todos 초기값을 빈 배열로 생성하겠다는 의미
    const[newTodo, setNewTodo]=useState('');
    const[count, setCount] = useState(0);
    const[editingIndex, setEditingIndex] = useState(null);
    const[editTodo, setEditTodo] = useState('');

    const addTodo = () =>{//할일이 추가될 때마다 추가할 수 있는 const 생성
      if(newTodo.trim() !==''){

        setTodos([...todos, newTodo]); //현재 입력되어있는  할 일 목록 배열인 todos를 복사해서 복사한 todos에 새로운 할일인 newTodo를 배열에 추가한 후 
        //할일 목록 설정에 newTodo가 추가된 목록으로 최종 설정해주기위한 setTodos

        //저장된 할일 목록을 초기화 시켜주기위해 setNewTodo를 초기화 시켜줌
        setNewTodo('');
        setCount((count) => count +1);
        };
      }
    
    //할일을 삭제할 때마다 삭제할 수 있는 const 생성
    const removeTodo = (index) => {
      //현재 할일의 목록 배열을 복사 ...
      const updateTodos = [...todos];
      //복사된 배열에서 지정된 자리값(index)를 한개 제거하겠다는 의미
      //updateTodos = 복사된 배열
      //slice : 배열에서 일부분 복사해서 새로운 배열 반환, 원본에 있던 배열은 변경되지않지만 시작-종료 인덱스
      //splice: 둘다 배열을 조작하는데 사용 / 배열의 내용을 수정하거나 삭제하고 필요에따라 새로운 요소를 추가할 수 있음
      updateTodos.splice(index,1);
      //내가 제거하고싶은 할 일을 제거한 후 setTodos를 활용해서 할일 목록을 재설정
      setTodos(updateTodos);
      setCount((count) => count -1);
    };

    const startEditing = (index, todo) => {
      setEditingIndex(index);
      setEditTodo(todo);
    };
    const saveEdit =() => {
      const updateTodos = [...todos];
      updateTodos[editingIndex] = editTodo;
      setTodos(updateTodos);
      setEditingIndex(null);
    };

    const cancelEdit = () => {
      setEditingIndex(null);
      setEditTodo('');
    }

    useEffect(()=> {
      console.log('todos 변경됨 : ',todos);
      document.title = `크리스마스에 할 일은 : ${count}개야`;
    }, [todos,count]);
    return(
      <div>
        <h2> 크리스마스 ToDo List</h2>
        <img src={xmas}/>
        <p> 할 일이 {count} 개 남았습니다.</p>
        <div> {/*Todo List 추가하기 */}
          <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          />
          <button id="add" onClick={addTodo}>Add Todo</button>

          <ul>
            {todos.map((todo, index) => (
              <li id = "size" key={index}>
                {editingIndex === index ? (
                  <div>
                    <input 
                     type="text"
                     value={editTodo}
                     onChange={(e) => setEditTodo(e.target.value)}
                    />
                      
                      <button id = "edit" onClick={saveEdit}>저장</button>
                      <button id = "delete" onClick={cancelEdit}>취소</button>
                    
                  </div>
                ) : (
                <div>
                {todo}
                <button id="edit" onClick={() => startEditing(index, todo)}>edit</button>
                <button id="delete" onClick={() => removeTodo(index)}>delete</button>
                </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

function TodoList(){
  return(
    <div>
      <App/>
    </div>
  )
}

export default TodoList;

//my-app
//map 배열 객체 메서드
//배열의 각 요소에서 함수를 호출하고, 그 함수의 반환값으로 
//새로운 배열을 생성

/*예제코드 :
  const newArray = array.map((value,index,array) => {});
  value : 현재 배열 안에 있는 배열의 요소
  index : 배열 안에있는 자리값 
  array : 배열의 원본
  반환값{} : 새로운 배열에서 해당하는 인덱스에 들어갈 값
 

  {todos.map((todo,index) => ( //todos = 빈 배열 공간, todo를 index=자리값마다 넣겠다. 
    //key={index} map 함수로 요소를 생성할 때 각 요소에 고유한 key값을 지정
    //react  각 값에 대한 번호를 부여함으로써 목록을 부여된 번호로 추적하기위해 사용됨
    <li key={index}>
    {todo}
    <button onClick={()=>removeTodo(index)}>삭제하기</button>
    </li>
  ))}
  array.map((요소, 자리값, 만약 새로운 배열이 필요하다면 배열 값 넣어줌)=> {
    //리턴값으로 새로운 배열을 구성 
  })
  
 */