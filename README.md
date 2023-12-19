## useState와 useEffect 활용

리액트 훅(Hook)은 시작하고 종료될 때 코드의 상태와 기능에 리액트 기능을 추가적으로 사용할 수 있게 해줌\

Hook 종류 \
    1. useState : 초기 상태값과 그 값을 갱신하거나 추가로 변경되는 내용을 저장 후 반환\
    
    2.useEffect: 데이터를 가져오거나 설정해주거나 자동으로 새로고쳐지면서 새로 추가된 코드나 저장된 내용이 반영될때마다 \
                새로고침이 되고나서 특정 작업이 수행될 수 있도록 함(데이터 가져오기, 반영해야할 설정)\
   
    3.useReducer : 복잡한 상태 로직을 간소화하고 관리하기위해 사용\
    
## todo List를 만들며 알게된 점
map 배열 객체 메서드\
배열의 각 요소에서 함수를 호출하고, 그 함수의 반환값으로 \
새로운 배열을 생성\

/*예제코드 :\
  const newArray = array.map((value,index,array) => {});\
  value : 현재 배열 안에 있는 배열의 요소\
  index : 배열 안에있는 자리값 \
  array : 배열의 원본\
  반환값{} : 새로운 배열에서 해당하는 인덱스에 들어갈 값\
  */

  {todos.map((todo,index) => ( //todos = 빈 배열 공간, todo를 index=자리값마다 넣겠다. \
    //key={index} map 함수로 요소를 생성할 때 각 요소에 고유한 key값을 지정\
    //react  각 값에 대한 번호를 부여함으로써 목록을 부여된 번호로 추적하기위해 사용됨\
    <li key={index}>\
    {todo}\
    <button onClick={()=>removeTodo(index)}>삭제하기</button>\
    </li>\
  ))}\
  array.map((요소, 자리값, 만약 새로운 배열이 필요하다면 배열 값 넣어줌)=> {\
    //리턴값으로 새로운 배열을 구성 \
  })
  