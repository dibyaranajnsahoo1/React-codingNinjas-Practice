


function sum(){
    
        let a = 10+5;
        return a;
    
}
const header = (<h1>I am header</h1>)

function  App() {
    var name = "world"
    var age= " 122";
    var demo = "null";
    var undef;
    const bool=true;

    return(
        <>
        {header}
        <h1>Hello {name}</h1>
        <p>Srting: {name}</p>
        <p>Number:{age}</p>
        <p>Demo : {demo}</p>
        <p>undind :{undef}</p>
        <p>boolen : {bool}</p>
        <p>Sum : {sum()}</p>
     </>

    )
    
}

 ReactDOM.createRoot(document.getElementById("root")).render(<App/>);