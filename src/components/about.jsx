import React from "react";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
const About = () => {
  const [isExpanded, setExpanded] = useState(false);
  const toggleReadMore = () => {
    setExpanded(!isExpanded);
  };
  return (
    <div className="md:flex relative top-32 w-full">
      <div className="m-7">
        <div className="h-20 w-20 relative top-14 left-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity }}
          >
            <img
              src="https://thed2csummit.co/wp-content/uploads/2024/06/Star-6.svg"
              alt="img"
              className="h-20 w-20 relative"
            />
          </motion.div>
          <img
            src="https://thed2csummit.co/wp-content/uploads/2024/06/Group-1119.svg"
            alt="img"
            className="h-10 w-10 relative -top-14 left-6 "
          />
        </div>
        <img src="/images/dummy.png" alt="img" />
      </div>
      <div className="md:w-1/2 m-4">
        <div className=" text-l md:text-2xl flex items-center gap-2 my-4">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <FaPlay className="text-yellow-500" />
          </motion.div>
          About Me
        </div>
        <h1 className="text-2xl md:text-5xl my-3 font-mono">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <br />
        </h1>
        {isExpanded ? (
          <>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro unde
            tempora inventore cum quaerat laborum quae natus excepturi
            voluptatem, sunt, consectetur laudantium...
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            commodi dignissimos sint nostrum nihil. Dolorum libero nulla laborum
            deserunt temporibus, earum doloribus pariatur quis odio possimus,
            sequi unde a sapiente atque perspiciatis nisi. Reprehenderit animi
            iusto nisi. Expedita nisi dolorem exercitationem recusandae itaque
            blanditiis sed quis deserunt. Aperiam, possimus vel.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            consectetur officia non sequi debitis modi sit excepturi aliquam
            quia, quis cupiditate blanditiis atque inventore similique quibusdam
            ratione reiciendis praesentium hic veritatis incidunt beatae
            tempore, illo molestias. Ducimus atque id autem neque, earum
            suscipit. Quod similique impedit consequatur error, dicta assumenda.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro unde
            tempora inventore cum quaerat laborum quae natus excepturi
            voluptatem, sunt, consectetur laudantium similique neque fugiat
            fugit deserunt vitae quis eveniet? Consequatur rem sunt sit
            voluptates reprehenderit. Minima sed omnis odio! Aliquam quos quia
            quod numquam minus recusandae quas non laborum voluptates
            temporibus, libero, magni odio cupiditate aperiam laboriosam nisi
            facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Expedita accusamus commodi doloribus nisi harum deserunt dignissimos
            maiores? Architecto eaque sint voluptatibus, rerum quia facilis vel
            maiores nesciunt qui accusantium voluptates laudantium facere,
            praesentium obcaecati consequatur totam quaerat id, ut debitis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ad
            magnam corrupti. Aut, maiores minima? Hic illo, natus a, iure
            distinctio voluptatibus velit ipsa doloribus quia expedita
            repellendus consectetur, voluptatem labore accusamus libero eos unde
            quasi alias. Ad expedita hic pariatur suscipit vero quos magnam
            consectetur, rerum soluta voluptate veniam?
          </>
        ) : (
          <>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro unde
            tempora inventore cum quaerat laborum quae natus excepturi
            voluptatem, sunt, consectetur laudantium...
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            commodi dignissimos sint nostrum nihil. Dolorum libero nulla laborum
            deserunt temporibus, earum doloribus pariatur quis odio possimus,
            sequi unde a sapiente atque perspiciatis nisi. Reprehenderit animi
            iusto nisi. Expedita nisi dolorem exercitationem recusandae itaque
            blanditiis sed quis deserunt. Aperiam, possimus vel.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            consectetur officia non sequi debitis modi sit excepturi aliquam
            quia, quis cupiditate blanditiis atque inventore similique quibusdam
            ratione reiciendis praesentium hic veritatis incidunt beatae
            tempore, illo molestias. Ducimus atque id autem neque, earum
            suscipit. Quod similique impedit consequatur error, dicta assumenda.
          </>
        )}
        <div className="my-4">
          <button
            onClick={toggleReadMore}
            className=" text-yellow-500 hover:text-yellow-600 my-2 font-bold mb-20"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
