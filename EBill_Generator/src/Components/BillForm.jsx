import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../App.css";
import logo from "../Images/logo.jpg";
function BillForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    fatherName: "",
    surName: "",
    mobile: "",
    email: "",
    address: "",
    propertyName: "",
    roomNo: "",
    bookingDate: "",
    invoiceDate: "",
    roomDeposit: "",
    roomRent: "",
    maintenance: "",
    preBooking: "",
  });

  const [receiptNumber, setReceiptNumber] = useState("");
  const [generatedAt, setGeneratedAt] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const receiptRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const parseAmount = (val) => parseInt(val || "0", 10);

  const totalAmount =
    parseAmount(formData.roomDeposit) +
    parseAmount(formData.roomRent) +
    parseAmount(formData.maintenance) +
    parseAmount(formData.preBooking);

  const amountInWords = (n) => convertNumberToWords(n);

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomNumber = `RCPT-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
    setReceiptNumber(randomNumber);
    setGeneratedAt(now);
    setSubmitted(true);
  };

  const generatePDF = async () => {
    const canvas = await html2canvas(receiptRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const fileName = `${formData.customerName
      .trim()
      .replace(/\s+/g, "_")}'s_bill_receipt.pdf`;
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save(fileName);
  };

  function convertNumberToWords(amount) {
    const ones = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    const numToWords = (n) => {
      if (n < 20) return ones[n];
      if (n < 100)
        return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
      if (n < 1000)
        return (
          ones[Math.floor(n / 100)] +
          " Hundred" +
          (n % 100 ? " and " + numToWords(n % 100) : "")
        );
      if (n < 100000)
        return (
          numToWords(Math.floor(n / 1000)) +
          " Thousand" +
          (n % 1000 ? " " + numToWords(n % 1000) : "")
        );
      if (n < 10000000)
        return (
          numToWords(Math.floor(n / 100000)) +
          " Lakh" +
          (n % 100000 ? " " + numToWords(n % 100000) : "")
        );
      return (
        numToWords(Math.floor(n / 10000000)) +
        " Crore" +
        (n % 10000000 ? " " + numToWords(n % 10000000) : "")
      );
    };

    return numToWords(amount) + " Rupees Only/-";
  }

  return (
    <div className="container">
      {!submitted ? (
<div className="form-container">
  <form onSubmit={handleSubmit} className="styled-form">
    <h2>Billing Receipt Form</h2>

    <label>Full Name *</label>
    <input
      name="customerName"
      onChange={handleChange}
      required
      placeholder="Enter full name"
    />

    <label>Mobile Number *</label>
    <input
      name="mobile"
      onChange={handleChange}
      required
      placeholder="Enter 10-digit mobile number"
    />

    <label>Email ID</label>
    <input
      name="email"
      onChange={handleChange}
      placeholder="Enter email address (optional)"
    />

    <label>Student's Address</label>
    <input
      name="address"
      onChange={handleChange}
      placeholder="Enter full address"
    />

    <label>Property Name *</label>
    <select name="propertyName" onChange={handleChange} required>
      <option value="">-- Select Property --</option>
      <option value="Comfort Living Moonstone">Comfort Living Moonstone</option>
      <option value="Comfort Living Valeria">Comfort Living Valeria</option>
    </select>

    <label>Room Number</label>
    <input
      name="roomNo"
      onChange={handleChange}
      placeholder="Enter room number"
    />

    <label>Invoice Date (YYYY-MM-DD)</label>
    <input
      name="invoiceDate"
      onChange={handleChange}
      placeholder="e.g. 2025-06-14"
    />

    <label>Room Deposit (₹)</label>
    <input
      name="roomDeposit"
      type="number"
      onChange={handleChange}
      placeholder="Enter deposit amount"
    />

    <label>Room Rent (₹)</label>
    <input
      name="roomRent"
      type="number"
      onChange={handleChange}
      placeholder="Enter rent amount"
    />

    <label>Maintenance Charges (₹)</label>
    <input
      name="maintenance"
      type="number"
      onChange={handleChange}
      placeholder="Enter maintenance charges"
    />

    <label>E-Bill Amount (₹)</label>
    <input
      name="preBooking"
      type="number"
      onChange={handleChange}
      placeholder="Enter e-bill amount"
    />

    <button type="submit">Generate Receipt</button>
  </form>
</div>


      ) : (
        <div>
          <div ref={receiptRef} className="receipt-box">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="receipt-header">
              <h2>Comfort Living</h2>
              <p>
                Moonstone, Sai Villa, S.N. 9/1, Plot No. D-26, Sinhgad Institute
                Rd,
                <br />
                Ambegaon Bk, Pune
              </p>
            </div>

            <div className="receipt-info">
              <p>
                <strong>Receipt No:</strong> {receiptNumber}
              </p>
              <p>
                <strong>Generated On:</strong> {generatedAt}
              </p>
              <p>
                <strong>Full Name:</strong> {formData.customerName}
              </p>
              <p>
                <strong>Mobile No:</strong> {formData.mobile}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Invoice Date:</strong> {formData.invoiceDate}
              </p>
              <p>
                <strong>Property Name:</strong> {formData.propertyName}
              </p>
              <p>
                <strong>Room No:</strong> {formData.roomNo}
              </p>
              <p>
                <strong>Address:</strong> {formData.address}
              </p>
            </div>

            <table className="receipt-table">
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Unit</th>
                  <th>Discount</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Room Deposit</td>
                  <td>₹{formData.roomDeposit || 0}</td>
                  <td>1</td>
                  <td>0</td>
                  <td>₹{formData.roomDeposit || 0}</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Room Rent</td>
                  <td>₹{formData.roomRent || 0}</td>
                  <td>1</td>
                  <td>0</td>
                  <td>₹{formData.roomRent || 0}</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Maintenance Charges</td>
                  <td>₹{formData.maintenance || 0}</td>
                  <td>1</td>
                  <td>0</td>
                  <td>₹{formData.maintenance || 0}</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Electricity Bill</td>
                  <td>₹{formData.preBooking || 0}</td>
                  <td>1</td>
                  <td>0</td>
                  <td>₹{formData.preBooking || 0}</td>
                </tr>
              </tbody>
            </table>

            <p className="total-section">Total Amount: ₹{totalAmount}</p>
            <p>
              <strong>Amount in Words:</strong> {amountInWords(totalAmount)}
            </p>
            

<div className="signature-section" style={{ textAlign: 'right', marginTop: '-10px', marginRight: '20px' }}>
  <p
    style={{
      fontFamily: "'Great Vibes', cursive",
      fontSize: "32px",
      transform: "rotate(-40deg)",
      display: "inline-block",
      marginBottom: "55px",
    }}
  >
    Gagandeep Kaur
  </p> 
  <p style={{ margin: 0 }}>For <strong>Comfort Living Services</strong></p>
  <p style={{ margin: 0 }}>Authorized Signatory</p>
</div>

          </div>

          <button onClick={generatePDF}>📄 Download PDF</button>
          <button
            onClick={() => setSubmitted(false)}
            style={{ marginLeft: "10px" }}
          >
            🔄 Fill Again
          </button>
        </div>
      )}
    </div>
  );
}

export default BillForm;
