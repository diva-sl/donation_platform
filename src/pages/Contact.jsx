import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  MessageCircle,
  Headphones,
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message submitted successfully!");
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}

      <section className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold">Contact Us</h1>

          <p className="mt-6 text-lg max-w-2xl mx-auto">
            Have questions? Need assistance? Our team is here to help you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border rounded-3xl p-8 text-center shadow-sm">
              <Phone size={42} className="mx-auto text-orange-500" />

              <h3 className="text-xl font-bold mt-4">Call Us</h3>

              <p className="text-gray-600 mt-3">+91 80887 54355</p>
            </div>

            <div className="bg-white border rounded-3xl p-8 text-center shadow-sm">
              <Mail size={42} className="mx-auto text-orange-500" />

              <h3 className="text-xl font-bold mt-4">Email Us</h3>

              <p className="text-gray-600 mt-3">support@Mysticpace.org</p>
            </div>

            <div className="bg-white border rounded-3xl p-8 text-center shadow-sm">
              <MapPin size={42} className="mx-auto text-orange-500" />

              <h3 className="text-xl font-bold mt-4">Visit Us</h3>

              <p className="text-gray-600 mt-3">Chennai, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}

            <div className="bg-white border rounded-3xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold">Send Us A Message</h2>

              <p className="text-gray-600 mt-3">
                Fill out the form and we'll get back to you.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    px-4
                    py-4
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    px-4
                    py-4
                  "
                />

                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    px-4
                    py-4
                  "
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    px-4
                    py-4
                  "
                />

                <button
                  type="submit"
                  className="
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    px-8
                    py-4
                    rounded-xl
                    font-semibold
                    flex
                    items-center
                    gap-2
                  "
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}

            <div>
              <div className="bg-orange-50 rounded-3xl p-8">
                <h3 className="text-3xl font-bold">Let's Connect</h3>

                <p className="mt-4 text-gray-600">
                  Reach us through your preferred channel.
                </p>

                <div className="space-y-6 mt-8">
                  <div className="flex gap-4">
                    <Phone className="text-orange-500" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p>+91 80887 54355</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="text-orange-500" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p>support@Mysticpace.org</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="text-orange-500" />
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p>Chennai, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}

                <div className="mt-10">
                  <h4 className="font-semibold mb-4">Follow Us</h4>

                  <div className="flex gap-4">
                    <a href="#" className="p-3 rounded-full bg-white">
                      <Facebook />
                    </a>

                    <a href="#" className="p-3 rounded-full bg-white">
                      <Instagram />
                    </a>

                    <a href="#" className="p-3 rounded-full bg-white">
                      <Linkedin />
                    </a>

                    <a href="#" className="p-3 rounded-full bg-white">
                      <Youtube />
                    </a>
                  </div>
                </div>
              </div>

              {/* Help Cards */}

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white border rounded-2xl p-6">
                  <MessageCircle className="text-orange-500" size={32} />

                  <h4 className="font-bold mt-4">Live Chat</h4>

                  <p className="text-gray-600 text-sm mt-2">
                    Quick support for donors and fundraisers.
                  </p>
                </div>

                <div className="bg-white border rounded-2xl p-6">
                  <Headphones className="text-orange-500" size={32} />

                  <h4 className="font-bold mt-4">Help Center</h4>

                  <p className="text-gray-600 text-sm mt-2">
                    Find answers to common questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <iframe
              title="location"
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
