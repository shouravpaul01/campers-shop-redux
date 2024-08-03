import { LatLngExpression } from "leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaPhone,
  FaPinterest,
  FaSquareFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { teamMembers } from "../../../constant";

const AboutUs = () => {
  const position:LatLngExpression = [23.8103, 90.4125];
  return (
    <div className="my-16">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 space-y-5">
          <div className="bg-white rounded-[4px] p-5 space-y-2">
            <p className="font-bold flex items-center">
              <FaPhone className="text-deepgreen me-2" />
              Call: <span className="text-gray-500 ms-3">+088019000000</span>
            </p>

            <p className="font-bold flex items-center">
              <FaEnvelope className="text-deepgreen me-2" />
              Email:{" "}
              <span className="text-gray-500 ms-3">campershop@email.com</span>
            </p>
            <p className="font-bold flex items-center">
              <FaMapMarkerAlt className="text-deepgreen me-2" />
              Address: <span className="text-gray-500 ms-3">Dhaka</span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 bg-white rounded-[4px] border border-[#2D6F6D] border-dashed p-5 text-2xl">
            <a href="" className="text-blue-700 ">
              <FaSquareFacebook />
            </a>
            <a href="" className="text-black ">
              <FaXTwitter />
            </a>
            <a href="" className="text-red-400 ">
              <FaPinterest />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 rounded-[4px] -z-0">
          <MapContainer center={position} zoom={13} style={{ height:"250px", width: '100%' ,borderRadius:"4px"}} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Campershop-Dhaka
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="bg-white rounded-[4px] p-5 mt-10">
      <div className="border-b border-dashed border-[#2D6F6D] pb-3 mb-4">
      <h2 className="text-3xl font-bold text-center ">Meet Our Team</h2>
      <p className="text-lg text-center text-gray-600 ">
        Dedicated professionals committed to bringing you the best camping experience.
      </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className=" p-6 rounded-lg shadow-lg">
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">{member.name}</h3>
            <p className="text-gray-500 text-center">{member.role}</p>
            <p className="mt-2 text-gray-700 text-center">{member.bio}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
