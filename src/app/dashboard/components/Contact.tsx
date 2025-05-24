import { ContactDetailBox } from "@/components/atoms/contactbox/ContactDetailBox";
import { ContactForm } from "@/app/dashboard/components/ContactForm";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-customblue text-white py-[205.5px] px-8 "
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 w-[70%]">
        {/* Contact Info */}
        <div className="font-manrope">
          <h3 className="text-5xl  font-semibold leading-[38px] ">
            Get in touch
          </h3>
          <div className="border border-b-[3px] border-white w-12 mt-10"></div>
          <p className="mt-10 font-normal text-2xl">For general enquiries</p>

          <div className="space-y-6 mt-10 font-manrope font-normal">
            <ContactDetailBox
              label="Address :"
              value="110, 11th Road, Chembur, Mumbai - 400071"
            />
            <ContactDetailBox
              label="Phone :"
              value="+91 22 25208622"
              className="pt-[30px]"
            />
            <ContactDetailBox
              label="Email :"
              value="info@supremegroup.co.in"
              className="pt-[30px]"
            />
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};
