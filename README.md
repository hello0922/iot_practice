# Internet of Things

## 2020-11-29
homework 제출을 위한 repository를 생성함.

### 1-1
변수 선언에 대한 예제이므로, 실행결과는 아무 것도 출력되지 않는다.

### 1-2
![result 1-2](./hw1/1/result_img/1-2.png)

변수 선언 후 값 할당, 변수 재선언.

### 1-3
![result 1-3](./hw1/1/result_img/1-3.png)

변수 여러개를 선언 후 값을 변경하는 예제. 문자열은 덧셈연산자를 사용할 경우, concat 함수와 동일한 결과를 출력한다.

### 1-4
![result 1-4](./hw1/1/result_img/1-4.png)

Object를 생성하여, 내부의 멤버에 데이터를 할당하는 예제.

### 1-5
![result 1-5](./hw1/1/result_img/1-5.png)

Object를 생성하고, 내부의 멤버변수의 값을 변경하는 예제.

### 1-6
![result 1-6](./hw1/1/result_img/1-6.png)

Object의 멤버값으로 배열을 생성하는 예제.

### 1-7
![result 1-7](./hw1/1/result_img/1-7.png)

변수와 Object를 각각 생성하고 값을 할당한 후 다른 변수/Object에 해당 값을 복사하는 예제.

### 1-8
![result 1-8](./hw1/1/result_img/1-8.png)

변수와 Object를 각각 생성/복사하고 값을 변경하는 예제.
일반 변수 a,b는 같은 상수 메모리를 가리키기 때문에, b가 변해도 a의 값은 변하지 않지만, 일어나지만, Object의 경우, reference memory에 대한 메모리를 가리키기 때문에 obj2의 값이 변경되면 obj1의 값도 함께 변경된다.

### 1-9
![result 1-9](./hw1/1/result_img/1-9.png)

변수와 Object를 각각 생성/복사하고 값을 변경하는 예제.
예제 1-8과는 달리, 새로운 object를 생성하면서 값을 할당하였기 때문에 obj2와 obj1은 다른 메모리를 가리키게 되어 같은 값을 갖지 않는다.

### 1-10
![result 1-10](./hw1/1/result_img/1-10.png)

Object를 인자로 받아들여, name에 대한 값을 변경하는 예제.
1-8과 같이 같은 메모리를 가리키게 만든 후 값을 변경하였기 때문에, user와 user2의 값이 같아진다.

### 1-11
![result 1-11](./hw1/1/result_img/1-11.png)

Object를 인자로 받아들여, name에 대한 값을 변경하는 예제.
1-9과 같이 같은 메모리를 생성한 후 값을 리턴하였기 때문에, user와 user2가 다른 메모리를 가리켜 값도 달라진다.

### 1-12
Object를 인자로 받아들여, 내부의 모든 멤버변수를 copy하는 함수를 선언, (사용은 1-13에 나오므로 실행결과 생략.)

### 1-13
![result 1-13](hw1/1/result_img/1-13.png)

1-12의 함수를 사용하는 예제,
내부의 모든 멤버변수를 따로 copy하기 때문에, 가리기는 메모리가 달라져 값도 다르다.

### 1-14
![result 1-14](hw1/1/result_img/1-14.png)

Object를 복사하고, 변경하며 같은지 비교하는 예제.

### 1-15
![result 1-15](hw1/1/result_img/1-15.png)

Object를 복사하고, 변경하며 같은지 비교하는 예제.
Object안에 또 Object가 있기 때문에, copyObject를 2번함.

### 1-16
Object안에 또 다른 Object가 있을 경우 recursive call로 모두 복사하는 함수를 정의하는 예제.

### 1-17
![result 1-17](hw1/1/result_img/1-17.png)

예제 16의 함수를 사용하는 예제, 이를 응용하여, object 내부의 모든 필드를 출력하는 함수를 구현해보았습니다.

### 1-18
![result 1-18](hw1/1/result_img/1-18.png)

JSON 모듈을 사용하여 오브젝트를 복사하는 예제, 이를 활용하여 오브젝트를 print하는 예제를 구현.

### 1-19
![result 1-19](hw1/1/result_img/1-19.png)

undefined 값을 출력해보는 예제.

### 1-20
![result 1-20](hw1/1/result_img/1-20.png)

![result 1-20-1](hw1/1/result_img/1-20(1).png)

empty array와 undefined array를 출력해보는 예제
debugger for chrome으로 실행하지 않으면 console이 제대로 출력되지 않음.

### 1-21
![result 1-21](hw1/1/result_img/1-21.png)

