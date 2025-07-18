import { fetchPendingSchools } from "@/lib/api/school";
import Link from "next/link";
import React from "react";

const AdminPage = async () => {
  const pendingSchools = await fetchPendingSchools();

  return (
    <div className="mx-5">
      <h1 className="text-2xl font-bold">Pending Requests</h1>
      <div>
        {pendingSchools.map((school) => (
          <Link href={`/dorms/${school.slug}`}>
            <div key={school.id}>
              <p>{school.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
