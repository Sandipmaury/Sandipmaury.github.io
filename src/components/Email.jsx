import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";

export const Email = () => {
  const form = useRef();
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9bre1gu",
        "template_02iucmi",
        form.current,
        "AuLiQEA7MLCIuMhgL"
      )
      .then((result) => {
        toast({
          title: "Successfull!",
          description: "Your send to Sandip Maurya successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: "Failed",
          description:
            "Something went wrong. Please try on below email address.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <FormControl mb="10px" isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="text" name="user_name" placeholder="Enter your name" />
      </FormControl>
      <FormControl mb="10px" isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" name="user_email" placeholder="Enter your email" />
      </FormControl>
      <FormControl mb="10px" isRequired>
        <FormLabel>Message</FormLabel>
        <Textarea name="message" placeholder="Enter your message" />
      </FormControl>
      <Input
        _hover={{ backgroundColor: "#e8f0fe" }}
        cursor="pointer"
        type="submit"
        value="Send"
      />
    </form>
  );
};
