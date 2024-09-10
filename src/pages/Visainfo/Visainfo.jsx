import { useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Form, Button } from "react-bootstrap";

function Visainfo() {
  const [visitCountry, setVisitCountry] = useState(null);
  const [passportCountry, setPassportCountry] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(null);

  const countries = countryList().getData(); // Get list of countries

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!visitCountry || !passportCountry) {
      setError("Please select both visiting and passport issuing countries.");
      return;
    }

    setError(null); // Clear previous errors

    try {
      const apiKey =
        "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"; // Replace with your actual OpenAI API key // Replace with your actual OpenAI API key
      const url = "https://api.openai.com/v1/chat/completions";

      const data = {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `I need visa information for traveling from ${passportCountry.label} to ${visitCountry.label}.`,
          },
        ],
        max_tokens: 100,
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
      setResponseMessage(responseData.choices[0].message.content);
    } catch (err) {
      setError(err.message); // Set error message if any error occurs
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Form className="form my-5" onSubmit={handleSubmit}>
        <Form.Group controlId="visitCountry">
          <Form.Label>Country to Visit</Form.Label>
          <Select
            options={countries}
            value={visitCountry}
            onChange={setVisitCountry}
            placeholder="Select a country"
          />
        </Form.Group>

        <Form.Group controlId="passportCountry">
          <Form.Label className="mt-4">Passport Issuing Country</Form.Label>
          <Select
            options={countries}
            value={passportCountry}
            onChange={setPassportCountry}
            placeholder="Select a country"
          />
        </Form.Group>

        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>

        {/* Display error message */}
        {error && <p className="text-danger mt-3">{error}</p>}

        {/* Display API response */}
        {responseMessage && (
          <div className="mt-4">
            <h5>Visa Information:</h5>
            <p>{responseMessage}</p>
          </div>
        )}
      </Form>
    </div>
  );
}

export default Visainfo;
