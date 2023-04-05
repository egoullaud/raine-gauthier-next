import React from "react";
import Galleries from "@/components/overview/Galleries";
import Hero from "@/components/overview/Hero";
import Services from "@/components/overview/Services";
import { GraphQLClient, gql } from "graphql-request";

// Create a GraphQL client with the endpoint
const hygraph = new GraphQLClient(
  "https://api-ca-central-1.hygraph.com/v2/clg1dpl1r89y501ue0ava00ft/master"
);

const GET_ALL_CATEGORIES = gql`
  {
    categories {
      title
      slug
      id
    }
  }
`;

export async function getServerSideProps() {
  const { categories } = await hygraph.request(GET_ALL_CATEGORIES);

  return {
    props: {
      categories,
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
