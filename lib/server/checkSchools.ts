export const checkSchools = async (schoolName: string) => {
  try {
    const res = await fetch(`/api/check-schools?school=${schoolName}`);

    if (!res.ok) {
      throw new Error("Failed to check school");
    }

    const data = await res.json();

    return data.exist;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const checkDorms = async (slug: string, dormName: string) => {
  try {
    const res = await fetch(`/api/check-dorms/${slug}?dormName=${dormName}`);
    if (!res.ok) {
      throw new Error("Failed to check dorm");
    }
    const data = await res.json();
    return data.exist;
  } catch (error) {
    console.log(error);
    return null;
  }
};
