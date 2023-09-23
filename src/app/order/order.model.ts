export interface Order {
  id: string;
  title: string;
  body: string;
}

export interface OrderCreateDto {
  title: string;
  body: string;
}
