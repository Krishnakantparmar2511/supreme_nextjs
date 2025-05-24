"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactFormData,
  contactFormSchema,
} from "@/app/dashboard/utils/validations/ContactZod";
import { TextInput } from "@/components/atoms/input/TextInput";
export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      reset();

      alert(`Message sent successfully by ${data.fullName} `);
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 " noValidate>
        {/* FullName */}
        <TextInput
          name="fullName"
          placeholder="Full name"
          register={register}
          type="text"
          error={errors.fullName}
        />

        {/* Email Field */}
        <TextInput
          name="email"
          placeholder="E-mail"
          register={register}
          type="email"
          error={errors.email}
          className="pt-[70px]"
        />

        {/* Subject Field */}
        <TextInput
          name="subject"
          placeholder="Subject"
          register={register}
          type="text"
          error={errors.subject}
          className="pt-[70px]"
        />

        {/* Message Field */}
        <TextInput
          name="message"
          placeholder="Message"
          register={register}
          type="text"
          className="pt-[70px]"
        />

        {/* Submit Button */}
        <div className="pt-[49px]">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-[51px] py-[14px] rounded-full font-medium transition-colors ${
              isSubmitting
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-white text-blue-600 hover:bg-gray-100"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};
