import { Instagram, Linkedin, X } from "lucide-react"


export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#3D2A58] rounded-full px-6 py-2 flex items-center justify-between w-full h-12 sm:h-16 md:h-20 mx-auto shadow-lg">
          <img src="/logos/logo_full_white.png" className=" w-auto h-5/6" />
          <p className="text-white text-sm md:text-md">&copy;2023-2025 Crob Inc.</p>
          <div className="flex space-x-3 md:space-x-5">
            <Linkedin size={20} className="text-white cursor-pointer md:scale-150 " />
            <Instagram size={20} className="text-white cursor-pointer md:scale-150" />
            <X size={20} className="text-white cursor-pointer md:scale-150" />
          </div>
        </div>
        <p className=" text-lg font-medium my-6">Design. Develop. Dominate .</p>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm">Phone: +91 7264833272</p>
          <p className="text-sm">Email: crob0008@gmail.com</p>
          <p className="text-sm">Location: Khandepar Ponda-Goa</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-gray-400 ">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Categories</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Custom Designs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <ul className="text-gray-400 ">
            <li><a href="" className="hover:text-white">Facebook</a></li>
            <li><a href="" className="hover:text-white">Twitter</a></li>
            <li><a href="" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-gray-500 text-sm">
        &copy; 2023-2025 Crob Inc.
      </div>
    </footer>
  )
}


