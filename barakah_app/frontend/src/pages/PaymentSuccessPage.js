// pages/PaymentSuccessPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import NavigationButton from '../components/layout/Navigation';
import '../styles/Body.css';

const PaymentSuccessPage = () => {
  const location = useLocation();
  const { transactionId, amount, paymentMethod } = location.state || {};

  return (
    <div className="body">
      <Header />
      <div className="container mx-auto px-4 py-6">        
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h1 className="text-2xl font-bold mb-4">Pembayaran Berhasil</h1>
          <p>Terimakasih atas donasi yang diberikan!</p>
          <div className="mt-4">
            <p><strong>ID Transaksi:</strong> {transactionId}</p>
            <p><strong>Nominal Donasi:</strong> Rp {amount}</p>
            <p><strong>Metode Pembayaran:</strong> {paymentMethod}</p>
          </div>
      </div>
    </div>
    <NavigationButton />
    </div>
  );
};

export default PaymentSuccessPage;