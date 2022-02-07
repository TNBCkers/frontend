import React from "react";
import ServiceCard from "./ServiceCard";
import { faker } from "@faker-js/faker";

const thumbnail = faker.image.abstract(415, 340);
const avatar = faker.image.avatar();

const ServicesGrid = () => (
  <div className="grid grid-cols-1 gap-10 my-20 md:grid-cols-3">
    <ServiceCard
      thumbnail={thumbnail}
      avatar={avatar}
      name="Arth"
      category="App Development"
      title="I will make a app for you ..."
      price={200}
    />
    <ServiceCard
      thumbnail={thumbnail}
      avatar={avatar}
      name="Arth"
      category="App Development"
      title="I will make a app for you ..."
      price={200}
    />
    <ServiceCard
      thumbnail={thumbnail}
      avatar={avatar}
      name="Arth"
      category="App Development"
      title="I will make a app for you ..."
      price={200}
    />
    <ServiceCard
      thumbnail={thumbnail}
      avatar={avatar}
      name="Arth"
      category="App Development"
      title="I will make a app for you ..."
      price={200}
    />
    <ServiceCard
      thumbnail={thumbnail}
      avatar={avatar}
      name="Arth"
      category="App Development"
      title="I will make a app for you ..."
      price={200}
    />
    <ServiceCard
      thumbnail={thumbnail}
      avatar={avatar}
      name="Arth"
      category="App Development"
      title="I will make a app for you ..."
      price={200}
    />
    <ServiceCard
      thumbnail={thumbnail}
      avatar={avatar}
      name="Arth"
      category="App Development"
      title="I will make a app for you ..."
      price={200}
    />
    <ServiceCard
      thumbnail={thumbnail}
      avatar={avatar}
      name="Arth"
      category="App Development"
      title="I will make a app for you ..."
      price={200}
    />
    <ServiceCard
      thumbnail={thumbnail}
      avatar={avatar}
      name="Arth"
      category="App Development"
      title="I will make a app for you ..."
      price={200}
    />
  </div>
);

export default ServicesGrid;
