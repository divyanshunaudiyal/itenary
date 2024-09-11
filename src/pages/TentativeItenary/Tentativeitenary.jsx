import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function TentativeItinerary() {
  const [count, setCount] = useState(3);
  const [location, setLocation] = useState("");
  const [responseMessage, setResponseMessage] = useState(""); // Store API response here
  const [error, setError] = useState(null); // Store error if any

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 3)); // Ensure it doesn't go below 3
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1); // Increase count
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      const apiKey =
        "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"; // Replace with your actual OpenAI API key // Replace with your actual OpenAI API key
      const url = "https://api.openai.com/v1/chat/completions";

      const data = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Generate a detailed travel itinerary for a ${count}-day trip to ${location} including places to visit, activities, and dining options.`,
          },
        ],
        max_tokens: 300,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setResponseMessage(responseData.choices[0].message.content); // Update response display
    } catch (err) {
      setError(err.message); // Handle error and display it
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form className="my-5 form" onSubmit={handleSubmit}>
        {/* Location Input */}
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
        <Form.Group className="my-4" controlId="numberOfDays">
          <Form.Label>Number of Days</Form.Label>
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

        {/* Submit Button */}
        <Button variant="light" type="submit">
          Submit
        </Button>

        {/* Display API response */}
        {responseMessage && (
          <div className="mt-4">
            <h5>Itinerary Response:</h5>
            <p>{responseMessage}</p>
          </div>
        )}

        {/* Display error if any */}
        {error && (
          <div className="mt-4">
            <p style={{ color: "red" }}>Error: {error}</p>
          </div>
        )}
      </Form>
    </div>
  );
}

export default TentativeItinerary;
