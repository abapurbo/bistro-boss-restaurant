import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const [err, setPaymentErr] = useState('')
    const {}
    const stripe = useStripe();
    const element = useElements()//I don't understand this line code 
    const totalPrice=
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !element) {
            return
        }
        const card = element.getElement(CardElement)
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card', card
        })
        if (error) {
            return setPaymentErr(error.message)
        }
        else {
            console.log('Payment method', paymentMethod)
            setPaymentErr(' ')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}>
                </CardElement>
                <button className='btn btn-sm btn-primary my-4 font-semibold' disabled={!stripe}>
                    Pay
                </button>
                <p className='text-red-500 font-semibold '>{err}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;