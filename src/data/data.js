export const getMockData = () => {
  const res = [];
  for (let i = 0; i < 20; i++) {
    res.push({
      id: i,
      title: `Заголовок ${i}`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      published: true,
      published_from: new Date(),
    });
  }
  return res;
};
