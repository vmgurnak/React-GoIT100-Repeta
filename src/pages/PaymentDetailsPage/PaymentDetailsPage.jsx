import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { getPaymentById } from "../../payments-api";
import PaymentInfo from "../../components/PaymentInfo";

export default function PaymentDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);

  useEffect(() => {
    async function fetchPayment() {
      try {
        const data = await getPaymentById(paymentId);
        setPayment(data);
      } catch (error) {}
    }
    fetchPayment();
  }, [paymentId]);

  return (
    <div>
      <p>
        <b>PaymentDetailsPage</b>
      </p>
      {payment && <PaymentInfo payment={payment} />}

      <ul>
        <li>
          <Link to="bank">Bank</Link>
        </li>
        <li>
          <Link to="receipt">Receipt</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
