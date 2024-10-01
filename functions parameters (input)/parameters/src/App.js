import logo from './logo.svg';
import './App.css';
import TenthMarksSheet from './components/TenthMarksSheet';

function App() {

   let calculategouthamiResult = ()=>{
let engMarks = 97;
let telMarks = 96;
let hinMarks = 95;
let sciMarks = 94;
let socMarks = 93;
let matMarks = 92;


let passMarks = 35;

if(engMarks >= passMarks &&
  telMarks >= passMarks &&
  hinMarks >= passMarks &&
  sciMarks >= passMarks &&
  socMarks >= passMarks &&
  matMarks >= passMarks 


){

  console.log(`Gouthami pass in tenth`);


}else{
  console.log(`Gouthami fail in tenth`);

}
  };



  let calculatenaveenResult = ()=>{
    let engMarks = 87;
    let telMarks = 86;
    let hinMarks = 85;
    let sciMarks = 84;
    let socMarks = 83;
    let matMarks = 82;
    
    
    let passMarks = 35;
    
    if(engMarks >= passMarks &&
      telMarks >= passMarks &&
      hinMarks >= passMarks &&
      sciMarks >= passMarks &&
      socMarks >= passMarks &&
      matMarks >= passMarks 
    
    
    ){
    
      console.log(`naveen pass in tenth`);
    
    
    }else{
      console.log(`naveen fail in tenth`);
    
    }
      };
   
      calculategouthamiResult();
      calculatenaveenResult();


     let calculatestudentResult = (engMarks,
      telMarks,
      hinMarks,
      sciMarks,
      socMarks,
      matMarks,
      studentName
    )=>{
        let passMarks = 35;

if(engMarks >= passMarks &&
  telMarks >= passMarks &&
  hinMarks >= passMarks &&
  sciMarks >= passMarks &&
  socMarks >= passMarks &&
  matMarks >= passMarks 


){

  console.log(`${studentName} pass in tenth`);


}else{
  console.log(`${studentName} fail in tenth`);

}
  };



  calculatestudentResult(20,30,40,50,60,70,"srikanth");

  calculatestudentResult(44,55,66,77,66,77,"chintu");

  calculatestudentResult(94,85,76,67,56,87,"thara");

  return (
    <div className="App">
      <h1>learning functions with parameters</h1>
      <TenthMarksSheet></TenthMarksSheet>
    </div>
  );
}

export default App;
