import { useState } from "react";
import {customerOrders, orderFollowUpQuestions, callbackQuestions} from "./CustomerQuestions";
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';



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
    const [selectedOrderRequest, setSelectedOrderRequest] = useState('');
    const [selectedFollowUpQuestion, setSelectedFollowUpQuestion] = useState('');
    const [followUpCallQuestions, setSelectedFollowUpCallQuestions] = useState('');

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


    return (
        <>

        <h1>Acumatica Training Questions</h1>
        <Divider size="lg" />

        <div style={{height: "100vh"}}>
        <div className="acu-part-one">
            <h2>Part 1: Order Entry</h2>
            <p>This section will simulate getting a call or email order request</p>
            <Card size="lg">
                <Button size="lg" onClick={() => {getCustomerOrder(customerOrders); setHidden(false); setHidden2(true)}} >Answer Call/Email</Button>
                <Typography hidden={hidden} >
                    {selectedOrderRequest}
                    
                </Typography>
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
                <p>This section will give a scenario in which a order has been modified and the customer is inquiring into that or the customer is calling in with a modification on their order.</p>
                <Card size="lg">
                    <Button size="lg"  onClick={() => {getCallbackQuestions(callbackQuestions); setHidden3(false)}}>Modification Scenario</Button>
                    <Typography hidden={hidden3} >
                        {followUpCallQuestions}
                    </Typography>
                </Card>

            </div>
        </div>
        </div>
        </>
    )
}

export default Acumatica; 

