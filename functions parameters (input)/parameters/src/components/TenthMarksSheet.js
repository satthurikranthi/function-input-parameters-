import React, { useEffect, useRef } from 'react'

function TenthMarksSheet() {

     let firstNameInputRef = useRef();
     let lastNameInputRef = useRef();
     let engInputRef = useRef();
     let telInputRef = useRef();
     let hindiInputRef = useRef();
     let sciInputRef = useRef();
     let socInputRef = useRef();
     let mathsInputRef = useRef();
     let resultLblRef = useRef();
     let engSpanRef = useRef();
     let telSpanRef = useRef();
     let hindiSpanRef = useRef();
     let sciSpanRef = useRef();
     let socSpanRef = useRef();
     let mathsSpanRef = useRef();



     let calculateResult =()=>{



      let firstName = firstNameInputRef.current.value;
                let lastName = lastNameInputRef.current.value;
                let engMarks = Number(engInputRef.current.value);
                let telMarks = Number(telInputRef.current.value);
                let hindiMarks= Number(hindiInputRef.current.value);
                let sciMarks = Number(sciInputRef.current.value);
                let socMarks = Number(socInputRef.current.value);
                let mathsMarks = Number(mathsInputRef.current.value);


                let  result;


                if(engMarks <35 || telMarks <35  ||   hindiMarks <35  || 
                  sciMarks <35   || socMarks <35 || mathsMarks <35  
                ){

                  result ="fail" ;

                }else{

                  result ="pass" ;

                }


                let totalMarks = engMarks+telMarks+hindiMarks+sciMarks+socMarks+mathsMarks;


               /* alert(
                    `${firstName} ${lastName} got total marks of ${totalMarks}`
                );*/


                resultLblRef.current.innerHTML = `${firstName} ${lastName} 
                ${result} in tenth and
                got total marks of ${totalMarks}`



      console.log("calculate the result ");


     };



     let inputOnFocus = (inputRef) =>{
      inputRef.current.style.backgroundColor = "aqua"

     };
     let inputOnBlur = (inputRef) =>{
      inputRef.current.style.backgroundColor = "orange";

     };

     let inputOnChange =(inputRef,spanRef)=>{
      if(inputRef.current.value >=0 && inputRef.
         current.value <=100){
            if(inputRef.current.value  >=35){
               spanRef.current.innerHTML ="pass" ;
            spanRef.current.style.backgroundColor="green" ;
            }else{
            spanRef.current.innerHTML ="fail" ;
         spanRef.current.style.backgroundColor="red" ;

            }

      }else{
         spanRef.current.innerHTML ="invalid";
         spanRef.current.style.backgroundColor="brown" ;

      }
     };



  return (
    <div>
        <form>
            <div>
                <label>firstName</label>
                <input ref={firstNameInputRef} OnFocus={()=>{
                  inputOnFocus(firstNameInputRef);
                }}




                onBlur = {()=>{
                  inputOnBlur(firstNameInputRef);
                }}
                ></input>
              
                

                <span></span>
                
               
            </div>


            <div>
                <label>LastName</label>
                <input ref={lastNameInputRef} OnFocus={()=>{
                  inputOnFocus(lastNameInputRef);
                }}


                onBlur = {()=>{
                  inputOnBlur(lastNameInputRef);
                }}
                ></input>
                <span></span>
               
            </div>



            <div>
                <label>English</label>
                <input
                 type="number"
                 ref={engInputRef}
                 onFocus={() => {
                
                 inputOnFocus(engInputRef);

                 
                 }}
                 onChange={() => {
                  
                  inputOnChange(engInputRef,engSpanRef);

                 }}

                 onBlur={() => {
                  inputOnBlur(engInputRef);
                  
                  

                 }}
                 
                
                 ></input>
                <span ref={engSpanRef}></span>
               
            </div>


            <div>
                <label>Telugu</label>
                <input
                 type="number"
                  ref={telInputRef}
                  onFocus={() => {
                    inputOnFocus(telInputRef);
                    

                 }}
                 onChange={() => {
                  
              
                  inputOnChange(telInputRef,telSpanRef);
             

                 }}
                 onBlur={() => {
                  inputOnBlur(telInputRef);
                

               }}
               ></input>
                <span ref={telSpanRef}></span>
               
            </div>


            <div>
                <label>Hindi</label>
                <input type="number" 
                ref={hindiInputRef}
                onFocus={() => {
                    inputOnFocus(hindiInputRef);
                   

                 }}
                 onChange={() => {
                   
                  inputOnChange(hindiInputRef,hindiSpanRef);
                 

                 }}

                 onBlur={() => {
                  inputOnBlur(hindiInputRef);
                   
                  

                 }}
                ></input>
                <span ref={hindiSpanRef}></span>
               
            </div>

            <div>
                <label>Sci</label>
                <input type="number"
                 ref={sciInputRef}
                 onFocus={() => {
                    inputOnFocus(sciInputRef);
                    

                 }}
                 onChange={() => {
                  
                  inputOnChange(sciInputRef,sciSpanRef);
                     

                 }}

                 onBlur={() => {

                  inputOnBlur(sciInputRef);
                
                 }}
                 ></input>
                <span ref={sciSpanRef}></span>
               
            </div>


            <div>
                <label>Soc</label>
                <input type="number"
                 ref={socInputRef}
                 onFocus={() => {
                    inputOnFocus(socInputRef);
                   

                 }}
                 onChange={() => {
                
                  inputOnChange(socInputRef,socSpanRef);
                 

                 }}

                 onBlur={() => {
                    
                  inputOnBlur(socInputRef);

                 }}
                 ></input>
                <span ref={socSpanRef}></span>
               
            </div>


            <div>
                <label>Maths</label>
                <input type="number" 
                ref={mathsInputRef}
                onFocus={() => {
                    inputOnFocus(mathsInputRef);
                  

                 }}
                 onChange={() => {
                
                  inputOnChange(mathsInputRef,mathsSpanRef);
               
                 }}

                 onBlur={() => {
                  inputOnBlur(mathsInputRef);
                
                 }}
                ></input>
                <span ref={mathsSpanRef}></span>
               
            </div>

            <div>
               <button type= "button" onClick={()=>{
                  calculateResult();


               }}>
                
                calculate Result</button>
               <br></br>
               <label ref={resultLblRef}
               className="resultLbl"></label>

            </div>
        </form>
      
    </div>
  )
}

export default TenthMarksSheet
