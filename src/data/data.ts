export interface IItem {
  //число, обязательный идентификатор - выдается автоматически при сохранении
  id: number;
  // строка, не более 50 символов
  title: string;
  // markdown произвольного размера
  description: string;
  // обязательное поле
  published: boolean;
  // nullable дата}
  published_from: Date;
}

export const getMockData = (): IItem[] => {
  const res = [];
  for (let i = 0; i < 20; i++) {
    res.push({
      id: i,
      title: `Заголовок ${i}`,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      published: true,
      published_from: new Date(),
    });
  }
  return res;
};
