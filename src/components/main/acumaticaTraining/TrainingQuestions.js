// case 2: 
// return (
//     <div>
        
//         <h3>Caller Two</h3>
//         <button onClick={() => getRandomSubRoll()}>Customer Question</button>
//         <div>
//             <p>{questionsCallerTwo(subRoll)}</p>
//         </div>
//     </div>
// )
// case 3: 
// return (
//     <div>
        
//         <h3>Caller Three</h3>
//         <button onClick={() => getRandomSubRoll()}>Customer Question</button>
//         <div>
//             <p>{questionsCallerThree(subRoll)}</p>
//         </div>
//     </div>
// )
// case 4: 
// return (
//     <div>
        
//         <h3>Caller Four</h3>
//         <button onClick={() => getRandomSubRoll()}>Customer Question</button>
//         <div>
//             <p>{questionsCallerFour(subRoll)}</p>
//         </div>
//     </div>
// )
// case 5: 
// return (
//     <div>
//         <h3>Caller Five</h3>
//         <button onClick={() => getRandomSubRoll()}>Customer Question</button>
//         <div>
//             <p>{questionsCallerFive(subRoll)}</p>
//         </div>
//     </div>
// )
// case 6: 
// return (
//     <div>
//         <h3>Caller Six</h3>
//         <button onClick={() => getRandomSubRoll()}>Customer Question</button>
//         <div>
//             <p>{questionsCallerSix(subRoll)}</p>
//         </div>
//     </div>
// )
// case 7: 
// return (
//     <div>
//         <h3>Caller Seven</h3>
//         <button onClick={() => getRandomSubRoll()}>Customer Question</button>
//         <div>
//             <p>{questionsCallerSeven(subRoll)}</p>
//         </div>
//     </div>
// )
// case 8: 
// return (
//     <div>
//         <h3>Caller Eight</h3>
//         <button onClick={() => getRandomSubRoll()}>Customer Question</button>
//         <div>
//             <p>{questionsCallerEight(subRoll)}</p>
//         </div>
//     </div>
// )
// case 9: 
// return (
//     <div>
//         <h3>Caller Nine</h3>
//         <button onClick={() => getRandomSubRoll()}>Customer Question</button>
//         <div>
//             <p>{questionsCallerNine(subRoll)}</p>
//         </div>
//     </div>
// )
// case 10: 
// return (
//     <div>
//         <h3>Caller Ten</h3>
//         <button onClick={() => getRandomSubRoll()}>Customer Question</button>
//         <div>
//             <p>{questionsCallerTen(subRoll)}</p>
//         </div>
//     </div>
// )



const [rollResult, setRollResult] = useState();
const [numberOfResults, setNumberOfResults] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
const [hidden, setHidden] = useState(true);

// const getQuestion = () => {
//     return customerOrders[(Math.floor(Math.random() * customerOrders.length))];
    
// }

// const getOrderFollowUpQuestions = () => {
//     return orderFollowUpQuestions[(Math.floor(Math.random() * orderFollowUpQuestions.length))];
    
// }


// const getRandomRoll = () =>{

//     if (numberOfResults.length === 0) {
//         console.log("No more numbers available.");
//         return setRollResult(0); 
//     }
   
//     let randomResult = Math.floor(Math.random() * numberOfResults.length);
//     let result = numberOfResults[randomResult];
//     numberOfResults.splice(randomResult, 1);

//     setNumberOfResults(prevnumberOfResults => {
//         const newArray = [...prevnumberOfResults];
//         return newArray;
//     });

//     setRollResult(result);
    
//     return result;
// }

// const getRandomRoll = () => {
//     if (numberOfResults.length === 0) {
//         console.log("No more numbers available.");
//         return setRollResult(0);
//     }
   
//     let randomResult = Math.floor(Math.random() * numberOfResults.length);
//     let result = numberOfResults[randomResult];
//     numberOfResults.splice(randomResult, 1);

//     setNumberOfResults([...numberOfResults]); // Corrected to update state properly

//     setRollResult(result);
// }


// useEffect(() => {
//     console.log("result: " + rollResult);
// }, [rollResult]);
