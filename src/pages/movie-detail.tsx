import { useEffect } from "react";
import { Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchMovieData } from "../redux/movieDetailSlice";

import "react-loading-skeleton/dist/skeleton.css";

export const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.movieDetail);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieData(id));
    }
  }, [dispatch, id]);

  return (
    <div className="justify-content-center d-flex mt-4">
      <Card className="w-25 ">
        {selector.loading !== "succeeded" && selector.loading !== "failed" && (
          <Skeleton count={10} />
        )}
        <Card.Img
          variant="top"
          src={selector.data.Poster}
          alt="poster"
          height={400}
          className="w-auto"
        />
        <Card.Body>
          <Card.Title>{selector.data.Title}</Card.Title>
          {Object.entries(selector.data).map((item) => {
            return (
              <div className="mb-2">
                {item[0] !== "Poster" &&
                  item[0] !== "Title" &&
                  typeof item[1] === "string" && (
                    <>
                      <strong>{item[0]}: </strong>
                      {item[1]}
                    </>
                  )}
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
};
