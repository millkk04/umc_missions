import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: { language: "ko" },
            headers: {
              accept: "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmY5YWVjMmViMDNjODYzNWIwYTcxNDhmNTc1Mzg5YyIsIm5iZiI6MTcyOTc4NzM4NC40NTU0MTIsInN1YiI6IjY3MTY4YzgxYmQ5MWM4MzgyOWQ3ODcwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vparVx0UK3Me8OjVCarIfH0pQ0f_prQGcSHaO1-V0WA`,
            },
          }
        );
        setMovie(movieResponse.data);

        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmY5YWVjMmViMDNjODYzNWIwYTcxNDhmNTc1Mzg5YyIsIm5iZiI6MTcyOTc4NzM4NC40NTU0MTIsInN1YiI6IjY3MTY4YzgxYmQ5MWM4MzgyOWQ3ODcwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vparVx0UK3Me8OjVCarIfH0pQ0f_prQGcSHaO1-V0WA`,
            },
          }
        );
        setCredits(creditsResponse.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <LoadingMessage>로딩 중...</LoadingMessage>;
  if (error) return <ErrorMessage>오류가 발생했습니다: {error}</ErrorMessage>;

  const director = credits?.crew?.find((person) => person?.job === "Director") || { name: "정보 없음" };
  const cast = credits?.cast?.slice(0, 5) || [];

  return (
    <DetailContainer>
      <Poster src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      <Overlay>
        {movie ? (
          <>
            <Title>{movie.title}</Title>
            <Overview>{movie.overview || "개요 정보 없음"}</Overview>
            <Director>감독: {director?.name}</Director>
            <CastContainer>
              <CastTitle>출연진:</CastTitle>
              <CastList>
                {cast.length > 0 ? (
                  cast.map((actor) => (
                    <CastItem key={actor.id}>
                      <ProfileImage src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                      {actor.name}
                    </CastItem>
                  ))
                ) : (
                  <CastItem>출연진 정보 없음</CastItem>
                )}
              </CastList>
            </CastContainer>
          </>
        ) : (
          <ErrorMessage>영화 정보를 불러올 수 없습니다.</ErrorMessage>
        )}
      </Overlay>
    </DetailContainer>
  );
};

export default MovieDetail;

// 스타일 정의
const DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background-color: black;
  color: #fff;
  min-height: 100vh;
`;
const Poster = styled.img`
  width: 300px;
  height: auto;
  margin-right: 40px; /* 간격 조정 */
  border-radius: 10px;
  object-fit: cover;
`;

const Overlay = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Director = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

const CastContainer = styled.div`
  margin-top: 20px;
`;

const CastTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CastList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CastItem = styled.li`
  font-size: 18px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%; /* 원 모양으로 변경 */
  margin-right: 10px;
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #fff;
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: red;
`;