import React from "react";
import { useQuery, gql } from "@apollo/client";

const ITEMS = gql`
query {
    items {
      itemname
      description
      ID
    }
  }
`;

export default function Items() {
    const { loading, error, data } = useQuery(ITEMS);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return data.items.map(({ ID, itemname, description }) => (
        <div key={ID}>
            <h4>hello</h4>
            <h3>{itemname}</h3>
            <p>{description}</p>
        </div>
    ))
}