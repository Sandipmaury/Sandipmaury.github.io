import { Box, Grid, Skeleton } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/Actions";
import { Items } from "./Items";

function Constructor({ endPoint }) {
  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const isLoding = useSelector((store) => store.isLoding);

  useEffect(() => {
    const source = axios.CancelToken.source();
    dispatch(getData(endPoint));
    return () => source.cancel();
  }, [endPoint, dispatch]);
  return (
    <Grid
      h="100%"
      direction="row"
      gridTemplateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
      ]}
      gap="2rem"
      overflowY="auto"
      p="10px"
      justifySelf="center"
    >
      {data?.map((el, index) => {
        return isLoding ? (
          <Skeleton key={index}>
            <Items />
          </Skeleton>
        ) : (
          <Box key={index}>
            <Items item={el} id={index} />
          </Box>
        );
      })}
    </Grid>
  );
}

export default Constructor;
