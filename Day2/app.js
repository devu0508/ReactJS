
// const element = React.createElement('h1',{id:'title'},"Hello Baccho");

//JSX: Javascript XML: Look like HTML(babel)
//JSX-->React.createElement()
const element = <h1 id="title">Hello Coders</h1>;
const element2 = <div>
    <h1>Hey</h1>
    <h2>How are you?</h2>
</div>

const root =ReactDOM.createRoot(document.getElementById('root'))



root.render(element2);