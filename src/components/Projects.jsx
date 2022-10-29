import { Box, Skeleton } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/Actions";
import { Items } from "./Items";

function Projects() {
  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const isLoding = useSelector((store) => store.isLoding);

  useEffect(() => {
    const source = axios.CancelToken.source();
    dispatch(getData());
    return () => source.cancel();
  }, [dispatch]);
  return (
    <Box h="100%" overflowY="auto" scrollBehavior="smooth" gap="2rem">
      {data?.map((el, index) => {
        return isLoding ? (
          <Skeleton key={index}>
            <Items />
          </Skeleton>
        ) : (
          <Items item={el} key={index} />
        );
      })}
    </Box>
  );
}

export default Projects;
