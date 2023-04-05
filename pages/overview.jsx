import React from "react";
import Galleries from "@/components/overview/Galleries";
import Hero from "@/components/overview/Hero";
import Services from "@/components/overview/Services";
import { GraphQLClient } from "graphql-request";
import { GET_ALL_QUERY } from "@/services";

export async function getStaticProps() {
  const { categories } = await new GraphQLClient(
    `${process.env.HYGRAPH_URL}`
  ).request(GET_ALL_QUERY);
  console.log(data.categories);
  return {
    props: {
      categories: data.categories,
    },
  };
}
export default function Overview({ categories }) {
  console.log(categories);

  return (
    <div>
      <Hero />
      <Services />
      <Galleries />
    </div>
  );
}
