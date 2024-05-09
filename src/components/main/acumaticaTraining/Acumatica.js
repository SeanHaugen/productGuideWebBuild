import { useState } from "react";
import {customerOrders, orderFollowUpQuestions, callbackQuestions, paymentOptions} from "./CustomerQuestions";
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography'
import  Quiz from "./quiz/Quiz";




//Features: 
//part 1
//given a list of customer order requests
//User clicks button and a single order request is displayed from the order request list at random 

//first I will need to get a random index from my customerOrders array
//Then display that index string in my return statement 

//Second button
//given a list of follow up questions. 
//on click event will display a random follow up question from the follow up question list. 

function Acumatica() {

    const [hidden, setHidden] = useState(true);
    const [hidden2, setHidden2] = useState(true);
    const [hidden3, setHidden3] = useState(true);
    const [hidden4, setHidden4] = useState(true);

    const [selectedOrderRequest, setSelectedOrderRequest] = useState('');
    const [selectedFollowUpQuestion, setSelectedFollowUpQuestion] = useState('');
    const [followUpCallQuestions, setSelectedFollowUpCallQuestions] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const getCustomerOrder = (array1) => {
        const orderRequest = array1[Math.floor(Math.random() * array1.length)];
        console.log(orderRequest);
        customerOrders.splice(customerOrders.indexOf(orderRequest), 1);
        setSelectedOrderRequest(orderRequest)

        if(customerOrders.length === 0)
        {
            return "No More Orders Available"
        } else {
            return orderRequest;
        }

    }

    const getFollowUpQuestion = (array2) => {
        const question = array2[Math.floor(Math.random() * array2.length)];
        console.log(question);
        setSelectedFollowUpQuestion(question)

        if(orderFollowUpQuestions.length === 0)
        {
            setSelectedFollowUpQuestion(orderFollowUpQuestions)
        } else {
            return question;
        }

    }

    const getCallbackQuestions = (array3) => {
        const question = array3[Math.floor(Math.random() * array3.length)];
        console.log(question);
        callbackQuestions.splice(callbackQuestions.indexOf(question), 1);
        setSelectedFollowUpCallQuestions(question);

        if(followUpCallQuestions.length === 0)
        {
            return "No More Orders Available"
        } else {
            return question;
        }
    }

    const getPaymentMethod = (paymentArray) => {
        const method = paymentArray[Math.floor(Math.random() * paymentArray.length)];
        console.log(method);
        setPaymentMethod(method)

        if(paymentOptions.length === 0)
        {
            setPaymentMethod(orderFollowUpQuestions)
            setHidden4(true);
        } else {
            setHidden4(false);
        }
        return method;
        
    }

    const checkPaymentMethod = () => {
        if(paymentMethod === "Declined CC")
        {
            return "Declined CC will be resolved in part II"
        }
        else{
            return;
        }
    }



    return (
        <>

        <h1>Acumatica Training Questions</h1>
        <Divider size="lg" />

        <div style={{height: "100vh"}}>
        <div className="acu-part-one">
            <h2>Part 1: Order Entry</h2>
            <p>For each PO put a "-" and your group letter at the end </p>
            <Card size="lg">
                <Button size="lg" onClick={() => {getCustomerOrder(customerOrders); setHidden(false); setHidden2(true); setHidden4(true)}} >Answer Call/Email</Button>
                
                <Typography hidden={hidden} >
                    {selectedOrderRequest}
                    
                </Typography>
            </Card>
            <br />
            <Card size="lg">
                <Button size="lg"  onClick={() => {getPaymentMethod(paymentOptions); setHidden4(false)}} >Payment method</Button>
                <div hidden={hidden4} >
                    {paymentMethod}
                    <br />
                    <i>{checkPaymentMethod()}</i>
    
                </div>
                
            </Card>
            <br />
            <Card size="lg">
                <Button size="lg"  onClick={() => {getFollowUpQuestion(orderFollowUpQuestions); setHidden2(false)}} >Followup Question</Button>
                <div hidden={hidden2} >
                    {selectedFollowUpQuestion}
                    
                </div>
            </Card>
        </div>
        <br />
        <br />
        <hr />
        <br />
        <div className="acu-part-two">  
            <div>
                <h2>Part 2: Modifying an order</h2>
                <p>If the scenarios PO was not completed by your group in part one, proceed to the next until one pops up. Questions will not repeat.</p>
                <Card size="lg">
                    <Button size="lg"  onClick={() => {getCallbackQuestions(callbackQuestions); setHidden3(false)}}>Modification Scenario</Button>
                    <Typography hidden={hidden3} >
                        {followUpCallQuestions}
                    </Typography>
                </Card>

            </div>
        </div>
        </div>
        <Quiz />
        </>
    )
}

export default Acumatica; 

