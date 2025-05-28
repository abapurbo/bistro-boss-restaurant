import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from '../../Commponents/SectionTitle';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY)
const Payment = () => {
    return (
        <div className='m-10'>
            <SectionTitle heading='Payment' subHeading='Please pay to eat'></SectionTitle>
            <div className='w-[600px] my-10 '>
              <Elements stripe={stripePromise}>
                  <CheckoutForm></CheckoutForm>
              </Elements>

            </div>
        </div>
    );
};

export default Payment;