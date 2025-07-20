export const FetchPendingSchools = async () => {
  try {
    const res = await fetch(`/api/admin-schools`);
    if (!res.ok) {
      throw new Error("Failed to fetch schools");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch schools");
  }
};

export const FetchPendingDorms = async () => {
  try {
    const res = await fetch(`/api/admin-dorms`);
    if (!res.ok) {
      throw new Error("Failed to fetch dorms");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch dorms");
  }
};

export const FetchPendingReviews = async () => {
  try {
    const res = await fetch(`/api/admin-reviews`);
    if (!res.ok) {
      throw new Error("Failed to fetch reviews");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch reviews");
  }
};

export const updatePendingSchools = async (id: string) => {
  try {
    const res = await fetch(`/api/admin-schools/${id}`, {
      method: "POST",
    });

    if (!res.ok) {
      throw new Error("Failed to update");
    }

    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updatePendingDorms = async (id: string) => {
  try {
    const res = await fetch(`/api/admin-dorms/${id}`, {
      method: "POST",
    });
    if (!res.ok) {
      throw new Error("Failed to update dorm");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updatePendingReview = async (id: string) => {
  try {
    const res = await fetch(`/api/admin-reviews/${id}`, {
      method: "POST",
    });
    if (!res.ok) {
      throw new Error("Failed to update review");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
