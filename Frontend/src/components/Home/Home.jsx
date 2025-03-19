import React from 'react'
import Left from './left'
import Right from './right'
import Carousel from './Carousel'
const Home = () => {
  return (
    <div>
      <Left heading="We help people to get appointment in online" source1="assets/bg.jpg" source2="assets/doctor.png" para="At MediSphere Hospital, we are dedicated to providing seamless and efficient healthcare services. Our state-of-the-art Hospital Management is designed to simplify your experience, whether you're a patient, doctor, or administrator. With just a few clicks, you can schedule appointments, access medical records, and manage hospital operations effortlessly." webLink="/" webText="Tour" />
      <Right heading1="Biography" heading2="Who we are" source="assets/hsptll.png" para="At MediSphere Hospital, we are dedicated to providing seamless and efficient healthcare services. Our state-of-the-art Hospital Management is designed to simplify your experience, whether you're a patient, doctor, or administrator. With just a few clicks, you can schedule appointments, access medical records, and manage hospital operations effortlessly." webLink="/" webText="See More" />
      <Carousel />
    </div>
  )
}

export default Home
