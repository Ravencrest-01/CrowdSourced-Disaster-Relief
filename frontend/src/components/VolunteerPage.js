import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createDonor, fetchDonors } from "../services/api";
import "../styles/volunteerPage.css";

const stripePromise = loadStripe("pk_test_51RCVAgGLjppvE8XyRrhfy32fEhDBJN2XVdtCFISwjAjHyTyYefcjh86GTSxmyXSCxqGEbHTQSGHAVV8FHh0B3QbP00jXVgkU9R");

const DonationForm = ({ onDonationSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    donationAmount: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error: stripeError, token } = await stripe.createToken(cardElement);

    if (stripeError) {
      setError(stripeError.message);
      return;
    }

    try {
      const donorData = {
        name: formData.name,
        email: formData.email,
        donationAmount: formData.donationAmount,
        token: token.id
      };

      await createDonor(donorData);
      setSuccess("Donation successful! Thank you.");
      setFormData({ name: "", email: "", donationAmount: "" });
      cardElement.clear();
      onDonationSuccess();
    } catch (err) {
      setError("Failed to process donation. Try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="volunteer-input"
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        className="volunteer-input"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <input
        className="volunteer-input"
        type="number"
        name="donationAmount"
        placeholder="Donation Amount"
        value={formData.donationAmount}
        onChange={handleInputChange}
        required
      />

      <div className="card-element">
        <CardElement />
      </div>

      <button className="volunteer-submit" type="submit" disabled={!stripe}>
        Donate Now
      </button>

      {success && <div className="volunteer-success-message">{success}</div>}
      {error && <div className="volunteer-error-message">{error}</div>}
    </form>
  );
};

const VolunteerPage = () => {
  const [donors, setDonors] = useState([]);

  const loadDonors = async () => {
    try {
      const data = await fetchDonors();
      setDonors(data);
    } catch (err) {
      console.error("Failed to fetch donors:", err);
    }
  };

  useEffect(() => {
    loadDonors();
  }, []);

  return (
    <div className="volunteer-page">
      <div className="volunteer-container">
        <h1 className="volunteer-page-title">Support Our Mission</h1>
        <div className="volunteer-grid">
          <div className="volunteer-column volunteer-donation-column">
            <h2 className="volunteer-column-title">Make a Donation</h2>
            <Elements stripe={stripePromise}>
              <DonationForm onDonationSuccess={loadDonors} />
            </Elements>
          </div>

          <div className="volunteer-column volunteer-list-column">
            <h2 className="volunteer-column-title">Recent Donors</h2>
            {donors.length === 0 ? (
              <div className="volunteer-no-data-message">No donors yet.</div>
            ) : (
              donors.map((donor, index) => (
                <div className="volunteer-card" key={index}>
                  <p><strong>Name:</strong> {donor.name}</p>
                  <p><strong>Donation:</strong> ${donor.donationAmount}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;