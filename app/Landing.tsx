import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import { Users } from "lucide-react";
import { Star } from "lucide-react";
import { Search } from "lucide-react";

const Landing = () => {
  const stats = [
    {
      icon: <Building2 />,
      title: "Universities",
      count: "500+",
    },
    {
      icon: <Users />,
      title: "Student Reviews",
      count: "50K+",
    },
    {
      icon: <Star />,
      title: "Ratings",
      count: "4.8",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-7.5 max-w-2xl">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-bold">
            Your resource for <br />{" "}
            <span className="text-gray-600">college dorm reviews</span>{" "}
          </h1>
          <p className="text-muted-foreground text-xl">
            Discover honest reviews from real students about dorms, amenities,
            and campus life at universities nationwide.
          </p>
        </div>
        <div className="relative">
          <Input
            className="p-5.5 pl-12 text-lg"
            type="text"
            placeholder="Search for a dorm..."
          />
          <Search className="text-muted-foreground w-5 h-5 absolute  top-1/2 -translate-y-1/2 left-5" />
        </div>
        <div>
          <Button className="py-5.5 px-10">Browse All School</Button>
        </div>
        <div className="flex justify-between items-center ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col gap-1.5 items-center justify-center "
            >
              <div className="bg-gray-200 rounded-lg text-gray-600  p-3">
                {stat.icon}
              </div>
              <div className="font-bold text-2xl">{stat.count}</div>
              <div className="text-muted-foreground font-semibold ">
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
