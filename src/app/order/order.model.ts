export class Order {
  id: string;
  returnOrderId: string;
  status: string;
  notaFiscal: string;
  productName: string;
  serialNumber: string;
  description: string | null;
  name: string | null;
  createdOn: Date;
  updatedOn: Date;
}

export class OrderDetails extends Order {}

export interface OrderCreateDto {
  title: string;
  body: string;
}