object의 요소를 사용하여 함수를 정의하고 바로 실행하는 예제

### 1-22
![result 1-22](hw1/1/result_img/1-22.png)

변수의 타입을 확인하고, ==와 ===의 차이를 확인하는 예제.

### 2-1
![result 2-1](hw1/2/result_img/2-1.png)

inner function 과 outer function 사이의 변수의 life cycle을 확인하는 예제.

### 2-2
![result 2-2](hw1/2/result_img/2-2.png)

함수의 paramter와 함수 내부의 변수이름이 같은 경우의 동작방식에 대한 예제.

### 2-3
![result 2-3](hw1/2/result_img/2-3.png)

함수 내부에서 변숙를 여러번 정의할때의 동작방식에 대한 예제.

### 2-4
![result 2-4](hw1/2/result_img/2-4.png)

함수내부에서 x를 여러번 선언한 뒤, 값을 대입할 때의 동작방식에 대한 예제.

### 2-5
![result 2-5](hw1/2/result_img/2-5.png)

변수와 함수의 이름이 같을 때 동작과정에 대한 예제

### 2-6
![result 2-6](hw1/2/result_img/2-6.png)

변수와 함수의 이름이 같을 때 출력 후, b에 문자열 값을 저장하였을 때 동작과정에 대한 예제

### 2-7
![result 2-7](hw1/2/result_img/2-7.png)

이전 예제에서, 함수를 변수형으로 선언하여 저장한 뒤 출력해보는 예제

### 2-8
![result 2-8](hw1/2/result_img/2-8.png)

함수d를 선언하며 바로 변수 c에 담을 경우, d는 nodejs가 인식하지 못해 에러를 출력함.

### 2-9
![result 2-9](hw1/2/result_img/2-9.png)

함수표현식 변수가 사용보다 뒤에 정의되어, 에러가 발생.

### 2-10
![result 2-10](hw1/2/result_img/2-10.png)

multiply 사용 당시에는 변수만 선언되어 있기에 function이 아니라고 인식하여 에러 발생.

### 2-11
![result 2-11](hw1/2/result_img/2-11.png)

출력문은 마지막 함수를 따라가서 출력됨.

### 2-12
![result 2-12](hw1/2/result_img/2-12.png)

이전 예제와 달리, 함수가 변수 할당이기 때문에, 인식을 하지 못해 에러가 발생함.

### 2-13
![result 2-13](hw1/2/result_img/2-13.png)

inner function과 outer function의 global 변수 사용 차이에 대한 예제.

### 2-14
![result 2-14](hw1/2/result_img/2-14.png)

스코프 체인을 사용하였을 때의 동작과정에 대한 예제.

### 2-15
![result 2-15](hw1/2/result_img/2-15.png)

스코프 체인을 사용하였을 때의 동작과정에 대한 예제. inner function에서 외부의 변수를 사용하였을 때.

### 2-16
![result 2-16](hw1/2/result_img/2-16.png)

스코프 체인을 사용하였을 때의 동작과정에 대한 예제. inner function에서 외부의 변수를 사용하였을 때2.

### 3-1
![result 3-1](hw1/3/result_img/3-1.png)

전연 공간에서 this와 window의 비교.

### 3-2
![result 3-2](hw1/3/result_img/3-2.png)

전연 공간에서 this와 global의 비교. 윈도우 크롬에서는 전역공간에서 global을 인식하지 못한다.

### 3-3
![result 3-3](hw1/3/result_img/3-3.png)

전역공간에서의 변수 접근에 대한 예제. 전역공간이기 때문에 a, window.a, this.a 모두 같은 값을 출력한다.

### 3-4
![result 3-4](hw1/3/result_img/3-4.png)

전역공간에서 변수 변경에 대한 예제. 모두 같은 공간을 가리키므로, 같은 값을 출력함.

### 3-5
![result 3-5](hw1/3/result_img/3-5.png)

전역변수로 선언할 경우 삭제가 불가하지만, 전역객체 (window.c 혹은 d)로 선언할 경우 삭제가 가능함.

### 3-6
![result 3-6](hw1/3/result_img/3-6.png)

전역공간에서 함수를 사용할 경우 this는 window가 되지만, object의 멤버로 활용될 경우, this는 멤버의 이름이 됨.

### 3-7
![result 3-7](hw1/3/result_img/3-7.png)

object의 함수를 호출할 때 점(.) 이나 문자열을 포함한 대괄호로 접근하면 method로 호출됨.

### 3-8
![result 3-8](hw1/3/result_img/3-8.png)

