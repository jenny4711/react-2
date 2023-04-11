import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({drinks,snacks}) {
 
  return (
   

     
    <section className="col-md-8">
      
      <Card>
        <CardBody className="text-center Home-title">
          <CardTitle >
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>

     
        </CardBody>
     
      </Card>
      <div className='length'>
        <h1>Now We Have</h1>
    <h3 className="font-weight-bold snack">Snacks : {snacks.length}</h3>
      <h3 className="font-weight-bold drink">Drinks : {drinks.length}</h3>
      </div>
     
    </section>
    
  );
}

export default Home;
