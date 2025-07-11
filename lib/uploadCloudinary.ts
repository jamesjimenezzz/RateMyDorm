interface Props {
  files: File[];
  cloudName: string;
  uploadPreset: string;
}

export const uploadCloudinary = async ({
  files,
  cloudName,
  uploadPreset,
}: Props): Promise<string[]> => {
  const uploaders = files.map((file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    return fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
  });

  const result = await Promise.all(uploaders);
  return result.map((res) => res.secure_url);
};