object의 함수를 호출할 때 점(.) 이나 문자열을 포함한 대괄호로 접근하면 method로 호출됨. (inner member추가)

### 3-9
![result 3-9](hw1/3/result_img/3-9.png)

내부에서 함수의 호출 (innerFunc())로 호출할 경우 this는 호출한 객체를 명시하지 않아, window를 출력함.

### 3-10
![result 3-10](hw1/3/result_img/3-10.png)

함수정의 전, self에 this을 연결시켜 주었기 때문에, 객체를 명시하였으므로, window가 아닌 outer를 출력함.

### 3-11
![result 3-11](hw1/3/result_img/3-11.png)

arrow function을 사용하여, this를 그대로 활용 가능

### 3-12
![result 3-12](hw1/3/result_img/3-12.png)

event function을 사용하였을 때의 this 예제.

### 3-13
![result 3-13](hw1/3/result_img/3-13.png)

생성자 내부에서의 this에 대한 예제. 생성자로 호출될 경우, 할당하는 객체를 this로 가리킴

### 3-14
![result 3-14](hw1/3/result_img/3-14.png)

call method를 사용하여, this를 지정하여 넘김

### 3-15
![result 3-15](hw1/3/result_img/3-15.png)

call method를 사용하여, this를 지정하였을 때의 차이에 대한 예제, call에서 a를 지정하면 a의 값이 지정된 값으로 출력됨.

### 3-16
![result 3-16](hw1/3/result_img/3-16.png)

apply 메소드를 사용에 대한 예제. parameter를 배열로 넘김.

### 3-17
![result 3-17](hw1/3/result_img/3-17.png)

유사 배열에 push하는 예제.

### 3-18
![result 3-18](hw1/3/result_img/3-18.png)

![result 3-18-1](hw1/3/result_img/3-18(1).png)

유사배열을 잘라서 출력하는 예제

### 3-19
![result 3-19](hw1/3/result_img/3-19.png)

문자열의 경우 length가 read only property이기 때문에 에러가 발생, push를 주석처리 하고 실행할 경우,  concat은 정상적으로 동작함

### 3-20
![result 3-20](hw1/3/result_img/3-20.png)

from method를 사용하는 예제.

### 3-21
생성자 내부에서 다른 생성자를 호출하는 예제.

### 3-22
![result 3-22](hw1/3/result_img/3-22.png)

min과 max를 구하는 기본예제

### 3-23
![result 3-23](hw1/3/result_img/3-23.png)

apply를 사용하여, Math.max 메소드에 여러 인자를 배열로 묶어 전달하는 예제.

### 3-24
![result 3-24](hw1/3/result_img/3-24.png)

spread operator를 사용하여 Math.max와 min 메소드에 배열을 인자로 전달하는 예제.

### 3-25
![result 3-25](hw1/3/result_img/3-25.png)

bind 메소드를 활용하는 예제. 함수를 바로 호출하지 않고, this와 매개변수를 전달받아 새로운 함수로 복사하여 넘긴다.

### 3-26
![result 3-26](hw1/3/result_img/3-26.png)

bind 메소드 사용시의 name 프로퍼티 변경에 대한 예제. 원래의 name 프로퍼티는 함수변수의 이름이었지만, bind를 하였을 경우 name은 원래 함수의 이름의 앞에 bound가 붙는다.

### 3-27
![result 3-27](hw1/3/result_img/3-27.png)

![result 3-27-1](hw1/3/result_img/3-27(1).png)

inner function에 상위의 this를 넘겨주는 예제, call 메소드의 인자로 this를 넘겨주는 방식과, inner function을 정의할 때 bind를 활용하는 방법이 있다.

### 3-28
![result 3-28](hw1/3/result_img/3-28.png)

callback function에서 bind를 사용하여 this를 변경시키는 예제.

### 3-29
![result 3-29](hw1/3/result_img/3-29.png)

arrow function을 사용하여, 스코프체인상 가장 가까운 this를 활용하는 예제.

### 3-30
![result 3-30](hw1/3/result_img/3-30.png)

Object의 method argument를 활용하여 합, 개수, 평균을 구하는 예제 메소드의 인자로 자신의 요소를 활용하는 thisArg를 활용.
average는 평균을 구하는 메소드로 되어있어, 변수를 생성하여 add 시에 average도 구하도록 변경하여봄.

### 4-1
![result 4-1](hw2/4/result_img/4-1.png)

setInterval callback function을 호출하며, callback function의 수행내용을 바로 정의함. 300ms마다 count를 호출하여 증가시키며, count가 5가되면 clearInterval을 call해서 timer를 멈춘다.

