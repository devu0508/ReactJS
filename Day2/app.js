
// const element = React.createElement('h1',{id:'title'},"Hello Baccho");

//JSX: Javascript XML: Look like HTML(babel)
//JSX-->React.createElement()
// const element = <h1 id="title" className="first">Hello Coders</h1>;
//We use className in jsx and use class only in html which tells it is diffrent from html.

//React Element
// const element2 = (<div>
//     <h1>Hey</h1>
//     <h2>How are you?</h2>
// </div>);   //Good habit to use () in jsx code from start to end cover it in braces(not compoulsary)

//React Component

// function App(){
//     return(
//         <h1>Hello Coders</h1>
//     )
// }

// function App(name){
//     return(
//         <h1>Hello Master {name} {10+20}</h1>
//     )
// }

// const a = App("Divyansh");

//text/element:javascript ka expression aap iske andar likh skte hai
//Number,String,True False,null,undefined,array,object

//Number,string,array,element
//Object: Error dega
//true,false,null,undefined(render honge but kuch display nhi hoga)

// const age = 18;
// const isLoggedIn = false;
// const element = <h1>Hello Coder Army {10} {"Devu"} {[20,40,50]}</h1>
// const element = <h1>Hello Coder {age>18?"Adult":"Kid"}</h1>
// const element = <h1>Hello Coder {isLoggedIn?<h2>Yes,Logged in</h2>:<h2>Kindlly SignIn</h2>}</h1>


// COMPONENTS

// //[<li>HTML</li>,<li>CSS</li>,<li>Javascript</li>]
// const element = (
// <ul>
//     {[<li>HTML</li>,<li>CSS</li>,<li>Javascript</li>]}
// </ul>)

// const element = (
// <ul>
//     {courses.map(course=><li>{course}</li>)}
// </ul>)


// PROPS

// const ab = {backgroundColor:"orange", color:"white"}
// const element = <h1 id="title" className="first" style={ab}>Hello Coder Army</h1>

// function App(props){

//     return (
//         <h1>Hello Nallo{props.name} {props.age}</h1>
//     )
// }

// const element = <App name="Raghu" age={30}></App>


function Header({name}){
    return(
        <h1>{name} Welcome to Indian Election Commision</h1>
    )
}

function Main(){
    return(
        <h2>This is information about us</h2>
    )
}

function Footer(){
    return(
        <h3>Thanks for visiting our website</h3>
    )
}

function App(){

    return(
        <>
          <Header name="Rohit"></Header>
          <Main></Main>
          <Footer></Footer>
        </>
    )
}

const root =ReactDOM.createRoot(document.getElementById('root'))

// root.render(element);
// root.render(element2);
// root.render(App()); //One more way to call 
 root.render(<App/>);
// root.render(a);





