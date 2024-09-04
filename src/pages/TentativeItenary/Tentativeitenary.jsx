import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function TentativeItinerary() {
  const [count, setCount] = useState(3);
  const [location, setLocation] = useState("");

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 3));
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      location: location,
      numberOfPeople: count,
    };

    try {
      const response = await fetch(
        "https://api.example.com/submit", // Replace with your actual API endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log("Itinerary generated:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form className="my-5 form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Location</Form.Label>
          <Form.Control
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Location Name"
          />
        </Form.Group>

        {/* Counter Section */}
        <Form.Group className="my-4" controlId="numberOfPeople">
          <Form.Label>Number of People</Form.Label>
          <InputGroup>
            <Button variant="outline-secondary" onClick={handleDecrement}>
              -
            </Button>
            <Form.Control
              type="number"
              value={count}
              min={3}
              readOnly
              style={{ textAlign: "center" }}
            />
            <Button variant="outline-secondary" onClick={handleIncrement}>
              +
            </Button>
          </InputGroup>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default TentativeItinerary;
