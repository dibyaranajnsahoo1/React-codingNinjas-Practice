/**REACT */

// const reactHeading = React.createElement("h1",{className : "head", id:"hesdId", children:"Hello React"});
// console.log("react Element", reactHeading)
// console.log("gdgdgd")

// const jsx = <React.Fragment>
//               <h1>Hello JSX</h1>
//               <p>ghjsvbhsabdasDJJSJKVDSJKDSJBNK</p>
//            </React.Fragment>


function Name(){
    return(
        <>
        <p>JSX is javascript  XML</p>


        </>
    )
}


function  App() {

    return(
        <>
        <h1>Hello JSX</h1>
        <p>ghjsvbhsabdasDJJSJKVDSJKDSJBNK</p>
     </>

    )
    
}

 ReactDOM.createRoot(document.getElementById("root")).render(<><App/><Name/></>);






 