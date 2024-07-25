"use client";

import UnauthPage from "@/components/unauth-page";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import ManageAccouts from "@/components/manage-accounts";
import CommonLayout from "@/components/common-layout";
import { getTVorMoviesByGenre } from "@/utils";
import CircleLoader from "@/components/circle-loader";

export default function Tv() {
  const {
    loggedInAccount,
    mediaData,
    setMediaData,
    setPageLoader,
    pageLoader,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getAllMedias() {
      const actionAdventure = await getTVorMoviesByGenre("tv", 10759);
      const crime = await getTVorMoviesByGenre("tv", 80);
      const comedy = await getTVorMoviesByGenre("tv", 35);
      const family = await getTVorMoviesByGenre("tv", 10751);
      const mystery = await getTVorMoviesByGenre("tv", 9648);
      const reality = await getTVorMoviesByGenre("tv", 10764);
      const scifiAndFantasy = await getTVorMoviesByGenre("tv", 10765);
      const war = await getTVorMoviesByGenre("tv", 10768);
      const western = await getTVorMoviesByGenre("tv", 37);
      const dramaMovies = await getTVorMoviesByGenre("tv", 18);
      // const allFavorites = await getAllfavorites(
      //   session?.user?.uid,
      //   loggedInAccount?._id
      // );
      setMediaData(
        [
          {
            title: "Action and adventure",
            medias: actionAdventure,
          },
          {
            title: "Crime",
            medias: crime,
          },
          {
            title: "Comedy",
            medias: comedy,
          },
          {
            title: "Family",
            medias: family,
          },
          {
            title: "Mystery",
            medias: mystery,
          },
          {
            title: "Reality",
            medias: reality,
          },
          {
            title: "Sci-Fi and Fantasy",
            medias: scifiAndFantasy,
          },
          {
            title: "Western",
            medias: western,
          },
          {
            title: "War",
            medias: war,
          },
          {
            title: "Dramas",
            medias: dramaMovies,
          },
        ].map((item) => ({
          ...item,
          medias: item.medias.map((mediaItem) => ({
            ...mediaItem,
            type: "tv",
            addedToFavorites: false,
          })),
        }))
      );
      setPageLoader(false);
    }

    getAllMedias();
  }, [loggedInAccount]);

  const { data: session } = useSession();
  if (session === null) return <UnauthPage />;

  if (loggedInAccount === null) return <ManageAccouts />;

  if (pageLoader) return <CircleLoader />;

  return (
    <main className="flex min-h-screen flex-col">
      <CommonLayout mediaData={mediaData} />
    </main>
  );
}
