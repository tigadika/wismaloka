import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentSucces() {
  const navigate = useNavigate();

  const token = localStorage.access_token;
  console.log(token);

  useEffect(() => {
    finallyPremium();
  });

  async function finallyPremium() {
    try {
      const respon = await axios({
        method: "PATCH",
        url: "http://localhost:3000/premiumAgen",
        headers: {
          access_token: localStorage.access_token,
        },
      });

      //   console.log(respon, "<<<<<");
      setTimeout(() => {
        navigate("/agent");
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Payment Succes</h1>
    </div>
  );
}