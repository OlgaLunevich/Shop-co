export type DataBaseFooter = {
    title: string,
    positions: string[],    
}[];

export type Images = {
    src: string,
    alt: string,
}[];

export type Labels = {
    src: string,
    alt: string
}[];

export type StatisticData = {
    amount: string,
    description: string,
}[];

export type Category = {
    slug: string,
    name: string,
    url: string,
};

  export type Product = {
    id: number,
    title: string,
    images: string[],
    rating: number,
    price: number,
    discountPercentage: number,
    brand: string,
    stock: number,
    category: string,
    description: string,

};
  