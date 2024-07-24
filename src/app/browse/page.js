"use client";

import UnauthPage from "@/components/unauth-page";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import ManageAccouts from "@/components/manage-accounts";
import CommonLayout from "@/components/common-layout";
import {
  getAllfavorites,
  getPopularMedias,
  getTopratedMedias,
  getTrendingMedias,
} from "@/utils";
import CircleLoader from "@/components/circle-loader";

export default function Browse() {
  const {
    loggedInAccount,
    mediaData,
    setMediaData,
    setPageLoader,
    pageLoader,
  } = useContext(GlobalContext);

  const { data: session } = useSession();

  console.log("session", session);

  useEffect(() => {
    async function getAllMedias() {
      const trendingTvShows = await getTrendingMedias("tv");
      const topratedTvShows = await getTopratedMedias("tv");
      const popularTvShows = await getPopularMedias("tv");

      const trendingMovieShows = await getTrendingMedias("movie");
      const popularMovieShows = await getPopularMedias("movie");
      const topratedMovieShows = await getTopratedMedias("movie");

      setMediaData([
        ...[
          {
            title: "Trending TV Shows",
            medias: trendingTvShows,
          },
          {
            title: "Popular TV Shows",
            medias: popularTvShows,
          },
          {
            title: "Top rated TV Shows",
            medias: topratedTvShows,
          },
        ].map((item) => ({
          ...item,
          medias: item.medias.map((mediaItem) => ({
            ...mediaItem,
            type: "tv",
          })),
        })),
        ...[
          {
            title: "Trending Movies",
            medias: trendingMovieShows,
          },
          {
            title: "Popular Movies",
            medias: popularMovieShows,
          },
          {
            title: "Top rated Movies",
            medias: topratedMovieShows,
          },
        ].map((item) => ({
          ...item,
          medias: item.medias.map((mediaItem) => ({
            ...mediaItem,
            type: "movie",
          })),
        })),
      ]);

      setPageLoader(false);
    }

    getAllMedias();
  }, []);

  if (session === null) return <UnauthPage />;
  if (loggedInAccount === null) return <ManageAccouts />;
  if (pageLoader) return <CircleLoader />;

  console.log(mediaData);
  return (
    <main className="flex min-h-screen flex-col">
      <CommonLayout mediaData={mediaData} />
    </main>
  );
}
