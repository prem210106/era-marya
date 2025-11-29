import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Service.css";
import shipImage from "../images/ship.jpg";
import AirImage from "../images/Air.jpg";
import custom2Image from "../images/custom2.jpg";
import Warehous2Image from "../images/Warehous2.jpg";
import OdcImage from "../images/odc.jpg";
import Project from "../images/project.jpg";
import { useNavigate } from "react-router-dom";

const APPS = [
  {
    id: "1",
    title: "Sea Freight Forwarding",
    description:
      "Offering seamless and efficient sea freight forwarding solutions for all your import and export needs.",
    link: "/sea",
    img: shipImage
  },
  {
    id: "2",
    title: "Air Freight Forwarding",
    description:
      "Speed, reliability, and affordability – our air freight forwarding service guarantees a seamless and cost-effective experience.",
    link: "/air",
    img: AirImage
  },
  {
    id: "3",
    title: "Custom Transport",
    description:
      "Effortlessly navigate the customs clearance process with our professional team.",
    link: "/custom",
    img: custom2Image
  },
  {
    id: "4",
    title: "Warehousing",
    description:
      "Secure and efficient storage facilities for all your goods.",
    link: "/warehousing",
    img: Warehous2Image
  },

  {
    id: "5",
    title: "ODC Logistics Support",
    description:
      "From heavy machinery to delicate equipment, our ODC logistics service ensures a smooth, secure and timely delivery of your valuable cargo.",
    link: "/Odc",
    img: OdcImage
  },

  {
    id: "6",
    title: "Project Shipments",
    description:
      "Bring your complex projects to life with Era Marya Global Logistics Pvt. Ltd.' expert project shipment services, providing customized solutions for even the most challenging cargo.",
    link: "/Project",
    img: Project
  },
];

export default function AppStoreCards() {
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="appstore-container">

      <main className="appstore-main">
        <div className="card-grid">
          {APPS.map((app) => (
            <motion.button
              key={app.id}
              layoutId={`card-${app.id}`}
              onClick={() => setSelectedId(app.id)}
              className="Service-card"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <motion.img
                src={app.img}
                alt={app.title}
                className="Service-card-image"
                layoutId={`image-${app.id}`}
                draggable={false}
              />
              <motion.div className="Service-card-content" layout>
                <h3>{app.title}</h3>
                <p>{app.subtitle}</p>
              </motion.div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              key="overlay"
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                className="expanded-card"
                layoutId={`card-${selectedId}`}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={APPS.find((a) => a.id === selectedId).img}
                  alt="expanded"
                  className="expanded-image"
                  layoutId={`image-${selectedId}`}
                  draggable={false}
                />
                <motion.div className="expanded-content" layout>
                  <div className="expanded-header">
                    <div>
                      <h2>{APPS.find((a) => a.id === selectedId).title}</h2>
                      <p>{APPS.find((a) => a.id === selectedId).subtitle}</p>
                    </div>
                    <button className="close-btn" onClick={() => setSelectedId(null)}>
                      Close
                    </button>
                  </div >

                  <div className="expanded-body">
                    <p>{APPS.find((a) => a.id === selectedId).description}</p>
                    <div className="expanded-buttons">
                      <button className="primary" onClick={() => navigate(APPS.find((a) => a.id === selectedId).link)}>Open</button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

