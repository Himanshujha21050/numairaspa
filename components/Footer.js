import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-playfair mb-4">Contact</h3>
            <address className="not-italic space-y-2 text-gray-600">
              <p>Shop No B002, B Block, Ground Floor, Babylon Tower, VIP Chowk, Raipur, Chhattisgarh, 492001</p>
              <p>info@numairaspa.com</p>
              <p>+91 84203 50771</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-2xl font-playfair mb-4">Hours</h3>
            <div className="space-y-2 text-gray-600">
              <p>Monday–Sunday: 10:00 AM – 9:00 PM</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-playfair mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-coral-pink transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-coral-pink transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-coral-pink transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>© 2023 Numaira SPA. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

