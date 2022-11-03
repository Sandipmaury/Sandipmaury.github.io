import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { NavLinks } from "../../utils/Constants";
import { Resume } from "../about/Resume";

export const NavOnSmallDevice = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Show below="md">
      <Icon boxSize="2rem" color="#ffffff" as={FiMenu} onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" size="xs" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="#ffffff" />
          <DrawerBody
            fontWeight="medium"
            fontSize={20}
            color="#ffffff"
            bg="#0c0b48"
          >
            {NavLinks?.map((nav, index) => {
              return (
                <NavLink key={index} to={nav?.link}>
                  {({ isActive }) =>
                    isActive ? (
                      <Text mt="20px" onClick={onClose} color="#fe3e57">
                        {nav?.title}
                      </Text>
                    ) : (
                      <Text
                        transition="0.2s"
                        mt="20px"
                        onClick={onClose}
                        _hover={{ transition: "0.2s", color: "#fe3e57" }}
                      >
                        {nav?.title}
                      </Text>
                    )
                  }
                </NavLink>
              );
            })}
            <Text
              transition="0.2s"
              mt="20px"
              onClick={onClose}
              _hover={{ transition: "0.2s", color: "#fe3e57" }}
            >
              <Resume />
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Show>
  );
};