### 4-2
![result 4-2](hw2/4/result_img/4-2.png)

setInterval callback function을 호출하며, callback function의 수행내용을 바로 정의하는 이전 예제와 달리, 함수를 미리 정의해두고 setInterval function의 인자로 넘긴다. 수행내용은 이전과 같다.

### 4-3
![result 4-3](hw2/4/result_img/4-3.png)

Array의 map을 호출하여, array의 각 요소를 순회하며, 값과 인덱스를 출력하고 각 값을 5씩 더한다. console.log로 출력결과 선언의 값보다 모두 5씩 증가되어 있는 것을 확인할 수 있다.

### 4-4
![result 4-4](hw2/4/result_img/4-4.png)

Array의 map을 호출할 때 인자의 순서 (index, currentValue)의 순서를 변경해보는 예제. callback function의 경우 순서대로 값이 전달되므로 이름과 관계없이, index가 0,1,2가 되고, currentValue가 0, 1, 2가 된다. 또한 currentValue를 5로 증가시켰기 때문에, console.log의 값은 5, 6, 7 (0, 1, 2에서 5씩 증가)이 된다.

### 4-5
![result 4-5](hw2/4/result_img/4-5.png)

Array.prototype.map을 정의하는 예제. 예제에 test function을 추가하여 수행결과를 출력. callback function의 this를 지정할 수 있다.

### 4-6
![result 4-6](hw2/4/result_img/4-6.png)

여러 상황에서의 this에 대한 예제. setTimeout의 callback function의 경우 전역객체를 출력하며, forEach 메소드의 경우 this를 지정해주지 않았기 때문에, 마찬가지로 전역객체를 출력하며, addEventListener의 경우 그 앞의 객체인 button#a를 this로 출력함.

### 4-7
![result 4-7](hw2/4/result_img/4-7.png)

객체의 메소드로 함수를 호출할 때와, 함수의 임자로 객체의 메소드를 전달했을 때의 this 출력차이. forEach는 객체를 따로 지정해주지 않을경우 함수이기에 window가 출력됨.

### 4-8
![result 4-8](hw2/4/result_img/4-8.png)

callback function에 객체의 메소드를 전달할 때 this는 전역객체인 window가 출력됨. 이에 this를 지정하기 위해 method에 self를 선언하고 이를 객체의 this로 매핑시켜, self에 접근하면, window가 아닌 객체 obj1에 접근할 수 있음.

### 4-9
![result 4-9](hw2/4/result_img/4-9.png)

메소드 안에 self를 사용하지 않고, 해당 객체에 접근하여 출력하는 방식. this를 활용하지 않으므로, 활용이 어렵다.

### 4-10
![result 4-10](hw2/4/result_img/4-10.png)

이전 예제와 마찬가지로, obj1.name을 출력하기 때문에 call을 활용하여 객체를 바꾸어도, name으로 obj1이 출력된다.

### 4-11
![result 4-11](hw2/4/result_img/4-11.png)

callback function의 인자로 메소드를 넘길 때, bind를 사용하여 this 객체를 지정하는 방법으로, this를 활용 가능하다.

### 4-12
![result 4-12](hw2/4/result_img/4-12.png)

callback function 내부에 또 callback function을 사용하며, 인자로 name을 건네받아, string concat을 수행하는 예제.

### 4-13
![result 4-13](hw2/4/result_img/4-13.png)

함수의 변수를 사용하여, 가독성을 높인 코드, 수행내용과 출력결과는 예제 4-12과 같다.

### 4-14
![result 4-14](hw2/4/result_img/4-14.png)

Promise를 사용하여, 동기적 표현으로 callback function을 정의하는 예제.

### 4-15
![result 4-15](hw2/4/result_img/4-15.png)

Promise를 함수 내부에 구현하여, 코드를 간략화 시키는 예제.

### 4-16
![result 4-16](hw2/4/result_img/4-16.png)

Generator를 사용하는 예제. yield를 만나면, 해당 함수의 callback function이 끝가지 전까지, 멈추어있음.

### 4-17
![result 4-17](hw2/4/result_img/4-17.png)

async와 await 을 사용하여, 비동기 작업을 수행. await이 쓰여진 코드는 수행 후 resolve되어야 다음 코드가 진행됨.

### 5-1
![result 5-1](hw2/5/result_img/5-1.png)

inner function에서 outer function의 변수에 접근하는 예제.

### 5-2
![result 5-2](hw2/5/result_img/5-2.png)

inner function에서 outer function의 값을 증가시키고 return하는 예제.