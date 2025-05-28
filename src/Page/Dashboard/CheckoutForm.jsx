import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import UseCart from '../../hook/UseCart';
import AxiosSecuire from '../../hook/AxiosSecuire';
import AuthUse from '../../ShardHook/AuthUse';
import Swal from 'sweetalert2';

const CheckoutForm = () => {
    const { user } = AuthUse()
    const [err, setPaymentErr] = useState('')
    const [transitionId, setTransitionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const axiosSecure = AxiosSecuire()
    const [cart] = UseCart()
    const stripe = useStripe();
    const element = useElements()//I don't understand this line code 
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    useEffect(() => {
        if (totalPrice>0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [axiosSecure, totalPrice])
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
        // confirm payment system
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName,
                    email: user?.email,
                }
            }


        })
        if (confirmError) {
            console.log(confirmError)
        }
        else {
            console.log('paymentIntent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTransitionId(paymentIntent.id)

            }

        }
        // payment api 
        const payment = {
            email: user?.email,
            price: totalPrice,
            transactionId: paymentIntent.id,
            date: new Date(), //utc date convert.use moment js to
            cartIds: cart.map(item => item._id),
            menuIds: cart.map(item => item.menuId),
            status: 'pending'
        };
        const res = await axiosSecure.post('/payments', payment)
        console.log(res.data)

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
                <button className='btn btn-sm btn-primary my-4 font-semibold' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className='text-red-500 font-semibold '>{err}</p>
                {
                    transitionId && <p className='text-green-500 font-semibold '>Your payment transition id {transitionId}</p>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;