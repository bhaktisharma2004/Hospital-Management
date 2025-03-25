import React, {useState} from "react";


const ContactUs = () => {
  const employees = [
    {
      id: 1,
      name: "Akash Agarwal",
      role: "Data Scientist",
      image: "assets/Akash.webp",
      email: "",
      github: "",
      linkedIn: "",
    },
    {
      id: 2,
      name: "Aditya Vashishth",
      role: "Data Scientist",
      image: "assets/Aditya.webp",
      email: "",
      github: "",
      linkedIn: "",
    },
    {
      id: 3,
      name: "Bhakti Sharma",
      role: "Product Manager",
      image: "assets/bhakti.webp",
      email: "",
      github: "",
      linkedIn: "",
    },
    {
      id: 4,
      name: "Pratiksha Pathak",
      role: "Full Stack Developer",
      image: "assets/pratiksha.webp",
      email: "",
      github: "",
      linkedIn: "",
    },
    {
      id: 5,
      name: "Radhika Jadaun",
      role: "UI/UX Designer",
      image: "assets/radhika.webp",
      email: "",
      github: "",
      linkedIn: "",
    },
  ];

  const [hoverd, setHoverd] = useState(null);
  return (
    <>
      <div className="team flex flex-wrap">
        {employees.map((e) => (
        <div className="h-[400px] w-[200px] border-black border-2px" key={e.id}
        onMouseEnter={()=>(setHoverd(e.id))}
        onMouseLeave={()=>(setHoverd(null))}>
            <h1>{e.name}</h1>
            <img src={e.image} />
            <p>{e.role}</p>
            {
              hoverd === e.id && (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200">
                  <a href={e.email}>Email</a>
                  <a href={e.linkedIn}>LinkedIn</a>
                  <a href={e.github}>Github</a>
                </div>
              )
            }
          </div>
        ))}
      </div>
      <h1>Contact bas</h1>
    </>
  );
};

export default ContactUs;
